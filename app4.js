P['method/values']=()=>`${crumb('Methodology','환자 가치·선호도 조사')}
 <h1 class="page">환자 가치·선호도 조사 결과</h1>
 <p class="page-en">Patient Values &amp; Preferences Survey (Data View)</p>
 <p>GRADE EtD 틀의 <b>"가치(Values)" 영역 판단 근거</b>가 된 조사의 원본 데이터 뷰입니다. 쉬운 우리말 요약은 <a href="#/patients/voice">환자 마당 · 환자 목소리</a>에서 제공하며, 데이터 갱신은 이 페이지에서만 합니다.</p>
 <h2 class="sec">Design</h2><h3 class="sect">조사 방법</h3>
 ${statCards([['환자','108명','GINA 4–5단계 · 다기관 단면조사'],['생물학적제제 경험','61.1%','사용 경험 보유 · 38.9%는 조사 시점 유지 중'],['의료진','52명','알레르기내과 88.5% · 호흡기내과 9.6% · 간호학 1.9%']])}
 <p class="small">중증 천식으로 분류된 환자 108명을 대상으로 다기관 단면 설문조사를 시행하고, 의료진 52명을 대상으로 별도 설문을 시행하여 <b>환자–의료진 간 인식 차이를 비교 분석</b>했습니다. 응답 형식: 우선순위(1~4위 순위 매기기), 100점 배분(기대 효과·스테로이드 부작용·개선 판단 기준), 구간 선택(지불 의향).</p>
 <h2 class="sec">Results</h2><h3 class="sect">표 7.1 — 사용 결정 시 우선순위 가치 (1~4순위)</h3>
 <div class="tw"><table><thead><tr><th>항목</th><th class="num">1순위</th><th class="num">2순위</th><th class="num">3순위</th><th class="num">4순위</th><th class="num">평균 순위</th></tr></thead><tbody>
 ${T71.map(r=>`<tr><td><b>${r[0]}</b></td><td class="num">${r[1]}</td><td class="num">${r[2]}</td><td class="num">${r[3]}</td><td class="num">${r[4]}</td><td class="num"><b>${r[5]}</b></td></tr>`).join('')}</tbody></table></div>
 <p class="small muted">환자들이 가장 중시한 것은 <b>천식 개선 효과</b>(평균 순위 1.5). ※ 표 값이 정본이며, 문서 본문 서술(2.6/2.3/3.5)은 오기로 확인되어 표 값(2.37/2.6/3.35)을 사용합니다(확정 결정).</p>
 <h3 class="sect">표 7.2 — 기대 효과의 중요도 (총점 100점 배분)</h3>
 ${pvBars()}
 <h3 class="sect">표 7.3 — 기대 효과별 월 지불 의향</h3>
 <div class="tw"><table><thead><tr><th>기대 효과</th><th class="num">25만원 미만</th><th class="num">25–50만원</th><th class="num">50–80만원</th><th class="num">80–120만원</th><th class="num">120만원 이상</th></tr></thead><tbody>
 ${T73.map(r=>`<tr><td><b>${r[0]}</b></td><td class="num">${r[1]}</td><td class="num">${r[2]}</td><td class="num">${r[3]}</td><td class="num">${r[4]}</td><td class="num">${r[5]}</td></tr>`).join('')}</tbody></table></div>
 <p class="small muted">기대 효과의 종류와 관계없이 모든 지표에서 <b>월 25만원 미만</b>의 비용 지불 선호가 다수(59.3–70.4%)였습니다.</p>
 <h2 class="sec">Comparison</h2><h3 class="sect">환자–의료진 인식 차이</h3>
 <div class="card"><p class="small" style="margin-bottom:0">환자들은 <b>증상 개선</b>을 가장 중요한 기대 효과로 평가했고 다음으로 경구 스테로이드 관련 부작용 감소를 중시한 반면, <b>급성 악화 감소</b>는 상대적으로 낮은 중요도로 평가했으며 환자 간 변동성이 컸습니다. 반면 의료진은 급성 악화 감소와 경구 스테로이드 사용량 감소를 핵심 지표로 중시하여 치료 목표에 대한 인식 차이가 확인되었습니다. 이 차이는 각 KQ의 EtD "가치" 영역 판단(아마도 중요한 불확실성/변동성 있음)의 근거가 되었으며, 충분한 정보 공유에 기반한 <b>공동 의사결정</b>의 필요성을 시사합니다.</p></div>
 <h2 class="sec">Usage</h2><h3 class="sect">이 결과가 쓰이는 곳</h3>
 <ul class="small">
  <li><b>KQ1–8 상세 페이지</b> — EtD 9영역 중 "가치" 판단과 기타 고려사항(환자의 가치와 선호도) 서술의 근거.</li>
  <li><b><a href="#/patients/voice">환자 마당 · 환자 목소리</a></b> — 쉬운 우리말 요약 뷰(이 페이지 데이터에서 파생).</li>
 </ul>
 <div class="placeholder"><b>의료진 설문 세부 결과표</b> ${bN}<br>의료진 52명 설문의 항목별 세부 결과(원자료 PPT/Word) 수령 시 환자–의료진 비교표로 보강합니다 — 추후 고도화 시 해당 자료 필요.</div>
 <p class="small"><a href="#/method">← 개발 방법론</a></p>${pfoot}`;

