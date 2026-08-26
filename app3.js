P['chatbot']=()=>`${crumb('Chatbot','가이드라인 AI 어시스턴트')}
 <h1 class="page">가이드라인 AI 어시스턴트</h1>
 <p class="page-en">Hybrid GraphRAG Assistant &nbsp;<span class="b b-warn2">명칭 확정 필요</span></p>
 <p>본 지침의 8개 핵심질문 범위 안에서, 권고문·근거수준·효과추정치·MCID 등을 <b>항상 출처와 함께</b> 답하는 챗봇입니다. 사이트 안에서 바로 사용합니다.</p>
 <div class="placeholder" style="text-align:center;padding:34px"><b>챗봇 임베드 영역</b><br><span class="muted">실서비스에서 이 위치에 대화 인터페이스가 들어갑니다 (별도 페이지로 이동하지 않음)</span></div>
 <h3 class="sect">어떻게 만들었나 — 구현 아이디어</h3>
 <div class="grid2">
  <div class="card"><h4 style="margin-top:0">① 문서 검색 (RAG)</h4><p class="small" style="margin-bottom:0">지침 본문·KQ 분석표를 의미 단위로 분할·색인하고, 질문과 관련된 대목을 찾아 답변의 근거로 사용합니다. 답변에는 인용한 문서·위치가 함께 표시됩니다.</p></div>
  <div class="card"><h4 style="margin-top:0">② 지식그래프 (Graph DB)</h4><p class="small" style="margin-bottom:0">지침의 GRADE/EtD 구조를 Neo4j 지식그래프(<b>305 노드 · 466 관계</b>, 핵심질문·권고·약제·건강결과·효과추정치·MCID·확신도 등 10개 유형)로 구조화했습니다. 국제 표준(EBM-on-FHIR · SEVCO · SNOMED CT)에 정렬되어 있으며, 질문을 읽기 전용 그래프 질의로 변환해 수치를 그대로 조회합니다.</p></div>
 </div>
 <p class="small">두 방식의 결과를 종합(Hybrid)하여 답변을 생성합니다. 구현 상세·코드 → <b>GitHub 저장소</b> <span class="b b-warn2">URL 확인 필요</span></p>
 <h3 class="sect">안전 원칙 4가지</h3>
 <ul class="small">
  <li><b>수치 무생성</b> — MD·RR·95% CI·GRADE 등급 등 수치는 그래프·문서의 조회값만 사용합니다. 근거가 없으면 정확히 "정보 없음"으로 답합니다.</li>
  <li><b>근거 표기 필수</b> — 모든 답변에 출처를 노출합니다: 문서 검색은 인용 대목(파일·위치), 그래프는 노드 ID·SNOMED 코드·실행된 질의.</li>
  <li><b>읽기 전용 질의</b> — 그래프 질의는 스키마 화이트리스트 내 읽기 문만 허용하며 결과 수를 제한합니다.</li>
  <li><b>간접비교 고지</b> — 약제 간 비교 질문에는 간접비교임을 항상 함께 안내합니다.</li>
 </ul>
 <h3 class="sect">이용 안내</h3>
 <div class="card"><ul class="small" style="margin-bottom:0">
  <li><b>답할 수 있는 것</b> — 본 지침의 권고문·근거수준·권고등급, KQ별 효과추정치, MCID 기준, 개발 방법론.</li>
  <li><b>답하지 않는 것</b> — 개별 환자의 진단·처방 판단, 지침 범위 밖 질문, 근거 없는 수치 추정.</li>
  <li><b>한계</b> — 근거 검색일(2025-12-31) 이후 발표된 연구는 반영되어 있지 않습니다. 답변은 의료진의 판단을 대체하지 않습니다.</li>
 </ul></div>
 <h4>예시 질문</h4>
 <div class="chips">
  <span class="chip">호산구 400에 OCS 의존이면 어떤 권고가 있나요?</span><span class="chip">tezepelumab의 권고등급과 근거수준은?</span><span class="chip">ACT가 2점 올랐는데 MCID를 충족하나요?</span><span class="chip">omalizumab의 악화 감소 효과 크기는?</span><span class="chip">감량을 고려할 수 있는 조건은?</span><span class="chip">교체는 언제 고려하나요?</span>
 </div>
 <p class="small muted">※ RAG(Local) 구성은 내부 비교 연구용으로, 홈페이지에는 표기하지 않습니다.</p>
 ${disclaimer}${pfoot}`;

