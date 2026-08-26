/* ---- 단계별 약제 선택 알고리듬 (현행 Prediction 페이지 재현) ---- */
const ANODES=[
 {id:'start',x:585,y:16,w:150,h:46,l:'중증 천식?',k:'s'},
 {id:'ocs',x:585,y:120,w:150,h:46,l:'OCS 의존?',k:'d'},
 {id:'eo',x:280,y:240,w:160,h:46,l:'혈중 호산구',k:'d'},
 {id:'ocs-eo',x:860,y:240,w:160,h:46,l:'호산구 증가?',k:'d'},
 {id:'feno',x:30,y:370,w:140,h:46,l:'FeNO',k:'d'},
 {id:'r-all',x:200,y:348,w:250,h:80,l:'Anti-IL4Rα · Anti-IL5\nAnti-IL5R · Anti-TSLP\nAnti-IgE',k:'r'},
 {id:'rule-out',x:490,y:370,w:160,h:46,l:'과호산구 배제',k:'d'},
 {id:'r-ocs-high',x:690,y:348,w:250,h:80,l:'Anti-IL4Rα · Anti-IL5\nAnti-IL5R\n(+ tapering)',k:'r'},
 {id:'r-ocs-low',x:980,y:356,w:210,h:64,l:'Anti-IL4Rα\n(+ tapering)',k:'r'},
 {id:'allergy-low',x:30,y:510,w:140,h:46,l:'알레르기?',k:'d'},
 {id:'allergy-high',x:470,y:510,w:140,h:46,l:'알레르기?',k:'d'},
 {id:'r-il5',x:720,y:510,w:220,h:46,l:'Anti-IL5 · Anti-IL5R',k:'r'},
 {id:'r-tslp',x:16,y:640,w:150,h:66,l:'Anti-TSLP',k:'r'},
 {id:'r-ige-tslp',x:200,y:640,w:210,h:66,l:'Anti-IgE\nAnti-TSLP',k:'r'},
 {id:'r-il4-tslp',x:450,y:640,w:220,h:66,l:'Anti-IL4Rα\nAnti-TSLP',k:'r'},
 {id:'r-ige-il4-tslp',x:720,y:640,w:280,h:66,l:'Anti-IgE · Anti-IL4Rα\nAnti-TSLP',k:'r'}];
const ANMAP=Object.fromEntries(ANODES.map(n=>[n.id,n]));
const ABOT=new Set(['r-tslp','r-ige-tslp','r-il4-tslp','r-ige-il4-tslp']);
const AEDGES=[
 {id:'e-start-ocs',f:'start',t:'ocs',l:'Yes',dx:22,dy:0},
 {id:'e-ocs-yes',f:'ocs',t:'ocs-eo',l:'Yes',dx:0,dy:-14},
 {id:'e-ocs-no',f:'ocs',t:'eo',l:'No',dx:0,dy:-14},
 {id:'e-ocs-eo-yes',f:'ocs-eo',t:'r-ocs-high',l:'Yes',dx:22,dy:0},
 {id:'e-ocs-eo-no',f:'ocs-eo',t:'r-ocs-low',l:'No',dx:0,dy:-14},
 {id:'e-eo-mid',f:'eo',t:'r-all',l:'150–1500',dx:42,dy:0},
 {id:'e-eo-high',f:'eo',t:'rule-out',l:'&gt;1500',dx:0,dy:-14},
 {id:'e-eo-low',f:'eo',t:'feno',l:'&lt;150',dx:0,dy:-14},
 {id:'e-rule-out',f:'rule-out',t:'r-il5',l:'배제',dx:22,dy:0},
 {id:'e-feno-low',f:'feno',t:'allergy-low',l:'&lt;25',dx:-20,dy:0},
 {id:'e-feno-high',f:'feno',t:'allergy-high',l:'≥25',dx:22,dy:0},
 {id:'e-allergy-low-no',f:'allergy-low',t:'r-tslp',l:'No',dx:-22,dy:0},
 {id:'e-allergy-low-yes',f:'allergy-low',t:'r-ige-tslp',l:'Yes',dx:0,dy:-16},
 {id:'e-allergy-high-no',f:'allergy-high',t:'r-il4-tslp',l:'No',dx:-22,dy:0},
 {id:'e-allergy-high-yes',f:'allergy-high',t:'r-ige-il4-tslp',l:'Yes',dx:0,dy:-16}];
