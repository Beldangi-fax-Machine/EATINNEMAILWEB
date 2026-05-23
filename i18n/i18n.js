// EAT-INN Website Internationalization System
// Provides language detection, switching, and translation functions

(function() {
  'use strict';

  const STORAGE_KEY = 'eatinn_language';
  const DEFAULT_LANG = 'en';

  // Get browser language and find best match
  function detectBrowserLanguage() {
    const browserLangs = navigator.languages || [navigator.language || navigator.userLanguage];
    const availableLangs = Object.keys(translations.languages);

    for (const browserLang of browserLangs) {
      // Exact match
      if (availableLangs.includes(browserLang)) {
        return browserLang;
      }
      // Base language match (e.g., "en-US" -> "en")
      const baseLang = browserLang.split('-')[0];
      if (availableLangs.includes(baseLang)) {
        return baseLang;
      }
      // Regional variant match (e.g., "zh" -> "zh-Hans")
      const regional = availableLangs.find(l => l.startsWith(baseLang + '-'));
      if (regional) {
        return regional;
      }
    }
    return DEFAULT_LANG;
  }

  // Get current language from storage or detect
  function getCurrentLanguage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && translations.languages[stored]) {
      return stored;
    }
    return detectBrowserLanguage();
  }

  // Set language and save to storage
  function setLanguage(lang) {
    if (!translations.languages[lang]) {
      console.warn('Language not supported:', lang);
      return false;
    }
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
    updateLangSwitcher(lang);
    updateDocumentDirection(lang);
    return true;
  }

  // Get translation for a key
  function t(key, lang) {
    lang = lang || getCurrentLanguage();
    const str = translations.strings[key];
    if (!str) {
      console.warn('Translation key not found:', key);
      return key;
    }
    // Try exact language, then base language, then English
    return str[lang] || str[lang.split('-')[0]] || str[DEFAULT_LANG] || key;
  }

  // Apply translations to DOM elements with data-i18n attribute
  function applyTranslations(lang) {
    lang = lang || getCurrentLanguage();
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = t(key, lang);

      // Check for attribute-specific translations
      const attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        el.setAttribute(attr, translation);
      } else {
        el.textContent = translation;
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
  }

  // Update document direction for RTL languages
  function updateDocumentDirection(lang) {
    const langInfo = translations.languages[lang];
    if (langInfo && langInfo.rtl) {
      document.documentElement.dir = 'rtl';
      document.body.classList.add('rtl');
    } else {
      document.documentElement.dir = 'ltr';
      document.body.classList.remove('rtl');
    }
  }

  // Create and inject language switcher
  function createLangSwitcher() {
    const currentLang = getCurrentLanguage();
    const langInfo = translations.languages[currentLang];

    const switcherHTML = `
      <div class="lang-switcher" id="langSwitcher">
        <button class="lang-btn" id="langBtn" aria-label="Change language" title="${t('selectLanguage')}">
          <span class="lang-flag">${langInfo.flag}</span>
          <svg class="lang-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <div class="lang-dropdown" id="langDropdown">
          <div class="lang-dropdown-header">${t('selectLanguage')}</div>
          <div class="lang-list" id="langList"></div>
        </div>
      </div>
    `;

    // Create container
    const container = document.createElement('div');
    container.innerHTML = switcherHTML;
    document.body.appendChild(container.firstElementChild);

    // Populate language list
    const langList = document.getElementById('langList');
    const sortedLangs = Object.entries(translations.languages)
      .sort((a, b) => a[1].native.localeCompare(b[1].native));

    sortedLangs.forEach(([code, info]) => {
      const item = document.createElement('button');
      item.className = 'lang-item' + (code === currentLang ? ' active' : '');
      item.setAttribute('data-lang', code);
      item.innerHTML = `
        <span class="lang-item-flag">${info.flag}</span>
        <span class="lang-item-name">${info.native}</span>
        ${code === currentLang ? '<svg class="lang-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>' : ''}
      `;
      item.addEventListener('click', () => {
        setLanguage(code);
        closeDropdown();
      });
      langList.appendChild(item);
    });

    // Toggle dropdown
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');

    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('open');
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.lang-switcher')) {
        closeDropdown();
      }
    });

    // Close dropdown on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDropdown();
      }
    });

    function closeDropdown() {
      langDropdown.classList.remove('open');
    }
  }

  // Update language switcher display
  function updateLangSwitcher(lang) {
    const langInfo = translations.languages[lang];
    const flagEl = document.querySelector('.lang-flag');
    if (flagEl) {
      flagEl.textContent = langInfo.flag;
    }

    // Update active state in list
    document.querySelectorAll('.lang-item').forEach(item => {
      const itemLang = item.getAttribute('data-lang');
      if (itemLang === lang) {
        item.classList.add('active');
        if (!item.querySelector('.lang-check')) {
          item.innerHTML += '<svg class="lang-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>';
        }
      } else {
        item.classList.remove('active');
        const check = item.querySelector('.lang-check');
        if (check) check.remove();
      }
    });

    // Update dropdown header
    const header = document.querySelector('.lang-dropdown-header');
    if (header) {
      header.textContent = t('selectLanguage', lang);
    }
  }

  // Inject language switcher CSS
  function injectStyles() {
    const styles = `
      .lang-switcher {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      }

      .lang-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 10px 14px;
        background: rgba(26, 26, 26, 0.95);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        color: #fff;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
      }

      .lang-btn:hover {
        background: rgba(40, 40, 40, 0.95);
        border-color: rgba(255, 255, 255, 0.2);
      }

      .lang-flag {
        font-size: 11px;
        letter-spacing: 0.5px;
      }

      .lang-chevron {
        width: 14px;
        height: 14px;
        opacity: 0.6;
        transition: transform 0.2s;
      }

      .lang-dropdown.open ~ .lang-btn .lang-chevron,
      .lang-switcher:has(.lang-dropdown.open) .lang-chevron {
        transform: rotate(180deg);
      }

      .lang-dropdown {
        position: absolute;
        bottom: calc(100% + 8px);
        right: 0;
        width: 220px;
        max-height: 320px;
        background: rgba(26, 26, 26, 0.98);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 14px;
        overflow: hidden;
        opacity: 0;
        visibility: hidden;
        transform: translateY(10px);
        transition: all 0.2s;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
      }

      .lang-dropdown.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      .lang-dropdown-header {
        padding: 12px 16px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: rgba(255, 255, 255, 0.5);
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      }

      .lang-list {
        max-height: 260px;
        overflow-y: auto;
        padding: 6px;
      }

      .lang-list::-webkit-scrollbar {
        width: 6px;
      }

      .lang-list::-webkit-scrollbar-track {
        background: transparent;
      }

      .lang-list::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 3px;
      }

      .lang-item {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        padding: 10px 12px;
        background: transparent;
        border: none;
        border-radius: 8px;
        color: #fff;
        font-size: 14px;
        text-align: left;
        cursor: pointer;
        transition: background 0.15s;
      }

      .lang-item:hover {
        background: rgba(255, 255, 255, 0.08);
      }

      .lang-item.active {
        background: rgba(255, 255, 255, 0.1);
      }

      .lang-item-flag {
        font-size: 10px;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.5);
        min-width: 40px;
      }

      .lang-item-name {
        flex: 1;
        font-weight: 500;
      }

      .lang-check {
        width: 16px;
        height: 16px;
        color: #30D158;
      }

      /* RTL Support */
      .rtl .lang-switcher {
        right: auto;
        left: 20px;
      }

      .rtl .lang-dropdown {
        right: auto;
        left: 0;
      }

      .rtl .lang-item {
        text-align: right;
      }

      /* Mobile adjustments */
      @media (max-width: 480px) {
        .lang-switcher {
          bottom: 16px;
          right: 16px;
        }

        .lang-btn {
          padding: 8px 12px;
        }

        .lang-dropdown {
          width: 200px;
          max-height: 280px;
        }

        .rtl .lang-switcher {
          left: 16px;
        }
      }
    `;

    const styleEl = document.createElement('style');
    styleEl.textContent = styles;
    document.head.appendChild(styleEl);
  }

  // Initialize i18n system
  function init() {
    const currentLang = getCurrentLanguage();

    // Apply initial translations
    applyTranslations(currentLang);
    updateDocumentDirection(currentLang);

    // Inject styles and create switcher
    injectStyles();
    createLangSwitcher();
  }

  // Export to global scope
  window.i18n = {
    t: t,
    getCurrentLanguage: getCurrentLanguage,
    setLanguage: setLanguage,
    applyTranslations: applyTranslations,
    init: init
  };

  // Auto-init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