P['patients']=()=>`${crumb('For Patients','환자 마당')}
 <h1 class="page">환자 마당</h1>
 <p>중증천식으로 생물학적 치료를 받고 있거나 고려 중인 환자와 가족을 위한 공간입니다. 여기의 정보는 <b>진료 상담을 준비하는 데</b> 도움을 드리기 위한 것으로, 치료 결정은 반드시 담당 의료진과 상의하세요.</p>
 <div class="cta">
  <a href="#/patients/summary"><div class="t">환자용 가이드라인 요약</div><div class="s">쉬운 우리말 요약 ${bN}</div></a>
  <a href="#/patients/biologics"><div class="t">생물학적 치료제 알아보기</div><div class="s">국내 허가 6종 — 무엇을, 누구에게</div></a>
  <a href="#/tools/select"><div class="t">나에게 맞는 치료 알아보기</div><div class="s">치료 결정 지원 도구 (환자 보기)</div></a>
  <a href="#/patients/voice"><div class="t">환자 목소리</div><div class="s">환자 108명 가치·선호도 조사 결과</div></a>
  <a href="#/patients/faq"><div class="t">자주 묻는 질문</div><div class="s">FAQ ${bD}</div></a>
 </div>
 <div class="notice"><b>게시 안내</b> · 환자 마당의 콘텐츠는 의학 감수와 공개 범위 정책 결정 후 정식 게시됩니다. 현재 표시된 내용은 검토용 초안입니다.</div>${pfoot}`;

P['patients/summary']=()=>`${crumb('For Patients','환자용 가이드라인 요약')}
 <h1 class="page">환자용 가이드라인 요약</h1>
 <div class="placeholder"><b>환자용 요약 소책자</b> ${bN}<br>과제 산출물인 환자용 설명자료(소책자) 수령 후 이 위치에 게시합니다 — 추후 고도화 시 해당 자료 필요.</div>
 <h3 class="sect">쉬운 우리말 개요 ${bD}</h3>
 <div class="card"><p class="small">중증천식은 표준 치료(높은 용량의 흡입 치료 등)를 잘 쓰는데도 증상과 악화가 조절되지 않는 천식입니다. 최근에는 몸속 염증 경로를 표적하는 <b>생물학적 치료제(주사제)</b> 6가지가 국내에서 사용되고 있습니다.</p>
 <p class="small">이 지침은 "어떤 환자에게 어떤 약을 고려할 수 있는가(8가지 질문)"에 대해, 전 세계 임상시험 결과를 모아 전문가들이 평가하고 환자들의 의견을 조사하여 만든 권고입니다. 8개 권고는 모두 <b>"조건부 권고"</b> — 즉, 환자마다 상황과 가치관에 따라 다른 선택을 할 수 있다는 뜻입니다. 그래서 의료진과의 충분한 상담이 더욱 중요합니다.</p>
 <p class="small" style="margin-bottom:0">각 약이 나에게 해당하는지 궁금하다면 <a href="#/patients/biologics">치료제 알아보기</a>와 <a href="#/tools/select">나에게 맞는 치료 알아보기</a>를 진료 전에 살펴보고, 담당 선생님께 가져갈 질문을 준비해 보세요.</p></div>
 ${disclaimer}${pfoot}`;

P['patients/biologics']=()=>`${crumb('For Patients','생물학적 치료제 알아보기')}
 <h1 class="page">생물학적 치료제 알아보기</h1>
 <p class="muted">국내 허가된 중증천식 생물학적 치료제 6종 — 표적과 허가 적응 대상(요약). 자세한 용법·투여는 담당 의료진과 공식 허가사항을 확인하세요.</p>
 <div class="grid2">${DRUGS.map(d=>`<div class="card"><span class="muted small" style="font-weight:700;letter-spacing:.06em">표적 · ${d.target}</span><h4 style="margin:4px 0 8px;font-size:17px" class="serif">${d.name}</h4><p class="small">${d.who}</p><p class="small" style="margin-bottom:0"><a href="#/kq/${d.kq}">이 약제의 권고안 보기 (KQ${d.kq}) →</a><br><span class="muted">제조사 공식 홈페이지·환자용 자료 ${bP}</span></p></div>`).join('')}</div>
 <div class="notice"><b>안내</b> · 제조사 공식 홈페이지 주소, 회사 제공 환자용 지침·브로셔는 자료 확보 시 각 카드에 첨부 형식으로 제공합니다.</div>
 ${indirect}${disclaimer}${pfoot}`;

