function renderGameDetail(container, gameId) {
  const game = GAMES.find(g => g.id === gameId);
  if (!game) {
    container.innerHTML = `<div class="section" style="text-align:center;padding:80px 20px;"><h2>Oyun bulunamadı.</h2><button class="btn btn-secondary" onclick="Router.navigate('/store')">Mağazaya Dön</button></div>`;
    return;
  }

  const allScreenshots = game.screenshots && game.screenshots.length > 0 ? game.screenshots : [game.cover];
  let currentScreenshot = 0;
  let downloadInterval = null;

  function getDownloadState() {
    return Library.has(game.id) ? 'downloaded' : 'ready';
  }

  container.innerHTML = `
    <div class="game-detail">
      <button class="game-detail-back" onclick="Router.navigate('/store')">
        <i class="fas fa-arrow-left"></i> Mağazaya Dön
      </button>

      <div class="game-detail-layout">
        <div class="game-detail-main">
          <div class="game-detail-screenshots" id="screenshot-viewer">
            <img
              src="${allScreenshots[0]}"
              id="screenshot-img"
              style="width:100%;height:100%;object-fit:cover;"
              alt="${game.name}"
              onerror="this.style.display='none';document.getElementById('screenshot-fallback').style.display='flex'"
            />
            <div id="screenshot-fallback" class="cover-fallback" style="display:none;width:100%;height:100%;background:linear-gradient(135deg,#2a475e,#1e3a50);align-items:center;justify-content:center;font-size:80px;color:var(--text-muted);">
              <i class="fas fa-gamepad"></i>
            </div>
            ${allScreenshots.length > 1 ? `
              <button class="screenshot-btn prev" onclick="changeScreenshot(-1)"><i class="fas fa-chevron-left"></i></button>
              <button class="screenshot-btn next" onclick="changeScreenshot(1)"><i class="fas fa-chevron-right"></i></button>
              <div class="screenshot-nav">
                ${allScreenshots.map((_, i) => `<button class="screenshot-dot ${i === 0 ? 'active' : ''}" id="dot-${i}" onclick="setScreenshot(${i})"></button>`).join('')}
              </div>
            ` : ''}
          </div>

          <div class="game-detail-info">
            <h3>Oyun Hakkında</h3>
            <p>${game.description}</p>
          </div>

          <div class="game-detail-info">
            <h3>Özellikler</h3>
            <div class="game-features">
              ${game.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
            </div>
          </div>

          <div class="game-detail-info">
            <h3>Sistem Gereksinimleri</h3>
            <div class="sys-req">
              <div class="sys-req-item">
                <span class="sys-req-label">İşletim Sistemi</span>
                <span class="sys-req-value">${game.requirements.os}</span>
              </div>
              <div class="sys-req-item">
                <span class="sys-req-label">İşlemci</span>
                <span class="sys-req-value">${game.requirements.cpu}</span>
              </div>
              <div class="sys-req-item">
                <span class="sys-req-label">RAM</span>
                <span class="sys-req-value">${game.requirements.ram}</span>
              </div>
              <div class="sys-req-item">
                <span class="sys-req-label">Ekran Kartı</span>
                <span class="sys-req-value">${game.requirements.gpu}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="game-detail-sidebar">
          <div class="game-sidebar-card">
            <img
              src="${game.cover}"
              class="game-sidebar-cover"
              alt="${game.name}"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
            />
            <div class="game-sidebar-cover-fallback" style="display:none">
              <i class="fas fa-gamepad"></i>
            </div>
            <div class="game-sidebar-body">
              <h2 class="game-sidebar-title">${game.name}</h2>
              <div class="game-sidebar-meta">
                <div class="game-sidebar-rating">
                  <i class="fas fa-star"></i>
                  <span>${game.rating} / 10</span>
                </div>
                <span class="game-sidebar-free">ÜCRETSİZ</span>
              </div>
              <div class="game-sidebar-size">
                <i class="fas fa-hdd"></i> ${game.size} depolama alanı
              </div>

              <button
                class="sidebar-download-btn ${getDownloadState() === 'downloaded' ? 'downloaded' : 'download'}"
                id="sidebar-dl-btn"
                onclick="startDetailDownload(${game.id})"
                ${getDownloadState() === 'downloaded' ? 'disabled' : ''}
              >
                ${getDownloadState() === 'downloaded'
                  ? '<i class="fas fa-check"></i> Kütüphanede'
                  : '<i class="fas fa-download"></i> Ücretsiz İndir'
                }
              </button>

              <div id="detail-progress" style="display:none">
                <div class="download-progress">
                  <div class="progress-label">
                    <span>İndiriliyor...</span>
                    <span id="progress-pct">0%</span>
                  </div>
                  <div class="progress-bar-track">
                    <div class="progress-bar-fill" id="progress-fill"></div>
                  </div>
                </div>
              </div>

              ${getDownloadState() === 'downloaded' ? `
                <button class="btn btn-outline btn-sm" style="width:100%;margin-top:8px;" onclick="Router.navigate('/library')">
                  <i class="fas fa-layer-group"></i> Kütüphaneye Git
                </button>
              ` : ''}
            </div>
          </div>

          <div class="game-sidebar-card" style="padding:16px;">
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div style="display:flex;justify-content:space-between;font-size:13px;">
                <span style="color:var(--text-muted)">Kategori</span>
                <span style="color:var(--text-primary);font-weight:500">${game.category}</span>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:13px;">
                <span style="color:var(--text-muted)">Puan</span>
                <span style="color:#f39c12;font-weight:600"><i class="fas fa-star"></i> ${game.rating}</span>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:13px;">
                <span style="color:var(--text-muted)">Boyut</span>
                <span style="color:var(--text-primary)">${game.size}</span>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:13px;">
                <span style="color:var(--text-muted)">Fiyat</span>
                <span style="color:var(--accent-green);font-weight:700">ÜCRETSİZ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  window.changeScreenshot = function(dir) {
    currentScreenshot = (currentScreenshot + dir + allScreenshots.length) % allScreenshots.length;
    setScreenshot(currentScreenshot);
  };

  window.setScreenshot = function(idx) {
    currentScreenshot = idx;
    const img = document.getElementById('screenshot-img');
    const fallback = document.getElementById('screenshot-fallback');
    if (img) {
      img.style.display = 'block';
      img.src = allScreenshots[idx];
      if (fallback) fallback.style.display = 'none';
    }
    document.querySelectorAll('.screenshot-dot').forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });
  };

  window.startDetailDownload = function(id) {
    if (Library.has(id)) return;

    const btn = document.getElementById('sidebar-dl-btn');
    const progressEl = document.getElementById('detail-progress');
    const fillEl = document.getElementById('progress-fill');
    const pctEl = document.getElementById('progress-pct');

    if (!btn) return;

    btn.className = 'sidebar-download-btn downloading';
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Hazırlanıyor...';
    btn.disabled = true;

    setTimeout(() => {
      if (progressEl) progressEl.style.display = 'block';
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> İndiriliyor...';
    }, 500);

    let progress = 0;
    downloadInterval = setInterval(() => {
      progress += Math.random() * 8 + 3;
      const pct = Math.min(Math.floor(progress), 99);
      if (fillEl) fillEl.style.width = pct + '%';
      if (pctEl) pctEl.textContent = pct + '%';
      if (progress >= 100) {
        progress = 100;
        clearInterval(downloadInterval);
        Library.add(id);
        if (fillEl) fillEl.style.width = '100%';
        if (pctEl) pctEl.textContent = '100%';

        setTimeout(() => {
          if (progressEl) progressEl.style.display = 'none';
          btn.className = 'sidebar-download-btn downloaded';
          btn.innerHTML = '<i class="fas fa-check"></i> Kütüphanede';

          const sidebarBody = btn.parentElement;
          if (sidebarBody && !document.querySelector('.go-library-btn')) {
            const goBtn = document.createElement('button');
            goBtn.className = 'btn btn-outline btn-sm go-library-btn';
            goBtn.style.width = '100%';
            goBtn.style.marginTop = '8px';
            goBtn.innerHTML = '<i class="fas fa-layer-group"></i> Kütüphaneye Git';
            goBtn.onclick = () => Router.navigate('/library');
            sidebarBody.appendChild(goBtn);
          }

          renderNavbar();
          showToast(`${game.name} kütüphanenize eklendi!`, 'success');
          if (game.downloadUrl) {
            setTimeout(() => window.open(game.downloadUrl, '_blank'), 700);
          }
        }, 400);
      }
    }, 150);
  };
}
