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
 <tr><td><b>진료지침 전문 PDF</b></td><td class="small">최종 승인본 공시 게시판 — 요약본 포함</td><td>${bN}</td></tr>
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

/* ============ TOOL LOGIC ============ */
window.selMode=i=>{$('#mDoc').classList.toggle('on',i===0);$('#mPat').classList.toggle('on',i===1);
 $('#s1desc').textContent=i===0?'생물학적제제 고려 전, 아래 4가지를 먼저 확인합니다.':'진료 때 선생님과 함께 확인하게 되는 항목입니다. 미리 읽어보면 상담 준비에 도움이 됩니다.';};
window.selCnt=()=>{const n=[...document.querySelectorAll('.s1c')].filter(c=>c.checked).length;const el=$('#s1cnt');if(el)el.textContent=n+' / 4';};
window.runSelect=()=>{
 const s1=[...document.querySelectorAll('.s1c')].filter(c=>c.checked).length;
 const a=$('#ph-a').checked,e=$('#ph-e').checked,t2=$('#ph-t2').checked,ocs=$('#ph-ocs').checked,none=$('#ph-none').checked;
 let cards=[];
 if(a)cards.push(DRUGS[0]);
 if(e)cards.push(DRUGS[1],DRUGS[2],DRUGS[3]);
 if(t2||ocs)cards.push(DRUGS[4]);
 cards.push(DRUGS[5]); // tezepelumab: 표현형 무관 상시 후보
 cards=[...new Map(cards.map(c=>[c.name,c])).values()];
 const warn=s1<4?`<div class="notice"><b>확인</b> · Step 1의 ${4-s1}개 항목이 미확인 상태입니다. 생물학적제제 고려 전 중증천식 확인(진단·흡입기·생체표지자·동반질환)이 선행되어야 합니다.</div>`:'';
 $('#selOut').innerHTML=`${warn}<h3 class="sect">허가 적응 대상에 해당하는 후보 약제 ${cards.length}종</h3>
 <div class="grid2">${cards.map(d=>{const k=KQS[d.kq-1];return `<div class="card"><span class="muted small" style="font-weight:700">${d.target}</span><h4 style="margin:3px 0 6px;font-size:16px" class="serif">${d.name}${d.name==='Tezepelumab'?' <span class="b b-hold">표현형 무관 — 상시 후보</span>':''}</h4><p class="small">${d.who}</p><div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">${grB(k.grade,k.cond)} ${evB(k.ev)}</div><a class="small" href="#/kq/${d.kq}">권고안·근거 보기 (KQ${d.kq}) →</a></div>`}).join('')}</div>
 <div class="notice"><b>해석 주의</b> · 여러 후보가 함께 표시될 수 있으며 순서는 우선순위가 아닙니다(KQ1–6은 위약 대비 근거 — 간접비교). 최종 선택은 급여 기준·동반질환·환자 선호를 포함해 담당 의료진과 결정합니다.</div>`;
 location.hash.includes('tools/select')&&$('#selOut').scrollIntoView({behavior:'smooth'});};
let fevU='pct';
window.fevUnit=u=>{fevU=u;$('#fevPct').classList.toggle('on',u==='pct');$('#fevL').classList.toggle('on',u==='L');
 $('#fevU1').textContent=u==='pct'?'(%)':'(L)';$('#fevU2').textContent=u==='pct'?'(%)':'(L)';};
const num=id=>{const v=$('#'+id).value;return v===''?null:parseFloat(v)};
window.runResp=()=>{
 const rows=[];
 const push=(n,cls,res,det)=>rows.push([n,cls,res,det]);
 const exPre=num('exPre'),exPost=num('exPost');
 if(exPre===null||exPost===null)push('천식악화율 감소 (≥20%)','핵심적','na','미입력');
 else if(exPre===0)push('천식악화율 감소 (≥20%)','핵심적','na','판정 불가 — 기저 악화 0회');
 else{const red=(exPre-exPost)/exPre*100;push('천식악화율 감소 (≥20%)','핵심적',red>=20?'ok':'no',`감소율 ${red.toFixed(0)}%`)}
 if(exPost===null)push('연간 악화 <1회 (치료 성공)','핵심적','na','미입력');
 else push('연간 악화 <1회 (치료 성공)','핵심적',exPost<1?'ok':'no',`치료 후 ${exPost}회`);
 const oPre=num('ocsPre'),oPost=num('ocsPost');
 if(oPre===null||oPost===null)push('OCS 누적 ≥50% 감량','핵심적','na','미입력');
 else if(oPre===0)push('OCS 누적 ≥50% 감량','핵심적','na','판정 불가 — 기저 사용 없음');
 else{const red=(oPre-oPost)/oPre*100;push('OCS 누적 ≥50% 감량','핵심적',red>=50?'ok':'no',`감량률 ${red.toFixed(0)}%`)}
 const oM=num('ocsMaint');
 if(oM===null)push('OCS 유지용량 <5 mg/day (성공)','핵심적','na','미입력');
 else push('OCS 유지용량 <5 mg/day (성공)','핵심적',oM<5?'ok':'no',`현재 ${oM} mg/day`);
 const aPre=num('actPre'),aPost=num('actPost');
 if(aPre!==null&&aPost!==null)push('ACT ≥3점 증가','중요한',(aPost-aPre)>=3?'ok':'no',`변화 ${(aPost-aPre).toFixed(0)}점`);else push('ACT ≥3점 증가','중요한','na','미입력');
 const qPre=num('acqPre'),qPost=num('acqPost');
 if(qPre!==null&&qPost!==null)push('ACQ ≥0.5점 감소','중요한',(qPre-qPost)>=0.5?'ok':'no',`변화 −${(qPre-qPost).toFixed(1)}점`);else push('ACQ ≥0.5점 감소','중요한','na','미입력');
 const lPre=num('aqPre'),lPost=num('aqPost');
 if(lPre!==null&&lPost!==null)push('AQLQ ≥0.5점 증가','중요한',(lPost-lPre)>=0.5?'ok':'no',`변화 +${(lPost-lPre).toFixed(1)}점`);else push('AQLQ ≥0.5점 증가','중요한','na','미입력');
 const fPre=num('fevPre'),fPost=num('fevPost'),same=$('#fevSame').checked,th=fevU==='pct'?10:0.2,un=fevU==='pct'?'%':'L';
 const fevName=`pre-BD FEV1 ≥${th}${un==='%'?'%':' L'} 증가`;
 if(fPre===null||fPost===null)push(fevName,'중요한','na','미입력');
 else if(!same)push(fevName,'중요한','na','판정 보류 — pre-BD 동일 조건 미확인');
 else push(fevName,'중요한',(fPost-fPre)>=th?'ok':'no',`변화 +${(fPost-fPre).toFixed(2)} ${un}`);
 const mark=r=>r==='ok'?'<span class="result-ok">✓ 충족</span>':r==='no'?'<span class="result-no">✕ 미충족</span>':'<span class="result-na">— </span>';
 const okN=rows.filter(r=>r[2]==='ok').length, noN=rows.filter(r=>r[2]==='no').length, naN=rows.filter(r=>r[2]==='na').length, inN=okN+noN;
 const tv=r=>r[2]==='ok'?'● 충족':r[2]==='no'?'○ 미충족':'— 미입력·보류';
 $('#respOut').innerHTML=`<h3 class="sect">결과 — 지표별 충족 여부</h3>
 <div class="sumchips"><span class="sc ok">● 충족 ${okN}</span><span class="sc no">○ 미충족 ${noN}</span><span class="sc na">— 미입력·보류 ${naN}</span></div>
 <div class="tile-grid">
 ${rows.map(r=>`<div class="tile ${r[2]}"><div class="t-c">${r[1]}</div><div class="t-k">${r[0]}</div><div class="t-v">${tv(r)}</div><div class="t-s">${r[3]}</div></div>`).join('')}
 </div>
 <details class="fx-alt"><summary>표로 보기 (접근성 대체 뷰)</summary>
 <div class="tw"><table><thead><tr><th>지표 (MCID 기준)</th><th>분류</th><th>판정</th><th>상세</th></tr></thead><tbody>
 ${rows.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]==='핵심적'?'<span class="b b-ev">핵심적</span>':'<span class="b b-hold">중요한</span>'}</td><td>${mark(r[2])}${r[2]==='na'?'<span class="result-na">'+r[3]+'</span>':''}</td><td class="small">${r[2]!=='na'?r[3]:''}</td></tr>`).join('')}</tbody></table></div></details>
 <p class="small"><b>충족 ${okN} / 판정 가능 ${inN}</b> — 본 도구는 종합 반응 판정을 제공하지 않습니다. 지표별 결과의 해석과 치료 결정은 담당 의료진의 판단에 따릅니다.</p>
 <div class="cta"><a href="#/tools/adjust"><div class="t">감량·교체 경로 도구 →</div><div class="s">잘 조절 중이라면 KQ7 · 반응이 불충분하다면 KQ8</div></a></div>
 <div class="notice"><b>다음 단계 참고</b> · 6개월 이상 안정 조절 시 단계적 감량은 <a href="#/kq/7">KQ7</a>(조건부 권고 · 근거수준 매우 낮음), 적절한 치료 기간에도 반응 불충분 시 교체는 <a href="#/kq/8">KQ8</a>(조건부 권고 · 근거수준 매우 낮음)을 참조하십시오.</div>`;
 $('#respOut').scrollIntoView({behavior:'smooth'});};
