const Router = {
  currentRoute: null,
  currentParams: {},

  navigate(path) {
    window.location.hash = path;
  },

  getRoute() {
    const hash = window.location.hash.slice(1) || '/';
    return hash;
  },

  parseRoute(hash) {
    if (hash === '/' || hash === '') return { page: 'home', params: {} };
    if (hash === '/store') return { page: 'store', params: {} };
    if (hash === '/library') return { page: 'library', params: {} };
    const gameMatch = hash.match(/^\/game\/(\d+)$/);
    if (gameMatch) return { page: 'game', params: { id: parseInt(gameMatch[1]) } };
    return { page: 'home', params: {} };
  },

  init(handler) {
    window.addEventListener('hashchange', () => handler(this.parseRoute(this.getRoute())));
    handler(this.parseRoute(this.getRoute()));
  }
};

const Library = {
  getAll() {
    try {
      return JSON.parse(localStorage.getItem('freeplay_library') || '[]');
    } catch {
      return [];
    }
  },

  has(gameId) {
    return this.getAll().includes(gameId);
  },

  add(gameId) {
    const lib = this.getAll();
    if (!lib.includes(gameId)) {
      lib.push(gameId);
      localStorage.setItem('freeplay_library', JSON.stringify(lib));
    }
  },

  remove(gameId) {
    const lib = this.getAll().filter(id => id !== gameId);
    localStorage.setItem('freeplay_library', JSON.stringify(lib));
  },

  count() {
    return this.getAll().length;
  }
};

function showToast(message, type = 'info', icon = null) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const iconStr = icon || (type === 'success' ? 'fa-check-circle' : 'fa-info-circle');
  toast.innerHTML = `<i class="fas ${iconStr}"></i><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = 'all 0.3s';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function getStars(rating) {
  const full = Math.floor(rating / 2);
  const half = rating / 2 - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

function imgWithFallback(src, fallbackIcon, cssClass, style = '') {
  return `<img src="${src}" class="${cssClass}" style="${style}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" /><div class="${cssClass.replace('img', '')} cover-fallback" style="display:none;${style}"><i class="fas ${fallbackIcon}"></i></div>`;
}

const App = {
  init() {
    Router.init(({ page, params }) => {
      this.render(page, params);
    });
  },

  render(page, params) {
    const container = document.getElementById('page-container');
    renderNavbar();
    renderFooter();

    window.scrollTo(0, 0);

    switch (page) {
      case 'home':
        renderHome(container);
        break;
      case 'store':
        renderStore(container);
        break;
      case 'game':
        renderGameDetail(container, params.id);
        break;
      case 'library':
        renderLibrary(container);
        break;
      default:
        renderHome(container);
    }
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
