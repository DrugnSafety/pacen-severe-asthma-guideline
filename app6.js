/* ---- 치료 반응 평가 ---- */
let fevU='pct';
window.fevUnit=u=>{fevU=u;$('#fevPct').classList.toggle('on',u==='pct');$('#fevL').classList.toggle('on',u==='L');
 $('#fevU1').textContent=u==='pct'?'(%)':'(L)';$('#fevU2').textContent=u==='pct'?'(%)':'(L)';};
const num=id=>{const v=$('#'+id).value;return v===''?null:parseFloat(v)};
const RESP_EASY=[
 {ico:'🌡️',easy:{ok:'악화(응급 치료가 필요했던 일)가 충분히 줄었어요.',no:'악화 감소가 기준(20%)에는 아직 못 미쳐요.',na:'악화 횟수를 입력하면 판정할 수 있어요.'},ask:'지난 1년 악화 횟수가 치료 목표에 맞는지 여쭤보세요.'},
 {ico:'🏥',easy:{ok:'지난 1년 악화가 1회 미만 — 치료 성공 기준이에요.',no:'지난 1년에 악화가 1회 이상 있었어요.',na:'치료 후 악화 횟수를 입력해 주세요.'},ask:'"악화를 더 줄이려면 무엇을 조정할 수 있나요?"'},
 {ico:'💊',easy:{ok:'먹는 스테로이드를 절반 이상 줄였어요.',no:'스테로이드 감량이 절반에는 못 미쳐요.',na:'용량을 모르면 처방전을 확인해 보세요.'},ask:'"스테로이드를 더 줄일 수 있는 상태인가요?"'},
 {ico:'📉',easy:{ok:'유지용량이 하루 5mg 미만 — 성공 기준이에요.',no:'유지용량이 아직 하루 5mg 이상이에요.',na:'현재 유지용량을 입력해 주세요.'},ask:'"유지용량을 낮추는 계획을 세울 수 있나요?"'},
 {ico:'📋',easy:{ok:'천식조절검사(ACT)가 의미 있게 좋아졌어요(3점 이상).',no:'ACT 변화가 3점에는 못 미쳐요.',na:'ACT 점수를 입력하면 판정할 수 있어요.'},ask:'"제 조절 상태가 목표에 도달했나요?"'},
 {ico:'📋',easy:{ok:'ACQ 점수가 의미 있게 좋아졌어요(0.5점 이상).',no:'ACQ 변화가 0.5점에는 못 미쳐요.',na:'ACQ 점수를 입력하면 판정할 수 있어요.'},ask:'"증상 조절을 더 좋게 할 방법이 있나요?"'},
 {ico:'🌤️',easy:{ok:'삶의 질 점수(AQLQ)가 의미 있게 좋아졌어요.',no:'AQLQ 변화가 0.5점에는 못 미쳐요.',na:'AQLQ 점수를 입력하면 판정할 수 있어요.'},ask:'"일상생활 제한을 줄일 방법을 상의하고 싶어요."'},
 {ico:'🫁',easy:{ok:'폐기능(FEV1)이 기준 이상으로 좋아졌어요.',no:'폐기능 개선이 기준에는 못 미쳐요.',na:'폐기능 수치·측정 조건을 확인해 주세요.'},ask:'"폐기능 검사를 언제 다시 해보면 좋을까요?"'}];
