'use client';

import { useState } from 'react';
import { site } from '@/lib/site';

const interests = [
  'Interior finishing panel',
  'Cabinet body material',
  'Floor panel',
  'Customised furniture',
  'Public / commercial project',
  'Distribution & trade enquiry',
];

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
export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? '').trim();

    const subject = `RMP enquiry — ${get('company') || get('name')}`;
    const body = [
      `Name: ${get('name')}`,
      `Company: ${get('company') || '—'}`,
      `Email: ${get('email')}`,
      `Phone: ${get('phone') || '—'}`,
      `Interest: ${get('interest')}`,
      `Project / quantity: ${get('project') || '—'}`,
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
          Name <span className="text-gold-600">*</span>
        </label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>

      <div>
        <label className={label} htmlFor="company">
          Company
        </label>
        <input id="company" name="company" autoComplete="organization" className={field} />
      </div>

      <div>
        <label className={label} htmlFor="email">
          Email <span className="text-gold-600">*</span>
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={field} />
      </div>

      <div>
        <label className={label} htmlFor="phone">
          Phone
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
      </div>

      <div className="sm:col-span-2">
        <label className={label} htmlFor="interest">
          I am interested in
        </label>
        <select id="interest" name="interest" defaultValue={interests[0]} className={field}>
          {interests.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className={label} htmlFor="project">
          Project name or estimated quantity
        </label>
        <input
          id="project"
          name="project"
          className={field}
          placeholder="e.g. 400 m² of 12 mm panel, hotel fit-out, Q3"
        />
      </div>

      <div className="sm:col-span-2">
        <label className={label} htmlFor="message">
          Message <span className="text-gold-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={field}
          placeholder="Tell us about the fire requirement, the finish you have in mind and your programme."
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full bg-ink-900 px-7 py-4 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-gold-500 hover:text-ink-900 sm:w-auto"
        >
          Compose enquiry email
        </button>
        <p aria-live="polite" className="mt-4 text-sm leading-relaxed text-ink-500">
          {sent
            ? `Your mail client should now be open with the enquiry ready to send to ${site.email}. If nothing happened, email us directly.`
            : `This opens your own email client with the enquiry pre-filled and addressed to ${site.email} — nothing is sent until you press send.`}
        </p>
      </div>
    </form>
  );
}
