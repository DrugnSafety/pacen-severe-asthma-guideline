/* ============ HELPERS ============ */
const $=s=>document.querySelector(s);
const bN='<span class="b b-none">자료 없음/미구현</span>', bP='<span class="b b-plan">예정</span>', bD='<span class="b b-draft">감수 전 초안</span>', bH='<span class="b b-hold">공개 정책 결정 전 보류</span>', bW='<span class="b b-warn2">작업 중</span>';
const evB=ev=>`<span class="b b-ev">근거수준 ${ev} <span class="dots">${EVDOTS[ev]}</span></span>`;
const grB=(g,c)=>`<span class="b b-grade">${g}${c?' <span style="font-weight:400">'+c+'</span>':''}</span>`;
const disclaimer=`<div class="notice"><b>의료 면책</b> · 본 콘텐츠와 도구는 연구·교육 목적이며 개별 환자의 임상 판단을 대신하지 않습니다. 치료 결정은 반드시 담당 의료진과 상의하십시오. 권고안은 학회 인증·최종 승인 전 초안 상태일 수 있습니다.</div>`;
const indirect=`<div class="notice"><b>간접비교 고지</b> · KQ1–6은 각 약제 대 위약 비교입니다. 약제 간 직접 비교 근거가 아니므로 약제 간 우열을 시사하지 않습니다.</div>`;
const pfoot=`<div class="pfoot">성인 중증천식 진료 가이드라인 (개발 중 · 학회 인증 전) — PACEN · 대한천식알레르기학회(KAAACI)<br>진료지침 최종 조판본(4부작) 2026-08-25 업데이트 · KQ 분석표 2026-08-24 수정본 · 근거 검색일 2025-12-31 · 본 화면은 프로토타입이며 실서비스 전 위원회 검토가 필요합니다.</div>`;
function crumb(a,b){return `<div class="crumb"><b>${a}</b>${b?' &nbsp;›&nbsp; '+b:''}</div>`}
function statCards(list){return `<div class="stats">${list.map(x=>`<div class="stat"><div class="k">${x[0]}</div><div class="v">${x[1]}</div><div class="s">${x[2]||''}</div></div>`).join('')}</div>`}
function kqCard(k){return `<a class="kq-card" href="#/kq/${k.n}"><span class="no">KQ ${k.n} ${k.type==='drug'?'· '+(k.target||''):''}</span><div class="nm">${k.name}</div><div class="ph">${k.pheno||''}</div><div class="bd">${grB(k.grade,k.cond)} ${evB(k.ev)}</div></a>`}

/* ============ PAGES ============ */
const P={};
P['home']=()=>`
 <div class="hero">
  <span class="b b-draft">개발 중 — 학회 인증·최종 승인 전</span>
  <h1>성인 중증천식 환자의<br>생물학적제제 사용에 대한 근거기반 진료지침</h1>
  <p class="sub">국내 허가 생물학적제제 6종의 사용(KQ1–6)과 치료 전략 — 단계적 감량(KQ7)·교체(KQ8) — 에 대한 8개 권고안을 GRADE 방법론으로 개발했습니다. 개발: 대한천식알레르기학회(KAAACI) 위임 · PACEN 과제.</p>
  <div class="meta"><span class="b b-ok">근거 검색일 2025-12-31</span><span class="b b-ok">GRADE · EtD</span><span class="b b-ok">환자 가치·선호도 반영 (환자 108명)</span><span class="b b-ok">MCID 전문가 델파이 합의</span></div>
 </div>
 <div class="cta">
  <a href="#/kq"><div class="t">권고안 요약 →</div><div class="s">8개 권고문·근거수준·권고등급 한눈에</div></a>
  <a href="#/tools/select"><div class="t">치료 결정 지원 →</div><div class="s">약제 선택 · 치료 반응 평가 · 감량·교체 경로</div></a>
  <a href="#/chatbot"><div class="t">AI 어시스턴트 →</div><div class="s">지침 근거를 출처와 함께 답하는 챗봇</div></a>
 </div>
 <h2 class="sec">Recommendations</h2><h3 class="sect">권고안 미리보기</h3>
 <p class="muted">8개 권고 전부 <b>조건부 권고</b> · 근거수준 중등도 5 / 낮음 1 / 매우 낮음 2 — 카드를 누르면 근거 상세로 이동합니다.</p>
 <div class="grid3">${KQS.map(kqCard).join('')}</div>
 ${indirect}${disclaimer}
 <p class="small"><a href="#/intro/progress">개발 경과 보기 →</a> &nbsp;·&nbsp; <a href="#/method">개발 방법론 →</a></p>${pfoot}`;

