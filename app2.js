function fxChart(rows){
 const W=330,H=46,PL=40,PR=44,y=H/2;
 const body=rows.map(r=>{
  const hasM=r.mcid!=null;
  const mref=hasM?r.mcid:r.nul;
  const lo=Math.min(r.lo,r.nul,mref),hi=Math.max(r.hi,r.nul,mref);
  const pad=(hi-lo)*0.14||1,d0=lo-pad,d1=hi+pad;
  const x=v=>PL+((v-d0)/(d1-d0))*(W-PL-PR);
  const shadeCol=r.st==='harm'?'var(--red-bg)':'var(--green-soft)';
  let shade='';
  if(hasM){
   if(r.st==='harm'||r.st==='ns'&&r.nul===1&&rows.some(q=>q.st==='harm'))
        shade=`<rect x="${x(r.mcid)}" y="7" width="${Math.max(0,(W-PR)-x(r.mcid))}" height="${H-14}" fill="${r.st==='harm'?'var(--red-bg)':'var(--gray-bg)'}"/>`;
   else if(r.dir==='lower') shade=`<rect x="${PL}" y="7" width="${Math.max(0,x(r.mcid)-PL)}" height="${H-14}" fill="${shadeCol}"/>`;
   else shade=`<rect x="${x(r.mcid)}" y="7" width="${Math.max(0,(W-PR)-x(r.mcid))}" height="${H-14}" fill="${shadeCol}"/>`;
  }
  let fill='#fff',stroke='var(--mark)';
  if(r.st==='met'){fill='var(--mark)'}
  if(r.st==='harm'){fill='var(--red)';stroke='var(--red)'}
  if(r.st==='ns'){stroke='var(--ink3)'}
  const isHarmChart=rows.some(q=>q.st==='harm');
  const lLbl=isHarmChart?'':(r.dir==='lower'?'◂ 개선':'');
  const rLbl=isHarmChart?'위해 ▸':(r.dir==='higher'?'개선 ▸':'');
  const mLbl=hasM?(r.nul===1?`${r.el.split(' ')[0]} ${r.mcid}`:(r.mcid>0?`+${r.mcid}`:`${r.mcid}`)):'';
  return `<div class="fx-row">
   <div class="fx-lbl"><b>${r.o}</b><span>${hasM?`MCID ${mLbl} · ${r.dir==='lower'?'↓':'↑'}`:'MCID 미설정 · 단일 연구'}</span></div>
   <svg class="fx-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="${r.o} ${r.el}, 95% CI ${r.ci}">
    ${shade}
    <line x1="${x(r.nul)}" y1="4" x2="${x(r.nul)}" y2="${H-4}" stroke="var(--line2)" stroke-width="1.6"/>
    ${hasM?`<line x1="${x(r.mcid)}" y1="4" x2="${x(r.mcid)}" y2="${H-4}" stroke="var(--mcid)" stroke-width="2" stroke-dasharray="4 3"/>`:''}
    <line x1="${x(r.lo)}" y1="${y}" x2="${x(r.hi)}" y2="${y}" stroke="var(--ink2)" stroke-width="2"/>
    <line x1="${x(r.lo)}" y1="${y-4.5}" x2="${x(r.lo)}" y2="${y+4.5}" stroke="var(--ink2)" stroke-width="2"/>
    <line x1="${x(r.hi)}" y1="${y-4.5}" x2="${x(r.hi)}" y2="${y+4.5}" stroke="var(--ink2)" stroke-width="2"/>
    <circle cx="${x(r.est)}" cy="${y}" r="5.6" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
    ${lLbl?`<text x="2" y="${y+3.2}" class="fx-dir">${lLbl}</text>`:''}
    ${rLbl?`<text x="${W-2}" y="${y+3.2}" class="fx-dir" text-anchor="end">${rLbl}</text>`:''}
    <title>${r.o} — ${r.el} (95% CI ${r.ci})</title>
   </svg>
   <div class="fx-val"><b>${r.el}</b><span>(${r.ci})</span></div>
   <div class="fx-tag">${evB(r.ev)}<br>${mcidMark(r.st)}</div></div>`}).join('');
 return `<div class="fx">${FXLEG}${body}</div>`}