P['patients/voice']=()=>`${crumb('For Patients','환자 목소리')}
 <h1 class="page">환자 목소리</h1>
 <p>이 지침을 만들며 <b>중증천식 환자 108명</b>(GINA 4–5단계 치료 중)에게 물었습니다. 무엇이 가장 중요한지, 치료에서 무엇을 기대하는지 — 그 답이 권고를 만드는 과정에 반영되었습니다.</p>
 <div class="card"><h4 style="margin-top:0">치료제를 결정할 때 가장 중요하게 본 것</h4>
 <p class="small">1위 <b>천식 개선 효과</b>(평균 순위 1.5) → 2위 경제적 부담(2.37) → 3위 약제 이상반응(2.6) → 4위 사용 편의성(3.35)</p></div>
 <h3 class="sect" style="margin-top:26px">치료에서 기대하는 것 (100점 나누어 담기)</h3>
 ${pvBars()}
 <p class="small muted">증상이 나아지는 것을 가장 크게 기대했고, 스테로이드 부작용 위험을 줄이는 것이 그다음이었습니다. 답변의 편차가 커서 — 환자마다 중요한 것이 다르다는 뜻이기도 합니다.</p>
 <div class="card"><h4 style="margin-top:0">비용에 대한 생각</h4><p class="small" style="margin-bottom:0">기대 효과의 종류와 관계없이, 다수의 환자(지표별 59.3~70.4%)가 월 25만원 미만의 부담을 선호했습니다.</p></div>
 <p class="small">전체 조사 방법·데이터 → <a href="#/method/values">Methodology · 환자 가치·선호도 조사 결과</a></p>${pfoot}`;

P['patients/faq']=()=>`${crumb('For Patients','자주 묻는 질문')}
 <h1 class="page">자주 묻는 질문 ${bD}</h1>
 ${[['생물학적 치료제는 무엇인가요?','천식을 일으키는 몸속 염증 경로(IgE, IL-5, IL-4/13, TSLP 등)를 표적하는 주사 치료제입니다. 표준 치료로 조절되지 않는 중증천식에서 추가로 사용합니다.'],
 ['어떤 약이 저에게 맞는지 어떻게 정하나요?','알레르기 여부, 혈중 호산구, FeNO(호기산화질소) 같은 검사 결과(표현형)에 따라 후보가 달라집니다. 이 지침의 권고와 검사 결과를 바탕으로 담당 의료진과 함께 결정합니다.'],
 ['효과가 있는지 어떻게 확인하나요?','악화 횟수, 먹는 스테로이드 사용량, 증상 점수(ACT 등), 폐기능 같은 지표의 변화를 봅니다. 이 지침은 "어느 정도 좋아져야 의미 있는 변화인지"에 대한 전문가 합의 기준(MCID)을 정해 두었습니다.'],
 ['좋아지면 주사를 줄이거나 끊을 수 있나요?','6개월 이상 안정적으로 잘 조절된 일부 환자에서, 의료진의 면밀한 관찰 아래 단계적으로 줄여볼 수 있다는 조건부 권고가 있습니다(KQ7). 다만 악화 위험이 다소 늘 수 있어 반드시 의료진과 상의해 결정합니다.'],
 ['보험(급여)이 되나요?','약제·환자 상태에 따라 급여 기준이 다르고 수시로 바뀝니다. 담당 의료진 및 공식 고시를 통해 확인하세요.']].map(f=>`<div class="card"><h4 style="margin-top:0">Q. ${f[0]}</h4><p class="small" style="margin-bottom:0">A. ${f[1]}</p></div>`).join('')}
 <div class="notice"><b>안내</b> · 본 FAQ는 의학 감수 전 초안입니다. 감수 및 공개 정책 결정 후 정식 게시됩니다.</div>${disclaimer}${pfoot}`;