P['intro/pacen']=()=>`${crumb('Introduction','과제 소개')}
 <h1 class="page">과제 소개</h1>
 <p class="page-en">About This Project</p>
 <p>본 진료지침은 <b>대한천식알레르기학회(KAAACI)</b>의 위임을 받아, 한국 성인 중증천식 환자에서 생물학적제제 사용 결정을 지원하기 위해 GRADE 방법론으로 개발되었습니다. 아래는 과제 개요와 개발 배경입니다.</p>
 <div class="tw"><table><thead><tr><th style="width:160px">구분</th><th>내용</th></tr></thead><tbody>
 <tr><td><b>과제번호</b></td><td>RS-2025-02303166 <span class="small muted">(연구개발계획서 기준)</span></td></tr>
 <tr><td><b>과제명</b></td><td>성인 중증 천식 생물학적 치료제 가이드라인 <span class="small muted">— 공식 과제명 (진료지침 통합본 I-17 확정 · 2026-08-25)</span></td></tr>
 <tr><td><b>연구기간</b></td><td>2025.4 ~ 2026.3</td></tr>
 <tr><td><b>주관연구기관</b></td><td>서울아산병원</td></tr>
 <tr><td><b>개발 위임</b></td><td>대한천식알레르기학회 (KAAACI)</td></tr>
 <tr><td><b>연구 총괄(팀장)</b></td><td>송우정 (서울아산병원 알레르기내과) · 운영위원회 5인 공동 수행 → <a href="#/intro/team">연구진 소개</a></td></tr>
 <tr><td><b>재원</b></td><td>보건복지부 연구지원금 — PACEN(환자중심 의료기술 최적화 연구) 사업 · 지침 개발 인건비·회의비·웹 플랫폼 개발 비용 포함</td></tr>
 </tbody></table></div>
 <h2 class="sec">Background</h2><h3 class="sect">개발 배경 및 필요성</h3>
 <p class="small">전 세계적으로 천식은 약 3억 5천만 명에게 영향을 미치는 흔한 만성 호흡기 질환이며 이 중 5–10%가 중증 천식으로 분류됩니다. 국내 천식 환자는 약 208만 명(유병률 약 4%)으로 추산되며, 이 중 5–10%가 중증 천식에 해당합니다. 중증 천식은 환자 수 비중은 크지 않으나 전체 천식 관련 의료비의 50% 이상을 차지할 만큼 사회·경제적 부담이 불균형적으로 크고, 잦은 악화·입원과 경구 스테로이드(OCS) 의존에 따른 골다공증·심혈관질환·당뇨 등 합병증 위험 증가를 동반합니다.</p>
 <p class="small">최근 IgE·IL-5·IL-5수용체·IL-4수용체알파·TSLP 등을 표적하는 생물학적제제가 도입되며 중증 천식 치료에 획기적 진전을 가져왔습니다. 그러나 ERS/ATS·EAACI 등 국제 학회의 근거기반 지침은 마련되어 있는 반면, 한국 환자의 질병 특성·약제 접근성과 급여 기준·환자 가치와 선호도를 반영한 <b>국내 진료지침은 부재</b>하였습니다. 실제 한국 중증 천식 레지스트리(KoSAR) 분석에서 제2형 기도 염증 소견은 약 85%에서 관찰되었으나 생물학적 치료제 처방률은 약 30%에 그쳐, 국내 실정에 맞는 지침의 필요성이 뚜렷하였습니다.</p>
 <p class="small" style="margin-bottom:0">이에 본 과제는 GRADE(Grading of Recommendations, Assessment, Development and Evaluation) 방법론을 적용하고 환자 가치·선호도 조사를 체계적으로 반영하여, 한국 성인 중증 천식 환자를 위한 근거기반 진료지침을 개발하는 것을 목표로 합니다.</p>
 <h2 class="sec">Lineage</h2><h3 class="sect">PACEN 프로그램과의 관계</h3>
 <div class="card"><h4 style="margin-top:0">1단계 → 2단계(본 과제)</h4>
 <p class="small" style="margin-bottom:0">본 과제는 <b>환자중심 의료기술 최적화 연구(PACEN)</b>의 2단계 과제입니다. PACEN 1단계 「중증 천식에서 생물학적 제제간 비교평가 후향연구(HC19C0318)」는 생물학적 치료제를 투약받은 성인 중증천식 환자 136명 대상 다기관 후향 연구로, 약 80% 이상에서 양호한 치료 반응을 확인하였습니다. 이 1단계 실사용 근거를 기반으로, 2단계인 본 과제에서 진료지침 개발과 지침 기반 온라인 플랫폼(본 사이트) 구축을 수행하였습니다.</p></div>
 <p class="small muted">PACEN 프로그램 전반에 대한 소개는 추후 확장 예정입니다.</p>${pfoot}`;

