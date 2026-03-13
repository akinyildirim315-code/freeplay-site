const GAMES = [
  {
    id: 1,
    name: "Warframe",
    category: "Aksiyon",
    rating: 9.2,
    size: "35 GB",
    description: "Warframe, geleceğin savaşçıları olan Tenno'ları kontrol ettiğiniz üçüncü şahıs aksiyon oyunudur. Uzay gemilerinden yeraltı laboratuvarlarına kadar uzanan geniş dünyalarda düşmanlarınızı eleyin.",
    features: ["Çok Oyunculu", "Ücretsiz", "Aksiyon", "Bilim Kurgu"],
    requirements: { os: "Windows 7 64-bit", cpu: "Intel Core i5", ram: "8 GB", gpu: "NVIDIA GTX 960" },
    cover: "https://cdn.akamai.steamstatic.com/steam/apps/230410/header.jpg",
    screenshots: [
      "https://cdn.akamai.steamstatic.com/steam/apps/230410/ss_57a7e6fc40310f8920843ac4f8a1c880abc8d9d7.600x338.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/230410/ss_e3a5af3c45a0c9c4a97aaf99d02b36b26ebde4fb.600x338.jpg"
    ],
    downloadUrl: "https://store.steampowered.com/app/230410/Warframe/"
  },
  {
    id: 2,
    name: "Dota 2",
    category: "Strateji",
    rating: 9.0,
    size: "15 GB",
    description: "Dota 2, dünyanın en oynanan ve en rekabetçi MOBA oyunlarından biridir. Her maçta 5v5 takımlar halinde düşman kaleyi yıkmak için savaşırsınız.",
    features: ["Çok Oyunculu", "Rekabetçi", "MOBA", "Strateji"],
    requirements: { os: "Windows 7", cpu: "Dual core 2.8 GHz", ram: "4 GB", gpu: "NVIDIA GTX 660" },
    cover: "https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg",
    screenshots: [
      "https://cdn.akamai.steamstatic.com/steam/apps/570/ss_86d675fdc73ba10462abb8f5ec195d5f1aff9e0c.600x338.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/570/ss_372f081d37ff0c9edc3ab379ba7584e985fb2226.600x338.jpg"
    ],
    downloadUrl: "https://store.steampowered.com/app/570/Dota_2/"
  },
  {
    id: 3,
    name: "Counter-Strike 2",
    category: "Aksiyon",
    rating: 8.7,
    size: "32 GB",
    description: "CS2, efsanevi Counter-Strike serisinin son halkasıdır. Taktiksel nişancı oyununun yeni nesil grafikler ve iyileştirilmiş fizik motoru ile geri dönüşü.",
    features: ["Çok Oyunculu", "Rekabetçi", "FPS", "Taktiksel"],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-750", ram: "8 GB", gpu: "NVIDIA GTX 970" },
    cover: "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg",
    screenshots: [
      "https://cdn.akamai.steamstatic.com/steam/apps/730/ss_34090867f1a02b6f45e6bca2e9305d73ffc4d0fd.600x338.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/730/ss_d196c9a9e0c6af4571b9b0e6a7eb55adc25f1416.600x338.jpg"
    ],
    downloadUrl: "https://store.steampowered.com/app/730/CounterStrike_2/"
  },
  {
    id: 4,
    name: "Path of Exile",
    category: "RPG",
    rating: 9.1,
    size: "22 GB",
    description: "Path of Exile, Wraeclast'ın karanlık dünyasında geçen ücretsiz aksiyon RPG oyunudur. Yüzlerce beceri kombinasyonu ve derin itemizasyon sistemi ile saatlerce oynayabilirsiniz.",
    features: ["Çok Oyunculu", "Açık Dünya", "RPG", "Karanlık Fantezi"],
    requirements: { os: "Windows 7 SP1", cpu: "Intel Quad Core", ram: "8 GB", gpu: "ATI Radeon HD 6800" },
    cover: "https://cdn.akamai.steamstatic.com/steam/apps/238960/header.jpg",
    screenshots: [
      "https://cdn.akamai.steamstatic.com/steam/apps/238960/ss_3e3a8b42cfb97f6dba4f1c8d2a5e6f7b9c0d1e2f.600x338.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/238960/ss_1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b.600x338.jpg"
    ],
    downloadUrl: "https://store.steampowered.com/app/238960/Path_of_Exile/"
  },
  {
    id: 5,
    name: "Apex Legends",
    category: "Battle Royale",
    rating: 8.8,
    size: "56 GB",
    description: "Apex Legends, gelişmiş hareketi ve takım oyununu ön plana çıkaran ücretsiz bir Battle Royale oyunudur. Her biri kendine özgü yeteneklere sahip efsaneler arasından birini seç.",
    features: ["Çok Oyunculu", "Battle Royale", "FPS", "Takım Oyunu"],
    requirements: { os: "Windows 7 64-bit", cpu: "Intel i3-6300", ram: "8 GB", gpu: "NVIDIA GTX 970" },
    cover: "https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg",
    screenshots: [
      "https://cdn.akamai.steamstatic.com/steam/apps/1172470/ss_d90da1c07f85e5b5e7e0a71c9f8a7b6c5d4e3f2a.600x338.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/1172470/ss_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0.600x338.jpg"
    ],
    downloadUrl: "https://store.steampowered.com/app/1172470/Apex_Legends/"
  },
  {
    id: 6,
    name: "Destiny 2",
    category: "FPS",
    rating: 8.5,
    size: "80 GB",
    description: "Destiny 2, güneş sistemini kaplayan uzaylı güçlerine karşı savaşan Guardian rolünü üstlendiğiniz çevrimiçi FPS oyunudur. Nefes kesici hikaye ve canlı topluluk.",
    features: ["Çok Oyunculu", "FPS", "Sci-Fi", "PvE/PvP"],
    requirements: { os: "Windows 7 64-bit", cpu: "Intel Core i3-3250", ram: "6 GB", gpu: "NVIDIA GTX 660" },
    cover: "https://cdn.akamai.steamstatic.com/steam/apps/1085660/header.jpg",
    screenshots: [
      "https://cdn.akamai.steamstatic.com/steam/apps/1085660/ss_b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1.600x338.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/1085660/ss_c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2.600x338.jpg"
    ],
    downloadUrl: "https://store.steampowered.com/app/1085660/Destiny_2/"
  },
  {
    id: 7,
    name: "League of Legends",
    category: "MOBA",
    rating: 8.9,
    size: "12 GB",
    description: "Dünyanın en popüler MOBA oyunu. Yüzlerce şampiyon arasından seçim yapın ve 5v5 takım savaşlarında rakiplerinizi yenin. Haftalık rotasyon ile her hafta yeni karakterler deneyin.",
    features: ["Çok Oyunculu", "Rekabetçi", "MOBA", "Fantezi"],
    requirements: { os: "Windows 7/Vista/XP", cpu: "Intel Core i3", ram: "4 GB", gpu: "GeForce 8800" },
    cover: "https://www.leagueoflegends.com/static/open-graph-b580f38f4e3e8875a94c7c61fe3fe5e0.jpg",
    screenshots: [
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg",
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg"
    ],
    downloadUrl: "https://signup.leagueoflegends.com/tr/signup/index#/"
  },
  {
    id: 8,
    name: "Genshin Impact",
    category: "RPG",
    rating: 9.3,
    size: "60 GB",
    description: "Teyvat dünyasında geçen açık dünya aksiyon RPG oyunu. Birbirinden farklı elementlere sahip karakterleri kontrol ederek zengin bir hikayenin içinde kaybolun.",
    features: ["Tek Oyunculu", "Çok Oyunculu", "Açık Dünya", "RPG", "Anime"],
    requirements: { os: "Windows 7 SP1 64-bit", cpu: "Intel Core i7", ram: "16 GB", gpu: "NVIDIA GeForce GT 1030" },
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1971310/header.jpg",
    screenshots: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1971310/ss_c3f04b4b1a6e67edb08aae4b04e84d0ae8d3b84f.600x338.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1971310/ss_8c3e0543e24b3a6b5c3c1b2a1d4e5f6a7b8c9d0e.600x338.jpg"
    ],
    downloadUrl: "https://store.steampowered.com/app/1971310/Genshin_Impact/"
  },
  {
    id: 9,
    name: "Fortnite",
    category: "Battle Royale",
    rating: 8.6,
    size: "29 GB",
    description: "Epic Games'in ücretsiz Battle Royale oyunu. 100 oyuncunun katıldığı adaya inip hayatta kalmaya çalışın. Bina mekaniği ile rakiplerinize üstünlük kurun.",
    features: ["Çok Oyunculu", "Battle Royale", "TPS", "Bina"],
    requirements: { os: "Windows 7/8/10 64-bit", cpu: "Core i3-3225", ram: "8 GB", gpu: "Intel HD 4000" },
    cover: "https://cdn2.unrealengine.com/social-image-chapter4-s3-3840x2160-d35912cc25ad.jpg",
    screenshots: [
      "https://cdn2.unrealengine.com/social-image-chapter4-s3-3840x2160-d35912cc25ad.jpg"
    ],
    downloadUrl: "https://www.fortnite.com/tr/download"
  },
  {
    id: 10,
    name: "Valorant",
    category: "FPS",
    rating: 9.0,
    size: "20 GB",
    description: "Riot Games'in taktiksel 5v5 nişancı oyunu. Her biri kendine özgü yeteneklere sahip Ajan'larla doğru iletişim ve takım oyunu ile zafere ulaşın.",
    features: ["Çok Oyunculu", "Taktiksel FPS", "Rekabetçi", "5v5"],
    requirements: { os: "Windows 7/8/10 64-bit", cpu: "Intel Core i3-370M", ram: "4 GB", gpu: "Intel HD 3000" },
    cover: "https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png",
    screenshots: [
      "https://media.valorant-api.com/maps/2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba/splash.png",
      "https://media.valorant-api.com/maps/e2ad5c4f-4bbe-9615-9ae2-0f9ccfe3e203/splash.png"
    ],
    downloadUrl: "https://playvalorant.com/tr-tr/download/"
  },
  {
    id: 11,
    name: "Paladins",
    category: "FPS",
    rating: 8.2,
    size: "30 GB",
    description: "Hi-Rez Studios tarafından geliştirilen ücretsiz kahraman atıcı oyunu. Fantastik evreninde benzersiz yeteneklere sahip 50'den fazla kahramanla oyna.",
    features: ["Çok Oyunculu", "Hero Shooter", "FPS", "Fantezi"],
    requirements: { os: "Windows 7 64-bit", cpu: "Intel Core i5", ram: "6 GB", gpu: "NVIDIA GTX 700" },
    cover: "https://cdn.akamai.steamstatic.com/steam/apps/444090/header.jpg",
    screenshots: [
      "https://cdn.akamai.steamstatic.com/steam/apps/444090/ss_1ce8da88ee1d20e95b11a8c2e2ade8b5efe08e5b.600x338.jpg"
    ],
    downloadUrl: "https://store.steampowered.com/app/444090/Paladins/"
  },
  {
    id: 12,
    name: "Dauntless",
    category: "Aksiyon",
    rating: 8.0,
    size: "25 GB",
    description: "Dauntless, arkadaşlarınla takım kurarak devasa Behemoth yaratıklarını avladığın ücretsiz aksiyon RPG oyunudur. Her avcılık görevinde yeni ekipmanlar kazanın.",
    features: ["Çok Oyunculu", "Co-op", "Aksiyon RPG", "Canavar Avı"],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i5-4430", ram: "8 GB", gpu: "NVIDIA GTX 960" },
    cover: "https://cdn1.epicgames.com/offer/d6ccd9f3d6724b5586c2cdea57de4e95/Dauntless_EGS_Landscape_1920x1080-1920x1080-3fc7fa28a4dde97d4e23d2e8df8b7741.jpg",
    screenshots: [
      "https://cdn1.epicgames.com/offer/d6ccd9f3d6724b5586c2cdea57de4e95/Dauntless_EGS_SS1_1920x1080-1920x1080-0b0e4a0d8b0e4a0d8b0e4a0d8b0e4a0d.jpg"
    ],
    downloadUrl: "https://store.epicgames.com/tr/p/dauntless"
  },
  {
    id: 13,
    name: "Team Fortress 2",
    category: "FPS",
    rating: 9.0,
    size: "15 GB",
    description: "Team Fortress 2, Valve'in efsanevi takım tabanlı aksiyon oyunudur. 9 farklı sınıf arasından seçim yaparak rakip takımla mücadele edin. Yüzlerce şapka ve kozmetik ile karakterini özelleştir.",
    features: ["Çok Oyunculu", "FPS", "Takım Oyunu", "Komedi"],
    requirements: { os: "Windows 7", cpu: "Pentium 4 3.0GHz", ram: "1 GB", gpu: "DirectX 8.1" },
    cover: "https://cdn.akamai.steamstatic.com/steam/apps/440/header.jpg",
    screenshots: [
      "https://cdn.akamai.steamstatic.com/steam/apps/440/ss_b4a8bb2b1e2d2c3e4f5a6b7c8d9e0f1a2b3c4d5e.600x338.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/440/ss_c5b9cc3c2f3e3d4f6b7c8d9e0a1b2c3d4e5f6a7b.600x338.jpg"
    ],
    downloadUrl: "https://store.steampowered.com/app/440/Team_Fortress_2/"
  },
  {
    id: 14,
    name: "War Thunder",
    category: "Strateji",
    rating: 8.6,
    size: "70 GB",
    description: "War Thunder, savaş uçakları, tanklar ve deniz araçlarını kapsayan devasa bir MMO savaş oyunudur. Gerçekçi savaş simülasyonu ile tarihsel araçları komuta et.",
    features: ["Çok Oyunculu", "Simülasyon", "Askeri", "Araç Savaşı"],
    requirements: { os: "Windows 7 64-bit", cpu: "Intel Core i5", ram: "8 GB", gpu: "NVIDIA GTX 660" },
    cover: "https://cdn.akamai.steamstatic.com/steam/apps/236390/header.jpg",
    screenshots: [
      "https://cdn.akamai.steamstatic.com/steam/apps/236390/ss_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0.600x338.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/236390/ss_b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1.600x338.jpg"
    ],
    downloadUrl: "https://store.steampowered.com/app/236390/War_Thunder/"
  },
  {
    id: 15,
    name: "Lost Ark",
    category: "RPG",
    rating: 8.8,
    size: "50 GB",
    description: "Lost Ark, Smilegate RPG tarafından geliştirilen ücretsiz MMORPG oyunudur. Arkasına büyülü Lost Ark'ı arayan bir maceracı olarak Arkesia kıtasını keşfedin.",
    features: ["Çok Oyunculu", "MMORPG", "Aksiyon RPG", "Fantezi"],
    requirements: { os: "Windows 10 64-bit", cpu: "Intel Core i3", ram: "8 GB", gpu: "NVIDIA GTX 460" },
    cover: "https://cdn.akamai.steamstatic.com/steam/apps/1599340/header.jpg",
    screenshots: [
      "https://cdn.akamai.steamstatic.com/steam/apps/1599340/ss_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0.600x338.jpg",
      "https://cdn.akamai.steamstatic.com/steam/apps/1599340/ss_b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1.600x338.jpg"
    ],
    downloadUrl: "https://store.steampowered.com/app/1599340/Lost_Ark/"
  },
  {
    id: 16,
    name: "Brawlhalla",
    category: "Dövüş",
    rating: 8.4,
    size: "1.5 GB",
    description: "Brawlhalla, efsanevi savaşçıları bir araya getiren 2D platform dövüş oyunudur. Efsaneler arasından seçim yap ve arkadaşlarınla veya çevrimiçi rakiplerle savaş.",
    features: ["Çok Oyunculu", "Platform", "Dövüş", "2D"],
    requirements: { os: "Windows 7", cpu: "Intel Core 2 Duo", ram: "4 GB", gpu: "NVIDIA GeForce 8800 GT" },
    cover: "https://cdn.akamai.steamstatic.com/steam/apps/291550/header.jpg",
    screenshots: [
      "https://cdn.akamai.steamstatic.com/steam/apps/291550/ss_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0.600x338.jpg"
    ],
    downloadUrl: "https://store.steampowered.com/app/291550/Brawlhalla/"
  },
  {
    id: 17,
    name: "Smite",
    category: "MOBA",
    rating: 8.3,
    size: "30 GB",
    description: "Smite, tanrıları ve efsanevi varlıkları kontrol ettiğiniz üçüncü şahıs MOBA oyunudur. Mitolojiden gelen yüzlerce tanrı arasından seçim yaparak 5v5 savaşlarına girin.",
    features: ["Çok Oyunculu", "MOBA", "Mitoloji", "3D"],
    requirements: { os: "Windows 7 64-bit", cpu: "Intel Core i5", ram: "8 GB", gpu: "NVIDIA GTX 660" },
    cover: "https://cdn.akamai.steamstatic.com/steam/apps/386360/header.jpg",
    screenshots: [
      "https://cdn.akamai.steamstatic.com/steam/apps/386360/ss_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0.600x338.jpg"
    ],
    downloadUrl: "https://store.steampowered.com/app/386360/SMITE/"
  },
  {
    id: 18,
    name: "Planetside 2",
    category: "FPS",
    rating: 7.9,
    size: "20 GB",
    description: "Planetside 2, binlerce oyuncunun aynı anda savaştığı devasa çevrimiçi FPS oyunudur. Üç fraksiyon arasından birini seçerek Auraxis gezegeninin kontrolü için savaş.",
    features: ["Çok Oyunculu", "Massive MMO", "FPS", "Sci-Fi"],
    requirements: { os: "Windows 7 64-bit", cpu: "Intel i5-2500", ram: "8 GB", gpu: "NVIDIA GTX 560" },
    cover: "https://cdn.akamai.steamstatic.com/steam/apps/218230/header.jpg",
    screenshots: [
      "https://cdn.akamai.steamstatic.com/steam/apps/218230/ss_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0.600x338.jpg"
    ],
    downloadUrl: "https://store.steampowered.com/app/218230/PlanetSide_2/"
  },
  {
    id: 19,
    name: "Star Wars: The Old Republic",
    category: "RPG",
    rating: 8.7,
    size: "60 GB",
    description: "Star Wars: The Old Republic, BioWare tarafından geliştirilen devasa MMORPG oyunudur. Jedi veya Sith tarafını seçerek benzersiz sınıf hikayelerini yaşa.",
    features: ["Çok Oyunculu", "MMORPG", "Star Wars", "Hikaye Odaklı"],
    requirements: { os: "Windows 7 64-bit", cpu: "AMD Athlon 64 X2", ram: "8 GB", gpu: "ATI X1800" },
    cover: "https://cdn.akamai.steamstatic.com/steam/apps/1286830/header.jpg",
    screenshots: [
      "https://cdn.akamai.steamstatic.com/steam/apps/1286830/ss_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0.600x338.jpg"
    ],
    downloadUrl: "https://store.steampowered.com/app/1286830/STAR_WARS_The_Old_Republic/"
  },
  {
    id: 20,
    name: "Neverwinter",
    category: "RPG",
    rating: 7.8,
    size: "35 GB",
    description: "Neverwinter, Dungeons & Dragons evreninde geçen ücretsiz aksiyon MMORPG oyunudur. Unutulmuş Diyarlar'da maceraya atılın, zindanları keşfedin ve ejderhalarla savaşın.",
    features: ["Çok Oyunculu", "MMORPG", "D&D", "Fantezi"],
    requirements: { os: "Windows 7 64-bit", cpu: "Intel Core i5", ram: "8 GB", gpu: "NVIDIA GeForce GTX 260" },
    cover: "https://cdn.akamai.steamstatic.com/steam/apps/109600/header.jpg",
    screenshots: [
      "https://cdn.akamai.steamstatic.com/steam/apps/109600/ss_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0.600x338.jpg"
    ],
    downloadUrl: "https://store.steampowered.com/app/109600/Neverwinter/"
  },
  {
    id: 21,
    name: "Yılan Oyunu",
    category: "Arcade",
    rating: 9.5,
    size: "0.1 MB",
    description: "FreePlay'in kendi geliştirdiği klasik Yılan Oyunu! Yılanını büyüt, elmaları topla ve yüksek skor kır. Kolay öğren, bırakması zor bir arcade deneyimi. Yıldızlı bonuslar ve artan seviyelerle heyecan hiç bitmiyor.",
    features: ["Tek Oyunculu", "Arcade", "Yerli Yapım", "Anlık Oyna"],
    requirements: { os: "Windows / Mac / Linux", cpu: "Herhangi", ram: "128 MB", gpu: "Herhangi" },
    cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=460&h=215&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1280&h=720&fit=crop",
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=1280&h=720&fit=crop"
    ],
    downloadUrl: "/games/snake.html",
    localGame: true
  }
];