window.runResp=()=>{
 const rows=[];
 const push=(n,cls,res,det)=>rows.push([n,cls,res,det]);
 PC.rin={};['exPre','exPost','ocsPre','ocsPost','ocsMaint','actPre','actPost','acqPre','acqPost','aqPre','aqPost','fevPre','fevPost'].forEach(k=>{const v=$('#'+k);if(v&&v.value!=='')PC.rin[k]=v.value});
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
 const okN=rows.filter(r=>r[2]==='ok').length, noN=rows.filter(r=>r[2]==='no').length, naN=rows.filter(r=>r[2]==='na').length, inN=okN+noN;
 PC.resp={ok:okN,no:noN,na:naN};pcSave();const pb=$('#pcxBar');if(pb)pb.innerHTML=pcxBar();
 if(PC.mode==='pat'){
  const cards=rows.map((r,i)=>{const e=RESP_EASY[i]||RESP_EASY[7];
   return `<div class="cn-card ${r[2]}"><div class="cn-ico">${e.ico}</div><div class="cn-k">${r[1]} 지표</div><div class="cn-t">${r[0]}</div><div class="cn-v">${r[2]==='ok'?'● 기준 도달':r[2]==='no'?'○ 기준 미달':'— 확인 필요'}</div><div class="cn-easy">${e.easy[r[2]]}${r[2]!=='na'?`<br><span class="muted">(${r[3]})</span>`:''}</div><div class="cn-ask"><b>진료 때 물어보세요</b>${e.ask}</div></div>`}).join('');
  $('#respOut').innerHTML=`<h3 class="sect">지표별 결과 카드</h3>
  <div class="sumchips"><span class="sc ok">● 도달 ${okN}</span><span class="sc no">○ 미달 ${noN}</span><span class="sc na">— 확인 필요 ${naN}</span></div>
  <div class="cn-hint">◀ 옆으로 넘겨 보세요 — 카드마다 "진료 때 물어볼 질문"이 있어요</div>
  <div class="cn-deck">${cards}</div>
  <div class="notice"><b>종합 점수는 없어요</b> · 지표마다 의미가 달라서 하나의 점수로 합치지 않아요. 해석과 다음 치료 결정은 담당 의료진과 함께 해요. 잘 조절되고 있다면 <a href="#/tools/adjust">주사를 줄여보는 길(KQ7)</a>, 효과가 부족하다면 <a href="#/tools/adjust">약을 바꾸는 길(KQ8)</a>을 미리 읽어 보세요.</div>`;
 }else{
 const mark=r=>r==='ok'?'<span class="result-ok">✓ 충족</span>':r==='no'?'<span class="result-no">✕ 미충족</span>':'<span class="result-na">— </span>';
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
 <div class="cta"><a href="#/tools/adjust"><div class="t">감량·교체 경로 도구 →</div><div class="s">잘 조절 중이라면 KQ7 · 반응이 불충분하다면 KQ8 — 반응평가 결과가 함께 전달됩니다</div></a></div>
 <div class="notice"><b>다음 단계 참고</b> · 6개월 이상 안정 조절 시 단계적 감량은 <a href="#/kq/7">KQ7</a>(조건부 권고 · 근거수준 매우 낮음), 적절한 치료 기간에도 반응 불충분 시 교체는 <a href="#/kq/8">KQ8</a>(조건부 권고 · 근거수준 매우 낮음)을 참조하십시오.</div>`;}
 $('#respOut').scrollIntoView({behavior:'smooth'});};

/* ---- 감량·교체 경로 ---- */
window.adjPathSel=p=>{PC.path=p;pcSave();$('#adjUI').innerHTML=adjUI()};
window.adjTick=id=>{PC.g[id]=!PC.g[id];pcSave();$('#adjUI').innerHTML=adjUI()};
function adjUI(){
 const pat=PC.mode==='pat';
 const respChip=PC.resp?`<span class="b b-ok">반응평가 결과 연동 — 충족 ${PC.resp.ok} · 미충족 ${PC.resp.no} · 미입력 ${PC.resp.na}</span>`:'';
 const gA=['ga1','ga2','ga3'],gB=['gb1','gb2'];
 const nA=gA.filter(i=>PC.g[i]).length,nB=gB.filter(i=>PC.g[i]).length;
 const AA=[['현재 생물학적 제제를 사용 중이다','ga1'],['<b>6개월 이상</b> 안정적으로 잘 조절되고 있다 (악화 없음 · 조절 유지)','ga2'],['감량의 예상 이득(치료 부담·비용 감소)과 잠재적 위험(악화 위험 소폭 증가)을 환자와 공유하고 공동 의사결정을 했다','ga3']];
 const BB=[['현재 약제로 <b>적절한 치료 기간</b>이 경과했다','gb1'],['임상적 반응이 불충분하다 — <a href="#/tools/response">치료 반응 평가</a> 결과를 참고','gb2']];
 const aOut=nA===3?`
 <div class="rec-quote"><div class="txt">${KQS[6].rec}</div></div>
 <div style="display:flex;gap:6px;flex-wrap:wrap">${grB('조건부 권고')} ${evB('매우 낮음')}</div>
 ${pat?`<div class="cn-hint">◀ 옆으로 넘겨 보세요</div><div class="cn-deck">
 <div class="cn-card info"><div class="cn-ico">🪜</div><div class="cn-k">어떻게 줄이나요</div><div class="cn-t">한 번에 끊지 않아요</div><div class="cn-easy">주사 간격을 조금씩 늘리는 <b>단계적 감량</b>이 원칙이에요. 예: 8주 → 12주 → 중단.</div></div>
 <div class="cn-card ok"><div class="cn-ico">🔍</div><div class="cn-k">지켜보기</div><div class="cn-t">몸 상태를 계속 확인해요</div><div class="cn-easy">증상·폐기능·호산구 수치를 정기적으로 확인하고, 나빠질 기미가 보이면 <b>바로 이전 단계로</b> 돌아가요.</div></div>
 <div class="cn-card na"><div class="cn-ico">⚖️</div><div class="cn-k">알아두세요</div><div class="cn-t">악화 위험이 조금 늘 수 있어요</div><div class="cn-easy">연구에서 감량한 환자의 41~68%는 1년간 악화 없이 잘 지냈지만, 유지한 경우보다 악화 위험은 다소 높았어요.</div><div class="cn-ask"><b>진료 때 물어보세요</b>"저는 줄여볼 수 있는 상태인가요? 나빠지면 어떻게 하나요?"</div></div></div>`
 :`
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
 <p class="small"><a href="#/kq/7">KQ7 전체 근거 보기 →</a></p>`}`
 :`<div class="notice">세 항목을 모두 확인하면 KQ7 권고와 실행 원칙이 표시됩니다.${PC.g.ga2?'':' <b>6개월 이상 안정 조절이 확인되지 않으면 감량 권고의 대상이 아닙니다</b> — <a href="#/tools/response">치료 반응 평가</a>를 먼저 참조하세요.'}</div>`;
 const bOut=nB===2?`
 <div class="rec-quote"><div class="txt">${KQS[7].rec}</div></div>
 <div style="display:flex;gap:6px;flex-wrap:wrap">${grB('조건부 권고')} ${evB('매우 낮음')}</div>
 ${pat?`<div class="cn-hint">◀ 옆으로 넘겨 보세요</div><div class="cn-deck">
 <div class="cn-card info"><div class="cn-ico">🔄</div><div class="cn-k">무슨 뜻인가요</div><div class="cn-t">다른 기전의 주사로 바꿔볼 수 있어요</div><div class="cn-easy">지금 약이 충분히 듣지 않으면, 염증을 잡는 <b>다른 방식의 생물학적제제</b>로 교체를 고려할 수 있다는 권고예요.</div></div>
 <div class="cn-card ok"><div class="cn-ico">🔬</div><div class="cn-k">바꾸기 전에</div><div class="cn-t">검사를 다시 확인해요</div><div class="cn-easy">호산구·FeNO·알레르기 검사를 다시 보고, <a href="#/tools/select">약제 선택 도구</a>로 후보를 미리 볼 수 있어요.</div></div>
 <div class="cn-card na"><div class="cn-ico">⚠️</div><div class="cn-k">알아두세요</div><div class="cn-t">근거는 아직 제한적이에요</div><div class="cn-easy">교체 연구는 모두 관찰연구라 확실성이 낮아요. 보험(급여) 기준 확인도 필요해요.</div><div class="cn-ask"><b>진료 때 물어보세요</b>"약을 바꾼다면 어떤 후보가 있고, 급여 기준은 어떻게 되나요?"</div></div></div>`
 :`
 <h4>근거 요점</h4>
 <ul class="small"><li>연간 천식 악화율 크게 감소 — RR 0.06 (95% CI 0.03–0.14)</li>
 <li>천식 조절도(ACT) MCID 상회 개선 — MD 8.57 (6.34–10.79)</li>
 <li>경구 스테로이드 용량·폐기능(FEV1)도 통계적으로 유의하게 개선되었으나 일부 지표는 MCID 경계 수준</li>
 <li>총 8편 비무작위 관찰연구(RCT 없음) — 근거수준 매우 낮음, 교체 후 결과가 과대평가되었을 가능성 배제 어려움</li></ul>
 <h4>실행 시 고려사항</h4>
 <ul class="small"><li>교체 대상 약제 선택은 표현형·생체표지자 재평가와 함께 <a href="#/tools/select">약제 선택 지원</a> 참조 — <b>입력했던 호산구·FeNO·알레르기 값이 그대로 전달됩니다</b></li>
 <li>전문의 재평가·폐기능·생체표지자(호산구·FeNO·IgE) 검사 등 진단 인프라 필요</li>
 <li>국내 급여 인정 범위가 제한적일 수 있어 사전 확인 필요</li></ul>
 <p class="small"><a href="#/kq/8">KQ8 전체 근거 보기 →</a></p>`}`
 :`<div class="notice">두 항목을 모두 확인하면 KQ8 권고가 표시됩니다.${PC.resp?` <b>치료 반응 평가 연동</b> — 충족 ${PC.resp.ok} · 미충족 ${PC.resp.no} (반응 불충분 여부의 판단은 의료진의 몫입니다).`:''}</div>`;
 return `<div class="pathsel">
  <button class="${PC.path!=='b'?'on':''}" onclick="adjPathSel('a')"><span class="p-k">경로 A · KQ7</span><div class="p-t">${pat?'주사를 줄여볼 수 있을까?':'감량·중단 검토'}</div><div class="p-s">${pat?'6개월 넘게 안정적으로 잘 지내고 있어요':'6개월 이상 안정적으로 잘 조절 중 — 단계적 감량을 고려할 수 있는가'}</div></button>
  <button class="${PC.path==='b'?'on':''}" onclick="adjPathSel('b')"><span class="p-k">경로 B · KQ8</span><div class="p-t">${pat?'약을 바꿔야 할까?':'교체·추가 검토'}</div><div class="p-s">${pat?'치료해도 효과가 충분하지 않아요':'적절한 치료 기간에도 반응 불충분 — 다른 제제로의 교체를 고려할 수 있는가'}</div></button>
 </div>
 ${respChip?`<p class="small" style="margin:0 0 12px">${respChip}</p>`:''}
 ${PC.path!=='b'?`
 <div class="stepcard"><div class="sc-h"><span class="sc-n">✓</span><span class="sc-t">전제 확인</span><span class="sc-b muted small">${nA} / 3</span></div>
 <div class="gatebar" aria-hidden="true"><i style="width:${nA/3*100}%"></i></div>
 ${AA.map(c=>`<label class="chk"><input type="checkbox" ${PC.g[c[1]]?'checked':''} onchange="adjTick('${c[1]}')"><span>${c[0]}</span></label>`).join('')}
 </div><div id="adjAOut">${aOut}</div>`
 :`
 <div class="stepcard"><div class="sc-h"><span class="sc-n">✓</span><span class="sc-t">전제 확인</span><span class="sc-b muted small">${nB} / 2</span></div>
 <div class="gatebar" aria-hidden="true"><i style="width:${nB/2*100}%"></i></div>
 ${BB.map(c=>`<label class="chk"><input type="checkbox" ${PC.g[c[1]]?'checked':''} onchange="adjTick('${c[1]}')"><span>${c[0]}</span></label>`).join('')}
 </div><div id="adjBOut">${bOut}</div>`}`}

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