P['intro/society']=()=>`${crumb('Introduction','대한천식알레르기학회')}
 <h1 class="page">대한천식알레르기학회 (KAAACI)</h1>
 <div class="placeholder">학회 소개 — <b>현행 페이지 콘텐츠 유지</b></div>
 <div class="card"><h4 style="margin-top:0">개발 위임과 독립성</h4>
 <p class="small">본 진료지침은 대한천식알레르기학회의 위임 하에 개발되었으며, 학회는 지침 내용과 개발 과정에 독립성을 보장합니다. 개발 재원은 보건복지부 연구지원금(PACEN 사업 — 지침 개발 인건비·회의비·웹 플랫폼 개발 비용 포함)이며, 재원의 잠재적 영향은 없었고 모든 결과 도출은 위원회의 독립적인 개발 과정을 거쳤습니다.</p>
 <p class="small" style="margin-bottom:0">이해상충(COI) 공시 → <a href="#/intro/team">연구진 소개</a> ${bN}</p></div>${pfoot}`;

P['intro/team']=()=>`${crumb('Introduction','연구진 소개')}
 <h1 class="page">연구진 소개</h1>
 <p class="muted">개발위원회 20인 · 운영위원회 5인 · 자문위원회 13인 · 환자 참여 — 사진은 운영위원회만 게재합니다(확정 방침).</p>
 <h2 class="sec">Steering Committee</h2><h3 class="sect">운영위원회 (5인)</h3>
 <div class="person-grid">${STEER5.map(p=>`<div class="person"><div class="ava">${p[0][0]}</div><div class="nm">${p[0]}</div><div class="rl">${p[3]}</div><div class="og">${p[1]}<br>${p[2]}</div></div>`).join('')}</div>
 <p class="muted">※ 실서비스에서는 기존 게재 사진 유지.</p>
 <h2 class="sec">Development Committee</h2><h3 class="sect">개발위원회 (20인)</h3>
 <div class="tw"><table><thead><tr><th>이름</th><th>소속</th><th>전공</th><th>담당</th></tr></thead><tbody>
 ${DEV20.map(p=>`<tr><td><b>${p[0]}</b></td><td>${p[1]}</td><td>${p[2]}</td><td><span class="b b-ok">${p[3]}</span></td></tr>`).join('')}</tbody></table></div>
 <h2 class="sec">Advisory Committee</h2><h3 class="sect">자문위원회 (13인 · 가나다순)</h3>
 <div class="tw"><table><thead><tr><th>이름</th><th>소속</th><th>역할</th></tr></thead><tbody>
 ${ADV13.map(p=>`<tr><td><b>${p[0]}</b></td><td>${p[1]}</td><td>자문위원</td></tr>`).join('')}</tbody></table></div>
 <h2 class="sec">Patient Involvement</h2><h3 class="sect">환자 참여</h3>
 <p class="small">중증천식 환자가 개발위원회에 참여하여 개발 과정 전반에 의견을 개진하였으며, 환자 108명 대상 가치·선호도 조사를 통해 권고 도출 과정에 환자 관점을 반영했습니다(익명). → <a href="#/method/values">조사 결과 보기</a></p>
 <h2 class="sec">Conflict of Interest</h2><h3 class="sect">이해상충(COI) 공시</h3>
 <div class="placeholder"><b>이해상충 공시 내역</b> ${bN}<br>개발위원회 전원의 최근 2년 관련 활동 조사·기록 결과를 이 위치에 게시합니다. 공시 상세 수준(개인별 vs 요약)은 공개 정책 결정 후 반영 — <b>추후 고도화 시 해당 자료 필요.</b></div>${pfoot}`;

