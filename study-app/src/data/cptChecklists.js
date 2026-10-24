// CPT Part B task checklists (G.O.Ms.No.26, 24.02.2023): Word 15 marks, Excel 20, PowerPoint 20.
// Each task is something she does on a laptop in the real program, then ticks off.
// `how` is the id of the topic in the CPT notes that explains it (see leafTopics in helpers.js).
// Treat the pattern as provisional until the detailed notification confirms it.
export const CHECKLISTS = {
  'ms-word': {
    title: 'MS Word tasks',
    marks: 15,
    scope: 'Organise a document and insert objects: tables, images, WordArt and mail merge.',
    tasks: [
      { id: 'w1', text: 'Type a short official letter. Set the font to Times New Roman 12 and justify the text.', how: 'formatting' },
      { id: 'w2', text: 'Make the heading bold, centred and underlined.', how: 'formatting' },
      { id: 'w3', text: 'Insert a 3 × 4 table and apply borders.', how: 'tables' },
      { id: 'w4', text: 'Merge two cells in the first row of the table and shade them.', how: 'tables' },
      { id: 'w5', text: 'Set the page to A4, portrait, with 1 inch margins on all sides.', how: 'page-setup' },
      { id: 'w6', text: 'Insert a page break, then add page numbers at the bottom centre.', how: 'page-setup' },
      { id: 'w7', text: 'Use Find and Replace to change one word everywhere in the document.', how: 'find-and-replace' },
      { id: 'w8', text: 'Insert a picture from your computer and resize it without stretching it.', how: 'formatting' },
      { id: 'w9', text: 'Add WordArt as a title for the document.', how: 'formatting' },
      { id: 'w10', text: 'Create a mail merge letter that uses a list of names.', how: 'mail-merge-basics' },
    ],
  },
  'ms-excel': {
    title: 'MS Excel tasks',
    marks: 20,
    scope: 'Merge and split cells, formulas, formatting and preparing data.',
    sample: { href: '/sample-data/excel-practice-salary.csv', label: 'Download the sample dataset (CSV)' },
    tasks: [
      { id: 'e1', text: 'Open the sample dataset and save it as an Excel workbook (.xlsx).', how: 'cells' },
      { id: 'e2', text: 'Merge cells A1:F1 and type a title in the merged cell.', how: 'cells' },
      { id: 'e3', text: 'Widen the columns so no text is cut off, and make the header row bold.', how: 'formatting' },
      { id: 'e4', text: 'In a new column, add Basic Pay and DA with a formula, then fill it down.', how: 'formulas' },
      { id: 'e5', text: 'Use SUM to total the Basic Pay column, and AVERAGE for the average.', how: 'formulas' },
      { id: 'e6', text: 'Use IF to show "High" when the total is above 50000 and "Normal" otherwise.', how: 'formulas' },
      { id: 'e7', text: 'Use VLOOKUP to find an employee name from an employee number.', how: 'formulas' },
      { id: 'e8', text: 'Apply borders and a number format with the rupee symbol to the pay columns.', how: 'formatting' },
      { id: 'e9', text: 'Sort the data by Department, then by Basic Pay from largest to smallest.', how: 'sorting-and-filtering' },
      { id: 'e10', text: 'Filter the data to show one department only.', how: 'sorting-and-filtering' },
      { id: 'e11', text: 'Insert a column chart of Basic Pay by employee and give it a title.', how: 'charts' },
    ],
  },
  'ms-powerpoint': {
    title: 'MS PowerPoint tasks',
    marks: 20,
    scope: 'Standard layouts, formatted text, images, tables, transitions and animation.',
    tasks: [
      { id: 'p1', text: 'Create a title slide, then add a new slide with the Title and Content layout.', how: 'slides-and-layouts' },
      { id: 'p2', text: 'Type three bullet points, make the heading bold and change the font colour.', how: 'slides-and-layouts' },
      { id: 'p3', text: 'Apply a theme to the whole presentation.', how: 'slides-and-layouts' },
      { id: 'p4', text: 'Insert a picture on a slide and resize it while keeping its shape.', how: 'inserting-images-and-charts' },
      { id: 'p5', text: 'Insert a table with 3 columns and 4 rows and fill it in.', how: 'inserting-images-and-charts' },
      { id: 'p6', text: 'Insert a chart from the Insert tab.', how: 'inserting-images-and-charts' },
      { id: 'p7', text: 'Add a slide transition and apply it to all slides.', how: 'transitions' },
      { id: 'p8', text: 'Add an animation to the bullet points on one slide.', how: 'transitions' },
      { id: 'p9', text: 'Start the slide show from the first slide, then from the current slide.', how: 'slides-and-layouts' },
    ],
  },
};