P['method']=()=>`${crumb('Methodology','개발 방법론')}
 <h1 class="page">개발 방법론</h1>
 <p class="muted">본 지침은 De novo 개발 방식으로, GRADE 방법론과 EtD(Evidence to Decision) 틀에 따라 개발되었습니다.</p>
 <div class="anchor-nav"><a href="#scope">개발 범위</a><a href="#pico">핵심질문</a><a href="#search">문헌검색</a><a href="#grade">질평가·등급</a><a href="#outcome">건강결과</a><a href="#results">합의·조사 결과</a><a href="#impact">영향평가</a><a href="#update">갱신</a></div>
 <h2 class="sec" id="scope">Scope</h2><h3 class="sect">개발 범위</h3>
 <div class="tw"><table><tbody>
 <tr><td style="width:180px"><b>대상 인구집단 (P)</b></td><td>중증 천식 환자 — 모든 성별, 18세 이상 성인, 동반질환 유무 무관</td></tr>
 <tr><td><b>중재 (I)</b></td><td>생물학적 제제 치료 및 치료 전략</td></tr>
 <tr><td><b>목표 사용자</b></td><td>1·2·3차 의료기관에서 중증 천식환자를 진료하는 임상의사</td></tr>
 <tr><td><b>건강결과 (O)</b></td><td>천식 급성악화 · 조절도 · 삶의 질 · 폐기능 · 경구 스테로이드 사용 · 이상 반응</td></tr>
 <tr><td><b>의료환경</b></td><td>의료기관</td></tr>
 <tr><td><b>개발 재원</b></td><td>보건복지부 연구지원금(PACEN 사업) — 재원의 잠재적 영향 없음, 위원회의 독립적 개발</td></tr></tbody></table></div>
 <h2 class="sec" id="pico">Key Questions</h2><h3 class="sect">핵심질문 도출</h3>
 <p class="small">개발위원회 내부 논의를 통해 중증 천식 진료 현장에서 생물학적 치료제 사용과 관련하여 임상적으로 중요한 주제를 선정하고, PICO 체계에 따라 구조화하여 8개 핵심질문을 도출하였습니다. → <a href="#/kq">권고안 요약</a></p>
 <h2 class="sec" id="search">Evidence Search</h2><h3 class="sect">문헌 검색·선택</h3>
 <ul class="small">
  <li><b>검색 데이터베이스 5종</b> — Medline · Embase · Cochrane Library · KoreaMed · ClinicalTrials.gov</li>
  <li><b>검색일자</b> — 2025년 12월 31일 (출판연도·언어 제한 없음)</li>
  <li><b>문헌 선택</b> — 임상질문별 최소 2인의 전문가가 독립 선택, 이견 시 합의</li>
  <li>KQ별 검색식·PRISMA 흐름도 → <a href="#/resources">자료실 · 방법론 부록</a> ${bN}</li>
 </ul>
 <h2 class="sec" id="grade">Quality &amp; Grading</h2><h3 class="sect">질평가 · 근거수준 · 권고등급</h3>
 <p class="small"><b>질평가 도구</b> — 무작위 연구(RCT): RoB 2 · 관찰 연구: ROBINS-I. <b>근거수준 평가</b> — GRADE 접근법.</p>
 <div class="tw"><table><thead><tr><th>근거수준</th><th>표기</th><th>의미</th></tr></thead><tbody>
 <tr><td><b>높음</b></td><td class="dots">⊕⊕⊕⊕</td><td class="small">추정된 효과에 대한 확신이 크다</td></tr>
 <tr><td><b>중등도</b></td><td class="dots">⊕⊕⊕◯</td><td class="small">중등도의 확신 — 향후 연구가 추정치를 바꿀 수 있다</td></tr>
 <tr><td><b>낮음</b></td><td class="dots">⊕⊕◯◯</td><td class="small">확신이 제한적 — 추정치가 바뀔 가능성이 높다</td></tr>
 <tr><td><b>매우 낮음</b></td><td class="dots">⊕◯◯◯</td><td class="small">확신이 거의 없다 — 어떠한 추정치도 불확실하다</td></tr></tbody></table></div>
 <div class="tw"><table><thead><tr><th>권고등급</th><th>의미</th></tr></thead><tbody>
 <tr><td><b>강한 권고 (for/against)</b></td><td class="small">바라는 효과와 바라지 않는 효과의 크기 비교에 대한 확신이 충분 — 대부분의 상황에서 해당 중재를 사용(또는 사용하지 않을 것)을 권고</td></tr>
 <tr><td><b>조건부 권고 (for/against)</b></td><td class="small">확신이 제한적 — 임상 상황이나 환자의 가치·선호에 따라 다른 선택을 할 수 있음</td></tr></tbody></table></div>
 <p class="small"><b>권고 결정</b> — GRADE EtD 틀의 9개 요인(바라는 효과 · 바라지 않는 효과 · 근거의 확실성 · 가치와 선호 · 효과의 균형 · 필요 자원 · 건강 형평성 · 수용성 · 실행 가능성)을 고려하여 개발위원 70% 이상 참여·70% 이상 동의로 결정.</p>
 <h2 class="sec" id="outcome">Outcomes</h2><h3 class="sect">중요한 건강결과 선정</h3>
 <p class="small">중증천식 진료 전문가 대상 9점 척도 설문(1–3 덜 중요 · 4–6 중요 · 7–9 매우 중요)으로 결정.</p>
 <div class="tw"><table><thead><tr><th>건강결과</th><th>분류</th></tr></thead><tbody>
 <tr><td>천식악화</td><td><span class="b b-ev">핵심적</span></td></tr><tr><td>경구 스테로이드 사용</td><td><span class="b b-ev">핵심적</span></td></tr>
 <tr><td>천식조절도 (ACQ · ACT)</td><td><span class="b b-hold">중요한</span></td></tr><tr><td>폐기능 (FEV1)</td><td><span class="b b-hold">중요한</span></td></tr>
 <tr><td>천식 삶의 질 (AQLQ)</td><td><span class="b b-hold">중요한</span></td></tr><tr><td>이상반응</td><td><span class="b b-hold">중요한</span></td></tr></tbody></table></div>
 <h2 class="sec" id="results">Consensus &amp; Survey Results</h2><h3 class="sect">합의·조사 결과 (하위 페이지)</h3>
 <p class="small">방법론 적용의 산출물인 <b>합의·조사 결과</b>는 아래 두 하위 페이지에서 상세히 제공합니다. 원본 데이터는 각 페이지에서만 관리합니다(이중 관리 금지).</p>
 <div class="cta">
  <a href="#/method/mcid" id="mcid"><div class="t">MCID 델파이 합의 결과 →</div><div class="s">3라운드(71→61→33명) · MCID 9지표 + 이상반응 허용 기준 4항목 · 세부 문항별 합의</div></a>
  <a href="#/method/values" id="patient"><div class="t">환자 가치·선호도 조사 결과 →</div><div class="s">환자 108명 + 의료진 52명 · 우선순위·기대효과·지불 의향 (표 7.1–7.3)</div></a>
 </div>
 <h2 class="sec" id="impact">Implementation</h2><h3 class="sect">권고안 실행 영향평가</h3>
 <div class="placeholder"><b>권고안 실행의 영향평가 기준 (지침 문서 I-8)</b> ${bN}<br>KQ별 측정방법 확정 후 게시 — 추후 고도화 시 해당 자료 필요.</div>
 <h2 class="sec" id="update">Updating</h2><h3 class="sect">갱신 방법</h3>
 <div class="placeholder"><b>갱신 방법 (지침 문서 I-9)</b> ${bN} → 개요는 <a href="#/intro/policy">개정·갱신 정책</a> 참조.</div>${pfoot}`;

