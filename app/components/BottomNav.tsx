'use client';

/**
 * The bar along the bottom of the screen. Each button opens one area of the
 * app. Purely navigation: it holds no data of its own.
 */

export type Tab = 'chat' | 'journal' | 'calendar' | 'scripture';

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  {
    id: 'chat',
    label: 'Chat',
    icon: (
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4h0A1.5 1.5 0 0 1 4 14.5v-9Z" />
    ),
  },
  {
    id: 'journal',
    label: 'Journal',
    icon: (
      <>
        <path d="M6 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M8 3v18M11 8h4M11 12h4" />
      </>
    ),
  },
  {
    id: 'calendar',
    label: 'Calendar',
    icon: (
      <>
        <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
        <path d="M3.5 10h17M8 3v4M16 3v4" />
      </>
    ),
  },
  {
    id: 'scripture',
    label: 'Scripture',
    icon: (
      <>
        <path d="M12 6.5C10.5 5 8 4.5 3.5 4.5v14c4.5 0 7 .5 8.5 2 1.5-1.5 4-2 8.5-2v-14c-4.5 0-7 .5-8.5 2Z" />
        <path d="M12 6.5v14" />
      </>
    ),
  },
];

export function BottomNav({ active, onChange }: { active: Tab; onChange: (t: Tab) => void }) {
  return (
    <nav className="bottom-nav" aria-label="Main">
      <div className="bottom-nav-inner">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={`bottom-nav-btn${active === t.id ? ' is-active' : ''}`}
            aria-current={active === t.id ? 'page' : undefined}
            onClick={() => onChange(t.id)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {t.icon}
            </svg>
            <span>{t.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
