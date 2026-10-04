// English copy. Every string the site shows lives here (Arabic mirrors this shape in ar.ts).
// Copy rules: concrete over clever, cost of inaction over feature lists, no invented numbers or customers.

const en = {
  meta: {
    title: "Flowramo · Lina, the AI WhatsApp receptionist for dental clinics",
    description:
      "Lina answers every patient on WhatsApp in seconds, books them straight into your calendar, follows up when they go quiet and brings them back for their next visit. Day and night, in Arabic, English and Turkish.",
    ogTitle: "Your clinic keeps moving. Even when you don't.",
  },

  nav: {
    product: "Product",
    lina: "Lina",
    solutions: "Solutions",
    resources: "Resources",
    demo: "Book a Demo",
    home: "Flowramo home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLabel: "العربية",
    switchAria: "Switch to Arabic",
  },

  hero: {
    bubbleMeta: "WhatsApp · 23:41",
    bubble: "Hi, do you offer dental implants?",
    h1a: "Your clinic keeps moving.",
    h1b: "Even when you don't.",
    sub: "Lina turns every WhatsApp message into a booked appointment, a timely follow-up and a patient who keeps coming back. At 2 pm or 2 am, without adding a single hire.",
    primary: "Meet Lina",
    secondary: "Book a private demo",
    trust: "Built on the official WhatsApp Business Platform. You approve everything Lina knows.",
    statuses: ["Understanding patient…", "Checking clinic knowledge…", "Finding availability…", "Consultation booked"],
    card: { label: "Consultation booked", when: "Tuesday · 14:30", who: "Dr. Kaya · Implant consultation" },
  },

  journey: {
    h2a: "One message.",
    h2b: "An entire patient journey.",
    sub: "Most clinics answer the question. Lina owns everything that happens after it.",
    meta: "WhatsApp · 23:41",
    stages: [
      "Asks",
      "Lina answers",
      "Asks the price",
      "Hesitates",
      "Disappears",
      "Lina remembers",
      "Lina follows up",
      "Comes back",
      "Books",
      "Visits",
      "Gets aftercare",
      "Returns months later",
    ],
    items: [
      { kind: "patient", text: "Hi, do you offer dental implants?", stage: 0 },
      { kind: "lina", text: "We do. Dr. Kaya places implants here every week. Is it for one tooth or a few?", stage: 1 },
      { kind: "patient", text: "Just one. Roughly how much?", stage: 2 },
      {
        kind: "lina",
        text: "Usually €650–900 including the crown. The exact plan comes after a quick x-ray. Shall I hold a free consultation for you?",
        stage: 2,
      },
      { kind: "patient", text: "Ok thanks, I'll think about it.", stage: 3 },
      { kind: "divider", text: "No reply for 6 days", stage: 4 },
      { kind: "system", text: "Remembered: implant, price shared, not booked", stage: 5 },
      {
        kind: "lina",
        text: "Hi Omar, most people weighing up an implant ask about healing time, so here's what to expect. Tuesday 14:30 is free if you'd like to talk it through.",
        stage: 6,
      },
      { kind: "patient", text: "Actually yes. Tuesday works.", stage: 7 },
      { kind: "system", text: "Consultation booked · Tue 14:30", stage: 8 },
      { kind: "divider", text: "Tuesday, after the visit", stage: 9 },
      {
        kind: "lina",
        text: "How are you feeling, Omar? Soft food today and no hot drinks tonight. Message me if the swelling grows.",
        stage: 10,
      },
      { kind: "divider", text: "6 months later", stage: 11 },
      { kind: "lina", text: "It's been six months since your implant. Time for a check-up? Thursday morning is free.", stage: 11 },
      { kind: "patient", text: "Perfect, book it.", stage: 11 },
    ],
  },

  lina: {
    l1: "Lina doesn't answer messages.",
    l2: "She runs the conversation.",
    actions: [
      "Patient identified",
      "Intent detected",
      "Appointment available",
      "Reminder scheduled",
      "Doctor notified",
      "Follow-up created",
      "Patient recovered",
    ],
    core: "LINA",
  },

  watch: {
    h2: "Watch Lina think.",
    sub: "A real patient, a real hesitation, in Arabic. And everything Lina understands before she replies.",
    replay: "Replay",
    patient: "Omar Haddad",
    initials: "OH",
    patientMeta: "WhatsApp · Returning patient",
    handling: "Lina is handling this chat",
    handlingShort: "Lina",
    understands: "What Lina understands",
    signals: [
      { k: "Language", v: "Arabic (Gulf)" },
      { k: "Patient", v: "Returning · 2 past visits" },
      { k: "Topic", v: "Implant inquiry" },
      { k: "Feeling", v: "Anxiety detected" },
      { k: "Intent", v: "High purchase intent" },
    ],
    likelihood: "Likelihood to book",
    high: "High",
    finding: "Finding a slot · Next week",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    consult: "Implant consultation",
    done: ["Booking confirmed · Tue 14:30", "Reminder scheduled · Mon 18:00", "Follow-up created · Day after the visit"],
  },

  lifecycle: {
    h2: "From first hello to loyal patient.",
    sub: "Seven moments where clinics quietly lose patients. Lina is present in every one of them.",
    stages: [
      {
        name: "Discover",
        line: "A new patient finds you at 23:00. The clinic that replies first usually wins.",
        actions: ["Replies within seconds, day or night", "Speaks the patient's own language", "Shares your real services and prices"],
      },
      {
        name: "Ask",
        line: "Before anyone books, they need to understand what they're buying.",
        actions: ["Answers from your clinic's own documents", "Explains treatments in plain words", "Shares before-and-after photos you approved"],
      },
      {
        name: "Trust",
        line: "Price and fear stall more bookings than any competitor does.",
        actions: ["Notices hesitation and slows down", "Answers worries before suggesting a slot", "Brings the doctor in when it matters"],
      },
      {
        name: "Book",
        line: "The moment they say yes, the slot is already waiting.",
        actions: ["Finds availability", "Confirms appointment", "Updates patient record"],
      },
      {
        name: "Visit",
        line: "An empty chair is the most expensive thing in your clinic.",
        actions: ["Sends reminders before the visit", "Handles reschedules inside the chat", "Shares directions and preparation"],
      },
      {
        name: "Recover",
        line: "Some patients go quiet. Lina doesn't let them go.",
        actions: ["Detects inactive patients", "Sends personalised follow-up", "Restarts the conversation"],
      },
      {
        name: "Return",
        line: "Treatment ends. The relationship doesn't.",
        actions: ["Remembers past treatments", "Invites patients back for check-ups", "Asks happy patients for a Google review"],
      },
    ],
  },

  recovery: {
    l1: "Some patients don't say no.",
    l2: "They simply disappear.",
    legend: { active: "Active", quiet: "Went quiet", recovered: "Recovered by Lina" },
    close: "Every patient Lina brings back is revenue your clinic had already written off.",
    aria: "A field of patients; some go quiet and Lina brings them back",
    card: {
      name: "Sara",
      meta: "Veneers inquiry · No reply for 6 days",
      badge: "Recovered by Lina",
      steps: ["Personalised follow-up sent", "Patient replied", "Consultation booked"],
    },
  },

  product: {
    h2a: "Everything Lina knows.",
    h2b: "Everything your clinic needs.",
    intro: "Every morning, before your first patient walks in",
    chrome: { today: "Today · Wednesday", search: "Ask Lina about any patient", clinic: "Kaya Dental", demo: "Demo" },
    briefing: {
      title: "Morning AI Briefing",
      time: "07:30",
      text: "Good morning, Dr. Kaya. Overnight Lina handled 17 conversations and booked 4 appointments. Two patients need your answer before 10:00.",
      chips: ["Reply to Leyla's question", "Review Omar's photo"],
    },
    appts: {
      title: "Today's appointments",
      count: "7 booked",
      via: "via Lina",
      rows: [
        ["09:30", "Elif Şahin", "Cleaning", false],
        ["10:30", "Sara Al-Amin", "Veneers consult", true],
        ["11:15", "Mehmet Kaya", "Filling", false],
        ["12:00", "Omar Haddad", "Implant consult", true],
        ["14:30", "Leyla Demir", "Whitening", true],
        ["15:45", "Yusuf Arslan", "Check-up", false],
        ["17:00", "Nour Saleh", "Braces review", false],
      ] as [string, string, string, boolean][],
    },
    radar: {
      title: "Patient loss radar",
      count: "3 at risk",
      rows: [
        ["Ahmed K.", "Implant quote, no reply 9 days", 0.86],
        ["Murat Y.", "Asked the price, went quiet", 0.72],
        ["Elena P.", "Missed her check-up", 0.48],
      ] as [string, string, number][],
    },
    money: { title: "Recovered this month", value: "€4,850", sub: "6 patients brought back" },
    live: {
      title: "Live AI activity",
      rows: [
        ["Answering Ahmed about whitening prices", "now", true],
        ["Moved Elif to Thursday 11:00", "2m", false],
        ["Sent aftercare to Omar", "8m", false],
        ["Escalated a swelling case to Dr. Kaya", "21m", false],
      ] as [string, string, boolean][],
    },
    intel: {
      title: "Clinic intelligence",
      sub: "Most asked this week",
      rows: [
        ["Implant cost", 23],
        ["Whitening", 14],
        ["Braces for adults", 9],
        ["Opening hours", 7],
      ] as [string, number][],
    },
  },

  away: {
    clocks: [
      { t: "18:30", c: "The last patient leaves." },
      { t: "01:42", c: "The clinic is closed." },
      { t: "03:18", c: "Still closed. Still answering." },
      { t: "07:45", c: "Dr. Kaya opens the dashboard." },
    ],
    g1: [
      { who: "p", text: "Do you have an appointment tomorrow?" },
      { who: "l", text: "Yes. 10:30 or 16:00 tomorrow. Which works for you?" },
      { who: "p", text: "10:30 please" },
    ],
    g1done: "Booked · Tomorrow 10:30",
    g2: [
      { who: "p", text: "Can I move my appointment to Friday?" },
      { who: "l", text: "Done. You're now on Friday at 16:00 with the same doctor." },
    ],
    g2done: "Rescheduled · Fri 16:00",
    summary: {
      title: "While you were away",
      range: "18:30 – 07:45",
      stats: ["conversations handled", "appointments booked", "follow-ups completed", "patient recovered"],
    },
  },

  languages: {
    h2a: "One clinic.",
    h2b: "Every patient feels understood.",
    sub: "Medical tourists, expats and locals all get the same warmth, in the language they think in.",
    keeps: "What Lina keeps",
    same: "Same in every language",
    context: [
      ["Patient", "Leyla Demir"],
      ["Treatment", "Whitening, session 2"],
      ["Appointment", "Tomorrow, 18:00 → 17:30"],
      ["Prefers", "Evenings"],
    ],
    tablist: "Language",
  },

  integrations: {
    h2: "Everything your clinic runs on, connected.",
    sub: "WhatsApp, your calendar, patient records and your own clinic documents. Lina reads from and writes to all of them, so nothing gets typed twice and nothing gets forgotten.",
    nodes: { wa: "WhatsApp", cal: "Calendar", pt: "Patient data", an: "Analytics", kn: "Clinic knowledge", ai: "AI" },
    flow: [
      "New message",
      "Understanding intent",
      "Checking clinic knowledge",
      "Updating patient record",
      "Booking the slot",
      "Logging the outcome",
      "Appointment confirmed",
    ],
    core: "Lina",
  },

  human: {
    h2: "Lina knows when not to be Lina.",
    sub: "Anything urgent, clinical or sensitive goes straight to your team with the full conversation attached, and the patient is told exactly what happens next. Automation where it helps. A human where it matters.",
    meta: "Nour Saleh · WhatsApp",
    time: "02:07",
    patient: "My face is swelling and the pain has been getting worse since last night.",
    chips: ["Urgency detected", "Escalated to clinic team", "Dr. Kaya notified on WhatsApp and email"],
    reply:
      "I've alerted Dr. Kaya right now and she'll call you shortly. If you have trouble breathing or swallowing, go to the nearest emergency room.",
  },

  faq: {
    h2: "Questions clinic owners ask before they say yes.",
    sub: "Straight answers. If yours isn't here, ask it in your private demo.",
    items: [
      {
        q: "What exactly is Lina?",
        a: "Lina is an AI receptionist that runs your clinic's WhatsApp. She answers patients in seconds, day and night, books them into your calendar, sends reminders and aftercare, follows up when someone goes quiet and brings patients back for their next visit.",
      },
      {
        q: "Does Lina replace my receptionist?",
        a: "No. Lina takes the repetitive questions, the after-hours messages and the follow-ups nobody has time for. Your team keeps the work that needs a human, and every conversation Lina hands over arrives with its full context.",
      },
      {
        q: "Which languages does Lina speak?",
        a: "Arabic, English and Turkish. Lina replies in the language and dialect the patient writes in, including Gulf Arabic, and keeps the same patient context whichever language the conversation switches to.",
      },
      {
        q: "Is it the official WhatsApp?",
        a: "Yes. Lina runs on the official WhatsApp Business Platform from Meta, not on unofficial automation tools that put a clinic's number at risk of being banned.",
      },
      {
        q: "What will Lina say about prices and treatments?",
        a: "Only what your clinic approves. You decide the services, price ranges, doctors, hours and instructions Lina can share. Lina does not diagnose, and clinical questions go to your team.",
      },
      {
        q: "What happens if a patient reports an emergency at 2 am?",
        a: "Lina recognises urgent messages, alerts your team straight away with the full conversation, and tells the patient exactly what happens next, including when to go to emergency care.",
      },
      {
        q: "How do we get started?",
        a: "Book a private demo. You will see Lina answer real questions with your own prices and hours. We onboard clinics personally, one at a time.",
      },
    ],
  },

  journal: {
    h2: "From the Journal",
    all: "All articles",
  },

  closing: {
    l1: "Your patients are already talking.",
    l2: "Make every conversation count.",
    primary: "Meet Lina",
    secondary: "Book a private demo",
    note: "We onboard clinics personally, one at a time.",
    blog: "Journal",
    rights: "© 2026 HABIB ALTAL LTD",
  },

  demo: {
    title: "Book a private demo",
    sub: "See Lina answer your own patients' questions, with your clinic's prices and hours, before you decide anything.",
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
    title: "The Flowramo Journal",
    sub: "Field-tested thinking on filling dental chairs, ending no-shows and turning WhatsApp into your clinic's best receptionist.",
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
      sub: "A private demo with your clinic's own prices, hours and questions. No commitment.",
      button: "Book a private demo",
    },
  },
};

export default en;
export type Dictionary = typeof en;
