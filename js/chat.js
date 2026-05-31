// Chat widget — floating button, overlay, Seonbae selector, conversation view.
// Demo mode: responses are pre-written and themed, with a clear AI-reflection disclaimer.
// All user-supplied text is inserted via text nodes (never parsed as HTML).

(function () {
  const { el, clear } = window.DOMx;

  let currentSeonbae = null;
  let overlay, body, inputRow, input;

  function init() {
    // FAB
    const fab = el('button', { class: 'chat-fab', onclick: open },
      el('span', { class: 'chat-fab-mark' }, '선배'),
      el('span', { class: 'chat-fab-label' }, 'Speak to a Seonbae')
    );
    document.body.appendChild(fab);

    // Overlay + panel
    overlay = el('div', { class: 'chat-overlay', onclick: e => { if (e.target === overlay) close(); } },
      el('div', { class: 'chat-panel' },
        el('div', { class: 'chat-header' },
          el('div', null,
            el('div', { class: 'chat-header-title' }, 'Speak with a Seonbae'),
            el('div', { class: 'chat-header-subtitle' }, 'A reflective conversation, in honor')
          ),
          el('button', { class: 'chat-close', 'aria-label': 'Close', onclick: close }, '×')
        ),
        el('div', { class: 'chat-body', id: 'chat-body' }),
        el('div', { class: 'chat-input-row', id: 'chat-input-row', style: 'display:none;' },
          el('input', {
            class: 'chat-input',
            id: 'chat-input',
            placeholder: 'Ask for advice, perspective, or reflection...',
            onkeydown: e => { if (e.key === 'Enter') sendMessage(); }
          }),
          el('button', { class: 'chat-send', onclick: sendMessage }, 'Send')
        )
      )
    );
    document.body.appendChild(overlay);

    body = overlay.querySelector('#chat-body');
    inputRow = overlay.querySelector('#chat-input-row');
    input = overlay.querySelector('#chat-input');

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) close();
    });
  }

  function open() {
    overlay.classList.add('active');
    showSelector();
  }

  function close() {
    overlay.classList.remove('active');
    currentSeonbae = null;
  }

  function buildDisclaimer(extraNode) {
    const node = el('div', { class: 'chat-disclaimer' });
    node.appendChild(el('strong', null, 'AI Reflection — Demo Mode. '));
    node.appendChild(document.createTextNode(
      'Responses are drawn from the documented life, decisions, and values of each Seonbae as recorded in their profile and source materials. They are not the Seonbae’s actual words. This experience is a proof of concept; the production version would carry explicit consent from descendants and clearly distinguish documented quotation from inferred reflection.'
    ));
    if (extraNode) node.appendChild(extraNode);
    return node;
  }

  function showSelector() {
    inputRow.style.display = 'none';
    clear(body);

    body.appendChild(buildDisclaimer());
    body.appendChild(el('h3', {
      style: 'font-family: var(--serif); font-size: 1.25rem; margin-bottom: 1rem; font-weight: 500;'
    }, 'Choose a Seonbae'));

    const grid = el('div', { class: 'chat-selector-grid' });
    PROFILES.filter(p => CHAT_DATA[p.slug]).forEach(p => {
      const card = el('button', { class: 'chat-selector-card', onclick: () => selectSeonbae(p.slug) },
        el('div', { class: 'chat-selector-name' }, p.name),
        el('div', { class: 'chat-selector-meta' }, `${p.korean} · ${p.birth}–${p.death}`)
      );
      grid.appendChild(card);
    });
    body.appendChild(grid);
  }

  function selectSeonbae(slug) {
    currentSeonbae = slug;
    const profile = PROFILES.find(p => p.slug === slug);
    const chat = CHAT_DATA[slug];

    inputRow.style.display = 'flex';
    clear(body);

    // Short-form disclaimer with change button
    const changeBtn = el('button', {
      class: 'chat-change',
      style: 'float:right;',
      onclick: showSelector
    }, 'Change Seonbae');
    const disclaimer = el('div', { class: 'chat-disclaimer' });
    disclaimer.appendChild(el('strong', null, 'AI Reflection — Demo Mode. '));
    disclaimer.appendChild(document.createTextNode(
      `Reflections drawn from ${profile.name}’s documented life and decisions. Not the Seonbae’s actual words. `
    ));
    disclaimer.appendChild(changeBtn);
    body.appendChild(disclaimer);

    // Opening Seonbae message
    body.appendChild(buildSeonbaeMessage(profile, chat.default));

    // Suggested questions
    const suggestionsWrapper = el('div', { style: 'margin-top: 1.5rem;' },
      el('div', { class: 'chat-message-label' }, 'Suggested questions'),
      (() => {
        const wrap = el('div', { class: 'chat-suggestions', id: 'chat-suggestions' });
        chat.suggested.forEach(q => {
          wrap.appendChild(el('button', {
            class: 'chat-suggestion',
            onclick: () => {
              input.value = q;
              sendMessage();
            }
          }, q));
        });
        return wrap;
      })()
    );
    body.appendChild(suggestionsWrapper);

    body.appendChild(el('div', { id: 'chat-history' }));

    body.scrollTop = 0;
  }

  function buildUserMessage(text) {
    return el('div', { class: 'chat-message chat-message-user' },
      el('div', { class: 'chat-message-bubble' }, text)  // text node — never parsed as HTML
    );
  }

  function buildSeonbaeMessage(profile, text) {
    return el('div', { class: 'chat-message chat-message-seonbae' },
      el('div', { class: 'chat-message-label' }, `${profile.name}, ${profile.birth}–${profile.death}`),
      el('div', { class: 'chat-message-bubble' }, text)
    );
  }

  function sendMessage() {
    const text = input.value.trim();
    if (!text || !currentSeonbae) return;

    const profile = PROFILES.find(p => p.slug === currentSeonbae);
    const history = document.getElementById('chat-history');

    const suggestions = document.getElementById('chat-suggestions');
    if (suggestions) suggestions.style.display = 'none';

    history.appendChild(buildUserMessage(text));
    input.value = '';
    body.scrollTop = body.scrollHeight;

    setTimeout(() => {
      const reply = pickResponse(currentSeonbae, text);
      history.appendChild(buildSeonbaeMessage(profile, reply));
      body.scrollTop = body.scrollHeight;
    }, 700);
  }

  // Pick a themed response by simple keyword scoring.
  function pickResponse(slug, question) {
    const chat = CHAT_DATA[slug];
    const themes = chat.themes;
    const q = question.toLowerCase();

    const keywords = {
      family: ['family', 'kids', 'children', 'parent', 'mother', 'father', 'wife', 'husband', 'home'],
      sacrifice: ['sacrifice', 'cost', 'give up', 'lose', 'loss', 'pain'],
      identity: ['identity', 'who am i', 'korean', 'american', 'belong', 'between', 'hyphen', 'culture'],
      women: ['woman', 'women', 'female', 'feminism', 'gender'],
      force: ['force', 'fight', 'violence', 'war', 'army', 'soldier', 'military', 'arms'],
      conviction: ['conviction', 'belief', 'principle', 'value', 'right', 'wrong'],
      strategy: ['strategy', 'plan', 'tactics', 'patient', 'wait'],
      america: ['america', 'us', 'states', 'country'],
      rejection: ['no', 'reject', 'turn down', 'denied', 'refuse', 'refused', 'closed door'],
      legacy: ['legacy', 'remember', 'long', 'history', 'forever'],
      leadership: ['lead', 'leader', 'command', 'authority', 'manage', 'team'],
      'after-the-war': ['after', 'post', 'retire', 'second act', 'later'],
      first: ['first', 'pioneer', 'breakthrough', 'trailblaze'],
      work: ['work', 'job', 'profession', 'craft', 'career'],
      hawaii: ['hawaii', 'plantation', 'kauai', 'oahu'],
      representation: ['represent', 'symbol', 'face', 'visibility'],
      duration: ['stay', 'years', 'tenure', 'lifetime'],
      persistence: ['persist', 'keep going', 'try again', 'again', 'continue'],
      journalism: ['journalism', 'reporter', 'press', 'news', 'story', 'write'],
      mentorship: ['mentor', 'teach', 'student', 'next generation', 'young'],
      community: ['community', 'people', 'together', 'collective'],
      childhood: ['child', 'kid', 'school', 'growing up'],
      gratitude: ['grateful', 'thank', 'gratitude', 'appreciate', 'lucky'],
      writing: ['write', 'wrote', 'memoir', 'book', 'tell'],
      century: ['century', '100', 'old', 'time'],
      leaving: ['leave', 'left', 'depart', 'walk away', 'quit', 'give up'],
      service: ['serve', 'service', 'duty', 'help'],
      money: ['money', 'wealth', 'rich', 'fortune', 'million', 'capital'],
      coalition: ['coalition', 'unity', 'enemy', 'opposition', 'disagree'],
      vision: ['vision', 'dream', 'future', 'imagine'],
      partnership: ['partner', 'collaborate'],
      quiet: ['quiet', 'hidden', 'background', 'unseen', 'modest'],
      'the-petition': ['petition', 'roosevelt', 'oyster bay', 'meeting'],
      'little-tokyo': ['little tokyo', 'japanese', 'enemy', 'colonize'],
      'korea-city': ['korea city', 'never built', 'unbuilt', 'dream'],
      deportation: ['deport', 'mccarthy', 'communist', 'threat'],
      bridge: ['bridge', 'connect', 'translate', 'between'],
      dance: ['dance', 'arts', 'culture', 'tradition'],
      institution: ['institution', 'organization', 'build', 'last'],
      youth: ['early', 'first job', 'twenties'],
      rhee: ['rhee', 'syngman', 'president', 'politics'],
      organizing: ['organize', 'organizing', 'movement', 'group'],
      diaspora: ['diaspora', 'overseas', 'abroad', 'away from home'],
      factions: ['faction', 'split', 'sides'],
      clinical: ['clinic', 'medicine', 'patient', 'doctor', 'treat'],
      change: ['change', 'transform', 'shift'],
      'chol-soo-lee': ['chol soo', 'wrongful', 'death row', 'innocent'],
      wealth: ['rich'],
      humility: ['humility', 'humble'],
      father: ['dad'],
      casting: ['cast', 'role', 'play', 'acting', 'hollywood'],
      longevity: ['decades', 'lifetime'],
      starting: ['start', 'begin', 'launch'],
      losing: ['lose', 'lost', 'bankrupt', 'fail'],
      'second-act': ['second act', 'restart', 'rebuild', 'try again'],
      pragmatism: ['practical', 'reality', 'do'],
      'second-generation': ['second gen', 'born here', 'american-born'],
      subject: ['subject', 'topic', 'focus', 'theme'],
      infrastructure: ['infrastructure', 'support', 'foundation'],
      teaching: ['professor', 'classroom'],
      ministry: ['ministry', 'church', 'pastor', 'religion'],
      discipline: ['discipline', 'field', 'study', 'academic'],
      analysis: ['analysis', 'objective', 'rigorous', 'scholarly']
    };

    let bestTheme = null;
    let bestScore = 0;

    for (const theme in themes) {
      const kws = keywords[theme] || [];
      const score = kws.reduce((acc, k) => acc + (q.includes(k) ? 1 : 0), 0);
      if (score > bestScore) {
        bestScore = score;
        bestTheme = theme;
      }
    }

    if (bestTheme) return themes[bestTheme];

    const themeKeys = Object.keys(themes);
    if (themeKeys.length > 0) {
      const random = themeKeys[Math.floor(Math.random() * themeKeys.length)];
      return themes[random];
    }
    return chat.default;
  }

  window.SeonbaeChat = {
    openWithSlug(slug) {
      open();
      setTimeout(() => selectSeonbae(slug), 50);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