P['intro/progress']=()=>`${crumb('Introduction','개발 경과')}
 <h1 class="page">개발 경과</h1>
 <p class="muted">완료 단계는 채워진 점, 예정 단계는 빈 점으로 표시. 개별 일자가 자료에 없는 항목은 "(일자 미기재)"로 둡니다.</p>
 <div class="tl">
  <div class="ev"><div class="d">2025-04</div><div class="t">과제 개시</div><div class="s">연구기간 2025.4 ~ 2026.3 · 주관 서울아산병원 · KAAACI 개발 위임</div></div>
  <div class="ev"><div class="d">(일자 미기재)</div><div class="t">핵심질문(PICO) 확정 · 개발위원 배정</div><div class="s">KQ 8개 확정 — 약제 6종(KQ1–6) + 감량(KQ7) + 교체(KQ8)</div></div>
  <div class="ev"><div class="d">(일자 미기재)</div><div class="t">중요한 건강결과 선정 조사</div><div class="s">9점 척도 전문가 조사 → 핵심적(천식악화·OCS 사용) / 중요한(ACQ·ACT·FEV1·AQLQ·이상반응)</div></div>
  <div class="ev"><div class="d">(일자 미기재)</div><div class="t">MCID 델파이 합의 (3라운드)</div><div class="s">1R 71명(76.3%) → 2R 61명(87.1%) → 3R 33명(89.2%) · MCID 9지표 + 이상반응 허용기준 합의</div></div>
  <div class="ev"><div class="d">(일자 미기재)</div><div class="t">환자 가치·선호도 조사</div><div class="s">중증천식 환자 108명 + 의료진 52명 다기관 단면조사</div></div>
  <div class="ev"><div class="d">2025-12-31</div><div class="t">체계적 문헌검색</div><div class="s">Medline · Embase · Cochrane Library · KoreaMed · ClinicalTrials.gov</div></div>
  <div class="ev"><div class="d">~ 2026-07</div><div class="t">KQ별 근거 분석·GRADE 평가</div><div class="s">KQ1–8 분석표 완성 (메타분석 · RoB · SoF · EtD)</div></div>
  <div class="ev"><div class="d">(일자 미기재)</div><div class="t">개발위원 합의 투표 · 공청회 의견수렴 — 완료</div><div class="s">KQ별 투표 결과 존재 (예: KQ1 공청회 35명 · KQ7 33명 참여) · 제기 의견은 검토 후 최종 권고에 반영</div></div>
  <div class="ev pend"><div class="d">예정</div><div class="t">외부 전문가 검토 ${bN}</div><div class="s">검토 방법·위원 목록·결과 — 자료 수령 후 게시. 추후 고도화 시 해당 자료 필요.</div></div>
  <div class="ev pend"><div class="d">예정</div><div class="t">학회 인증 · 최종 승인 ${bP}</div><div class="s">KAAACI 인증 및 최종 승인 절차 — 완료 후 본 사이트의 draft 표기 해제</div></div>
 </div>${pfoot}`;

