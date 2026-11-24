// 취향 갤러리 데이터 — 학생이 고치는 곳은 이 파일 하나입니다.
// 카드는 7장(4 · 5 · 6 · 7 · 9 · 10 · 11주). week 숫자는 바꾸지 않습니다(서브 페이지 파일 이름과 같습니다).
// author는 한글 이름, authorEn은 영문 이름입니다. 화면 왼쪽 위에 "영문이름 Archive"로 나옵니다.
// name은 한 단어, nameEn은 그 영문입니다(카드 아래 영문 라벨). object는 오브젝트 이름이고 objects 폴더의 hairline-이름.html 중 이름 부분을 쓰면 바뀝니다.
// color는 오브젝트의 선 색입니다. {"hi": "#2f6fd6", "edge": "#7a9ccf"}처럼 # 색 코드로 씁니다(hi 강조선 · edge 윤곽선 · mid 기본선 · lo 흐린선 · stroke 선 굵기 0.5~2.5). 비워 두면 기본 색입니다.
// 메모(note)에는 위의 내용 · 의도 · 기준에 없는 새 사실을 한 가지 적습니다(물건 이름, 곡 하나, 고르다 뺀 것 등). 같은 말을 다시 쓰면 글이 비어 보입니다.
// archive는 서브 페이지에 보관하는 그 주의 작업입니다. itemsLabel(모은 것의 이름) · items(모은 것: title 제목 · meta 곁글 · text 한 줄 · src 이미지) · open(열어 볼 페이지: label · href). 서브 페이지에는 items가 사진 한 장 + 제목 · 설명으로 넘어가는 화면으로 나옵니다. 이미지는 images 폴더에, 열어 볼 페이지는 작품 폴더에 복사해 두고 그 경로를 씁니다.
// embed(선택)는 열어 볼 페이지를 서브 페이지 화면 안에 그대로 넣는 값입니다: "embed": {"src": "작품/10주/레코드/index.html?embed=1", "title": "10주 내 음악 페이지"}. 내 페이지가 화면 안에서 어색하면 embed를 지우고 open만 씁니다.
// 쉼표 · 따옴표 · 괄호가 하나라도 빠지면 화면이 비고 빨간 문구가 나옵니다. 그럴 땐 data_첫판.js와 비교하세요.
window.GALLERY = {
  "author": "장은서",
  "authorEn": "Jang Eunseo",
  "definition": "저는 상상의 여백을 남기고,\n뒤집히는 순간으로 몰입을 이끄는 디자이너입니다.",
  "cards": [
    {
      "week": 4,
      "name": "시선",
      "nameEn": "Gaze",
      "object": "swing",
      "color": {},
      "what": "하늘 · 손 · 길 사진을 골라 나의 시선 아카이브로 묶었다.",
      "why": "빈 그네가 혼자 흔들린다. 방금 누가 다녀갔을까.",
      "line": "사람의 이야기를 상상하게 하는 장면에 끌린다.",
      "note": "길 사진 다섯 장에는 사람이 한 명도 없습니다.",
      "archive": {
        "itemsLabel": "하늘 · 손 · 길",
        "items": [
          {"title": "하늘", "href": "작품/07주/취향아카이브/index.html?open=%ED%95%98%EB%8A%98", "meta": "", "text": "건물이나 구름 없이 맑고 트인 파란 하늘이 좋아서 골랐다", "src": "images/w04_sky_4.jpg"},
          {"title": "손", "href": "작품/07주/취향아카이브/index.html?open=%EC%86%90", "meta": "", "text": "뻗거나 붙잡는 손에 담긴 감정과 이야기가 떠올라서 골랐다", "src": "images/w04_hand_4.jpg"},
          {"title": "길", "href": "작품/07주/취향아카이브/index.html?open=%EA%B1%B0%EB%A6%AC", "meta": "", "text": "사람 없는 골목에서도 그 거리를 걷는 사람의 이야기가 떠올라서 골랐다", "src": "images/w04_road_2.jpg"}
        ],
        "open": [
          {"label": "하늘 페이지 열기", "href": "작품/07주/취향아카이브/index.html?open=%ED%95%98%EB%8A%98"}
        ]
      }
    },
    {
      "week": 5,
      "name": "소년",
      "nameEn": "Boy",
      "object": "dice",
      "color": {},
      "what": "소년의 사진을 세 분위기로 나눠 나의 뷰포인트를 담았다.",
      "why": "굴릴 때마다 다른 면이 나온다. 그래도 같은 주사위 하나다.",
      "line": "다양한 분위기를 풍길 수 있는 사람에게 끌린다.",
      "note": "고른 이유는 서늘해서, 뜨거워서, 따스해서입니다.",
      "archive": {
        "itemsLabel": "소년의 세 분위기",
        "items": [
          {"title": "푸른", "href": "작품/07주/취향아카이브/index.html?open=%ED%91%B8%EB%A5%B8", "meta": "", "text": "서늘해서", "src": "images/w05_mood_1.jpg"},
          {"title": "붉은", "href": "작품/07주/취향아카이브/index.html?open=%EB%B6%89%EC%9D%80", "meta": "", "text": "뜨거워서", "src": "images/w05_mood_2.jpg"},
          {"title": "여린", "href": "작품/07주/취향아카이브/index.html?open=%EC%97%AC%EB%A6%B0", "meta": "", "text": "따스해서", "src": "images/w05_mood_3.jpg"}
        ],
        "open": [
          {"label": "푸른 페이지 열기", "href": "작품/07주/취향아카이브/index.html?open=%ED%91%B8%EB%A5%B8"}
        ]
      }
    },
    {
      "week": 6,
      "name": "공간",
      "nameEn": "Space",
      "object": "armchair",
      "color": {},
      "what": "머물고 싶은 공간 네 곳을 직접 찍어 모았다.",
      "why": "앉으면 푹 꺼지고, 일어나려 하면 천천히 놓아준다. 조금 더 있고 싶은 자리다.",
      "line": "바람이 지나가거나, 좋아하는 것이 곁에 있으면 오래 머문다.",
      "note": "네 곳은 밤의 한강, 포셋 연희, 노란 유채꽃밭, 내 책상입니다.",
      "archive": {
        "itemsLabel": "머물고 싶은 공간",
        "items": [
          {"title": "밤의 한강", "href": "작품/06주/공간/index.html#space1", "meta": "", "text": "편안하고 시원한 느낌을 받을 수 있어서", "src": "images/w06_01.jpg"},
          {"title": "포셋, 연희", "href": "작품/06주/공간/index.html#space2", "meta": "", "text": "그 사람을 생각하며 편지지를 고르는 시간이 즐거워서", "src": "images/w06_02.jpg"},
          {"title": "노란 유채꽃밭", "href": "작품/06주/공간/index.html#space3", "meta": "", "text": "선선한 바람을 맞으며 뻥 뚫린 예쁜 꽃밭을 보는 게 좋아서", "src": "images/w06_03.jpg"},
          {"title": "내 책상", "href": "작품/06주/공간/index.html#space4", "meta": "", "text": "좋아하는 것들로 둘러싸인 공간에서 집중할 수 있어서", "src": "images/w06_04.jpg"}
        ],
        "open": [
          {"label": "밤의 한강 페이지 열기", "href": "작품/06주/공간/index.html#space1"}
        ]
      }
    },
    {
      "week": 7,
      "name": "물건",
      "nameEn": "Objects",
      "object": "buttons",
      "color": {},
      "what": "곁에 두는 물건 여섯 개를 찍어 취향 아카이브에 더했다.",
      "why": "생김새가 다른 단추가 손끝에서 하나씩 떠오른다. 여미려고 달았는데 자꾸 눈이 간다.",
      "line": "쓸모가 분명하면서 작은 포인트가 있어야 한다.",
      "note": "한창 말랑이가 유행이라 동대문에 구경을 갔는데, 말랑이보다 이런 고전 장난감에 더 눈이 가서 결국 얻었습니다.",
      "archive": {
        "itemsLabel": "곁에 두는 물건",
        "items": [
          {"title": "숫자 장난감", "href": "작품/07주/취향아카이브/index.html?open=%EC%88%AB%EC%9E%90%20%EC%9E%A5%EB%82%9C%EA%B0%90", "meta": "", "text": "동대문 문방구에서 얻은, 헬기가 되는 숫자. 책상 옆에 두고 심심할 때 만지작거린다", "src": "images/w07/01.webp"},
          {"title": "노트북 파우치", "href": "작품/07주/취향아카이브/index.html?open=%EB%85%B8%ED%8A%B8%EB%B6%81%20%ED%8C%8C%EC%9A%B0%EC%B9%98", "meta": "", "text": "푹신해 보여 샀는데 비닐 같았다. 매일 쓰는 맥북을 담고 다닌다", "src": "images/w07/02.webp"},
          {"title": "칫솔 세트", "href": "작품/07주/취향아카이브/index.html?open=%EC%B9%AB%EC%86%94%20%EC%84%B8%ED%8A%B8", "meta": "", "text": "아빠가 회사에서 받아 오셨다. 학교 가는 가방에 챙겨 다닌다", "src": "images/w07/03.webp"},
          {"title": "USB와 키링", "href": "작품/07주/취향아카이브/index.html?open=USB%EC%99%80%20%ED%82%A4%EB%A7%81", "meta": "", "text": "작업물은 아직 USB 하나로 충분하다. 키링은 만화 같은 연출이 좋았다", "src": "images/w07/04.webp"},
          {"title": "막노트", "href": "작품/07주/취향아카이브/index.html?open=%EB%A7%89%EB%85%B8%ED%8A%B8", "meta": "", "text": "떠오르는 대로 막 적는 노트다. 직접 꾸민 카드를 가장 아낀다", "src": "images/w07/05.webp"},
          {"title": "카드지갑", "href": "작품/07주/취향아카이브/index.html?open=%EC%B9%B4%EB%93%9C%EC%A7%80%EA%B0%91", "meta": "", "text": "한 손에 들어오고 카드도 많이 든다. 손가락으로 밀어 슥 꺼내면 꽤 멋지다", "src": "images/w07/06.webp"}
        ],
        "open": [
          {"label": "물건 페이지 열기", "href": "작품/07주/취향아카이브/index.html?open=%EC%88%AB%EC%9E%90%20%EC%9E%A5%EB%82%9C%EA%B0%90"}
        ]
      }
    },
    {
      "week": 9,
      "name": "무대",
      "nameEn": "Stage",
      "object": "curtain",
      "color": {},
      "what": "다섯 곡의 가사로 타이포를 만들고 「나의 태도」라는 책으로 묶었다.",
      "why": "커튼 한 장이 걷히면 무대가 나타난다. 한 발짝이면 보던 내가 그 위에 선다.",
      "line": "객석과 무대는 한 끝 차이다.",
      "note": "가장 크게 들린 장은 02번, 야유마저 환호로 받아들이는 태도입니다.",
      "archive": {
        "itemsLabel": "글자로 세운 다섯 개의 말",
        "items": [
          {"title": "끝", "meta": "X1 「움직여」", "text": "경계를 한 발짝만 넘어서면 순식간에 무대 위로 올라설 수 있다", "src": "images/w09_01.png"},
          {"title": "歡呼", "meta": "X1 「움직여」", "text": "발상만 바꾸면 모든 야유를 환호로 뒤바꿀 수 있다", "src": "images/w09_02.png"},
          {"title": "집어 삼킨다", "meta": "NCT DREAM 「Drippin'」", "text": "천천히 그러나 깊게 나로 채워 가고 싶다", "src": "images/w09_03.png"},
          {"title": "끝이 아니야", "meta": "NCT 127 「Superhuman」", "text": "끝을 결정하는 건 온전히 나의 의지 안에 담긴 몫이다", "src": "images/w09_04.png"},
          {"title": "폼", "meta": "젝스키스 「사나이 가는 길 (폼생폼사)」", "text": "내 폼 하나에 모든 걸 건다", "src": "images/w09_05.png"}
        ],
        "open": [
          {
            "label": "책 「나의 태도」 열기",
            "href": "작품/09주/책/index.html"
          }
        ]
      }
    },
    {
      "week": 10,
      "name": "강렬함",
      "nameEn": "Intensity",
      "object": "top",
      "color": {},
      "what": "Arctic Monkeys 다섯 곡을 골라 레코드 「강렬함」을 만들었다.",
      "why": "멈추면 기울고, 휘몰아치면 곧게 서서 빠르게 돈다. 나도 휘몰아칠 때 빠져든다.",
      "line": "정신없이 휘몰아치면 빠져든다.",
      "note": "가장 좋아하는 곡을 마지막에 넣었다.",
      "archive": {
        "itemsLabel": "강렬함 — 다섯 곡",
        "items": [
          {"title": "Brianstorm", "yt": "khyduwR1Uyw", "spine": "images/w10_spine_fwn.jpg", "meta": "Arctic Monkeys", "text": "술 마시고 집으로 향하는 가파른 언덕을 오르다가 처음 듣게 됐는데 휘몰아치는 사운드에 어느새 집에 도착해 있었다."},
          {"title": "Old Yellow Bricks", "yt": "NgLWF2XJyKA", "spine": "images/w10_spine_fwn.jpg", "meta": "Arctic Monkeys", "text": "이 앨범에서 가장 먼저 알게 된 곡으로, 생각이 날 때 듣는다. 기타와 드럼도 좋지만 동화에 빗댄 현실 이야기가 좋다."},
          {"title": "Teddy Picker", "yt": "VredAgNScOw", "spine": "images/w10_spine_fwn.jpg", "meta": "Arctic Monkeys", "text": "속으로 신나고 싶을 때 듣는 곡이다. 보컬과 밴드 사운드가 좋고 적당히 신나서 다섯 곡에 넣었다."},
          {"title": "Balaclava", "yt": "GeyA2L5LNBk", "spine": "images/w10_spine_fwn.jpg", "meta": "Arctic Monkeys", "text": "01번 곡 Brianstorm과 같이 듣는 곡이다. 사운드도 좋지만 곡의 분위기가 좋아서 다섯 곡에 넣었다."},
          {"title": "I Bet You Look Good On The Dancefloor", "yt": "CYpn8yUnX_c", "spine": "images/w10_spine_wpsiatwin.jpg", "meta": "Arctic Monkeys", "text": "날씨가 엄청 좋은 날 버스를 기다리다가 처음 들은 곡이다. 가사에 설레고 사운드가 신나서 듣다 보면 장면을 상상하게 된다. 다섯 곡 중 가장 좋아 마지막에 넣었다."}
        ],
        "open": [
          {
            "label": "레코드 「강렬함」 열기",
            "href": "작품/10주/레코드/index.html"
          }
        ]
      }
    },
    {
      "week": 11,
      "name": "조명",
      "nameEn": "Light",
      "object": "lighthouse",
      "color": {},
      "what": "영화 다섯 편에서 색을 뽑아 극장 「내가 빠져든 어둠 속」을 만들었다.",
      "why": "등대의 빛이 지나가면 어둠 속에서 크게 출렁이던 물결이 드러난다. 빛이 드는 그 순간 마음도 같이 출렁인다.",
      "line": "어둠에 빛이 드는 순간을 지켜본다.",
      "note": "가장 영화다운 색은 붉은 재킷, 금빛 심벌, 와인빛 트랙, 연보라빛 조명, 가로등빛입니다.",
      "archive": {
        "itemsLabel": "내가 빠져든 어둠 속 — 다섯 편",
        "items": [
          {"title": "Whiplash", "meta": "#E5BB5F", "text": "어둠 속에서 번쩍이는 금빛 심벌이 스스로 무대를 장악한 연주를 드러낸다", "src": "images/w11_02.png"},
          {"title": "Fight Club", "meta": "#7F0203", "text": "타일러의 붉은 재킷이 밤의 어둠 속에서 그의 위험한 존재감을 드러낸다", "src": "images/w11_01.png"},
          {"title": "100 Meters", "meta": "#2E2429", "text": "빗물에 더 어두워진 와인빛 트랙이 출발 직전의 긴장을 드러낸다", "src": "images/w11_03.png"},
          {"title": "Coyote Ugly", "meta": "#DDCBF9", "text": "연보라빛 조명이 두려움이 사라진 무대의 설렘을 드러낸다", "src": "images/w11_04.png"},
          {"title": "Notting Hill", "meta": "#7D6042", "text": "밤거리에 번진 가로등빛이 조용히 피어나는 설렘을 비춘다", "src": "images/w11_05.png"}
        ],
        "open": [
          {
            "label": "극장 「내가 빠져든 어둠 속」 열기",
            "href": "작품/11주/극장/index.html"
          }
        ],
        "embed": {"src": "작품/11주/극장/index.html?embed=1", "title": "11주 내 영화 극장 「내가 빠져든 어둠 속」"}
      }
    }
  ]
};
