// Site content — keep in sync with Websitecontent.txt
import { links } from './links'

export const greeting = "Hey, I'm Mahesh"

export const tagline = "CS + BioE @ Berkeley"

export const focusLine =
  "Currently working on improving drug side effects"

export const introParagraph =
  "I've had the pleasure of spending my last six years working in this field."

export const compBioLine = {
  before: "I teach all new members at ",
  linkLabel: "CompBio@Berkeley",
  after: ":",
  href: links.compBio,
}

export const workSectionTitle = "Here's some of my work:"

export const research = [
  { label: "Drug repurposing for GBM", href: links.aacr2024 },
  { label: "Naturopathic drug candidates", href: links.ijhsr2024 },
  { label: "Antibiotics for pediatric pneumonia", href: "" },
  {
    label: "Pending Publication: International Journal of Obesity",
    href: links.ijo,
  },
]

export const researchBlog = {
  label: "Current Research Blog",
  href: links.researchBlog,
}

export const companiesTitle = "Some cool companies I've worked for:"

export const companies = [
  {
    label: "Led Scientific Development @ Convexia",
    href: links.convexia,
  },
  {
    label: "First Engineer @ Brighterway",
    href: links.brighterway,
  },
]

export const connect = [
  { label: "LinkedIn", href: links.linkedin },
  { label: "Goodreads", href: links.goodreads },
  { label: "Email", href: `mailto:${links.email}` },
]