/* 활성 경로 산출 + 매핑 행 + 다음 필요 검사 (사이트 로직과 동일 분기) */
function algoActive(){
 const OCSV=PC.ocs==="unk"?null:PC.ocs,EOSV=PC.eos==="unk"?null:PC.eos,FENV=PC.feno==="unk"?null:PC.feno,ALGV=PC.allergy==="unk"?null:PC.allergy,ROV=PC.ruledOut==="unk"?null:PC.ruledOut;
 const N=new Set(['start']),E=new Set(),M=[];let need=null,res=null;
 const row=(sel,node,br)=>M.push({sel,node,br});
 if(!pcSevere()){need='중증천식 확인 4항목 (Step 1)';return{N,E,M,need,res}}
 row('중증천식 확인 완료','중증 천식?','Yes');E.add('e-start-ocs');N.add('ocs');
 if(!OCSV){need='OCS 의존 여부';return{N,E,M,need,res}}
 if(OCSV==='yes'){
  row('OCS 의존','OCS 의존?','Yes');E.add('e-ocs-yes');N.add('ocs-eo');
  if(!EOSV){need='혈중 호산구 수치';return{N,E,M,need,res}}
  if(EOSV==='lt150'){row(VF.eos[EOSV],'호산구 증가?','No');E.add('e-ocs-eo-no');N.add('r-ocs-low');res='r-ocs-low'}
  else{row(VF.eos[EOSV],'호산구 증가?','Yes');E.add('e-ocs-eo-yes');N.add('r-ocs-high');res='r-ocs-high'}
  return{N,E,M,need,res}}
 row('OCS 비의존','OCS 의존?','No');E.add('e-ocs-no');N.add('eo');
 if(!EOSV){need='혈중 호산구 수치';return{N,E,M,need,res}}
 if(EOSV==='mid'){row(VF.eos.mid,'혈중 호산구','150–1500');E.add('e-eo-mid');N.add('r-all');res='r-all';return{N,E,M,need,res}}
 if(EOSV==='gt1500'){row(VF.eos.gt1500,'혈중 호산구','&gt;1500');E.add('e-eo-high');N.add('rule-out');
  if(ROV==='yes'){row('과호산구 질환 배제','과호산구 배제','확인');E.add('e-rule-out');N.add('r-il5');res='r-il5'}
  else need='과호산구증가증 감별(HES·EGPA 등) 확인';
  return{N,E,M,need,res}}
 row(VF.eos.lt150,'혈중 호산구','&lt;150');E.add('e-eo-low');N.add('feno');
 if(!FENV){need='FeNO(호기산화질소) 검사';return{N,E,M,need,res}}
 const alow=FENV==='lt25';
 row(VF.feno[FENV],'FeNO',alow?'&lt;25':'≥25');E.add(alow?'e-feno-low':'e-feno-high');N.add(alow?'allergy-low':'allergy-high');
 if(!ALGV){need='알레르기 감작 평가 (피부반응·특이 IgE)';return{N,E,M,need,res}}
 if(alow){if(ALGV==='yes'){row('알레르기성','알레르기?','Yes');E.add('e-allergy-low-yes');N.add('r-ige-tslp');res='r-ige-tslp'}else{row('비알레르기성','알레르기?','No');E.add('e-allergy-low-no');N.add('r-tslp');res='r-tslp'}}
 else{if(ALGV==='yes'){row('알레르기성','알레르기?','Yes');E.add('e-allergy-high-yes');N.add('r-ige-il4-tslp');res='r-ige-il4-tslp'}else{row('비알레르기성','알레르기?','No');E.add('e-allergy-high-no');N.add('r-il4-tslp');res='r-il4-tslp'}}
 return{N,E,M,need,res}}
