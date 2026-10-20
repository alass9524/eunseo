/* FILM — photo archive. Hash-routed single page, layout system from biga.cat */
(() => {
  // a reload always starts from the top of the page, never where it was left
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";

  // ------------------------------------------------------------------ data
  // displayed ratio, after EXIF rotation (8-space2, 9-space3 are stored sideways)
  const DIM = {"1-me1_01":[2000,1391],"1-me1_02":[1175,1852],"1-me1_03":[3,4],"1-me1_04":[9,16],"1-me1_05":[3,4],"2-letter1_01":[3,4],"2-letter1_02":[3,4],"2-letter1_03":[3,4],"2-letter1_04":[3,4],"2-letter1_05":[3,4],"2-letter1_06":[3,4],"2-letter1_08":[3,4],"2-letter1_09":[1501,2000],"2-letter1_10":[3,4],"2-letter1_11":[3,4],"2-letter1_12":[4,3],"3-hand_01":[4,5],"3-hand_2":[1333,2000],"3-hand_3":[4,5],"3-hand_4":[601,1000],"3-hand_5":[1333,2000],"4-road_1":[9,16],"4-road_2":[4,5],"4-road_3":[9,16],"4-road_4":[1333,2000],"4-road_5":[1333,2000],"5-sky_1":[143,200],"5-sky_2":[1333,2000],"5-sky_3":[1333,2000],"5-sky_4":[1319,2000],"5-sky_5":[1333,2000],"6-man1_01":[2000,1333],"6-man1_02":[2000,1333],"6-man1_03":[2000,1333],"6-man1_04":[2000,1333],"6-man2_01":[2000,1333],"6-man2_02":[2000,1333],"6-man2_03":[4,3],"6-man2_04":[2000,1333],"6-man3_01":[2000,1333],"6-man3_02":[2000,1333],"6-man3_03":[2000,1333],"7-space1_01":[3,4],"7-space1_02":[3,4],"7-space1_03":[3,4],"7-space1_04":[3,4],"7-space1_05":[9,16],"7-space1_06":[9,16],"7-space1_07":[9,16],"8-space2_01":[3,4],"8-space2_02":[3,4],"8-space2_03":[3,4],"9-space3_01":[3,4],"9-space3_02":[3,4],"9-space3_03":[3,4],"9-space3_04":[3,4],"10-obj_01":[3,4],"10-obj_02":[3,4],"10-obj_03":[3,4],"10-obj_04":[3,4],"10-obj_05":[3,4]};

  const CATS = [
    { id: "me",      label: "Me" },
    { id: "gaze",    label: "Gaze" },
    { id: "person",  label: "Person" },
    { id: "spaces",  label: "Spaces" },
    { id: "objects", label: "Objects" },
  ];

  // images: file names in assets/img (without .jpg), in display order.
  // title: the set's own name. code (category number + label) is added below.
  // DRAFT text — specs and view/viewKo to be rewritten with Eunseo's answers.
  const SETS = [
    { id: "me", title: "me", cat: "me",
      images: ["1-me1_01", "1-me1_02", "1-me1_03", "1-me1_04", "1-me1_05"],
      light: "Indoor daylight", palette: "Silver · Pastel", place: "Desk, magnet board",
      view: "A magnet board, a sticker calendar, a cup of dessert, a box of keyrings. The things kept within arm's reach become a portrait without a face.",
      viewKo: "자석 보드, 스티커 달력, 디저트 한 컵, 키링 상자. 손 닿는 곳에 둔 물건들이 얼굴 없는 자화상이 된다." },
    { id: "letter", title: "letter", cat: "me",
      // the cat card leads, so the rest fall into matching pairs (01+02, 03+04 …)
      main: "2-letter1_12",
      images: ["2-letter1_01", "2-letter1_02", "2-letter1_03", "2-letter1_04", "2-letter1_05", "2-letter1_06", "2-letter1_08", "2-letter1_09", "2-letter1_10", "2-letter1_11", "2-letter1_12"],
      light: "Even overhead light", palette: "Grey · Colour blocks", place: "Grey table",
      view: "Letter papers picked out by hand, one by one, with someone in mind. Each is shown sealed and then opened — the moment it will first be met, kept ahead of time.",
      viewKo: "상대를 떠올리며 한 장 한 장 직접 고른 편지지들. 닫힌 모습과 열린 모습을 나란히 두어, 받는 사람이 처음 마주할 순간을 먼저 담아 두었다." },
    { id: "hand", title: "hand", cat: "gaze",
      images: ["3-hand_01", "3-hand_2", "3-hand_3", "3-hand_4", "3-hand_5"],
      light: "Low light, backlight", palette: "Black · Skin", place: "Indoors, bushes, a wire fence",
      view: "Only the hand stays in the frame — reaching up, held open, resting on leaves, gripping a fence. Gesture takes the place of a face.",
      viewKo: "프레임에 남는 건 손뿐이다 — 위로 뻗고, 펼치고, 잎 위에 눕고, 철망을 쥔다. 몸짓이 얼굴을 대신한다." },
    { id: "road", title: "road", cat: "gaze",
      images: ["4-road_1", "4-road_2", "4-road_3", "4-road_4", "4-road_5"],
      light: "Overcast, alley shade", palette: "Brick · Stone", place: "Narrow alleys",
      view: "Five alleys, each shot from the middle of the path toward its vanishing point. Brick walls close in on both sides and the eye is pulled straight ahead.",
      viewKo: "다섯 개의 골목, 모두 길 한가운데에서 소실점을 향해 찍었다. 양쪽에서 벽돌 벽이 좁혀 오고 시선은 곧장 앞으로 끌려간다." },
    { id: "sky", title: "sky", cat: "gaze",
      images: ["5-sky_1", "5-sky_2", "5-sky_3", "5-sky_4", "5-sky_5"],
      light: "Clear daylight", palette: "Blue", place: "Sky, above the clouds, the sea",
      view: "Nearly nothing in the frame but blue — a cloud, a horizon, a few birds. The same colour, measured in five different shades.",
      viewKo: "프레임에는 거의 파랑만 남는다 — 구름 하나, 수평선 하나, 새 몇 마리. 같은 색을 다섯 가지 농도로 잰다." },
    { id: "man", title: "boy", cat: "person",
      images: ["6-man1_01", "6-man1_02", "6-man1_03", "6-man1_04", "6-man2_01", "6-man2_02", "6-man2_03", "6-man2_04", "6-man3_01", "6-man3_02", "6-man3_03"],
      light: "Shade, backlight, daylight", palette: "Cobalt · Amber · Grass", place: "Side street, palm-lined road, park",
      view: "Three shoots in one set: a cool blue shade, a midday backlight breaking at wet hair, a quiet day in the grass. The light changes, the distance stays close.",
      viewKo: "세 번의 촬영을 한 세트로 묶었다: 서늘한 푸른 그늘, 젖은 머리끝에서 부서지는 한낮의 역광, 풀밭 위의 조용한 하루. 빛은 바뀌어도 거리는 가깝게 유지된다." },
    { id: "space1", title: "favorite space", cat: "spaces",
      images: ["7-space1_01", "7-space1_02", "7-space1_03", "7-space1_04", "7-space1_05", "7-space1_06", "7-space1_07"],
      light: "Dusk, shop lighting", palette: "Navy · Pink", place: "Riverside, stationery shop",
      view: "A day out kept in pieces: the river at dusk, the shoes underfoot, sticker sheets, shelves of cards and a row of lockers.",
      viewKo: "하루의 외출을 조각으로 남겼다: 해 질 녘의 강, 발밑의 신발, 스티커 시트, 카드가 꽂힌 선반, 줄지은 사물함." },
    { id: "space2", title: "my room", cat: "spaces",
      images: ["8-space2_01", "8-space2_02", "8-space2_03"],
      light: "Indoor light", palette: "Navy · White dots", place: "Room",
      view: "Polka-dot slippers, a shelf of cassette tapes, a rail of clothes. A room told through the things that live in it.",
      viewKo: "물방울무늬 슬리퍼, 카세트테이프 선반, 옷걸이에 걸린 옷들. 방 안에 사는 물건들로 방을 이야기한다." },
    { id: "space3", title: "my desk", cat: "spaces",
      images: ["9-space3_01", "9-space3_02", "9-space3_03", "9-space3_04"],
      light: "Indoor light", palette: "Silver · Blue", place: "Desk, magnet board",
      view: "The magnet board from up close, a laptop, a CD player mid-spin. The desk seen at the scale of its smallest things.",
      viewKo: "가까이에서 본 자석 보드, 노트북, 돌아가는 CD 플레이어. 책상을 가장 작은 물건들의 크기로 들여다본다." },
    { id: "obj", title: "my things", cat: "objects",
      images: ["10-obj_02", "10-obj_01", "10-obj_03", "10-obj_04", "10-obj_05"],
      light: "Even daylight", palette: "White · Silver", place: "White table",
      view: "What's in the bag, laid out one group at a time on white: a wallet and earphones, cables, a sketch folder, a fluffy pouch, two coffee sachets.",
      viewKo: "가방 속 물건을 흰 바닥 위에 한 무리씩 꺼내 놓았다: 지갑과 이어폰, 케이블, 스케치 폴더, 털 파우치, 커피 두 봉." },
  ];
  // code: category number + label, e.g. "02 Gaze" — sets in one category share it
  SETS.forEach((s) => {
    s.n = s.images.length;
    const ci = CATS.findIndex((c) => c.id === s.cat);
    s.code = `${String(ci + 1).padStart(2, "0")} ${CATS[ci].label}`;
  });

  // the home page footer: what decides what gets kept
  const CRITERIA = [
    ["공간", "바람이 불거나 좋아하는 것이 곁에 있는 곳"],
    ["물건", "쓸모가 분명하면서 작은 포인트가 있어서"],
    ["호불호", "아무것도 보이지 않는 암흑 · 못생긴 것"],
  ];

  const setOf = (img) => SETS.find((s) => s.images.includes(img));

  // size (1-4) follows the photo's own orientation, so a portrait photo
  // gets a tall box (--3, or square --1) and a landscape photo gets a wide
  // box (--2, or square --4) instead of being cropped into a shape that
  // fights its aspect ratio.
  const PORTRAIT_SIZES = [3, 1];
  const LANDSCAPE_SIZES = [2, 4];
  // pos (1-4 → 0 / 25vw / 50vw / 75vw) is picked by the photo's position
  // in the set, cycling 1→3→2→4 (far, not adjacent) instead of by
  // orientation — portrait and landscape counters used to run separately,
  // so a set with both could easily assign the same pos to two photos a
  // stage apart, stacking them at the same x instead of spreading out.
  const POS_CYCLE = [1, 3, 2, 4];

  // each set's images float exactly once — no repeats

  // one entry per archive category, plus Record as the opening idea
  const ABOUT = [
    ["Record", "Holding on to what passes by, before it blurs. A photograph as a note kept for later.", "흐려지기 전에, 지나가는 것을 붙잡아 두는 일. 나중을 위해 남겨 두는 메모로서의 사진."],
    ["Me", "The things kept within arm's reach. A self-portrait made without a face.", "손 닿는 곳에 둔 물건들. 얼굴 없이 만든 자화상."],
    ["Letter", "Paper chosen with someone in mind. Shown sealed and then opened, the way it would be received.", "누군가를 떠올리며 고른 종이. 받는 사람이 보듯, 닫힌 채로 그리고 열린 채로."],
    ["Gaze", "Where the eye goes on its own — a hand, the far end of an alley, an empty sky.", "시선이 저절로 머무는 곳 — 손, 골목의 끝, 비어 있는 하늘."],
    ["Person", "A face up close, in shade, in backlight, in grass. The light changes; the distance stays near.", "그늘 속, 역광 속, 풀밭 위의 가까운 얼굴. 빛은 바뀌어도 거리는 가깝게 남는다."],
    ["Spaces", "A favourite place, my room, my desk. Places described by the things that live in them.", "좋아하는 곳, 내 방, 내 책상. 그 안에 사는 물건들로 설명되는 장소."],
    ["Objects", "My things, laid out on white one group at a time.", "내 물건들을 흰 바닥 위에 한 무리씩 꺼내 놓는다."],
    ["Criteria", "Wind, a small point, no total darkness. The quiet standards every set is measured against.", "바람, 작은 포인트, 암흑은 사양. 모든 세트가 조용히 기대는 기준."],
  ];

  // --------------------------------------------------------------- helpers
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const full = (img) => `assets/img/${img}.jpg`;
  const thumb = (img) => `assets/thumb/${img}.jpg`;
  const ar = (img) => DIM[img].join(" / ");
  const isPort = (img) => DIM[img][0] < DIM[img][1];
  const catLabel = (id) => CATS.find((c) => c.id === id).label;
  const photosIn = (id) => SETS.filter((s) => !id || s.cat === id).reduce((n, s) => n + s.n, 0);

  const ph = (img, { cls = "", style = "", big = false, alt = "", eager = false } = {}) =>
    `<div class="ph ${cls}" style="${style}"><img src="${big ? full(img) : thumb(img)}" alt="${alt}" loading="${eager ? "eager" : "lazy"}" decoding="async"></div>`;

  const wordmark = (cls = "") => `<svg class="wordmark ${cls}" role="img" aria-label="FILM"><use href="#wordmark"/></svg>`;

  document.addEventListener("load", (e) => {
    if (e.target.tagName === "IMG") e.target.classList.add("--loaded");
  }, true);
  const markLoaded = (root) => $$("img", root).forEach((i) => i.complete && i.naturalWidth && i.classList.add("--loaded"));

  // ------------------------------------------------------------ navigation
  function renderNav(route) {
    const { page, param } = route;
    const inArchive = page === "archive" || page === "set";
    const activeCat = page === "archive" ? (param || "all") : page === "set" ? SETS.find((s) => s.id === param)?.cat : null;
    const cur = (on) => (on ? ' class="--current" aria-current="page"' : "");

    // archive filters sit in a small sub-list right under "Archive"
    const filters = `<div class="menu__subwrap"><div class="menu__subclip"><ul class="menu__sub">${[
      ["all", "#/archive", "All", photosIn()],
      ...CATS.map((c) => [c.id, `#/archive/${c.id}`, c.label, photosIn(c.id)]),
    ].map(([id, href, label, n]) =>
      `<li><a href="${href}"${cur(activeCat === id)}>${label}<span class="n">${n}</span></a></li>`
    ).join("")}</ul></div></div>`;

    // --i drives each link's stagger delay in the CSS
    $("#nav-list").innerHTML = [
      ["#/", "Index", page === "home"],
      ["#/archive", "Archive", inArchive, filters],
      ["#/about", "About", page === "about"],
      ["#/contact", "Contact", page === "contact"],
    ].map(([href, label, on, extra = ""], i) => `<li style="--i:${i}"${i ? "" : ' class="--first"'}><span class="menu__flip"><a href="${href}"${cur(on)}>${label}</a></span>${extra}${
      // Close sits on the Index row, so the two always share a baseline
      i ? "" : '<button class="menu__close" type="button">Close</button>'
    }</li>`).join("");
  }

  // side menu open/close — closes on navigation, Escape, or a click outside
  const header = $("#header");
  const menuBtn = $("#menu-btn");
  const menuBody = $(".menu__body");
  const menuPanel = $(".menu__panel");
  // size the panel to its contents (the body is laid out even while hidden)
  function fitMenu() {
    header.style.setProperty("--menu-fit-w", `${menuBody.offsetWidth}px`);
    header.style.setProperty("--menu-fit-h", `${menuBody.offsetHeight}px`);
  }
  document.fonts.ready.then(fitMenu);
  addEventListener("resize", fitMenu);
  // re-fit whenever the contents change size (the Archive list unfolding)
  new ResizeObserver(fitMenu).observe(menuBody);
  // --settled: the opening animation is done, so the panel can track its
  // contents directly instead of easing toward them
  menuPanel.addEventListener("transitionend", (e) => {
    if (e.target === menuPanel && e.propertyName === "width" && header.classList.contains("--open")) header.classList.add("--settled");
  });
  function setMenu(open) {
    if (open) fitMenu();
    header.classList.remove("--settled");
    header.classList.toggle("--open", open);
    menuBtn.setAttribute("aria-expanded", open);
  }
  menuBtn.addEventListener("click", () => setMenu(true));
  header.addEventListener("click", (e) => { if (e.target.closest(".menu__close")) setMenu(false); });
  addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  document.addEventListener("click", (e) => { if (!header.contains(e.target)) setMenu(false); });
  setMenu(false);

  // ------------------------------------------------------------------ HOME
  // One stage per photo (biga.cat floats every image of a project, not just
  // one); each stage carries data-set so the visor still tracks by set.
  // Once scroll crosses a stage boundary the visor switches to that stage's set.
  let homeCleanup = null;

  function renderHome(app) {
    app.innerHTML = `
      <section class="home">
        <div class="home__body">
        <!-- logo and visor are sticky inside .home__body, so they hold still
             while the photos scroll by and leave with the page at its end,
             letting the footer follow in the normal flow -->
        <div class="home__layer --logo"><div class="home__pin"><div class="home__logo">${wordmark()}</div></div></div>
        <div class="home__layer --visor"><div class="home__pin"><div class="home__visor">
          <div>
            <div class="info"><div class="code"></div><div class="title"></div></div>
            <a class="more" href="#/" aria-label="Open set">(+)</a>
            <ul class="thumbnails"></ul>
            <div class="visor"></div>
          </div>
        </div></div></div>
        <div class="home__stages">
          ${(() => {
            // gi is a single counter across ALL sets (not reset per set) —
            // otherwise the last stage of one set and the first stage of
            // the next could land on the same pos (both index 0 of their
            // own local counter) and stack at the same x right at the
            // set boundary, which is exactly the "clustered on one side"
            // pattern this was supposed to fix.
            let gi = 0, pc = 0, lc = 0;
            return SETS.map((s, si) => s.images.map((name) => {
              const port = isPort(name);
              const size = port ? PORTRAIT_SIZES[pc++ % PORTRAIT_SIZES.length] : LANDSCAPE_SIZES[lc++ % LANDSCAPE_SIZES.length];
              const pos = POS_CYCLE[gi++ % POS_CYCLE.length];
              return `
              <div class="stage --${size} --p${pos}" data-set="${si}">
                <a class="stage__img" href="#/set/${s.id}" aria-label="${s.code} ${s.title}">${ph(name, { alt: s.title, eager: true })}</a>
              </div>`;
            }).join("")).join("");
          })()}
        </div>
        </div>
        <footer class="criteria" lang="ko">
          <h2>기준이 쌓이는 자리</h2>
          <ul>
            ${CRITERIA.map(([label, text]) => `<li><span>${label}</span><p>${text}</p></li>`).join("")}
          </ul>
        </footer>
      </section>`;

    const section = $(".home", app);

    const visor = $(".visor", app);
    const thumbs = $(".thumbnails", app);
    const stages = $$(".stage", app);
    const cache = {};
    let set = null, img = null;

    function showImage(name) {
      if (name === img) return;
      img = name;
      $$("li", thumbs).forEach((li) => li.classList.toggle("--current", li.dataset.img === name));
      let el = cache[name];
      if (!el) {
        el = cache[name] = document.createElement("img");
        el.alt = `${setOf(name).title} — ${name}`;
        el.src = full(name);
        visor.appendChild(el);
      }
      const reveal = () => {
        if (img !== name) return;
        $$("img", visor).forEach((i) => i.classList.toggle("--show", i === el));
      };
      el.complete ? reveal() : el.addEventListener("load", reveal, { once: true });
    }

    function showSet(i) {
      const s = SETS[i];
      if (s === set) return;
      set = s;
      $(".code", app).textContent = s.code;
      $(".title", app).textContent = s.title;
      $(".more", app).href = `#/set/${s.id}`;
      // Only the first (current) thumbnail appears right away, staying pink
      // behind the --current overlay. The rest arrive one at a time, each
      // already carrying its photo — not a pink square that later fades —
      // so what plays is a sequence of photos popping in, not a wall of
      // placeholders resolving together.
      const [firstImg, ...restImgs] = s.images;
      thumbs.innerHTML = `<li data-img="${firstImg}"><button aria-label="${firstImg}">${ph(firstImg)}</button></li>`;
      restImgs.forEach((name, idx) => {
        setTimeout(() => {
          if (set !== s) return;
          const li = document.createElement("li");
          li.dataset.img = name;
          li.innerHTML = `<button aria-label="${name}">${ph(name)}</button>`;
          thumbs.appendChild(li);
        }, (idx + 1) * 90 + Math.random() * 30);
      });
      stages.forEach((st) => st.classList.toggle("--active", +st.dataset.set === i));
      img = null;
      showImage(s.images[0]);
    }

    // the big photo itself (not the space around it) opens its set, like the (+) link
    visor.addEventListener("click", (e) => {
      if (e.target.tagName === "IMG" && set) location.hash = `#/set/${set.id}`;
    });

    thumbs.addEventListener("click", (e) => {
      const li = e.target.closest("li");
      if (li) showImage(li.dataset.img);
    });

    // typography-first: the big logo fills the screen at scrollY 0 and
    // shrinks into its corner as the visitor scrolls, uncovering the visor
    // (--reveal, 0…1) — tied directly to scroll position, not a one-off
    // timed animation, so scrolling back up reverses it.
    const REVEAL_PX = 400;
    function updateReveal() {
      const p = Math.min(1, Math.max(0, scrollY / REVEAL_PX));
      section.style.setProperty("--reveal", p);
      // scrolled all the way back up to the typo-only screen: forget the
      // active set so that scrolling back down re-triggers showSet(0) even
      // though the index hasn't changed — otherwise the first set's
      // thumbnail cascade only ever plays once, since staying inside set 0
      // never actually changes `set` the way moving to another set does.
      if (p === 0) set = null;
    }

    // active stage = the one crossing the threshold line (55% of the viewport)
    let ticking = false;
    function sync() {
      ticking = false;
      updateReveal();
      const line = innerHeight * 0.55;
      let i = 0;
      stages.forEach((st) => { if (st.getBoundingClientRect().top <= line) i = +st.dataset.set; });
      showSet(i);
    }
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(sync); } };
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    updateReveal();
    // showSet(0) is deliberately NOT called here — it happens inside sync(),
    // on the first real scroll. Called this early, the thumbnail cascade
    // would finish before the visor is even visible (width 0 at reveal 0),
    // so the visitor would never see it play.
    homeCleanup = () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }

  // --------------------------------------------------------------- ARCHIVE
  const ROW_H = [13.75, 11, 8.75, 12.5];

  function renderArchive(app, cat) {
    app.innerHTML = `
      <section class="archive">
        <div class="archive__logo">${wordmark()}</div>
        ${SETS.map((s) => {
          const cover = s.images.find(isPort) || s.images[0];
          const rest = s.images.filter((i) => i !== cover).slice(0, 4);
          return `
          <a class="row ${cat && cat !== s.cat ? "--hidden" : ""}" href="#/set/${s.id}">
            ${ph(cover, { cls: `row__cover ${isPort(cover) ? "" : "--land"}`, alt: s.title })}
            <div class="row__text">
              <div>${s.code}</div>
              <div>${s.title}</div>
              <p class="quote">${s.view}</p>
              <p class="quote --ko" lang="ko">${s.viewKo}</p>
            </div>
            <div class="row__images">
              ${rest.map((img, i) => ph(img, { style: `--h:${ROW_H[i % 4]}rem;--ar:${ar(img)}` })).join("")}
            </div>
          </a>`;
        }).join("")}
      </section>`;
  }

  // ------------------------------------------------------------ SET detail
  function renderSet(app, id) {
    const s = SETS.find((x) => x.id === id) || SETS[0];
    const idx = SETS.indexOf(s);
    const prev = SETS[(idx - 1 + SETS.length) % SETS.length];
    const next = SETS[(idx + 1) % SETS.length];
    const main = s.main || s.images[0];
    const rest = s.images.filter((i) => i !== main);

    // pair the remaining frames into staggered rows that leave open space.
    // A pair shares one height: each width is its share of the row in
    // proportion to its aspect ratio. Offsets cycle (pushed in / flush left
    // + far right / pushed further), capped so a row never runs off the page;
    // a frame left on its own sits at the right.
    const OFFSETS = [12, 0, 30];
    const ratio = (img) => DIM[img][0] / DIM[img][1];
    const rows = [];
    for (let i = 0; i < rest.length; i += 2) rows.push(rest.slice(i, i + 2));
    // a frame left over at the end joins the row above at the far right,
    // sized to that row's height
    const lone = rows.length > 1 && rows[rows.length - 1].length === 1 ? rows.pop()[0] : null;
    const gallery = rows.map((pair, r) => {
      if (pair.length === 1) {
        const img = pair[0];
        const w = isPort(img) ? 26 : 52;
        return `<div class="gallery__row">${ph(img, { big: true, cls: isPort(img) ? "--port" : "", style: `--w:${w}%;--x:auto;--ar:${ar(img)}`, alt: `${s.title} — ${img}` })}</div>`;
      }
      // total row width: 44% for two portraits, 80% for two landscapes, between for a mix
      const total = 44 + 36 * pair.filter((i) => !isPort(i)).length / 2;
      const sum = pair.reduce((n, img) => n + ratio(img), 0);
      const ws = pair.map((img) => +(total * ratio(img) / sum).toFixed(2));
      const x0 = Math.min(OFFSETS[r % 3], 96 - total);
      const html = pair.map((img, k) => {
        const x = k === 0 ? `${x0}%` : (r % 3 === 1 ? "auto" : "0");
        return ph(img, { big: true, cls: isPort(img) ? "--port" : "", style: `--w:${ws[k]}%;--x:${x};--ar:${ar(img)}`, alt: `${s.title} — ${img}` });
      }).join("");
      const loneHtml = lone && r === rows.length - 1
        ? ph(lone, { big: true, cls: isPort(lone) ? "--port" : "", style: `--w:${+(ws[0] * ratio(lone) / ratio(pair[0])).toFixed(2)}%;--x:auto;--ar:${ar(lone)}`, alt: `${s.title} — ${lone}` })
        : "";
      return `<div class="gallery__row">${html}${loneHtml}</div>`;
    }).join("");

    app.innerHTML = `
      <article class="set">
        <div class="set__head">
          <div class="col-code">
            <div>${s.code}</div>
            <div>${s.title}</div>
          </div>
          <div class="col-spec">
            <div>Type: ${catLabel(s.cat)}</div>
            <div>Location: ${s.place}</div>
            <div>Light: ${s.light}</div>
            <div>Palette: ${s.palette}</div>
            <div>Frames: ${s.n}</div>
            <div>Files: ${s.images.map((i) => i.toUpperCase()).join(", ")}</div>
          </div>
        </div>
        <div class="set__hero">
          <div class="left">
            ${wordmark()}
            <div>
              <p class="quote">${s.view}</p>
              <p class="quote --ko" lang="ko">${s.viewKo}</p>
            </div>
          </div>
          ${ph(main, { big: true, cls: `main ${isPort(main) ? "--port" : ""}`, style: `--ar:${ar(main)}`, alt: `${s.title} — ${main}` })}
        </div>
        <div class="gallery">${gallery}</div>
        <nav class="set__next" aria-label="Set navigation">
          <a href="#/set/${prev.id}">← ${prev.code} ${prev.title}</a>
          <a href="#/set/${next.id}">${next.code} ${next.title} →</a>
        </nav>
      </article>`;
  }

  // lightbox: clicking a photo on a set page shows it large, centred over
  // a white veil; a click anywhere or Escape closes it
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.innerHTML = "<img alt=\"\">";
  document.body.appendChild(lightbox);
  const closeLightbox = () => lightbox.classList.remove("--open");
  lightbox.addEventListener("click", closeLightbox);
  addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });
  $("#app").addEventListener("click", (e) => {
    const img = e.target.closest(".set .ph img");
    if (!img) return;
    const big = $("img", lightbox);
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    lightbox.classList.add("--open");
  });

  // ----------------------------------------------------------------- ABOUT
  function renderAbout(app) {
    app.innerHTML = `
      <section class="about">
        <div class="about__hero">
          ${ph("6-man2_04", { big: true, alt: "Back-lit wet hair" })}
          ${wordmark()}
        </div>
        <div class="about__intro">
          <p>FILM is a photo archive of ten sets and sixty-one photographs. From the things on a desk to letters, alleys, the sky and the faces of people — wherever the eye keeps returning, a new set begins.</p>
          <p class="--ko" lang="ko">FILM은 열 개의 세트, 예순한 장의 사진으로 이루어진 포토 아카이브다. 책상 위의 물건부터 편지, 골목, 하늘, 사람의 얼굴까지 — 시선이 자꾸 되돌아가는 곳에서 새로운 세트가 시작된다.</p>
        </div>
        <div class="glossary">
          ${ABOUT.map(([t, d, ko]) => `<div><h3>${t}</h3><p>${d}</p><p class="--ko" lang="ko">${ko}</p></div>`).join("")}
        </div>
      </section>`;
  }

  // --------------------------------------------------------------- CONTACT
  function renderContact(app) {
    app.innerHTML = `
      <section class="contact">
        <div class="contact__grid">
          <div class="c1">
            <div>Enquiries</div>
            <a href="mailto:alass9524@gmail.com">alass9524@gmail.com</a>
          </div>
          <div>
            <div>Social</div>
            <div>@Eunseo.archive</div>
          </div>
        </div>
        ${wordmark()}
      </section>`;
  }

  // ---------------------------------------------------------------- router
  function parse() {
    const [, page = "", param] = location.hash.replace(/^#/, "").split("/");
    return { page: page || "home", param };
  }

  function render() {
    const route = parse();
    const app = $("#app");
    if (homeCleanup) { homeCleanup(); homeCleanup = null; }
    closeLightbox();

    document.body.className = { home: "--home", set: "--white", about: "--about" }[route.page] || "";
    renderNav(route);
    setMenu(false);

    switch (route.page) {
      case "archive": renderArchive(app, route.param); break;
      case "set": renderSet(app, route.param); break;
      case "about": renderAbout(app); break;
      case "contact": renderContact(app); break;
      default: renderHome(app);
    }
    markLoaded(app);

    const s = route.page === "set" && SETS.find((x) => x.id === route.param);
    document.title = s ? `${s.title} — FILM` : route.page === "home" ? "FILM — Photo Archive" : `${route.page[0].toUpperCase() + route.page.slice(1)} — FILM`;
    scrollTo(0, 0);
  }

  addEventListener("hashchange", render);
  render();

  // intro curtain
  addEventListener("load", () => {
    scrollTo(0, 0);
    setTimeout(() => $("#loader").classList.add("--out"), 700);
  });
  setTimeout(() => $("#loader").classList.add("--out"), 3000);
})();
