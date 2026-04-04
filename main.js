// ─────────────────────────────────────────────
//  KOYUTUNG — main.js
//  Requires: gsap (CDN), works.js
// ─────────────────────────────────────────────

const I18N = {
  en: {
    brand:            'Koyutung',
    'char.bone':      'bone',
    'char.skin':      'skin',
    'char.flesh':     'flesh',
    'mat.bone':       'paper<br/>plaster',
    'mat.skin':       'gold leaf<br/>gel',
    'mat.flesh':      'mineral<br/>powder',
    'nav.works':      'Works',
    'nav.info':       'Info',
    'hero.desc':      'Between layers of mineral pigment and gold leaf —<br/>exploring the female body as a system of signs.',
    'svc.commission': 'Commission',
    'svc.collab':     'Collaboration',
    'svc.exchange':   'Exchange',
    back:             'All Works',
    prev:             'Prev',
    next:             'Next',
    'info.name':      'Ko Yu Tung<br/><span class="info-name-zh">戈羽彤</span>',
    'info.tagline':   'b. 1999, Taiwan',
    'cv.edu':         'Education',
    'cv.edu1':        'Tunghai University, BFA, Department of Fine Arts',
    'cv.solo':        'Solo Exhibitions',
    'cv.solo1':       'Ashen Carnival — Circus Growing in the Wasteland · Queen Marie Arts Space, New Taipei',
    'cv.solo2':       'Halcyon Being · Kaisheng Art Center, Taichung',
    'cv.solo3':       'Scales of Horizon · Fanghua Gallery, Tunghai University, Taichung',
    'cv.group':       'Group Exhibitions',
    'cv.group1':      'She · Neverland Gallery, Taipei',
    'cv.group2':      'One Art Taipei · JR East Hotel Taipei, Taipei',
    'cv.group3':      'The Realm of Dreaming Clouds · Queen Marie Arts Space, New Taipei',
    'cv.group4':      'Future Light: Young Taiwanese Mineral Painters in an Age of Differentiation · Apollo Gallery, Taipei',
    'cv.group5':      'Within the Intense Gaze · Dynasty Gallery, Taipei',
    'cv.group6':      'Taichung Art Fair · Solare Hotel, Taichung',
    'cv.group7':      'New Voices in Art · Dadun Cultural Center, Taichung',
    'cv.group8':      'Please Support: Tunghai Fine Arts BFA Class of 2024 Graduation Exhibition · Tunqu Arts Center, Taichung',
    'cv.group9':      'Differentiation: Mineral Painting by Young Taiwanese Artists · Hong Genshen Museum of Art, Penghu',
    'cv.group10':     'The Tottering Cow Is Not That Important After All · Dadun Cultural Center, Taichung',
    'cv.group11':     'Shanghai-Taiwan Calligraphy and Painting Exhibition · Shiguang Hotel, Shanghai',
    'cv.group12':     'Xiamen Cultural Expo · Xiamen Airport, Xiamen',
    'cv.group13':     'Instructions of How to Be Together · Creative Studio No. 43, Tunghai University, Taichung',
    'cv.group14':     'All · Dadun Cultural Center, Taichung',
    'cv.group15':     'Small Window · Dadun Cultural Center, Taichung',
    'cv.photos':      'Photos',
  },
  zh: {
    brand:            'Koyutung',
    'char.bone':      '骨質',
    'char.skin':      '表皮',
    'char.flesh':     '血肉',
    'mat.bone':       '紙本<br/>石膏',
    'mat.skin':       '金箔<br/>膠質',
    'mat.flesh':      '礦物<br/>粉末',
    'nav.works':      '作品',
    'nav.info':       '關於',
    'hero.desc':      '在礦物質顏料與金箔的層積之間——<br/>探索女性身體作為符號系統的曖昧地帶。',
    'svc.commission': '訂製委託',
    'svc.collab':     '合作交流',
    'svc.exchange':   '作品交換',
    back:             '所有作品',
    prev:             '上一件',
    next:             '下一件',
    'info.name':      '戈羽彤<br/><span class="info-name-zh">Ko Yu Tung</span>',
    'info.tagline':   '1999年生，台灣',
    'cv.edu':         '學歷',
    'cv.edu1':        '東海大學美術學系 學士',
    'cv.solo':        '個展',
    'cv.solo1':       '沉默嘉年—廢土中生長的馬戲 · 瑪麗皇后藝術空間，新北',
    'cv.solo2':       '寧靜存在 · 凱昇藝術中心，台中',
    'cv.solo3':       '海與光之間的鱗片 · 東海大學芳華廳，台中',
    'cv.group':       '聯展',
    'cv.group1':      '她 She · Neverland Gallery，台北',
    'cv.group2':      'One Art Taipei · JR東日本大飯店台北，台北',
    'cv.group3':      '密於雲夢之野 · 瑪麗皇后藝術空間，新北',
    'cv.group4':      '未來光：差異化時代的臺灣青年膠彩畫家 · 阿波羅畫廊，台北',
    'cv.group5':      '目光深切之裏 · 朝代畫廊，台北',
    'cv.group6':      '台中藝術博覽會 · 日月千禧酒店，台中',
    'cv.group7':      '藝術新聲 · 大墩文化中心，台中',
    'cv.group8':      '請支援：東海美術系109級學士班畢業展 · 屯區藝文中心，台中',
    'cv.group9':      '差異化：台灣青年世代的膠彩畫 · 洪根深美術館，澎湖',
    'cv.group10':     '搖搖欲墜的乳牛其實沒那麼重要 · 大墩文化中心，台中',
    'cv.group11':     '滬臺書畫藝術展 · 拾光文旅，上海',
    'cv.group12':     '廈門文化博覽會 · 廈門機場，廈門',
    'cv.group13':     'Instructions of How to Be Together · 東海大學43號創意實習中心，台中',
    'cv.group14':     '皆 · 大墩文化中心，台中',
    'cv.group15':     '小軒窗 · 大墩文化中心，台中',
    'cv.photos':      '照片',
  },
  ja: {
    brand:            'Koyutung',
    'char.bone':      '骨格',
    'char.skin':      '表皮',
    'char.flesh':     '血肉',
    'mat.bone':       '紙本<br/>石膏',
    'mat.skin':       '金箔<br/>膠質',
    'mat.flesh':      '鉱物<br/>粉末',
    'nav.works':      '作品',
    'nav.info':       '情報',
    'hero.desc':      '鉱物性顔料と金箔の層の間で——<br/>記号体系としての女性の身体を探る。',
    'svc.commission': '委託制作',
    'svc.collab':     'コラボレーション',
    'svc.exchange':   '作品交換',
    back:             '全作品',
    prev:             '前へ',
    next:             '次へ',
    'info.name':      'コ・ユートン<br/><span class="info-name-zh">戈羽彤</span>',
    'info.tagline':   '1999年生まれ、台湾',
    'cv.edu':         '学歴',
    'cv.edu1':        '東海大学美術学部 学士',
    'cv.solo':        '個展',
    'cv.solo1':       '廃土の中に育つサーカス · クイーンメアリーアートスペース、新北',
    'cv.solo2':       '静けさの存在 · 凱昇アートセンター、台中',
    'cv.solo3':       '海と光の間の鱗 · 東海大学芳華廳、台中',
    'cv.group':       'グループ展',
    'cv.group1':      '彼女 · ネバーランドギャラリー、台北',
    'cv.group2':      'One Art Taipei · JR東日本ホテル台北、台北',
    'cv.group3':      '雲夢の野に密に · クイーンメアリーアートスペース、新北',
    'cv.group4':      '未来光：差異化時代の台湾若手膠彩画家 · アポロギャラリー、台北',
    'cv.group5':      '眼差しの深みの裏に · 朝代ギャラリー、台北',
    'cv.group6':      '台中アートフェア · ソラーレホテル、台中',
    'cv.group7':      '芸術の新声 · 大墩文化センター、台中',
    'cv.group8':      'サポートを：東海美術系第109期学士卒業展 · 屯区芸文センター、台中',
    'cv.group9':      '差異化：台湾若手世代の膠彩画 · 洪根深美術館、澎湖',
    'cv.group10':     'ぐらつく乳牛は実はそれほど重要でない · 大墩文化センター、台中',
    'cv.group11':     '滬台書画芸術展 · 拾光文旅、上海',
    'cv.group12':     '廈門文化博覧会 · 廈門空港、廈門',
    'cv.group13':     'Instructions of How to Be Together · 東海大学43号クリエイティブスタジオ、台中',
    'cv.group14':     'すべて · 大墩文化センター、台中',
    'cv.group15':     '小さな窓 · 大墩文化センター、台中',
    'cv.photos':      '写真',
  },
};

