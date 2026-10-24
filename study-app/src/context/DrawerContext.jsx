import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';

// The topics drawer is opened from the menu button in the top bar, but its content (the tree)
// belongs to the section pages. This shares the open state between the two.
const Ctx = createContext(null);
export const useDrawer = () => useContext(Ctx);

export function DrawerProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [available, setAvailable] = useState(false); // true on pages that have a topics tree
  const buttonRef = useRef(null); // focus returns here when the drawer closes
  const close = useCallback(() => setOpen(false), []);
  const value = useMemo(() => ({ open, setOpen, close, available, setAvailable, buttonRef }), [open, close, available]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
