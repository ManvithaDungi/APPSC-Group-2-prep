// CURRENT AFFAIRS: update monthly. Newest items go at the TOP of each "items" list.
// Item format:
//   { date: '2026-10-07', headline: '...', keyPoints: ['...'], category: 'National',
//     sources: [{ name: 'Site name', url: 'https://...' }] }
// Last checked: 17 October 2026. Most sources are news and exam-prep sites, not official
// releases. Before the exam, confirm key facts on PIB, RBI, nobelprize.org and AP government sites.
export default {
  international: {
    updated: '2026-10-17',
    items: [
      {
        date: '2026-10-05 to 2026-10-12',
        category: 'International',
        headline: 'Nobel Prizes 2026 announced',
        keyPoints: [
          'Medicine: Karl Deisseroth, Peter Hegemann and Georg Nagel, for light-gated ion channels and optogenetics.',
          'Physics: Francis Halzen, for the IceCube Neutrino Observatory (high-energy neutrinos).',
          'Chemistry: Henri B. Kagan and Kenso Soai, for non-linear effects and autocatalysis in asymmetric synthesis.',
          'Literature: Anne Carson.',
          'Peace: Navanethem (Navi) Pillay, for work on international law and justice.',
          'Economic Sciences: Robert E. Hall and Michael Woodford, for the microeconomic foundations of macroeconomic stabilisation.',
        ],
        sources: [
          { name: 'Adda247', url: 'https://currentaffairs.adda247.com/2026-nobel-prize-winners-categories-wise-complete-winners-list/amp/' },
          { name: 'Vajiram & Ravi', url: 'https://vajiramandravi.com/current-affairs/?p=127782' },
        ],
      },
      {
        date: '2026-10-05 to 2026-10-07',
        category: 'International',
        headline: 'Swiss President Guy Parmelin visits India; 2nd India-EFTA Prosperity Summit',
        keyPoints: [
          'Three-day state visit at PM Modi’s invitation.',
          'The summit at Bharat Mandapam marked one year of the India-EFTA TEPA (in force from 1 October 2025).',
          'Five agreements were signed on mobility, and science and technology.',
        ],
        sources: [{ name: 'AffairsCloud (13 Oct 2026)', url: 'https://affairscloud.com/?p=336660' }],
      },
      {
        date: '2026-10-06 to 2026-10-10',
        category: 'International',
        headline: 'EAM S. Jaishankar visits Ghana, Côte d’Ivoire and Ethiopia',
        keyPoints: [
          'Five-day official visit to three African countries.',
          'In Ghana, two MoUs were formalised: agriculture and zoological research.',
          'India will hold the next Jaipur Artificial Limb Fitment camp in Ethiopia.',
        ],
        sources: [{ name: 'AffairsCloud (13 Oct 2026)', url: 'https://affairscloud.com/?p=336660' }],
      },
      {
        date: '2026-09-12 to 2026-09-13',
        category: 'International',
        headline: '18th BRICS Summit in New Delhi adopts the New Delhi Declaration',
        keyPoints: [
          'India held the BRICS chair in 2026. The summit was in New Delhi.',
          'Leaders adopted the New Delhi Declaration by consensus on 12 September.',
          'It condemned terrorism in all forms and called for reform of global institutions such as the UN Security Council.',
        ],
        sources: [
          { name: 'SAnews (South Africa)', url: 'https://www.sanews.gov.za/node/84282' },
          { name: 'The Week', url: 'https://www.theweek.in/news/india/2026/09/12/major-diplomatic-win-for-india-at-brics-new-delhi-declaration-adopted-with-full-consensus-on-20th-anniversary.html' },
        ],
      },
      {
        date: '2026-10-02',
        category: 'International',
        headline: 'Asian Games 2026 (Aichi-Nagoya, Japan): India’s women’s hockey team wins gold',
        keyPoints: [
          'Games held 19 September to 4 October 2026.',
          'India beat China 1-0 in the women’s hockey final: first Asian Games gold since 1982.',
          'India also won gold in women’s recurve team archery, beating South Korea 5-3.',
        ],
        sources: [{ name: 'Barristery daily digest (2 Oct 2026)', url: 'https://www.barristery.in/2026/10/daily-current-affairs-2-october-2026.html' }],
      },
    ],
    quiz: [
      { q: 'The 2026 Nobel Prize in Physiology or Medicine was awarded for discoveries about:', options: ['mRNA vaccines', 'Light-gated ion channels and optogenetics', 'Gene editing', 'The gut microbiome'], answer: 1, explain: 'Karl Deisseroth, Peter Hegemann and Georg Nagel won it.' },
      { q: 'Who won the 2026 Nobel Prize in Physics?', options: ['Francis Halzen', 'Roger Penrose', 'Kip Thorne', 'Pierre Agostini'], answer: 0, explain: 'Francis Halzen, for work on the IceCube Neutrino Observatory.' },
      { q: 'The IceCube Neutrino Observatory is located in:', options: ['Greenland', 'Antarctica', 'Siberia', 'Iceland'], answer: 1, explain: 'IceCube is built in the ice at the South Pole, Antarctica.' },
      { q: 'The 2026 Nobel Prize in Chemistry honoured work on:', options: ['Asymmetric organic synthesis', 'Lithium-ion batteries', 'Click chemistry', 'Protein folding'], answer: 0, explain: 'Henri B. Kagan and Kenso Soai shared it.' },
      { q: 'The 2026 Nobel Prize in Literature went to:', options: ['Anne Carson', 'Han Kang', 'Jon Fosse', 'Annie Ernaux'], answer: 0, explain: 'Anne Carson.' },
      { q: 'The 2026 Nobel Peace Prize was awarded to:', options: ['Navanethem Pillay', 'Malala Yousafzai', 'Maria Ressa', 'Abiy Ahmed'], answer: 0, explain: 'Navi Pillay, for work on international law and justice.' },
      { q: 'The 2026 Prize in Economic Sciences went to Robert E. Hall and:', options: ['Michael Woodford', 'Paul Krugman', 'Daron Acemoglu', 'Esther Duflo'], answer: 0, explain: 'For the microeconomic foundations of macroeconomic stabilisation.' },
      { q: 'The 18th BRICS Summit (September 2026) was held in:', options: ['New Delhi', 'Brasilia', 'Johannesburg', 'Kazan'], answer: 0, explain: 'India held the 2026 BRICS chair.' },
      { q: 'The BRICS leaders in 2026 adopted the:', options: ['New Delhi Declaration', 'Kazan Declaration', 'Johannesburg Declaration', 'Bharat Mandapam Pact'], answer: 0, explain: 'It was adopted by consensus on 12 September.' },
      { q: 'Which Swiss leader made a state visit to India on 5–7 October 2026?', options: ['Guy Parmelin', 'Ignazio Cassis', 'Alain Berset', 'Viola Amherd'], answer: 0, explain: 'President Guy Parmelin.' },
      { q: 'The India-EFTA TEPA came into force on:', options: ['1 October 2025', '1 April 2024', '15 August 2025', '1 January 2026'], answer: 0, explain: 'The 2nd Prosperity Summit marked its first anniversary.' },
      { q: 'Which country is NOT a member of EFTA?', options: ['Norway', 'Iceland', 'Germany', 'Liechtenstein'], answer: 2, explain: 'EFTA members: Switzerland, Norway, Iceland and Liechtenstein.' },
      { q: 'Asian Games 2026 were hosted by:', options: ['Aichi-Nagoya, Japan', 'Hangzhou, China', 'Doha, Qatar', 'Jakarta, Indonesia'], answer: 0, explain: '19 September to 4 October 2026.' },
      { q: 'India’s women’s hockey team’s 2026 Asian Games gold was its first since:', options: ['1982', '1998', '2006', '2014'], answer: 0, explain: 'They beat China 1-0 in the final.' },
      { q: 'During his 6–10 October 2026 Africa tour, EAM Jaishankar visited Ghana, Côte d’Ivoire and:', options: ['Ethiopia', 'Kenya', 'Nigeria', 'Egypt'], answer: 0, explain: 'India will hold a Jaipur Foot camp in Ethiopia.' },
    ],
  },

  national: {
    updated: '2026-10-17',
    items: [
      {
        date: '2026-10-07',
        category: 'National',
        headline: 'RBI raises repo rate by 25 bps to 5.50%',
        keyPoints: [
          'Outcome of the 63rd MPC meeting (5–7 October 2026), chaired by Governor Sanjay Malhotra.',
          'Repo rate: 5.50%. SDF rate: 5.25%. MSF rate and Bank Rate: 5.75%.',
          'Stance changed from “neutral” to “calibrated tightening”.',
          'Reported to be the first rate hike since February 2023.',
          'RBI projects real GDP growth of 7.1% for 2026-27.',
        ],
        sources: [
          { name: 'SCC Online', url: 'https://www.scconline.com/blog/post/2026/10/09/rbi-hikes-repo-rate-to-5-50-percent-october-2026/' },
          { name: '5paisa', url: 'https://www.5paisa.com/index.php/blog/rbi-mpc-meeting-schedule' },
        ],
      },
      {
        date: '2026-10-08',
        category: 'National',
        headline: '57th GST Council meeting held in New Delhi',
        keyPoints: [
          'Chaired by Union Finance Minister Nirmala Sitharaman.',
          'Recommendations covered registration, returns, refunds, adjudication and trade facilitation.',
          'The earlier 56th meeting dealt with rate rationalisation.',
        ],
        sources: [{ name: 'AffairsCloud (13 Oct 2026)', url: 'https://affairscloud.com/?p=336660' }],
      },
      {
        date: '2026-10-01',
        category: 'National',
        headline: 'September 2026 GST collections about ₹2.04 lakh crore',
        keyPoints: [
          'Gross collections rose 14.7% year on year.',
          'Third month in a row above ₹2 lakh crore.',
          'Domestic GST grew 10.1% and import-related GST grew 25.9%.',
        ],
        sources: [{ name: 'Barristery daily digest (2 Oct 2026)', url: 'https://www.barristery.in/2026/10/daily-current-affairs-2-october-2026.html' }],
      },
      {
        date: '2026-10-11',
        category: 'National',
        headline: 'PM Modi launches projects worth over ₹13,000 crore in Tamil Nadu',
        keyPoints: [
          'Projects covered metro rail, highways, railways, ports, petroleum and education.',
          'Inaugurated the Poonamallee–Vadapalani stretch of Chennai Metro Corridor 4 (14.64 km, 11 stations).',
          'Railway works worth over ₹750 crore were also dedicated or inaugurated.',
        ],
        sources: [{ name: 'AffairsCloud (13 Oct 2026)', url: 'https://affairscloud.com/?p=336660' }],
      },
      {
        date: '2026-10-08',
        category: 'National',
        headline: 'MoSPI releases Strategy for Environmental Economic Accounts, 2026–2030',
        keyPoints: [
          'Issued by the Ministry of Statistics and Programme Implementation.',
          'Aims to build environment-linked national accounts (natural resources and the economy).',
        ],
        sources: [{ name: 'AffairsCloud (13 Oct 2026)', url: 'https://affairscloud.com/?p=336660' }],
      },
      {
        date: '2026-10 (early)',
        category: 'National',
        headline: 'GRSE launches INS Shreyas, third Next Generation Offshore Patrol Vessel',
        keyPoints: [
          'Built by Garden Reach Shipbuilders & Engineers, Kolkata.',
          'Third of four NGOPVs. About 113 m long, 3,000 tonnes, endurance 8,500 nautical miles.',
        ],
        sources: [{ name: 'AffairsCloud (13 Oct 2026)', url: 'https://affairscloud.com/?p=336660' }],
      },
      {
        date: '2026-10-02',
        category: 'National',
        headline: 'Cabinet approves ₹23,731 crore framework for compressed biogas (GOBARdhan)',
        keyPoints: [
          'Covers FY 2026-27 to FY 2035-36.',
          'Administered CBG price: ₹2,110 per MMBTU.',
        ],
        sources: [{ name: 'Barristery daily digest (2 Oct 2026)', url: 'https://www.barristery.in/2026/10/daily-current-affairs-2-october-2026.html' }],
      },
    ],
    quiz: [
      { q: 'After the October 2026 MPC meeting, the RBI’s repo rate is:', options: ['5.50%', '5.25%', '6.00%', '4.50%'], answer: 0, explain: 'The RBI raised it by 25 basis points to 5.50%.' },
      { q: 'The RBI Governor who chaired the October 2026 MPC meeting is:', options: ['Sanjay Malhotra', 'Shaktikanta Das', 'Urjit Patel', 'Raghuram Rajan'], answer: 0, explain: 'Sanjay Malhotra.' },
      { q: 'The MPC changed its stance in October 2026 to:', options: ['Calibrated tightening', 'Accommodative', 'Neutral', 'Withdrawal of accommodation'], answer: 0, explain: 'It moved from neutral to calibrated tightening.' },
      { q: 'The Standing Deposit Facility (SDF) rate after the October 2026 policy is:', options: ['5.25%', '5.50%', '5.75%', '6.00%'], answer: 0, explain: 'SDF 5.25%; MSF and Bank Rate 5.75%.' },
      { q: 'After the October 2026 policy, the MSF rate and Bank Rate are:', options: ['5.75%', '5.25%', '5.50%', '6.25%'], answer: 0, explain: 'Both are 5.75%.' },
      { q: 'RBI’s real GDP growth projection for 2026-27 (October 2026) is:', options: ['7.1%', '6.5%', '7.8%', '8.2%'], answer: 0, explain: 'RBI projected 7.1%.' },
      { q: 'The October 2026 repo hike is described as the first hike since:', options: ['February 2023', 'May 2022', 'December 2019', 'April 2024'], answer: 0, explain: 'The last hike before it was in February 2023.' },
      { q: 'The GST Council is chaired by:', options: ['Union Finance Minister', 'Prime Minister', 'RBI Governor', 'Finance Secretary'], answer: 0, explain: 'Nirmala Sitharaman chaired the 57th meeting on 8 October 2026.' },
      { q: 'The GST Council is created under Article:', options: ['279A', '280', '266', '293'], answer: 0, explain: 'Article 279A (101st Amendment).' },
      { q: 'Gross GST collections in September 2026 were about:', options: ['₹2.04 lakh crore', '₹1.50 lakh crore', '₹2.80 lakh crore', '₹1.00 lakh crore'], answer: 0, explain: 'Up 14.7% year on year.' },
      { q: 'The Poonamallee–Vadapalani stretch opened in October 2026 is part of which metro system?', options: ['Chennai Metro', 'Bengaluru Metro', 'Hyderabad Metro', 'Kochi Metro'], answer: 0, explain: 'Chennai Metro Corridor 4.' },
      { q: 'Strategy for Environmental Economic Accounts, 2026–2030 was released by:', options: ['MoSPI', 'RBI', 'NITI Aayog', 'Ministry of Finance'], answer: 0, explain: 'The Ministry of Statistics and Programme Implementation.' },
      { q: 'INS Shreyas, launched in October 2026, is a:', options: ['Next Generation Offshore Patrol Vessel', 'Aircraft carrier', 'Submarine', 'Destroyer'], answer: 0, explain: 'Third of four NGOPVs built by GRSE.' },
      { q: 'GRSE, builder of INS Shreyas, is based in:', options: ['Kolkata', 'Mumbai', 'Visakhapatnam', 'Kochi'], answer: 0, explain: 'Garden Reach Shipbuilders & Engineers, Kolkata.' },
      { q: 'The Cabinet’s 2026 national framework for compressed biogas falls under which scheme?', options: ['GOBARdhan', 'PM-KUSUM', 'Ujjwala', 'Swachh Bharat Urban'], answer: 0, explain: '₹23,731 crore for FY 2026-27 to FY 2035-36.' },
    ],
  },

  'andhra-pradesh': {
    updated: '2026-10-17',
    items: [
      {
        date: '2026-10-07',
        category: 'Andhra Pradesh',
        headline: 'AP Cabinet approves 12 agenda items',
        keyPoints: [
          'Chaired by Chief Minister N. Chandrababu Naidu.',
          'APHIMS (Horticulture Information and Management System): ₹20.62 crore, 72 months.',
          'Gratuity for ASHA workers who die in service: ₹5,000 per year of service, capped at ₹1.50 lakh.',
          'Repalle CHC (30 beds) to be upgraded to a 100-bed Area Hospital: ₹58.42 crore, 66 new posts.',
          'Centre of Excellence for tribal students at Marikavalasa, Visakhapatnam: coaching for IIT-JEE and NEET.',
          'Amendments to the AP Education Act, 1982.',
          'Thalliki Vandanam guidelines for 2026-27 ratified.',
        ],
        sources: [{ name: 'The Hans India', url: 'https://www.thehansindia.com/andhra-pradesh/ap-cabinet-approves-12-agenda-items-1129904' }],
      },
      {
        date: '2026-10-07',
        category: 'Andhra Pradesh',
        headline: 'AP policy on foreign higher educational institutions and private universities, 2026',
        keyPoints: [
          'Approved by the State Cabinet on 7 October 2026.',
          'Covers how campuses of foreign institutions and private universities can be set up, with incentives and facilities.',
        ],
        sources: [{ name: 'The Hans India', url: 'https://www.thehansindia.com/andhra-pradesh/ap-cabinet-approves-12-agenda-items-1129904' }],
      },
      {
        date: '2026-07',
        category: 'Andhra Pradesh',
        headline: 'Polavaram project: completion target March 2027',
        keyPoints: [
          'CM Chandrababu Naidu reaffirmed in July 2026 that Polavaram will be completed and dedicated to the nation by March 2027.',
          'A target of releasing Godavari water to Anakapalli through the Left Main Canal on 14 August 2026 was announced. Check whether this was achieved.',
        ],
        sources: [{ name: 'UNI India', url: 'https://test.uniindia.com/ap-cm-polavaram-project-will-be-completed-by-march-2027/south/news/3909814.html' }],
      },
    ],
    quiz: [
      { q: 'The AP Cabinet meeting that approved 12 agenda items was chaired by:', options: ['N. Chandrababu Naidu', 'Y.S. Jagan Mohan Reddy', 'Pawan Kalyan', 'N. Lokesh'], answer: 0, explain: 'Chief Minister N. Chandrababu Naidu, on 7 October 2026.' },
      { q: 'APHIMS stands for:', options: ['Horticulture Information and Management System', 'Health Information Management System', 'Highways Information Monitoring System', 'Handloom Industry Marketing System'], answer: 0, explain: 'Approved with an outlay of ₹20.62 crore.' },
      { q: 'The maximum gratuity for ASHA workers who die in service (AP Cabinet, Oct 2026) is:', options: ['₹1.50 lakh', '₹5 lakh', '₹50,000', '₹10 lakh'], answer: 0, explain: '₹5,000 per year of service, capped at ₹1.50 lakh.' },
      { q: 'The AP Cabinet approved upgrading the Repalle CHC to a:', options: ['100-bed Area Hospital', '50-bed hospital', 'Medical college', 'District hospital'], answer: 0, explain: '₹58.42 crore with 66 additional posts.' },
      { q: 'The Repalle Community Health Centre had how many beds before the upgrade?', options: ['30', '50', '10', '100'], answer: 0, explain: 'It is a 30-bed CHC.' },
      { q: 'The Marikavalasa Centre of Excellence in Visakhapatnam is for:', options: ['Tribal students (IIT-JEE and NEET coaching)', 'Farmers training', 'Fishermen', 'Civil services only'], answer: 0, explain: 'An intensive residential coaching centre for tribal students.' },
      { q: 'In October 2026 the AP Cabinet approved amendments to which Act?', options: ['AP Education Act, 1982', 'AP Land Reforms Act', 'AP Panchayat Raj Act 1994', 'AP Reorganisation Act'], answer: 0, explain: 'The AP Education Act, 1982.' },
      { q: 'The 2026 AP policy approved by the Cabinet covers:', options: ['Foreign higher educational institutions and private universities', 'Electric vehicles', 'Tourism', 'Fisheries'], answer: 0, explain: 'It sets rules and incentives for such campuses.' },
      { q: 'Thalliki Vandanam is a scheme linked to:', options: ['Support for mothers of school-going children', 'Crop insurance', 'Housing for the poor', 'Pensions for the elderly'], answer: 0, explain: 'The cabinet ratified its 2026-27 guidelines.' },
      { q: 'The announced completion target for the Polavaram project is:', options: ['March 2027', 'December 2025', 'June 2030', 'March 2026'], answer: 0, explain: 'As reaffirmed by the CM in July 2026.' },
      { q: 'Polavaram project is built on the river:', options: ['Godavari', 'Krishna', 'Penna', 'Tungabhadra'], answer: 0, explain: 'It is a multipurpose project on the Godavari river.' },
      { q: 'The Polavaram Left Main Canal supplies water towards:', options: ['Visakhapatnam region (Anakapalli)', 'Kurnool', 'Nellore', 'Anantapur'], answer: 0, explain: 'The Left Main Canal goes towards the north coastal districts.' },
    ],
  },
};