P['intro/policy']=()=>`${crumb('Introduction','개정·갱신 정책')}
 <h1 class="page">개정·갱신 정책</h1>
 <h3 class="sect" style="margin-top:20px">갱신 방법</h3>
 <div class="placeholder"><b>갱신 방법 (정본 I-14 · 리빙 가이드라인 정의는 IV-1 용어집 수록)</b> ${bH}<br>연구계획서 기준: 새로운 약제·치료법 등 양질의 근거가 명백한 경우 권고안 추가·수정·보완 방식으로 <b>3–5년 주기 개정</b>을 계획하며, 신속 업데이트 필요 시 <b>리빙 가이드라인(living guideline) 포맷</b>을 검토. 명문화된 개정 프로토콜 수령 후 이 위치에 게시 — 추후 고도화 시 해당 자료 필요.</div>
 <h3 class="sect">버전·공시 이력</h3>
 <div class="tw"><table><thead><tr><th>버전</th><th>일자</th><th>내용</th></tr></thead><tbody>
 <tr><td>지침 문서 업데이트본</td><td>2026-05-01</td><td>서론·방법론·권고안 요약 정리</td></tr>
 <tr><td>KQ 분석표 (KQ1–8)</td><td>2026-07</td><td>근거 분석·GRADE·합의/공청회 결과 반영</td></tr>
 <tr><td>KQ 분석표 수정본</td><td>2026-08-24</td><td>KQ4 메타분석 재수행·하위군 분석 신설 · KQ8 FEV1(%) 재분석 · 전 KQ 참고문헌 인용체계 정비</td></tr>
 <tr><td>진료지침 통합본</td><td>2026-08-25</td><td>서론·방법론 17개 절 확장 + KQ1–8 수정본 + 부록(용어·약어집, PRISMA, 설문지, COI 공시) 통합 조판 (179쪽) · 공식 과제명 확정</td></tr>
 <tr><td>최종 조판본 (4부작)</td><td>2026-08-25 업데이트<br><span class="muted small">(조판 2026-08-27)</span></td><td>I 서론·방법론(39쪽) / II 본문·권고문 2권(요약~KQ4 65쪽 · KQ5~알고리즘 69쪽) / IV 부록(23쪽) — 총 196쪽. <b>생물학적 제제별 특성 요약(Table II-0-1·II-0-2)</b>과 <b>치료 알고리즘 II-9(간략판·Figure II-9 상세판)</b> 신설 · III 최종 검토는 목차만(외부 검토·인증 대기)</td></tr>
 <tr><td>홈페이지 개편</td><td>(예정)</td><td>본 프로토타입 기반 콘텐츠 고도화</td></tr></tbody></table></div>
 <h3 class="sect">데이터 기준일 관리</h3>
 <p class="small">본 사이트의 정보는 두 종류의 기준일로 관리합니다.</p>
 <ul class="small"><li><b>근거 기준일</b> — 체계적 문헌검색일 <b>2025-12-31</b> (전 페이지 푸터 고정 표기). 이후 발표된 근거는 차기 개정에서 반영.</li>
 <li><b>행정 정보 기준일</b> — 허가사항·급여 기준 등은 수시로 변경되므로 해당 정보 위치에 별도 기준일을 표기하고, 항상 공식 최신 고시 확인을 안내.</li></ul>${pfoot}`;

P['kq']=()=>{
 const rows=KQS.map(k=>`<tr><td><b>KQ${k.n}</b></td><td><a href="#/kq/${k.n}"><b>${k.name}</b></a><span class="muted"> · ${k.q}</span></td><td class="small">${k.rec}</td><td>${evB(k.ev)}</td><td>${grB(k.grade,k.cond)}</td></tr>`).join('');
 return `${crumb('Key Questions','권고안 요약')}
 <h1 class="page">권고안 요약</h1>
 <p class="page-en">Summary of Recommendations — 8 Key Questions</p>
 <p>국내 허가 생물학적제제 6종의 사용(KQ1–6)과 치료 전략(KQ7 감량 · KQ8 교체)에 대한 권고입니다. <b>8개 권고 전부 조건부 권고</b>이며, 근거수준은 중등도 5 · 낮음 1 · 매우 낮음 2입니다. 조건부 권고는 임상 상황과 환자의 가치·선호에 따라 다른 선택을 할 수 있음을 의미합니다.</p>
 <div class="chips" id="kqchips">
  <button class="chip on" data-f="all">전체 8</button><button class="chip" data-f="drug">약제 KQ1–6</button><button class="chip" data-f="strategy">전략 KQ7–8</button>
 </div>
 <div class="grid3" id="kqcards">${KQS.map(kqCard).join('')}</div>
 <h3 class="sect">권고문 총괄표</h3>
 <div class="tw"><table><thead><tr><th>번호</th><th style="min-width:200px">핵심질문</th><th style="min-width:260px">권고문</th><th>근거수준</th><th>권고등급</th></tr></thead><tbody>${rows}</tbody></table></div>
 <p class="small">근거수준·권고등급의 정의 → <a href="#/method#grade">개발 방법론</a></p>
 ${indirect}${disclaimer}${pfoot}`};