const IMAGE_BASE = 'images/web/';

let lang         = 'en';
let currentIndex = 0;

// ── Language ──────────────────────────────────

function applyLang(l, animate) {
  lang = l;

  const targets = Array.from(document.querySelectorAll('[data-i18n]'));

  const doUpdate = () => {
    targets.forEach(el => {
      const val = I18N[l][el.dataset.i18n];
      if (val !== undefined) el.innerHTML = val;
    });
    // sync gallery overlay titles
    document.querySelectorAll('.overlay-title').forEach((el, i) => {
      if (WORKS[i]) el.textContent = WORKS[i].title[l];
    });
    // sync open work page
    if (document.getElementById('workPage').style.display !== 'none') {
      document.getElementById('workTitle').textContent = WORKS[currentIndex].title[l];
      document.getElementById('workNote').textContent  = WORKS[currentIndex].note[l];
    }
  };

  if (animate) {
    gsap.to(targets, {
      opacity: 0, duration: 0.14, ease: 'power1.in',
      onComplete: () => {
        doUpdate();
        gsap.to(targets, { opacity: 1, duration: 0.24, ease: 'power2.out' });
      },
    });
    if (document.getElementById('workPage').style.display !== 'none') {
      const els = [document.getElementById('workTitle'), document.getElementById('workNote')];
      gsap.to(els, {
        opacity: 0, duration: 0.14,
        onComplete: () => {
          document.getElementById('workTitle').textContent = WORKS[currentIndex].title[l];
          document.getElementById('workNote').textContent  = WORKS[currentIndex].note[l];
          gsap.to(els, { opacity: 1, duration: 0.24 });
        },
      });
    }
  } else {
    doUpdate();
  }
}

