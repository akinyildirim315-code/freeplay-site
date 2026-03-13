function renderNavbar() {
  const container = document.getElementById('navbar-container');
  const hash = window.location.hash.slice(1) || '/';
  const count = Library.count();

  container.innerHTML = `
    <nav class="navbar">
      <div class="navbar-inner">
        <div class="navbar-logo" onclick="Router.navigate('/')">
          <div class="navbar-logo-icon"><i class="fas fa-gamepad"></i></div>
          <div class="navbar-logo-text">Free<span>Play</span></div>
        </div>
        <div class="navbar-nav">
          <button class="nav-link ${hash === '/' || hash === '' ? 'active' : ''}" onclick="Router.navigate('/')">
            <i class="fas fa-home"></i> Ana Sayfa
          </button>
          <button class="nav-link ${hash === '/store' ? 'active' : ''}" onclick="Router.navigate('/store')">
            <i class="fas fa-store"></i> Mağaza
          </button>
        </div>
        <div class="navbar-search">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Oyun ara..." id="navbar-search-input" />
        </div>
        <button class="navbar-library-btn" onclick="Router.navigate('/library')">
          <i class="fas fa-layer-group"></i>
          Kütüphane
          ${count > 0 ? `<span class="library-count">${count}</span>` : ''}
        </button>
      </div>
    </nav>
  `;

  const searchInput = document.getElementById('navbar-search-input');
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.target.value.trim()) {
        Router.navigate('/store');
        setTimeout(() => {
          const storeSearch = document.getElementById('store-search');
          if (storeSearch) {
            storeSearch.value = e.target.value.trim();
            storeSearch.dispatchEvent(new Event('input'));
          }
        }, 100);
      }
    });
  }
}
