// ╔══════════════════════════════════════════════════════════════╗
// ║                  works.js — 作品資料檔                       ║
// ╠══════════════════════════════════════════════════════════════╣
// ║                                                              ║
// ║  📌 每件作品的欄位說明                                        ║
// ║                                                              ║
// ║  image:  'Filename.png'                                      ║
// ║          gallery 封面縮圖，放在 images/ 資料夾裡              ║
// ║                                                              ║
// ║  images: ['File1.png', 'File2.png', 'File3.png']            ║
// ║          書頁裡可左右滑動的圖片陣列                           ║
// ║          ★ 不填這欄 → 只顯示單張，不出現切換按鈕             ║
// ║          ★ 填了就會出現 ‹ › 按鈕，可以滑動                   ║
// ║          第一張建議跟 image 欄一致                            ║
// ║                                                              ║
// ║  ratio:  縮圖比例                                            ║
// ║          'tall' = 2:3   'port' = 3:4                        ║
// ║          'sq'   = 1:1   'wide' = 4:3                        ║
// ║                                                              ║
// ║  tag:    作品類別標籤（Fine Art / Sculpture / Printmaking）   ║
// ║                                                              ║
// ║  title:  { en: '...', zh: '...', ja: '...' }                ║
// ║          三語標題                                            ║
// ║                                                              ║
// ║  meta:   '媒材 · 年份'（單語，不做翻譯）                     ║
// ║                                                              ║
// ║  note:   { en: '...', zh: '...', ja: '...' }                ║
// ║          三語創作筆記，可以是空字串 ''                        ║
// ║                                                              ║
// ║  🆕 新增作品：複製下面任一個物件，填入資料，放進陣列          ║
// ║  🖼️  新增圖片：把檔案放進 images/ 資料夾，檔名填入欄位        ║
// ║                                                              ║
// ╚══════════════════════════════════════════════════════════════╝

