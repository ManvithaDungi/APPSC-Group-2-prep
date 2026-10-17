// Mains Paper II, Section A: Indian economy (leaves 1-3).
export default {
  'structure-planning-policy': {
    notes: [
      { type: 'h', text: '1. National income' },
      { type: 'table', head: ['Term', 'Meaning'], rows: [
        ['GDP', 'Value of all final goods and services made inside the country in a year'],
        ['GNP', 'GDP + net income earned from abroad'],
        ['NNP', 'GNP − depreciation (wear of machines)'],
        ['Per capita income', 'National income ÷ population'],
      ] },
      { type: 'remember', title: 'Formulas', items: [
        'GNP = GDP + Net factor income from abroad.',
        'NNP = GNP − Depreciation.',
        'GDP at market price = GDP at factor cost + Indirect taxes − Subsidies.',
      ] },
      { type: 'ul', items: [
        'Three ways to measure: Production (value added), Income, and Expenditure method.',
        'In India, MoSPI’s National Statistics Office (NSO) publishes the estimates.',
        'Real GDP removes the effect of price rise. Nominal GDP does not.',
      ] },

      { type: 'h', text: '2. Sectors and jobs' },
      { type: 'ul', items: [
        'Primary: agriculture, mining. Secondary: industry. Tertiary: services.',
        'Services give the biggest share of GDP.',
        'Agriculture still employs the largest share of workers, but gives a small share of GDP.',
      ] },
      { type: 'changing', year: '2023–24', text: 'Exact shares change every year with new estimates.' },
      { type: 'h', text: '3. Growth and development' },
      { type: 'table', head: ['Economic growth', 'Economic development'], rows: [
        ['Rise in output or income', 'Better life: health, education, jobs, equality'],
        ['Measured by GDP', 'Measured by HDI and other indicators'],
        ['Narrow idea', 'Wider idea'],
      ] },

      { type: 'h', text: '4. Planning in India' },
      { type: 'timeline', items: [
        { when: '1950', what: 'Planning Commission is set up.' },
        { when: '1951–56', what: 'First Five Year Plan. Focus on agriculture and irrigation.' },
        { when: '1956–61', what: 'Second Plan. Mahalanobis model, heavy industry.' },
        { when: '2012–17', what: 'Twelfth and last Five Year Plan.' },
        { when: '1 Jan 2015', what: 'NITI Aayog replaces the Planning Commission.' },
      ] },
      { type: 'ul', items: [
        'NITI Aayog = National Institution for Transforming India. The Prime Minister is its Chairperson.',
        'It is a think tank. It gives advice. It does not give plan funds like the old Commission.',
        'It promotes cooperative federalism.',
      ] },

      { type: 'h', text: '5. New Economic Reforms, 1991' },
      { type: 'mnemonic', title: '1991 reforms', word: 'L · P · G', explain: 'Liberalisation, Privatisation, Globalisation.' },
      { type: 'ul', items: [
        'Cause: a serious balance of payments crisis in 1991.',
        'Prime Minister: P.V. Narasimha Rao. Finance Minister: Dr Manmohan Singh.',
        'Industrial licensing was ended for most industries.',
        'The rupee was devalued. Import duties were cut. FDI was welcomed.',
      ] },

      { type: 'h', text: '6. Decentralization of financial resources' },
      { type: 'ul', items: [
        'The Finance Commission (Article 280) shares Union taxes with States.',
        'The 14th Finance Commission gave States 42% of the divisible pool.',
        'The 15th Finance Commission (2021–26) gave 41%, since Jammu and Kashmir became a Union Territory.',
        'Local bodies get funds through State Finance Commissions.',
      ] },
      { type: 'tip', text: 'You see this every day: Central transfers, grants and State own revenue all pass through the Treasury.' },
    ],
    quick: [
      'GNP = GDP + net factor income from abroad. NNP = GNP − depreciation.',
      'Three methods of national income: production, income, expenditure.',
      'Planning Commission 1950; NITI Aayog 1 Jan 2015.',
      'First Plan 1951–56. Second Plan: Mahalanobis, heavy industry.',
      '1991: LPG reforms. Narasimha Rao and Manmohan Singh.',
      '15th Finance Commission: 41% share to States.',
    ],
    quiz: [
      { q: 'GNP is equal to:', options: ['GDP − depreciation', 'GDP + net factor income from abroad', 'NNP + subsidies', 'GDP − indirect taxes'], answer: 1, explain: 'GNP = GDP + net factor income from abroad.' },
      { q: 'NNP is equal to:', options: ['GNP − depreciation', 'GNP + depreciation', 'GDP − taxes', 'GDP + subsidies'], answer: 0, explain: 'NNP = GNP − depreciation.' },
      { q: 'How many methods are used to measure national income?', options: ['Two', 'Three', 'Four', 'Five'], answer: 1, explain: 'Production, income and expenditure.' },
      { q: 'The Planning Commission was set up in:', options: ['1947', '1950', '1951', '1956'], answer: 1, explain: '1950.' },
      { q: 'NITI Aayog replaced the Planning Commission in:', options: ['2010', '2014', '2015', '2017'], answer: 2, explain: 'On 1 January 2015.' },
      { q: 'The Chairperson of NITI Aayog is the:', options: ['President', 'Prime Minister', 'Finance Minister', 'Vice-Chairman'], answer: 1, explain: 'The Prime Minister.' },
      { q: 'The First Five Year Plan (1951–56) mainly stressed:', options: ['Heavy industry', 'Agriculture and irrigation', 'Defence', 'Services'], answer: 1, explain: 'Agriculture.' },
      { q: 'The Second Plan followed the model of:', options: ['Harrod-Domar', 'Mahalanobis', 'Gandhian', 'Rao-Singh'], answer: 1, explain: 'P.C. Mahalanobis; heavy industry.' },
      { q: 'The New Economic Reforms began in:', options: ['1981', '1985', '1991', '1999'], answer: 2, explain: '1991.' },
      { q: 'The Finance Minister during the 1991 reforms was:', options: ['Manmohan Singh', 'Yashwant Sinha', 'P. Chidambaram', 'Pranab Mukherjee'], answer: 0, explain: 'Dr Manmohan Singh.' },
      { q: 'LPG in the context of 1991 reforms stands for:', options: ['Liberalisation, Privatisation, Globalisation', 'Land, Property, Growth', 'Loan, Profit, Gain', 'Labour, Production, Goods'], answer: 0, explain: 'Liberalisation, Privatisation and Globalisation.' },
      { q: 'Which sector gives the largest share of India’s GDP?', options: ['Agriculture', 'Industry', 'Services', 'Mining'], answer: 2, explain: 'The services sector.' },
      { q: 'The Finance Commission is under Article:', options: ['148', '280', '315', '324'], answer: 1, explain: 'Article 280.' },
      { q: 'The 15th Finance Commission recommended what share of taxes for States?', options: ['32%', '40%', '41%', '42%'], answer: 2, explain: '41%. The 14th gave 42%.' },
      { q: 'Economic development differs from growth because it includes:', options: ['Only higher GDP', 'Health, education and equality', 'More taxes', 'Larger cities'], answer: 1, explain: 'Development covers quality of life.' },
    ],
  },

  'money-banking-finance': {
    notes: [
      { type: 'h', text: '1. Money supply' },
      { type: 'ul', items: [
        'M1 = currency with the public + demand deposits + other deposits with RBI.',
        'M3 = M1 + time deposits. M3 is called broad money.',
      ] },

      { type: 'h', text: '2. Reserve Bank of India (RBI)' },
      { type: 'ul', items: [
        'Started on 1 April 1935. Nationalised in 1949. Head office: Mumbai.',
        'The RBI prints currency notes (except ₹1, which the Finance Ministry issues).',
      ] },
      { type: 'flow', title: 'Functions of the RBI', chart: 'flowchart TD\n  A[RBI] --> B[Issues currency]\n  A --> C[Banker to the Government]\n  A --> D[Banker to banks]\n  A --> E[Controls credit and inflation]\n  A --> F[Keeps foreign exchange reserves]' },
      { type: 'table', caption: 'Tools of monetary policy', head: ['Tool', 'Meaning'], rows: [
        ['Repo rate', 'Rate at which RBI lends to banks'],
        ['Reverse repo rate', 'Rate at which RBI borrows from banks'],
        ['CRR', 'Share of deposits banks keep with the RBI as cash'],
        ['SLR', 'Share of deposits banks keep with themselves in cash, gold or government securities'],
        ['Open Market Operations', 'RBI buys or sells government bonds'],
      ] },
      { type: 'ul', items: [
        'Monetary Policy Committee (MPC) has 6 members: 3 from RBI and 3 outside. It was set up in 2016.',
        'It aims at CPI inflation of 4% with a band of 2% on either side.',
        'To fight inflation: raise rates. To grow the economy: lower rates.',
      ] },

      { type: 'h', text: '3. Indian banking' },
      { type: 'ul', items: [
        'Structure: RBI at the top, then commercial banks (public, private, foreign), regional rural banks, cooperative banks, small finance banks, payments banks.',
        '14 major banks were nationalised in 1969 and 6 more in 1980.',
        'Narasimham Committee (1991, 1998) gave reform ideas. Basel norms set capital rules.',
        'Pradhan Mantri Jan Dhan Yojana (2014) gave bank accounts to every household.',
      ] },

      { type: 'h', text: '4. Inflation' },
      { type: 'table', head: ['Type', 'Cause'], rows: [
        ['Demand-pull', 'Too much demand, too few goods'],
        ['Cost-push', 'Rise in costs of production'],
      ] },
      { type: 'ul', items: [
        'Measures: CPI (retail prices) and WPI (wholesale prices).',
        'Remedies: higher interest rates, less government spending, more supply of goods.',
      ] },

      { type: 'h', text: '5. Fiscal policy and public finance (Treasury view)' },
      { type: 'table', head: ['Deficit', 'Formula'], rows: [
        ['Revenue deficit', 'Revenue expenditure − Revenue receipts'],
        ['Fiscal deficit', 'Total expenditure − (Revenue receipts + non-debt capital receipts)'],
        ['Primary deficit', 'Fiscal deficit − Interest payments'],
      ] },
      { type: 'remember', text: 'Fiscal deficit = how much the government must borrow in a year. FRBM Act 2003 aims to reduce it.' },
      { type: 'ul', items: [
        'Article 112: Annual Financial Statement (the Budget).',
        'Article 266: Consolidated Fund and Public Account. Article 267: Contingency Fund.',
        'The Union Budget is presented on 1 February.',
        'Direct taxes: income tax, corporation tax. Indirect taxes: GST, customs.',
      ] },

      { type: 'h', text: '6. GST' },
      { type: 'ul', items: [
        'GST began on 1 July 2017 (101st Amendment).',
        'One nation, one tax. It replaced many Central and State indirect taxes.',
        'Types: CGST (Centre), SGST (State), IGST (between States), UTGST (Union Territories).',
        'The GST Council (Article 279A) decides rates. It has the Union Finance Minister as Chairperson.',
      ] },
      { type: 'changing', year: '2025', text: 'GST rate slabs were simplified in 2025. Union Budget figures change every year.' },

      { type: 'h', text: '7. Balance of payments and FDI' },
      { type: 'ul', items: [
        'BoP = record of all money coming in and going out of the country.',
        'It has a current account (trade, services, transfers) and a capital account (loans, investment).',
        'FDI = investment by a foreign company in a business inside India.',
      ] },
    ],
    quick: [
      'RBI: 1935, nationalised 1949, Mumbai.',
      'Repo = RBI lends. CRR = cash with RBI. SLR = with banks themselves.',
      'MPC: 6 members, inflation target 4% ± 2%.',
      'Banks nationalised: 1969 (14), 1980 (6).',
      'Fiscal deficit = total expenditure − (revenue receipts + non-debt capital receipts).',
      'Art 112 Budget, Art 266 Consolidated Fund, Art 267 Contingency Fund.',
      'GST: 1 July 2017, GST Council Article 279A.',
    ],
    quiz: [
      { q: 'The RBI was established in:', options: ['1925', '1935', '1949', '1955'], answer: 1, explain: 'On 1 April 1935.' },
      { q: 'The RBI was nationalised in:', options: ['1935', '1947', '1949', '1969'], answer: 2, explain: '1949.' },
      { q: 'The rate at which the RBI lends to banks is the:', options: ['Repo rate', 'Reverse repo rate', 'Bank deposit rate', 'CRR'], answer: 0, explain: 'Repo rate.' },
      { q: 'CRR is the share of deposits that banks keep:', options: ['As gold with themselves', 'In cash with the RBI', 'As loans', 'In government securities'], answer: 1, explain: 'Cash reserve with the RBI.' },
      { q: 'How many members are there in the Monetary Policy Committee?', options: ['3', '5', '6', '9'], answer: 2, explain: 'Six members.' },
      { q: 'Which index is the RBI’s inflation target based on?', options: ['WPI', 'CPI', 'GDP deflator', 'IIP'], answer: 1, explain: 'Consumer Price Index.' },
      { q: 'M3 equals:', options: ['M1 + time deposits', 'M1 − time deposits', 'Currency only', 'Demand deposits only'], answer: 0, explain: 'M3 is broad money.' },
      { q: 'Fourteen major banks were nationalised in:', options: ['1949', '1955', '1969', '1980'], answer: 2, explain: '1969, and 6 more in 1980.' },
      { q: 'Fiscal deficit means:', options: ['Revenue expenditure − revenue receipts', 'Total expenditure − (revenue receipts + non-debt capital receipts)', 'Exports − imports', 'Taxes − subsidies'], answer: 1, explain: 'It is the borrowing need of the government.' },
      { q: 'Primary deficit equals:', options: ['Fiscal deficit − interest payments', 'Fiscal deficit + interest payments', 'Revenue deficit + capital', 'Revenue deficit − capital'], answer: 0, explain: 'Fiscal deficit minus interest.' },
      { q: 'The FRBM Act was passed in:', options: ['1991', '2000', '2003', '2008'], answer: 2, explain: 'Fiscal Responsibility and Budget Management Act, 2003.' },
      { q: 'The Annual Financial Statement (Union Budget) is described in Article:', options: ['112', '148', '266', '280'], answer: 0, explain: 'Article 112.' },
      { q: 'The Contingency Fund of India is under Article:', options: ['266', '267', '268', '280'], answer: 1, explain: 'Article 267.' },
      { q: 'GST started on:', options: ['1 April 2016', '1 July 2017', '1 Feb 2018', '1 April 2019'], answer: 1, explain: '1 July 2017.' },
      { q: 'IGST is charged on:', options: ['Sales within a State', 'Trade between States', 'Imports of gold only', 'Income'], answer: 1, explain: 'Inter-State supply.' },
    ],
  },

  'agri-industry-services': {
    notes: [
      { type: 'h', text: '1. Indian agriculture' },
      { type: 'ul', items: [
        'Cropping pattern: Kharif (monsoon), Rabi (winter), Zaid (summer).',
        'The Green Revolution (1960s) raised wheat and rice output with high-yield seeds. M.S. Swaminathan is called its father in India.',
        'The White Revolution (Operation Flood) raised milk output. Verghese Kurien led it.',
        'Productivity means output per hectare.',
      ] },
      { type: 'h', text: '2. Agricultural finance and marketing' },
      { type: 'ul', items: [
        'NABARD was set up in 1982. It gives refinance to rural banks.',
        'Kisan Credit Card (KCC) from 1998 gives easy farm loans.',
        'Pradhan Mantri Fasal Bima Yojana (2016) gives crop insurance.',
        'e-NAM (2016) is an online market for farm products.',
        'APMC mandis are regulated markets run by States.',
      ] },
      { type: 'h', text: '3. MSP, procurement and issue price' },
      { type: 'flow', title: 'From MSP to your ration shop', chart: 'flowchart LR\n  A[CACP advises] --> B[Government announces MSP]\n  B --> C[FCI buys grain: procurement]\n  C --> D[Stored in godowns]\n  D --> E[Sold at issue price through PDS]' },
      { type: 'ul', items: [
        'CACP (Commission for Agricultural Costs and Prices) advises on MSP.',
        'The Cabinet Committee on Economic Affairs (CCEA) approves MSP.',
        'FCI (Food Corporation of India, 1965) buys and stores grain.',
        'Central Issue Price is the lower price at which grain is given to States for PDS.',
      ] },
      { type: 'remember', text: 'MSP = Minimum Support Price, a floor price promised to farmers.' },

      { type: 'h', text: '4. Industry' },
      { type: 'table', head: ['Policy', 'Key idea'], rows: [
        ['Industrial Policy 1956', 'Public sector leads; “socialistic pattern”'],
        ['New Industrial Policy 1991', 'End of licensing, FDI welcomed, less public sector reservation'],
        ['Make in India (2014)', 'Promote manufacturing in India'],
      ] },
      { type: 'ul', items: [
        'Disinvestment = government sells part of its shares in public companies.',
        'Ease of Doing Business: faster approvals, fewer rules.',
        'Industrial sickness: a unit keeps losing money. Causes include poor management and lack of funds.',
        'Insolvency and Bankruptcy Code (IBC), 2016 deals with failed firms.',
      ] },
      { type: 'h', text: '5. Services sector' },
      { type: 'ul', items: [
        'Services include IT, banking, trade, transport, tourism and education.',
        'Services are the largest part of GDP.',
        'IT and ITES (call centres, back-office work) bring export earnings and jobs.',
        'Software Technology Parks of India (STPI) were set up in 1991.',
      ] },
    ],
    quick: [
      'Green Revolution: wheat and rice, Swaminathan.',
      'Operation Flood: Verghese Kurien.',
      'NABARD 1982. KCC 1998. PMFBY 2016. e-NAM 2016.',
      'CACP advises MSP. FCI procures. PDS sells at issue price.',
      'New Industrial Policy 1991 ended licensing.',
      'IBC 2016. STPI 1991.',
    ],
    quiz: [
      { q: 'The Green Revolution mainly improved the output of:', options: ['Wheat and rice', 'Tea and coffee', 'Cotton and jute', 'Milk and eggs'], answer: 0, explain: 'High-yield seeds raised wheat and rice.' },
      { q: 'Operation Flood is linked with:', options: ['Milk', 'Fish', 'Wheat', 'Oilseeds'], answer: 0, explain: 'Milk, under Verghese Kurien.' },
      { q: 'NABARD was established in:', options: ['1969', '1975', '1982', '1991'], answer: 2, explain: '1982.' },
      { q: 'Kisan Credit Card was launched in:', options: ['1988', '1998', '2008', '2016'], answer: 1, explain: '1998.' },
      { q: 'PM Fasal Bima Yojana is a scheme for:', options: ['Crop insurance', 'Home loans', 'Pension', 'Fuel subsidy'], answer: 0, explain: 'Crop insurance, since 2016.' },
      { q: 'e-NAM is:', options: ['An online national agriculture market', 'A fertiliser', 'A bank', 'A seed variety'], answer: 0, explain: 'Electronic National Agriculture Market.' },
      { q: 'Which body advises the government on MSP?', options: ['CACP', 'NITI Aayog', 'RBI', 'SEBI'], answer: 0, explain: 'The Commission for Agricultural Costs and Prices.' },
      { q: 'Procurement of food grain is mainly done by:', options: ['NABARD', 'FCI', 'RBI', 'SIDBI'], answer: 1, explain: 'Food Corporation of India.' },
      { q: 'The price at which grain is given to States for PDS is called the:', options: ['MSP', 'Central Issue Price', 'Market price', 'Export price'], answer: 1, explain: 'Central Issue Price.' },
      { q: 'The New Industrial Policy was announced in:', options: ['1956', '1977', '1991', '2001'], answer: 2, explain: 'On 24 July 1991.' },
      { q: 'Disinvestment means:', options: ['Government sells part of its shares in public companies', 'Government buys private companies', 'Closing a factory', 'Raising taxes'], answer: 0, explain: 'It reduces the State’s holding.' },
      { q: 'The Insolvency and Bankruptcy Code was enacted in:', options: ['2006', '2012', '2016', '2020'], answer: 2, explain: '2016.' },
      { q: 'Make in India was launched in:', options: ['2010', '2012', '2014', '2018'], answer: 2, explain: '2014.' },
      { q: 'Which sector contributes the most to India’s GDP?', options: ['Agriculture', 'Industry', 'Services', 'Mining'], answer: 2, explain: 'Services.' },
      { q: 'The Food Corporation of India was set up in:', options: ['1955', '1965', '1975', '1985'], answer: 1, explain: '1965.' },
    ],
  },
};
