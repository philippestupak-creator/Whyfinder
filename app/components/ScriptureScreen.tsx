'use client';

/**
 * Personal Scripture. Placeholder until accounts exist: the plan is verses
 * chosen for what this person is walking through, shown daily if they want.
 * Any theme must come from the person (chosen, or a guess they confirmed),
 * never a label the app puts on them (see README, C-xx rules).
 */

export function ScriptureScreen() {
  return (
    <section className="screen" aria-label="Scripture">
      <h1 className="screen-title">Your Scripture</h1>
      <p className="screen-lead">
        Verses for what you&rsquo;re walking through, a new one each day if you&rsquo;d like.
      </p>

      <div className="screen-card">
        <h2 className="screen-h">Coming soon</h2>
        <p className="screen-note">
          You&rsquo;ll pick what you want Scripture for, and WhyFinder will suggest passages
          that fit. You stay in charge of what&rsquo;s on this page.
        </p>
      </div>
    </section>
  );
}
