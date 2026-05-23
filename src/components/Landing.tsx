import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import {
  greeting,
  tagline,
  focusLine,
  introParagraph,
  compBioLine,
  workSectionTitle,
  research,
  researchBlog,
  companiesTitle,
  companies,
  connect,
} from '../data'

const EASE_AURA = [0.16, 1, 0.3, 1] as const

/* Each block fades + lifts + un-blurs — the "aura" reveal */
const block: Variants = {
  hidden: { opacity: 0, y: 14, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: EASE_AURA },
  },
}

/* Container staggers its children for a gentle waterfall */
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
}

/* Dividers expand horizontally from the left */
const dividerVariant: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: EASE_AURA },
  },
}

function Divider() {
  return (
    <motion.hr
      className="divider"
      variants={dividerVariant}
      aria-hidden
    />
  )
}

function LinkRow({ label, href }: { label: string; href: string }) {
  if (!href) {
    return <li className="text-body">{label}</li>
  }
  const isMailto = href.startsWith('mailto:')
  return (
    <li>
      <a
        href={href}
        target={isMailto ? undefined : '_blank'}
        rel={isMailto ? undefined : 'noopener noreferrer'}
        className="link-classic link-row"
      >
        {label}
      </a>
    </li>
  )
}

export default function Landing() {
  const reduceMotion = useReducedMotion()

  const blockV = reduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : block
  const containerV = reduceMotion
    ? { hidden: {}, visible: { transition: { staggerChildren: 0 } } }
    : container
  const dividerV = reduceMotion
    ? { hidden: { opacity: 1, scaleX: 1 }, visible: { opacity: 1, scaleX: 1 } }
    : dividerVariant

  return (
    <motion.article
      className="text-left"
      initial="hidden"
      animate="visible"
      variants={containerV}
    >
      {/* Identity */}
      <motion.div variants={blockV}>
        <h1 className="text-lg font-bold text-body">{greeting}</h1>
        <p className="mt-1 text-muted text-base">{tagline}</p>
      </motion.div>

      {/* Intro paragraph cluster — tight internal spacing, single fade */}
      <motion.div variants={blockV} className="mt-8 space-y-3">
        <p className="text-body">{focusLine}</p>
        <p className="text-body">{introParagraph}</p>
        <p className="text-body">
          {compBioLine.before}
          <a
            href={compBioLine.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-classic"
          >
            {compBioLine.linkLabel}
          </a>
          {compBioLine.after}
        </p>
      </motion.div>

      <motion.div variants={dividerV} className="my-10">
        <Divider />
      </motion.div>

      {/* Work */}
      <motion.div variants={blockV}>
        <p className="section-label text-body mb-3">{workSectionTitle}</p>
        <ul className="list-none space-y-1.5">
          {research.map((entry) => (
            <LinkRow
              key={entry.label}
              label={entry.label}
              href={entry.href}
            />
          ))}
        </ul>
      </motion.div>

      <motion.div variants={dividerV} className="my-10">
        <Divider />
      </motion.div>

      {/* Research blog */}
      <motion.div variants={blockV}>
        <a
          href={researchBlog.href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-classic link-row section-label"
        >
          {researchBlog.label}
        </a>
      </motion.div>

      <motion.div variants={dividerV} className="my-10">
        <Divider />
      </motion.div>

      {/* Companies */}
      <motion.section variants={blockV}>
        <p className="section-label text-body mb-3">{companiesTitle}</p>
        <ul className="list-none space-y-1.5">
          {companies.map((entry) => (
            <li key={entry.label}>
              <a
                href={entry.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-classic link-row"
              >
                {entry.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.div variants={dividerV} className="my-10">
        <Divider />
      </motion.div>

      {/* Connect */}
      <motion.div variants={blockV}>
        <ul className="list-none space-y-1.5">
          {connect.map((entry) => (
            <LinkRow
              key={entry.label}
              label={entry.label}
              href={entry.href}
            />
          ))}
        </ul>
      </motion.div>
    </motion.article>
  )
}