function algoSVG(A){
 const box=n=>{const lines=n.l.split('\n'),ml=Math.max(...lines.map(t=>t.length));
  const fs=ml>=24?12:ml>=18?13:14,lh=fs+3,hh=Math.max(n.h,lines.length*lh+12),ww=Math.max(n.w,ml*fs*.6+30);
  const xx=n.x+n.w/2-ww/2,yy=ABOT.has(n.id)?706-hh:n.y+n.h/2-hh/2;return{xx,yy,ww,hh,lines,fs,lh}};
 const ctr=n=>({x:n.x+n.w/2,y:n.y+n.h/2});
 const path=e=>{const a=ANMAP[e.f],b=ANMAP[e.t],p1=ctr(a),p2=ctr(b);
  const x1=p1.x,y1=a.y+a.h,x2=p2.x,y2=b.y;
  if(Math.abs(x1-x2)<14)return `M${x1},${y1} L${x2},${y2}`;
  const my=y1+(y2-y1)*.42,d=x2>=x1?1:-1,r=Math.min(16,Math.abs(x2-x1)/2,Math.abs(my-y1)/2,Math.abs(y2-my)/2);
  return `M${x1},${y1} L${x1},${my-r} Q${x1},${my} ${x1+d*r},${my} L${x2-d*r},${my} Q${x2},${my} ${x2},${my+r} L${x2},${y2}`};
 const eSort=[...AEDGES].sort((a,b)=>Number(A.E.has(a.id))-Number(A.E.has(b.id)));
 const nSort=[...ANODES].sort((a,b)=>Number(A.N.has(a.id))-Number(A.N.has(b.id)));
 const edges=eSort.map(e=>{const on=A.E.has(e.id);
  return `<path d="${path(e)}" fill="none" stroke="${on?'#21835f':'#cfccc2'}" stroke-width="${on?2.6:1.2}" stroke-linecap="round" opacity="${on?1:.55}" marker-end="url(#${on?'aw2':'aw1'})"/>`}).join('');
 const labels=eSort.map(e=>{if(!e.l)return '';const a=ANMAP[e.f],b=ANMAP[e.t],p1=ctr(a),p2=ctr(b);const on=A.E.has(e.id);
  const lx=(p1.x+p2.x)/2+(e.dx||0),ly=(a.y+a.h+b.y)/2+(e.dy||0);
  return `<text x="${lx}" y="${ly+4}" text-anchor="middle" font-size="13" font-weight="${on?700:600}" fill="${on?'#1e5b46':'#8d8a80'}">${e.l}</text>`}).join('');
 const nodes=nSort.map(n=>{const on=A.N.has(n.id),b=box(n),rx=n.k==='r'?9:18;
  const fill=on?(n.k==='r'?'#dcefe5':'#e9f1ed'):'#fbfaf7',stroke=on?'#21835f':'#cfccc2',tc=on?'#1e5b46':'#8d8a80';
  return `<rect x="${b.xx}" y="${b.yy}" width="${b.ww}" height="${b.hh}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${on?2.4:1.2}"/>`+
   b.lines.map((t,i)=>`<text x="${b.xx+b.ww/2}" y="${b.yy+b.hh/2+(i-(b.lines.length-1)/2)*b.lh+b.fs*.35}" text-anchor="middle" font-size="${b.fs}" font-weight="${on?700:500}" fill="${tc}">${t}</text>`).join('')}).join('');
 return `<svg viewBox="-40 0 1280 724" role="img" aria-label="중증 천식 생물학적제제 선택 알고리듬 — 선택 경로 표시">
 <defs><marker id="aw1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#cfccc2"/></marker>
 <marker id="aw2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#21835f"/></marker></defs>
 ${edges}${nodes}${labels}</svg>`}
