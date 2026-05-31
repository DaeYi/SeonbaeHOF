// Profile page logic — loads the markdown profile and renders it.

(function () {
  const { el, clear, renderTrustedHtml } = window.DOMx;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('id');
  const container = document.getElementById('profile-container');

  function showError(msg, hint) {
    clear(container);
    container.appendChild(el('a', { href: 'index.html', class: 'profile-nav-back' }, 'Back to the Hall'));
    container.appendChild(el('p', { style: 'margin-top:2rem;color:var(--text-secondary);' }, msg));
    if (hint) container.appendChild(el('p', { style: 'margin-top:1rem;color:var(--text-tertiary);font-size:0.875rem;' }, hint));
  }

  if (!slug) return showError('Profile not specified.');

  const profile = PROFILES.find(p => p.slug === slug);
  if (!profile) return showError('Profile not found.');

  document.title = `${profile.name} — Seonbae Hall of Fame`;

  fetch(`profiles/${slug}.md`)
    .then(res => {
      if (!res.ok) throw new Error('Profile not found');
      return res.text();
    })
    .then(md => {
      // Strip everything up to and including the "*In memoriam.*" line so we render our own header.
      const memoriamIndex = md.indexOf('*In memoriam.*');
      const contentStart = memoriamIndex !== -1
        ? md.indexOf('\n', memoriamIndex) + 1
        : 0;
      const content = md.slice(contentStart).trim();

      clear(container);

      // Back link
      container.appendChild(el('a', { href: 'index.html', class: 'profile-nav-back' }, 'Back to the Hall'));

      // Header
      const header = el('header', { class: 'profile-header' },
        el('div', { class: 'hero-mark' }, '선배'),
        el('h1', { class: 'profile-name' }, profile.name),
        el('div', { class: 'profile-korean' }, profile.korean),
        el('div', { class: 'profile-meta' },
          el('span', null, `${profile.birth}–${profile.death}`),
          el('span', { class: 'profile-meta-divider' }, '·'),
          el('span', null, profile.field)
        ),
        el('div', { class: 'profile-memoriam' }, 'In memoriam')
      );
      container.appendChild(header);

      // Markdown content — rendered into a wrapper via DOMParser (trusted source).
      const article = el('article', { class: 'profile-content' });
      renderTrustedHtml(article, marked.parse(content));
      container.appendChild(article);

      // Chat CTA
      const cta = el('aside', { class: 'profile-cta' },
        el('h3', null, `Speak with ${profile.name.split(' ')[0]}`),
        el('p', null, `Open a reflective conversation drawn from the documented decisions, values, and writings of ${profile.name}.`),
        el('button', {
          class: 'btn btn-primary',
          onclick: () => window.SeonbaeChat.openWithSlug(profile.slug)
        }, '선배 Begin reflection')
      );
      container.appendChild(cta);
    })
    .catch(err => {
      showError(
        `Could not load this profile. ${err.message}`,
        'Note: profiles load via fetch from local .md files. If you opened this page directly via file://, the browser may block the request. Run a local server (e.g., python3 -m http.server) or deploy to GitHub Pages.'
      );
    });
})();
