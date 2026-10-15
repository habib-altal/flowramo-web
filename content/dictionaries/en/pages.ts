// Copy for the inner company pages: Solutions, About, Contact and the two legal notices.
// Same rules as home.ts: concrete, no invented proof, nothing claimed that is not live.

const pages = {
  solutions: {
    meta: {
      // title names the page in breadcrumbs and structured data; seoTitle is the <title> (the layout adds "· Flowramo").
      title: "Solutions",
      seoTitle: "AI agents, automation and custom AI systems",
      description:
        "Six kinds of AI systems: agents, business automation, custom AI apps, SaaS, knowledge systems and integrations, installed on infrastructure you own.",
    },
    h1: "Systems for the work your team repeats every day.",
    sub: "Six kinds of systems. One project can combine several into a single system that fits how your business already runs.",
    includes: "What goes into it",
    uses: "Where it fits",
    inLina: "Running in Lina",
    items: {
      "ai-agents": ["Answer and qualify enquiries on WhatsApp", "Book, reschedule and confirm appointments", "Send complaints and urgent cases to the right person"],
      automation: ["Route new leads to the right person, with context", "Send reminders, follow-ups and renewals on schedule", "Keep your CRM, calendar and spreadsheets in sync"],
      "custom-ai": ["Read invoices, forms and contracts into clean data", "Transcribe and summarise voice notes", "Sort incoming photos and documents for review"],
      saas: ["Turn an internal tool into a product other businesses use", "Dashboards with roles and permissions", "Admin, onboarding and reporting tools"],
      knowledge: ["An internal assistant for your policies and procedures", "Customer answers drawn only from approved content", "Faster onboarding for new staff"],
      integrations: ["WhatsApp Business Platform set-up", "Calendar, CRM and database connections", "Custom APIs and webhooks between your systems"],
    } as Record<string, string[]>,
    // Label above the Insights guides linked from a capability.
    guide: "Further reading",
    closing: {
      h2: "Not sure which one you need?",
      text: "Most people are not. Describe the work that slows your team down and we will tell you which system would clear it, and what it would take.",
      cta: "Start a project",
      guides: "Read before you start",
    },
  },

  about: {
    meta: {
      title: "About",
      // Used as an absolute <title> (it already names Flowramo).
      seoTitle: "About Flowramo: a founder-led AI systems studio",
      description:
        "Flowramo is a founder-led studio that designs and builds AI agents, automation and software products in Arabic and English, on infrastructure you own.",
    },
    h1: "We build AI systems we would trust with our own business.",
    intro: [
      "Flowramo is an AI systems and product engineering studio. We design, engineer and install agents, automation and software products for businesses whose work runs through conversations, documents and repeatable steps.",
      "Flowramo is founder-led. Habib designs and engineers the systems we ship, and you talk to him directly from the first call.",
    ],
    principlesH2: "How we work",
    principles: [
      { title: "Systems, not demos.", text: "We build for the hundredth conversation, not the first. Every system ships with limits, fallbacks and a hand-off to a person." },
      { title: "Start from the real work.", text: "We map how the work happens today and measure the system against it, not against a slide." },
      { title: "Yours to own.", text: "We install on infrastructure you choose and connect to your own accounts. You keep the system and the data." },
      { title: "Arabic from day one.", text: "We design, write and test in Arabic and English together. Arabic is never a translation layer added at the end." },
    ],
    origin: {
      h2: "Lina came first.",
      text: [
        "We built Lina for dental clinics because a clinic's WhatsApp shows every hard problem at once: urgent messages at night, patients writing in many languages, private information, and a calendar that cannot be wrong.",
        "What we learned building it is how we build everything else.",
      ],
      cta: "Explore Lina",
    },
    closing: { h2: "Have a system in mind?", cta: "Start a project" },
  },

  contact: {
    meta: {
      title: "Start a project",
      description: "Tell Flowramo about the work you want off your team's hands. We reply by email or WhatsApp to set up a call.",
    },
    h1: "Start a project.",
    sub: "Tell us a little about your business and the work you want off your team's hands. It takes a minute.",
    next: {
      h2: "What happens next",
      steps: ["We read your request and reply by email or WhatsApp.", "A call to map the work as it happens today.", "A written blueprint, with scope and price, before any build begins."],
    },
    direct: "Prefer email?",
    tryLina: "Want to see a system first?",
    tryLinaCta: "Try Lina on WhatsApp",
    form: {
      name: "Your name",
      namePh: "Full name",
      company: "Company",
      companyPh: "Business or clinic name",
      email: "Email",
      emailPh: "you@company.com",
      whatsapp: "WhatsApp number",
      whatsappPh: "+971 50 000 0000",
      country: "Country",
      countryPh: "United Arab Emirates",
      intent: "What do you need?",
      message: "What should the system take off your team?",
      messagePh: "A few lines are enough: what happens today, where it waits, what you would like instead.",
      intents: [
        { id: "lina", label: "Lina for my clinic" },
        { id: "ai-agents", label: "An AI agent" },
        { id: "automation", label: "Automation" },
        { id: "custom-ai", label: "A custom AI application" },
        { id: "saas", label: "A SaaS product" },
        { id: "knowledge", label: "A knowledge system" },
        { id: "integrations", label: "Integrations" },
        { id: "unsure", label: "Not sure yet" },
      ],
      optional: "(optional)",
      consent: "We use these details only to reply to you.",
      privacy: "Privacy notice",
      submit: "Send my request",
      sending: "Sending…",
      error: "Your request didn't go through. Check your connection and send it again, or write to habib@flowramo.com.",
      thanks: "Thanks, {name}. Your request is in.",
      thanksAnon: "Thanks. Your request is in.",
      thanksSub: "We'll reply by email or WhatsApp to arrange a call.",
    },
  },

  privacy: {
    meta: {
      title: "Privacy notice",
      description: "How Flowramo handles the personal information you share through this website and the Lina demo.",
    },
    h1: "Privacy notice",
    updated: "Last updated 13 October 2026",
    intro:
      "This notice explains what personal information Flowramo collects through this website and the Lina demo on WhatsApp, why, and what you can ask us to do with it. It does not cover systems we install for clients: those run on the client's own infrastructure, and the client decides how its customers' data is handled.",
    sections: [
      {
        h2: "Who we are",
        body: ["Flowramo builds AI systems and software products. For anything in this notice, write to habib@flowramo.com."],
      },
      {
        h2: "What we collect",
        body: [
          "When you send a project or demo request: your name, your company or clinic name, your WhatsApp number, your country, your email if you give it, what you are interested in, any message you write, and the language you used.",
          "When you message the Lina demo on WhatsApp: the messages you send and the number you send them from, so the demo can reply.",
          "When you browse the site: anonymous, aggregated usage figures (pages viewed, referrer, country, device type) from Vercel Web Analytics, which does not use cookies. Our hosting provider also keeps short-lived technical logs, such as IP addresses, to run and protect the site.",
        ],
      },
      {
        h2: "Why we use it",
        body: [
          "To reply to your request, arrange a call and prepare a proposal. To run the Lina demo. To understand which pages are useful and to keep the site secure. We do not sell your information and we do not use it for advertising.",
        ],
      },
      {
        h2: "Who processes it",
        body: [
          "We use a small number of service providers: Vercel (website hosting and analytics), Supabase (the database that stores requests), Google (the email that tells us a request arrived), Meta (WhatsApp), and AI model providers that process demo messages so Lina can reply. They handle the information on our behalf and only for these purposes.",
        ],
      },
      {
        h2: "The Lina demo",
        body: [
          "The demo is for trying Lina, not for real medical questions. Please do not send health information you would not want stored. Lina does not diagnose, and nothing it says in the demo is medical advice.",
        ],
      },
      {
        h2: "How long we keep it",
        body: [
          "We keep request details while we are in contact with you and for a reasonable period after, then delete them. You can ask us to delete them sooner at any time.",
        ],
      },
      {
        h2: "Your choices",
        body: [
          "You can ask to see the information we hold about you, correct it or delete it. Write to habib@flowramo.com and we will act on your request.",
        ],
      },
      {
        h2: "Changes",
        body: ["If we change how we handle personal information, we will update this page and the date at the top."],
      },
    ],
  },

  terms: {
    meta: {
      title: "Terms of use",
      description: "The terms for using the Flowramo website and the Lina demo.",
    },
    h1: "Terms of use",
    updated: "Last updated 13 October 2026",
    intro: "These terms cover your use of this website and the Lina demo. Work we do for clients is governed by a separate written agreement.",
    sections: [
      {
        h2: "Using the site",
        body: ["You may use this site to learn about Flowramo and to contact us. Please don't misuse it, for example by trying to disrupt it, access it without permission or send automated requests."],
      },
      {
        h2: "Information on the site",
        body: [
          "We write the content on this site carefully, but it is general information, not professional advice for your situation. Articles may cite third-party sources, which we link so you can check them.",
        ],
      },
      {
        h2: "The Lina demo",
        body: [
          "The demo shows how Lina works. Its answers, prices and appointment times are examples, no booking you make there is real, and nothing it says is medical advice.",
        ],
      },
      {
        h2: "Our content",
        body: ["The Flowramo and Lina names, logos, text and design on this site belong to Flowramo. Please ask before reusing them."],
      },
      {
        h2: "Liability",
        body: ["The site and the demo are provided as they are. To the extent the law allows, we are not responsible for losses that come from relying on them."],
      },
      {
        h2: "Changes and contact",
        body: ["We may update these terms and will change the date above when we do. Questions: habib@flowramo.com."],
      },
    ],
  },
};

export default pages;
export type PagesDict = typeof pages;