P['resources']=()=>`${crumb('Resources','자료실')}
 <h1 class="page">자료실</h1>
 <div class="tw"><table><thead><tr><th style="min-width:190px">자료</th><th>내용</th><th>상태</th></tr></thead><tbody>
 <tr><td><b>진료지침 전문 PDF</b></td><td class="small">최종 조판본 4부작 수령 완료(2026-08-25 업데이트판, 총 196쪽 — I 서론·방법론 / II 본문·권고문 2권 / IV 부록 · III 최종 검토는 목차만) — 공개 정책(최종 회의) 결정 후 요약본과 함께 공시 게시판에 게시</td><td>${bH}</td></tr>
 <tr><td><b>소책자</b></td><td class="small">의료인용 · 환자용 요약 소책자</td><td>${bN}</td></tr>
 <tr><td><b>방법론 부록 · 설문지</b></td><td class="small">중요한 건강결과 설문지 · MCID 설문지 · 환자 가치·선호도 설문지 (3종 확보 — 게시 형식·라이선스 결정 후 공개)</td><td>${bH}</td></tr>
 <tr><td><b>방법론 부록 · 검색전략</b></td><td class="small">KQ별 검색식 · PRISMA 흐름도</td><td>${bN}</td></tr>
 <tr><td><b>방법론 부록 · COI 공시</b></td><td class="small">개발위원회 이해상충 공시 내역</td><td>${bN}</td></tr>
 <tr><td><b>용어 정의·약어집</b></td><td class="small">본문 등장 용어(ICS·LABA·OCS·FeNO·TSLP·ACQ·ACT·AQLQ·MCID·EtD 등) — 원문 발췌 기반 웹 초안 제작 가능, 위원회 검수 후 게시</td><td>${bP}</td></tr>
 <tr><td><b>관련 가이드라인</b></td><td class="small"><a href="https://www.allergy.or.kr/board/treatment?gubun=1" target="_blank" rel="noopener">KAAACI 천식 가이드라인</a> · GINA · ERS/ATS · EAACI (외부 링크)</td><td><span class="b b-ok">게시</span></td></tr>
 <tr><td><b>관련 국내 연구</b></td><td class="small">KoSAR(한국 중증천식 레지스트리) 연구 · PACEN 1단계 논문 (서지 링크)</td><td>${bP}</td></tr>
 <tr><td><b>약제별 제조사 공식 자료</b></td><td class="small">공식 홈페이지 주소 · 회사 제공 환자용 지침·브로셔 — 자료가 있는 경우 첨부 형식으로 제공</td><td>${bP}</td></tr>
 </tbody></table></div>
 <div class="notice"><b>안내</b> · "자료 없음/미구현" 항목은 자료 수령 후 게시 예정이며, 각 항목은 추후 고도화 시 필요한 자료입니다. 게시 여부·범위가 공개 정책에 걸린 항목은 최종 회의 결정 후 반영합니다.</div>${pfoot}`;

/* ============ TOOL LOGIC (v2.5) ============ */
/* ---- 공유 환자 컨텍스트 ---- */
const PC={mode:'doc',s1:[false,false,false,false],ocs:null,eos:null,ruledOut:null,feno:null,allergy:null,rin:{},resp:null,g:{},path:'a'};
function pcSave(){try{sessionStorage.setItem('pacenPC',JSON.stringify(PC))}catch(e){}}
(function(){try{const v=sessionStorage.getItem('pacenPC');if(v)Object.assign(PC,JSON.parse(v))}catch(e){}})();
const pcSevere=()=>PC.s1.every(Boolean);
window.setMode=m=>{PC.mode=m;pcSave();route()};
function modeSeg(){return `<div style="margin:0 0 14px"><span class="small" style="font-weight:700;margin-right:8px">보기 모드</span><span class="seg"><button class="${PC.mode!=='pat'?'on':''}" onclick="setMode('doc')">의료진</button><button class="${PC.mode==='pat'?'on':''}" onclick="setMode('pat')">환자</button></span></div>`}
const VF={ocs:{yes:'OCS 의존',no:'OCS 비의존'},eos:{lt150:'호산구 &lt;150',mid:'호산구 150–1500',gt1500:'호산구 &gt;1500'},feno:{lt25:'FeNO &lt;25',ge25:'FeNO ≥25'},allergy:{yes:'알레르기성',no:'비알레르기성'},ruledOut:{yes:'과호산구 질환 배제'}};
function pcxBar(){
 const c=[];
 if(pcSevere())c.push('중증천식 확인 4/4');
 for(const k of ['ocs','eos','feno','allergy','ruledOut'])if(PC[k]&&VF[k][PC[k]])c.push(VF[k][PC[k]]);
 if(PC.resp)c.push(`반응평가 충족 ${PC.resp.ok}/${PC.resp.ok+PC.resp.no}`);
 if(!c.length)return '';
 return `<div class="pcx"><span class="k">💾 도구 간 공유되는 입력</span>${c.map(x=>`<span class="c">${x}</span>`).join('')}<button onclick="pcReset()">모두 지우기</button></div>`}
window.pcReset=()=>{PC.s1=[false,false,false,false];PC.ocs=PC.eos=PC.ruledOut=PC.feno=PC.allergy=null;PC.rin={};PC.resp=null;PC.g={};pcSave();route()};
const rv=k=>{const v=PC.rin&&PC.rin[k];return v==null?'':v};
const ph=t=>PC.mode==='pat'?`<div class="pat-note">${t}</div>`:'';
