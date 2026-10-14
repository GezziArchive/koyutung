# koyutung — 網站說明

純靜態網站，部署在 Vercel（koyutung.art），原始碼在 GitHub `GezziArchive/koyutung`。

## 資料夾結構

```
koyutung/
├── index.html        ← 頁面結構、Info 頁的 CV
├── style.css         ← 所有樣式
├── main.js           ← 互動邏輯、三語介面文字（I18N）
├── works.js          ← ⭐ 作品資料，最常改這裡
├── .vercelignore     ← 哪些檔案不上傳到 Vercel
└── images/
    ├── web/          ← 網站實際使用的圖片（.webp）
    ├── char_*.png    ← 首頁「戈羽彤」三個字
    └── 其他          ← 原始大圖，不會上傳到網站
```

## 新增作品

1. 把圖片轉成 `.webp`（長邊約 1600–2000px），放進 `images/web/`
2. 檔名用英文和底線，例如 `She_is_Coral_Detail.webp`
3. 在 `works.js` 的 `WORKS` 陣列加一個物件（越前面越早出現在首頁）：

```js
{
  image: 'Title.webp',                          // 封面縮圖
  images: ['Title.webp', 'Title_Detail.webp'],  // 作品頁可滑動的圖（單張就整行刪掉）
  ratio: 'sq',                                  // tall 2:3 · port 3:4 · sq 1:1 · wide 4:3
  tag: 'Fine Art',                              // Fine Art / Sculpture / Printmaking
  title: { en: '', zh: '', ja: '' },
  meta: '媒材 · 年份',                            // 只有一種語言
  note: { en: '', zh: '', ja: '' },             // 可以留空 ''
},
```

`tag` 填 `'Exhibition'` 或 `'Artist'` 的項目不會進作品集，只會出現在 Info 頁的 Photos 區。

## 修改 CV

要改兩個地方：
1. `index.html` 的 Info 區加一個 `cv-row`，`data-i18n` 給一個新的 key
2. `main.js` 的 `I18N` 裡，`en` / `zh` / `ja` 三個語言都加上同一個 key

## Gezzi 外連

`index.html` 導覽列的 `Gezzi ↗` 連到 `https://www.gezziarchive.com/`。
