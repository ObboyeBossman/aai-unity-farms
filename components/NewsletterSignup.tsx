'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

const shopifyEase = [0.2, 0, 0, 1] as const;

type Status = 'idle' | 'loading' | 'success' | 'error';

interface NewsletterSignupProps {
  variant?: 'footer' | 'section';
}

export function NewsletterSignup({ variant = 'section' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    setErrorMsg('');

    // Store in localStorage as a simple subscriber list
    // (swap for an email API like Mailchimp/Resend when ready)
    try {
      const existing = JSON.parse(localStorage.getItem('aai_subscribers') || '[]') as string[];
      if (existing.includes(email.toLowerCase())) {
        setErrorMsg('You\'re already subscribed!');
        setStatus('error');
        return;
      }
      existing.push(email.toLowerCase());
      localStorage.setItem('aai_subscribers', JSON.stringify(existing));
      setStatus('success');
      setEmail('');
    } catch {
      setErrorMsg('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  if (variant === 'footer') {
    return (
      <div className="flex flex-col gap-4">
        <p className="type-label text-farm-text-muted">Stay Updated</p>
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: shopifyEase }}
              className="flex items-center gap-2 text-farm-gold"
            >
              <CheckCircle2 size={16} />
              <span className="text-sm">You're subscribed!</span>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <input
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); setStatus('idle'); }}
                placeholder="your@email.com"
                className="farm-input text-sm flex-1 min-w-0 py-2.5"
                aria-label="Email address"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary px-4 py-2.5 shrink-0"
                aria-label="Subscribe"
              >
                {status === 'loading' ? (
                  <span className="w-4 h-4 border-2 border-farm-surface/30 border-t-farm-surface rounded-full animate-spin" />
                ) : (
                  <ArrowRight size={16} />
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="type-micro text-red-400"
          >
            {errorMsg}
          </motion.p>
        )}
      </div>
    );
  }

  // Section variant — full width homepage block
  return (
    <section className="py-24 border-t border-farm-border">
      <div className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, ease: shopifyEase }}
          className="w-14 h-14 rounded-full bg-farm-gold/10 border border-farm-gold/20 flex items-center justify-center mb-6"
        >
          <Mail size={24} className="text-farm-gold" />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, ease: shopifyEase }}
          className="eyebrow"
        >
          Stay in the Loop
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.34, ease: shopifyEase }}
          className="type-headline text-farm-text mb-4"
        >
          Farm news, straight to you.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.32, delay: 0.08, ease: shopifyEase }}
          className="type-body text-farm-text-muted mb-10"
        >
          Get seasonal harvest updates, export availability notices, and
          pricing changes before anyone else.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.32, delay: 0.14, ease: shopifyEase }}
          className="w-full max-w-md"
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: shopifyEase }}
                className="flex flex-col items-center gap-3 py-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
                  className="w-14 h-14 rounded-full bg-farm-gold/10 border border-farm-gold/30 flex items-center justify-center"
                >
                  <CheckCircle2 size={26} className="text-farm-gold" />
                </motion.div>
                <p className="type-title text-farm-text">You&apos;re subscribed!</p>
                <p className="type-body text-farm-text-muted" style={{ fontSize: '14px' }}>
                  We&apos;ll be in touch with the latest farm news.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setStatus('idle'); }}
                  placeholder="Enter your email address"
                  className="farm-input flex-1"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary shrink-0 gap-2 disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-farm-surface/30 border-t-farm-surface rounded-full animate-spin" />
                      Subscribing…
                    </>
                  ) : (
                    <>Subscribe <ArrowRight size={16} /></>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="type-micro text-red-400 mt-3 text-center"
            >
              {errorMsg}
            </motion.p>
          )}

          {status !== 'success' && (
            <p className="type-micro text-farm-text-muted mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
