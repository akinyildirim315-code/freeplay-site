function renderGameCard(game, showDownloadBtn = true) {
  const isDownloaded = Library.has(game.id);

  return `
    <div class="game-card" onclick="Router.navigate('/game/${game.id}')">
      <img
        src="${game.cover}"
        class="game-card-cover"
        alt="${game.name}"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
      />
      <div class="game-card-cover-fallback" style="display:none">
        <i class="fas fa-gamepad"></i>
      </div>
      <div class="game-card-body">
        <div class="game-card-name">${game.name}</div>
        <div class="game-card-meta">
          <span class="game-card-category">${game.category}</span>
          <span class="game-card-rating"><i class="fas fa-star"></i> ${game.rating}</span>
        </div>
        ${showDownloadBtn ? `
          <button
            class="game-card-btn ${isDownloaded ? 'downloaded' : 'download'}"
            id="card-btn-${game.id}"
            onclick="event.stopPropagation(); handleCardDownload(${game.id})"
            ${isDownloaded ? 'disabled' : ''}
          >
            ${isDownloaded
              ? '<i class="fas fa-check"></i> İndirildi'
              : '<i class="fas fa-download"></i> İndir'
            }
          </button>
        ` : ''}
      </div>
    </div>
  `;
}

function handleCardDownload(gameId) {
  if (Library.has(gameId)) return;

  const game = GAMES.find(g => g.id === gameId);
  const btn = document.getElementById(`card-btn-${gameId}`);
  if (!btn) return;

  btn.className = 'game-card-btn downloading';
  btn.disabled = true;

  let progress = 0;
  let pct = 0;
  btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> %${pct}`;

  const interval = setInterval(() => {
    progress += Math.random() * 15 + 5;
    pct = Math.min(Math.floor(progress), 99);
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> %${pct}`;

    if (progress >= 100) {
      clearInterval(interval);
      Library.add(gameId);
      btn.className = 'game-card-btn downloaded';
      btn.innerHTML = '<i class="fas fa-check"></i> İndirildi';
      renderNavbar();
      showToast(`${game ? game.name : 'Oyun'} kütüphanenize eklendi!`, 'success');
      if (game && game.downloadUrl) {
        if (game.localGame) {
          setTimeout(() => window.open(game.downloadUrl, '_blank'), 600);
        } else {
          setTimeout(() => window.open(game.downloadUrl, '_blank'), 600);
        }
      }
    }
  }, 200);
}