function algoPanel(A){
 return `<div class="algo"><div class="algo-h"><b>단계별 알고리듬 &amp; 선택 경로</b>
 <span class="algo-leg"><span><i style="background:#21835f"></i>선택 경로</span><span><i style="background:#cfccc2"></i>기타 경로</span></span></div>
 <div class="algo-frame">${algoSVG(A)}</div>
 ${A.M.length?`<div class="algo-map">${A.M.map(m=>`<div class="row"><span class="sel">${m.sel}</span><span class="arr">→</span><span class="node">${m.node}</span><span class="br">분기: <b>${m.br}</b></span></div>`).join('')}</div>`:''}
 ${A.need?`<div class="algo-next"><b>다음 분기에 필요한 확인</b> — ${A.need}</div>`:''}
 <p class="small muted" style="padding:0 18px 14px;margin:0">현행 pacen.myadr.care <b>Prediction(단계별 약제 선택 알고리듬)</b>과 동일한 분기 구조의 재현입니다. 알고리듬은 <b>기전(계열) 수준</b>의 안내이며, 약제별 권고문·근거(KQ1–6)와 함께 해석합니다. 알고리듬 정본 그림(PDF)의 페이지 참조 표기는 정본 확인 후 추가 예정.</p></div>`}
/* 기전 → 약제 매핑 */
const MECH={'Anti-IgE':{kqs:[1],hint:'알레르기 항체(IgE) 차단'},'Anti-IL5':{kqs:[2,3],hint:'호산구 신호(IL-5) 차단'},'Anti-IL5R':{kqs:[4],hint:'IL-5 수용체 차단 — 호산구 고갈'},'Anti-IL4Rα':{kqs:[5],hint:'제2형 염증 신호(IL-4/13) 차단'},'Anti-TSLP':{kqs:[6],hint:'상피 사이토카인(TSLP) 차단'}};
const RESMECH={'r-all':['Anti-IL4Rα','Anti-IL5','Anti-IL5R','Anti-TSLP','Anti-IgE'],'r-ocs-high':['Anti-IL4Rα','Anti-IL5','Anti-IL5R'],'r-ocs-low':['Anti-IL4Rα'],'r-il5':['Anti-IL5','Anti-IL5R'],'r-tslp':['Anti-TSLP'],'r-ige-tslp':['Anti-IgE','Anti-TSLP'],'r-il4-tslp':['Anti-IL4Rα','Anti-TSLP'],'r-ige-il4-tslp':['Anti-IgE','Anti-IL4Rα','Anti-TSLP']};
const RESNOTE={'r-all':'호산구 150–1500 구간 — 다섯 계열 모두 후보입니다. 바이오마커·동반 질환·접근성을 기반으로 선택하세요.','r-ocs-high':'OCS 의존 + 호산구 증가 — OCS 감량(tapering)을 함께 고려하세요.','r-ocs-low':'OCS 의존 + 호산구 비증가 — OCS 감량(tapering)을 함께 고려하세요.','r-il5':'호산구 &gt;1500 — 과호산구 질환 배제 확인 후 Anti-IL5 · Anti-IL5R 경로입니다.','r-tslp':'호산구·FeNO 낮음 + 비알레르기성 — Anti-TSLP 경로입니다.','r-ige-tslp':'호산구·FeNO 낮음 + 알레르기성 — Anti-IgE · Anti-TSLP 경로입니다.','r-il4-tslp':'호산구 낮음 + FeNO 상승 + 비알레르기성 — Anti-IL4Rα · Anti-TSLP 경로입니다.','r-ige-il4-tslp':'호산구 낮음 + FeNO 상승 + 알레르기성 — Anti-IgE · Anti-IL4Rα · Anti-TSLP 경로입니다.'};
function drugsFor(res){const seen=new Set(),out=[];(RESMECH[res]||[]).forEach(m=>MECH[m].kqs.forEach(q=>{const d=DRUGS[q-1];if(!seen.has(d.name)){seen.add(d.name);out.push({d,m})}}));return out}
function drugCards(res){
 return `<h3 class="sect" style="margin-top:22px">이 경로의 후보 약제 ${drugsFor(res).length}종 — 권고안 연결</h3>
 <div class="grid2">${drugsFor(res).map(({d,m})=>{const k=KQS[d.kq-1];return `<div class="card"><div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:4px"><span class="b b-ok">${m}</span><span class="muted small" style="font-weight:700">${d.target}</span></div><h4 style="margin:3px 0 6px;font-size:16px" class="serif">${d.name}</h4><p class="small">${d.who}</p><div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">${grB(k.grade,k.cond)} ${evB(k.ev)}</div><a class="small" href="#/kq/${d.kq}">권고안·근거 보기 (KQ${d.kq}) →</a></div>`}).join('')}</div>
 <div class="notice"><b>해석 주의</b> · 후보 순서는 우선순위가 아닙니다(KQ1–6은 위약 대비 간접비교). 최종 선택은 급여 기준·동반질환·환자 선호를 포함해 담당 의료진과 결정합니다.</div>`}
