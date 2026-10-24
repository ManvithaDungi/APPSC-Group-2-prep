import { useEffect, useState } from 'react';
import { loadSectionContent } from '../data/helpers';

// Loads the notes and quizzes of one section (Screening, Paper I, ...) the first time it is needed.
export default function useSectionContent(tabId) {
  const [state, setState] = useState({ tabId: null, data: null, error: false });

  useEffect(() => {
    let cancelled = false;
    loadSectionContent(tabId)
      .then((data) => !cancelled && setState({ tabId, data, error: false }))
      .catch(() => !cancelled && setState({ tabId, data: null, error: true }));
    return () => {
      cancelled = true;
    };
  }, [tabId]);

  const ready = state.tabId === tabId;
  return { content: ready ? state.data : null, loading: !ready, error: ready && state.error };
}
