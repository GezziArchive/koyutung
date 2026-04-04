# koyutung — 網站說明

## 資料夾結構

```
koyutung/
├── index.html       ← 主頁面，不需要動
├── style.css        ← 所有樣式
├── main.js          ← 互動邏輯（語言切換、動畫、書頁）
├── works.js         ← 作品資料（標題、筆記、圖片檔名）← 主要在這裡編輯
└── images/          ← 把圖片放這裡
    ├── Offering.png
    ├── The_Garden_of_Forking_Paths.png
    ├── Spinning.png
    └── ... （其餘作品）
```

---

## 匯入圖片步驟

1. 把圖片檔案放進 `images/` 資料夾
2. 確認檔名與 `works.js` 裡 `image` 欄位一致（大小寫都要對）
3. 圖片格式建議 PNG 或 JPG，解析度建議長邊 1600px 以上

所有圖片檔名（照 works.js 順序）：

```
Offering.png
The_Garden_of_Forking_Paths.png
Spinning.png
Lavender_Frostfall.png
Obsidian_Gleam.png
Birdbath.png
D_Major.png
Water_Mirror.png
Ferns_Growing_Between_Bricks.png
Falling_into_a_Tumultuous_Dream.png
Carousel_and_the_North_Star.png
The_Guardian_Under_the_Bed.png
Dracula.png
Veil.png
Violet.png
Consanguine_Salome.png
White_Horse_on_the_Snowfield.png
Packing.png
Starshard.png
Klamm.png
Black_Narcissus.png
Everlasting_Rose.png
Transfigured_Love.png
```

---

## 修改作品內容

打開 `works.js`，每件作品是一個物件：

```js
{
  image: 'Offering.png',   // 圖片檔名
  ratio: 'tall',           // 縮圖比例：tall | sq | wide | port
  tag: 'Fine Art',         // 類別標籤
  title: {
    en: 'Offering',
    zh: '供奉',             // ← 在這裡修改中文標題
    ja: '捧げもの',         // ← 在這裡修改日文標題
  },
  meta: 'Gouache on silk · 2024',   // 媒材 · 年份
  note: {
    en: '...',             // 英文創作筆記
    zh: '...',             // 中文創作筆記
    ja: '...',             // 日文創作筆記
  },
},
```

---

## 新增作品

在 `works.js` 的 `WORKS` 陣列最後加一個物件，格式同上。
圖片放進 `images/` 即可，不需要動其他檔案。

---

## 縮圖比例說明

| 值     | 比例  | 適合               |
|--------|-------|--------------------|
| `tall` | 2:3   | 直式作品、人像      |
| `sq`   | 1:1   | 方形作品            |
| `wide` | 4:3   | 橫式作品、風景      |
| `port` | 3:4   | 微直式              |

---

## Gezzi 外連

`index.html` 第 13 行有一個連結：
```html
<a href="https://gezzi.com" target="_blank" rel="noopener">Gezzi ↗</a>
```
把 `https://gezzi.com` 換成你的實際 Gezzi 網址。

---

## 部署

這是純靜態網站，直接上傳整個資料夾到任何靜態主機即可：
- GitHub Pages
- Netlify（直接拖曳資料夾）
- Vercel

不需要後端，不需要資料庫。
