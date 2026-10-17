// Mental Ability notes and quizzes. Data Analysis questions use rendered charts and tables.
const SHOPS = {
  type: 'table',
  title: 'Units sold by three shops',
  head: ['Shop', 'Jan', 'Feb', 'Mar'],
  rows: [['A', 120, 150, 130], ['B', 100, 110, 140], ['C', 90, 80, 100]],
};
const RICE = { type: 'bar', title: 'Rice production (lakh tonnes)', labels: ['2019', '2020', '2021', '2022'], values: [40, 50, 45, 60] };
const TEMP = { type: 'line', title: 'Maximum temperature (°C) in one week', labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], values: [28, 30, 32, 30, 30] };
const BUDGET = { type: 'pie', title: 'Monthly spending of a family (total ₹40,000)', labels: ['Food', 'Rent', 'Education', 'Savings', 'Others'], values: [30, 25, 20, 15, 10] };

export default {
  'logical-reasoning': {
    notes: [
      { type: 'h', text: '1. Three kinds of reasoning' },
      { type: 'table', head: ['Kind', 'Direction', 'Example'], rows: [
        ['Deductive', 'General rule → one case. The answer is certain.', 'All birds have wings. A crow is a bird. So a crow has wings.'],
        ['Inductive', 'Many cases → a general rule. The answer is only likely.', 'The sun rose every day I saw. So it rises every day.'],
        ['Abductive', 'Facts → the best explanation.', 'The road is wet. Best guess: it rained.'],
      ] },
      { type: 'mnemonic', title: 'Direction of reasoning', word: 'De-duce = Down', explain: 'Deductive goes down from rule to case. Inductive goes up from cases to a rule.' },

      { type: 'h', text: '2. Statement and Assumptions' },
      { type: 'ul', items: [
        'An assumption is something taken for granted. It is not said in the statement.',
        'Ask: “Must this be true for the statement to make sense?”',
        'Words like “all”, “only”, “always” in an assumption are usually wrong.',
      ] },
      { type: 'example', q: 'Statement: “Wear a helmet while riding.” I. Helmets protect the head. II. Everyone owns a helmet.', steps: ['Is I needed for the advice to make sense? Yes.', 'Is II needed? No. The advice does not say everyone owns one.'], answer: 'Only I is implicit.' },

      { type: 'h', text: '3. Statement and Argument' },
      { type: 'ul', items: [
        'A strong argument is about the main point, gives a real reason, and is practical.',
        'A weak argument is only about feelings, likes or dislikes, or is far from the point.',
      ] },
      { type: 'example', q: 'Should cigarette sale be banned? I. Yes, smoking causes diseases. II. No, some people like it.', steps: ['I gives a serious health reason. Strong.', 'II is just a liking. Weak.'], answer: 'Only I is strong.' },

      { type: 'h', text: '4. Statement and Conclusion' },
      { type: 'ul', items: [
        'Use only what the statements say. Ignore outside knowledge.',
        'Draw small circles (Venn diagrams) for “all”, “some” and “no”.',
        '“Some” means at least one. “All A are B” does not mean “All B are A”.',
      ] },
      { type: 'flow', title: 'All roses are flowers. All flowers are plants.', chart: 'flowchart LR\n  A[Roses] --> B[Flowers] --> C[Plants]' },
      { type: 'remember', text: 'All A are B and All B are C → All A are C, and Some C are B. Both follow.' },

      { type: 'h', text: '5. Statement and Course of Action' },
      { type: 'ul', items: [
        'A course of action is a step to fix a problem.',
        'A good course is practical, helpful and reasonable.',
        'Extreme steps (“ban everything”, “punish all”) are usually wrong.',
      ] },
    ],
    quick: [
      'Deductive: rule to case (certain). Inductive: cases to rule (likely). Abductive: best explanation.',
      'Assumption: must be true for the statement to make sense.',
      'Strong argument: relevant, real reason. Weak: opinion or extreme.',
      'Conclusion: use only the given statements. “Some” = at least one.',
      'Course of action: practical and helpful, not extreme.',
    ],
    quiz: [
      { q: 'Reasoning from a general rule to a particular case is:', options: ['Inductive', 'Deductive', 'Abductive', 'Analogical'], answer: 1, explain: 'Deduction goes from the general to the particular.' },
      { q: 'Reasoning from many observed cases to a general rule is:', options: ['Inductive', 'Deductive', 'Abductive', 'Formal'], answer: 0, explain: 'Induction builds a general rule from cases.' },
      { q: 'Choosing the most likely explanation for the facts is:', options: ['Deductive', 'Inductive', 'Abductive', 'Direct'], answer: 2, explain: 'That is abduction (inference to the best explanation).' },
      { q: 'If it rains, the ground is wet. It rained. So:', options: ['The ground is wet', 'The ground is dry', 'It will rain again', 'No conclusion'], answer: 0, explain: 'This is a valid deduction.' },
      { q: 'The grass is wet this morning. The best explanation is:', options: ['A volcano erupted', 'It rained or dew fell in the night', 'The sun was very hot', 'The grass was painted'], answer: 1, explain: 'Rain or dew is the simplest and most likely cause.' },
      { q: 'Statement: “Wear a helmet while riding a two-wheeler.” Assumptions: I. Helmets protect the head in an accident. II. Everyone who rides owns a helmet.', options: ['Only I is implicit', 'Only II is implicit', 'Both are implicit', 'Neither is implicit'], answer: 0, explain: 'I must be true for the advice to make sense. II is not needed.' },
      { q: 'Statement: “A company advertised on TV to raise its sales.” Assumptions: I. TV advertisements reach many people. II. No other company advertises.', options: ['Only I is implicit', 'Only II is implicit', 'Both are implicit', 'Neither is implicit'], answer: 0, explain: 'Only I is needed. II is an extreme and unnecessary claim.' },
      { q: 'Should 10 years of schooling be made compulsory? I. Yes, education builds a skilled nation. II. No, children should start work early.', options: ['Only I is strong', 'Only II is strong', 'Both are strong', 'Neither is strong'], answer: 0, explain: 'I gives a good reason. II goes against child welfare.' },
      { q: 'Should the sale of cigarettes be banned? I. Yes, smoking causes diseases. II. No, some people like smoking.', options: ['Only I is strong', 'Only II is strong', 'Both are strong', 'Neither is strong'], answer: 0, explain: 'Health harm is a strong reason. Liking is not.' },
      { q: 'Statements: All doctors are graduates. Some graduates are teachers. Conclusions: I. Some doctors are teachers. II. Some teachers are graduates.', options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'], answer: 1, explain: 'II is the same as the second statement. I does not have to be true.' },
      { q: 'Statements: All roses are flowers. All flowers are plants. Conclusions: I. All roses are plants. II. Some plants are flowers.', options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'], answer: 2, explain: 'Roses sit inside flowers, which sit inside plants. Both follow.' },
      { q: 'Statements: Some books are pens. All pens are pencils. Conclusions: I. Some books are pencils. II. All pencils are pens.', options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'], answer: 0, explain: 'The books that are pens are also pencils. II reverses the statement, which is wrong.' },
      { q: 'Statement: A village has no school. Courses of action: I. Open a school there. II. Move all the people away.', options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'], answer: 0, explain: 'I is practical. II is extreme.' },
      { q: 'Statement: Many students fail in mathematics. Courses of action: I. Give extra classes to weak students. II. Remove mathematics from the syllabus.', options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'], answer: 0, explain: 'Extra help solves the problem. Removing the subject does not.' },
      { q: 'Statement: A water pipe on the road is leaking. Courses of action: I. The authorities should repair it at once. II. People should stop using water.', options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'], answer: 0, explain: 'Repairing is the sensible step. Stopping water use is not practical.' },
    ],
  },

  'mental-ability-skills': {
    notes: [
      { type: 'h', text: '1. Number series' },
      { type: 'ul', items: [
        'First find the difference between neighbours.',
        'If the difference is not fixed, check the difference of differences.',
        'Also try multiplying, squares, cubes and alternating patterns.',
      ] },
      { type: 'example', q: 'Find the next number: 3, 6, 11, 18, 27, ?', steps: ['Differences: 3, 5, 7, 9.', 'The differences go up by 2. Next difference = 11.', '27 + 11 = 38.'], answer: '38' },
      { type: 'table', caption: 'Common patterns', head: ['Pattern', 'Example'], rows: [
        ['Add a fixed number', '5, 10, 15, 20'],
        ['Multiply', '2, 4, 8, 16'],
        ['Squares', '1, 4, 9, 16, 25'],
        ['Cubes', '1, 8, 27, 64, 125'],
        ['Increasing differences', '2, 3, 5, 8, 12'],
      ] },

      { type: 'h', text: '2. Letter series' },
      { type: 'mnemonic', title: 'Letter positions', word: 'EJOTY', explain: 'E = 5, J = 10, O = 15, T = 20, Y = 25. Count from these anchors.' },
      { type: 'ul', items: [
        'Write numbers 1 to 26 under A to Z.',
        'Opposite letter of A is Z, of B is Y. The two numbers add to 27.',
        'Example: A C E G ? skips one letter each time. Next is I.',
      ] },

      { type: 'h', text: '3. Odd man out' },
      { type: 'ul', items: [
        'Find what most items share: group, shape, number type, use.',
        'The item that breaks the rule is the odd one.',
        'Example: 8, 27, 64, 100, 125. All are cubes except 100.',
      ] },

      { type: 'h', text: '4. Coding-decoding' },
      { type: 'example', q: 'If CAT is written DBU, how is DOG written?', steps: ['C → D, A → B, T → U. Each letter moves one step forward.', 'D → E, O → P, G → H.'], answer: 'EPH' },
      { type: 'tip', text: 'Write the alphabet with numbers once at the top of the page. Most coding questions become easy.' },

      { type: 'h', text: '5. Blood relations' },
      { type: 'table', caption: 'Quick relations', head: ['Phrase', 'Relation'], rows: [
        ['Mother’s brother', 'Maternal uncle'],
        ['Father’s sister', 'Aunt (paternal)'],
        ['Brother’s son', 'Nephew'],
        ['Sister’s daughter', 'Niece'],
        ['Mother’s mother', 'Maternal grandmother'],
      ] },
      { type: 'example', q: 'A woman points to a man and says, “He is the son of my mother’s only son.” How is the man related to her?', steps: ['Her mother’s only son is her brother.', 'The man is the son of her brother.'], answer: 'Nephew' },
      { type: 'tip', text: 'Draw a small family tree. Use ○ for women and □ for men.' },

      { type: 'h', text: '6. Shapes and sub-sections' },
      { type: 'ul', items: [
        'Count shapes in a systematic way: single pieces first, then pairs, then bigger.',
        'A triangle with one line from the top to the base has 3 triangles (2 small + 1 big).',
        'Formula: a triangle with n lines from the apex to the base has n(n+1)/2 triangles.',
      ] },
    ],
    quick: [
      'Number series: check differences, then multiply, squares, cubes.',
      'Letter positions: E5, J10, O15, T20, Y25. Opposite letters add to 27.',
      'Odd man out: find the common rule first.',
      'Coding: write the alphabet with numbers.',
      'Blood relations: draw a family tree.',
      'Triangles with n lines from the apex: n(n+1)/2.',
    ],
    quiz: [
      { q: 'Find the next number: 2, 4, 8, 16, ?', options: ['24', '30', '32', '36'], answer: 2, explain: 'Each number is doubled.' },
      { q: 'Find the next number: 3, 6, 11, 18, 27, ?', options: ['36', '38', '40', '42'], answer: 1, explain: 'Differences are 3, 5, 7, 9, so the next is 11. 27 + 11 = 38.' },
      { q: 'Find the next number: 1, 4, 9, 16, 25, ?', options: ['30', '35', '36', '49'], answer: 2, explain: 'These are squares. The next is 6² = 36.' },
      { q: 'Find the next number: 5, 10, 20, 40, ?', options: ['60', '70', '80', '100'], answer: 2, explain: 'Each number is doubled.' },
      { q: 'Find the next number: 100, 95, 90, 85, ?', options: ['75', '80', '82', '70'], answer: 1, explain: 'Subtract 5 each time.' },
      { q: 'Find the next letter: A, C, E, G, ?', options: ['H', 'I', 'J', 'K'], answer: 1, explain: 'Skip one letter each time.' },
      { q: 'Find the next letter: Z, X, V, T, ?', options: ['S', 'R', 'Q', 'P'], answer: 1, explain: 'Go back two letters each time.' },
      { q: 'Find the next pair: AZ, BY, CX, ?', options: ['DW', 'DV', 'EW', 'CW'], answer: 0, explain: 'The first letter moves forward and the second moves backward.' },
      { q: 'Odd one out: 8, 27, 64, 100, 125', options: ['8', '27', '100', '125'], answer: 2, explain: 'All others are cubes (2³, 3³, 4³, 5³).' },
      { q: 'Odd one out:', options: ['Apple', 'Mango', 'Banana', 'Potato'], answer: 3, explain: 'Potato is a vegetable. The others are fruits.' },
      { q: 'If CAT is coded as DBU, then DOG is coded as:', options: ['EPH', 'EOH', 'DPH', 'FPI'], answer: 0, explain: 'Each letter moves one step forward: D→E, O→P, G→H.' },
      { q: 'If A = 1, B = 2, C = 3 and so on, the value of CAB is:', options: ['5', '6', '7', '8'], answer: 1, explain: '3 + 1 + 2 = 6.' },
      { q: 'Pointing to a man, a woman says, “He is the son of my mother’s only son.” How is the man related to her?', options: ['Son', 'Brother', 'Nephew', 'Cousin'], answer: 2, explain: 'Her mother’s only son is her brother. His son is her nephew.' },
      { q: 'A is B’s brother. B is C’s mother. How is A related to C?', options: ['Father', 'Maternal uncle', 'Grandfather', 'Cousin'], answer: 1, explain: 'A is the brother of C’s mother, so A is C’s maternal uncle.' },
      { q: 'Pointing to a photo, Ravi says, “She is the daughter of my father’s only daughter.” How is she related to Ravi?', options: ['Sister', 'Niece', 'Aunt', 'Cousin'], answer: 1, explain: 'His father’s only daughter is his sister. Her daughter is his niece.' },
      { q: 'How many triangles are there in a triangle with one line from the top corner to the base?', options: ['2', '3', '4', '5'], answer: 1, explain: 'Two small triangles and one big triangle make 3.' },
    ],
  },

  'basic-numeracy': {
    notes: [
      { type: 'h', text: '1. Number system and order of magnitude' },
      { type: 'ul', items: [
        'Prime number: only 1 and itself divide it. 2 is the only even prime.',
        'HCF is the biggest number that divides both. LCM is the smallest common multiple.',
        'Order of magnitude: 10⁴ is 100 times 10².',
        'Divisible by 3: sum of digits is divisible by 3. By 9: sum of digits divisible by 9.',
      ] },

      { type: 'h', text: '2. Averages' },
      { type: 'remember', text: 'Average = Sum ÷ Number of items. So Sum = Average × Number of items.' },
      { type: 'example', q: 'The average of 5 numbers is 24. What is their sum?', steps: ['Sum = Average × Count', 'Sum = 24 × 5 = 120'], answer: '120' },

      { type: 'h', text: '3. Ratio and proportion' },
      { type: 'example', q: 'Divide 120 in the ratio 2 : 3.', steps: ['Total parts = 2 + 3 = 5.', 'One part = 120 ÷ 5 = 24.', 'Parts: 2 × 24 = 48 and 3 × 24 = 72.'], answer: '48 and 72' },

      { type: 'h', text: '4. Percentage' },
      { type: 'table', caption: 'Handy fractions', head: ['Fraction', 'Percent'], rows: [['1/2', '50%'], ['1/4', '25%'], ['1/5', '20%'], ['1/8', '12.5%'], ['1/10', '10%']] },
      { type: 'tip', text: 'Up 20% then down 20% is NOT back to start. 1.2 × 0.8 = 0.96, so it is a 4% fall.' },

      { type: 'h', text: '5. Simple and compound interest' },
      { type: 'table', head: ['Item', 'Formula'], rows: [
        ['Simple interest', 'SI = P × R × T ÷ 100'],
        ['Amount (compound)', 'A = P × (1 + R/100)ⁿ'],
        ['Compound interest', 'CI = A − P'],
      ] },
      { type: 'example', q: 'Find CI on ₹10,000 at 10% a year for 2 years.', steps: ['Year 1 amount = 10,000 × 1.10 = 11,000.', 'Year 2 amount = 11,000 × 1.10 = 12,100.', 'CI = 12,100 − 10,000 = 2,100.'], answer: '₹2,100' },
      { type: 'tip', text: 'For you as an accountant: interest calculation on delayed payments uses the same SI idea.' },

      { type: 'h', text: '6. Time and work' },
      { type: 'example', q: 'A can do a job in 10 days and B in 15 days. How long together?', steps: ['A’s one day work = 1/10. B’s = 1/15.', 'Together = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6.', 'So they finish in 6 days.'], answer: '6 days' },

      { type: 'h', text: '7. Time, speed and distance' },
      { type: 'remember', text: 'Distance = Speed × Time. To change km/h to m/s, multiply by 5/18.' },
      { type: 'example', q: 'Convert 72 km/h to m/s.', steps: ['72 × 5 ÷ 18 = 20.'], answer: '20 m/s' },
    ],
    quick: [
      'Average = Sum ÷ Count.',
      'Ratio: add the parts, find one part, multiply.',
      'SI = PRT/100. CI = P(1+R/100)ⁿ − P.',
      'Together work: add the one-day rates.',
      'Distance = Speed × Time. km/h × 5/18 = m/s.',
      '+20% then −20% = −4%.',
    ],
    quiz: [
      { q: 'The average of 10, 20, 30, 40 and 50 is:', options: ['25', '30', '35', '40'], answer: 1, explain: '150 ÷ 5 = 30.' },
      { q: 'If 120 is divided in the ratio 2 : 3, the larger part is:', options: ['48', '60', '72', '80'], answer: 2, explain: 'One part is 24. The larger part is 3 × 24 = 72.' },
      { q: '20% of 250 is:', options: ['25', '40', '50', '60'], answer: 2, explain: '250 × 20 ÷ 100 = 50.' },
      { q: 'Simple interest on ₹5,000 at 8% a year for 3 years is:', options: ['₹1,000', '₹1,200', '₹1,500', '₹1,600'], answer: 1, explain: '5000 × 8 × 3 ÷ 100 = 1200.' },
      { q: 'Compound interest on ₹10,000 at 10% for 2 years is:', options: ['₹2,000', '₹2,100', '₹2,200', '₹2,500'], answer: 1, explain: 'Amount 12,100 minus 10,000 = 2,100.' },
      { q: 'A can do a work in 10 days and B in 15 days. Together they finish in:', options: ['5 days', '6 days', '8 days', '12 days'], answer: 1, explain: '1/10 + 1/15 = 1/6, so 6 days.' },
      { q: 'A car runs 150 km at 50 km/h. How long does it take?', options: ['2 hours', '3 hours', '4 hours', '5 hours'], answer: 1, explain: 'Time = 150 ÷ 50 = 3 hours.' },
      { q: '72 km/h is equal to how many m/s?', options: ['10', '15', '20', '25'], answer: 2, explain: '72 × 5 ÷ 18 = 20.' },
      { q: 'Which is a prime number?', options: ['21', '29', '33', '39'], answer: 1, explain: '21 = 3×7, 33 = 3×11, 39 = 3×13. Only 29 is prime.' },
      { q: 'A price rises by 20% and then falls by 20%. The net change is:', options: ['No change', '4% decrease', '4% increase', '2% decrease'], answer: 1, explain: '1.2 × 0.8 = 0.96, so it falls by 4%.' },
      { q: 'The average of 5 numbers is 24. Their sum is:', options: ['100', '110', '120', '125'], answer: 2, explain: '24 × 5 = 120.' },
      { q: 'If x : y = 3 : 5 and x + y = 64, then x is:', options: ['20', '24', '30', '40'], answer: 1, explain: 'One part = 64 ÷ 8 = 8. x = 3 × 8 = 24.' },
      { q: 'A car goes 60 km in the first hour and 40 km in the second hour. Its average speed is:', options: ['40 km/h', '45 km/h', '50 km/h', '60 km/h'], answer: 2, explain: 'Total 100 km in 2 hours = 50 km/h.' },
      { q: 'A student scored 360 out of 450. The percentage is:', options: ['70%', '75%', '80%', '85%'], answer: 2, explain: '360 ÷ 450 = 0.8 = 80%.' },
      { q: 'The HCF of 12 and 18 is:', options: ['3', '4', '6', '9'], answer: 2, explain: 'The largest number dividing both is 6.' },
      { q: '10⁴ is how many times 10²?', options: ['2', '10', '100', '1000'], answer: 2, explain: '10⁴ ÷ 10² = 10² = 100.' },
    ],
  },

  'data-analysis': {
    notes: [
      { type: 'h', text: '1. How to read tables and charts' },
      { type: 'steps', items: [
        'Read the title and the units first (₹, lakh, %, tonnes).',
        'Read the labels on both axes or the column headings.',
        'Read the question. Find only the numbers you need.',
        'Do the sum slowly and check the units in the answer.',
      ] },

      { type: 'h', text: '2. Tables' },
      { type: 'ul', items: [
        'Add along a row for a total of one item.',
        'Add down a column for a total of one period.',
        'Average = total ÷ number of values.',
      ] },
      { type: 'table', caption: 'Example table: units sold by three shops', head: ['Shop', 'Jan', 'Feb', 'Mar'], rows: [['A', 120, 150, 130], ['B', 100, 110, 140], ['C', 90, 80, 100]] },
      { type: 'example', q: 'Total sales of Shop A in three months?', steps: ['Add along the row: 120 + 150 + 130.'], answer: '400' },

      { type: 'h', text: '3. Bar diagrams and line graphs' },
      { type: 'ul', items: [
        'Bar height shows the size. Compare heights.',
        'Line graph shows change over time. Going up means a rise.',
        'Percentage change = (change ÷ old value) × 100.',
      ] },
      { type: 'remember', text: 'Percentage increase = (New − Old) ÷ Old × 100. Always divide by the OLD value.' },

      { type: 'h', text: '4. Pie charts' },
      { type: 'ul', items: [
        'The full circle is 100% or 360°.',
        '1% = 3.6°.',
        'Amount for a slice = percentage × total ÷ 100.',
      ] },
      { type: 'example', q: 'A family spends ₹40,000 a month and 30% goes to food. How much is that?', steps: ['40,000 × 30 ÷ 100 = 12,000.'], answer: '₹12,000' },
      { type: 'tip', text: 'Your Treasury work already uses these skills: budget tables, percentage change and share of total.' },
    ],
    quick: [
      'Read title, units and labels first.',
      'Average = total ÷ count.',
      '% change = (new − old) ÷ old × 100.',
      'Pie: full circle = 100% = 360°. 1% = 3.6°.',
      'Slice amount = % × total ÷ 100.',
    ],
    quiz: [
      { q: 'What is the total number of units sold by Shop A in the three months?', visual: SHOPS, options: ['380', '400', '420', '440'], answer: 1, explain: '120 + 150 + 130 = 400.' },
      { q: 'Which shop sold the most units in March?', visual: SHOPS, options: ['A', 'B', 'C', 'A and B equally'], answer: 1, explain: 'In March: A 130, B 140, C 100. Shop B sold the most.' },
      { q: 'What is the average monthly sale of Shop C?', visual: SHOPS, options: ['80', '85', '90', '100'], answer: 2, explain: '(90 + 80 + 100) ÷ 3 = 90.' },
      { q: 'What was the total sale of all three shops in February?', visual: SHOPS, options: ['320', '340', '360', '380'], answer: 1, explain: '150 + 110 + 80 = 340.' },
      { q: 'Which shop’s sales fell from January to February?', visual: SHOPS, options: ['A', 'B', 'C', 'None'], answer: 2, explain: 'Shop C fell from 90 to 80. A and B went up.' },
      { q: 'By how many lakh tonnes did rice production rise from 2019 to 2022?', visual: RICE, options: ['10', '15', '20', '25'], answer: 2, explain: '60 − 40 = 20 lakh tonnes.' },
      { q: 'What was the percentage increase in rice production from 2019 to 2022?', visual: RICE, options: ['20%', '33.3%', '50%', '60%'], answer: 2, explain: '(60 − 40) ÷ 40 × 100 = 50%.' },
      { q: 'In which year was rice production the lowest?', visual: RICE, options: ['2019', '2020', '2021', '2022'], answer: 0, explain: '2019 has the shortest bar (40).' },
      { q: 'What is the average production of 2019, 2020 and 2021?', visual: RICE, options: ['40', '42', '45', '50'], answer: 2, explain: '(40 + 50 + 45) ÷ 3 = 45.' },
      { q: 'On which day was the temperature the highest?', visual: TEMP, options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], answer: 2, explain: 'Wednesday reached 32 °C.' },
      { q: 'By how many degrees did the temperature rise from Monday to Wednesday?', visual: TEMP, options: ['2', '3', '4', '5'], answer: 2, explain: '32 − 28 = 4 °C.' },
      { q: 'What was the average temperature over the five days?', visual: TEMP, options: ['29', '30', '31', '32'], answer: 1, explain: '(28 + 30 + 32 + 30 + 30) ÷ 5 = 150 ÷ 5 = 30.' },
      { q: 'How much does the family spend on food each month?', visual: BUDGET, options: ['₹10,000', '₹12,000', '₹14,000', '₹16,000'], answer: 1, explain: '30% of 40,000 = 12,000.' },
      { q: 'What percentage is spent on rent and education together?', visual: BUDGET, options: ['35%', '40%', '45%', '50%'], answer: 2, explain: '25% + 20% = 45%.' },
      { q: 'How much does the family save each month?', visual: BUDGET, options: ['₹4,000', '₹5,000', '₹6,000', '₹8,000'], answer: 2, explain: '15% of 40,000 = 6,000.' },
      { q: 'How much more is spent on rent than on other items?', visual: BUDGET, options: ['₹4,000', '₹5,000', '₹6,000', '₹8,000'], answer: 2, explain: '(25% − 10%) = 15% of 40,000 = 6,000.' },
    ],
  },
};