/* ---- 약제 선택: 의료진 입력 + 환자 위저드 공용 렌더 ---- */
window.selAns=(k,v)=>{PC[k]=(PC[k]===v?null:v);if(k==='eos'&&PC.eos!=='gt1500')PC.ruledOut=null;pcSave();const el=$('#selUI');if(el)el.innerHTML=selUI();const b=$('#pcxBar');if(b)b.innerHTML=pcxBar()};
window.s1Tick=i=>{PC.s1[i]=!PC.s1[i];pcSave();const el=$('#selUI');if(el)el.innerHTML=selUI();const b=$('#pcxBar');if(b)b.innerHTML=pcxBar()};
window.wizBack=()=>{const o=['allergy','feno','ruledOut','eos','ocs'];for(const k of o){if(PC[k]!=null){PC[k]=null;break}}pcSave();const el=$('#selUI');if(el)el.innerHTML=selUI()};
const ob=(k,v,t,sub)=>`<button class="optbtn ${PC[k]===v?'on':''} ${v==null?'unk':''}" onclick="selAns('${k}','${v}')">${t}</button>`;
function selUI(){return PC.mode==='pat'?selWiz():selDoc()}
function selDoc(){
 const A=algoActive();
 const S1=[['천식 진단 재확인','객관적 검사로 천식 진단이 확인되었는가'],['흡입기 사용법·순응도 점검','흡입제 사용 기술과 치료 순응도가 적절한가'],['생체표지자 평가','알레르기 감작 · FeNO · 혈중 호산구를 평가하였는가'],['동반질환·악화 요인 확인','조절 불량과 연관된 동반질환·위험 요인을 확인하였는가']];
 return `<div class="stepcard"><div class="sc-h"><span class="sc-n">1</span><span class="sc-t">중증천식 확인</span><span class="sc-b muted small">${PC.s1.filter(Boolean).length} / 4</span></div>
 <p class="small muted" style="margin-top:0">생물학적제제 고려 전, 아래 4가지를 먼저 확인합니다 — 알고리듬의 시작 조건("중증 천식?")입니다.</p>
 ${S1.map((c,i)=>`<label class="chk"><input type="checkbox" ${PC.s1[i]?'checked':''} onchange="s1Tick(${i})"><span><b>${c[0]}</b><br><span class="muted small">${c[1]}</span></span></label>`).join('')}
 </div>
 <div class="stepcard"><div class="sc-h"><span class="sc-n">2</span><span class="sc-t">알고리듬 조건 입력</span><span class="sc-b muted small">입력 즉시 경로 갱신</span></div>
 <div class="inpgrp"><div class="lbl">경구 스테로이드(OCS) 의존 <span class="why">— 알고리듬 첫 분기</span></div><div class="optrow">${ob('ocs','yes','예 (의존)')}${ob('ocs','no','아니오')}</div></div>
 <div class="inpgrp"><div class="lbl">혈중 호산구 (cells/µL) <span class="why">— 두 번째 분기</span></div><div class="optrow">${ob('eos','lt150','&lt; 150')}${ob('eos','mid','150 – 1500')}${ob('eos','gt1500','> 1500')}</div></div>
 ${PC.eos==='gt1500'&&PC.ocs==='no'?`<div class="inpgrp"><div class="lbl">기타 과호산구 질환 배제 <span class="why">— HES·EGPA 등 감별</span></div><div class="optrow">${ob('ruledOut','yes','배제 확인')}</div></div>`:''}
 <div class="inpgrp"><div class="lbl">FeNO (ppb) <span class="why">— 호산구 <150 경로에서 사용</span></div><div class="optrow">${ob('feno','lt25','&lt; 25')}${ob('feno','ge25','≥ 25')}</div></div>
 <div class="inpgrp"><div class="lbl">알레르기성 천식 <span class="why">— 통년성 항원 감작 (± 총 IgE 상승)</span></div><div class="optrow">${ob('allergy','yes','예')}${ob('allergy','no','아니오')}</div></div>
 </div>
 ${algoPanel(A)}
 ${A.res?`<div class="callout-g"><b>경로 결과</b> — ${RESNOTE[A.res]}</div>${drugCards(A.res)}`:''}`}
