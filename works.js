// ╔══════════════════════════════════════════════════════════════╗
// ║                  works.js — 作品資料檔                       ║
// ╠══════════════════════════════════════════════════════════════╣
// ║                                                              ║
// ║  📌 每件作品的欄位說明                                        ║
// ║                                                              ║
// ║  image:  'Filename.webp'                                      ║
// ║          gallery 封面縮圖，放在 images/web/ 資料夾裡          ║
// ║                                                              ║
// ║  images: ['File1.webp', 'File2.webp', 'File3.webp']            ║
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
// ║          'Exhibition' / 'Artist' → 不進作品集，只出現在     ║
// ║          Info 頁的 Photos 區                                ║
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
// ║  🖼️  新增圖片：轉成 .webp 放進 images/web/，檔名填入欄位      ║
// ║                                                              ║
// ╚══════════════════════════════════════════════════════════════╝

const WORKS = [
  {
    image: 'Everlasting_Rose.webp',
    ratio: 'wide',
    tag: 'Fine Art',
    title: { en: 'Everlasting Rose', zh: '永生玫瑰', ja: '永遠の薔薇' },
    meta: 'Imitation gold leaf, pastel, mineral pigments · 2024',
    note: {
      en: '🌹',
      zh: '🌹',
      ja: '🌹',
    },
  },
  {
    image: 'Golden.webp',
    images: ['Golden.webp', 'Golden_Detail.webp', 'Golden_Detail2.webp'],
    ratio: 'port',
    tag: 'Fine Art',
    title: { en: 'Golden', zh: '金色', ja: '金色' },
    meta: 'Eastern gouache, mixed media on paper · 2025',
    note: { en: '', zh: '', ja: '' },
  },
  {
    image: 'Stare.webp',
    ratio: 'port',
    tag: 'Fine Art',
    title: { en: 'Stare', zh: '睽', ja: '睽' },
    meta: 'Eastern gouache, mixed media on paper · 2024',
    note: { en: '', zh: '', ja: '' },
  },
  {
    image: 'She_Looks.webp',
    ratio: 'tall',
    tag: 'Fine Art',
    title: { en: 'She Gazes', zh: '她看', ja: '彼女は見つめる' },
    meta: 'Mineral pigments, metal leaf, mixed media on paper on wooden board · 2025',
    note: {
      en: 'Inspired by a restroom at night.\n\nSome places are always humid and dim, mirrors blurred, mingling with the scent of others. She is dressed in lace and layers — that kind of attire presupposes a reason to be seen.\n\nBut in this space, the act of looking has lost its direction. The mirror surface offers no clear position; the gaze becomes hesitant, stagnant.\n\nHer dress has made her ready to be seen, yet the space has caused looking to stall. She exists within both structures simultaneously, maintaining a distance that is not absorbed.',
      zh: '靈感來自晚上的化妝室。\n\n有些地方總是潮濕、昏暗，鏡子模糊，混著其他人的氣味。而她穿著蕾絲與層次，那類裝束預設了一個被看見的理由。\n\n但在這個空間裡，觀看失去了方向。鏡面不提供清晰的位置，視線變得遲疑、停滯。\n\n裝束使她準備好被看，空間卻讓觀看停滯。她同時處於這兩種結構之中，維持不被吸收的距離。',
      ja: '夜の化粧室から着想を得た。\n\nいつも湿っていて薄暗い場所がある。鏡はぼやけ、他人の匂いが混じり合う。彼女はレースと重ね着をまとっている。そうした装いは、見られるための理由をあらかじめ前提としている。\n\nしかしこの空間では、見るという行為が方向を失っている。鏡面ははっきりとした位置を与えず、視線はためらい、停滞する。\n\n装いは彼女を見られる準備へと整え、空間は見ることを停滞させる。彼女はその二つの構造に同時に身を置き、吸収されない距離を保っている。',
    },
  },
  {
    image: '1995_Summer.webp',
    images: ['1995_Summer.webp', '1995_Summer_Detail.webp'],
    ratio: 'port',
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
    image: 'Starshard.webp',
    images: ['Starshard.webp', 'Starshard_Detail.webp'],
    ratio: 'port',
    tag: 'Fine Art',
    title: { en: 'Starshard', zh: '星芒', ja: '星芒' },
    meta: 'Eastern gouache, specialty leaf, mixed media and paper on wooden board · 2025',
    note: {
      en: 'The North Star on the Way Home.',
      zh: '回家路上的北極星。',
      ja: '帰り道の北極星。',
    },
  },
  {
    image: 'Plate.webp',
    ratio: 'tall',
    tag: 'Fine Art',
    title: { en: 'Plate', zh: '盤中蜂鳥', ja: '皿の中の蜂鳥' },
    meta: 'Eastern gouache, mixed media on paper · 2024',
    note: {
      en: 'Whenever my heartbeat matches the rhythm of a hummingbird\'s wings,\nI want to place my heart on a plate and offer it forward.',
      zh: '每當我的心跳與蜂鳥的翅膀頻率相合，\n我便想將心臟盛在盤中，奉獻出去。',
      ja: '蜂鳥の羽ばたきと私の鼓動が重なるとき、\n心臓を皿に載せて差し出したくなる。',
    },
  },
  {
    image: 'Water_Mirror.webp',
    ratio: 'port',
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
    image: 'Azure_Star_of_Bethlehem.webp',
    ratio: 'tall',
    tag: 'Fine Art',
    title: { en: 'Azure-blue Star of Bethlehem', zh: '青藍色的伯利恆之星', ja: '青いベツレヘムの星' },
    meta: 'Eastern gouache, mixed media on paper · 2024',
    note: { en: '', zh: '', ja: '' },
  },
  {
    image: 'The_Secluded_Corner.webp',
    images: ['The_Secluded_Corner.webp', 'The_Secluded_Corner_Detail.webp'],
    ratio: 'sq',
    tag: 'Fine Art',
    title: { en: 'The Secluded Corner', zh: '僻靜的角落', ja: '静かな片隅' },
    meta: 'Silver foil, eastern gouache, soft pastel, paper on wooden board · 2024',
    note: { en: '', zh: '', ja: '' },
  },
  {
    image: 'She_Migrates.webp',
    ratio: 'wide',
    tag: 'Fine Art',
    title: { en: 'She Migrates', zh: '她遷徙', ja: '彼女は移住する' },
    meta: 'Mineral pigments, metal leaf, mixed media on paper on wooden board · 2025',
    note: {
      en: 'Spring has come again — time to move from one place to another.\n\nWhen creation became inseparably bound to life, thoughts about art began to shift and drift with the subtle fluctuations of daily living. Passion occasionally fades like fallen leaves, but the love of making has never diminished.\n\nMigratory birds follow the climate; people sometimes feel the urge to move to a different environment. Perhaps the eternally verdant forest of fairy tales cannot be found in reality, but one can move between different forests.\n\nIf each time we truly feel and truly dwell, perhaps one day we will find our place among all things.',
      zh: '又到了春季，是時候從一個地方走向另一個地方。\n\n創作與生活牢牢綁定後，對藝術的想法也開始隨著生活中的細微波動起伏、偏移。熱情偶爾像落葉一樣消退，但對創作的喜愛從未變少。\n\n候鳥隨氣候遷徙，人偶爾也會有種衝動，想去不同的環境看看。也許現實裡找不到童話中萬年常綠的森林，但人可以在不同的森林之間移動。\n\n假如每次都好好感受，好好居住，也許有一天能在萬物之中找到自己的位置。',
      ja: 'また春が来た。ひとつの場所から別の場所へ移る時だ。\n\n創作と生活が固く結びついてから、芸術についての考えも、日々の細かな揺らぎにつれて浮き沈みし、ずれていくようになった。情熱はときに落ち葉のように褪せていくが、つくることへの愛が減ったことは一度もない。\n\n渡り鳥は気候に従って移動し、人もときに、違う環境を見てみたいという衝動に駆られる。童話の中の常緑の森は現実には見つからないかもしれない。けれど人は、異なる森のあいだを移り歩くことができる。\n\n毎回きちんと感じ、きちんと住まうなら、いつか万物のなかに自分の居場所を見つけられるかもしれない。',
    },
  },
  {
    image: 'Lavender_Frostfall.webp',
    images: ['Lavender_Frostfall.webp', 'Lavender_Frostfall_Detail.webp'],
    ratio: 'port',
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
    image: 'Transfigured_Love.webp',
    images: ['Transfigured_Love.webp', 'Transfigured_Love_Process.webp'],
    ratio: 'tall',
    tag: 'Fine Art',
    title: { en: 'Transfigured Love', zh: '變相之愛', ja: '変容する愛' },
    meta: 'Mineral pigments, imitation gold leaf, silk gauze, ash, mixed media and paper on wooden board · 2025',
    note: {
      en: '"All disease is only love transformed."\n— The Magic Mountain, Thomas Mann',
      zh: '「一切疾病皆為變相之愛。」\n——《魔山》，托馬斯・曼',
      ja: '「すべての病は変容した愛に過ぎない。」\n——『魔の山』、トーマス・マン',
    },
  },
  {
    image: 'Packing1_Copy.webp',
    images: ['Packing1_Copy.webp', 'Packing1.webp', 'Packing2.webp', 'Packing_Detail2.webp'],
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
    image: 'Falling_into_a_Tumultuous_Dream.webp',
    ratio: 'port',
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
    image: 'Offering1.webp',
    images: ['Offering1.webp', 'Offering_Detail.webp', 'Offering3.webp', 'Offering4.webp', 'Offering_Detail2.webp', 'Offering_Exhibition.webp'],
    ratio: 'wide',
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
    image: 'Chant_of_Sibilant.webp',
    images: ['Chant_of_Sibilant.webp', 'Chant_of_Sibilant_Detail.webp'],
    ratio: 'wide',
    tag: 'Fine Art',
    title: { en: 'Sibilant Chant', zh: '嘶音', ja: 'シビラント・チャント' },
    meta: 'Mineral pigments, metal leaf, mixed media on paper on wooden board · 2025',
    note: {
      en: '"Sibilant" refers to the hissing sound produced by airflow friction — the closest thing to an incantation in the human voice.\n\nChanting is a ritual of imposing meaning upon an object. It requires neither the object\'s consent, nor its wakefulness.\n\nThese sounds fall upon her. She is neither interlocutor nor listener, but closer to a surface that is continuously being written.\n\nShe does not make sounds; she is made into sound.',
      zh: 'Sibilant 意為氣流摩擦產生的嘶嘶聲，是人聲中最接近咒語的音。\n\n吟唱是一種對著某個對象施加意義的儀式。它不需要對象的同意，也不需要對象醒著。\n\n這些聲音落在她身上。她既不是對話者，也不是聆聽者，而更接近一個被持續書寫的表面。\n\n她不發聲，她被發聲。',
      ja: 'Sibilant とは、気流の摩擦によって生じる「シー」という歯擦音のこと。人の声のなかで、もっとも呪文に近い音だ。\n\n詠唱とは、ある対象に意味を課す儀式である。そこに対象の同意は要らず、対象が目覚めている必要もない。\n\nそれらの声は彼女の上に降り注ぐ。彼女は対話者でも聴き手でもなく、むしろ絶えず書き込まれ続ける表面に近い。\n\n彼女は声を発しない。彼女は発声される。',
    },
  },
  {
    image: 'She_Has_Witnessed.webp',
    images: ['She_Has_Witnessed.webp', 'She_Has_Witnessed_Detail.webp'],
    ratio: 'wide',
    tag: 'Fine Art',
    title: { en: 'She Witnesses', zh: '她見證', ja: '彼女は目撃する' },
    meta: 'Mineral pigments, metal leaf, mixed media on paper on wooden board · 2025',
    note: {
      en: 'In law, a witness uses their own presence to prove that something has happened. In religion, the Greek word martys (witness) later evolved into martyr — because witnessing sometimes comes at a cost.\n\n"She Witnesses" means: after that thing happened, she cannot exist without carrying it. The event has become part of her; it cannot be separated.\n\nThe title uses the present tense, She Witnesses, because witnessing is a continuous action that does not end.',
      zh: '在法律中，見證者用自己的在場證明某件事發生過。在宗教中，希臘文 martys（見證者）後來演變為 martyr（殉道者），因為見證有時候要付出代價。\n\n她見證意為：那件事發生之後，她無法不帶著它存在。事件成為她的一部分，無法剝離。\n\n標題使用現在式 She Witnesses，因為見證是持續的行動，不會結束。',
      ja: '法において、証人は自らがその場にいたことによって、ある出来事が起きたことを証明する。宗教において、ギリシア語の martys（証人）はのちに martyr（殉教者）へと変わった。証言には、ときに代償が伴うからだ。\n\n「彼女は目撃する」とは、その出来事が起きたあと、彼女がそれを抱えずには存在できないということ。出来事は彼女の一部となり、切り離すことはできない。\n\nタイトルが現在形の She Witnesses であるのは、目撃が終わることのない継続的な行為だからだ。',
    },
  },
  {
    image: 'The_Garden_of_Forking_Paths.webp',
    ratio: 'port',
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
    image: 'Birdbath.webp',
    ratio: 'port',
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
    image: 'Obsidian_Gleam.webp',
    images: ['Obsidian_Gleam.webp', 'Obsidian_Gleam_Detail.webp', 'Obsidian_Gleam_Detail1.webp'],
    ratio: 'tall',
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
    image: 'Klamm.webp',
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
    image: 'White_Horse_on_the_Snowfield.webp',
    ratio: 'port',
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
    image: 'A_Mothers_Dominion.webp',
    images: ['A_Mothers_Dominion.webp', 'A_Mothers_Dominion_Process.webp'],
    ratio: 'sq',
    tag: 'Fine Art',
    title: { en: 'A Mother\'s Dominion', zh: '一個母親的支配', ja: '母親の支配' },
    meta: 'Mixed media · 2025',
    note: { en: '', zh: '', ja: '' },
  },
  {
    image: 'Violet.webp',
    images: ['Violet.webp', 'Violet_Detail.webp'],
    ratio: 'tall',
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
    image: 'Ferns_Growing_Between_Bricks.webp',
    ratio: 'port',
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
    image: 'D_Major.webp',
    images: ['D_Major.webp', 'D_Major_Detail.webp', 'D_Major_Detail2.webp'],
    ratio: 'port',
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
    image: 'Jewish_Woman_and_Sheep.webp',
    images: ['Jewish_Woman_and_Sheep.webp', 'Jewish_Woman_and_Sheep_Detail.webp'],
    ratio: 'tall',
    tag: 'Fine Art',
    title: { en: 'Jewish Woman and Sheep', zh: '猶太女人與羊', ja: 'ユダヤの女性と羊' },
    meta: 'Mixed media · 2025',
    note: { en: '', zh: '', ja: '' },
  },
  {
    image: 'She_Declares.webp',
    images: ['She_Declares.webp', 'She_Declares_Detail.webp'],
    ratio: 'wide',
    tag: 'Fine Art',
    title: { en: 'She Declares', zh: '她宣示', ja: '彼女は宣言する' },
    meta: 'Mineral pigments, metal leaf, mixed media on paper on wooden board · 2025',
    note: {
      en: 'In legal and political contexts, "declare" belongs to performative language — it means the act is completed the moment it is spoken.\n\nA person actively announces responsibility for a principle, truth, or rule; the target of the action is the symbolic order, not any specific individual.\n\n"I solemnly swear I mean no good" and pledging allegiance share a similar structure, both constituting a definition of one\'s own position. In this sense, declaration is understood as a form of self-binding.\n\n"I declare… my limits, and I will never become a perpetrator."',
      zh: '在法律與政治語境裡，declare 屬於施為語言，代表說出來的當下行為即完成。\n\n一人主動宣告自己對某個原則、真實、或規則負責，動作的對象是象徵性的秩序，而非具體的人。\n\n我鄭重宣誓我不懷好意和我宣示效忠，兩者有相似的結構，且同樣是對自身位置的界定。在這個意義上，宣示被視為一種自我約束。\n\n「我宣示⋯我的界線，而我永遠不會成為加害者。」',
      ja: '法や政治の文脈において、declare は行為遂行的な言語に属する。口にしたその瞬間に、行為が完了するということだ。\n\nある人が、ある原則や真実、規則に対して自ら責任を負うことを表明する。その行為が向かう先は具体的な誰かではなく、象徴的な秩序である。\n\n「われ、よからぬことをたくらむ者なり」という誓いと忠誠の宣誓は似た構造をもち、どちらも自らの立ち位置を定めるものだ。この意味で、宣言は一種の自己拘束とみなされる。\n\n「私は宣言する……私の境界を。そして私は決して加害者にはならない。」',
    },
  },
  {
    image: 'Dove.webp',
    images: ['Dove.webp', 'Dove_Detail.webp', 'Dove_Detail2.webp'],
    ratio: 'tall',
    tag: 'Fine Art',
    title: { en: 'Dove', zh: '白鴿', ja: '白い鳩' },
    meta: 'Eastern gouache, mixed media on paper · 2025',
    note: { en: '', zh: '', ja: '' },
  },
  {
    image: 'Immersed_in_Blue.webp',
    ratio: 'port',
    tag: 'Fine Art',
    title: { en: 'Immersed in Blue', zh: '沉浸於藍色之中', ja: '蒼に沈んで' },
    meta: 'Silver foil, eastern gouache, soft pastel, paper on wooden board · 2022',
    note: { en: '', zh: '', ja: '' },
  },
  {
    image: 'Long_Rest.webp',
    images: ['Long_Rest.webp', 'Long_Rest_1.webp', 'Long_Rest_2.webp'],
    ratio: 'port',
    tag: 'Fine Art',
    title: { en: 'Long Rest', zh: '長憩', ja: '長い休息' },
    meta: 'Mixed media · 2025',
    note: { en: '', zh: '', ja: '' },
  },
  {
    image: 'The_Guardian_Under_the_Bed.webp',
    images: ['The_Guardian_Under_the_Bed.webp', 'The_Guardian_Under_the_Bed_Detail.webp'],
    ratio: 'sq',
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
    image: 'Spinning.webp',
    ratio: 'port',
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
    image: 'Madame_Butterfly.webp',
    ratio: 'wide',
    tag: 'Fine Art',
    title: { en: 'Madame Butterfly', zh: '蝴蝶夫人', ja: '蝶々夫人' },
    meta: 'Eastern gouache, mixed media on paper · 2022',
    note: { en: '', zh: '', ja: '' },
  },
  {
    image: 'Black_Narcissus.webp',
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
    image: 'Carousel_and_the_North_Star.webp',
    ratio: 'port',
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
    image: 'Consanguine_Salome.webp',
    images: ['Consanguine_Salome.webp', 'Consanguine_Salome_Detail.webp', 'Consanguine_Salome_Detail2.webp'],
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
    image: 'Dracula.webp',
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
    image: 'Veil.webp',
    images: ['Veil.webp', 'Veil_Detail.webp'],
    ratio: 'port',
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
    image: 'She_is_Coral.webp',
    images: ['She_is_Coral.webp', 'She_is_Coral_Poster.webp', 'She_is_Coral_Detail.webp'],
    ratio: 'port',
    tag: 'Fine Art',
    title: { en: 'She is Coral', zh: '她是珊瑚', ja: '彼女は珊瑚' },
    meta: 'Mineral pigments, metal leaf, mixed media on paper on wooden board · 2025',
    note: {
      en: 'Coral does not move actively, but it does not stop either. Layer by layer, it turns time into shape through the accumulation of calcium carbonate.\n\nCalcium carbonate is also a material I frequently use in my work, to shape surfaces with a sense of sedimentation and weathering.\n\nCoral looks like stone, but it is alive. Beneath a hard surface is a continuously growing organism — living and dead structures layered together, the present built upon layers already deceased.\n\nLike the women in my memory — resilient yet seemingly fragile, beautiful yet bearing scars beneath.',
      zh: '一般來說，成體珊瑚不主動移動，但也不停止。透過堆積碳酸鈣，一層一層把時間變成形狀。\n\n碳酸鈣也是我創作中常用的材料，用來塑造沉積感與風化感的表面紋理。\n\n珊瑚看起來像石頭，但卻是活的。堅硬的表面下是持續生長的有機體，活體與死去的結構疊在一起，現在的存在建立在過去已經死亡的層之上。\n\n如同我印象裡的女人們，堅韌卻看似易碎，美麗底下帶有傷痕。',
      ja: '成体の珊瑚はふつう自ら動くことはないが、止まることもない。炭酸カルシウムを積み重ね、一層ずつ時間をかたちに変えていく。\n\n炭酸カルシウムは、私が制作でよく使う素材でもある。堆積や風化を感じさせる表面をつくるために使っている。\n\n珊瑚は石のように見えるが、生きている。硬い表面の下には成長し続ける有機体があり、生きた構造と死んだ構造が重なり合い、今の存在はすでに死んだ層の上に築かれている。\n\n私の記憶のなかの女性たちのように。しなやかで強いのに壊れやすく見え、美しさの下に傷を抱えている。',
    },
  },
  {
    image: 'Woman_and_White_Horse.webp',
    images: ['Woman_and_White_Horse.webp', 'Woman_and_White_Horse_Detail.webp', 'Woman_and_White_Horse_2.webp'],
    ratio: 'port',
    tag: 'Fine Art',
    title: { en: 'Woman and White Horse', zh: '女人與白馬', ja: '女性と白馬' },
    meta: 'Mixed media · 2025',
    note: { en: '', zh: '', ja: '' },
  },
  {
    image: 'ACmainVis.webp',
    images: ['ACmainVis.webp', 'Ashen_Carnival_Exhibition_per.webp'],
    ratio: 'wide',
    tag: 'Exhibition',
    title: { en: 'Ashen Carnival Exhibition', zh: '沉默嘉年展覽', ja: '沈黙の嘉年華展覧' },
    meta: 'Exhibition photos · 2025',
    note: { en: '', zh: '', ja: '' },
  },
  {
    image: 'Artist_Photo_BW.webp',
    images: ['Artist_Photo_BW.webp', 'KeYuan_plate.webp', 'Artist_CV_Photo.webp'],
    ratio: 'port',
    tag: 'Artist',
    title: { en: 'Artist Photos', zh: '藝術家個人照片', ja: 'アーティスト写真' },
    meta: 'Artist photos · 2025',
    note: { en: '', zh: '', ja: '' },
  },
  {
    image: 'KeYuan_Circus.webp',
    images: ['KeYuan_Circus.webp', 'Halcyon_Being_Exhibition_Long_Rest_and_Jewish_Woman.webp'],
    ratio: 'wide',
    tag: 'Exhibition',
    title: { en: 'Halcyon Being Exhibition', zh: '寧靜存在展覽', ja: '静かな存在展覧' },
    meta: 'Exhibition photos · 2025',
    note: { en: '', zh: '', ja: '' },
  },
  {
    image: 'KeYuan_Landgrave.webp',
    ratio: 'wide',
    tag: 'Exhibition',
    title: { en: 'Long Rest and Jewish Woman Exhibition', zh: '長憩和猶太女人與羊展覽', ja: '長い休息とユダヤの女性と羊展覧' },
    meta: 'Exhibition photo · 2025',
    note: { en: '', zh: '', ja: '' },
  },
  {
    image: 'SHE_Exhibition.webp',
    ratio: 'sq',
    tag: 'Exhibition',
    title: { en: 'SHE Exhibition', zh: 'SHE展覽', ja: 'SHE展覧' },
    meta: 'Exhibition photo · 2025',
    note: { en: '', zh: '', ja: '' },
  },
];
