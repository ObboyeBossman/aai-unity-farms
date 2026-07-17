'use client';

import { useEffect } from 'react';

export function BrowserGuard() {
  useEffect(() => {
    // ── 1. Right-click context menu ─────────────────────────────
    const blockContextMenu = (e: MouseEvent) => e.preventDefault();

    // ── 2. DevTools & view-source keyboard shortcuts ────────────
    const blockShortcuts = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();

      // F12
      if (e.key === 'F12') { e.preventDefault(); return; }

      // Ctrl/Cmd combos
      if (e.ctrlKey || e.metaKey) {
        // Ctrl+Shift+I  — DevTools
        // Ctrl+Shift+J  — Console
        // Ctrl+Shift+C  — Inspector
        if (e.shiftKey && ['I', 'J', 'C'].includes(key)) {
          e.preventDefault();
          return;
        }
        // Ctrl+U — View Source
        // Ctrl+S — Save Page
        // Ctrl+A — Select All
        // Ctrl+P — Print (exposes source in print preview)
        if (['U', 'S', 'A', 'P'].includes(key)) {
          e.preventDefault();
          return;
        }
      }
    };

    // ── 3. Image drag-out prevention ────────────────────────────
    const blockDrag = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') e.preventDefault();
    };

    // ── 4. Print screen / screenshot via keyboard (partial) ─────
    //    We can't block OS-level screenshots but we can catch
    //    the keydown and blur the page content briefly.
    const blockPrintScreen = (e: KeyboardEvent) => {
      if (e.key === 'PrintScreen') {
        // Temporarily hide body content on PrintScreen press
        document.body.style.visibility = 'hidden';
        setTimeout(() => { document.body.style.visibility = 'visible'; }, 300);
      }
    };

    document.addEventListener('contextmenu', blockContextMenu);
    document.addEventListener('keydown', blockShortcuts);
    document.addEventListener('keydown', blockPrintScreen);
    document.addEventListener('dragstart', blockDrag);

    return () => {
      document.removeEventListener('contextmenu', blockContextMenu);
      document.removeEventListener('keydown', blockShortcuts);
      document.removeEventListener('keydown', blockPrintScreen);
      document.removeEventListener('dragstart', blockDrag);
    };
  }, []);

  return null;
}
