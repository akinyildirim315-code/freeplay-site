function renderHome(container) {
  const featured = GAMES[0];
  const categories = ['Tümü', ...new Set(GAMES.map(g => g.category))];
  const topRated = [...GAMES].sort((a, b) => b.rating - a.rating).slice(0, 6);
  const newest = GAMES.slice(0, 8);

  container.innerHTML = `
    <div class="hero">
      <img
        src="${featured.cover}"
        class="hero-bg"
        alt="${featured.name}"
        onerror="this.style.display='none'"
      />
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-badge"><i class="fas fa-fire"></i> Öne Çıkan</div>
        <h1 class="hero-title">${featured.name}</h1>
        <p class="hero-desc">${featured.description.substring(0, 120)}...</p>
        <div class="hero-meta">
          <div class="hero-rating">
            <i class="fas fa-star"></i>
            <span>${featured.rating} / 10</span>
          </div>
          <span class="hero-category">${featured.category}</span>
          <span class="badge-free">ÜCRETSİZ</span>
        </div>
        <div class="hero-actions">
          <button class="btn btn-primary btn-lg" onclick="handleHeroDownload(${featured.id})" id="hero-dl-btn">
            <i class="fas fa-download"></i>
            ${Library.has(featured.id) ? 'İndirildi' : 'Ücretsiz İndir'}
          </button>
          <button class="btn btn-outline btn-lg" onclick="Router.navigate('/game/${featured.id}')">
            <i class="fas fa-info-circle"></i>
            Detaylar
          </button>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-header">
        <h2 class="section-title"><i class="fas fa-fire"></i> En Çok Oynananlar</h2>
        <button class="section-link" onclick="Router.navigate('/store')">Tümünü Gör <i class="fas fa-arrow-right"></i></button>
      </div>
      <div class="games-scroll" id="top-games">
        ${topRated.map(g => renderGameCard(g)).join('')}
      </div>
    </div>

    <div class="divider"></div>

    <div class="section" style="background: linear-gradient(180deg, transparent 0%, rgba(42,71,94,0.2) 100%); padding-top: 40px;">
      <div class="section-header">
        <h2 class="section-title"><i class="fas fa-tags"></i> Kategoriler</h2>
      </div>
      <div class="category-quick-grid">
        ${categories.filter(c => c !== 'Tümü').map(cat => {
          const catGames = GAMES.filter(g => g.category === cat);
          const icon = getCategoryIcon(cat);
          return `
            <div class="cat-quick-card" onclick="goToStoreCategory('${cat}')">
              <i class="fas ${icon}"></i>
              <span>${cat}</span>
              <small>${catGames.length} oyun</small>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <style>
      .category-quick-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 12px;
      }
      .cat-quick-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        padding: 20px 16px;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
      }
      .cat-quick-card:hover {
        border-color: var(--accent);
        background: var(--bg-hover);
        transform: translateY(-2px);
      }
      .cat-quick-card i {
        font-size: 28px;
        color: var(--accent);
      }
      .cat-quick-card span {
        font-size: 14px;
        font-weight: 600;
        color: #fff;
      }
      .cat-quick-card small {
        font-size: 11px;
        color: var(--text-muted);
      }
    </style>

    <div class="divider"></div>

    <div class="section">
      <div class="section-header">
        <h2 class="section-title"><i class="fas fa-gamepad"></i> Tüm Ücretsiz Oyunlar</h2>
        <button class="section-link" onclick="Router.navigate('/store')">Mağazaya Git <i class="fas fa-arrow-right"></i></button>
      </div>
      <div class="games-grid">
        ${newest.map(g => renderGameCard(g)).join('')}
      </div>
    </div>
  `;
}

function getCategoryIcon(cat) {
  const icons = {
    'Aksiyon': 'fa-bolt',
    'Strateji': 'fa-chess',
    'RPG': 'fa-dragon',
    'MOBA': 'fa-users',
    'Battle Royale': 'fa-crosshairs',
    'FPS': 'fa-gun',
    'default': 'fa-gamepad'
  };
  return icons[cat] || icons['default'];
}

function goToStoreCategory(category) {
  Router.navigate('/store');
  setTimeout(() => {
    const btn = document.querySelector(`.category-btn[data-cat="${category}"]`);
    if (btn) btn.click();
  }, 100);
}

function handleHeroDownload(gameId) {
  if (Library.has(gameId)) {
    Router.navigate('/library');
    return;
  }
  const btn = document.getElementById('hero-dl-btn');
  if (!btn) return;

  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> İndiriliyor...';
  btn.disabled = true;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 12 + 5;
    if (progress >= 100) {
      clearInterval(interval);
      Library.add(gameId);
      btn.innerHTML = '<i class="fas fa-check"></i> İndirildi';
      renderNavbar();
      const game = GAMES.find(g => g.id === gameId);
      showToast(`${game ? game.name : 'Oyun'} kütüphanenize eklendi!`, 'success');
      if (game && game.downloadUrl) {
        setTimeout(() => window.open(game.downloadUrl, '_blank'), 600);
      }
    }
  }, 200);
}
