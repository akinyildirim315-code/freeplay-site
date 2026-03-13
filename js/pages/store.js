function renderStore(container) {
  const categories = ['Tümü', ...new Set(GAMES.map(g => g.category))];
  let activeCategory = 'Tümü';
  let searchQuery = '';

  function getFiltered() {
    return GAMES.filter(g => {
      const matchCat = activeCategory === 'Tümü' || g.category === activeCategory;
      const matchSearch = !searchQuery || g.name.toLowerCase().includes(searchQuery.toLowerCase()) || g.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }

  function renderGrid() {
    const filtered = getFiltered();
    const grid = document.getElementById('store-grid');
    if (!grid) return;
    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state" style="grid-column:1/-1">
          <i class="fas fa-search"></i>
          <p>Arama sonucu bulunamadı.</p>
        </div>
      `;
    } else {
      grid.innerHTML = filtered.map(g => renderGameCard(g)).join('');
    }
    const countEl = document.getElementById('result-count');
    if (countEl) countEl.textContent = `${filtered.length} oyun`;
  }

  container.innerHTML = `
    <div class="store-header">
      <div class="store-header-inner">
        <h1 class="store-title">Ücretsiz Oyun Mağazası</h1>
        <p class="store-subtitle">Tüm oyunlar tamamen ücretsiz — indir ve oynamaya başla.</p>
        <div class="store-search-bar">
          <i class="fas fa-search"></i>
          <input type="text" id="store-search" placeholder="Oyun veya kategori ara..." />
        </div>
        <div class="store-stats">
          <div class="store-stat">
            <span class="store-stat-num">${GAMES.length}</span>
            <span class="store-stat-label">Toplam Oyun</span>
          </div>
          <div class="store-stat">
            <span class="store-stat-num">${Library.count()}</span>
            <span class="store-stat-label">İndirilenler</span>
          </div>
          <div class="store-stat">
            <span class="store-stat-num">%100</span>
            <span class="store-stat-label">Ücretsiz</span>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="category-filters" id="store-cats">
        ${categories.map(cat => `
          <button
            class="category-btn ${cat === 'Tümü' ? 'active' : ''}"
            data-cat="${cat}"
            onclick="storeCategoryClick('${cat}')"
          >${cat}</button>
        `).join('')}
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
        <span style="color:var(--text-muted); font-size:14px;" id="result-count">${GAMES.length} oyun</span>
      </div>

      <div class="games-grid" id="store-grid">
        ${GAMES.map(g => renderGameCard(g)).join('')}
      </div>
    </div>
  `;

  window.storeCategoryClick = function(cat) {
    activeCategory = cat;
    document.querySelectorAll('.category-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.cat === cat);
    });
    renderGrid();
  };

  const searchInput = document.getElementById('store-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderGrid();
    });
  }
}
