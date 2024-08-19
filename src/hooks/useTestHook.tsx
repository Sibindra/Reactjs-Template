import { useState } from 'react';

export default function useTestHook() {
  const [state, setState] = useState(0);

  return { state, setState };
}