window.adjPath=p=>{$('#pa').classList.toggle('on',p==='a');$('#pb').classList.toggle('on',p==='b');
 $('#adjA').style.display=p==='a'?'':'none';$('#adjB').style.display=p==='b'?'':'none';};
window.adjCheckA=()=>{
 const n=['ga1','ga2','ga3'].filter(i=>$('#'+i).checked).length;
 const bar=$('#gAbar');if(bar)bar.style.width=(n/3*100)+'%';
 const cnt=$('#gAcnt');if(cnt)cnt.textContent=n+' / 3';
 const ok=['ga1','ga2','ga3'].every(i=>$('#'+i).checked);
 $('#adjAOut').innerHTML=ok?`
 <div class="rec-quote"><div class="txt">${KQS[6].rec}</div></div>
 <div style="display:flex;gap:6px;flex-wrap:wrap">${grB('조건부 권고')} ${evB('매우 낮음')}</div>
 <h4>근거 요점</h4>
 <ul class="small"><li>감량·중단은 치료 유지 대비 악화 위험 증가 — Severe exacerbation RR 1.59 (1.11–2.27) · Clinically significant exacerbation RR 1.58 (1.06–2.36)</li>
 <li>다만 감량·중단군의 41–68%가 52주간 악화 없이 조절 유지 (XPORT 47.7% · COMET 41% · OPTIMAL 68%)</li>
 <li>세 연구 모두 감량·중단에 따른 새로운 안전성 신호 없음</li></ul>
 <h4>실행 원칙</h4>
 <ul class="small"><li>급격한 완전 중단이 아닌 <b>단계적 감량</b> (예: OPTIMAL — 투여간격 50% → 125% 연장 → 중단)</li>
 <li>조절 상태(증상·폐기능·혈중 호산구) <b>면밀한 모니터링</b></li>
 <li>조절 소실 징후 시 <b>즉시 이전 단계로 복귀(재증량)</b> — OPTIMAL 재단축 사유: FEV1 ≥15% 감소 15건</li></ul>
 <h4>악화 예측인자 참고 (탐색적 — 확정적 기준 아님)</h4>
 <p class="small">기저 혈중 호산구 높음·중단 후 FeNO 상승(XPORT), 직전 1년 악화력(COMET), 낮은 ACQ·낮은 호산구·OCS 유지 없음·코폴립 없음·낮은 흡연력이 성공적 감량과 관련(OPTIMAL). 개별 환자 판단을 보조하는 정보로만 활용.</p>
 <p class="small"><a href="#/kq/7">KQ7 전체 근거 보기 →</a></p>`
 :`<div class="notice">세 항목을 모두 확인하면 KQ7 권고와 실행 원칙이 표시됩니다.${$('#ga2')&&!$('#ga2').checked?' <b>6개월 이상 안정 조절이 확인되지 않으면 감량 권고의 대상이 아닙니다</b> — <a href="#/tools/response">치료 반응 평가</a>를 먼저 참조하세요.':''}</div>`;};
