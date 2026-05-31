// Homepage logic — renders the Hall of Fame grid and handles era filtering.

(function () {
  const { el, clear } = window.DOMx;
  const grid = document.getElementById('profile-grid');
  const filters = document.querySelectorAll('.filter-btn');

  if (!grid) return;

  function buildCard(p) {
    return el('a', { href: `profile.html?id=${p.slug}`, class: 'profile-card' },
      el('div', { class: 'card-name' }, p.name),
      el('div', { class: 'card-korean' }, p.korean),
      el('div', { class: 'card-meta' },
        el('span', { class: 'card-dates' }, `${p.birth}–${p.death}`),
        el('span', { class: 'card-meta-divider' }, '·'),
        el('span', { class: 'card-field' }, p.field)
      ),
      el('div', { class: 'card-frame' }, p.frame),
      el('div', { class: 'card-memoriam' }, 'In memoriam')
    );
  }

  function renderGrid(filter) {
    const visible = filter === 'all'
      ? PROFILES
      : PROFILES.filter(p => p.era === filter);

    clear(grid);
    visible.forEach(p => grid.appendChild(buildCard(p)));
  }

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGrid(btn.dataset.filter);
    });
  });

  renderGrid('all');
})();
