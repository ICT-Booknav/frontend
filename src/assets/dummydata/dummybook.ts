export interface BookProps { 
    books: { 
        coverImage?: string; 
        title: string; 
        author: string; 
        publisher: string; 
        publishYear?: string; 
        genre?: string; 
        id: string; 
        summary?: string; 
        tableOfContents?: string; 
        location?: number[];
        bookSize: number;
        currentstate?: boolean; 
    } []; 
} 

export const BookLists: BookProps = {
    books: [
      {
        id: "1",
        title: "단 한 번의 삶",
        author: "김영하",
        publisher: "복복서가",
        publishYear: "2025-04-06",
        genre: "한국 에세이",
        summary: `내 의지와 무관하게 시작된 삶이라는 사건
예측 불가하고 불공평하고 질서 없는 진짜 인생을 사유하다

“때로 어떤 예감을 받을 때가 있다.
아, 이건 이 작가가 평생 단 한 번만 쓸 수 있는 글이로구나.
내겐 이 책이 그런 것 같다.” (김영하)

『여행의 이유』 이후 6년 만의 신작 산문
-오직 한 번만 쓸 수 있는, 나의 삶에 대하여

김영하가 신작 산문 『단 한 번의 삶』을 출간했다. 60만 명이 넘는 독자의 사랑을 받은 『여행의 이유』 이후 6년 만에 선보이는 산문집으로, 유료 이메일 구독 서비스 ‘영하의 날씨’에 2024년 연재되었던 글을 대폭 수정하고 다듬어 묶었다. ‘영하의 날씨’는 초기 구독자의 초대로만 가입이 가능한 서비스로 화제를 모으며 연재 당시 뜨거운 호응을 얻었다.
『단 한 번의 삶』은 작가의 지난 산문들보다 더 사적이고 한층 내밀하다. 김영하는 ‘작가 김영하’에서 벗어나, 한 번뿐인 삶을 살아가는 우리 가운데 한 사람으로서 가만히 말을 건넨다. 열네 편의 이야기에 담긴 진솔한 가족사와 직접 경험한 인생의 순간을 아우르는 깊은 사유는 우리를 멈춰 생각하게 한다. 우리는 얼마나 서로를, 그리고 자신을 모르고 살아가는가. 생각은 하나의 질문으로 수렴된다. 내 앞에 놓인 삶을 어떻게 살아가야 할까. 이 책은 독자들에게 쉬운 위로나 뻔한 조언을 건네지 않는다. 대신 담담히 풀어낸 솔직한 경험과 고민을 통해 독자들이 자신의 삶을 되돌아보게 만든다. 『단 한 번의 삶』과 함께, 두고 온 시절에서 발견한 자기 삶의 장면들을 기록해보길 권한다.
“원래 나는 ‘인생 사용법’이라는 호기로운 제목으로 원고를 쓰기 시작했다.
하지만 곧 내가 인생에 대해서 자신 있게 할 말이 별로 없다는 것을 깨달았다.
내가 알고 있는 것은 그저 내게 ‘단 한 번의 삶’이 주어졌다는 것뿐.`,
        tableOfContents: `일회용 인생

엄마의 비밀
아이와 로봇
야로의 희망
우물 정 자 천 개
기대와 실망의 왈츠
테세우스의 배
모른다
스캔들이 된 고통의 의미
이탈
사공이 없는 나룻배가 닿는 곳
무용의 용
인생의 그래프
도덕적 운
어떤 위안

후기와 감사 그리고 ‘인생 사용법’`,
        currentstate: true,
        location: [5, 1], 
        bookSize: 1, 
        coverImage: "https://shopping-phinf.pstatic.net/main_5373501/53735013051.20250325080327.jpg?type=w300",
      },
      {
        id: "2",
        title: "급류",
        author: "정대건",
        publisher: "민음사",
        publishYear: "2022-12-22",
        genre: "한국소설",
        summary: `“너 소용돌이에 빠지면 어떻게 해야 하는 줄 알아?
수면에서 나오려 하지 말고 숨 참고 밑바닥까지 잠수해서 빠져나와야 돼.”

상처에 흠뻑 젖은 이들이 각자의 몸을 말리기까지,
서로의 흉터를 감싸며 다시 무지개를 보기까지
거센 물살 같은 시간 속에서 헤엄치는 법을 알아내는
연약한 이들의 용감한 성장담, 단 하나의 사랑론

2020년 《한경신춘문예》에 장편소설 『GV 빌런 고태경』이 당선되어 작품 활동을 시작한 소설가 정대건의 두 번째 장편소설 『급류』가 오늘의 젊은 작가 시리즈 40번으로 출간되었다. 『급류』는 저수지와 계곡이 유명한 지방도시 ‘진평’을 배경으로, 열일곱 살 동갑내기인 ‘도담’과 ‘해솔’의 만남과 사랑을 그린 소설이다. 아빠와 함께 수영을 하러 갔던 도담이 한눈에 인상적인 남자아이 ‘해솔’이 물에 빠질 뻔한 것을 구하러 뛰어들며 둘의 인연은 시작된다. 운명적이고 낭만적으로 보이는 첫 만남 이후 둘은 모든 걸 이야기하고 비밀 없는 사이가 되지만, 그 첫사랑이 잔잔한 물처럼 평탄하지만은 않다. 모르는 사이에 디뎌 빠져나올 수 없이 빨려드는 와류처럼 둘의 관계는 우연한 사건으로 다른 국면을 맞이한다. 도담과 해솔의 관계가 연인으로 발전하던 어느 날, 해솔의 엄마와 도담의 아빠가 불륜 관계인 듯한 정황이 드러나고 이에 화가 난 도담은 그 둘이 은밀히 만나기로 한 날 밤 랜턴을 들고 그들의 뒤를 밟는다. 그리고 그곳에서 생각지도 못한 사고가 벌어진다. 그날 이후, 진평에서 오직 서로가 전부이던, 나누지 못할 비밀이 없던 도담과 해솔의 관계와 삶은 순식간에 바뀌어 버린다. 해솔의 엄마와 도담의 아빠는 어떤 관계였던 걸까? 그 날, 그 밤 도담과 해솔은 어떤 일을 겪게 된 걸까?`,
        tableOfContents: `1부 7
2부 73
3부 187
4부 275

작가의 말 297`,
        currentstate: true,
        location: [2], 
        bookSize: 2, 
        coverImage: "https://shopping-phinf.pstatic.net/main_3680157/36801578630.20230117165610.jpg?type=w300",
      },
      {
        id: "3",
        title: "소년이 온다",
        author: "한강",
        publisher: "창비",
        publishYear: "2014-05-19",
        genre: "한국소설",
        summary: `말라파르테 문학상, 만해문학상 수상작
우리 시대의 소설 『소년이 온다』

2014년 만해문학상, 2017년 이탈리아 말라파르테 문학상을 수상하고 전세계 20여개국에 번역 출간되며 세계를 사로잡은 우리 시대의 소설 『소년이 온다』.
이 작품은 『채식주의자』로 인터내셔널 부커상을 수상한 한강 작가에게 “눈을 뗄 수 없는, 보편적이며 깊은 울림”(뉴욕타임즈), “역사와 인간의 본질을 다룬 충격적이고 도발적인 소설”(가디언), “한강을 뛰어넘은 한강의 소설”(문학평론가 신형철)이라는 찬사를 선사한 작품으로, 그간 많은 독자들에게 광주의 상처를 깨우치고 함께 아파하는 문학적인 헌사로 높은 관심과 찬사를 받아왔다.
『소년이 온다』는 ‘상처의 구조에 대한 투시와 천착의 서사’를 통해 한강만이 풀어낼 수 있는 방식으로 1980년 5월을 새롭게 조명하며, 무고한 영혼들의 말을 대신 전하는 듯한 진심 어린 문장들로 5·18 이후를 살고 있는 우리에게 묵직한 질문을 던진다.
이 작품은 가장 한국적인 서사로 세계를 사로잡은 한강 문학의 지향점을 보여준다. 인간의 잔혹함과 위대함을 동시에 증언하는 이 충일한 서사는 이렇듯 시공간의 한계를 넘어 인간 역사의 보편성을 보여주며 훼손되지 말아야 할 인간성을 절박하게 복원한다.`,
        tableOfContents: `1장 어린 새
2장 검은 숨
3장 일곱개의 뺨
4장 쇠와 피
5장 밤의 눈동자
6장 꽃 핀 쪽으로
에필로그 눈 덮인 램프`,
        currentstate: true,
        location: [2], 
        bookSize: 3, 
        coverImage: "https://shopping-phinf.pstatic.net/main_3249140/32491401626.20231004072435.jpg?type=w300",
      },
      {
        id: "4",
        title: "세상은 어떻게 작동하는가",
        author: "리처드 도킨스",
        publisher: "포레스트북스",
        publishYear: "2025-03-14",
        genre: "자연/과학",
        summary: `“세상을 면밀히 관찰해 온 위대한 지성들이인류의 도발적인 물음에 답하다!”

리처드 도킨스, 마이클 가자니가, 대니얼 데닛 등
세계적 석학 31인의 날카로운 문제 제기와 명쾌한 논리

우리가 가장 궁금해 하는 질문들에 대한 세계 최고의 지성 31인의 답을 모은 책. 리처드 도킨스, 대니얼 데닛, 폴 데이비스 등 다양한 분야에서 활발히 활약하고 있는 과학자와 사상가들의 이야기를 ‘지식의 지휘자’라 불리는 거물 편집자 존 브록만이 직접 받아서 엮었다.
‘시간은 언제 시작되었을까?’ ‘근친상간은 왜 금기시되는가?’ ‘포유류는 어떻게 지구를 지배하게 되었는가?’처럼 궁금한 과학 지식들부터, 타당한 근거와 잘못된 근거를 구별하는 법, 지금까지 아무도 생각하지 못했던 것을 생각하는 법, 실수를 통해 배우는 법과 같은 과학 너머의 인문학적 이야기까지 여러 궁금증에 대한 석학들의 명쾌한 답변을 한 권으로 만나보자. 세상은 단순하지 않다. 하지만 이 책과 함께라면, 조금 더 명확해질 것이다.


세상은 어떻게 작동하는가? 우리가 사는 세상, 그리고 인간의 본질을 파헤치는 지적 여정
『세상은 어떻게 작동하는가』는 현대를 대표하는 과학자와 사상가들의 통찰을 한데 모은 지적 향연이다. 이 책은 진화생물학자 리처드 도킨스를 비롯해, 철학자 대니얼 데닛, 물리학자 폴 데이비스, 수학자 이언 스튜어트 등 각 분야의 권위자 30여 명이 집필한 글을 엮은 것으로, 우리가 살아가는 세계를 보다 선명하고 깊이 있게 이해할 수 있도록 도와준다.

이 책은 '과학적 사고', '기원', '진화', '정신', '우주', 그리고 '미래'라는 여섯 개의 대주제로 나뉘어 있으며, 각 주제는 우리가 익숙하면서도 간과하기 쉬운 질문들에 대한 과학자들의 답변을 담고 있다. 리처드 도킨스는 '타당한 근거와 잘못된 근거를 어떻게 구분하는가'라는 질문을 통해 우리가 맹목적으로 받아들이는 전통, 권위, 계시에 대한 비판적인 시각을 제시하며 우리 사회에 만연한 거짓 선동에서 벗어날 수 있는 과학적 시선을 길러준다. 또한 패트릭 베이트슨은 '근친상간은 왜 금기인가'에서 동물의 행동과 진화의 관계를 탐구한다. 폴 데이비스는 '시간은 언제 시작되었는가'라는 물음을 통해 빅뱅과 우주의 기원을, 앨런 구스는 '불가능에서 진실을 배울 수 있는가'에서 불가능을 상상하는 일이 얼마나 중요한지를 이야기한다.


통념이 아닌 논리로, 믿음이 아닌 증거로 세상을 해석하라과학은 단순한 지식이 아니라, 세상을 보는 가장 강력한 도구다!
이 책의 가장 큰 장점은 과학적 주제를 어렵거나 지루하지 않게, 누구나 이해할 수 있도록 쉽게 풀어냈다는 점이다. 저자들은 복잡한 개념을 단순한 사례와 논리적 사고를 통해 풀어내며, 과학이 단순한 지식이 아니라 우리가 세상을 바라보는 방식임을 깨닫게 한다. 이 책에서 다루는 질문들은 우리의 지적 호기심을 자극하며, 과학적 사고의 중요성을 다시금 일깨운다.

이 책은 과학을 하나의 학문이 아닌, 세계를 이해하는 핵심적인 도구로 활용할 수 있게 돕는다. 과학적 사고가 왜 중요한지, 그리고 우리가 세계를 더 깊이 이해하기 위해 어떤 질문을 던져야 하는지를 고민하게 만드는 책이다. 과학과 철학, 논리적 사고에 관심 있는 독자라면 이 책을 통해 새로운 지적 자극을 받을 수 있을 것이다.`,
        tableOfContents: `서문 | 세상은 어떻게 작동하는가

제1부 | 과학적 사고
타당한 근거와 잘못된 근거를 어떻게 구분하는가 「리처드 도킨스」
과학적 설명이 존재의 가치를 떨어뜨리는가 「메리언 스탬프 도킨스」
'자연적'이란 무엇인가 「메리 캐서린 베이트슨」

제2부 | 기 원
시간은 언제 생겨났는가 「폴 데이비스」
어째서 우리는 죽도록 설계되었는가 「린 마굴리스」
자신의 문제를 유전자 탓으로 돌릴 수 있는가 「잭 코헨」
지극히 단순한데 풍부한 즐거움을 주는 것은 무엇인가 「피터 앳킨스」
우리는 어디서 왔는가 「로버트 셔피로」
작은 난자가 어떻게 복잡한 생명을 탄생시킬까 「루이스 월퍼트」

제3부 | 진 화
근친상간은 왜 금기인가 「패트릭 베이트슨」
피부색이 다른 이유는 무엇일까 「스티브 존스」
동성애는 돌연변이인가 「앤 파우스토-스털링」
우리는 정말로 원숭이에서 진화했을까 「밀퍼드 월퍼프」
왜 진화론을 두려워하는가 「스티븐 제이 굴드」
포유류는 어떻게 지구를 지배하게 되었는가 「피터 워드」

제4부 | 정 신
실수가 우리에게 어떤 이득을 주는가 「대니얼 데닛」
평균에는 어떤 함정이 숨어 있을까 「마이클 가자니가」
비난에 맞서 올바른 사유를 하려면 무엇이 필요한가 「파스칼 보이어」
우리는 어떻게 서로 의사소통을 하는가 「당 스페르베르」
무엇을 알아야 하고, 어떻게 배워야 하는가 「로저 섕크」
지금까지 아무도 생각하지 않았던 것을 어떻게 생각할 수 있는가 「윌리엄 캘빈」
어떻게 다른 관점을 받아들일 수 있는가 「니컬러스 험프리」
뇌와 정신에는 어떤 관계가 있을까 「스티븐 로즈」
정신이 뇌를 능가할 수 있는가 「하오 왕」

제5부 | 우 주
시간이란 무엇인가 「리 스몰린」
왜 아무도 빛보다 빨리 달릴 수 없을까 「대니얼 힐리스」
불가능에서 진실을 배울 수 있는가 「앨런 구스」
우주는 정말 대칭적인가 「이언 스튜어트」

제6부 | 미 래
사람이라는 종은 얼마나 지속될 수 있는가 「프리먼 다이슨」
지구의 상속자는 누가 될까 「나일스 엘드리지」
과학은 모든 의문에 답할 수 있는가 「마틴 리스」`,
        currentstate: true,
        location: [1], 
        bookSize: 3, 
        coverImage: 'https://shopping-phinf.pstatic.net/main_5335226/53352266374.20250305092051.jpg?type=w300'
      },
      {
        id: "5",
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        publisher: "O'Reilly Media",
        publishYear: "2015-12-28",
        genre: "JavaScript",
        summary: "Deep dive into JavaScript",
        tableOfContents: "JavaScript Essentials",
        currentstate: true,
        location: [3], 
        bookSize: 2, 
      },
      {
        id: "6",
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        publisher: "O'Reilly Media",
        publishYear: "2008-05-15",
        genre: "JavaScript",
        summary: "Unearthing the Excellence in JavaScript",
        tableOfContents: "JavaScript Must Read",
        currentstate: false,
        bookSize: 1, 
      },
      {
        id: "7",
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        publisher: "No Starch Press",
        publishYear: "2018-12-04",
        genre: "JavaScript",
        summary: "A Modern Introduction to Programming",
        tableOfContents: "Beginner Friendly",
        currentstate: true,
        location: [6], 
        bookSize: 1, 
      },
      {
        id: "8",
        title: "The Mythical Man-Month",
        author: "Frederick P. Brooks Jr.",
        publisher: "Addison-Wesley",
        publishYear: "1975-01-01",
        genre: "Software Engineering",
        summary: "Essays on Software Engineering",
        tableOfContents: "Classic Reads",
        currentstate: false,
        bookSize: 3, 
      },
      {
        id: "9",
        title: "Working Effectively with Legacy Code",
        author: "Michael Feathers",
        publisher: "Prentice Hall",
        publishYear: "2004-09-01",
        genre: "Software Engineering",
        summary: "Refactoring and maintaining old codebases",
        tableOfContents: "Essential for Developers",
        currentstate: true,
        location: [4], 
        bookSize: 2, 
      },
      {
        id: "10",
        title: "Code Complete",
        author: "Steve McConnell",
        publisher: "Microsoft Press",
        publishYear: "2004-06-19",
        genre: "Programming",
        summary: "A practical handbook of software construction",
        tableOfContents: "Best Practices",
        currentstate: false,
        bookSize: 1, 
      },
      {
        id: "11",
        title: "The Art of Computer Programming",
        author: "Donald Knuth",
        publisher: "Addison-Wesley",
        publishYear: "1968-01-01",
        genre: "Computer Science",
        summary: "A fundamental work on algorithms and programming techniques",
        tableOfContents: "Advanced Books",
        currentstate: true,
        location: [2], 
        bookSize: 3, 
      },
      {
        id: "12",
        title: "Introduction to the Theory of Computation",
        author: "Michael Sipser",
        publisher: "Cengage Learning",
        publishYear: "1996-01-01",
        genre: "Computer Science",
        summary: "A comprehensive introduction to computation theory",
        tableOfContents: "Theoretical CS",
        currentstate: false,
        bookSize: 2, 
      },
      {
        id: "13",
        title: "Deep Learning",
        author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
        publisher: "MIT Press",
        publishYear: "2016-11-18",
        genre: "Artificial Intelligence",
        summary: "An in-depth introduction to deep learning techniques",
        tableOfContents: "AI & ML",
        currentstate: true,
        location: [3], 
        bookSize: 2, 
      },
      {
        id: "14",
        title: "Artificial Intelligence: A Modern Approach",
        author: "Stuart Russell, Peter Norvig",
        publisher: "Pearson",
        publishYear: "2020-04-28",
        genre: "Artificial Intelligence",
        summary: "A comprehensive textbook on AI",
        tableOfContents: "AI & ML",
        currentstate: false,
        bookSize: 3, 
      },
      {
        id: "15",
        title: "Computer Networking: A Top-Down Approach",
        author: "James F. Kurose, Keith W. Ross",
        publisher: "Pearson",
        publishYear: "2020-03-20",
        genre: "Networking",
        summary: "Understanding networking from a top-down perspective",
        tableOfContents: "Networking Books",
        currentstate: true,
        location: [3], 
        bookSize: 1, 
      },
    ],
  };