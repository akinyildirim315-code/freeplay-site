function renderFooter() {
  const container = document.getElementById('footer-container');
  container.innerHTML = `
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="footer-logo-icon"><i class="fas fa-gamepad"></i></div>
            <div class="footer-logo-text">Free<span>Play</span></div>
          </div>
          <p class="footer-desc">
            Tamamen ücretsiz oyunların bir arada bulunduğu gaming platformu.
            İndir, oyna, eğlen — hiçbir ücret ödemeden.
          </p>
        </div>
        <div class="footer-col">
          <h4>Keşfet</h4>
          <ul>
            <li onclick="Router.navigate('/')">Ana Sayfa</li>
            <li onclick="Router.navigate('/store')">Mağaza</li>
            <li onclick="Router.navigate('/library')">Kütüphanem</li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Kategoriler</h4>
          <ul>
            <li onclick="Router.navigate('/store')">Aksiyon</li>
            <li onclick="Router.navigate('/store')">RPG</li>
            <li onclick="Router.navigate('/store')">Battle Royale</li>
            <li onclick="Router.navigate('/store')">Strateji</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2024 FreePlay. Tüm oyunlar tamamen ücretsizdir.</span>
        <span>Ücretsiz Oyun Platformu</span>
      </div>
    </footer>
  `;
}