function kqStub(k){
 return `${crumb('Key Questions','KQ'+k.n)}
 <div class="muted" style="font-weight:700;letter-spacing:.1em">KEY QUESTION ${String(k.n).padStart(2,'0')}</div>
 <h1 class="page">${k.q}</h1><p class="page-en">${k.en||''}</p>
 <div class="badge-bar">
  <div class="cell"><div class="k">근거수준</div><div class="v">${k.ev} <span class="dots muted">${EVDOTS[k.ev]}</span></div></div>
  <div class="cell"><div class="k">권고방향</div><div class="v gr">한다</div></div>
  <div class="cell"><div class="k">권고강도</div><div class="v">조건부${k.cond?' <span class="small muted">'+k.cond+'</span>':''}</div></div>
 </div>
 <h2 class="sec">Recommendation</h2><h3 class="sect">권고문</h3>
 <div class="rec-quote"><div class="txt">${k.rec}</div></div>
 <div class="placeholder"><b>상세 근거 데이터 연동 예정</b> ${bW}<br>
 PICOTS · EtD 9영역 판단 · 주요지표(바라는/바라지 않는 효과, MCID 판정) · 근거요약표(SoF) · Forest plot · 개발위원 합의·공청회 투표 · 참고문헌 · 부록(RoB 2/ROBINS-I·GRADE 상세) — <b>KQ${k.n} 분석표 PDF 확보 완료, 추출·연동 대기.</b> 템플릿은 <a href="#/kq/1">KQ1</a>·<a href="#/kq/7">KQ7</a>과 동일하게 적용됩니다.</div>
 ${k.type==='drug'?indirect:''}${disclaimer}
 <p class="small"><a href="#/kq">← 권고안 요약</a></p>${pfoot}`}

function mcidMark(m){
 if(m==='met')return '<span class="mcid-met">● MCID 충족</span>';
 if(m==='harm')return '<span class="harm">● MCID 초과 (위해 방향)</span>';
 if(m==='ns')return '<span class="result-na">○ 유의하지 않음</span>';
 return '<span class="mcid-not">○ 유의 · MCID 미도달</span>';}

/* ── null·MCID 이중 임계 효과 차트 (분석표 PDF Figure 재현) ── */
const FXLEG=`<div class="fx-legend">
 <span><svg width="13" height="13"><circle cx="6.5" cy="6.5" r="4.6" fill="var(--mark)"/></svg>MCID 초과 + 유의</span>
 <span><svg width="13" height="13"><circle cx="6.5" cy="6.5" r="4.2" fill="#fff" stroke="var(--mark)" stroke-width="1.8"/></svg>유의 · MCID 미도달</span>
 <span><svg width="13" height="13"><circle cx="6.5" cy="6.5" r="4.2" fill="#fff" stroke="var(--ink3)" stroke-width="1.8"/></svg>유의하지 않음</span>
 <span><svg width="13" height="13"><circle cx="6.5" cy="6.5" r="4.6" fill="var(--red)"/></svg>MCID 초과 (위해)</span>
 <span><svg width="15" height="13"><line x1="7.5" y1="1.5" x2="7.5" y2="11.5" stroke="var(--line2)" stroke-width="1.8"/></svg>null 기준선</span>
 <span><svg width="15" height="13"><line x1="7.5" y1="1.5" x2="7.5" y2="11.5" stroke="var(--mcid)" stroke-width="1.8" stroke-dasharray="3 2.2"/></svg>MCID 임계선</span></div>`;