window.adjCheckB=()=>{
 const n=['gb1','gb2'].filter(i=>$('#'+i).checked).length;
 const bar=$('#gBbar');if(bar)bar.style.width=(n/2*100)+'%';
 const cnt=$('#gBcnt');if(cnt)cnt.textContent=n+' / 2';
 const ok=['gb1','gb2'].every(i=>$('#'+i).checked);
 $('#adjBOut').innerHTML=ok?`
 <div class="rec-quote"><div class="txt">${KQS[7].rec}</div></div>
 <div style="display:flex;gap:6px;flex-wrap:wrap">${grB('조건부 권고')} ${evB('매우 낮음')}</div>
 <h4>근거 요점</h4>
 <ul class="small"><li>연간 천식 악화율 크게 감소 — RR 0.06 (95% CI 0.03–0.14)</li>
 <li>천식 조절도(ACT) MCID 상회 개선 — MD 8.57 (6.34–10.79)</li>
 <li>경구 스테로이드 용량·폐기능(FEV1)도 통계적으로 유의하게 개선되었으나 일부 지표는 MCID 경계 수준</li>
 <li>총 8편 비무작위 관찰연구(RCT 없음) — 근거수준 매우 낮음, 교체 후 결과가 과대평가되었을 가능성 배제 어려움</li></ul>
 <h4>실행 시 고려사항</h4>
 <ul class="small"><li>교체 대상 약제 선택은 표현형·생체표지자 재평가와 함께 <a href="#/tools/select">약제 선택 지원</a> 참조</li>
 <li>전문의 재평가·폐기능·생체표지자(호산구·FeNO·IgE) 검사 등 진단 인프라 필요</li>
 <li>국내 급여 인정 범위가 제한적일 수 있어 사전 확인 필요</li></ul>
 <p class="small"><a href="#/kq/8">KQ8 전체 근거 보기 →</a></p>`
 :`<div class="notice">두 항목을 모두 확인하면 KQ8 권고가 표시됩니다.</div>`;};

