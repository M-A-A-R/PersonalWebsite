// Content — sync with CONTENT.md after editing. All link URLs live in links.ts.
import { links } from './links'

export const personal = {
  name: "Mahesh Arunachalam",
  tagline: "Building cool shit.",
  role: "Data Science @ UC Berkeley",
  location: "Berkeley, CA",
  email: "arunachalam_mahesh@berkeley.edu",
  workEmail: "mahesh@convexia.bio",
  interests: "spikeball, cooking, hiking, photography",
  links: {
    github: links.github,
    linkedin: links.linkedin,
  },
  bio: "I'm a Data Science student at UC Berkeley with a minor in Mechanical Engineering. I prev spent 5+ years exploring the field of computational biology having published four papers and now lead the bootcamp at comp bio @ berkeley. Since I came to Cal i've been focused on shipping useful products",
  /** Words/phrases to highlight in green in the bio (order by length, longest first). */
  accentWords: ["UC Berkeley", "computational biology", "comp bio", "Cal", "Berkeley", "Convexia", "YC"],
}

// One line per role; link comes from links.ts
export const experience = [
  { role: "Lead of Scientific Development", company: "Convexia (YC S25)", line: "SOTA ADMET model, 15/22 TDC benchmarks; contributed to $3M seed raise", link: links.experience.convexia },
  { role: "Software & Machine Learning", company: "Brighterway (YC S24)", line: "Medical case filtering model; automated AMA impairment scoring", link: links.experience.brighterway },
  { role: "Research Associate", company: "Texas Tech Health Sciences Center", line: "Five-phase drug repurposing pipeline, 300% precision improvement; AACR 2024", link: links.experience.texasTech },
  { role: "Research Intern", company: "USC Graham Lab", line: "Systems biology, molecular modeling, cancer research", link: links.experience.grahamLab },
  { role: "Neurogenetic Lab Intern", company: "USC Zilkha Institute", line: "Proteomics, data pipelines for microspectrometer", link: links.experience.uscZilkha },
]

// Name + one line; link comes from links.ts
export const projects = [
  { name: "Courseium", line: "AI degree path mapper; hybrid RAG + voice interface", link: links.projects.courseium },
  { name: "Novelty Research", line: "Real-time research breakthrough tracker tied to your ELN", link: links.projects.noveltyResearch },
  { name: "WhiteboardAI", line: "AI tutor on your whiteboard; OCR + Gemini + Vapi", link: links.projects.whiteboardAI },
  { name: "VibeCad", line: "One-shot CAD design from natural language", link: links.projects.vibeCad },
]

export const publications = [
  { title: "New Generation Drug Development from In-silico Identification to Preclinical Evaluation in Glioblastoma", journal: "AACR", year: "2024", link: links.publications.aacr2024 },
  { title: "Screening Of Naturopathic Hits in The Treatment of Receptor Tyrosine Kinase Mediated Cancer (In-silico)", journal: "IJHSR", year: "2024", link: links.publications.ijhsr2024 },
  { title: "Short-course Antibiotics for Treatment of Uncomplicated Community Acquired Pneumonia in Pediatric Patients", journal: "Western Amer. Fed. Medical Research", year: "2022", link: links.publications.shortCourse2022 },
]

export const awards = [
  "AWS MCP Agents Hackathon Winner — Linkup + Senso.ai Prize ($2,750)",
  "ISEF Finalist",
  "1st Place — CA State Science Fair (also 1st LACSEF)",
  "International BioGENEius Finalist",
  "Top 300 Broadcom MASTERS Semifinalist",
  "AACR Annual Meeting Presenter",
  "Yale Science & Engineering Association Award",
  "UCLA Brain Research Institute Award",
  "President's Volunteer Gold Service Award",
  "Best Delegate — Model United Nations (India)",
  "International Indian Classical Vocal Finalist (FETNA)",
]

// Photo gallery — 2–4 images for the horizontal strip
// Local: put files in public/images/ and use "/images/yourfile.jpg"
// External: use full URL like "https://example.com/photo.jpg"
export const photoGallery = [
  "https://picsum.photos/800/600?random=1",
  "https://picsum.photos/400/400?random=2",
  "https://picsum.photos/400/400?random=3",
]

// Photography section — your work
export const photography = [
  { src: "https://picsum.photos/400/400?random=4", caption: "" },
  { src: "https://picsum.photos/400/400?random=5", caption: "" },
  { src: "https://picsum.photos/400/400?random=6", caption: "" },
]
