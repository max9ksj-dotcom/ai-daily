// data/news.js 의 window.NEWS(최신 날짜가 맨 앞)를 날짜별 카드로 그립니다.
const PROJ = {
  tool:  "🛠️ 개발 도구",
  blade: "⚔️ BladeArena",
  beacon:"🗼 Beacon Beat",
  format:"📝 서식 퍼즐",
  mung:  "🌊 멍때리는 방"
};
const WEEK = ["일","월","화","수","목","금","토"];

const tag = k => PROJ[k] ? `<span class="tag">${PROJ[k]}</span>` : "";
const srcs = list => `<div class="src">${(list||[]).map(s => `<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>`).join("")}</div>`;
const matches = (n, f) => f === "all" || n.project === f || (n.also || []).includes(f);

function dateLabel(iso){
  const [y,m,d] = iso.split("-").map(Number);
  const w = WEEK[new Date(y, m-1, d).getDay()];
  return { title:`${y}년 ${m}월 ${d}일`, wk:`${w}요일` };
}

function storyHTML(n, i){
  return `<article class="story">
    <div class="meta"><span class="rank">TOP ${i+1}</span>${tag(n.project)}${(n.also||[]).map(tag).join("")}<span class="date">${n.when||""}</span></div>
    <h4>${n.title}</h4>
    ${n.first ? `<p class="first">${n.first}</p>` : ""}
    ${(n.body||[]).map(p => `<p>${p}</p>`).join("")}
    ${n.caution ? `<div class="caution"><strong>주의</strong>${n.caution}</div>` : ""}
    ${n.use ? `<div class="use"><strong>👉 이렇게 써먹기</strong>${n.use}</div>` : ""}
    ${n.orig ? `<div class="orig">${n.orig}</div>` : ""}
    ${srcs(n.sources)}
  </article>`;
}

function itemHTML(n){
  return `<article class="item">
    <div class="meta">${tag(n.project)}<span class="date">${n.when||""}</span></div>
    <h4>${n.title}</h4>
    ${(n.body||[]).map(p => `<p>${p}</p>`).join("")}
    ${n.use ? `<div class="use"><strong>👉 이렇게 써먹기</strong>${n.use}</div>` : ""}
    ${n.orig ? `<div class="orig">${n.orig}</div>` : ""}
    ${srcs(n.sources)}
  </article>`;
}

function dayHTML(day, f){
  const { title, wk } = dateLabel(day.date);
  const top = (day.top||[]).filter(n => matches(n, f));
  const rest = (day.items||[]).filter(n => matches(n, f));
  let body = "";
  if (f === "all") {
    if (day.lead) body += `<p class="lead">${day.lead}</p>`;
    if (day.glance && day.glance.length) {
      body += `<div class="glance"><h3>오늘 한눈에</h3><ul>${day.glance.map(g => `<li><span class="pj">${PROJ[g.project]||""}</span><span>${g.text}</span></li>`).join("")}</ul></div>`;
    }
  }
  if (top.length) {
    body += `<section class="sec"><h3>🔥 오늘 나에게 가장 중요한 소식</h3>${top.map(n => storyHTML(n, day.top.indexOf(n))).join("")}</section>`;
  }
  Object.keys(PROJ).forEach(k => {
    const list = rest.filter(n => n.project === k);
    if (list.length) body += `<section class="sec"><h3>${PROJ[k]}</h3>${list.map(itemHTML).join("")}</section>`;
  });
  if (!top.length && !rest.length) {
    body += `<p class="empty">${f === "all" ? "이날은 내 프로젝트와 관련된 새 소식이 없었어요." : "이날은 이 프로젝트 소식이 없었어요."}</p>`;
  }
  return `<article class="day" id="d-${day.date}">
    <header class="day-head"><h2>${title}</h2><span class="wk">${wk}</span></header>
    <div class="day-body">${body}</div>
  </article>`;
}

function render(f){
  const days = (window.NEWS || []).slice().sort((a,b) => b.date.localeCompare(a.date));
  document.getElementById("days").innerHTML = days.length
    ? days.map(d => dayHTML(d, f)).join("")
    : `<p class="empty">아직 소식이 없어요. 오늘 밤 10시 30분에 첫 소식이 올라와요.</p>`;
}

(function init(){
  const bar = document.getElementById("filters");
  const opts = [["all","전체"], ...Object.entries(PROJ)];
  let cur = "all";
  try { const v = localStorage.getItem("aid-filter"); if (v && (v === "all" || PROJ[v])) cur = v; } catch (_) {}
  bar.innerHTML = opts.map(([k,l]) => `<button class="chip" data-k="${k}" aria-pressed="${k===cur}">${l}</button>`).join("");
  bar.addEventListener("click", e => {
    const b = e.target.closest(".chip"); if (!b) return;
    cur = b.dataset.k;
    bar.querySelectorAll(".chip").forEach(x => x.setAttribute("aria-pressed", String(x.dataset.k === cur)));
    try { localStorage.setItem("aid-filter", cur); } catch (_) {}
    render(cur);
  });
  render(cur);
})();
