import type { Article } from "./types";

const RAND = "https://www.rand.org/pubs/research_reports/RRA2680-1.html";
const GARTNER =
  "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027";
const AI_INDEX = "https://hai.stanford.edu/ai-index/2026-ai-index-report/economy";
const NIST_RMF = "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf";
const NIST_GENAI = "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf";
const ISO_42001 = "https://www.iso.org/standard/42001";
const GOOGLE_PROBLEM = "https://developers.google.com/machine-learning/problem-framing/problem";
const GOOGLE_SUCCESS = "https://developers.google.com/machine-learning/managing-ml-projects/success";
const GOOGLE_FEASIBILITY = "https://developers.google.com/machine-learning/managing-ml-projects/feasibility";
const UK_PROCUREMENT =
  "https://www.gov.uk/government/publications/guidelines-for-ai-procurement/guidelines-for-ai-procurement";
const HBR = "https://hbr.org/2011/09/why-your-it-project-may-be-riskier-than-you-think";
const FAR_16 = "https://www.acquisition.gov/far/part-16";

const sources = [
  { label: "RAND — The Root Causes of Failure for Artificial Intelligence Projects and How They Can Succeed (2024)", url: RAND },
  { label: "Gartner — Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027 (2025)", url: GARTNER },
  { label: "Stanford HAI — The 2026 AI Index Report: Economy", url: AI_INDEX },
  { label: "NIST — Artificial Intelligence Risk Management Framework (AI RMF 1.0), NIST AI 100-1 (2023)", url: NIST_RMF },
  { label: "NIST — Artificial Intelligence Risk Management Framework: Generative AI Profile, NIST AI 600-1 (2024)", url: NIST_GENAI },
  { label: "ISO — ISO/IEC 42001:2023, Information technology — Artificial intelligence — Management system", url: ISO_42001 },
  { label: "Google for Developers — Machine Learning Problem Framing: Understand the problem", url: GOOGLE_PROBLEM },
  { label: "Google for Developers — Managing ML Projects: Measuring success", url: GOOGLE_SUCCESS },
  { label: "Google for Developers — Managing ML Projects: Feasibility", url: GOOGLE_FEASIBILITY },
  { label: "GOV.UK (Office for AI) — Guidelines for AI procurement", url: UK_PROCUREMENT },
  {
    label: "Harvard Business Review — Flyvbjerg and Budzier, Why Your IT Project May Be Riskier Than You Think (2011)",
    url: HBR,
  },
  { label: "Acquisition.gov — Federal Acquisition Regulation (FAR), Part 16: Types of Contracts", url: FAR_16 },
];

