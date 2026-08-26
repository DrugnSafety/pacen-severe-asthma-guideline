
/* ============ DATA (전부 정본 조회값 — 신규 산출 없음) ============ */
const EVDOTS={'높음':'⊕⊕⊕⊕','중등도':'⊕⊕⊕◯','낮음':'⊕⊕◯◯','매우 낮음':'⊕◯◯◯'};
const KQS=[
 {n:1,name:'Omalizumab',type:'drug',target:'IgE (anti-IgE)',pheno:'알레르기성 천식',cond:'*알레르기성 천식',
  q:'Omalizumab을 성인 중증천식 환자에게 사용해야 하는가?',
  en:'Anti-IgE biologic (omalizumab) for adults with severe, uncontrolled allergic asthma',
  rec:'표준 치료에도 불구하고 적절히 조절되지 않는 성인 중증 천식 환자에서 <em>omalizumab 추가 치료를 제안한다.</em>',
  ev:'중등도',grade:'조건부 권고',detail:true},
 {n:2,name:'Mepolizumab',type:'drug',target:'IL-5 (anti-IL-5)',pheno:'호산구성 천식',cond:'*호산구성 천식',
  q:'Mepolizumab을 성인 중증천식 환자에게 사용해야 하는가?',en:'Anti-IL-5 biologic (mepolizumab) for adults with severe, uncontrolled eosinophilic asthma',
  rec:'표준 치료에도 불구하고 적절히 조절되지 않는 성인 중증 호산구성 천식 환자에서 <em>mepolizumab 추가 치료를 제안한다.</em>',ev:'중등도',grade:'조건부 권고',detail:true},
 {n:3,name:'Reslizumab',type:'drug',target:'IL-5 (anti-IL-5)',pheno:'호산구성 천식',cond:'*호산구성 천식',
  q:'Reslizumab을 성인 중증천식 환자에게 사용해야 하는가?',en:'Anti-IL-5 biologic (reslizumab) for adults with severe, uncontrolled eosinophilic asthma',
  rec:'표준 치료에도 불구하고 적절히 조절되지 않는 성인 중증 호산구성 천식 환자에서 <em>reslizumab 추가 치료를 제안한다.</em>',ev:'중등도',grade:'조건부 권고',detail:true},
 {n:4,name:'Benralizumab',type:'drug',target:'IL-5Rα (anti-IL-5Rα)',pheno:'호산구성 천식',cond:'*호산구성 천식',
  q:'Benralizumab을 성인 중증천식 환자에게 사용해야 하는가?',en:'Anti-IL-5Rα biologic (benralizumab) for adults with severe, uncontrolled eosinophilic asthma',
  rec:'표준 치료에도 불구하고 적절히 조절되지 않는 성인 중증 천식 환자에서 <em>benralizumab 추가 치료를 제안한다.</em>',ev:'중등도',grade:'조건부 권고',detail:true},
 {n:5,name:'Dupilumab',type:'drug',target:'IL-4Rα (anti-IL-4Rα)',pheno:'제2형 염증성 천식',cond:'*제2형 염증성 천식',
  q:'Dupilumab을 성인 중증천식 환자에게 사용해야 하는가?',en:'Anti-IL-4Rα biologic (dupilumab) for adults with severe, uncontrolled type 2 asthma',
  rec:'표준 치료에도 불구하고 적절히 조절되지 않는 성인 중증 제2형 염증성 천식 환자에서 <em>dupilumab 추가 치료를 제안한다.</em>',ev:'낮음',grade:'조건부 권고',detail:true},
 {n:6,name:'Tezepelumab',type:'drug',target:'TSLP (anti-TSLP)',pheno:'표현형 무관',cond:'',
  q:'Tezepelumab을 성인 중증천식 환자에게 사용해야 하는가?',en:'Anti-TSLP biologic (tezepelumab) for adults with severe, uncontrolled asthma',
  rec:'표준 치료에도 불구하고 적절히 조절되지 않는 성인 중증 천식 환자에서 <em>tezepelumab 추가 치료를 제안한다.</em>',ev:'중등도',grade:'조건부 권고',detail:true},
 {n:7,name:'단계적 감량·중단',type:'strategy',pheno:'6개월 이상 안정 조절 환자',cond:'',
  q:'생물학적 제제로 6개월 이상 안정적으로 조절된 중증 천식 환자에서, 지속 전략과 비교하여 단계적 감량 전략이 효과적인가?',
  en:'Stepwise biologic dose reduction/discontinuation vs. continued therapy in stable severe asthma',
  rec:'6개월 이상 잘 조절된 중증천식 환자에서 <em>생물학적 제제의 단계적 감량을 제안한다</em> (고려할 수 있다).',ev:'매우 낮음',grade:'조건부 권고',detail:true},
 {n:8,name:'교체·추가 치료',type:'strategy',pheno:'반응 불충분 환자',cond:'',
  q:'현재 사용 중인 생물학적 치료 반응이 불충분한 경우, 다른 생물학적 제제로 교체 또는 추가 치료하는 것이 더 효과적인가?',
  en:'Switching to or adding another biologic for adults with severe asthma and an inadequate response to current biologic therapy',
  rec:'현재 사용 중인 생물학적 제제에 대해 적절한 치료 기간에도 임상적 반응이 불충분한 성인 중증 천식 환자에서, <em>다른 종류의 생물학적 제제로의 교체를 제안한다.</em>',ev:'매우 낮음',grade:'조건부 권고',detail:true}
];
const KQD={};