/* 환자 위저드 */
function selWiz(){
 const done=v=>v!=null;
 const qs=[];
 if(!pcSevere())qs.push({k:'s1',q:'병원에서 "중증 천식"으로 확인받으셨나요?',s:'중증 천식이 맞는지, 흡입기 사용법·동반 질환까지 함께 확인된 상태에서 시작해요.',opts:[['yes','예, 확인받았어요','아래 네 가지가 확인된 경우예요'],['no','아직 확실하지 않아요','담당 선생님과 먼저 확인이 필요해요']]});
 else{
  if(!done(PC.ocs))qs.push({k:'ocs',q:'증상 조절을 위해 먹는 스테로이드 약을 계속 복용 중이신가요?',s:'프레드니솔론 같은 "먹는 스테로이드"를 며칠이 아니라 꾸준히 복용하는 경우를 말해요.',opts:[['yes','예, 계속 복용해요',''],['no','아니오',''],['unk','잘 모르겠어요','처방전을 확인하거나 선생님께 물어보세요']]});
  else if(!done(PC.eos))qs.push({k:'eos',q:'최근 혈액검사의 "호산구" 수치를 아시나요?',s:'호산구는 알레르기 염증과 관련된 혈액 세포예요. 검사 결과지에 eosinophil로 표시됩니다.',opts:[['lt150','150 미만',''],['mid','150 ~ 1500',''],['gt1500','1500 초과',''],['unk','잘 모르겠어요','다음 진료 때 확인해 보세요']]});
  else if(PC.ocs==='no'&&PC.eos==='gt1500'&&!done(PC.ruledOut))qs.push({k:'ruledOut',q:'호산구가 매우 높은 다른 원인이 아닌지 확인받으셨나요?',s:'호산구가 아주 높을 때는 천식 외의 원인(과호산구증가증 등)이 아닌지 먼저 확인해요.',opts:[['yes','예, 확인받았어요',''],['unk','아직이요','담당 선생님과 확인이 필요해요']]});
  else if(PC.ocs==='no'&&PC.eos==='lt150'&&!done(PC.feno))qs.push({k:'feno',q:'"호기산화질소(FeNO)" 검사 수치를 아시나요?',s:'숨을 내쉬며 기도 염증을 재는 간단한 검사예요.',opts:[['lt25','25 미만',''],['ge25','25 이상',''],['unk','잘 모르겠어요','검사를 안 했다면 다음 진료 때 문의해 보세요']]});
  else if(PC.ocs==='no'&&PC.eos==='lt150'&&done(PC.feno)&&!done(PC.allergy))qs.push({k:'allergy',q:'알레르기(집먼지진드기·꽃가루 등) 때문에 생긴 천식이라고 들으셨나요?',s:'알레르기 피부반응검사나 혈액검사(특이 IgE)로 확인해요.',opts:[['yes','예',''],['no','아니오',''],['unk','잘 모르겠어요','']]});
 }
 const total=4, answered=['ocs','eos','feno','allergy','ruledOut'].filter(k=>PC[k]!=null&&PC[k]!=='unk').length;
 if(qs.length){const q=qs[0];
  return `<div class="wiz"><div class="wiz-prog"><span class="lab">질문 진행</span><div class="bar"><i style="width:${Math.min(100,answered/total*100)}%"></i></div></div>
  <div class="wiz-q">${q.q}</div><div class="wiz-s">${q.s}</div>
  <div class="wiz-opts">${q.opts.map(o=>q.k==='s1'
   ?`<button class="wiz-opt" onclick="${o[0]==='yes'?'PC.s1=[true,true,true,true];pcSave();$(\'#selUI\').innerHTML=selUI();':'selAns(\'ocs\',null);$(\'#selUI\').innerHTML=wizWarn();'}"><div class="t">${o[1]}</div><div class="s">${o[2]}</div></button>`
   :`<button class="wiz-opt ${o[0]==='unk'?'dim':''}" onclick="selAns('${q.k}','${o[0]}')"><div class="t">${o[1]}</div><div class="s">${o[2]}</div></button>`).join('')}</div>
  <div class="wiz-foot"><button class="wiz-back" onclick="wizBack()">← 이전 질문</button><span class="muted small">치료 결정이 아닌 참고용 안내예요</span></div></div>`}
 return selWizResult()}