// ── Gallery ───────────────────────────────────

function buildMasonry() {
  const grid = document.getElementById('masonry');
  grid.innerHTML = '';

  WORKS.forEach((w, i) => {
    if (w.tag === 'Exhibition' || w.tag === 'Artist') return;
    const item = document.createElement('div');
    item.className     = 'item';
    item.dataset.index = i;
    item.style.opacity = 0;

    // image wrapper with aspect ratio
    const imgWrap = document.createElement('div');
    imgWrap.className = `item-img ${w.ratio}`;

    const img = document.createElement('img');
    img.src    = `${IMAGE_BASE}${w.image}`;
    img.alt    = w.title.en;
    img.loading = 'lazy';
    img.onerror = () => { img.style.display = 'none'; };
    imgWrap.appendChild(img);

    // overlay
    const overlay = document.createElement('div');
    overlay.className = 'item-overlay';
    overlay.innerHTML = `<div class="overlay-title">${w.title[lang]}</div><span class="overlay-tag">${w.tag}</span>`;

    item.appendChild(imgWrap);
    item.appendChild(overlay);

    item.addEventListener('mouseenter', () => {
      overlay.style.pointerEvents = 'auto';
      gsap.to(overlay, { opacity: 1, duration: 0.2, ease: 'power1.out' });
    });
    item.addEventListener('mouseleave', () => {
      overlay.style.pointerEvents = 'none';
      gsap.to(overlay, { opacity: 0, duration: 0.16, ease: 'power1.in' });
    });
    item.addEventListener('click', () => openWork(i));

    grid.appendChild(item);
  });
}

// ── Work detail ───────────────────────────────

let imageIndex = 0;

function renderWorkImages(w) {
  const imgs = w.images || [w.image];
  imageIndex = 0;
  const img = document.getElementById('workImg');
  img.src = `${IMAGE_BASE}${imgs[0]}`;
  img.alt = w.title.en;

  const prevBtn = document.getElementById('imgPrev');
  const nextBtn = document.getElementById('imgNext');
  const dots    = document.getElementById('imgDots');

  if (imgs.length > 1) {
    prevBtn.style.display = 'flex';
    nextBtn.style.display = 'flex';
    dots.style.display = 'flex';
    dots.innerHTML = imgs.map((_, i) =>
      `<span class="img-dot${i === 0 ? ' active' : ''}" data-i="${i}"></span>`
    ).join('');
    dots.querySelectorAll('.img-dot').forEach(dot => {
      dot.addEventListener('click', () => goToImage(parseInt(dot.dataset.i), w));
    });
  } else {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    dots.style.display = 'none';
  }
}

function goToImage(i, w) {
  const imgs = w.images || [w.image];
  imageIndex = (i + imgs.length) % imgs.length;
  const img = document.getElementById('workImg');
  gsap.to(img, { opacity: 0, duration: 0.15, onComplete: () => {
    img.src = `${IMAGE_BASE}${imgs[imageIndex]}`;
    gsap.to(img, { opacity: 1, duration: 0.2 });
  }});
  document.querySelectorAll('.img-dot').forEach((d, idx) => {
    d.classList.toggle('active', idx === imageIndex);
  });
}

function renderWork(idx) {
  const w = WORKS[idx];
  document.getElementById('workTitle').textContent      = w.title[lang];
  document.getElementById('workMeta').textContent       = w.meta;
  document.getElementById('workNote').textContent       = w.note[lang];
  document.getElementById('workIndexLabel').textContent = `${idx + 1} / ${WORKS.length}`;
  renderWorkImages(w);
}