const article: Article = {
  slug: "how-to-scope-an-ai-project",
  published: "2026-10-14",
  updated: "2026-10-14",
  related: ["ai-automation-for-business-processes", "own-your-ai-system"],
  topic: "studio",

  en: {
    title: "How to scope an AI project before you build: what goes in the blueprint",
    seoTitle: "How to Scope an AI Project: The Blueprint Checklist",
    description:
      "How to scope an AI project before you build: what a written blueprint should contain, questions to ask first, how to run a pilot and how pricing works.",
    answer:
      "To scope an AI project, write a blueprint before anyone builds. State the problem in business terms, map today's process, list the data and accounts it needs, define what the system will and won't do and when it hands off to a person, set success metrics against a baseline, and agree the price and what changes it.",
    takeaways: [
      "In RAND's interviews with experienced data scientists and engineers, a misunderstood or miscommunicated problem was the most common root cause of AI project failure. Scoping is the cheapest place to fix it.",
      "A good blueprint covers eleven things: the problem, today's process, data, what the system will and won't do, hand-off rules, metrics, integrations and accounts, risks, hosting and ownership, timeline and price.",
      "Measure the baseline before the build. If nobody knows how long the work takes today, nobody can tell you whether the system helped.",
      "Run a pilot on a narrow slice of real work, for a fixed period, with pass and fail criteria written down before it starts.",
      "Fixed prices suit work with definite specifications; time-and-materials suits work nobody can estimate yet. A specific blueprint moves your project into the first group.",
    ],
    blocks: [
      {
        t: "p",
        text: "A business owner asks three vendors for “an AI agent that answers customer messages”. One sends a monthly subscription, one a large one-off fee, and one asks for a call before giving any number. They are pricing three different systems, because nobody has yet written down what the system is for, what it may touch, when it must stop and hand over to a person, and how anyone will know it worked.",
      },
      {
        t: "p",
        text: "That written document is the blueprint. This guide covers why vague scope sinks AI projects, the eleven sections a good blueprint contains, the questions to answer before you spend money, how to run a pilot you can judge, a fill-in checklist, and how project pricing is usually built.",
      },

      { t: "h2", id: "why-vague-scope-fails", text: "Why do AI projects fail when the scope is vague?" },
      {
        t: "p",
        text: "Most often because the problem was never pinned down. For a 2024 [RAND study](" +
          RAND +
          "), researchers interviewed experienced data scientists and machine-learning engineers about why AI projects fail, and a misunderstood or miscommunicated problem was the most common root cause. RAND notes that, by some estimates, more than 80% of AI projects fail, twice the rate of IT projects that do not involve AI. The interviewees named five root causes:",
      },
      {
        t: "ul",
        items: [
          "**The problem is misunderstood or miscommunicated.** The people asking for the system and the people building it meant different things.",
          "**The data isn't there.** The organisation lacks the data needed to build an effective model.",
          "**Technology comes first.** The team chases the latest tool instead of a real problem for the people who will use it.",
          "**The infrastructure is missing.** Nothing is in place to manage the data and run the finished system.",
          "**The problem is too hard.** AI is applied to work it cannot yet do reliably.",
        ],
      },
      {
        t: "p",
        text: "Adoption figures point the same way. Trying AI has become common: Stanford's [2026 AI Index](" +
          AI_INDEX +
          ") reports that organisational AI use rose from 55% in 2023 to 88% in 2025. Running AI agents in daily operations is much rarer: their deployment was still in the single digits across nearly all business functions.",
      },
      {
        t: "p",
        text: "Analysts see the same pattern from the buyer's side. In June 2025, Gartner [predicted](" +
          GARTNER +
          ") that over 40% of agentic AI projects will be cancelled by the end of 2027 because of escalating costs, unclear business value or inadequate risk controls.",
      },
      {
        t: "p",
        text: "Read both lists again and ask when each problem could have been caught. A misunderstood problem, missing data, a tool chosen before the need, an unrealistic target, unclear value and costs nobody estimated all show up on paper before the first line of code is written. Finding them is the job of scoping.",
      },

      { t: "h2", id: "what-is-a-blueprint", text: "What is an AI project blueprint?" },
      {
        t: "p",
        text: "A blueprint is a short written document, agreed between you and the team building the system, that says what will be built, what the system will not do, how success will be measured, what it depends on and what it costs. Everyone returns to it when a question comes up mid-build, and the finished system is judged against it at handover.",
      },
      {
        t: "p",
        text: "Sound engineering guidance puts this step first. Google's guide to managing machine-learning projects says that before starting a project, [“it's critical to define your success metrics and agree on deliverables”](" +
          GOOGLE_SUCCESS +
          "). The [NIST AI Risk Management Framework](" +
          NIST_RMF +
          "), a voluntary framework published in January 2023, begins with a Map function that establishes a system's context; once it is done, an organisation should know enough to make an initial go/no-go decision on whether to design, develop or deploy the system.",
      },
      {
        t: "p",
        text: "A blueprint differs from a sales proposal in one practical way: you can test the system against it. Every line should be specific enough that, at handover, both sides can point to it and agree whether it was met.",
      },

      { t: "h2", id: "blueprint-contents", text: "What should an AI project blueprint contain?" },
      {
        t: "p",
        text: "An AI project blueprint should contain eleven sections: the problem in business terms, today's process map, inputs and data sources, what the system will and won't do, hand-off rules, success metrics and a baseline, integrations and accounts, risks and guardrails, hosting and ownership, a timeline, and the price and what changes it. Together they cover most projects, from a WhatsApp agent to a pipeline that reads invoices. Some need a single line. The process map and the will-and-won't lists usually take the most work.",
      },
      { t: "h3", text: "1. The problem in business terms" },
      {
        t: "p",
        text: "Write the goal without the word AI. Google's problem-framing guide recommends [stating the goal in non-ML terms](" +
          GOOGLE_PROBLEM +
          ") before anything else. “Enquiries that arrive after 6 pm wait until morning, and some of those customers book elsewhere” describes a problem. “We want an AI agent” describes a purchase.",
      },
      { t: "h3", text: "2. The process map as it runs today" },
      {
        t: "p",
        text: "Who does the work, in which tool, in what order, where it waits and what happens to the exceptions. Add weekly volumes and a sample of real cases, anonymised where needed. Thirty to fifty real examples, including the awkward ones, teach the build team more than any meeting.",
      },
      { t: "h3", text: "3. Inputs and data sources" },
      {
        t: "p",
        text: "List everything the system will read: text messages, voice notes, photos, PDFs, spreadsheets, a booking calendar, a product database. For each, note where it lives, who keeps it current and whether it contains personal data. The UK government's [Guidelines for AI procurement](" +
          UK_PROCUREMENT +
          ") advise a data assessment before procurement starts. A small business can do the same in an afternoon with one spreadsheet.",
      },
      { t: "h3", text: "4. What the system will do, and what it will not" },
      {
        t: "p",
        text: "Write two explicit lists. The first names each task and the channel it runs on (“answers price questions from the approved price list”, “books into the shared calendar”). The second names what stays outside the system so nobody assumes otherwise: discounts, refunds, legal advice, anything medical. The second list prevents more disputes than the first.",
      },
      { t: "h3", text: "5. Hand-off rules to people" },
      {
        t: "p",
        text: "Decide when the system stops and a person takes over: which topics, which customer requests, what level of uncertainty, which hours. Then decide who receives the hand-off, through which channel, with what context, and how fast they are expected to respond. A hand-off that lands in an unread inbox at 11 pm is a gap in the design.",
      },
      { t: "h3", text: "6. Success metrics and a baseline" },
      {
        t: "p",
        text: "Pick two to four business metrics, such as first-reply time, the share of enquiries resolved without staff, bookings per week or hours spent on the task. Measure them **before** the build, over at least two normal weeks: that is your baseline. Google's guide warns that model metrics, such as accuracy scores, [do not guarantee improvement in business metrics](" +
          GOOGLE_SUCCESS +
          "). Without a baseline, nobody can say whether the system helped.",
      },
      { t: "h3", text: "7. Integrations and accounts" },
      {
        t: "p",
        text: "Name every system the AI must read from or write to, whether it has an API, and whose account it runs under. When the accounts are in your company's name (the WhatsApp Business account, the calendar, the AI model provider, the hosting), you keep control when staff or vendors change.",
      },
      { t: "h3", text: "8. Risks and guardrails" },
      {
        t: "p",
        text: "Language models can produce what NIST's [Generative AI Profile](" +
          NIST_GENAI +
          ") calls confabulation: confidently stated but erroneous or false content, often called hallucination. Guardrails are the design response. The system answers only from approved knowledge, says it doesn't know and hands over when unsure, and works within set limits (it can offer appointment slots, for example, but cannot cancel a paid booking).",
      },
      {
        t: "p",
        text: "Add a log of every conversation and a fixed test set of real and deliberately tricky questions that the system must pass before launch. Organisations that need a formal management system for AI can build on [ISO/IEC 42001](" +
          ISO_42001 +
          "), the international standard for AI management systems.",
      },
      { t: "h3", text: "9. Hosting and ownership" },
      {
        t: "p",
        text: "State where the system runs, who owns the code, the prompts, the knowledge base and the data, and how you would move it to another provider. The UK guidelines list [avoiding black-box algorithms and vendor lock-in](" +
          UK_PROCUREMENT +
          ") among their top considerations, along with planning for the system's whole lifecycle: knowledge transfer, training, ongoing support and hosting. Our guide to [owning your AI system](/en/insights/own-your-ai-system) covers the ownership questions in detail.",
      },
      { t: "h3", text: "10. Timeline" },
      {
        t: "p",
        text: "List the phases with dates, and what each one needs from you: account access, approved content, test cases and a decision-maker who answers questions quickly. Inputs from your side are easy to underestimate, so put their dates in writing too.",
      },
      { t: "h3", text: "11. Price and what changes it" },
      {
        t: "p",
        text: "Expect a fixed price for the defined scope, a separate line for running costs (hosting, AI model usage, messaging fees) and a written change rule: anything added after sign-off gets a written estimate before work on it starts. The pricing section below goes further.",
      },

      { t: "h2", id: "questions-before-you-spend", text: "Which questions should you answer before you spend money?" },
      {
        t: "p",
        text: "Answer these in writing before you sign anything. If you can't answer one, that is the first thing the scoping call should settle.",
      },
      {
        t: "ol",
        items: [
          "**What is the problem in one sentence, without the word AI?**",
          "**What does it cost today?** Hours per week, enquiries lost, errors corrected, and whether those figures were measured or guessed.",
          "**Have we tried the simple fix?** A message template, a form or a single rule may solve most of it. Google's guidance is to [check that your current non-ML solution is optimised](" +
            GOOGLE_PROBLEM +
            "), or try a simple rule-based approach, and use it as the benchmark the AI has to beat.",
          "**Is the work frequent enough?** A task done five times a month rarely justifies a system; one done a hundred times a week often does. Our guide to [AI automation for business processes](/en/insights/ai-automation-for-business-processes) covers how to choose.",
          "**Is the knowledge written down, and who keeps it current?**",
          "**What must never happen?** Name the one wrong answer or action that would cost you a customer, a fine or your reputation.",
          "**Who owns this inside the business?** Someone has to approve the knowledge, review hand-offs and make decisions during the build.",
          "**Which systems must it touch, and do we control those accounts?**",
          "**Will it pay for itself?** Google's feasibility guide notes that most ML projects [won't be approved](" +
            GOOGLE_FEASIBILITY +
            ") if the solution costs more to implement and maintain than the money it generates or saves. Count running costs as well as the build.",
          "**If we stop working with this vendor, what do we keep?**",
        ],
      },

      { t: "h2", id: "run-a-pilot", text: "How do you run a small AI pilot and judge it?" },
      {
        t: "p",
        text: "A pilot tests the blueprint on real work before you commit to the full scope. Keep it narrow, and decide in advance what result counts as a pass.",
      },
      {
        t: "ol",
        items: [
          "**Choose one slice.** One task, one channel, one team: booking enquiries on WhatsApp, for example, in the languages your customers actually write in.",
          "**Fix the duration and the pass mark in writing.** Cover both busy and quiet days, and tie the targets to the baseline metrics, for example: first reply under a minute in most conversations, at least 60% of booking requests completed without staff, and no wrong prices quoted.",
          "**Build it on your real accounts and hosting.** A pilot that runs on a vendor's demo account has to be rebuilt to go live, and the rebuild can change how the system behaves.",
          "**Start supervised.** Let staff see or approve the system's replies for the first days, then let it answer on its own while they review samples.",
          "**Review every hand-off and every wrong answer each week.** Sort each one into a knowledge gap, a missing rule, a model error or an integration fault, because each has a different fix.",
          "**Measure the same way you measured the baseline.**",
          "**Decide to expand, adjust or stop.** Stopping a pilot that missed its pass mark means the process did its job, and it costs far less than stopping a finished system.",
        ],
      },
      {
        t: "p",
        text: "One caution on time frames. RAND's recommendations include choosing problems that will last, and its authors advise leaders to be prepared to commit a product team to one specific problem for at least a year. A pilot shows whether the system works. The value comes from running and improving it in the months after.",
      },

      { t: "h2", id: "blueprint-checklist", text: "A fill-in AI project blueprint checklist" },
      {
        t: "p",
        text: "Copy this table into a document and fill in the middle column. The right-hand column is a hypothetical example: a property-management company that wants tenants' maintenance requests on WhatsApp handled after office hours.",
      },
      {
        t: "table",
        caption: "AI project blueprint checklist",
        head: ["Section", "Fill in", "Hypothetical example"],
        rows: [
          [
            "Problem",
            "The goal in one sentence, without the word AI",
            "Maintenance requests sent after 6 pm wait until morning, so urgent leaks are found late",
          ],
          [
            "Today's process",
            "Steps, people, tools, weekly volumes, where work waits",
            "Tenants message the office number; staff copy each request into a spreadsheet the next morning and call a technician",
          ],
          [
            "Inputs and data",
            "What the system reads, where it lives, who updates it",
            "Tenant messages, photos and voice notes; the property and tenant list; the technician rota",
          ],
          [
            "Will do",
            "Each task, and the channel it runs on",
            "Log the request, ask for a photo, rate the urgency, open the job and confirm it to the tenant on WhatsApp",
          ],
          ["Will not do", "What stays with people", "Promise repair dates, discuss rent or deposits, approve repair costs"],
          [
            "Hand-off rules",
            "Triggers, who receives it, channel, expected response time",
            "Water, gas, electrical and security issues go straight to the on-call manager by phone alert",
          ],
          [
            "Metrics and baseline",
            "Two to four business metrics, measured before the build",
            "Time from report to logged job; share of jobs logged with a photo; staff hours spent on intake",
          ],
          [
            "Integrations and accounts",
            "Every system, whether it has an API, whose account it uses",
            "WhatsApp Business account, job tracker and technician calendar, all in the company's name",
          ],
          [
            "Risks and guardrails",
            "What must never happen, and what prevents it",
            "Any mention of gas triggers an immediate hand-off; the system never tells a tenant that a problem can wait",
          ],
          [
            "Hosting and ownership",
            "Where it runs, who owns code and data, how you would leave",
            "The company's own cloud account; code, prompts and data handed over at installation",
          ],
          [
            "Timeline",
            "Phases, dates, and what each phase needs from you",
            "Blueprint, build, two-week supervised pilot, go-live, with dates for the company's access and content",
          ],
          [
            "Price",
            "Fixed price for the scope, running costs, change rule",
            "Fixed build price; hosting, model and messaging billed to the company's own accounts; changes estimated in writing first",
          ],
        ],
      },

      { t: "cta" },

      { t: "h2", id: "how-pricing-works", text: "How is an AI project usually priced?" },
      {
        t: "p",
        text: "Project work is usually priced in one of three ways, and the right one depends on how well the scope is defined. US federal procurement rules state the principle plainly. Under [FAR Part 16](" +
          FAR_16 +
          "), a firm-fixed-price contract suits work with “reasonably definite functional or detailed specifications” when a fair price can be set at the outset, while a time-and-materials contract may be used only when the extent or duration of the work cannot be estimated with any reasonable confidence. The same rules note that time-and-materials gives the contractor no profit incentive to control costs, so the buyer has to supervise.",
      },
      {
        t: "table",
        caption: "Common pricing models for AI project work",
        head: ["Pricing model", "How it works", "Suits", "Watch for"],
        rows: [
          [
            "Fixed price per phase",
            "A scoping phase produces the blueprint; the build is then quoted as a fixed sum against it",
            "Projects with a specific blueprint",
            "The price covers what the blueprint lists, so you need a written change rule",
          ],
          [
            "Time and materials",
            "You pay for the hours or days worked, ideally with a ceiling",
            "Research, or work nobody can estimate yet",
            "Cost follows effort, so ask for regular reports and a cap",
          ],
          [
            "Subscription",
            "A monthly fee to use a vendor's software",
            "Standard tools you don't need to own or adapt",
            "Price increases, data export terms, and what stops working when you stop paying",
          ],
        ],
      },
      {
        t: "p",
        text: "Behind any fixed price sits an estimate. The builder breaks the blueprint into pieces (each integration, each conversation flow, each hand-off rule, testing, installation and training), estimates the effort for each, and adds a margin for whatever is still uncertain. The vaguer the blueprint, the bigger that margin, which is one reason a specific scope tends to bring the quote down.",
      },
      {
        t: "p",
        text: "Running costs come on top of the build in every model: hosting, AI model usage that grows with volume, messaging fees such as WhatsApp's, and any support you choose to buy. Ask for an estimate of each at your expected volume, and ask whose account each one is billed to. These are the factors that move the build price most:",
      },
      {
        t: "ul",
        items: [
          "**Integrations.** Each system to connect, and whether it has a usable API.",
          "**Channels and languages.** WhatsApp, web chat, email and voice each need their own handling, and so does every language and dialect the system must write in.",
          "**Data work.** Knowledge that has to be gathered, cleaned or written before the system can use it.",
          "**The reliability target.** Google's feasibility guide notes that raising a model's precision from 99.9% to 99.99% [could mean a ten-times increase in project cost](" +
            GOOGLE_FEASIBILITY +
            "), if not more. Decide where near-perfect matters and where a hand-off to a person is the cheaper safeguard.",
          "**Compliance and audit.** The logging, retention and access rules your sector requires.",
          "**Interfaces.** Dashboards, admin tools and reports beyond the core system.",
        ],
      },
      {
        t: "p",
        text: "A fixed scope also protects you from the extremes that averages hide. In a study of 1,471 IT projects, most of them large public-sector ones, Flyvbjerg and Budzier found an [average cost overrun of 27%](" +
          HBR +
          "), yet one project in six was a “black swan” with an average cost overrun of 200% and a schedule overrun of almost 70%. A specific blueprint, a price split into phases and a written change rule keep a small project out of that tail.",
      },

      { t: "h2", id: "how-flowramo-scopes", text: "How Flowramo scopes a project" },
      {
        t: "p",
        text: "Flowramo works in five steps. We start with a call to map the work as it happens today. You then receive a written blueprint with scope and price before any build, and you can change or add anything before the build starts. We build and test on your real cases, install the system on hosting you choose and own, connected to your own accounts, and train your people, along with an AI assistant set up for your system, to handle everyday issues. After that we stay available when you need us. Each project is priced on a call, so there is no price list on the site, and you pay for the system rather than a subscription.",
      },
      {
        t: "p",
        text: "[Lina](/en/products/lina), the AI WhatsApp receptionist we built for dental clinics, shows what clear scope lines look like. She answers only from clinic-approved knowledge, books and reschedules into the clinic's calendar, and does not diagnose. Urgent, clinical or sensitive cases go to the clinic team with the full conversation. She is installed on hosting the clinic chooses and owns, connected to the clinic's own WhatsApp and calendar. Each of those sentences is the kind of line a blueprint should contain.",
      },
      {
        t: "p",
        text: "To see the kinds of systems this applies to, browse [our solutions](/en/solutions). When you are ready to write your own blueprint, [start a project](/en/contact).",
      },
    ],
    faq: [
      {
        q: "How do you scope an AI project?",
        a: "Start with the problem in business terms and a map of how the work runs today. Then write a blueprint that lists the data the system needs, what it will and won't do, when it hands off to a person, how success will be measured against a baseline, which systems and accounts it connects to, the risks and guardrails, where it is hosted and who owns it, the timeline, and the price with its change rule.",
      },
      {
        q: "Why do most AI projects fail?",
        a: "In RAND's 2024 interviews with experienced data scientists and engineers, the most common root cause was a misunderstood or miscommunicated problem. The other four were missing data, a focus on technology over users' real problems, inadequate infrastructure, and problems too hard for AI. RAND notes that, by some estimates, more than 80% of AI projects fail. Most of these causes can be caught during scoping.",
      },
      {
        q: "What is the difference between an AI proof of concept and a pilot?",
        a: "A proof of concept shows that something can work, usually on sample data in a test setup. A pilot runs the real system on a narrow slice of real work, on the accounts and hosting it will use in production, with pass and fail criteria agreed in advance. A pilot answers the question an owner cares about: does this work for us, at our volume, with our customers?",
      },
      {
        q: "How long should an AI pilot run?",
        a: "Long enough to see your normal pattern of busy and quiet days, and enough real cases to judge every pass criterion. For many service businesses that means a few weeks. Agree the duration and the pass mark in writing before the pilot starts, and measure results the same way you measured the baseline.",
      },
      {
        q: "Should an AI project be fixed price or time and materials?",
        a: "Choose a fixed price when the scope is specific enough to test against, and time and materials when the work can't be estimated yet, such as early research. US federal procurement rules (FAR Part 16) follow the same logic and note that time-and-materials gives the contractor no incentive to control costs, so the buyer must supervise. A scoping phase followed by a fixed-price build combines the two.",
      },
      {
        q: "How much does a custom AI system cost?",
        a: "It depends on the scope: the number of integrations, channels and languages, how much data work is needed, the reliability target and any compliance requirements. Running costs such as hosting, model usage and messaging fees come on top of the build. A reliable price comes after a blueprint. Flowramo prices each project on a call and has no price list.",
      },
      {
        q: "What should I ask an AI vendor before signing?",
        a: "Ask exactly what the system will and won't do, when it hands off to a person, how success will be measured and against what baseline, whose accounts and hosting it runs on, who owns the code and data, what running costs to expect at your volume, how changes are priced, and what you keep if you stop working together.",
      },
    ],
    sources,
    keywords: [
      "how to scope an AI project",
      "AI project scope",
      "AI project blueprint",
      "AI project scope document",
      "AI pilot project",
      "AI project pricing",
      "fixed price vs time and materials",
      "why AI projects fail",
    ],
    minutes: 11,
  },

  ar: {
    title: "كيف تخطط لمشروع ذكاء اصطناعي قبل البناء: المخطط الذي يحميك",
    seoTitle: "كيف تخطط لمشروع ذكاء اصطناعي قبل البناء",
    description:
      "كيف تحدد نطاق مشروع ذكاء اصطناعي قبل أن تدفع: ماذا يتضمن المخطط المكتوب، وأسئلة تجيب عنها أولًا، وكيف تدير تجربة محدودة، وكيف تُسعَّر هذه المشاريع.",
    answer:
      "لتخطط لمشروع ذكاء اصطناعي، اكتب مخططًا قبل أن يبدأ أي بناء: صِف المشكلة بلغة العمل، وارسم طريقة سير العمل اليوم، وحدد البيانات والحسابات التي يحتاجها النظام، وما سيفعله وما لن يفعله، ومتى يسلّم الحالة لموظف، وكيف ستقيس النجاح مقارنة بالوضع الحالي، ثم اتفق على السعر وما الذي يغيّره.",
    takeaways: [
      "في مقابلات أجرتها RAND مع علماء بيانات ومهندسين متمرسين، كان سوء فهم المشكلة أو سوء توصيلها أكثر أسباب فشل مشاريع الذكاء الاصطناعي شيوعًا، ومرحلة التخطيط هي أرخص مكان لعلاجه.",
      "المخطط الجيد يغطي أحد عشر بندًا: المشكلة، وسير العمل اليوم، والبيانات، وما سيفعله النظام وما لن يفعله، وقواعد التسليم للموظفين، والمقاييس، والربط والحسابات، والمخاطر، والاستضافة والملكية، والجدول الزمني، والسعر.",
      "قِس الوضع الحالي قبل البناء. إن لم يعرف أحد كم يستغرق العمل اليوم، فلن يستطيع أحد أن يخبرك هل ساعد النظام أم لا.",
      "اختبر النظام في تجربة محدودة على شريحة ضيقة من العمل الحقيقي، لمدة محددة، وبمعايير نجاح وفشل مكتوبة قبل أن تبدأ.",
      "السعر الثابت يناسب العمل الذي له مواصفات واضحة، والدفع بالساعة يناسب العمل الذي لا يمكن تقديره بعد. والمخطط المحدد ينقل مشروعك إلى الفئة الأولى.",
    ],
    blocks: [
      {
        t: "p",
        text: "يطلب صاحب شركة من ثلاث جهات «وكيل ذكاء اصطناعي يرد على رسائل العملاء». الأولى ترسل له اشتراكًا شهريًا، والثانية مبلغًا كبيرًا يُدفع مرة واحدة، والثالثة تطلب مكالمة قبل أن تذكر أي رقم. الجهات الثلاث تسعّر ثلاثة أنظمة مختلفة، لأن أحدًا لم يكتب بعد ما الغرض من النظام، وما الذي يُسمح له أن يلمسه، ومتى يتوقف ويسلّم الحالة لموظف، وكيف سيعرف الجميع أنه نجح.",
      },
      {
        t: "p",
        text: "هذه الوثيقة المكتوبة هي المخطط. في هذا الدليل ستجد لماذا يُفشل النطاقُ الغامض مشاريعَ الذكاء الاصطناعي، والبنود الأحد عشر التي يحتويها المخطط الجيد، والأسئلة التي تجيب عنها قبل أن تدفع، وكيف تدير تجربة محدودة يمكن الحكم على نتائجها، وقائمة جاهزة للتعبئة، وكيف تُبنى أسعار المشاريع عادة.",
      },

      { t: "h2", id: "why-vague-scope-fails", text: "لماذا تفشل مشاريع الذكاء الاصطناعي حين يكون النطاق غامضًا؟" },
      {
        t: "p",
        text: "السبب الأكثر شيوعًا أن المشكلة نفسها لم تُحدَّد بوضوح. ففي [دراسة لمؤسسة RAND](" +
          RAND +
          ") نُشرت عام 2024، قابل الباحثون علماء بيانات ومهندسي تعلّم آلة من أصحاب الخبرة، وسألوهم لماذا تفشل مشاريع الذكاء الاصطناعي، فكان سوء فهم المشكلة أو سوء توصيلها أكثر الأسباب الجذرية شيوعًا. وتشير RAND إلى أن أكثر من 80% من هذه المشاريع تفشل وفق بعض التقديرات، أي ضعف نسبة الفشل في مشاريع تقنية المعلومات التي لا يدخل فيها الذكاء الاصطناعي. وحدد المشاركون خمسة أسباب جذرية:",
      },
      {
        t: "ul",
        items: [
          "**سوء فهم المشكلة أو سوء توصيلها.** من يطلب النظام ومن يبنيه يقصد كلٌّ منهما شيئًا مختلفًا.",
          "**غياب البيانات.** لا تملك المؤسسة البيانات اللازمة لبناء نموذج فعّال.",
          "**التقنية أولًا.** ينشغل الفريق بأحدث أداة بدل مشكلة حقيقية يعانيها من سيستخدمون النظام.",
          "**بنية تحتية ناقصة.** لا يوجد ما يدير البيانات ويشغّل النظام بعد اكتماله.",
          "**مشكلة أصعب من قدرة التقنية.** يُطبَّق الذكاء الاصطناعي على عمل لا يستطيع إنجازه بموثوقية حتى الآن.",
        ],
      },
      {
        t: "p",
        text: "وأرقام الاستخدام تشير إلى الاتجاه نفسه. فتجربة الذكاء الاصطناعي صارت أمرًا شائعًا: يذكر [مؤشر الذكاء الاصطناعي لعام 2026 من جامعة ستانفورد](" +
          AI_INDEX +
          ") أن نسبة المؤسسات التي تستخدم الذكاء الاصطناعي ارتفعت من 55% في 2023 إلى 88% في 2025. أما تشغيل وكلاء الذكاء الاصطناعي (AI agents) في العمل اليومي فأندر بكثير: ما زالت نسبة نشرهم دون 10% في كل وظائف الأعمال تقريبًا.",
      },
      {
        t: "p",
        text: "ويرى المحللون النمط نفسه من جهة المشترين. ففي يونيو 2025 [توقعت Gartner](" +
          GARTNER +
          ") إلغاء أكثر من 40% من مشاريع الذكاء الاصطناعي الوكيلي (agentic AI) بحلول نهاية 2027، بسبب تصاعد التكاليف، أو غموض القيمة التجارية، أو ضعف ضوابط المخاطر.",
      },
      {
        t: "p",
        text: "أعد قراءة القائمتين، واسأل نفسك متى كان يمكن اكتشاف كل مشكلة. مشكلة لم تُفهم جيدًا، وبيانات غير موجودة، وأداة اختيرت قبل أن تتضح الحاجة، وهدف غير واقعي، وقيمة غير واضحة، وتكاليف لم يقدّرها أحد: كلها تظهر على الورق قبل كتابة أول سطر من الكود. واكتشافها هو بالضبط مهمة التخطيط.",
      },

      { t: "h2", id: "what-is-a-blueprint", text: "ما هو مخطط مشروع الذكاء الاصطناعي؟" },
      {
        t: "p",
        text: "المخطط وثيقة مكتوبة قصيرة تتفق عليها أنت والفريق الذي سيبني النظام، وتحدد ما سيُبنى، وما لن يفعله النظام، وكيف سيُقاس نجاحه، وما الذي يعتمد عليه، وكم يكلّف. إليه يرجع الجميع حين يظهر سؤال أثناء البناء، وعلى أساسه يُحكم على النظام عند التسليم.",
      },
      {
        t: "p",
        text: "والإرشادات الهندسية الرصينة تضع هذه الخطوة أولًا. يقول دليل Google لإدارة مشاريع تعلّم الآلة إن [تحديد مقاييس النجاح والاتفاق على المخرجات أمر حاسم قبل بدء أي مشروع](" +
          GOOGLE_SUCCESS +
          "). ويبدأ [إطار NIST لإدارة مخاطر الذكاء الاصطناعي](" +
          NIST_RMF +
          ")، وهو إطار طوعي صدر في يناير 2023، بوظيفة «Map» التي تحدد سياق النظام. وبعد إنجازها ينبغي أن تملك المؤسسة من المعرفة ما يكفي لقرار أولي بالمضي أو التوقف (go/no-go) في تصميم النظام أو تطويره أو تشغيله.",
      },
      {
        t: "p",
        text: "والفرق العملي بين المخطط وعرض المبيعات أن المخطط يمكن اختبار النظام عليه. كل سطر فيه يجب أن يكون محددًا بما يكفي ليشير إليه الطرفان عند التسليم ويتفقا: هل تحقق أم لا.",
      },

      { t: "h2", id: "blueprint-contents", text: "ماذا يتضمن مخطط مشروع الذكاء الاصطناعي؟" },
      {
        t: "p",
        text: "يتضمن مخطط مشروع الذكاء الاصطناعي أحد عشر بندًا: المشكلة بلغة العمل، وخريطة سير العمل كما يحدث اليوم، والمدخلات ومصادر البيانات، وما سيفعله النظام وما لن يفعله، وقواعد التسليم إلى الموظفين، ومقاييس النجاح وخط الأساس، والربط والحسابات، والمخاطر والضوابط، والاستضافة والملكية، والجدول الزمني، والسعر وما الذي يغيّره. وهذه البنود تكفي لأغلب المشاريع، من وكيل يرد على واتساب إلى نظام يقرأ الفواتير. بعضها يكفيه سطر واحد، وأكثرها جهدًا عادة خريطة سير العمل وقائمتا ما سيفعله النظام وما لن يفعله.",
      },
      { t: "h3", text: "1. المشكلة بلغة العمل" },
      {
        t: "p",
        text: "اكتب الهدف دون كلمة «ذكاء اصطناعي». يوصي دليل Google لصياغة المشكلة بأن [تبدأ بوصف الهدف بعيدًا عن مصطلحات تعلّم الآلة](" +
          GOOGLE_PROBLEM +
          "). عبارة «الاستفسارات التي تصل بعد السادسة مساءً تنتظر حتى الصباح، وبعض أصحابها يحجزون عند غيرنا» تصف مشكلة. أما «نريد وكيل ذكاء اصطناعي» فتصف عملية شراء.",
      },
      { t: "h3", text: "2. خريطة سير العمل كما يحدث اليوم" },
      {
        t: "p",
        text: "من يقوم بالعمل، وبأي أداة، وبأي ترتيب، وأين يتوقف وينتظر، وماذا يحدث مع الحالات الاستثنائية. أضف الأحجام الأسبوعية وعينة من الحالات الحقيقية بعد إخفاء البيانات الشخصية عند الحاجة. ثلاثون إلى خمسين مثالًا حقيقيًا، ومنها الحالات المزعجة، تعلّم فريق البناء أكثر من أي اجتماع.",
      },
      { t: "h3", text: "3. المدخلات ومصادر البيانات" },
      {
        t: "p",
        text: "اكتب كل ما سيقرؤه النظام: الرسائل النصية، والرسائل الصوتية، والصور، وملفات PDF، والجداول، وتقويم الحجوزات، وقاعدة بيانات المنتجات. وحدد لكل مصدر أين يوجد، ومن يحدّثه، وهل يحتوي على بيانات شخصية. توصي [إرشادات الحكومة البريطانية لشراء أنظمة الذكاء الاصطناعي](" +
          UK_PROCUREMENT +
          ") بتقييم البيانات قبل بدء الشراء، والشركة الصغيرة تستطيع أن تفعل ذلك في جلسة واحدة بجدول بسيط.",
      },
      { t: "h3", text: "4. ما سيفعله النظام، وما لن يفعله" },
      {
        t: "p",
        text: "اكتب قائمتين صريحتين. الأولى تسمّي كل مهمة والقناة التي تعمل عليها («يجيب عن أسئلة الأسعار من قائمة الأسعار المعتمدة»، «يحجز في التقويم المشترك»). والثانية تسمّي ما يبقى خارج النظام حتى لا يفترض أحد غير ذلك: الخصومات، واسترداد المبالغ، والاستشارات القانونية، وأي أمر طبي. والقائمة الثانية تمنع خلافات أكثر مما تمنعه الأولى.",
      },
      { t: "h3", text: "5. قواعد التسليم إلى الموظفين" },
      {
        t: "p",
        text: "حدد متى يتوقف النظام ويتولى موظف الحالة: أي مواضيع، وأي طلبات من العميل، وأي درجة من عدم اليقين، وفي أي ساعات. ثم حدد من يستلم الحالة، وعبر أي قناة، ومع أي سياق، وخلال كم من الوقت يُتوقع أن يرد. الحالة التي تصل إلى بريد لا يقرؤه أحد في الحادية عشرة ليلًا ثغرة في التصميم.",
      },
      { t: "h3", text: "6. مقاييس النجاح وخط الأساس" },
      {
        t: "p",
        text: "اختر من مقياسين إلى أربعة من مقاييس العمل نفسه، مثل سرعة أول رد، ونسبة الاستفسارات التي تُحل دون تدخل الموظفين، وعدد الحجوزات في الأسبوع، أو الساعات التي تذهب في المهمة. ثم قِسها **قبل** البناء على مدى أسبوعين عاديين على الأقل، وهذا هو خط الأساس (baseline). وينبّه دليل Google إلى أن مقاييس النموذج، مثل نسب الدقة، [لا تضمن تحسّن مقاييس العمل](" +
          GOOGLE_SUCCESS +
          "). ومن دون خط أساس لا يستطيع أحد أن يقول هل ساعد النظام أم لا.",
      },
      { t: "h3", text: "7. الربط والحسابات" },
      {
        t: "p",
        text: "سمِّ كل نظام سيقرأ منه الذكاء الاصطناعي أو يكتب فيه، وهل لديه واجهة برمجية (API)، وباسم من يعمل الحساب. حين تكون الحسابات باسم شركتك (حساب واتساب للأعمال، والتقويم، ومزوّد نموذج الذكاء الاصطناعي، والاستضافة)، تبقى السيطرة بيدك مهما تغيّر الموظفون أو المزوّدون.",
      },
      { t: "h3", text: "8. المخاطر والضوابط" },
      {
        t: "p",
        text: "قد تنتج النماذج اللغوية ما يسميه [ملف NIST للذكاء الاصطناعي التوليدي](" +
          NIST_GENAI +
          ") «confabulation»، أي محتوى يُقدَّم بثقة وهو خاطئ، ويعرفه كثيرون باسم «الهلوسة». والضوابط هي الرد التصميمي على ذلك: يجيب النظام من المعرفة المعتمدة فقط، ويقول إنه لا يعرف ويسلّم الحالة حين لا يكون متأكدًا، ويعمل ضمن صلاحيات محدودة (يعرض المواعيد المتاحة مثلًا، لكنه لا يلغي حجزًا مدفوعًا).",
      },
      {
        t: "p",
        text: "أضف إلى ذلك سجلًا لكل محادثة، ومجموعة ثابتة من الأسئلة الحقيقية والأسئلة المصممة لإرباكه يجب أن يجتازها قبل التشغيل. والمؤسسات التي تحتاج نظام إدارة رسميًا للذكاء الاصطناعي تستطيع أن تبني على [ISO/IEC 42001](" +
          ISO_42001 +
          ")، المعيار الدولي لأنظمة إدارة الذكاء الاصطناعي.",
      },
      { t: "h3", text: "9. الاستضافة والملكية" },
      {
        t: "p",
        text: "حدد أين يعمل النظام، ومن يملك الكود والتعليمات (prompts) وقاعدة المعرفة والبيانات، وكيف تنقله إلى مزوّد آخر إن احتجت. تضع الإرشادات البريطانية [تجنّب الخوارزميات المغلقة والارتهان لمزوّد واحد (vendor lock-in)](" +
          UK_PROCUREMENT +
          ") بين أهم اعتباراتها، إلى جانب التخطيط لدورة حياة النظام كاملة: نقل المعرفة، والتدريب، والدعم المستمر، والاستضافة. ودليلنا عن [امتلاك نظام الذكاء الاصطناعي الخاص بك](/ar/insights/own-your-ai-system) يشرح أسئلة الملكية بالتفصيل.",
      },
      { t: "h3", text: "10. الجدول الزمني" },
      {
        t: "p",
        text: "اكتب المراحل بتواريخها، ومع كل مرحلة ما تحتاجه منك: صلاحيات الوصول إلى الحسابات، والمحتوى المعتمد، وحالات الاختبار، وصاحب قرار يجيب عن الأسئلة بسرعة. والمدخلات المطلوبة من جهتك يسهل الاستهانة بها، فاكتب تواريخها أيضًا.",
      },
      { t: "h3", text: "11. السعر وما الذي يغيّره" },
      {
        t: "p",
        text: "توقّع سعرًا ثابتًا للنطاق المحدد، وبندًا منفصلًا لتكاليف التشغيل (الاستضافة، واستخدام نموذج الذكاء الاصطناعي، ورسوم الرسائل)، وقاعدة مكتوبة للتغييرات: أي إضافة بعد اعتماد المخطط تحصل على تقدير مكتوب قبل بدء العمل عليها. وفي قسم التسعير أدناه تفصيل أكثر.",
      },

      { t: "h2", id: "questions-before-you-spend", text: "ما الأسئلة التي تجيب عنها قبل أن تدفع؟" },
      {
        t: "p",
        text: "أجب عنها كتابةً قبل أن توقّع على أي شيء. وإن لم تعرف جواب أحدها، فهو أول ما ينبغي أن تحسمه مكالمة التخطيط.",
      },
      {
        t: "ol",
        items: [
          "**ما المشكلة في جملة واحدة، دون كلمة «ذكاء اصطناعي»؟**",
          "**كم تكلّفنا اليوم؟** ساعات العمل في الأسبوع، والاستفسارات الضائعة، والأخطاء التي نصححها، وهل هذه الأرقام مقيسة أم مجرد تقدير.",
          "**هل جرّبنا الحل البسيط؟** قالب رسالة، أو نموذج، أو قاعدة واحدة قد تحل أغلب المشكلة. ويوصي دليل Google بـ[التأكد أولًا من أن حلك الحالي الذي لا يعتمد على تعلّم الآلة في أفضل حالاته](" +
            GOOGLE_PROBLEM +
            ")، أو تجربة حل بسيط قائم على قواعد، ثم اعتماده معيارًا يجب أن يتفوق عليه الذكاء الاصطناعي.",
          "**هل يتكرر العمل بما يكفي؟** مهمة تتكرر خمس مرات في الشهر نادرًا ما تبرر بناء نظام، أما مهمة تتكرر مئة مرة في الأسبوع فغالبًا تبرره. ودليلنا عن [أتمتة عمليات الأعمال بالذكاء الاصطناعي](/ar/insights/ai-automation-for-business-processes) يشرح كيف تختار.",
          "**هل المعرفة مكتوبة، ومن يحدّثها؟**",
          "**ما الذي يجب ألا يحدث أبدًا؟** سمِّ الإجابة أو الإجراء الخاطئ الذي قد يكلّفك عميلًا أو غرامة أو سمعتك.",
          "**من المسؤول عن المشروع داخل الشركة؟** لا بد من شخص يعتمد المعرفة، ويراجع الحالات المحوّلة، ويتخذ القرارات أثناء البناء.",
          "**ما الأنظمة التي سيتعامل معها، وهل نملك حساباتها؟**",
          "**هل سيغطي تكلفته؟** يشير دليل Google لتقييم الجدوى إلى أن أغلب مشاريع تعلّم الآلة [لن تُعتمد](" +
            GOOGLE_FEASIBILITY +
            ") إذا كانت تكلفة تنفيذها وصيانتها أعلى مما تجلبه من مال أو توفّره. احسب تكاليف التشغيل إلى جانب تكلفة البناء.",
          "**إن توقفنا عن العمل مع هذا المزوّد، ماذا يبقى لنا؟**",
        ],
      },

      { t: "h2", id: "run-a-pilot", text: "كيف تدير تجربة محدودة لنظام ذكاء اصطناعي وتحكم على نتائجها؟" },
      {
        t: "p",
        text: "التجربة المحدودة (Pilot) تختبر المخطط على عمل حقيقي قبل أن تلتزم بالنطاق الكامل. اجعلها ضيقة، وحدد مسبقًا ما النتيجة التي تُعد نجاحًا.",
      },
      {
        t: "ol",
        items: [
          "**اختر شريحة واحدة.** مهمة واحدة، وقناة واحدة، وفريقًا واحدًا: استفسارات الحجز على واتساب مثلًا، باللغات التي يكتب بها عملاؤك فعلًا.",
          "**حدد المدة ومعيار النجاح كتابةً.** اجعل المدة تشمل أيام الضغط والأيام الهادئة، واربط الأهداف بمقاييس خط الأساس، مثل: أول رد خلال أقل من دقيقة في أغلب المحادثات، وإتمام 60% على الأقل من طلبات الحجز دون موظف، وعدم ذكر أي سعر خاطئ.",
          "**ابنِها على حساباتك واستضافتك الحقيقية.** التجربة التي تعمل على حساب تجريبي لدى المزوّد يجب أن يُعاد بناؤها عند التشغيل، وإعادة البناء قد تغيّر سلوك النظام.",
          "**ابدأ تحت الإشراف.** دع الموظفين يرون ردود النظام أو يعتمدونها في الأيام الأولى، ثم اتركه يرد وحده بينما يراجعون عينات من محادثاته.",
          "**راجع كل حالة محوّلة وكل إجابة خاطئة أسبوعيًا.** صنّف كل واحدة: نقص في المعرفة، أو قاعدة غائبة، أو خطأ من النموذج، أو عطل في الربط، فلكل نوع علاج مختلف.",
          "**قِس بالطريقة نفسها التي قست بها خط الأساس.**",
          "**قرّر: توسيع، أو تعديل، أو توقف.** إيقاف تجربة لم تبلغ معيار النجاح يعني أن العملية أدّت وظيفتها، وتكلفته أقل بكثير من إيقاف نظام مكتمل.",
        ],
      },
      {
        t: "p",
        text: "وملاحظة عن المدى الزمني: من توصيات RAND اختيار مشكلات دائمة، وينصح مؤلفوها القادة بأن يكونوا مستعدين لتكريس فريق لحل مشكلة محددة لمدة سنة على الأقل. التجربة تُثبت أن النظام يعمل، أما القيمة فتأتي من تشغيله وتحسينه في الأشهر التالية.",
      },

      { t: "h2", id: "blueprint-checklist", text: "قائمة جاهزة لكتابة مخطط مشروعك" },
      {
        t: "p",
        text: "انسخ هذا الجدول إلى مستند واملأ العمود الأوسط. العمود الأخير مثال افتراضي: شركة إدارة عقارات تريد نظامًا يتولى طلبات الصيانة التي يرسلها المستأجرون على واتساب بعد ساعات الدوام.",
      },
      {
        t: "table",
        caption: "قائمة مخطط مشروع الذكاء الاصطناعي",
        head: ["البند", "ما تكتبه", "مثال افتراضي"],
        rows: [
          [
            "المشكلة",
            "الهدف في جملة واحدة دون كلمة «ذكاء اصطناعي»",
            "طلبات الصيانة التي تصل بعد السادسة مساءً تنتظر حتى الصباح، فيُكتشف التسرّب العاجل متأخرًا",
          ],
          [
            "سير العمل اليوم",
            "الخطوات، والأشخاص، والأدوات، والأحجام الأسبوعية، وأين ينتظر العمل",
            "يراسل المستأجر رقم المكتب، وينقل الموظف كل طلب إلى جدول في صباح اليوم التالي ثم يتصل بالفني",
          ],
          [
            "المدخلات والبيانات",
            "ما يقرؤه النظام، وأين يوجد، ومن يحدّثه",
            "رسائل المستأجرين وصورهم ورسائلهم الصوتية، وقائمة العقارات والمستأجرين، وجدول مناوبات الفنيين",
          ],
          [
            "ما سيفعله",
            "كل مهمة والقناة التي تعمل عليها",
            "تسجيل الطلب، وطلب صورة، وتقدير درجة الاستعجال، وفتح أمر العمل، وتأكيده للمستأجر على واتساب",
          ],
          ["ما لن يفعله", "ما يبقى بيد الموظفين", "الالتزام بمواعيد الإصلاح، ونقاش الإيجار أو التأمين، واعتماد تكاليف الإصلاح"],
          [
            "قواعد التسليم",
            "متى يحوّل الحالة، ولمن، وعبر أي قناة، وخلال كم من الوقت",
            "مشكلات المياه والغاز والكهرباء والأمن تذهب فورًا إلى المدير المناوب بتنبيه على هاتفه",
          ],
          [
            "المقاييس وخط الأساس",
            "من مقياسين إلى أربعة، تُقاس قبل البناء",
            "الوقت من البلاغ إلى تسجيل أمر العمل، ونسبة الطلبات المسجلة مع صورة، وساعات الموظفين في استقبال الطلبات",
          ],
          [
            "الربط والحسابات",
            "كل نظام، وهل لديه API، وباسم من الحساب",
            "حساب واتساب للأعمال، ونظام متابعة الأعمال، وتقويم الفنيين، وكلها باسم الشركة",
          ],
          [
            "المخاطر والضوابط",
            "ما يجب ألا يحدث أبدًا، وما الذي يمنعه",
            "أي ذكر للغاز يحوّل الحالة فورًا، ولا يقول النظام لمستأجر أبدًا إن المشكلة تحتمل الانتظار",
          ],
          [
            "الاستضافة والملكية",
            "أين يعمل النظام، ومن يملك الكود والبيانات، وكيف تنتقل إن أردت",
            "حساب سحابي باسم الشركة، وتسليم الكود والتعليمات والبيانات عند التثبيت",
          ],
          [
            "الجدول الزمني",
            "المراحل، والتواريخ، وما تحتاجه كل مرحلة منك",
            "المخطط، ثم البناء، ثم تجربة تحت الإشراف لأسبوعين، ثم التشغيل، مع تواريخ لما تقدّمه الشركة من صلاحيات ومحتوى",
          ],
          [
            "السعر",
            "سعر ثابت للنطاق، وتكاليف التشغيل، وقاعدة التغيير",
            "سعر بناء ثابت، والاستضافة والنموذج والرسائل تُحتسب على حسابات الشركة، وأي تغيير يُقدَّر كتابةً أولًا",
          ],
        ],
      },

      { t: "cta" },

      { t: "h2", id: "how-pricing-works", text: "كيف تُسعَّر مشاريع الذكاء الاصطناعي عادة؟" },
      {
        t: "p",
        text: "تُسعَّر المشاريع عادة بإحدى ثلاث طرق، ويتوقف الاختيار على مدى وضوح النطاق. وقواعد المشتريات الفيدرالية الأمريكية تصوغ المبدأ بوضوح: وفق [الجزء 16 من لائحة FAR](" +
          FAR_16 +
          ")، يناسب العقد بسعر ثابت العمل الذي له مواصفات وظيفية أو تفصيلية واضحة بدرجة معقولة، حين يمكن تحديد سعر عادل له من البداية. أما عقد الوقت والمواد، أي الدفع مقابل الساعات، فلا يُستخدم إلا حين يتعذر تقدير حجم العمل أو مدته بأي درجة معقولة من الثقة. وتنبّه اللائحة نفسها إلى أن الدفع بالساعة لا يمنح المقاول أي حافز ربحي للتحكم في التكلفة، ولهذا يحتاج المشتري إلى متابعة الأداء.",
      },
      {
        t: "table",
        caption: "طرق التسعير الشائعة لمشاريع الذكاء الاصطناعي",
        head: ["طريقة التسعير", "كيف تعمل", "تناسب", "انتبه إلى"],
        rows: [
          [
            "سعر ثابت لكل مرحلة",
            "مرحلة تخطيط تنتج المخطط، ثم يُسعَّر البناء بمبلغ ثابت على أساسه",
            "المشاريع التي لها مخطط محدد",
            "السعر يغطي ما في المخطط فقط، فتحتاج قاعدة مكتوبة للتغييرات",
          ],
          [
            "الوقت والمواد (بالساعة)",
            "تدفع مقابل الساعات أو الأيام الفعلية، ويُفضَّل أن يكون لها سقف",
            "البحث، أو العمل الذي لا يمكن تقديره بعد",
            "التكلفة تتبع الجهد، فاطلب تقارير منتظمة وحدًا أعلى",
          ],
          [
            "الاشتراك",
            "رسوم شهرية لاستخدام برنامج يملكه المزوّد",
            "الأدوات الجاهزة التي لا تحتاج إلى امتلاكها أو تعديلها",
            "زيادات الأسعار، وشروط تصدير البيانات، وما يتوقف عن العمل حين تتوقف عن الدفع",
          ],
        ],
      },
      {
        t: "p",
        text: "خلف أي سعر ثابت تقدير للجهد. يقسّم المنفّذ المخطط إلى أجزاء (كل عملية ربط، وكل مسار محادثة، وكل قاعدة تسليم، والاختبار، والتثبيت، والتدريب)، ويقدّر جهد كل جزء، ثم يضيف هامشًا لما بقي غامضًا. وكلما زاد غموض المخطط كبر هذا الهامش، ولهذا يميل النطاق المحدد إلى خفض السعر.",
      },
      {
        t: "p",
        text: "وفوق سعر البناء تأتي تكاليف التشغيل في كل الطرق: الاستضافة، ورسوم استخدام نموذج الذكاء الاصطناعي التي تزيد مع الحجم، ورسوم الرسائل مثل رسائل واتساب، وأي دعم تختار شراءه. اطلب تقديرًا لكل منها عند حجم عملك المتوقع، واسأل على حساب من يُحتسب كل بند. وهذه أكثر العوامل تأثيرًا في سعر البناء:",
      },
      {
        t: "ul",
        items: [
          "**الربط.** كل نظام يجب ربطه، وهل لديه واجهة برمجية صالحة للاستخدام.",
          "**القنوات واللغات.** واتساب والدردشة على الموقع والبريد والمكالمات الصوتية لكل منها معالجته، وكذلك كل لغة ولهجة يجب أن يكتب بها النظام.",
          "**العمل على البيانات.** المعرفة التي يجب جمعها أو تنظيفها أو كتابتها قبل أن يستخدمها النظام.",
          "**مستوى الموثوقية المطلوب.** يشير دليل Google لتقييم الجدوى إلى أن رفع دقة النموذج من 99.9% إلى 99.99% [قد يعني مضاعفة تكلفة المشروع عشر مرات](" +
            GOOGLE_FEASIBILITY +
            ")، إن لم يكن أكثر. حدد أين تحتاج دقة شبه كاملة، وأين يكون تسليم الحالة لموظف هو الضمان الأرخص.",
          "**الامتثال والتدقيق.** قواعد السجلات والاحتفاظ بالبيانات وصلاحيات الوصول التي يفرضها قطاعك.",
          "**الواجهات.** لوحات المتابعة وأدوات الإدارة والتقارير الإضافية.",
        ],
      },
      {
        t: "p",
        text: "والنطاق الثابت يحميك أيضًا من الحالات المتطرفة التي تخفيها المتوسطات. في دراسة شملت 1,471 مشروعًا لتقنية المعلومات، أغلبها مشاريع حكومية كبيرة، وجد Flyvbjerg وBudzier أن [متوسط تجاوز التكلفة بلغ 27%](" +
          HBR +
          ")، لكن مشروعًا من كل ستة كان «بجعة سوداء» بمتوسط تجاوز في التكلفة بلغ 200%، وتجاوز في الجدول الزمني قارب 70%. المخطط المحدد، والسعر المقسّم على مراحل، وقاعدة التغيير المكتوبة، هي ما يُبقي المشروع الصغير بعيدًا عن هذا الطرف.",
      },

      { t: "h2", id: "how-flowramo-scopes", text: "كيف تخطط Flowramo لمشاريعها؟" },
      {
        t: "p",
        text: "تعمل Flowramo على خمس خطوات. نبدأ بمكالمة نرسم فيها العمل كما يحدث اليوم. ثم تستلم مخططًا مكتوبًا بالنطاق والسعر قبل أي بناء، وتستطيع أن تعدّل أو تضيف ما تريد قبل أن يبدأ البناء. بعدها نبني النظام ونختبره على حالاتك الحقيقية، ونثبّته على استضافة تختارها وتملكها، مرتبطًا بحساباتك أنت. وأخيرًا ندرّب فريقك، ومساعدًا ذكيًا نجهّزه لنظامك، على حل المشكلات اليومية، ونبقى متاحين حين تحتاجنا. يُسعَّر كل مشروع في مكالمة، فلا توجد قائمة أسعار على الموقع، وتدفع ثمن النظام نفسه بدل اشتراك شهري.",
      },
      {
        t: "p",
        text: "و[لينا](/ar/products/lina)، موظفة الاستقبال الذكية التي بنيناها لعيادات الأسنان على واتساب، مثال على شكل حدود النطاق الواضحة. تجيب من المعرفة التي اعتمدتها العيادة فقط، وتحجز المواعيد وتغيّرها في تقويم العيادة، ولا تشخّص. والحالات العاجلة أو السريرية أو الحساسة تُحوَّل إلى فريق العيادة مع المحادثة كاملة. وتُثبَّت على استضافة تختارها العيادة وتملكها، مرتبطة بواتساب العيادة وتقويمها. وكل جملة من هذه الجمل من نوع السطور التي ينبغي أن يحتويها المخطط.",
      },
      {
        t: "p",
        text: "ولترى أنواع الأنظمة التي ينطبق عليها هذا، تصفّح [حلولنا](/ar/solutions). وحين تكون مستعدًا لكتابة مخططك، [ابدأ مشروعك](/ar/contact).",
      },
    ],
    faq: [
      {
        q: "كيف أحدد نطاق مشروع ذكاء اصطناعي؟",
        a: "ابدأ بوصف المشكلة بلغة العمل، وبخريطة لسير العمل كما يحدث اليوم. ثم اكتب مخططًا يحدد البيانات التي يحتاجها النظام، وما سيفعله وما لن يفعله، ومتى يسلّم الحالة لموظف، وكيف سيُقاس النجاح مقارنة بخط الأساس، والأنظمة والحسابات التي سيرتبط بها، والمخاطر والضوابط، وأين يُستضاف ومن يملكه، والجدول الزمني، والسعر مع قاعدة التغيير.",
      },
      {
        q: "لماذا تفشل أغلب مشاريع الذكاء الاصطناعي؟",
        a: "في مقابلات RAND عام 2024 مع علماء بيانات ومهندسين متمرسين، كان أكثر الأسباب الجذرية شيوعًا سوء فهم المشكلة أو سوء توصيلها. والأسباب الأربعة الأخرى: نقص البيانات، والانشغال بالتقنية بدل مشكلات المستخدمين الحقيقية، وضعف البنية التحتية، ومشكلات أصعب من قدرة الذكاء الاصطناعي. وتشير RAND إلى أن أكثر من 80% من هذه المشاريع تفشل وفق بعض التقديرات. وأغلب هذه الأسباب يمكن اكتشافه في مرحلة التخطيط.",
      },
      {
        q: "ما الفرق بين إثبات المفهوم (PoC) والتجربة المحدودة (Pilot)؟",
        a: "إثبات المفهوم يُظهر أن الفكرة ممكنة، وغالبًا على بيانات تجريبية في بيئة اختبار. أما التجربة المحدودة فتشغّل النظام الحقيقي على شريحة ضيقة من العمل الفعلي، على الحسابات والاستضافة التي سيعمل عليها لاحقًا، بمعايير نجاح وفشل متفق عليها مسبقًا. وهي تجيب عن السؤال الذي يهم صاحب العمل: هل ينجح هذا عندنا، بحجم عملنا، ومع عملائنا؟",
      },
      {
        q: "كم مدة تجربة نظام الذكاء الاصطناعي قبل اعتماده؟",
        a: "مدة تكفي لترى نمطك المعتاد من أيام الضغط والأيام الهادئة، وعددًا من الحالات الحقيقية يكفي للحكم على كل معيار نجاح. وفي كثير من شركات الخدمات يعني ذلك بضعة أسابيع. اتفق على المدة ومعيار النجاح كتابةً قبل أن تبدأ، وقِس النتائج بالطريقة نفسها التي قست بها خط الأساس.",
      },
      {
        q: "هل الأفضل أن يكون مشروع الذكاء الاصطناعي بسعر ثابت أم بالساعة؟",
        a: "اختر السعر الثابت حين يكون النطاق محددًا بما يكفي لاختبار النظام عليه، والدفع بالساعة حين لا يمكن تقدير العمل بعد، كما في مراحل البحث الأولى. وقواعد المشتريات الفيدرالية الأمريكية (الجزء 16 من لائحة FAR) تتبع المنطق نفسه، وتنبّه إلى أن الدفع بالساعة لا يمنح المقاول حافزًا للتحكم في التكلفة، فيحتاج المشتري إلى متابعته. ومرحلة تخطيط يتبعها بناء بسعر ثابت تجمع بين الطريقتين.",
      },
      {
        q: "كم تكلفة بناء نظام ذكاء اصطناعي مخصص؟",
        a: "تتوقف على النطاق: عدد الأنظمة التي يرتبط بها، والقنوات واللغات، وحجم العمل على البيانات، ومستوى الموثوقية المطلوب، ومتطلبات الامتثال. وتأتي تكاليف التشغيل، مثل الاستضافة واستخدام النموذج ورسوم الرسائل، فوق تكلفة البناء. والسعر الموثوق يأتي بعد المخطط. وFlowramo تسعّر كل مشروع في مكالمة، ولا توجد لديها قائمة أسعار.",
      },
      {
        q: "ما الأسئلة التي أسألها لشركة الذكاء الاصطناعي قبل التوقيع؟",
        a: "اسأل بالتحديد: ما الذي سيفعله النظام وما الذي لن يفعله، ومتى يسلّم الحالة لموظف، وكيف سيُقاس النجاح ومقارنة بأي خط أساس، وعلى حسابات من واستضافة من سيعمل، ومن يملك الكود والبيانات، وكم ستكون تكاليف التشغيل عند حجم عملك، وكيف تُسعَّر التغييرات، وماذا يبقى لك إن انتهى التعاون بينكما.",
      },
    ],
    sources,
    keywords: [
      "كيف تخطط لمشروع ذكاء اصطناعي",
      "نطاق مشروع الذكاء الاصطناعي",
      "مخطط مشروع ذكاء اصطناعي",
      "تجربة نظام ذكاء اصطناعي",
      "تكلفة مشروع ذكاء اصطناعي",
      "تسعير مشاريع الذكاء الاصطناعي",
      "لماذا تفشل مشاريع الذكاء الاصطناعي",
      "سعر ثابت أم بالساعة",
    ],
    minutes: 12,
  },
};

export default article;