const DRUGS=[
 {name:'Omalizumab',target:'IgE (anti-IgE)',who:'혈중 IgE가 높은 알레르기성 중증 천식 (성인 및 12세 이상 청소년)',kq:1},
 {name:'Mepolizumab',target:'IL-5 (anti-IL-5)',who:'혈중 호산구가 높은 중증 호산구성 천식',kq:2},
 {name:'Reslizumab',target:'IL-5 (anti-IL-5)',who:'혈중 호산구가 높은 중증 호산구성 천식',kq:3},
 {name:'Benralizumab',target:'IL-5 수용체 (anti-IL-5Rα)',who:'중증 호산구성 천식',kq:4},
 {name:'Dupilumab',target:'IL-4 수용체 (anti-IL-4Rα)',who:'제2형 염증성(호산구 ≥150/㎕ 또는 FeNO ≥25 ppb) 또는 OCS 의존성 중증 천식',kq:5},
 {name:'Tezepelumab',target:'TSLP (anti-TSLP)',who:'표현형에 관계없이 조절되지 않는 중증 천식',kq:6}];
const MCIDS=[
 ['천식악화율 감소','핵심적','상대값','20%','연간 악화율 기저 대비 ≥20% 감소'],
 ['천식 연간 악화 횟수','핵심적','절대값','<1회','치료 후 연간 악화 1회 미만 = 치료 성공 기준'],
 ['경구스테로이드 사용 감소','핵심적','상대값','50%','이전 12개월 누적 OCS 용량 대비 ≥50% 감량'],
 ['경구스테로이드 유지용량','핵심적','절대값','<5 mg/day','prednisone equivalent <5 mg/day = 감량 성공 기준'],
 ['천식조절도 ACQ','중요한','절대값','0.5','≥0.5점 감소'],
 ['천식조절도 ACT','중요한','절대값','3','≥3점 증가'],
 ['천식 삶의 질 AQLQ','중요한','절대값','0.5','≥0.5점 증가'],
 ['폐기능 FEV1 (%)','중요한','절대값','10%','pre-BD 기저치 대비 ≥10% 증가'],
 ['폐기능 FEV1 (L)','중요한','절대값','0.2 L','pre-BD 기저치 대비 ≥0.2 L 증가']];
const AERULES=[
 ['Grade 1 이상반응','허용 가능한 위험 — 일반적으로 치료 중단·약제 변경의 근거가 되지 않음','합의 89.9%','ok'],
 ['Grade 2 이상반응','치료 지속·용량 조절·약제 변경 등 치료 결정에 영향을 주는 유의미한 이상반응','합의 71.0%','ok'],
 ['중증 이상반응 (SAE)','단 1건이라도 발생 시 해당 제제의 중단·변경 또는 위험 대비 이득 재평가','합의 81.2%','ok'],
 ['신규 악성종양','합의 미도달 — MCID 미설정, Evidence Profile에만 포함. 전문가 판단 필요','미합의','warn']];
