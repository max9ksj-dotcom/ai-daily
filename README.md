# 나만의 AI 데일리

그날(KST) 나온 AI 소식(새 모델·기업 발표·개발 도구·연구·업계·영상)을 출처 검수 후 날짜별로 모아 보여 주는 정적 사이트입니다.

- `index.html`, `style.css`, `app.js`: 화면
- `data/news.js`: 소식 데이터. 새 날짜 객체를 `window.NEWS` 배열 맨 앞에 추가하면 사이트에 맨 위로 나타납니다.
  - `project`: model / product / dev / research / industry / video
  - `verify`: `{ level: "official" | "cross" | "single", note }` — 공식 발표 1곳 또는 신뢰 매체 2곳 이상이어야 실립니다.
  - `review`: `{ candidates, passed, note }` — 그날 검수한 후보 수와 통과 수
- 매일 22:30(KST) 클라우드 루틴이 갱신하고, 노트북에서는 22:45에 작업 스케줄러가 오른쪽 아래 알림을 띄웁니다(클릭하면 사이트 열림).

빌드 과정 없이 GitHub Pages(main 브랜치 루트)로 바로 배포됩니다. 로컬에서는 `index.html`을 브라우저로 열면 됩니다.