/* ---- KQ summary filter ---- */
document.addEventListener('click',e=>{
 const c=e.target.closest('#kqchips .chip');if(!c)return;
 document.querySelectorAll('#kqchips .chip').forEach(x=>x.classList.remove('on'));c.classList.add('on');
 const f=c.dataset.f;
 $('#kqcards').innerHTML=KQS.filter(k=>f==='all'||k.type===f).map(kqCard).join('');});

/* ============ NAV + ROUTER ============ */
const NAV=[
 ['Introduction',[['home','홈 · 중증천식 가이드라인'],['intro/pacen','과제 소개'],['intro/society','대한천식알레르기학회'],['intro/team','연구진 소개'],['intro/progress','개발 경과'],['intro/policy','개정·갱신 정책']]],
 ['Methodology',[['method','개발 방법론'],['method/mcid','MCID 델파이 합의'],['method/values','환자 가치·선호도 조사']]],
 ['Key Questions',[['kq','권고안 요약'],...KQS.map(k=>['kq/'+k.n,`KQ${k.n} <span class="mini">${k.name}</span>`])]],
 ['Decision Support',[['tools/select','약제 선택 지원'],['tools/response','치료 반응 평가'],['tools/adjust','감량·교체 경로']]],
 ['Chatbot',[['chatbot','가이드라인 AI 어시스턴트']]],
 ['For Patients',[['patients','환자 마당'],['patients/biologics','치료제 알아보기'],['patients/voice','환자 목소리'],['patients/faq','FAQ']]],
 ['Resources',[['resources','자료실']]]];
function renderNav(cur){
 $('#nav').innerHTML=NAV.map(g=>`<div class="navgrp"><div class="g">${g[0]}</div>${g[1].map(i=>`<a href="#/${i[0]}" class="${cur===i[0]?'on':''}">${i[1]}</a>`).join('')}</div>`).join('');}
function route(){
 let h=location.hash.replace(/^#\//,'')||'home';
 const [path,anchor]=h.split('#');
 const page=P[path]?path:(P[h]?h:'home');
 renderNav(page);
 $('#app').innerHTML=P[page]();
 if(anchor){const el=document.getElementById(anchor);el&&el.scrollIntoView();}
 else window.scrollTo(0,0);}