function openWork(idx) {
  currentIndex = idx;
  renderWork(idx);

  const indexPage = document.getElementById('indexPage');
  const workPage  = document.getElementById('workPage');

  gsap.to(indexPage, {
    opacity: 0, duration: 0.22, ease: 'power1.in',
    onComplete: () => {
      indexPage.style.display = 'none';
      workPage.style.display  = 'block';
      gsap.fromTo(['#bookLeft', '#bookRight'], { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' });
    },
  });
}

function closeWork() {
  gsap.to(['#bookLeft', '#bookRight'], {
    opacity: 0, duration: 0.22, ease: 'power2.in',
    onComplete: () => {
      document.getElementById('workPage').style.display  = 'none';
      const ip = document.getElementById('indexPage');
      ip.style.display = 'block';
      gsap.fromTo(ip, { opacity: 0 }, { opacity: 1, duration: 0.28 });
    },
  });
}

function navigateWork(dir) {
  let next = (currentIndex + dir + WORKS.length) % WORKS.length;
  while (WORKS[next].tag === 'Exhibition' || WORKS[next].tag === 'Artist') {
    next = (next + dir + WORKS.length) % WORKS.length;
  }
  const els  = ['#bookLeft', '#bookRight'];
  gsap.to(els, {
    opacity: 0, x: dir * -24, duration: 0.18, ease: 'power1.in',
    onComplete: () => {
      currentIndex = next;
      renderWork(next);
      gsap.fromTo(els,
        { opacity: 0, x: dir * 24 },
        { opacity: 1, x: 0, duration: 0.28, ease: 'power2.out' },
      );
    },
  });
}

// ── Init ──────────────────────────────────────

function buildInfoPhotos() {
  const container = document.getElementById('infoPhotos');
  if (!container) return;
  container.innerHTML = '';
  WORKS.forEach(w => {
    if (w.tag !== 'Exhibition' && w.tag !== 'Artist') return;
    const imgs = w.images || [w.image];
    imgs.forEach(filename => {
      const img = document.createElement('img');
      img.src = `${IMAGE_BASE}${filename}`;
      img.alt = w.title.en;
      img.loading = 'lazy';
      img.onerror = () => { img.style.display = 'none'; };
      container.appendChild(img);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildMasonry();
  buildInfoPhotos();

  // Hero entrance animation
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.fromTo('#heroName', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.85 }, 0.1)
    .fromTo('#heroSvcs', { opacity: 0 },         { opacity: 1, duration: 0.55 }, 0.6)
    .to('#heroLine',     { width: '100%', duration: 0.65, ease: 'power2.inOut' }, 0.38)
    .fromTo('[data-i18n="hero.desc"]', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.75 }, 0.62);

  // Gallery stagger entrance
  gsap.fromTo('.item',
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.038, delay: 0.85 },
  );

  // Nav: Works / Info
  document.querySelectorAll('.nav-center li').forEach(li => {
    li.addEventListener('click', () => {
      const key = li.dataset.i18n;
      if (key === 'nav.works') {
        if (document.getElementById('workPage').style.display !== 'none') {
          closeWork();
        } else {
          document.getElementById('infoPage').style.display  = 'none';
          document.getElementById('indexPage').style.display = 'block';
        }
        document.querySelectorAll('.nav-center li').forEach(l => l.classList.remove('active'));
        li.classList.add('active');
      } else if (key === 'nav.info') {
        document.getElementById('workPage').style.display  = 'none';
        document.getElementById('indexPage').style.display = 'none';
        document.getElementById('infoPage').style.display  = 'block';
        document.querySelectorAll('.nav-center li').forEach(l => l.classList.remove('active'));
        li.classList.add('active');
      }
    });
  });

  // Back / brand navigation
  document.getElementById('backBtn').addEventListener('click', closeWork);
  document.getElementById('brandLink').addEventListener('click', () => {
    if (document.getElementById('workPage').style.display !== 'none') {
      closeWork();
    } else if (document.getElementById('infoPage').style.display !== 'none') {
      document.getElementById('infoPage').style.display  = 'none';
      document.getElementById('indexPage').style.display = 'block';
      document.querySelectorAll('.nav-center li').forEach(l => l.classList.remove('active'));
      document.querySelector('.nav-center li[data-i18n="nav.works"]').classList.add('active');
    }
  });

  // Work prev / next
  document.getElementById('imgPrev').addEventListener('click', () => goToImage(imageIndex - 1, WORKS[currentIndex]));
  document.getElementById('imgNext').addEventListener('click', () => goToImage(imageIndex + 1, WORKS[currentIndex]));
  document.getElementById('prevBtn').addEventListener('click', () => navigateWork(-1));
  document.getElementById('nextBtn').addEventListener('click', () => navigateWork(1));

  // Language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.lang === lang) return;
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyLang(btn.dataset.lang, true);
    });
  });
});
