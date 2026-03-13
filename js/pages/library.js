function renderLibrary(container) {
  function getLibraryGames() {
    const ids = Library.getAll();
    return ids.map(id => GAMES.find(g => g.id === id)).filter(Boolean);
  }

  function render() {
    const games = getLibraryGames();
    container.innerHTML = `
      <div class="library-page">
        <div class="library-header">
          <h1 class="library-title"><i class="fas fa-layer-group" style="color:var(--accent);margin-right:12px;"></i>Kütüphanem</h1>
          <p class="library-subtitle">${games.length > 0 ? `${games.length} oyun indirdin` : 'Henüz oyun indirmedin'}</p>
        </div>

        ${games.length === 0 ? `
          <div class="library-empty">
            <i class="fas fa-inbox"></i>
            <h3>Kütüphanen Boş</h3>
            <p style="margin-bottom:24px;">Mağazadan ücretsiz oyunları indirip buraya ekleyebilirsin.</p>
            <button class="btn btn-secondary btn-lg" onclick="Router.navigate('/store')">
              <i class="fas fa-store"></i> Mağazaya Git
            </button>
          </div>
        ` : `
          <div class="library-games" id="library-list">
            ${games.map(game => renderLibraryItem(game)).join('')}
          </div>
        `}
      </div>
    `;
  }

  function renderLibraryItem(game) {
    return `
      <div class="library-game-item" id="lib-item-${game.id}">
        <img
          src="${game.cover}"
          class="library-game-cover"
          alt="${game.name}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
          onclick="Router.navigate('/game/${game.id}')"
        />
        <div class="library-game-cover-fallback" style="display:none" onclick="Router.navigate('/game/${game.id}')">
          <i class="fas fa-gamepad"></i>
        </div>
        <div class="library-game-info" onclick="Router.navigate('/game/${game.id}')">
          <div class="library-game-name">${game.name}</div>
          <div class="library-game-meta">
            <span>${game.category}</span>
            <span>•</span>
            <span style="color:#f39c12"><i class="fas fa-star"></i> ${game.rating}</span>
            <span>•</span>
            <span>${game.size}</span>
          </div>
        </div>
        <div class="library-game-actions">
          <button class="btn btn-secondary btn-sm" onclick="launchGame(${game.id}, '${game.name}')">
            <i class="fas fa-play"></i> Oyna
          </button>
          <button class="btn btn-danger btn-sm" onclick="removeFromLibrary(${game.id})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    `;
  }

  window.launchGame = function(gameId, gameName) {
    const game = GAMES.find(g => g.id === gameId);

    if (game && game.localGame && game.downloadUrl) {
      window.open(game.downloadUrl, '_blank');
      return;
    }

    const overlay = document.createElement('div');
    overlay.className = 'launch-overlay';
    overlay.innerHTML = `
      <div class="launch-spinner"></div>
      <div class="launch-text"><i class="fas fa-gamepad" style="color:var(--accent);margin-right:8px;"></i>${gameName}</div>
      <div class="launch-sub">Oyun başlatılıyor...</div>
    `;
    document.body.appendChild(overlay);

    setTimeout(() => {
      overlay.innerHTML = `
        <div style="font-size:64px;color:var(--accent)"><i class="fas fa-check-circle"></i></div>
        <div class="launch-text">${gameName}</div>
        <div class="launch-sub">İyi oyunlar! Oyun başarıyla başlatıldı.</div>
        <button class="btn btn-outline" style="margin-top:8px" onclick="this.closest('.launch-overlay').remove()">Kapat</button>
      `;
    }, 2500);

    setTimeout(() => {
      if (document.body.contains(overlay)) overlay.remove();
    }, 6000);
  };

  window.removeFromLibrary = function(gameId) {
    Library.remove(gameId);
    const item = document.getElementById(`lib-item-${gameId}`);
    if (item) {
      item.style.transition = 'all 0.3s';
      item.style.opacity = '0';
      item.style.transform = 'translateX(-20px)';
      setTimeout(() => {
        render();
        renderNavbar();
      }, 300);
    }
    const game = GAMES.find(g => g.id === gameId);
    showToast(`${game ? game.name : 'Oyun'} kütüphaneden kaldırıldı.`, 'info', 'fa-trash');
  };

  render();
}