const WORKS = [
  {
    image: 'Offering1.png',
    images: ['Offering1.png', 'Offering2.png', 'Offering3.png', 'Offering4.JPEG'],
    ratio: 'tall',
    tag: 'Sculpture',
    title: { en: 'Offering', zh: '祈', ja: '祈り' },
    meta: 'Plaster, silver leaf, mineral pigments, matte ink, aluminum · 2025',
    note: {
      en: 'Dolls: Witnesses of Existence and Memory\n\nMy childhood was surrounded by dolls. A doll is a peculiar kind of vessel—lifeless, and therefore more faithful than life itself. They crack, fade, go missing, yet they remain the undercurrent of countless memories, leaving traces far longer-lasting than any specific event.\n\nMy sculptures exist in the same way. Light changes their expressions day by day. At certain moments, I am convinced they are looking back at me.',
      zh: '人偶：存在的見證與記憶\n\n我的童年被大量的人偶包圍。人偶是特別的容器，它沒有生命，因而比生命更忠實。它們會破裂、脫色、失蹤，卻是一連串記憶的底色，留下比具體事件更長久的痕跡。\n\n我的雕塑也是這樣的存在。光每天都會更改它們的表情，某些時刻，我確信它們正在凝視我。',
      ja: '人形：存在の証言と記憶\n\n私の幼少期は多くの人形に囲まれていた。人形は特別な器だ——命がないからこそ、命よりも忠実だ。割れ、色褪せ、消えていく。それでも無数の記憶の下地として、具体的な出来事よりも長く痕跡を残す。\n\n私の彫刻も同じ存在だ。光は毎日その表情を変える。ある瞬間、私は確かに、彫刻がこちらを見つめていると確信する。',
    },
  },
  {
    image: 'Birdbath.png',
    images: ['Birdbath.png', 'Birdbath.jpeg'],
    ratio: 'sq',
    tag: 'Fine Art',
    title: { en: 'Birdbath', zh: '鳥浴池', ja: '水浴び場' },
    meta: 'Eastern gouache, silver leaf, mixed media on paper · 2025',
    note: {
      en: 'Bird bath, and the little puffball shaking its wings dry under the sun.',
      zh: '鳥浴池，和在陽光下甩乾翅膀的澎澎球。',
      ja: '水浴び場、そして日光の下で羽を乾かすふわふわの小さな球。',
    },
  },
  {
    image: 'Black_Narcissus.png',
    ratio: 'tall',
    tag: 'Fine Art',
    title: { en: 'Black Narcissus', zh: '黑水仙', ja: '黒い水仙' },
    meta: 'Mineral pigments, metal leaf, earth pigments · 2024',
    note: {
      en: 'Black Narcissus (1947). A feral and perilous forest, indifferent to the civilized world.',
      zh: '黑水仙(1947)，生猛而危機四伏的森林，與文明世界彼此漠不關心。',
      ja: '「黒水仙」(1947)。野性的で危険に満ちた森、文明世界と互いに無関心。',
    },
  },
  {
    image: 'Carousel_and_the_North_Star.png',
    ratio: 'sq',
    tag: 'Fine Art',
    title: { en: 'Carousel and the North Star', zh: '木馬與北極星', ja: '回転木馬と北極星' },
    meta: 'Eastern gouache, mixed media on paper · 2025',
    note: {
      en: 'The rocking horse by the bed creaked like branches rubbing against each other.',
      zh: '床邊的木馬，在黑夜中發出枝椏摩擦的聲音。',
      ja: 'ベッドの傍らの木馬が、枝と枝がこすれ合うような音を立てた。',
    },
  },
  {
    image: 'Consanguine_Salome.png',
    images: ['Consanguine_Salome.png', 'Consanguine_Salome_Detail.JPG', 'Consanguine_Salome_Detail2.jpg'],
    ratio: 'port',
    tag: 'Fine Art',
    title: { en: 'Consanguine Salome', zh: '同源莎樂美', ja: '同血のサロメ' },
    meta: 'Eastern gouache, mixed media on paper · 2025',
    note: {
      en: 'A being of the same origin, risen from the same water, an enemy who carries my own likeness.',
      zh: '同源的，自同水潭中成人，和我長相相同的敵人。',
      ja: '同じ源から生まれ、同じ水から育ち、私と同じ顔を持つ敵。',
    },
  },
  {
    image: 'D_Major.png',
    images: ['D_Major.png', 'D_Major_Detail.jpg', 'D_Major_Detail2.jpg'],
    ratio: 'sq',
    tag: 'Fine Art',
    title: { en: 'D Major', zh: 'D大調', ja: 'ニ長調' },
    meta: 'Eastern gouache, silver leaf, mixed media on wooden board · 2025',
    note: {
      en: '*A swell of strings, the kind that plays right before a boss fight*',
      zh: '*一陣Boss戰前的弦樂聲*',
      ja: '*ボス戦直前に流れるような、弦楽器の高鳴り*',
    },
  },
  {
    image: 'Dracula.png',
    ratio: 'port',
    tag: 'Fine Art',
    title: { en: 'Dracula', zh: '德古拉', ja: 'ドラキュラ' },
    meta: 'Eastern gouache, Luoshui specialty collage paper, mixed media on wooden board · 2024',
    note: {
      en: '🦇',
      zh: '🦇',
      ja: '🦇',
    },
  },
  {
    image: 'Everlasting_Rose.png',
    ratio: 'tall',
    tag: 'Sculpture',
    title: { en: 'Everlasting Rose', zh: '永生玫瑰', ja: '永遠の薔薇' },
    meta: 'Imitation gold leaf, pastel, mineral pigments · 2024',
    note: {
      en: '🌹',
      zh: '🌹',
      ja: '🌹',
    },
  },
  {
    image: 'Falling_into_a_Tumultuous_Dream.png',
    ratio: 'tall',
    tag: 'Fine Art',
    title: { en: 'Falling into a Tumultuous Dream', zh: '墜入喧囂的夢境', ja: '喧騒の夢へと落ちる' },
    meta: 'Eastern gouache, specialty leaf, mixed media on paper · 2025',
    note: {
      en: 'Toppling over and over, the kaleidoscope slices the world into tens of millions of shards. Unfamiliar colors surge up from the ocean\'s floor and explode along the sky\'s outer rim.',
      zh: '倒下去再倒下去，萬花筒把視野內的畫面切成一千萬片，從未看過的顏色從海底浮起，砸碎在天空邊緣的角落。',
      ja: '何度も何度も倒れ込み、万華鏡が視界を一千万の欠片に切り刻む。見たことのない色が海底から浮かび上がり、空の縁で砕け散る。',
    },
  },
  {
    image: 'Ferns_Growing_Between_Bricks.png',
    ratio: 'wide',
    tag: 'Fine Art',
    title: { en: 'Ferns Growing Between Bricks', zh: '磚縫中生長的蕨', ja: '煉瓦の隙間に育つシダ' },
    meta: 'Eastern gouache, specialty leaf, mixed media on paper · 2025',
    note: {
      en: 'Roadside plant: I have crossed a desert, fallen from a tower three hundred li away, survived the churn of a bird\'s digestive system just to arrive here. From this day on, I will cling to the brick by your doorstep until the next end of the world.\n\nHouse plant: You didn\'t give me fertilizer. I\'m dying.',
      zh: '路邊植物：我在沙漠中行走，從三百里外的高樓落下，被鳥類的消化系統滾過才來到這裡，從今天起，我將與你的磚頭糾纏到下一次世界末日。\n\n家養植物：你沒給我肥料我要死了。',
      ja: '路傍の植物：砂漠を渡り、三百里先の塔から落ち、鳥の消化器官を転がされてここに来た。今日からあなたの煉瓦に、次の世界の終わりまでしがみつく。\n\n室内植物：肥料をくれなかった。死にそうだ。',
    },
  },
  {
    image: 'Klamm.png',
    ratio: 'tall',
    tag: 'Fine Art',
    title: { en: 'Klamm', zh: '克拉姆', ja: 'クラム' },
    meta: 'Silver leaf, mixed media on wooden board · 2024',
    note: {
      en: 'Searching for the Castle\n\nI walk along the road that leads to the castle. No map marks its location. The villagers offer contradictory directions, and the mountain fog rises after dusk as if sworn to keep its silence.\n\nAgain and again I arrive at its margins — a wall, a shadow, a door that remains forever closed — each encounter more uncertain than the last.\n\nAt times I suspect the castle never existed. At times I feel I have long been inside its very depths, simply forbidden to know it.\n\nStill, I go on searching.',
      zh: '尋找城堡\n\n我走在通往城堡的路上。地圖沒有標示，村民給出彼此矛盾的方向，山霧在日落後自動升起，彷彿為它守口如瓶。\n\n我一次又一次抵達它的邊緣——一堵牆、一片陰影、一扇永遠關著的門——每一次都比前一次更不確定。\n\n有時我懷疑城堡從未存在；有時我感覺自己早已在城堡的腹地裡，只是不被允許知曉。\n\n我仍繼續尋找。',
      ja: '城を探して\n\n城へと続く道を歩く。地図には記されていない。村人たちは互いに矛盾した道を教え、山霧は日没後に自ずと立ち込め、城のために口を閉ざしているかのようだ。\n\n何度もその縁に辿り着く——壁、影、永遠に閉じた扉——そのたびに前より確かさが薄れる。\n\n時に城などなかったのではと疑う。時に自分はとっくに城の奥深くにいるのに、ただそれを知ることを許されていないのだと感じる。\n\nそれでも探し続ける。',
    },
  },
  {
    image: 'Lavender_Frostfall.png',
    images: ['Lavender_Frostfall.png', 'Lavender_Frostfall_Detail.jpg'],
    ratio: 'sq',
    tag: 'Fine Art',
    title: { en: 'Lavender Frostfall', zh: '薰衣草色的霜降', ja: 'ラベンダー色の霜降り' },
    meta: 'Eastern gouache, silver leaf, mixed media on paper · 2025',
    note: {
      en: '✦ Extremely Dangerous\n\nDo not approach the purple crystalline deposits. Physical contact may result in unpredictable consequences.\n\nLavandula Frost has been officially classified as a sub-perceptual atmospheric anomaly. It is not a typical ice deposition, but a solidified optical residue produced by the refraction of memory-wave frequencies.\n\nWhen the human brain generates an incompletely retrieved memory, it releases an ultra–low-frequency M-δ signal. Under specific humidity and low-light conditions, the M-δ wave penetrates the skull and interferes with the pre-dawn inversion layer, causing a spectral shift that produces violet wavelengths between 390–420 nm — briefly resonating with the outer hydrogen bonds of water molecules, causing atmospheric moisture to crystallize into pale lavender frost.',
      zh: '✦ 異常危險\n\n請不要隨意靠近紫色結晶，若接觸將導致不可預測的後果。\n\n根據近十年跨領域的研究，薰衣草色霜降被正式視為特殊大氣異常。它並非典型的冰晶沉積，而是由記憶波段的折射殘留形成的光學固態現象。\n\n當人類腦部出現「未完成提取的記憶」時，會釋放出極低頻的 M-δ 訊號。在特定濕度與低光條件下，M-δ 波可能穿透顱骨，與清晨的逆溫層相互干涉，產生光譜偏移。該偏移的結果是一種介於 390–420 nm 的紫色波段，與水分子外部的氫鍵短暫共振，水氣因而結晶，形成淡紫色的霜層。',
      ja: '✦ 異常危険\n\n紫色の結晶には近づかないこと。接触すると予測不能な結果を招く恐れがある。\n\n薰衣草色霜降は特殊大気異常として正式に分類されている。通常の氷晶沈積ではなく、記憶波周波数の屈折残留によって形成された光学的固体現象だ。\n\n脳が「未完全に取り出された記憶」を生成すると、極低周波のM-δ信号を放出する。特定の湿度と低光条件下で、M-δ波は頭蓋骨を貫通し、夜明け前の逆転層に干渉してスペクトルシフトを引き起こす。このシフトは390〜420nmの紫色波長を生成し、水分子の外側の水素結合と短時間共鳴して大気中の水分を結晶化させ、淡い薰衣草色の霜を形成する。',
    },
  },
  {
    image: 'Obsidian_Gleam.png',
    images: ['Obsidian_Gleam.png', 'Obsidian_Gleam_Detail.JPEG', 'Obsidian_Gleam_Detail1.jpg'],
    ratio: 'sq',
    tag: 'Fine Art',
    title: { en: 'Obsidian Gleam', zh: '曜', ja: '曜' },
    meta: 'Eastern gouache, silver leaf, mixed media on paper · 2025',
    note: {
      en: 'Obsidian glows beneath the rooftop.',
      zh: '黑曜石在房頂下發光。',
      ja: '黒曜石が屋根の下で光る。',
    },
  },
  {
    image: 'Packing1.png',
    images: ['Packing1.png', 'Packing2.png', 'Packing_Detail2.JPEG'],
    ratio: 'tall',
    tag: 'Fine Art',
    title: { en: 'Packing', zh: '打包', ja: '荷造り' },
    meta: 'Eastern gouache, mixed media on paper · 2025',
    note: {
      en: 'Tie up the braids and take them with you.',
      zh: '束起辮子打包帶走。',
      ja: '三つ編みを束ねて、持っていく。',
    },
  },
  {
    image: 'Spinning.png',
    images: ['Spinning.png', 'Spinning_Detail.jpeg', 'Spinning_Detail2.JPEG'],
    ratio: 'sq',
    tag: 'Fine Art',
    title: { en: 'Spinning', zh: '眩暈', ja: '眩暈' },
    meta: 'Eastern gouache, mixed media on paper, silk gauze · 2025',
    note: {
      en: 'Anxiety is the dizziness of freedom.',
      zh: '焦慮是自由的眩暈。',
      ja: '不安とは自由の眩暈だ。',
    },
  },
  {
    image: 'Starshard.png',
    ratio: 'sq',
    tag: 'Fine Art',
    title: { en: 'Starshard', zh: '星芒', ja: '星芒' },
    meta: 'Eastern gouache, specialty leaf, mixed media on paper · 2025',
    note: {
      en: 'The North Star on the Way Home.',
      zh: '回家路上的北極星。',
      ja: '帰り道の北極星。',
    },
  },
  {
    image: 'The_Garden_of_Forking_Paths.png',
    ratio: 'sq',
    tag: 'Fine Art',
    title: { en: 'The Garden of Forking Paths', zh: '小徑分岔的花園', ja: '岐路の庭' },
    meta: 'Eastern gouache, mixed media on paper, silk gauze · 2025',
    note: {
      en: '"El jardín de senderos que se bifurcan" (Borges, 1941)',
      zh: '"El jardín de senderos que se bifurcan" (波赫士，1941)',
      ja: '"El jardín de senderos que se bifurcan" (ボルヘス，1941)',
    },
  },
  {
    image: 'The_Guardian_Under_the_Bed.png',
    images: ['The_Guardian_Under_the_Bed.png', 'The_Guardian_Under_the_Bed_Detail.PNG'],
    ratio: 'tall',
    tag: 'Fine Art',
    title: { en: 'The Guardian Under the Bed', zh: '床底的守護者', ja: 'ベッドの下の守護者' },
    meta: 'Eastern gouache, silver leaf, mixed media on wooden board · 2025',
    note: {
      en: 'Let\'s stop losing sleep, all right?',
      zh: '我們都別再失眠了，好嗎。',
      ja: 'もう眠れない夜は終わりにしよう、ね。',
    },
  },
  {
    image: 'Transfigured_Love.png',
    images: ['Transfigured_Love.png', 'Transfigured_Love_Process.jpg'],
    ratio: 'sq',
    tag: 'Printmaking',
    title: { en: 'Transfigured Love', zh: '變相之愛', ja: '変容する愛' },
    meta: 'Mineral pigments, imitation gold leaf, silk gauze, ash, mixed media on paper · 2025',
    note: {
      en: 'Symptoms of disease are nothing but a disguised manifestation of the power of love; and all disease is only love transformed.',
      zh: '一切疾病皆為變相之愛。',
      ja: '病の症状とは愛の力の変装した顕れに他ならない。すべての病は変容した愛に過ぎない。',
    },
  },
  {
    image: 'Veil.png',
    images: ['Veil.png', 'Veil_Detail.PNG'],
    ratio: 'wide',
    tag: 'Fine Art',
    title: { en: 'Veil', zh: '面紗', ja: 'ヴェール' },
    meta: 'Eastern gouache, silver leaf, mixed media on paper · 2025',
    note: {
      en: 'A thin metallic veil drapes over her face, as if she is quietly slipping out of her own form. Within the depths of the light, remains silent.',
      zh: '她的臉被薄霧般的金層覆住，彷彿正從自己的形體中緩慢脫出。保持沉默。',
      ja: '薄い金属のヴェールが顔を覆い、まるで自分の形から静かに抜け出そうとしているかのようだ。光の深みの中で、沈黙を保つ。',
    },
  },
  {
    image: 'Violet.png',
    ratio: 'wide',
    tag: 'Fine Art',
    title: { en: 'Violet', zh: '紫羅蘭', ja: '菫' },
    meta: 'Eastern gouache, silver leaf, mixed media on wooden board · 2025',
    note: {
      en: 'And when that time comes, you will have a home.',
      zh: '到那時候，你會有一個家。',
      ja: 'その時が来れば、あなたには家がある。',
    },
  },
  {
    image: 'Water_Mirror.png',
    ratio: 'wide',
    tag: 'Fine Art',
    title: { en: 'Water Mirror', zh: '水鏡', ja: '水鏡' },
    meta: 'Eastern gouache, silver leaf, mixed media on wooden board · 2025',
    note: {
      en: 'The pond is burning.',
      zh: '水池在燃燒。',
      ja: '池が燃えている。',
    },
  },
  {
    image: 'White_Horse_on_the_Snowfield.png',
    ratio: 'wide',
    tag: 'Fine Art',
    title: { en: 'White Horse on the Snowfield', zh: '白馬與雪原', ja: '雪原の白馬' },
    meta: 'Eastern gouache, mixed media on paper · 2025',
    note: {
      en: 'A white horse in a world of white snow.',
      zh: '白馬與皚皚的雪原。',
      ja: '白い雪の世界の白馬。',
    },
  },
  {
    image: 'She_Migrates.png',
    ratio: 'wide',
    tag: 'Fine Art',
    title: { en: 'She Migrates', zh: '她遷徙', ja: '彼女は移住する' },
    meta: 'Mineral pigments, metal leaf, mixed media on paper on wooden board · 2025',
    note: {
      en: 'Spring has come again — time to move from one place to another.\n\nWhen creation became inseparably bound to life, thoughts about art began to shift and drift with the subtle fluctuations of daily living. Passion occasionally fades like fallen leaves, but the love of making has never diminished.\n\nMigratory birds follow the climate; people sometimes feel the urge to move to a different environment. Perhaps the eternally verdant forest of fairy tales cannot be found in reality, but one can move between different forests.\n\nIf each time we truly feel and truly dwell, perhaps one day we will find our place among all things.',
      zh: '又到了春季，是時候從一個地方走向另一個地方。\n\n創作與生活牢牢綁定後，對藝術的想法也開始隨著生活中的細微波動起伏、偏移。熱情偶爾像落葉一樣消退，但對創作的喜愛從未變少。\n\n候鳥隨氣候遷徙，人偶爾也會有種衝動，想去不同的環境看看。也許現實裡找不到童話中萬年常綠的森林，但人可以在不同的森林之間移動。\n\n假如每次都好好感受，好好居住，也許有一天能在萬物之中找到自己的位置。',
      ja: 'Spring has come again — time to move from one place to another.\n\nWhen creation became inseparably bound to life, thoughts about art began to shift and drift with the subtle fluctuations of daily living. Passion occasionally fades like fallen leaves, but the love of making has never diminished.\n\nMigratory birds follow the climate; people sometimes feel the urge to move to a different environment. Perhaps the eternally verdant forest of fairy tales cannot be found in reality, but one can move between different forests.\n\nIf each time we truly feel and truly dwell, perhaps one day we will find our place among all things.',
    },
  },
  {
    image: 'She_is_Coral.png',
    images: ['She_is_Coral.png', 'She_is_Coral_Poster.JPG', 'She_is_Coral_Detail.JPG'],
    ratio: 'port',
    tag: 'Fine Art',
    title: { en: 'She is Coral', zh: '她是珊瑚', ja: '彼女は珊瑚' },
    meta: 'Mineral pigments, metal leaf, mixed media on paper on wooden board · 2025',
    note: {
      en: 'Coral does not move actively, but it does not stop either. Layer by layer, it turns time into shape through the accumulation of calcium carbonate.\n\nCalcium carbonate is also a material I frequently use in my work, to shape surfaces with a sense of sedimentation and weathering.\n\nCoral looks like stone, but it is alive. Beneath a hard surface is a continuously growing organism — living and dead structures layered together, the present built upon layers already deceased.\n\nLike the women in my memory — resilient yet seemingly fragile, beautiful yet bearing scars beneath.',
      zh: '一般來說，成體珊瑚不主動移動，但也不停止。透過堆積碳酸鈣，一層一層把時間變成形狀。\n\n碳酸鈣也是我創作中常用的材料，用來塑造沉積感與風化感的表面紋理。\n\n珊瑚看起來像石頭，但卻是活的。堅硬的表面下是持續生長的有機體，活體與死去的結構疊在一起，現在的存在建立在過去已經死亡的層之上。\n\n如同我印象裡的女人們，堅韌卻看似易碎，美麗底下帶有傷痕。',
      ja: 'Coral does not move actively, but it does not stop either. Layer by layer, it turns time into shape through the accumulation of calcium carbonate.\n\nCalcium carbonate is also a material I frequently use in my work, to shape surfaces with a sense of sedimentation and weathering.\n\nCoral looks like stone, but it is alive. Beneath a hard surface is a continuously growing organism — living and dead structures layered together, the present built upon layers already deceased.\n\nLike the women in my memory — resilient yet seemingly fragile, beautiful yet bearing scars beneath.',
    },
  },
  {
    image: 'She_Declares.png',
    images: ['She_Declares.png', 'She_Declares_Detail.JPG'],
    ratio: 'wide',
    tag: 'Fine Art',
    title: { en: 'She Declares', zh: '她宣示', ja: '彼女は宣言する' },
    meta: 'Mineral pigments, metal leaf, mixed media on paper on wooden board · 2025',
    note: {
      en: 'In legal and political contexts, "declare" belongs to performative language — it means the act is completed the moment it is spoken.\n\nA person actively announces responsibility for a principle, truth, or rule; the target of the action is the symbolic order, not any specific individual.\n\n"I solemnly swear I mean no good" and pledging allegiance share a similar structure, both constituting a definition of one\'s own position. In this sense, declaration is understood as a form of self-binding.\n\n"I declare… my limits, and I will never become a perpetrator."',
      zh: '在法律與政治語境裡，declare 屬於施為語言，代表說出來的當下行為即完成。\n\n一人主動宣告自己對某個原則、真實、或規則負責，動作的對象是象徵性的秩序，而非具體的人。\n\n我鄭重宣誓我不懷好意和我宣示效忠，兩者有相似的結構，且同樣是對自身位置的界定。在這個意義上，宣示被視為一種自我約束。\n\n「我宣示⋯我的界線，而我永遠不會成為加害者。」',
      ja: 'In legal and political contexts, "declare" belongs to performative language — it means the act is completed the moment it is spoken.\n\nA person actively announces responsibility for a principle, truth, or rule; the target of the action is the symbolic order, not any specific individual.\n\n"I solemnly swear I mean no good" and pledging allegiance share a similar structure, both constituting a definition of one\'s own position. In this sense, declaration is understood as a form of self-binding.\n\n"I declare… my limits, and I will never become a perpetrator."',
    },
  },
  {
    image: 'Chant_of_Sibilant.png',
    images: ['Chant_of_Sibilant.png', 'Chant_of_Sibilant_Detail.jpg'],
    ratio: 'wide',
    tag: 'Fine Art',
    title: { en: 'Sibilant Chant', zh: '嘶音', ja: 'シビラント・チャント' },
    meta: 'Mineral pigments, metal leaf, mixed media on paper on wooden board · 2025',
    note: {
      en: '"Sibilant" refers to the hissing sound produced by airflow friction — the closest thing to an incantation in the human voice.\n\nChanting is a ritual of imposing meaning upon an object. It requires neither the object\'s consent, nor its wakefulness.\n\nThese sounds fall upon her. She is neither interlocutor nor listener, but closer to a surface that is continuously being written.\n\nShe does not make sounds; she is made into sound.',
      zh: 'Sibilant 意為氣流摩擦產生的嘶嘶聲，是人聲中最接近咒語的音。\n\n吟唱是一種對著某個對象施加意義的儀式。它不需要對象的同意，也不需要對象醒著。\n\n這些聲音落在她身上。她既不是對話者，也不是聆聽者，而更接近一個被持續書寫的表面。\n\n她不發聲，她被發聲。',
      ja: '"Sibilant" refers to the hissing sound produced by airflow friction — the closest thing to an incantation in the human voice.\n\nChanting is a ritual of imposing meaning upon an object. It requires neither the object\'s consent, nor its wakefulness.\n\nThese sounds fall upon her. She is neither interlocutor nor listener, but closer to a surface that is continuously being written.\n\nShe does not make sounds; she is made into sound.',
    },
  },
  {
    image: 'She_Has_Witnessed.png',
    images: ['She_Has_Witnessed.png', 'She_Has_Witnessed_Detail.jpg'],
    ratio: 'wide',
    tag: 'Fine Art',
    title: { en: 'She Witnesses', zh: '她見證', ja: '彼女は目撃する' },
    meta: 'Mineral pigments, metal leaf, mixed media on paper on wooden board · 2025',
    note: {
      en: 'In law, a witness uses their own presence to prove that something has happened. In religion, the Greek word martys (witness) later evolved into martyr — because witnessing sometimes comes at a cost.\n\n"She Witnesses" means: after that thing happened, she cannot exist without carrying it. The event has become part of her; it cannot be separated.\n\nThe title uses the present tense, She Witnesses, because witnessing is a continuous action that does not end.',
      zh: '在法律中，見證者用自己的在場證明某件事發生過。在宗教中，希臘文 martys（見證者）後來演變為 martyr（殉道者），因為見證有時候要付出代價。\n\n她見證意為：那件事發生之後，她無法不帶著它存在。事件成為她的一部分，無法剝離。\n\n標題使用現在式 She Witnesses，因為見證是持續的行動，不會結束。',
      ja: 'In law, a witness uses their own presence to prove that something has happened. In religion, the Greek word martys (witness) later evolved into martyr — because witnessing sometimes comes at a cost.\n\n"She Witnesses" means: after that thing happened, she cannot exist without carrying it. The event has become part of her; it cannot be separated.\n\nThe title uses the present tense, She Witnesses, because witnessing is a continuous action that does not end.',
    },
  },
  {
    image: 'She_Looks.png',
    ratio: 'tall',
    tag: 'Fine Art',
    title: { en: 'She Gazes', zh: '她看', ja: '彼女は見つめる' },
    meta: 'Mineral pigments, metal leaf, mixed media on paper on wooden board · 2025',
    note: {
      en: 'Inspired by a restroom at night.\n\nSome places are always humid and dim, mirrors blurred, mingling with the scent of others. She is dressed in lace and layers — that kind of attire presupposes a reason to be seen.\n\nBut in this space, the act of looking has lost its direction. The mirror surface offers no clear position; the gaze becomes hesitant, stagnant.\n\nHer dress has made her ready to be seen, yet the space has caused looking to stall. She exists within both structures simultaneously, maintaining a distance that is not absorbed.',
      zh: '靈感來自晚上的化妝室。\n\n有些地方總是潮濕、昏暗，鏡子模糊，混著其他人的氣味。而她穿著蕾絲與層次，那類裝束預設了一個被看見的理由。\n\n但在這個空間裡，觀看失去了方向。鏡面不提供清晰的位置，視線變得遲疑、停滯。\n\n裝束使她準備好被看，空間卻讓觀看停滯。她同時處於這兩種結構之中，維持不被吸收的距離。',
      ja: 'Inspired by a restroom at night.\n\nSome places are always humid and dim, mirrors blurred, mingling with the scent of others. She is dressed in lace and layers — that kind of attire presupposes a reason to be seen.\n\nBut in this space, the act of looking has lost its direction. The mirror surface offers no clear position; the gaze becomes hesitant, stagnant.\n\nHer dress has made her ready to be seen, yet the space has caused looking to stall. She exists within both structures simultaneously, maintaining a distance that is not absorbed.',
    },
  },
  // ── 以下三件下次放 ──────────────────────────
  // {
  //   image: 'XXX.png',
  //   ratio: 'sq',
  //   tag: 'Fine Art',
  //   title: { en: '', zh: '', ja: '' },
  //   meta: '',
  //   note: { en: '', zh: '', ja: '' },
  // },

  {
    image: '1995_Summer.JPEG',
    images: ['1995_Summer.JPEG', '1995_Summer_Detail.JPG'],
    ratio: 'tall',
    tag: 'Fine Art',
    title: { en: '1995 Summer', zh: '1995年夏', ja: '1995年の夏' },
    meta: 'Mixed media · 2025',
    note: {
      en: '',
      zh: '',
      ja: '',
    },
  },
  {
    image: 'A_Mothers_Dominion.jpeg',
    images: ['A_Mothers_Dominion.jpeg', 'A_Mothers_Dominion_Process.png'],
    ratio: 'sq',
    tag: 'Fine Art',
    title: { en: 'A Mother\'s Dominion', zh: '一個母親的支配', ja: '母親の支配' },
    meta: 'Mixed media · 2025',
    note: { en: '', zh: '', ja: '' },
  },
  {
    image: 'Long_Rest.jpeg',
    images: ['Long_Rest.jpeg', 'Long_Rest_1.jpg', 'Long_Rest_2.JPEG'],
    ratio: 'sq',
    tag: 'Fine Art',
    title: { en: 'Long Rest', zh: '長憩', ja: '長い休息' },
    meta: 'Mixed media · 2025',
    note: { en: '', zh: '', ja: '' },
  },
  {
    image: 'Jewish_Woman_and_Sheep.png',
    images: ['Jewish_Woman_and_Sheep.png', 'Jewish_Woman_and_Sheep_Detail.PNG'],
    ratio: 'sq',
    tag: 'Fine Art',
    title: { en: 'Jewish Woman and Sheep', zh: '猶太女人與羊', ja: 'ユダヤの女性と羊' },
    meta: 'Mixed media · 2025',
    note: { en: '', zh: '', ja: '' },
  },
  {
    image: 'Woman_and_White_Horse.JPG',
    images: ['Woman_and_White_Horse.JPG', 'Woman_and_White_Horse_Detail.JPG', 'Woman_and_White_Horse_2.JPG'],
    ratio: 'sq',
    tag: 'Fine Art',
    title: { en: 'Woman and White Horse', zh: '女人與白馬', ja: '女性と白馬' },
    meta: 'Mixed media · 2025',
    note: { en: '', zh: '', ja: '' },
  },
  {
    image: 'Ashen_Carnival_Exhibition.jpeg',
    images: ['Ashen_Carnival_Exhibition.jpeg', 'Ashen_Carnival_Exhibition_Details.jpg'],
    ratio: 'wide',
    tag: 'Exhibition',
    title: { en: 'Ashen Carnival Exhibition', zh: '沉默嘉年展覽', ja: '沈黙の嘉年華展覧' },
    meta: 'Exhibition photos · 2025',
    note: { en: '', zh: '', ja: '' },
  },
  {
    image: 'Artist_Photo_Color.JPG',
    images: ['Artist_Photo_Color.JPG', 'Artist_Photo_BW.jpeg', 'Artist_CV_Photo.JPG'],
    ratio: 'port',
    tag: 'Artist',
    title: { en: 'Artist Photos', zh: '藝術家個人照片', ja: 'アーティスト写真' },
    meta: 'Artist photos · 2025',
    note: { en: '', zh: '', ja: '' },
  },
  {
    image: 'Halcyon_Being_Exhibition_A_Mothers_Dominion.JPEG',
    images: ['Halcyon_Being_Exhibition_A_Mothers_Dominion.JPEG', 'Halcyon_Being_Exhibition_Long_Rest_and_Jewish_Woman.JPG'],
    ratio: 'wide',
    tag: 'Exhibition',
    title: { en: 'Halcyon Being Exhibition', zh: '寧靜存在展覽', ja: '静かな存在展覧' },
    meta: 'Exhibition photos · 2025',
    note: { en: '', zh: '', ja: '' },
  },
  {
    image: 'Long_Rest_and_Jewish_Woman_Exhibition.jpeg',
    ratio: 'wide',
    tag: 'Exhibition',
    title: { en: 'Long Rest and Jewish Woman Exhibition', zh: '長憩和猶太女人與羊展覽', ja: '長い休息とユダヤの女性と羊展覧' },
    meta: 'Exhibition photo · 2025',
    note: { en: '', zh: '', ja: '' },
  },
  {
    image: 'SHE_Exhibition.JPG',
    ratio: 'sq',
    tag: 'Exhibition',
    title: { en: 'SHE Exhibition', zh: 'SHE展覽', ja: 'SHE展覧' },
    meta: 'Exhibition photo · 2025',
    note: { en: '', zh: '', ja: '' },
  },
];
