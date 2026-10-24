// Questions added for topics that had none. They are appended after each subject's own quiz,
// so question numbers in quizTopics.js continue from the end of that quiz.
// Every question tests a fact that is in that topic's notes (see topicSections.js).
const BOTH = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'];

const AR = [
  'Both A and R are true, and R is the correct explanation of A',
  'Both A and R are true, but R is NOT the correct explanation of A',
  'A is true, but R is false',
  'A is false, but R is true',
];

export const EXTRA_QUIZ = {
  // Ancient History, written from NCERT Themes in Indian History Part I (Chapters 1 to 4). Questions 15 to 29.
  'ancient-history': [
    { q: 'Consider the following statements about Harappan towns.', statements: ['Harappan bricks, baked or sun-dried, were of a standard ratio.', 'The Harappan script is alphabetical and has been fully read.'], format: 'statement', options: BOTH, answer: 0, shuffle: false, difficulty: 'moderate', explain: 'Statement 1 is correct: length and breadth were four times and twice the height. Statement 2 is wrong: the script has 375–400 signs, so it is not alphabetical, and it is undeciphered. Source: NCERT Themes I, Ch 1.' },
    { q: 'Match the Harappan site with what it is known for.', format: 'match', list1: ['Dholavira', 'Chanhudaro', 'Shortughai', 'Kalibangan'], list2: ['Near the source of lapis lazuli', 'Ploughed field with two sets of furrows', 'Small craft centre for beads and seals', 'Water reservoirs with fine masonry'], options: ['A-1, B-2, C-3, D-4', 'A-4, B-3, C-1, D-2', 'A-3, B-4, C-2, D-1', 'A-2, B-1, C-4, D-3'], answer: 1, shuffle: false, difficulty: 'hard', explain: 'Dholavira has water reservoirs; Chanhudaro was a tiny craft centre; Shortughai (Afghanistan) is near lapis lazuli; Kalibangan has the ploughed field. Source: NCERT Themes I, Ch 1.' },
    { q: 'According to the NCERT, the Mature Harappan phase lasted from:', options: ['6000 to 2600 BCE', '2600 to 1900 BCE', '1900 to 1300 BCE', '1500 to 1000 BCE'], answer: 1, difficulty: 'moderate', explain: 'Early Harappan is 6000–2600 BCE, Mature Harappan 2600–1900 BCE and Late Harappan 1900–1300 BCE. 1500–1000 BCE is the date of the early Vedic traditions. Source: NCERT Themes I, Ch 1.' },
    { assertion: 'Archaeologists depend mainly on material remains to understand Harappan life.', reason: 'The Harappan script has not been deciphered.', format: 'assertion', q: 'Assertion and reason', options: AR, answer: 0, shuffle: false, difficulty: 'moderate', explain: 'Both are true. Because the script cannot be read, pottery, tools, ornaments and houses are the main evidence, so R explains A. Source: NCERT Themes I, Ch 1.' },

    { q: 'The Vinaya Pitaka contains:', options: ['Rules for the sangha', 'The teachings of the Buddha', 'Philosophical matters', 'Stories of past births of Mahavira'], answer: 0, difficulty: 'easy', explain: 'Vinaya = rules for monks and nuns; Sutta = the Buddha’s teachings; Abhidhamma = philosophy. Source: NCERT Themes I, Ch 4.' },
    { q: 'Consider the following statements about women in the Buddhist sangha.', statements: ['Mahapajapati Gotami, the Buddha’s foster mother, was the first woman ordained as a bhikkhuni.', 'According to Buddhist texts, Ananda persuaded the Buddha to admit women into the sangha.'], format: 'statement', options: BOTH, answer: 2, shuffle: false, difficulty: 'moderate', explain: 'Both statements are correct as told in Buddhist texts. Source: NCERT Themes I, Ch 4.' },
    { q: 'Arrange these events in the life of the Buddha in order.', format: 'chronology', items: ['First sermon (Sarnath)', 'Birth (Lumbini)', 'Enlightenment (Bodh Gaya)', 'Nibbana (Kusinagara)'], options: ['2-3-1-4', '2-1-3-4', '3-2-1-4', '1-2-3-4'], answer: 0, shuffle: false, difficulty: 'moderate', explain: 'Lumbini (birth), Bodh Gaya (enlightenment), Sarnath (first sermon), Kusinagara (nibbana): L · B · S · K. Source: NCERT Themes I, Ch 4.' },
    { assertion: 'Non-injury to living beings is central to Jainism.', reason: 'Jaina teaching holds that the entire world is animated, even stones and water.', format: 'assertion', q: 'Assertion and reason', options: AR, answer: 0, shuffle: false, difficulty: 'moderate', explain: 'Both are true, and R explains A: because everything has life, harming any living being is avoided. Source: NCERT Themes I, Ch 4.' },

    { q: 'James Prinsep deciphered Asokan Brahmi in the year:', options: ['1810', '1838', '1854', '1888'], answer: 1, difficulty: 'moderate', explain: 'Prinsep, an officer in the East India Company’s mint, read Brahmi in 1838. Source: NCERT Themes I, Ch 2.' },
    { q: 'Consider the following statements about the mahajanapadas.', statements: ['Magadha, in present-day Bihar, shifted its capital from Rajagaha to Pataliputra in the fourth century BCE.', 'The Vajji sangha was ruled by a single hereditary king.'], format: 'statement', options: BOTH, answer: 0, shuffle: false, difficulty: 'moderate', explain: 'Statement 1 is correct. Statement 2 is wrong: Vajji was a gana or sangha, an oligarchy in which power was shared by many rajas. Source: NCERT Themes I, Ch 2.' },
    { q: 'Arrange these events in order of time.', format: 'chronology', items: ['Accession of Chandragupta Maurya (c. 321 BCE)', 'Reign of Asoka (c. 272/268–231 BCE)', 'End of the Mauryan empire (c. 185 BCE)', 'Beginning of Gupta rule (c. 320 CE)'], options: ['2-1-3-4', '1-3-2-4', '1-2-3-4', '1-2-4-3'], answer: 2, shuffle: false, difficulty: 'easy', explain: 'The order is c. 321 BCE, c. 272/268 BCE, c. 185 BCE, c. 320 CE. Source: NCERT Themes I, Ch 2 (timeline).' },
    { q: 'Prabhavati Gupta, daughter of Chandragupta II, was married into which ruling family?', options: ['Satavahanas', 'Vakatakas', 'Kushanas', 'Shakas'], answer: 1, difficulty: 'moderate', explain: 'She married into the Vakatakas of the Deccan. Her inscription records the grant of the village Danguna. Source: NCERT Themes I, Ch 2.' },
    { q: 'The ruins of the Amaravati stupa were first stumbled upon in 1796 by:', options: ['Colin Mackenzie', 'Walter Elliot', 'A local raja who wanted to build a temple', 'H.H. Cole'], answer: 2, difficulty: 'hard', explain: 'A local raja found the ruins while looking for stone. Mackenzie visited later; Elliot took panels to Madras in 1854 (the “Elliot marbles”); Cole argued for keeping sculpture in situ. Source: NCERT Themes I, Ch 4.' },

    { q: 'Harshavardhana was the king of which city?', options: ['Pataliputra', 'Kanauj', 'Ujjayini', 'Taxila'], answer: 1, difficulty: 'easy', explain: 'Harsha ruled from Kanauj, about 606–647 CE. Source: NCERT Themes I, Ch 2.' },
    { q: 'The Chinese pilgrim Xuan Zang came to India during Harsha’s reign in search of:', options: ['Spices and pepper', 'Buddhist texts', 'Gold coins', 'Sanskrit plays'], answer: 1, difficulty: 'easy', explain: 'Xuan Zang came in search of Buddhist texts. Fa Xian (5th century CE) came earlier, in Gupta times. Source: NCERT Themes I, Ch 2 (timeline).' },
  ],

  'modern-history': [
    { q: 'Which leader, together with V.P. Menon, worked to bring the princely states into India?', options: ['Sardar Patel', 'Jawaharlal Nehru', 'C. Rajagopalachari', 'B.R. Ambedkar'], answer: 0, explain: 'Sardar Patel and V.P. Menon joined the 500+ princely states to India. Notes: After independence.' },
    { q: 'Hyderabad was joined to India in September 1948 through:', options: ['Operation Polo', 'Operation Flood', 'Operation Blue Star', 'Operation Green'], answer: 0, explain: 'The action in Hyderabad was called Operation Polo. Notes: After independence.' },
    { q: 'Goa joined India in the year:', options: ['1947', '1954', '1961', '1966'], answer: 2, explain: 'Goa joined in 1961. Pondicherry joined earlier, in 1954. Notes: After independence.' },
  ],
  'physical-geography': [
    { q: 'The Himalayas are an example of which kind of mountains?', options: ['Fold mountains', 'Block mountains', 'Volcanic mountains', 'Residual mountains'], answer: 0, explain: 'Fold mountains form when rock layers are pushed and folded. The Himalayas and the Alps are examples. Notes: Landforms.' },
    { q: 'Mount Fuji is an example of:', options: ['Fold mountains', 'Block mountains', 'Volcanic mountains', 'A plateau'], answer: 2, explain: 'Volcanic mountains are built up by lava. Mount Fuji is the example given. Block mountains form along cracks, as at Vosges. Notes: Landforms.' },
    { q: 'The Ganga Plain is low flat land made by:', options: ['Rivers', 'Lava', 'Folding of rocks', 'Rising of land along cracks'], answer: 0, explain: 'A plain is low flat land made by rivers. A plateau, like the Deccan Plateau, is high flat land. Notes: Landforms.' },
  ],
  'social-issues': [
    { q: 'Which of these is a remedy for youth unrest?', options: ['Skill training', 'Fewer jobs', 'Keeping youth out of decisions', 'Less sports'], answer: 0, explain: 'Remedies are skill training, jobs, sports, guidance and youth participation in decisions. Notes: Youth unrest and agitation.' },
    { q: 'Consider the following statements about youth unrest.', statements: ['Unemployment and competition are causes of youth unrest.', 'Youth participation in decisions is a remedy.'], format: 'statement', options: BOTH, answer: 2, shuffle: false, explain: 'Statement 1 is correct: unemployment and competition are named causes. Statement 2 is correct: youth participation in decisions is a remedy. Notes: Youth unrest and agitation.' },
    { q: 'Which of the following is NOT named as a possible result of youth unrest?', options: ['Protests', 'Drug use', 'Loss of hope', 'Rise in skill training'], answer: 3, explain: 'Results are protests, drug use and loss of hope. Skill training is a remedy, not a result. Notes: Youth unrest and agitation.' },
  ],
  'andhradesa-11-16': [
    { q: 'Besides worship, the temples of this period were centres of:', options: ['Learning, banking and charity', 'Army training only', 'Tax collection only', 'Foreign trade only'], answer: 0, explain: 'Temples were centres of learning, banking and charity. Notes: Society, language and art.' },
    { q: 'The Lepakshi temple is noted in the notes for its:', options: ['Murals', 'Stupa railings', 'Rock-cut caves', 'Bronze images'], answer: 0, explain: 'Lepakshi murals are listed among the art of the period, along with the Ramappa, Srisailam and Ahobilam temples. Notes: Society, language and art.' },
    { q: 'Consider the following statements.', statements: ['Temples were centres of learning, banking and charity.', 'Telugu was a language of kings only in the Vijayanagara court.'], format: 'statement', options: BOTH, answer: 0, shuffle: false, explain: 'Statement 1 is correct. Statement 2 is wrong: Telugu became a language of kings in the Kakatiya, Reddi and Vijayanagara courts. Notes: Society, language and art.' },
  ],
  'europeans-to-independence': [
    // Establishment of British rule (revolts and 1857)
    { q: 'The revolt led by Uyyalawada Narasimha Reddy in Kurnool took place in:', options: ['1832', '1846–47', '1857', '1879–80'], answer: 1, explain: 'The Kurnool revolt was in 1846–47. Notes: Revolts and 1857.' },
    { q: 'In July 1857, Turrebaz Khan attacked the British Residency at:', options: ['Hyderabad', 'Kurnool', 'Rajahmundry', 'Madras'], answer: 0, explain: 'Turrebaz Khan attacked the Residency at Hyderabad in July 1857. Notes: Revolts and 1857.' },
    { q: 'The Rampa rebellion under Alluri Sitarama Raju took place in:', options: ['1846–47', '1857', '1879–80', '1922–24'], answer: 3, explain: 'The Rampa rebellions were in 1879–80 and, under Alluri Sitarama Raju, in 1922–24. Notes: Revolts and 1857.' },
    // Role of socialists and communists
    { q: 'The Telangana armed struggle (1946–51) was against:', options: ['The Nizam and the landlords', 'The French in Yanam', 'The Madras Presidency', 'The Dutch at Pulicat'], answer: 0, explain: 'The Telangana armed struggle was against the Nizam and the landlords. Notes: Socialists, communists and literature.' },
    { q: 'Sri Sri’s revolutionary poems, Mahaprasthanam, were published in:', options: ['1930', '1942', '1950', '1956'], answer: 2, explain: 'Mahaprasthanam (1950) is the revolutionary literature named in the notes.' },
    { q: 'Nataka Samasthalu were:', options: ['Drama societies', 'Peasant unions', 'Newspapers', 'Library associations'], answer: 0, explain: 'Nataka Samasthalu (drama societies) spread messages of reform and freedom. Notes: Socialists, communists and literature.' },
    // Anti-zamindari and kisan movements
    { q: 'Which communist leader worked for peasants and labourers?', options: ['Tanguturi Prakasam', 'Puchalapalli Sundarayya', 'Pingali Venkayya', 'Durgabai Deshmukh'], answer: 1, explain: 'Puchalapalli Sundarayya worked for peasants and labourers. Prakasam is Andhra Kesari, Venkayya designed the flag and Durgabai founded the Andhra Mahila Sabha.' },
    { q: 'The Telangana armed struggle lasted from:', options: ['1942 to 1946', '1946 to 1951', '1950 to 1956', '1956 to 1961'], answer: 1, explain: 'The Telangana armed struggle was fought in 1946–51. Notes: Socialists, communists and literature.' },
    { q: 'Who led the kisan movement and the Ryots’ association in Andhra?', options: ['N.G. Ranga', 'Rayaprolu Subba Rao', 'Gurram Jashuva', 'Garimella Satyanarayana'], answer: 0, explain: 'N.G. Ranga led the kisan movement. The other three are nationalist poets. Notes: Nationalist movement in Andhra.' },
    // Women’s participation
    { q: 'Who founded the Andhra Mahila Sabha?', options: ['Durgabai Deshmukh', 'Kanuparti Varalakshmamma', 'Unnava Lakshmibai', 'Tanguturi Prakasam'], answer: 0, explain: 'Durgabai Deshmukh founded the Andhra Mahila Sabha. Notes: Nationalist movement in Andhra.' },
    { q: 'Durgabai Deshmukh led the salt satyagraha at:', options: ['Madras', 'Machilipatnam', 'Rajahmundry', 'Guntur'], answer: 0, explain: 'She led the salt satyagraha at Madras. Notes: Nationalist movement in Andhra.' },
    { q: 'Which of the following is NOT a woman leader named in the notes?', options: ['Unnava Lakshmibai', 'Kanuparti Varalakshmamma', 'Durgabai Deshmukh', 'Tanguturi Prakasam'], answer: 3, explain: 'Tanguturi Prakasam, called Andhra Kesari, was a man. The other three are the women leaders named. Notes: Nationalist movement in Andhra.' },
  ],
  'decentralization': [
    { q: 'In which system are decisions slower but closer to the people?', options: ['Decentralization', 'Centralization', 'Both equally', 'Neither'], answer: 0, explain: 'Decentralization shares power with lower levels, so decisions are slower but closer to the people. Notes: Centralization and decentralization.' },
    { q: 'Panchayats and municipalities are examples of:', options: ['Decentralization', 'Centralization', 'Central ministries', 'Constitutional bodies at the Union level'], answer: 0, explain: 'Panchayats and municipalities are the examples of decentralization; central ministries are the example of centralization. Notes: Centralization and decentralization.' },
    { q: 'Consider the following statements.', statements: ['Under centralization, decisions are fast but far from people.', 'Under decentralization, power is kept at the top.'], format: 'statement', options: BOTH, answer: 0, shuffle: false, explain: 'Statement 1 is correct. Statement 2 is wrong: decentralization shares power with lower levels. Notes: Centralization and decentralization.' },
  ],
  'money-banking-finance': [
    { q: 'The Balance of Payments (BoP) is a record of:', options: ['All money coming into and going out of the country', 'Only the government budget', 'Only bank deposits', 'Only taxes collected'], answer: 0, explain: 'BoP records all money coming in and going out of the country. Notes: Balance of payments and FDI.' },
    { q: 'Loans and investment are recorded in which part of the BoP?', options: ['Capital account', 'Current account', 'Fiscal account', 'Revenue account'], answer: 0, explain: 'The current account holds trade, services and transfers. The capital account holds loans and investment. Notes: Balance of payments and FDI.' },
    { q: 'Consider the following statements.', statements: ['FDI is investment by a foreign company in a business inside India.', 'Trade in goods is recorded in the capital account.'], format: 'statement', options: BOTH, answer: 0, shuffle: false, explain: 'Statement 1 is correct. Statement 2 is wrong: trade is part of the current account. Notes: Balance of payments and FDI.' },
  ],
  'windows': [
    { q: 'Which shortcut opens Settings in Windows?', options: ['Win + I', 'Win + D', 'Win + L', 'Win + E'], answer: 0, explain: 'Win + I opens Settings. Win + D shows the desktop, Win + L locks the PC and Win + E opens File Explorer.' },
    { q: 'Wallpaper and theme are changed under which Settings group?', options: ['Personalization', 'System', 'Devices', 'Time & Language'], answer: 0, explain: 'Personalization holds wallpaper and theme. System holds display, sound and power. Notes: Settings.' },
    { q: 'Which is the older place for settings such as “Uninstall a program”?', options: ['Control Panel', 'Task Manager', 'File Explorer', 'Recycle Bin'], answer: 0, explain: 'Control Panel is the older place for settings. Notes: Settings.' },
  ],
  'ms-excel': [
    { q: 'To use a Currency, Percentage or Date format, you choose it from the:', options: ['Number format on the Home tab', 'Data tab', 'Insert tab', 'View tab'], answer: 0, explain: 'Select the cells, go to the Home tab and choose the number format. Notes: Formatting, sorting and filtering.' },
    { q: 'Before applying a filter, which cells should you select?', options: ['The heading row', 'The last row', 'Only one blank cell', 'The chart'], answer: 0, explain: 'Select the heading row, then Data → Filter, and choose from the arrow. Notes: Formatting, sorting and filtering.' },
    { q: 'Merge & Centre is mainly used to:', options: ['Join cells for a heading', 'Sort data from A to Z', 'Add two numbers', 'Insert a chart'], answer: 0, explain: 'Merge & Centre joins cells for a heading. Notes: Formatting, sorting and filtering.' },
  ],
};
