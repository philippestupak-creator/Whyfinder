'use client';

/**
 * The front door: sign in or create an account.
 *
 * PREVIEW: accounts are not connected yet. Every button leads into the app so
 * the design can be tried. Real sign-in (and the Google / Apple buttons) will
 * come from an account service once one is chosen.
 */

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './login.css';

type Mode = 'signin' | 'signup';

export default function Welcome() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>('signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function enter() {
    router.push('/chat');
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (mode === 'signup' && !name.trim()) return setError('Add your first name.');
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError('That email doesn’t look quite right.');
    if (password.length < 8) return setError('Use at least 8 characters for your password.');
    setError('');
    enter();
  }

  return (
    <div className="lg">
      <section className="lg-hero" aria-hidden="false">
        <svg className="lg-path" viewBox="0 0 320 320" fill="none" aria-hidden="true">
            <circle cx="160" cy="160" r="150" />
            <circle cx="160" cy="160" r="108" />
            <circle cx="160" cy="160" r="66" />
            <path d="M24 250 C 90 210, 120 120, 160 160 S 250 110, 300 60" className="lg-path-line" />
            <circle cx="160" cy="160" r="6" className="lg-path-dot" />
          </svg>
        <div className="lg-brand">Why<span>Finder</span></div>
        <div className="lg-hero-body">
          <h1 className="lg-headline">Notice your&nbsp;why.</h1>
          <p className="lg-sub">
            See what keeps showing up in your life, keep what matters in a journal,
            and find Scripture for the road you&rsquo;re on.
          </p>
        </div>
        <p className="lg-fine">
          WhyFinder is a tool for thinking, not a therapist or a pastor. When things are hard,
          it points you to real people.
        </p>
      </section>

      <section className="lg-panel">
        <div className="lg-card">
          <div className="lg-brand lg-brand-mobile">Why<span>Finder</span></div>
          <p className="lg-tagline-mobile">Notice your&nbsp;why.</p>
          <h2 className="lg-title">{mode === 'signin' ? 'Welcome back' : 'Create your account'}</h2>
          <p className="lg-lead">
            {mode === 'signin' ? 'Sign in to pick up where you left off.' : 'It takes less than a minute.'}
          </p>

          <div className="lg-social">
            <button type="button" className="lg-btn lg-btn-dark" onClick={enter}>Continue with Apple</button>
            <button type="button" className="lg-btn lg-btn-light" onClick={enter}>Continue with Google</button>
          </div>

          <div className="lg-or"><span>or use your email</span></div>

          <form onSubmit={submit} noValidate>
            {mode === 'signup' && (
              <label className="lg-field">
                <span>First name</span>
                <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="given-name" />
              </label>
            )}
            <label className="lg-field">
              <span>Email</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
            </label>
            <label className="lg-field">
              <span>Password</span>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                     autoComplete={mode === 'signin' ? 'current-password' : 'new-password'} />
            </label>
            {error && <p className="lg-error" role="alert">{error}</p>}
            <button type="submit" className="lg-btn lg-btn-primary">
              {mode === 'signin' ? 'Sign in' : 'Create account'}
            </button>
          </form>

          <p className="lg-switch">
            {mode === 'signin' ? 'New to WhyFinder?' : 'Already have an account?'}{' '}
            <button type="button" onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setError(''); }}>
              {mode === 'signin' ? 'Create an account' : 'Sign in'}
            </button>
          </p>

          <p className="lg-preview">Preview: accounts aren&rsquo;t connected yet, so any email works for now.</p>
        </div>

        <p className="lg-help">
          Need to talk to someone right now? Call or text <a href="tel:988">988</a>, any time.
        </p>
      </section>
    </div>
  );
}
