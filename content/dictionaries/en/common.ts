// Site-wide copy shared by every page: navigation, footer, demo form, Insights UI.

const common = {
  meta: {
    title: "Flowramo · AI systems and product engineering",
    description:
      "Flowramo designs, engineers and delivers AI agents, automation and software products that take real work off your team. Built for Arabic and English, installed on infrastructure you own.",
    ogTitle: "AI systems, engineered for real business.",
  },

  nav: {
    solutions: "Solutions",
    lina: "Lina",
    insights: "Insights",
    about: "About",
    contact: "Contact",
    cta: "Start a project",
    demo: "Book a private demo",
    home: "Flowramo home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLabel: "العربية",
    switchAria: "Switch to Arabic",
    productTag: "Product",
  },

  footer: {
    statement: "AI systems and product engineering, built to be owned by the business that runs them.",
    company: "Company",
    capabilities: "Capabilities",
    product: "Product",
    legal: "Legal",
    privacy: "Privacy",
    terms: "Terms",
    email: "habib@flowramo.com",
    emailLabel: "Write to us",
    rights: "© 2026 Flowramo",
    linaLine: "AI receptionist for dental clinics",
  },

  capabilities: [
    { id: "ai-agents", name: "AI Agents" },
    { id: "automation", name: "Business Automation" },
    { id: "custom-ai", name: "Custom AI Applications" },
    { id: "saas", name: "SaaS Engineering" },
    { id: "knowledge", name: "AI Knowledge Systems" },
    { id: "integrations", name: "Integrations" },
  ],

  demo: {
    title: "Book a private demo",
    sub: "Watch Lina handle the questions your patients ask, then put your own to her. No commitment.",
    name: "Your name",
    namePh: "Dr. Ayşe Kaya",
    clinic: "Clinic name",
    clinicPh: "Kaya Dental",
    whatsapp: "WhatsApp number",
    whatsappPh: "+90 555 000 00 00",
    country: "Country",
    countryPh: "Türkiye",
    email: "Email",
    emailPh: "Optional",
    optional: "(optional)",
    submit: "Request my private demo",
    sending: "Sending…",
    error: "Your request didn't go through. Check your connection and send it again.",
    thanks: "Thanks, {name}. Your request is in.",
    thanksAnon: "Thanks. Your request is in.",
    thanksSub: "We'll message you on WhatsApp to set up your private demo of Lina.",
    done: "Done",
    close: "Close",
  },

  blog: {
    title: "Flowramo Insights",
    sub: "Practical guides on AI systems at work: agents, automation, owning what you build, and what we learned building Lina for dental clinics.",
    read: "Read article",
    minutes: "{n} min read",
    answer: "The short answer",
    takeaways: "Key takeaways",
    toc: "In this article",
    faq: "Frequently asked questions",
    sources: "Sources",
    related: "Keep reading",
    updated: "Updated",
    by: "By the Flowramo team",
    back: "All articles",
    home: "Home",
    cta: {
      title: "See Lina answer your patients.",
      sub: "In a private demo, watch Lina handle the questions your patients ask, then put your own to her. No commitment.",
      button: "Book a private demo",
    },
    ctaStudio: {
      title: "Have work a system should carry?",
      sub: "Tell us how the work runs today. We'll set up a call and map what a system could take off your team.",
      button: "Start a project",
    },
  },

  journal: {
    h2: "Latest insights",
    all: "All insights",
    topics: { studio: "AI systems", lina: "Dental clinics" },
  },
};

export default common;
export type CommonDict = typeof common;