window.wizWarn=()=>`<div class="wiz"><div class="wiz-q">먼저 "중증 천식"인지 확인이 필요해요</div>
 <div class="wiz-s">생물학적제제(주사 치료)는 중증 천식으로 확인된 경우에 고려하는 치료예요. 천식 진단, 흡입기 사용법, 동반 질환을 담당 선생님과 먼저 점검해 보세요.</div>
 <div class="cn-ask" style="max-width:420px"><b>진료 때 이렇게 물어보세요</b>"제 천식이 중증 천식에 해당하나요? 흡입기 사용은 잘 하고 있나요?"</div></div>`;
function selWizResult(){
 const A=algoActive();
 const unk=['eos','feno','allergy','ocs','ruledOut'].some(k=>PC[k]==='unk');
 const cards=[];
 if(A.res){
  cards.push(`<div class="cn-card info"><div class="cn-ico">🧭</div><div class="cn-k">요약</div><div class="cn-t">후보 계열을 찾았어요</div><div class="cn-easy">${RESNOTE[A.res].replace('하세요','해요').replace('입니다','예요')}</div></div>`);
  drugsFor(A.res).forEach(({d,m})=>cards.push(`<div class="cn-card ok"><div class="cn-ico">💊</div><div class="cn-k">${m} 계열</div><div class="cn-t">${d.name}</div><div class="cn-easy"><b>${MECH[m].hint}</b>하는 주사예요.<br>${d.who}</div><div class="cn-ask"><b>진료 때 물어보세요</b>"저에게 ${d.name}이(가) 맞을까요? 보험(급여) 기준도 궁금해요."</div></div>`));
 }
 if(A.need&&!A.res)cards.push(`<div class="cn-card na"><div class="cn-ico">🔬</div><div class="cn-k">확인 필요</div><div class="cn-t">다음 진료 때 확인해 보세요</div><div class="cn-easy">후보를 좁히려면 <b>${A.need}</b>이(가) 필요해요. 결과지를 사진으로 찍어 두면 편리해요.</div><div class="cn-ask"><b>진료 때 물어보세요</b>"제 ${A.need.split('(')[0].trim()} 결과가 어떻게 되나요?"</div></div>`);
 cards.push(`<div class="cn-card info"><div class="cn-ico">🤝</div><div class="cn-k">기억하세요</div><div class="cn-t">결정은 선생님과 함께</div><div class="cn-easy">이 안내는 자료 준비를 돕는 참고용이에요. 약 선택은 검사 결과·동반 질환·보험 기준을 함께 보고 담당 의료진과 결정해요.</div></div>`);
 return `<h3 class="sect">나의 결과 카드 ${unk?'<span class="b b-warn2">일부 확인 필요</span>':''}</h3>
 <div class="cn-hint">◀ 옆으로 넘겨 보세요</div><div class="cn-deck">${cards.join('')}</div>
 <details class="fx-alt"><summary>의료진용 알고리듬 경로 보기</summary>${algoPanel(A)}</details>
 <p class="small"><button class="btn ghost sm" onclick="wizBack()">← 답변 고치기</button> <button class="btn ghost sm" onclick="pcReset()">처음부터 다시</button></p>`}

