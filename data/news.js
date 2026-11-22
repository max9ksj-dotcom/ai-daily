// 매일 밤 새 날짜 객체를 배열 맨 앞에 추가합니다. (date는 KST 기준 YYYY-MM-DD)
// project 값(11/22부터): model(새 모델) / product(제품·기능) / dev(개발 도구) / research(연구·논문) / industry(업계·정책) / video(영상)
// verify.level: official(공식 발표 확인) / cross(신뢰 매체 2곳 이상) / single(단일 출처, 되도록 쓰지 않기)
// 11/20~21 항목은 예전 분류(tool/blade/beacon/format/mung)를 그대로 둡니다.
window.NEWS = [
  {
    date: "2026-11-22",
    lead: "Claude와 함께 쓴 <b>리만 가설</b> 증명을 Lean 커뮤니티가 공식으로 인정했어요. 한편 <b>OpenRouter</b>는 프롬프트를 몰래 빼낸 제공업체 3곳을 내보냈어요.",
    glance: [
      { project: "research", text: "[후속] 리만 가설 증명, Lean 커뮤니티 인정" },
      { project: "dev",      text: "OpenRouter, 제공업체 3곳 퇴출·125개 제외" },
      { project: "industry", text: "아마존, AI 스타트업 Decart 인수 임박(보도)" }
    ],
    top: [
      {
        project: "research", when: "11.21 (미국)",
        title: "[후속] Claude로 찾은 리만 가설 증명, Lean 커뮤니티가 “맞다”고 공동 성명",
        first: "앤트로픽 수학자 <b>레벤트 알푀게</b>가 Claude와 함께 찾았다고 밝힌 <b>리만 가설</b>(1859년부터 풀리지 않은 소수 분포 문제) 증명을, 증명 검사 언어 <b>Lean</b>과 수학 라이브러리 <b>Mathlib</b> 커뮤니티가 공동 성명으로 인정했어요.",
        body: [
          "MIT 수학자 <b>앤드루 서덜랜드</b>는 Lean 코드를 따로 컴파일해 문제없이 통과했다며, 뭔가 수상할 가능성은 <mark>“거의 0”</mark>이라고 말했어요. 사이언티픽 아메리칸은 Lean으로 적은 명제가 진짜 리만 가설과 같은지 확인하는 마지막 검사(comparator run)도 끝났다고 전했어요.",
          "알푀게는 같은 방법으로 디리클레 L-함수(리만 제타 함수를 넓힌 함수들)에 대한 일반화된 리만 가설도 증명된다고 밝혔어요. 사람이 읽을 수 있는 일반 논문도 따로 쓸 계획이에요."
        ],
        caution: "클레이 수학연구소는 아직 ‘미해결’로 두고 있어요. 상금 100만 달러는 정식 출판 뒤 2년 이상 학계가 받아들여야 받을 수 있어요. 앤트로픽의 공식 입장은 확인하지 못했어요.",
        orig: "The AI Riemann hypothesis proof is true, independent mathematicians confirm",
        verify: { level: "cross", note: "사이언티픽 아메리칸(11.21 갱신)과 야후 뉴스(11.21 19:00 UTC)가 같은 내용을 보도했어요. 처음 주장은 11.20에 나왔고, 오늘 소식은 검증 결과예요." },
        sources: [
          { type: "뉴스", name: "Scientific American", url: "https://www.scientificamerican.com/article/the-ai-riemann-hypothesis-proof-is-almost-certainly-true-independent-mathematicians-attest/" },
          { type: "뉴스", name: "Yahoo News", url: "https://www.yahoo.com/news/science/articles/anthropic-mathematician-claims-claude-helped-190054374.html" }
        ]
      },
      {
        project: "dev", also: ["industry"], when: "11.22",
        title: "OpenRouter, 프롬프트 유출된 추론 제공업체 3곳 퇴출하고 125개 엔드포인트의 ‘데이터 미보관’ 자격 박탈",
        first: "여러 AI 모델을 한 API로 묶어 주는 <b>OpenRouter</b>가 일부 추론 제공업체(모델을 실제로 돌려 주는 회사)에서 사용자 프롬프트가 새어 나간 사실이 드러나자, <b>3곳</b>을 내보내고 <b>125개</b> 엔드포인트를 ZDR(데이터를 저장하지 않는다는 약속) 대상에서 뺐어요.",
        body: [
          "보안 회사 <b>Dragos</b> 연구진이 가짜 미끼 데이터(카나리아 토큰)를 넣어 보니, 몇몇 제공업체에서 몇 달 동안 프롬프트가 복사되고 있었다고 해요. OpenRouter는 <mark>자기 시스템은 뚫리지 않았다</mark>고 밝혔고, 피해 고객에게 따로 알렸어요.",
          "125개 중에는 혐의가 확인된 곳뿐 아니라 예방 차원에서 뺀 곳도 섞여 있어요. 다시 자격을 주려면 제공업체가 보증과 검증을 거쳐야 해요."
        ],
        caution: "퇴출된 3곳의 이름은 공개되지 않았어요. 공지에 Novita·Phala·Together AI의 사고 공지가 링크돼 있지만, 이 셋이 퇴출 대상이라고 밝힌 건 아니에요.",
        use: "OpenRouter로 API를 쓰고 있다면 대시보드에서 쓰는 모델의 제공업체와 ZDR 설정을 확인하고, 민감한 내용은 제공업체를 직접 고정하는 게 안전해요.",
        orig: "Data Processing Incidents on Inference Providers",
        verify: { level: "official", note: "OpenRouter 공식 블로그(11.22)에서 직접 확인했고, The Hacker News·Unite.ai도 같은 내용을 보도했어요." },
        sources: [
          { type: "공식", name: "OpenRouter 블로그", url: "https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/" },
          { type: "뉴스", name: "The Hacker News", url: "https://thehackernews.com/2026/11/openrouter-drops-3-providers-after.html" },
          { type: "뉴스", name: "Unite.AI", url: "https://www.unite.ai/openrouter-cuts-three-providers-after-ai-prompt-exposure-findings/" }
        ]
      }
    ],
    items: [
      {
        project: "industry", when: "11.21 (미국)",
        title: "아마존, AI 스타트업 Decart를 약 75억 달러에 인수 임박(FT 보도)",
        body: [
          "파이낸셜타임스는 아마존이 실시간 AI 영상 생성으로 알려진 <b>Decart</b>를 약 <b>75억 달러</b>(약 10조 원) 가치로 인수하는 협상을 마무리하고 있고, 이르면 다음 주 발표될 수 있다고 보도했어요. Decart는 아마존의 AI 칩 <b>Trainium3</b>를 일찍 쓴 회사예요.",
          "<mark>두 회사 모두 아직 공식 발표는 하지 않았고</mark>, 협상이 깨질 수도 있다고 해요."
        ],
        orig: "Amazon nearing $7.5B deal to buy AI start-up Decart: FT",
        verify: { level: "cross", note: "FT 원문은 유료라 못 열었고, 이를 인용한 Seeking Alpha·Business Upturn 보도로 확인했어요. 확정된 사실이 아니라 ‘보도’예요." },
        sources: [
          { type: "뉴스", name: "Seeking Alpha (TradingView)", url: "https://www.tradingview.com/news/seekingalpha:71b3d28ff094b:0-amazon-nearing-7-5b-deal-to-buy-ai-start-up-decart-ft/" },
          { type: "뉴스", name: "Business Upturn", url: "https://businessupturn.com/technology/amazon-in-advanced-talks-to-buy-ai-startup-decart-for-7-5-billion-report-says/" }
        ]
      }
    ],
    review: { candidates: 14, passed: 3, note: "Gemini 4 Neon(11.18)·OpenAI Dots 확대(11.19)·Inkling 2 Mini(11.20)·앤트로픽 상장 마감(11.20) 등은 오늘 나온 소식이 아니라서 뺐어요. 출처가 개인 블로그·집계 사이트뿐인 항목도 뺐어요." }
  },
  {
    date: "2026-11-21",
    lead: "<b>Unity CLI 1.0</b>이 베타를 끝내고 정식으로 나왔어요. Claude Code로 유니티를 다루는 길이 더 단단해졌어요.",
    glance: [
      { project: "tool",   text: "Unity CLI 1.0 정식 출시, 에이전트 연동" },
      { project: "mung",   text: "itch.io 게임잼, 12/1~15 웹게임·AI 허용" },
      { project: "tool",   text: "언리얼 5.9 프리뷰, Claude Code 패널 연결" },
      { project: "blade",  text: "[후속] 유니티 AI 게임잼 수상팀 발표" }
    ],
    top: [
      {
        project: "tool", also: ["blade", "beacon"], when: "11.17",
        title: "Unity CLI 1.0 정식 출시: 코딩 에이전트가 유니티를 명령어로 다뤄요",
        first: "유니티가 명령어로 유니티를 다루는 도구 <b>Unity CLI 1.0</b>(CLI는 글자 명령어로 프로그램을 조작하는 방식)을 베타에서 정식 버전으로 올렸어요.",
        body: [
          "유니티는 1.x 버전 동안 <mark>명령어와 옵션, 출력 형태가 호환되도록 유지</mark>하고, 바꿀 때는 미리 경고를 띄우겠다고 약속했어요. 최신 Unity Hub를 쓰면 CLI가 이미 설치돼 있고요.",
          "공식 플러그인이 없는 코딩 에이전트도 이 CLI로 유니티 안에서 일할 수 있고, 스크립트나 자동 빌드(CI)에도 쓸 수 있다고 해요."
        ],
        caution: "어떤 명령어가 있는지는 공식 릴리스 노트에서 직접 확인하지 못했어요. 쓰기 전에 문서를 한번 읽어 보세요.",
        use: "Unity Hub를 최신으로 업데이트한 뒤 터미널에서 unity 명령이 되는지 먼저 확인해 보세요. 된다면 BladeArena 사본 프로젝트에서 Claude Code에게 '이 CLI 도움말을 읽고 할 수 있는 일을 정리해 줘'라고 시켜 보는 게 첫 단계예요.",
        orig: "The Unity CLI 1.0 is here",
        sources: [
          { name: "Unity 공식", url: "https://unity.com/the-unity-cli-1.0-is-here" },
          { name: "Unity CLI 릴리스 노트", url: "https://docs.unity.com/en-us/unity-cli/release-notes.md" }
        ]
      },
      {
        project: "mung", when: "12.01–12.15",
        title: "itch.io 게임잼 ‘point’: 12월 1~15일, 웹 게임만 받고 AI는 허용",
        first: "itch.io의 한 게임잼이 <b>12월 1일~15일</b>에 열리고, 제출물은 <b>HTML5(브라우저에서 바로 도는 웹 형식)</b>여야 해요.",
        body: [
          "잼 페이지에 <mark>AI 사용이 허용된다</mark>고 적혀 있어요. HTML/JS와 three.js로 만든 멍때리는 방 같은 작품과 잘 맞는 조건이에요.",
          "같은 시기에 'AI Legends Jam'(12월 1~14일, 어떤 AI 도구든 사용)도 열린다는 글이 itch.io에 올라와 있어요."
        ],
        caution: "검색 요약으로 확인한 내용이라 주제·규정은 잼 페이지에서 직접 읽고 참가하세요. 앞서 소개한 Game Off와 일정이 겹쳐요.",
        use: "멍때리는 방 장면 하나를 골라 '조작 한두 개 + 끝이 있는 작은 게임'으로 바꿀 계획을 메모해 보세요. 먼저 잼 페이지의 주제와 제출 형식을 읽어 보는 게 첫걸음이에요.",
        orig: "Submissions open from 2026-12-01 to 2026-12-15 (itch.io jam)",
        sources: [
          { name: "itch.io 잼 페이지", url: "https://itch.io/jam/point" },
          { name: "itch.io AI Legends Jam", url: "https://itch.io/t/5593404/ai-legends-jam-create-experiment-and-build-games-using-any-ai-tools-dec-1st-14th" }
        ]
      }
    ],
    items: [
      {
        project: "tool", when: "11.09–16",
        title: "언리얼 엔진 5.9 프리뷰: 에디터 패널에 Claude Code 같은 에이전트 연결",
        body: ["에픽이 공개한 언리얼 5.9 프리뷰는 에디터 안 어시스턴트 패널에 <mark>Claude Code, Codex, Cursor</mark> 같은 코딩 에이전트를 직접 연결할 수 있고, MCP(AI가 외부 프로그램을 조작하게 해 주는 규격) 지원도 넓혔어요. 에픽은 이번 프리뷰를 주로 AI 에이전트로 만들었다고 밝혔고, 불안정할 수 있다고 경고했어요."],
        use: "독자는 유니티를 쓰니 직접 쓸 일은 없어요. 게임 엔진들이 모두 'Claude Code 같은 에이전트를 엔진 안에서' 쓰는 방향으로 간다는 흐름으로 알아 두면 돼요.",
        orig: "Unreal Engine 5.9 Preview is out — it was built with AI",
        sources: [
          { name: "80.lv", url: "https://80.lv/articles/unreal-engine-5-9-preview-is-out-it-was-built-with-ai/" },
          { name: "Inven Global", url: "https://www.invenglobal.com/articles/28361/epic-says-unreal-engine-59-preview-was-built-mostly-by-ai-agents" }
        ]
      },
      {
        project: "blade", when: "11.18–19",
        title: "[후속] 유니티 AI 게임잼 수상팀 발표: Unity CLI와 AI 도구로 24시간 만에 게임 완성",
        body: ["부산 벡스코에서 열린 <b>Unity AI Game Jam</b>에서 참가자 <b>55명</b>이 Unity CLI와 Codex 플러그인 같은 AI 도구로 게임을 만들었고, 수상팀 3팀이 뽑혔어요. 1등은 팀 별꽃의 <b>‘Swing & Swing’</b>이고, 오픈AI API로 AI가 미리 만든 행동 후보 중 하나를 고르게 한 점이 눈에 띄었어요. <mark>Meshy는 텍스트·이미지로 3D 에셋을 만드는 크레딧</mark>을 제공했어요."],
        use: "BladeArena에 몬스터를 늘리고 싶다면 Meshy 같은 도구로 초안 모델을 뽑아 보고, 애니메이터에 붙일 수 있는지부터 작은 몬스터 하나로 시험해 보세요.",
        orig: "Three Winners Selected for 'Unity AI Game Jam' Joined by Unity, OpenAI, and Meshy",
        sources: [
          { name: "Inven Global", url: "https://www.invenglobal.com/articles/28843/three-winners-selected-for-unity-ai-game-jam-joined-by-unity-openai-and-meshy" }
        ]
      }
    ]
  },
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