const fxTable=rows=>`<details class="fx-alt"><summary>표로 보기 (접근성 대체 뷰)</summary><div class="tw"><table><thead><tr><th>건강결과</th><th class="num">효과추정치</th><th class="num">95% CI</th><th>근거수준</th><th>판정</th></tr></thead><tbody>${rows.map(r=>`<tr><td><b>${r.o}</b></td><td class="num">${r.el}</td><td class="num muted">(${r.ci})</td><td>${evB(r.ev)}</td><td>${mcidMark(r.st)}</td></tr>`).join('')}</tbody></table></div></details>`;
function optBar(rows){
 const cols=['#b5b2a9','#8fbfa9','#4a9877','#1e5b46'];
 return `<div class="opt-leg">${rows.map((r,i)=>`<span><i style="background:${cols[i]}"></i>${r[0]} ${r[1].split(' ')[0]}</span>`).join('')}</div>
 <div class="opt-bar">${rows.map((r,i)=>{const p=parseInt(r[1]);return `<div style="width:${p}%;background:${cols[i]}" title="${r[0]} ${r[1]}">${p}%</div>`}).join('')}</div>`}
function pvBars(){
 const max=33.5;
 return `<div class="pv">${T72.map((r,i)=>{const v=parseFloat(r[1]);return `<div class="pv-row"><div class="pv-l"><b>${i+1}.</b> ${r[0]}</div><div class="pv-t"><div class="pv-f" style="width:${(v/max*100).toFixed(1)}%"></div></div><div class="pv-v"><b>${r[1].split(' ±')[0]}</b><span class="muted small"> ± ${r[1].split('± ')[1]}</span></div></div>`}).join('')}
 <div class="pv-foot">중증천식 환자 108명 · 총점 100점 배분 · 평균 ± 표준편차 (지침 문서 표7.2). 응답 편차가 커 환자 간 차이가 큽니다 — 고정 기준이 아닌 참고값입니다.</div></div>`}