P['method/mcid']=()=>`${crumb('Methodology','MCID 델파이 합의')}
 <h1 class="page">MCID 델파이 합의 결과</h1>
 <p class="page-en">Minimal Clinically Important Difference · Expert Delphi Consensus</p>
 <p>MCID(최소 임상적 중요 차이)는 <b>"최소 어느 정도의 효과가 있어야 임상적으로 의미 있다고 판단할 것인가"</b>의 기준입니다. 본 지침에서 MCID는 ① 메타분석 효과 크기(effect size) 판정 기준 ② EtD 틀의 이득(benefit) 평가 기준 ③ 최종 권고등급 결정의 근거로 사용되었습니다.</p>
 <h2 class="sec">Design</h2><h3 class="sect">조사 설계</h3>
 <div class="tw"><table><tbody>
 <tr><td style="width:150px"><b>조사 대상</b></td><td>국내 중증천식 진료 전문가 (알레르기내과·호흡기내과) — 대학병원·종합병원·의원 소속</td></tr>
 <tr><td><b>응답 형식</b></td><td>7점 리커트 척도 (1 매우 강력히 비동의 ~ 7 매우 강력히 동의) · 동의 = 6–7점, 비동의 = 1–2점</td></tr>
 <tr><td><b>합의 기준</b></td><td>① 응답율 70% 이상 ② 동의율 &gt;60% <b>및</b> 비동의율 &lt;20% — 두 기준 모두 충족</td></tr>
 <tr><td><b>조사 범위</b></td><td>건강결과별 MCID + 약제 특이 이상반응(AE) 허용 기준 — 총 12개 문항</td></tr></tbody></table></div>
 <h2 class="sec">Rounds</h2><h3 class="sect">라운드별 진행</h3>
 ${statCards([['1라운드','71명','응답율 76.3% · 12개 문항 조사 → 5개 합의'],['2라운드','61명','응답율 87.1% · 미합의 7개 재조사 → 4개 추가 합의'],['3라운드','33명','응답율 89.2% · 미합의 3개 재조사 → 2개 추가 합의 + 악성종양 미합의(별도 처리)']])}
 <h2 class="sec">Results</h2><h3 class="sect">표 6.1 — 건강결과별 MCID (합의 확정 9지표)</h3>
 <div class="tw"><table><thead><tr><th>건강결과</th><th>분류</th><th>기준</th><th class="num">MCID</th><th>적용</th></tr></thead><tbody>
 ${MCIDS.map(m=>`<tr><td><b>${m[0]}</b></td><td>${m[1]==='핵심적'?'<span class="b b-ev">핵심적</span>':'<span class="b b-hold">중요한</span>'}</td><td>${m[2]}</td><td class="num"><b>${m[3]}</b></td><td class="small">${m[4]}</td></tr>`).join('')}</tbody></table></div>
 <h3 class="sect">표 6.2 — 이상반응(AE) 허용 기준</h3>
 <div class="tw"><table><thead><tr><th>항목</th><th>내용</th><th>합의</th></tr></thead><tbody>
 ${AERULES.map(r=>`<tr><td><b>${r[0]}</b></td><td class="small">${r[1]}</td><td>${r[3]==='ok'?'<span class="b b-ok">'+r[2]+'</span>':'<span class="b b-warn2">'+r[2]+'</span>'}</td></tr>`).join('')}</tbody></table></div>
 <h3 class="sect">표 6.3 — 세부 설문 문항별 합의 결과</h3>
 <div class="tw"><table><thead><tr><th style="min-width:150px">건강결과</th><th>문항 (요지)</th><th>합의</th><th class="num">MCID</th></tr></thead><tbody>
 ${MC63.map(r=>`<tr><td><b>${r[0]}</b></td><td class="small">${r[1]}</td><td>${r[2]==='O'?'<span class="b b-ok">합의</span>':'<span class="b b-warn2">미합의</span>'}</td><td class="num"><b>${r[3]}</b></td></tr>`).join('')}</tbody></table></div>
 <div class="callout-g"><b>악성종양 항목</b> — 신규 악성종양 발생을 중대한 안전성 신호로 간주하는 문항은 3라운드에서도 합의에 도달하지 못해 MCID를 설정하지 않고 <b>Evidence Profile에만 포함</b>했습니다. 해당 판단은 전문가의 개별 판단 영역으로 남깁니다.</div>
 <h3 class="sect">표 6.4 — 델파이 외 문헌 기반 MCID 참고 기준</h3>
 <p class="small muted">델파이 설문으로 설정한 지표 외의 건강결과에 대해서는 문헌 기반 기준점을 참고값으로 정리했습니다.</p>
 <div class="tw"><table><thead><tr><th>Endpoint</th><th>대상</th><th class="num">Proposed MCID</th><th>방법</th></tr></thead><tbody>
 ${MC64.map(r=>`<tr><td><b>${r[0]}</b></td><td class="small">${r[1]}</td><td class="num">${r[2]}</td><td class="small">${r[3]}</td></tr>`).join('')}</tbody></table></div>
 <h2 class="sec">Usage</h2><h3 class="sect">이 결과가 쓰이는 곳</h3>
 <ul class="small">
  <li><b>KQ1–8 상세 페이지</b> — 주요지표 차트의 MCID 임계선(주황 점선)과 충족 판정이 이 합의값을 사용합니다.</li>
  <li><b><a href="#/tools/response">치료 반응 평가 도구</a></b> — 지표별 충족 판정 기준.</li>
 </ul>
 <div class="placeholder"><b>원자료 (설문지·라운드별 응답 분포)</b> ${bN}<br>MCID 설문지 원문과 라운드별 동의율 분포 자료(PPT/Word) 수령 시 이 위치에 보강합니다 — 추후 고도화 시 해당 자료 필요.</div>
 <p class="small"><a href="#/method">← 개발 방법론</a></p>${pfoot}`;

