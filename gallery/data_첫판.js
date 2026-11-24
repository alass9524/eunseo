// 취향 갤러리 데이터 — 학생이 고치는 곳은 이 파일 하나입니다.
// 카드는 7장(4 · 5 · 6 · 7 · 9 · 10 · 11주). week 숫자는 바꾸지 않습니다(서브 페이지 파일 이름과 같습니다).
// author는 한글 이름, authorEn은 영문 이름입니다. 화면 왼쪽 위에 "영문이름 Archive"로 나옵니다.
// name은 한 단어, nameEn은 그 영문입니다(카드 아래 영문 라벨). object는 오브젝트 이름이고 objects 폴더의 hairline-이름.html 중 이름 부분을 쓰면 바뀝니다.
// color는 오브젝트의 선 색입니다. {"hi": "#2f6fd6", "edge": "#7a9ccf"}처럼 # 색 코드로 씁니다(hi 강조선 · edge 윤곽선 · mid 기본선 · lo 흐린선 · stroke 선 굵기 0.5~2.5). 비워 두면 기본 색입니다.
// 메모(note)에는 위의 내용 · 의도 · 기준에 없는 새 사실을 한 가지 적습니다(물건 이름, 곡 하나, 고르다 뺀 것 등). 같은 말을 다시 쓰면 글이 비어 보입니다.
// archive는 서브 페이지에 보관하는 그 주의 작업입니다. itemsLabel(모은 것의 이름) · items(모은 것: title 제목 · meta 곁글 · text 한 줄 · src 이미지) · open(열어 볼 페이지: label · href). 서브 페이지에는 items가 사진 한 장 + 제목 · 설명으로 넘어가는 화면으로 나옵니다. 이미지는 images 폴더에, 열어 볼 페이지는 작품 폴더에 복사해 두고 그 경로를 씁니다.
// embed(선택)는 열어 볼 페이지를 서브 페이지 화면 안에 그대로 넣는 값입니다: "embed": {"src": "작품/10주/레코드/index.html", "title": "10주 내 음악 페이지"}. 내 페이지가 화면 안에서 어색하면 embed를 지우고 open만 씁니다.
// 쉼표 · 따옴표 · 괄호가 하나라도 빠지면 화면이 비고 빨간 문구가 나옵니다. 그럴 땐 data_첫판.js와 비교하세요.
window.GALLERY = {
  "author": "[내 이름]",
  "authorEn": "[My Name]",
  "definition": "저는 ___ 디자이너입니다.",
  "cards": [
    {
      "week": 4,
      "name": "[한 단어]",
      "nameEn": "[One word]",
      "object": "terrain",
      "color": {},
      "what": "[이 주에 만든 것 한 줄]",
      "why": "눈길이 닿는 곳의 기둥이 솟고 멀어질수록 낮아집니다. 내가 본 곳이 높아집니다.",
      "line": "[기준 한 줄]",
      "note": "",
      "archive": {
        "itemsLabel": "",
        "items": [],
        "open": []
      }
    },
    {
      "week": 5,
      "name": "[한 단어]",
      "nameEn": "[One word]",
      "object": "gears",
      "color": {},
      "what": "[이 주에 만든 것 한 줄]",
      "why": "한 톱니를 돌리면 이웃이 따라 돕니다. 그 사람이 돌리면 나도 따라 돕니다.",
      "line": "[기준 한 줄]",
      "note": "",
      "archive": {
        "itemsLabel": "",
        "items": [],
        "open": []
      }
    },
    {
      "week": 6,
      "name": "[한 단어]",
      "nameEn": "[One word]",
      "object": "lamp",
      "color": {},
      "what": "[이 주에 만든 것 한 줄]",
      "why": "밀면 빛 웅덩이가 따라갑니다. 머물고 싶은 자리로 빛이 갑니다.",
      "line": "[기준 한 줄]",
      "note": "",
      "archive": {
        "itemsLabel": "",
        "items": [],
        "open": []
      }
    },
    {
      "week": 7,
      "name": "[한 단어]",
      "nameEn": "[One word]",
      "object": "drawers",
      "color": {},
      "what": "[이 주에 만든 것 한 줄]",
      "why": "서랍 한 칸이 매일 꺼내 쓰는 물건 하나입니다. 다섯 칸이 다섯 개입니다.",
      "line": "[기준 한 줄]",
      "note": "",
      "archive": {
        "itemsLabel": "",
        "items": [],
        "open": []
      }
    },
    {
      "week": 9,
      "name": "[한 단어]",
      "nameEn": "[One word]",
      "object": "bookshelf",
      "color": {},
      "what": "[이 주에 만든 것 한 줄]",
      "why": "책 한 권이 밑줄 친 문장 하나입니다. 다섯 권이 다섯 문장이고, 기울어진 한 권은 아직 못 고른 자리입니다.",
      "line": "[기준 한 줄]",
      "note": "",
      "archive": {
        "itemsLabel": "",
        "items": [],
        "open": []
      }
    },
    {
      "week": 10,
      "name": "[한 단어]",
      "nameEn": "[One word]",
      "object": "metronome",
      "color": {},
      "what": "[이 주에 만든 것 한 줄]",
      "why": "포인터 높이가 템포입니다. 작업할 때 틀어 두는 내 박자입니다.",
      "line": "[기준 한 줄]",
      "note": "",
      "archive": {
        "itemsLabel": "",
        "items": [],
        "open": []
      }
    },
    {
      "week": 11,
      "name": "[한 단어]",
      "nameEn": "[One word]",
      "object": "ribbon",
      "color": {},
      "what": "[이 주에 만든 것 한 줄]",
      "why": "필름 띠처럼 길게 놓인 선을 만지면 파동이 퍼집니다. 장면이 이어져 흐르는 느낌입니다.",
      "line": "[기준 한 줄]",
      "note": "",
      "archive": {
        "itemsLabel": "",
        "items": [],
        "open": []
      }
    }
  ]
};