const DEV20=[['김소리','전북대학교병원','호흡기내과','KQ1'],['윤정은','중앙대학교병원','알레르기내과','KQ1'],['심다운','전남대학교병원','알레르기내과','KQ2'],['오현경','세브란스병원','알레르기내과','KQ2'],['조은정','부산대학교병원','알레르기내과','KQ3'],['김연희','순천향대 서울병원','알레르기내과','KQ3'],['문지용','건국대학교병원','호흡기내과','KQ4'],['강노을','서울삼성병원','알레르기내과','KQ4'],['이화영','서울성모병원','알레르기내과','KQ5'],['강유리','순천향대 천안병원','알레르기내과','KQ5'],['김수정','경북대학교병원','알레르기내과','KQ6'],['이태훈','울산대학교병원','호흡기알레르기내과','KQ6'],['원하경','충북대학교병원','알레르기내과','MCID'],['류효인','해운대 백병원','알레르기내과','MCID'],['송우정','서울아산병원','알레르기내과','KQ7'],['백선영','분당서울대학교병원','알레르기내과','KQ7'],['김주희','한림대 평촌성심병원','알레르기내과','KQ8'],['오지윤','서울의료원','알레르기내과','KQ8'],['김영찬','서울대학교병원','알레르기내과','치료반응 요인'],['박소영','중앙대학교 광명병원','알레르기내과','치료반응 요인']];
const STEER5=[['송우정','서울아산병원','알레르기내과','팀장'],['김수정','경북대학교병원','알레르기내과','간사'],['김현정','고려대학교 의과대학','보건학·근거중심의학','방법론 전문가'],['원하경','충북대학교병원','알레르기내과','MCID 조사'],['강민규','충북대학교병원','알레르기내과','온라인 모듈 개발']];
const ADV13=[['김상헌','한양대학교병원'],['김세훈','분당서울대학교병원'],['김태범','서울아산병원'],['박흥우','서울대학교병원'],['이병재','삼성서울병원'],['이재현','세브란스병원'],['예영민','아주대학교병원'],['장안수','순천향대학교 부천병원'],['장윤석','분당서울대학교병원'],['정재원','일산백병원'],['최정희','한림대 동탄성심병원'],['허규영','고려대학교병원'],['김민혜','이화여대 서울병원']];
const T71=[['천식 개선 효과','65.7%','20.4%','13.0%','0.9%','1.5'],['경제적 부담','24.1%','33.3%','27.8%','14.8%','2.37'],['약제 이상반응','8.3%','38.9%','33.3%','19.4%','2.6'],['사용 편의성','1.9%','7.4%','25.9%','64.8%','3.35']];
const T72=[['증상 개선 (기침·숨참·쌕쌕거림 등)','33.5 ± 18.0'],['전신 스테로이드제 사용 부작용 위험 감소','21.4 ± 16.6'],['천식 검사 수치 개선 (폐기능·염증 검사 등)','15.8 ± 9.6'],['천식 악화로 인한 입원/응급실 방문 감소','14.7 ± 12.9'],['일상/학교/직장생활 제약 및 정신적 스트레스 해소','14.6 ± 9.6']];
const T73=[['증상 개선 (기침·숨참·쌕쌕거림 등)','63.9%','26.9%','5.6%','3.7%','0%'],['전신 스테로이드제 사용 부작용 위험 감소','59.3%','28.7%','7.4%','3.7%','0.9%'],['천식 검사 수치 개선 (폐기능·염증 검사 등)','63.0%','27.8%','5.6%','3.7%','0%'],['천식 악화로 인한 입원/응급실 방문 감소','66.7%','23.1%','6.5%','2.8%','0.9%'],['일상/학교/직장생활 제약 및 정신적 스트레스 해소','70.4%','22.2%','4.6%','2.8%','0%']];
const MC63=[
 ['천식 조절도 — ACT','생물학적 제제 치료 후 ACT 점수 3점 이상 증가를 MCID로 설정하는 것이 타당하다','O','3'],
 ['천식 조절도 — ACQ','ACQ 점수 0.5점 이상 감소를 MCID로 설정하는 것이 타당하다','O','0.5'],
 ['폐기능 — FEV1(%)','pre-BD FEV1(%) 기저치 대비 ≥10% 증가를 MCID로 정의하는 것이 타당하다','O','10'],
 ['폐기능 — FEV1(L)','pre-BD FEV1(L) 기저치 대비 ≥0.2 L 증가를 MCID로 정의하는 것이 타당하다','O','0.2'],
 ['천식 악화 — 악화율','연간 악화율 기저 대비 ≥20% 감소를 악화 감소의 MCID로 간주하는 것이 타당하다','O','20%'],
 ['천식 악화 — 치료 성공','연간 악화 1회 미만을 치료 성공 기준으로 설정하는 것이 타당하다','O','<1회'],
 ['OCS 감량','이전 12개월 누적 용량 대비 ≥50% 감량을 MCID로 정의하는 것이 타당하다','O','50%'],
 ['OCS — 치료 성공','prednisone equivalent <5 mg/day 감소를 감량 성공 기준으로 정의하는 것이 타당하다','O','<5 mg/day'],
 ['경증 AE (Grade 1)','허용 가능한 위험으로 간주 — 치료 중단·약제 변경의 근거가 되지 않는다','O','—'],
 ['중등도 AE (Grade 2)','치료 결정에 영향을 주는 유의미한 이상반응으로 간주하는 것이 타당하다','O','—'],
 ['SAE','단 1건이라도 발생 시 중단·변경 또는 위험 대비 이득 재평가 지표로 간주','O','—'],
 ['신규 악성종양','통계적 유의성과 무관하게 중대한 안전성 신호로 간주 — 재평가 필요','X (미합의)','—']];
const MC64=[['AQLQ','Asthma','0.5','Anchor-based'],['miniAQLQ','Asthma (18–65세, 조절군 n=40)','0.5','Anchor-based'],['SAQ','Severe asthma (n=110)','0.5','Anchor-based'],['SAQ-global','Severe asthma (n=110)','11','Anchor-based'],['ASUI','—','0.09','Anchor-based·통계적 방법'],['SGRQ','—','4','Anchor-based·민감도 검정'],['Rescue medication (SABA) 감소','경증–중등도 천식 (18–65세)','0.81 puff/day','Anchor-based']];
