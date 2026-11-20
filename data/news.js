// 매일 밤 새 날짜 객체를 배열 맨 앞에 추가합니다. (date는 KST 기준 YYYY-MM-DD)
// project 값: tool(개발 도구) / blade(BladeArena) / beacon(Beacon Beat) / format(서식 퍼즐) / mung(멍때리는 방)
window.NEWS = [
  {
    date: "2026-11-20",
    lead: "Claude Code에서 쓰는 새 모델 <b>Fable 5.2</b>가 나왔고, <b>Unity 7</b>은 12월 베타부터 코딩 에이전트를 유니티에 바로 연결할 수 있게 돼요.",
    glance: [
      { project: "tool",   text: "Claude Fable 5.2, 출력 최대 30% 빨라짐" },
      { project: "beacon", text: "Unity 7 베타 12월, 무료 MCP로 Claude Code 연결" },
      { project: "mung",   text: "Game Off 2026 게임잼, 12월 1일 마감" },
      { project: "blade",  text: "유니티 AI 게임잼, 3D 모델 초안이 몇 분" },
      { project: "format", text: "지스타 유니티 인디 쇼케이스, 22일까지" }
    ],
    top: [
      {
        project: "tool", also: ["blade"], when: "11.09 발표",
        title: "Claude Fable 5.2 공개: 출력 최대 30% 빨라지고 더 적은 토큰으로 어려운 작업",
        first: "Claude Fable 5.2는 이전 5.1보다 출력이 최대 <b>30% 빨라졌고</b>, 가격은 100만 토큰당 입력 <b>8달러</b>·출력 <b>40달러</b>예요.",
        body: [
          "Claude Code 기본값인 medium 노력(effort, 모델이 얼마나 오래 깊게 생각할지 정하는 설정)에서도 <mark>더 적은 토큰으로 어려운 작업을 끝낸다</mark>고 해요.",
          "발표에 나온 최고 점수(FrontierCode 2.0에서 49.1%, 5.1은 32.4%)는 노력을 xhigh로 올렸을 때의 수치예요. 모델 ID는 <b>claude-fable-5-2</b>이고, 함께 나온 Mythos 5.2는 검증된 기관 전용이라 신경 쓰지 않아도 돼요. 앤트로픽은 일상 코딩용으로 Opus 5.5를 계속 추천하고 있어요."
        ],
        caution: "기본 설정 그대로 쓰면 발표 속 최고 점수만큼은 나오지 않아요. 어려운 작업에서만 노력을 올려 보세요.",
        use: "BladeArena에서 몬스터 웨이브 스크립트처럼 꼬인 부분 하나를 골라, Claude Code에서 /model로 Fable 5.2를 선택하고 medium과 high로 한 번씩 시켜 보세요. 결과와 걸린 시간을 비교하면 어떤 작업에 어떤 설정이 맞는지 감이 와요.",
        orig: "Claude Fable and Mythos 5.2",
        sources: [
          { name: "Anthropic", url: "https://www.anthropic.com/news/claude-fable-and-mythos-5-2" },
          { name: "CNBC", url: "https://www.cnbc.com/2026/11/09/anthropic-claude-fable-5-2-mythos-5-2.html" }
        ]
      },
      {
        project: "beacon", also: ["tool"], when: "Unite Seoul",
        title: "Unity 7, 12월 초기 베타… 코딩 에이전트를 잇는 무료 MCP 포함",
        first: "Unity 7은 <b>12월</b>에 초기 베타(미완성 시험판)를 시작하고, 정식 출시는 <b>2027년 1분기</b>예요.",
        body: [
          "Unity는 Unity 7이 Unity 6의 직접적인 연장선이라고 밝혔어요. <mark>코딩 에이전트를 유니티에 바로 연결하는 무료 MCP</mark>(AI가 외부 프로그램을 조작하게 해 주는 연결 규격)와, 에디터를 열지 않고 명령어로 유니티를 다루는 CLI를 함께 내놓아요.",
          "AI 도구는 쓰고 싶은 사람만 켜는 선택 사항이라고 해요. Claude Code가 씬 구성이나 빌드 같은 작업을 유니티 안에서 직접 할 수 있게 된다는 뜻이에요."
        ],
        caution: "일정과 기능은 바뀔 수 있다는 단서가 붙어 있어요. 베타 버전으로 원본 프로젝트를 열면 되돌리기 어려울 수 있어요.",
        use: "Beacon Beat 프로젝트를 지금 쓰는 Unity 6 버전 그대로 새 폴더에 복사해 두고, 12월 베타가 열리면 복사본만 열어 보세요. 원본은 건드리지 않고 Claude Code가 유니티를 직접 조작하는 모습을 확인할 수 있어요.",
        orig: "Unity 7 Roadmap Revealed at Unite Seoul",
        sources: [
          { name: "Unity 공식", url: "https://unity.com/news/unity-7-roadmap-revealed-at-unite-seoul" }
        ]
      },
      {
        project: "mung", when: "12.01 마감",
        title: "GitHub 게임잼 ‘Game Off 2026’, 12월 1일까지 진행 중",
        first: "GitHub이 매년 여는 게임잼(짧은 기간에 게임을 만드는 행사) <b>Game Off</b>가 itch.io에서 <b>12월 1일</b>까지 열려 있어요.",
        body: [
          "어떤 언어·엔진·라이브러리를 써도 되고 <mark>참가는 무료</mark>예요. 웹 게임도 제출할 수 있어서 HTML/JS로 만든 작품을 그대로 올릴 수 있어요.",
          "같은 시기 다른 게임잼 중에는 AI 사용을 아예 금지한 곳도 있어요."
        ],
        caution: "Game Off의 AI 사용 규정은 확인하지 못했어요. AI로 만든 코드·에셋이 허용되는지 참가 전에 잼 페이지에서 꼭 확인하세요.",
        use: "멍때리는 방의 장면 하나를 작은 게임으로 키워 제출해 보세요. 먼저 itch.io 페이지에서 올해 주제와 AI 규정을 읽는 것부터 시작하면 돼요.",
        orig: "Game Off 2026",
        sources: [
          { name: "itch.io 잼 페이지", url: "https://itch.io/jam/game-off-2026" }
        ]
      }
    ],
    items: [
      {
        project: "tool", when: "11.17",
        title: "오픈AI GPT-6.2 아스트라, Fable 5.2와 같은 가격으로 출시",
        body: ["오픈AI가 고난도 작업용 <b>GPT-6.2 아스트라</b>와 일상용 <b>솔</b>을 내놨어요. 아스트라 API 가격은 100만 토큰당 입력 8달러·출력 40달러로 Fable 5.2와 같아요. 디크립트의 독립 테스트에서는 <mark>Fable 5.2에 이어 2위</mark>였어요."],
        use: "지금은 Claude Code를 계속 쓰면 돼요. 같은 가격대에서 Fable 5.2가 앞선다는 평가라 굳이 바꿀 이유는 적어요.",
        orig: "Introducing GPT-6.2 Astra and Sol",
        sources: [
          { name: "OpenAI 공식", url: "https://openai.com/index/introducing-gpt-6-2-astra-sol" },
          { name: "Decrypt", url: "https://decrypt.co/383488/openai-gpt-6-2-astra-challenges-anthropic-price-but-not-every-benchmark" }
        ]
      },
      {
        project: "tool", when: "11.17",
        title: "AWS, 오래 돌아가는 AI 코딩 에이전트 ‘키로 봇’ 출시",
        body: ["AWS가 개발 워크스페이스 ‘키로 크루(Kiro Crew)’에서 장시간 작업하는 에이전트 키로 봇을 내놨어요. 키로 크루는 <mark>아파치 2.0 오픈소스</mark>로 공개됐고 윈도우·맥·리눅스를 모두 지원해요."],
        use: "Claude Code와 비슷한 도구가 늘고 있다는 정도로 알아 두면 돼요. 무료로 열려 있으니 궁금하면 구경만 해 봐도 충분해요.",
        orig: "AWS, 개발 프로세스까지 맡는 AI 에이전트 ‘키로 봇’ 공개",
        sources: [
          { name: "ZDNet Korea", url: "https://zdnet.co.kr/view/?no=20261117110627" }
        ]
      },
      {
        project: "blade", when: "11.18–19",
        title: "유니티 AI 게임잼: 24시간 동안 AI로 게임 만들기",
        body: ["지스타 개막 전 부산 벡스코에서 유니티와 한국게임산업협회가 24시간 게임잼을 열었어요. 참가자는 <b>Unity CLI</b>와 AI 도구로 게임을 만들었고, 오픈AI는 개발 크레딧과 엔지니어 멘토링을, 메시(Meshy)는 <mark>텍스트·이미지로 3D 모델을 만드는 크레딧</mark>을 제공했어요. 기사 제목대로 3D 모델 초안이 몇 분이면 나오는 수준이에요."],
        use: "BladeArena에 슬라임·거북 말고 새 몬스터를 넣고 싶다면, Meshy 같은 3D 생성 도구로 초안을 뽑아 Asset Store 모델 옆에 세워 보세요. 애니메이터에 붙일 수 있는지(리깅 여부)부터 확인하면 돼요.",
        orig: "A 24-Hour Jam with Unity and OpenAI Experts Where 3D Model Drafts Take Just Minutes",
        sources: [
          { name: "Inven Global", url: "https://www.invenglobal.com/articles/28782/unity-openai-and-meshyai-gather-for-unity-ai-game-jam" }
        ]
      },
      {
        project: "format", when: "~11.22",
        title: "지스타 2026 ‘유니티 월드’ 인디 쇼케이스, 22일까지",
        body: ["유니티가 부산 벡스코 제2전시장 BTC관에서 인디 쇼케이스 ‘유니티 월드’와 개발자 교류 프로그램을 <mark>11월 22일까지</mark> 운영해요. 유니티 게임 약 30종과 AI 게임잼 수상작을 볼 수 있어요."],
        use: "서식 퍼즐을 대회에 낼 예정이라면 다른 인디 팀이 짧은 데모를 어떻게 보여 주는지(첫 30초 구성, 조작 안내 방식)를 보고 오면 좋아요. 못 가면 이번 주말에 Unity AI Assistant(에디터 안의 AI 도우미)로 프로젝트를 한 번 분석시켜 보세요.",
        orig: "[지스타 26] AI부터 릴레이톡까지, 유니티 인디 환경 키운다",
        sources: [
          { name: "게임메카", url: "https://www.gamemeca.com/view.php?gid=1782901" }
        ]
      }
    ]
  }
];
