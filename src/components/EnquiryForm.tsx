'use client';

import { useState } from 'react';
import { type Dictionary, fill } from '@/i18n';
import { site } from '@/lib/site';

const field =
  'mt-2 w-full border border-ink-900/20 bg-paper px-4 py-3 text-sm text-ink-800 transition-colors placeholder:text-ink-300 focus:border-gold-500 focus:outline-none';
const label = 'block text-xs font-semibold tracking-[0.16em] text-ink-500 uppercase';

/**
 * Composes a pre-filled email to the distributor.
 *
 * There is no backend on this site, so rather than pretending to submit, the
 * form hands a fully written enquiry to the visitor's mail client — which also
 * leaves them a copy in their own sent items.
 */
export function EnquiryForm({ t }: { t: Dictionary }) {
  const [sent, setSent] = useState(false);
  const f = t.contact.form;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? '').trim();

    const subject = `${f.subject} — ${get('company') || get('name')}`;
    const body = [
      `${f.fieldName}: ${get('name')}`,
      `${f.fieldCompany}: ${get('company') || '—'}`,
      `${f.fieldEmail}: ${get('email')}`,
      `${f.fieldPhone}: ${get('phone') || '—'}`,
      `${f.fieldInterest}: ${get('interest')}`,
      `${f.fieldProject}: ${get('project') || '—'}`,
      '',
      get('message'),
    ].join('\n');

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
      <div>
        <label className={label} htmlFor="name">
          {f.name} <span className="text-gold-600">*</span>
        </label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>

      <div>
        <label className={label} htmlFor="company">
          {f.company}
        </label>
        <input id="company" name="company" autoComplete="organization" className={field} />
      </div>

      <div>
        <label className={label} htmlFor="email">
          {f.email} <span className="text-gold-600">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
        />
      </div>

      <div>
        <label className={label} htmlFor="phone">
          {f.phone}
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
      </div>

      <div className="sm:col-span-2">
        <label className={label} htmlFor="interest">
          {f.interest}
        </label>
        <select id="interest" name="interest" defaultValue={f.interests[0]} className={field}>
          {f.interests.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className={label} htmlFor="project">
          {f.project}
        </label>
        <input id="project" name="project" className={field} placeholder={f.projectPlaceholder} />
      </div>

      <div className="sm:col-span-2">
        <label className={label} htmlFor="message">
          {f.message} <span className="text-gold-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={field}
          placeholder={f.messagePlaceholder}
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full bg-ink-900 px-7 py-4 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-gold-500 hover:text-ink-900 sm:w-auto"
        >
          {f.submit}
        </button>
        <p aria-live="polite" className="mt-4 text-sm leading-relaxed text-ink-500">
          {fill(sent ? f.sent : f.hint, { email: site.email })}
        </p>
      </div>
    </form>
  );
}
