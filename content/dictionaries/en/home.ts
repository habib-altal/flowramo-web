// Company home page copy. Rules: concrete over clever, no invented proof, no AI tells
// (see .claude/skills/copywriting and .claude/product-marketing.md).

const home = {
  meta: {
    title: "Flowramo · AI systems and product engineering",
    description:
      "We design, engineer and install AI agents, automation and software products that carry real work, in Arabic and English, on infrastructure you own.",
  },

  hero: {
    h1a: "We engineer AI systems",
    h1b: "that carry real work.",
    sub: "Agents that answer, book and follow up. Automations that move data to where it belongs. Products built to last. Designed around how your business runs, and installed on infrastructure you own.",
    primary: "Start a project",
    secondary: "Try Lina on WhatsApp",
    proof: { text: "One of our systems is live on WhatsApp now.", link: "See how it works" },
    canvas: {
      label: "How a Flowramo system works: messages, email, documents, calls and forms come in, the system does the work, and bookings, answers, follow-ups, updates and reports come out.",
      inputs: ["WhatsApp", "Email", "Documents", "Voice notes", "Forms"],
      core: "Your system",
      outputs: ["Booked", "Answered", "Followed up", "Updated", "Reported"],
      caption: "Every input mapped to the work it creates, and that work done.",
    },
  },

  problem: {
    h2: "Most businesses still run on people doing the work of software.",
    items: [
      { title: "Messages wait.", text: "A customer writes at night. Your team replies in the morning, after they have asked someone else.", before: "Unanswered since 23:48", after: "Answered at 23:48" },
      { title: "Knowledge leaks.", text: "Answers live in one person's head or a folder nobody opens. When that person is away, so is the answer.", before: "Only one person knows the answer", after: "Answered from approved knowledge" },
      { title: "Follow-ups slip.", text: "The second message, the one that turns interest into revenue, is the one nobody has time to send.", before: "Follow-up not sent, day 6", after: "Followed up on day 2" },
    ],
    close: "Each of these is a system problem, and each has a system answer.",
    labels: { waiting: "Customer waiting", replied: "Replied at", knows: "Who can answer", days: "Days since the enquiry" },
  },

  build: {
    h2: "What we build",
    sub: "Six kinds of systems, often combined into one.",
    inLina: "Running in Lina",
    explore: "Explore Lina",
    items: [
      {
        id: "ai-agents",
        outcome: "Agents that hold real conversations and finish the job: they answer, qualify, book and escalate.",
        parts: ["Several agents working as one", "Tools that take real actions", "Hand-off to a person with full context"],
        lina: "Lina answers, books, follows up and hands urgent cases to the doctor.",
      },
      {
        id: "automation",
        outcome: "Workflows that move information between your tools so nobody copies it by hand.",
        parts: ["Event-driven workflows", "Approvals and alerts", "Scheduled jobs and reminders"],
        lina: "Reminders and follow-ups go out on time without anyone sending them.",
      },
      {
        id: "custom-ai",
        outcome: "Internal tools that read documents, images and voice, and turn them into decisions your team can act on.",
        parts: ["Document and image understanding", "Voice-note transcription", "Review queues for your team"],
        lina: "Photos patients send wait in a queue for the doctor to review.",
      },
      {
        id: "saas",
        outcome: "Products other businesses run, from the data model to the dashboard to multi-client infrastructure.",
        parts: ["Multi-client data model", "Dashboards and briefings", "Admin and onboarding tools"],
        lina: "The clinic gets a dashboard and a morning briefing.",
      },
      {
        id: "knowledge",
        outcome: "Assistants that answer only from what your business has approved, and say so when they do not know.",
        parts: ["Search across your own documents", "Answers tied to a source", "Knowledge that stays current"],
        lina: "Answers come from the clinic's own documents.",
      },
      {
        id: "integrations",
        outcome: "Connections to the platforms you already use: WhatsApp Business, calendars, CRMs, databases and internal APIs.",
        parts: ["WhatsApp Business Platform", "Calendars and CRMs", "APIs and webhooks"],
        lina: "The clinic's WhatsApp is connected to its calendar.",
      },
    ],
  },

  lina: {
    kicker: "A system we built",
    h2: "One of our systems answers patients at 2 am.",
    sub: "Lina is the AI receptionist we built for dental clinics. It runs a clinic's WhatsApp in Arabic, English and Turkish, books into the calendar, follows up when patients go quiet and hands urgent cases to the doctor. It is the clearest way to see how we build.",
    shows: [
      "Agents that book, follow up and escalate",
      "Answers drawn from approved knowledge",
      "A hand-off the doctor can trust",
      "Installed on the clinic's own infrastructure",
    ],
    primary: "Explore Lina",
    secondary: "Try Lina on WhatsApp",
    chat: {
      meta: "02:07",
      name: "Lina",
      online: "online",
      typing: "typing…",
      patient: "Hi, my tooth has been hurting since yesterday. Can I come in today?",
      lina: "I'm sorry you're in pain. Dr. Kaya has 10:30 free this morning. Shall I hold it for you?",
      patient2: "Yes please.",
      booked: "Booked · Today 10:30",
      who: "Dr. Kaya · Emergency visit",
    },
  },

  process: {
    h2: "From the first conversation to a system that runs.",
    steps: [
      { name: "Map the work", text: "We sit with the work as it happens today: who does what, where it waits and what it costs.", out: "A map of the work" },
      { name: "Design the system", text: "You get a written blueprint: the system, its limits, what stays human and how we will measure it. Change or add anything before we build.", out: "A written blueprint" },
      { name: "Engineer and connect", text: "We build, connect and test against your real cases, in Arabic and English.", out: "A system tested on your cases" },
      { name: "Install", text: "The system goes live on infrastructure you choose, connected to your own accounts.", out: "Live on your infrastructure" },
      { name: "Train and stay", text: "We train your team, and an AI assistant set up for your system, to handle everyday issues. When you need us, we are still here.", out: "A team that can run it" },
    ],
  },

  own: {
    h2: "Yours to keep.",
    sub: "We build systems the way you would want to own them.",
    items: [
      { title: "Your infrastructure", text: "Installed on hosting you choose and control." },
      { title: "Your accounts", text: "Connected to your own WhatsApp, calendar and tools." },
      { title: "Your data", text: "Customer conversations and records stay in systems you own." },
      { title: "No subscription", text: "You pay for the system, not for permission to keep using it." },
    ],
  },

  faq: {
    h2: "Questions worth asking first.",
    sub: "If yours is not here, send it with your project and we will answer it directly.",
    items: [
      {
        q: "What kinds of businesses do you work with?",
        a: "Businesses whose work runs through conversations, documents and repeatable steps: clinics, service companies, operators and product teams. If your team does the same task a hundred times a week, it is a candidate for a system.",
      },
      {
        q: "How is a project priced?",
        a: "Each system is scoped and priced on a call, because every project adds some things and leaves others out. You pay once for a system you own, not a monthly subscription.",
      },
      {
        q: "Who owns the system and the data?",
        a: "You do. We install the system on infrastructure you choose and connect it to your own accounts, so your customers' data stays with you.",
      },
      {
        q: "Do you work in Arabic?",
        a: "Yes. We design, write and test in Arabic and English, including Gulf dialect in customer conversations.",
      },
      {
        q: "What if the AI gets something wrong with a customer?",
        a: "Every system we build has limits. It answers from approved knowledge, says when it does not know, and hands sensitive or urgent cases to a person with the full conversation.",
      },
      {
        q: "What happens after launch?",
        a: "We train your team, and an AI assistant set up for your system, to handle everyday issues. Hosting and messaging are billed by those providers straight to your own accounts. When you need us, we are still here.",
      },
      {
        q: "How do we start?",
        a: "Tell us what slows your team down. We reply by email, set up a call, and come back with a written blueprint before any build begins.",
      },
    ],
  },

  closing: {
    l1: "Tell us where the work piles up.",
    l2: "We will show you the system that clears it.",
    primary: "Start a project",
    email: "Or write to habib@flowramo.com",
  },
};

export default home;
export type HomeDict = typeof home;
