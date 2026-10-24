import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

// Facts come from .claude/CONTENT_GUIDELINES.md sections 8.1 and 8.2.
// Every figure has a source and an "as of" date. Update this page whenever the notification
// or a new paper changes the facts.
const AS_OF = '24 October 2026';

function FactsTable({ caption, head, rows }) {
  return (
    <div className="table-scroll facts-table">
      <div className="table-wrap" tabIndex={0} role="region" aria-label={caption}>
        <table className={"stack-table cols-" + head.length}>
          <caption>{caption}</caption>
          <thead><tr>{head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
          <tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} data-label={head[j]}>{c}</td>)}</tr>)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default function ExamFacts() {
  return (
    <main className="page" id="main">
      <Breadcrumb crumbs={[{ label: 'Home', to: '/' }, { label: 'Exam facts' }]} />
      <h1>Exam facts</h1>
      <p className="lead">Figures on this page were last checked on {AS_OF}. Check the detailed notification (Notification 37/2026, due on or before 10 November 2026) for any change.</p>

      <h2>Stages and marks</h2>
      <FactsTable
        caption="APPSC Group 2: stages and marks"
        head={['Stage', 'Format', 'Marks', 'Counts for merit?']}
        rows={[
          ['Screening test', '150 MCQs, 150 minutes, −1/3 negative marking. Indian History, Geography, Indian Society, Current Affairs and Mental Ability: 30 each.', '150', 'No. It only shortlists candidates for Mains.'],
          ['Mains Paper I', '150 MCQs, 150 minutes, −1/3. AP social and cultural history (75) and Indian Constitution (75).', '150', 'Yes'],
          ['Mains Paper II', '150 MCQs, 150 minutes, −1/3. Indian and AP economy (75) and Science and Technology (75).', '150', 'Yes'],
          ['CPT', 'Practical, 60 minutes.', '100', 'No. Qualifying only (OC 40, BC 35, SC/ST/PwBD 30).'],
        ]}
      />
      <p className="caption">Source: APPSC Group 2 syllabus (27-04-2023) and Brief Notification 37/2026; CPT from G.O.Ms.No.26 (24.02.2023). As of {AS_OF}. The paper is bilingual (English and Telugu).</p>

      <FactsTable
        caption="CPT marks (G.O.Ms.No.26)"
        head={['Part', 'Task', 'Marks']}
        rows={[
          ['A', 'MCQs: computer basics, software types, operating systems, Windows, Linux/Mac basics, internet, email, WWW', '20'],
          ['B', 'Typing speed', '25'],
          ['B', 'Word: organise a document and insert objects (tables, images, WordArt, mail merge)', '15'],
          ['B', 'Excel: merge and split cells, formulas, formatting, prepare data', '20'],
          ['B', 'PowerPoint: standard layouts, formatted text, images, tables, transitions, animation', '20'],
        ]}
      />
      <p className="caption">Source: G.O.Ms.No.26 (24.02.2023), as reproduced on APTeachers. As of {AS_OF}. Provisional until the detailed notification confirms it.</p>

      <h2>Qualifying percentages and competition</h2>
      <FactsTable
        caption="Figures reported by exam-prep sites"
        head={['Fact', 'Figure']}
        rows={[
          ['Minimum qualifying marks', 'OC 40%, BC 35%, SC/ST 30%. Clearing them is necessary but not enough: Mains candidates are shortlisted by merit against the number of vacancies.'],
          ['Candidates registered, 2023 cycle', 'About 4.83 lakh'],
          ['Qualified for Mains, 2023 cycle', '92,250'],
          ['Final selection list, 2023 cycle', 'Published on 28 January 2026'],
        ]}
      />
      <p className="caption">Source: StudyIQ, Adda247, Careers360 and other prep sites (unofficial). As of {AS_OF}.</p>

      <h2>What recent papers showed</h2>
      <FactsTable
        caption="Recent papers"
        head={['Paper', 'What was reported']}
        rows={[
          ['Screening, 25 February 2024', 'Overall moderate to difficult. History, Geography, Indian Society and Current Affairs easy to moderate. Mental Ability moderate.'],
          ['Mains Paper I, 23 February 2025', 'AP history easy: questions on poets, inscriptions, art forms, monuments and cultural movements of the Eastern Chalukyas, Andhra Cholas and Kakatiyas, plus the Nizam period and British rule. Constitution moderate: about 50 direct and about 15 assertion–reason questions.'],
          ['Mains Paper II, 23 February 2025', 'Economy moderate to difficult, mostly current schemes, often in assertion–reason or matching format. Science and Technology moderate: environment, health schemes and recent technology news.'],
          ['Both Mains papers, 2025', 'Assertion–reason questions were prominent, which made time management hard.'],
          ['Score targets, 2025', 'Sakshi: a good score is 220–240 out of 300. StudyIQ: expected general cut-off 210–220. These are rough targets only.'],
        ]}
      />
      <p className="caption">Sources: CollegeDekho, “APPSC Group 2 Prelims Exam 2024 Analysis” (25 Feb 2024); Sakshi Education, “APPSC Group 2 Mains 2025 Exam Analysis” (24 Feb 2025); StudyIQ. Prep-site opinion, not official. As of {AS_OF}.</p>

      <p><Link className="btn" to="/">Back to Home</Link></p>
    </main>
  );
}
