'use client';

/**
 * Calendar. For now: this month at a glance, and the place where connecting
 * Google Calendar or Apple Calendar will live. Connecting needs accounts
 * (sign-in) first, so those buttons are placeholders.
 */

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function CalendarScreen() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  const monthName = today.toLocaleString(undefined, { month: 'long', year: 'numeric' });

  return (
    <section className="screen" aria-label="Calendar">
      <h1 className="screen-title">Calendar</h1>
      <p className="screen-lead">{monthName}</p>

      <div className="cal-grid" role="grid">
        {DAYS.map((d) => <div className="cal-dow" key={d}>{d}</div>)}
        {cells.map((n, i) => (
          <div key={i} className={`cal-day${n === today.getDate() ? ' is-today' : ''}`}>
            {n ?? ''}
          </div>
        ))}
      </div>

      <div className="screen-card">
        <h2 className="screen-h">Connect your calendar</h2>
        <p className="screen-note">
          Choose the calendar you already use. This will be available once sign-in is set up.
        </p>
        <div className="screen-actions">
          <button className="btn" disabled>Google Calendar</button>
          <button className="btn" disabled>Apple Calendar</button>
        </div>
      </div>
    </section>
  );
}