function kqDetail(k,d){
 return `${crumb('Key Questions','KQ'+k.n)}
 <div class="muted" style="font-weight:700;letter-spacing:.1em">KEY QUESTION ${String(k.n).padStart(2,'0')}</div>
 <h1 class="page">${k.q}</h1><p class="page-en">${k.en||''}</p>
 <div class="anchor-nav"><a href="#p">PICOTS</a><a href="#rec">권고문</a><a href="#etd">EtD 판단</a><a href="#des">바라는 효과</a><a href="#und">바라지 않는 효과</a><a href="#oth">기타 고려사항</a>${k.n===7?'<a href="#opt">감량 단계·예측인자</a>':''}${k.n===4?'<a href="#sub">하위군 분석</a>':''}<a href="#cons">합의·공청회</a><a href="#apx">부록</a></div>
 <h2 class="sec" id="p">PICOTS · Eligibility Criteria</h2><h3 class="sect">핵심질문의 구성</h3>
 <div class="tw"><table><thead><tr><th style="width:90px">구분</th><th>포함기준</th></tr></thead><tbody>
 ${d.picots.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td></tr>`).join('')}</tbody></table></div>
 <p class="small muted">${d.studies}</p>
 <h2 class="sec" id="rec">Recommendation</h2><h3 class="sect">권고문</h3>
 <div class="rec-quote"><div class="txt">${k.rec}</div></div>
 <div class="badge-bar">
  <div class="cell"><div class="k">근거수준</div><div class="v">${k.ev} <span class="dots muted">${EVDOTS[k.ev]}</span></div></div>
  <div class="cell"><div class="k">권고방향</div><div class="v gr">한다</div></div>
  <div class="cell"><div class="k">권고강도</div><div class="v">조건부${k.cond?' <span class="small muted">'+k.cond+'</span>':''}</div></div>
 </div>
 <h2 class="sec" id="etd">Key Rationale · EtD</h2><h3 class="sect">권고문 도출 핵심내용 정리</h3>
 <p class="small">근거기반의사결정틀(Evidence to Decision, EtD)의 9개 영역을 종합하여 권고를 도출하였다. 영역별 최종 판단:</p>
 <div class="tw"><table><thead><tr><th>EtD 영역</th><th>최종 판단</th></tr></thead><tbody>
 ${d.etd.map(r=>`<tr><td>${r[0]}</td><td><b>${r[1]}</b></td></tr>`).join('')}</tbody></table></div>
 <p class="small">${d.rationale}</p>
 <h2 class="sec" id="des">Key Metrics · Desirable</h2><h3 class="sect">주요지표 · 바라는 효과</h3>
 <p class="small">${d.desNote}</p>
 ${fxChart(d.des)}
 <p class="small muted">각 결과는 자신의 이로운 방향으로 그려지며, 회색 실선은 null(무효과 지점) · 주황 점선은 MCID(임상적 최소 중요차이)를 나타냅니다. 일부 지표는 점추정치가 MCID를 초과하나 신뢰구간이 경계에 걸쳐 있습니다. Forest plot 원본은 분석표 PDF 참조.</p>
 ${fxTable(d.des)}
 <div class="callout-g"><b>위원회 판단</b> — ${d.judgeD}</div>
 <h2 class="sec" id="und">Key Metrics · Undesirable</h2><h3 class="sect">주요지표 · 바라지 않는 효과</h3>
 ${d.und&&d.und.length?fxChart(d.und)+fxTable(d.und):''}
 ${d.undText?`<p class="small">${d.undText}</p>`:''}
 ${k.n===7?`<div class="placeholder"><b>이상반응 정량 요약(SoF 행)</b> ${bN} — 원자료 준비 중. 연구별 서술은 위 본문 참조.</div>`:''}
 <div class="callout-g"><b>위원회 판단</b> — ${d.judgeU}</div>
 <h2 class="sec" id="oth">Other Considerations</h2><h3 class="sect">기타 고려사항</h3>
 ${d.other.map(o=>`<div class="card"><h4 style="margin-top:0;color:var(--green)">${o[0]}</h4><p class="small" style="margin-bottom:0">${o[1]}</p></div>`).join('')}
 ${k.n===4&&d.sub4?`
 <h2 class="sec" id="sub">Subgroup Analysis</h2><h3 class="sect">하위군 분석 결과 — 혈중 호산구 층별 <span class="b b-ok">2026-08 수정본 신설</span></h3>
 <p class="small">${d.sub4.note}</p>
 <div class="tw"><table><thead><tr><th style="width:170px">건강결과</th><th>호산구 층별 결과 요지</th></tr></thead><tbody>
 ${d.sub4.rows.map(r=>`<tr><td><b>${r[0]}</b></td><td class="small">${r[1]}</td></tr>`).join('')}</tbody></table></div>
 <h4>포함 6개 RCT의 호산구 관련 등록기준</h4>
 <div class="tw"><table><thead><tr><th style="width:200px">연구</th><th>호산구 관련 등록기준</th></tr></thead><tbody>
 ${d.sub4.crit.map(r=>`<tr><td><b>${r[0]}</b></td><td class="small">${r[1]}</td></tr>`).join('')}</tbody></table></div>
 <div class="callout-g"><b>위원회 판단</b> — ${d.sub4.judge}</div>`:''}
 ${k.n===7?`
 <h2 class="sec" id="opt">Tapering Detail</h2><h3 class="sect">OPTIMAL 단계적 감량 결과 · 악화 예측인자</h3>
 ${optBar(d.optimal)}
 <div class="tw"><table><thead><tr><th>감량 단계</th><th class="num">비율 (n)</th><th>투여 간격 (예시)</th></tr></thead><tbody>
 ${d.optimal.map(r=>`<tr><td><b>${r[0]}</b></td><td class="num">${r[1]}</td><td class="small">${r[2]}</td></tr>`).join('')}</tbody></table></div>
 <p class="small muted">${d.optimalNote}</p>
 <h4>감량·중단 후 악화 예측인자 (탐색적)</h4>
 <ul class="small">${d.predictors.map(x=>`<li>${x}</li>`).join('')}</ul>
 <div class="notice"><b>주의</b> · ${d.predNote}</div>`:''}
 <h2 class="sec" id="cons">Consensus &amp; Public Hearing</h2><h3 class="sect">개발위원 합의 및 공청회 의견수렴</h3>
 <p class="small">${d.cons.dir}<br>${d.cons.str}</p>
 ${statCards([['공청회 · 권고방향 동의',d.cons.phd,'참석자 '+d.cons.ph+'명 투표'],['공청회 · 권고등급 동의',d.cons.phg,''],['개발위원',d.cons.dev+'명','투표 참여']])}
 <p class="small">제기된 의견은 검토를 거쳐 최종 권고에 반영하였다.</p>
 <h2 class="sec" id="apx">References · Appendix</h2><h3 class="sect">참고문헌 · 부록</h3>
 <p class="small">${d.refs}</p>
 <div class="card"><h4 style="margin-top:0">부록 요약</h4>
 <ul class="small" style="margin-bottom:0">
  <li><b>비뚤림 위험(RoB 2)</b> — ${d.rob}</li>
  <li><b>근거의 확신도(GRADE) 상세</b> — ${d.gradeNote}</li>
  <li><b>개발위원 투표 상세 · 공청회 투표 상세</b> — ${bH} 공개 범위 정책(최종 회의) 결정 후 게시 여부 반영.</li>
 </ul></div>
 <div class="cta"><a href="#/tools/response"><div class="t">이 환자의 치료 반응 평가하기 →</div><div class="s">MCID 기준 지표별 충족 판정</div></a>
 ${(k.n===7||k.n===8)?'<a href="#/tools/adjust"><div class="t">감량·교체 경로 도구 →</div><div class="s">전제 확인 · 실행 원칙 안내</div></a>':'<a href="#/kq"><div class="t">권고안 요약으로 →</div><div class="s">8개 권고 한눈에</div></a>'}</div>
 ${k.type==='drug'?indirect:''}${disclaimer}${pfoot}`}
KQS.forEach(k=>{P['kq/'+k.n]=()=> KQD[k.n]?kqDetail(k,KQD[k.n]):kqStub(k)});

/* ---- Decision Support ---- */
P['tools/select']=()=>`${crumb('Decision Support','약제 선택 지원')}
 <h1 class="page">약제 선택 지원</h1>
 <p class="page-en">Biologic Candidate Finder — stepwise algorithm &amp; 허가 적응 매핑</p>
 ${modeSeg()}
 <div id="pcxBar">${pcxBar()}</div>
 ${PC.mode==='pat'?`
 <div class="tool-lede"><div class="ic">🧭</div><div><div class="tl-t">몇 가지 질문으로, 선생님과 상의해볼 치료 후보를 알아봅니다</div>
 <div class="tl-s">검사 수치를 모르셔도 괜찮아요 — "모르겠어요"를 고르면 <b>다음 진료 때 확인할 것</b>을 알려드립니다. 이 도구는 참고용이며, 치료 결정은 반드시 담당 의료진과 상의하세요.</div></div></div>`
 :`
 <div class="tool-lede"><div class="ic">☰</div><div><div class="tl-t">알고리듬 경로 + 허가 적응 후보를 함께 안내</div>
 <div class="tl-s">입력한 조건이 <b>단계별 약제 선택 알고리듬</b>의 어느 분기에 해당하는지 경로로 표시하고, 해당 경로의 <b>기전(계열)·후보 약제·권고안</b>을 함께 제시합니다. 입력 즉시 결과가 갱신됩니다. 후보 제시는 우열이 아니며(KQ1–6은 위약 대비 간접비교), 급여 기준은 별도 확인이 필요합니다.</div></div></div>`}
 <div id="selUI">${selUI()}</div>
 ${indirect}${disclaimer}${pfoot}`;

P['tools/response']=()=>`${crumb('Decision Support','치료 반응 평가')}
 <h1 class="page">치료 반응 평가</h1>
 <p class="page-en">Per-indicator MCID Assessment — no composite score</p>
 ${modeSeg()}
 <div id="pcxBar">${pcxBar()}</div>
 ${PC.mode==='pat'?`
 <div class="tool-lede"><div class="ic">✓</div><div><div class="tl-t">치료 전후 변화를 지표별로 확인해 봅니다</div>
 <div class="tl-s">전문가들이 합의한 <b>"의미 있는 변화 기준(MCID)"</b>에 도달했는지 지표마다 따로 보여드립니다. 종합 점수는 없어요 — 결과 카드를 넘겨 보며 <b>진료 때 상의할 내용</b>을 준비해 보세요.</div></div></div>`
 :`
 <div class="tool-lede"><div class="ic">✓</div><div><div class="tl-t">MCID 기준 · 지표별 충족 여부만 표시</div>
 <div class="tl-s">전문가 델파이로 합의된 <a href="#/method/mcid">MCID(최소 임상적 중요 차이)</a> 기준으로 <b>지표별 충족 여부만</b> 표시합니다. 종합 판정(반응/무반응 등급)은 제공하지 않으며, 해석과 결정은 담당 의료진의 몫입니다. 값을 입력하지 않은 지표는 "미입력"으로 표시됩니다. <b>평가 주기(정본 Table II-0-2)</b> — 치료 시작 후 <b>4개월</b>에 초기 반응을 평가하고, 반응이 있으면 <b>6–12개월</b> 간격으로 재평가합니다(알고리듬 Figure II-9: 3–6개월마다 반응 평가).</div></div></div>`}
 <div class="stepcard"><div class="sc-h"><span class="sc-n">1</span><span class="sc-t">천식 악화</span><span class="sc-b"><span class="b b-ev">핵심적</span></span></div>
 ${ph('증상이 심해져서 <b>먹는 스테로이드 치료·응급실 방문·입원</b>이 필요했던 횟수예요. 치료 시작 전 1년과 치료 후 1년을 비교합니다.')}
 <div class="inrow">
  <div class="field"><label>치료 전 12개월 악화 횟수</label><input type="number" id="exPre" min="0" step="1" value="${rv('exPre')}"></div>
  <div class="field"><label>치료 후 12개월 악화 횟수</label><input type="number" id="exPost" min="0" step="1" value="${rv('exPost')}"></div>
 </div></div>
 <div class="stepcard"><div class="sc-h"><span class="sc-n">2</span><span class="sc-t">경구 스테로이드(OCS)</span><span class="sc-b"><span class="b b-ev">핵심적</span></span></div>
 ${ph('먹는 스테로이드(프레드니솔론 등)를 얼마나 줄였는지 봅니다. 정확한 용량은 처방전이나 담당 선생님께 확인할 수 있어요. 모르면 비워 두세요.')}
 <div class="inrow">
  <div class="field"><label>치료 전 12개월 누적 용량 <span class="hint">(prednisone equivalent, mg)</span></label><input type="number" id="ocsPre" min="0" value="${rv('ocsPre')}"></div>
  <div class="field"><label>치료 후 12개월 누적 용량 <span class="hint">(mg)</span></label><input type="number" id="ocsPost" min="0" value="${rv('ocsPost')}"></div>
  <div class="field"><label>현재 유지용량 <span class="hint">(mg/day)</span></label><input type="number" id="ocsMaint" min="0" step="0.5" value="${rv('ocsMaint')}"></div>
 </div></div>
 <div class="stepcard"><div class="sc-h"><span class="sc-n">3</span><span class="sc-t">천식 조절도 · 삶의 질</span><span class="sc-b"><span class="b b-hold" style="border-color:var(--line2)">중요한</span></span></div>
 ${ph('진료 때 작성했던 설문 점수예요 — ACT(천식조절검사, 높을수록 좋음) · ACQ(낮을수록 좋음) · AQLQ(삶의 질, 높을수록 좋음). 아는 것만 넣으세요.')}
 <div class="inrow">
  <div class="field"><label>ACT <span class="hint">전 → 후</span></label><input type="number" id="actPre" min="5" max="25" value="${rv('actPre')}"> → <input type="number" id="actPost" min="5" max="25" value="${rv('actPost')}"></div>
  <div class="field"><label>ACQ <span class="hint">전 → 후</span></label><input type="number" id="acqPre" min="0" max="6" step="0.1" value="${rv('acqPre')}"> → <input type="number" id="acqPost" min="0" max="6" step="0.1" value="${rv('acqPost')}"></div>
  <div class="field"><label>AQLQ <span class="hint">전 → 후</span></label><input type="number" id="aqPre" min="1" max="7" step="0.1" value="${rv('aqPre')}"> → <input type="number" id="aqPost" min="1" max="7" step="0.1" value="${rv('aqPost')}"></div>
 </div></div>
 <div class="stepcard"><div class="sc-h"><span class="sc-n">4</span><span class="sc-t">폐기능 (pre-BD FEV1)</span><span class="sc-b"><span class="b b-hold" style="border-color:var(--line2)">중요한</span></span></div>
 ${ph('숨을 세게 내쉬는 폐기능 검사 수치예요. 검사 결과지의 FEV1 값을 넣으면 됩니다(기관지확장제 흡입 전 값).')}
 <div style="margin-bottom:10px"><span class="seg"><button class="on" id="fevPct" onclick="fevUnit('pct')">% (예측치)</button><button id="fevL" onclick="fevUnit('L')">L</button></span></div>
 <div class="inrow">
  <div class="field"><label>치료 전 <span class="hint" id="fevU1">(%)</span></label><input type="number" id="fevPre" step="0.01" value="${rv('fevPre')}"></div>
  <div class="field"><label>치료 후 <span class="hint" id="fevU2">(%)</span></label><input type="number" id="fevPost" step="0.01" value="${rv('fevPost')}"></div>
 </div>
 <label class="chk"><input type="checkbox" id="fevSame"><span>두 측정 모두 <b>기관지확장제 투여 전(pre-BD)</b> 동일 조건에서 측정되었음을 확인합니다 <span class="muted small">(미확인 시 폐기능 판정 보류)</span></span></label></div>
 <p style="margin-top:16px"><button class="btn" onclick="runResp()">지표별 충족 여부 확인</button></p>
 <div id="respOut"></div>
 ${PC.mode==='pat'?'':`<h3 class="sect">이상반응 참고 기준 (판정 아님)</h3>
 <div class="tw"><table><thead><tr><th>항목</th><th>합의 내용</th><th>합의율</th></tr></thead><tbody>
 ${AERULES.map(r=>`<tr><td><b>${r[0]}</b></td><td class="small">${r[1]}</td><td>${r[3]==='ok'?'<span class="b b-ok">'+r[2]+'</span>':'<span class="b b-warn2">'+r[2]+'</span>'}</td></tr>`).join('')}</tbody></table></div>
 <div class="notice"><b>FEV1(%) 기준 확인 중</b> · "기저치 대비 ≥10% 증가(절대값)"의 계산 정의(퍼센트포인트 절대 증가 vs 상대 10%)는 위원회 확인 후 확정됩니다. 본 프로토타입은 변화량(후−전) ≥ 10을 사용합니다.</div>`}
 ${disclaimer}${pfoot}`;

P['tools/adjust']=()=>`${crumb('Decision Support','감량·교체 경로')}
 <h1 class="page">감량·교체 경로</h1>
 <p class="page-en">Tapering (KQ7) &amp; Switching (KQ8) Pathways</p>
 ${modeSeg()}
 <div id="pcxBar">${pcxBar()}</div>
 ${PC.mode==='pat'?`
 <div class="tool-lede"><div class="ic">⇄</div><div><div class="tl-t">주사를 줄여볼 수 있을까? 바꿔야 할까?</div>
 <div class="tl-s">치료가 <b>잘 되고 있다면 천천히 줄여보는 길(KQ7)</b>, <b>효과가 부족하다면 다른 약으로 바꾸는 길(KQ8)</b>이 있어요. 어느 쪽이든 혼자 결정하지 말고, 아래 내용을 읽고 담당 선생님과 상의해 보세요.</div></div></div>`
 :`
 <div class="tool-lede"><div class="ic">⇄</div><div><div class="tl-t">두 권고의 적용 전제와 실행 원칙 안내</div>
 <div class="tl-s">잘 조절되는 환자의 <b>단계적 감량(KQ7)</b>과 반응이 불충분한 환자의 <b>교체·추가(KQ8)</b> — 정보 제공형 도구이며 판정은 하지 않습니다. 상황에 맞는 경로를 선택하세요.</div></div></div>`}
 <div id="adjUI">${adjUI()}</div>
 ${disclaimer}${pfoot}`;
