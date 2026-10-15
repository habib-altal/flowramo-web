// Copy for the Lina product page (/products/lina). Copy rules: concrete over clever, cost of inaction over feature lists, no invented numbers or customers.

const lina = {
  meta: {
    title: "Lina by Flowramo: AI WhatsApp receptionist for dental clinics",
    description:
      "Lina answers dental patients in seconds, in any language, on WhatsApp and your website. She books into your calendar and hands urgent cases to your team.",
    ogTitle: "Your clinic keeps moving. Even when you don't.",
  },

  // Structured data only (lib/schema.tsx). Facts from .claude/product-marketing.md; nothing that is not live.
  schema: {
    audience: "Dental clinics",
    features: [
      "Answers patients within seconds, day and night, on WhatsApp and on the clinic's website",
      "Replies in the patient's own language: Arabic (including Gulf dialect), English, Turkish and the many other languages AI understands",
      "Answers only from knowledge the clinic approves",
      "Books and reschedules appointments in the clinic calendar",
      "Appointment reminders and aftercare messages",
      "Follow-ups with patients who go quiet",
      "Check-up recalls",
      "Voice-note transcription and image understanding",
      "Hands urgent, clinical and sensitive cases to the clinic team with full context",
      "Runs on the official WhatsApp Business Platform",
    ],
  },

  /** Marks every demo chat on the page as an illustration, never real patient data. */
  example: "Example conversation",

  hero: {
    bubbleMeta: "WhatsApp · 23:41",
    bubble: "Hi, do you offer dental implants?",
    h1a: "Your clinic keeps moving.",
    h1b: "Even when you don't.",
    sub: "Lina is an AI receptionist for your clinic's WhatsApp. She answers patients within seconds, at 2 pm or 2 am, books them into your calendar and follows up with the ones who go quiet.",
    primary: "Try Lina on WhatsApp",
    secondary: "Book a private demo",
    trust: "Runs on the official WhatsApp Business Platform, on hosting your clinic owns. You approve everything Lina knows.",
    statuses: ["Understanding patient…", "Checking clinic knowledge…", "Finding availability…", "Consultation booked"],
    card: { label: "Consultation booked", when: "Tuesday · 14:30", who: "Dr. Kaya · Implant consultation" },
  },

  journey: {
    h2a: "One message.",
    h2b: "An entire patient journey.",
    sub: "Answering the first question is the easy part. Lina stays with the patient until the next check-up.",
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
    core: "Lina",
  },

  watch: {
    h2: "Watch Lina think.",
    sub: "A typical patient with a typical hesitation, in Arabic, and what Lina picks up before she replies.",
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
        line: "A new patient finds you at 23:00. Answer in the morning and they may have booked elsewhere.",
        actions: ["Replies within seconds, day or night", "Speaks the patient's own language", "Shares your real services and prices"],
      },
      {
        name: "Ask",
        line: "Before anyone books, they need to understand what they're buying.",
        actions: ["Answers from your clinic's own documents", "Explains treatments in plain words", "Shares before-and-after photos you approved"],
      },
      {
        name: "Trust",
        line: "Price and fear stall bookings. Lina answers both before she offers a slot.",
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
        actions: ["Remembers past treatments", "Invites patients back for check-ups", "Sends aftercare after each visit"],
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
      example: "Example night",
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
    h2: "WhatsApp, clinic knowledge and calendar, connected.",
    sub: "Lina works inside your clinic's WhatsApp, reads only the knowledge you approved and writes each booking straight into your calendar. Nobody types an appointment twice.",
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
    sub: "Anything urgent, clinical or sensitive goes straight to your team with the full conversation attached, and the patient is told exactly what happens next.",
    meta: "Nour Saleh · WhatsApp",
    time: "02:07",
    patient: "My face is swelling and the pain has been getting worse since last night.",
    chips: ["Urgency detected", "Escalated to clinic team", "Dr. Kaya notified on WhatsApp and email"],
    reply:
      "I've alerted Dr. Kaya right now and she'll call you shortly. If you have trouble breathing or swallowing, go to the nearest emergency room.",
  },

  // The facts in one place, before the FAQ (components/lina/AtAGlance.tsx).
  glance: {
    h2: "Lina at a glance",
    builtBy: "Built by",
    items: [
      { k: "Channels", v: "WhatsApp (the official Business Platform) and your clinic's own website" },
      { k: "Languages", v: "Any language the patient writes in, including Arabic (with Gulf dialect), English and Turkish" },
      { k: "Does", v: "Answers patients, books and reschedules in your calendar, sends reminders and aftercare, follows up with patients who go quiet and recalls them for check-ups" },
      { k: "Does not", v: "Diagnose. Urgent, clinical or sensitive cases go to your team with the full conversation" },
      { k: "Data", v: "Stays on hosting your clinic owns, connected to your clinic's own accounts" },
      { k: "Business model", v: "Sold as a project, not a subscription" },
    ],
  },

  guides: { h2: "Guides for clinic owners" },

  faq: {
    h2: "Questions clinic owners ask before they say yes.",
    sub: "Straight answers. If yours isn't here, ask it in your private demo.",
    items: [
      {
        q: "What exactly is Lina?",
        a: "Lina is an AI receptionist that runs your clinic's WhatsApp, and can also answer patients on your clinic's website. She answers patients in seconds, day and night, books them into your calendar, sends reminders and aftercare, follows up when someone goes quiet and brings patients back for their next visit.",
      },
      {
        q: "How is Lina different from a WhatsApp auto-reply or chatbot?",
        a: "An auto-reply sends the same message to everyone, and many chatbots only follow fixed menus. Lina understands messages written in the patient's own words, answers only from knowledge your clinic has approved, books into your calendar, follows up with patients who go quiet and hands urgent, clinical or sensitive cases to your team with the full conversation.",
      },
      {
        q: "Does Lina replace my receptionist?",
        a: "No. Lina takes the repetitive questions, the after-hours messages and the follow-ups nobody has time for. Your team keeps the work that needs a human, and every conversation Lina hands over arrives with its full context.",
      },
      {
        q: "Which languages does Lina speak?",
        a: "Any language the patient writes in: Arabic, including Gulf dialect, English, Turkish and the many other languages today's AI understands. Lina replies in the patient's own language and dialect, and keeps the same patient context whichever language the conversation switches to.",
      },
      {
        q: "Can Lina understand voice notes and photos?",
        a: "Yes. Lina transcribes the voice notes patients send and understands the photos they share, and passes them to your team with the conversation. She does not diagnose from a photo or a description: clinical questions go to your team.",
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
        q: "Where does Lina run, and who owns the data?",
        a: "On hosting your clinic chooses and controls. We install Lina there and connect it to your clinic's own WhatsApp, calendar and accounts, so patient conversations and records stay with your clinic.",
      },
      {
        q: "Is Lina a monthly subscription?",
        a: "No. Lina is installed for your clinic as a system you own, priced as a project once we understand how your clinic works. Hosting and WhatsApp messaging are billed by those providers directly to your clinic's own accounts.",
      },
      {
        q: "What if something stops working, or Lina gets an answer wrong?",
        a: "Before launch we test Lina on your clinic's real questions, and you approve what she knows. After launch we train your team, or set up an AI assistant for your system, to handle everyday issues, and you can reach the person who built it.",
      },
      {
        q: "Who builds Lina?",
        a: "Flowramo, an AI systems and product engineering studio, designs and builds Lina. She runs in production on WhatsApp, and Flowramo installs her for each clinic on hosting the clinic owns.",
      },
      {
        q: "How do we get started?",
        a: "Book a private demo. You'll watch Lina handle the questions your patients ask, then put your own to her. We onboard clinics personally, one at a time.",
      },
    ],
  },

  closing: {
    l1: "Your patients are already talking.",
    l2: "Make sure none of them waits.",
    primary: "Try Lina on WhatsApp",
    secondary: "Book a private demo",
    note: "No monthly subscription to us. Lina is installed on your clinic's own hosting and set up with you personally.",
  },
};

export default lina;
export type LinaDict = typeof lina;
