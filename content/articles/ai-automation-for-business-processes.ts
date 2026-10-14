import type { Article } from "./types";

const article: Article = {
  slug: "ai-automation-for-business-processes",
  published: "2026-10-14",
  updated: "2026-10-14",
  related: ["ai-agents-for-business", "how-to-scope-an-ai-project"],
  topic: "studio",

  en: {
    title: "How to automate business processes with AI: where to start",
    seoTitle: "How to Automate Business Processes with AI: Where to Start",
    description:
      "How to automate business processes with AI: pick the right process, map it, measure a baseline, choose rules or AI, keep people in the loop and plan upkeep.",
    answer:
      "To automate a business process with AI, start with one that is high-volume, repetitive and costly to delay. Map how it really runs, measure time, errors and response times as a baseline, then handle rule-based steps with plain rules and use AI where inputs are unstructured, like free-text messages. Keep a person approving risky actions, and budget for monitoring.",
    takeaways: [
      "Score candidate processes on volume, repetition, clear rules, cost of delay, data access and risk if wrong, and start with the highest total rather than the most impressive idea.",
      "Map the process as it actually runs, exceptions and side spreadsheets included, and measure a baseline for two to four weeks before you build anything.",
      "Use plain rules for structured inputs and fixed decisions, and AI for unstructured ones such as free-text messages, voice notes and scanned documents. Most good systems combine both.",
      "AI is uneven: in a field experiment with 758 BCG consultants, it helped on tasks inside its capabilities and lowered correct answers on a task just outside them, so test it on your own cases.",
      "Design the hand-off to a person before the happy path. A Canadian tribunal held Air Canada responsible for what its website chatbot told a customer.",
      "Budget for maintenance, monitoring and model changes: the same model's behaviour can shift between versions, and providers retire models on their own schedule.",
    ],
    blocks: [
      {
        t: "p",
        text: "Ask an operations manager where the week goes and you usually get a list of small jobs: copying enquiries from WhatsApp into a spreadsheet, chasing confirmations, re-typing invoice details into the accounting system, answering the same twenty questions about prices and opening hours. Each job takes a few minutes. Together they fill days, and they are the kind of work automation handles well.",
      },
      {
        t: "p",
        text: "Smaller firms have the most room to catch up. In the EU, [20.0% of enterprises](https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2) with 10 or more employees used AI in 2025, including 55.0% of large enterprises but only 17.0% of small ones. The hard part is choosing well. Pick the wrong process and you spend months automating something that runs twice a week, or hand an AI a decision that needed a person. This guide covers how to choose, how to prepare, when rules beat AI, and the costs that rarely appear in the first quote.",
      },

      { t: "h2", id: "choose-the-process", text: "Which business processes should you automate first?" },
      {
        t: "p",
        text: "Good first candidates share four traits. Check every process you are considering against them before you look at a single tool.",
      },
      {
        t: "ul",
        items: [
          "**Volume.** It happens often: dozens of times a day, or hundreds a month. A task that runs twice a week rarely repays the build and the upkeep.",
          "**Repetition.** Most cases follow the same path. If every case is a new puzzle, there is little to automate.",
          "**Rules over judgement.** The decision at each step can be written down, for example: invoices over 5,000 go to the finance manager. Steps that need judgement, such as a refund dispute or a clinical question, stay with a person or need a person's approval.",
          "**Cost of delay.** Waiting costs money or customers. An enquiry answered tomorrow is worth less than one answered now.",
        ],
      },
      {
        t: "p",
        text: "The last trait is the one most often underrated. In an audit of 2,241 US companies reported in [Harvard Business Review](https://hbr.org/2011/03/the-short-life-of-online-sales-leads) in 2011, 37% answered a web enquiry within an hour, 23% never answered, and the average among firms that replied within 30 days was 42 hours. The same article reports that firms that tried to contact a lead within an hour were nearly seven times as likely to qualify it as firms that waited even an hour longer. When the work is answering people, speed is often where automation pays first.",
      },
      {
        t: "p",
        text: "To compare candidates, score each one from 1 to 5 on six criteria. Two of them work in reverse: a process that needs a lot of judgement, or does real damage when it goes wrong, scores low.",
      },
      {
        t: "table",
        caption: "Score each candidate process from 1 (poor fit) to 5 (strong fit)",
        head: ["Criterion", "Scores 5 when", "Scores 1 when"],
        rows: [
          ["Volume", "It runs many times a day", "It runs a few times a month"],
          ["Repetition", "Most cases follow the same path", "Every case is different"],
          ["Clear rules", "Each decision fits a written rule or a short policy", "Decisions rely on experience and judgement"],
          ["Cost of delay", "A slow response loses money or customers", "Nobody notices if it waits a day"],
          ["Data access", "Inputs are digital and the systems can be reached by API", "Information lives in heads, on paper or in closed systems"],
          ["Risk if wrong", "A mistake is cheap and easy to reverse", "A mistake is costly, public or hard to undo"],
        ],
      },
      {
        t: "p",
        text: "Add up the six scores. As a rule of thumb, 24 or more out of 30 is a strong first candidate, 18 to 23 usually works with a person approving the key steps, and below 18 you should fix the process or the data before automating it. Three common processes might score like this:",
      },
      {
        t: "table",
        caption: "Example scores (volume, repetition, rules, delay, data, risk)",
        head: ["Process", "Scores", "Total", "Verdict"],
        rows: [
          [
            "Answering repeat customer questions on WhatsApp: prices, hours, location, bookings",
            "5, 5, 4, 5, 4, 4",
            "27",
            "Strong first candidate",
          ],
          ["Copying invoice details into the accounting system", "4, 4, 4, 2, 3, 3", "20", "Automate, with a person checking totals"],
          ["Approving refunds or credit", "2, 2, 1, 3, 3, 1", "12", "Keep with a person; automate the paperwork around it"],
        ],
      },

      { t: "h2", id: "map-the-process", text: "Map the process as it really runs today" },
      {
        t: "p",
        text: "The process in the operations manual and the process your team runs are rarely the same. The real one has workarounds: a side spreadsheet, a WhatsApp group where approvals happen, one colleague who knows which customers get special prices. Automate the documented version and the system will fail on the first case nobody told it about.",
      },
      { t: "p", text: "Map it with the people who do the work, using last month's real cases instead of memory:" },
      {
        t: "ol",
        items: [
          "Pick 20 to 30 recent cases and follow each one from the trigger (a message, a form, an email) to the finished result.",
          "Write down every step, who does it, which tool they use and how long it takes.",
          "Mark each decision point and the rule behind it. If nobody can state the rule, it is a judgement call.",
          "List the exceptions and how often they happen. Exceptions decide how much of the process you can automate.",
          "Note every place where data is typed twice or copied between systems. These are usually the cheapest wins.",
        ],
      },
      {
        t: "p",
        text: "The result fits on one page: steps, owners, tools, rules and exceptions. It also becomes the brief for whoever builds the system, and the core of [scoping an AI project](/en/insights/how-to-scope-an-ai-project) properly.",
      },

      { t: "h2", id: "measure-a-baseline", text: "Measure a baseline before you build anything" },
      {
        t: "p",
        text: "Without a baseline you cannot tell whether the automation worked, and every later discussion about it turns into opinion. Measure for two to four weeks before building, from your systems where you can rather than from estimates.",
      },
      {
        t: "p",
        text: "Self-reported time savings are a weak substitute. In a November 2024 survey analysed by the [Federal Reserve Bank of St. Louis](https://www.stlouisfed.org/on-the-economy/2025/feb/impact-generative-ai-work-productivity), US workers who used generative AI said it saved them 5.4% of their work hours in the previous week, which the authors estimate implies a 1.1% productivity increase across the whole workforce. That is a real gain, and a modest one. Your own measured numbers will tell you far more than any national average.",
      },
      {
        t: "table",
        caption: "Baseline metrics to record before you automate",
        head: ["Metric", "How to measure it", "Why it matters"],
        rows: [
          ["Volume", "Cases per day or week, by type", "Sets the ceiling on the time you can save"],
          ["Handling time", "Minutes of staff work per case", "The time automation can give back"],
          ["Response and cycle time", "Time from trigger to first response, and to completion", "Shows where delay costs customers or cash"],
          ["Error and rework rate", "Cases corrected, re-entered or escalated ÷ all cases", "Tells you whether quality improves, or only speed"],
          ["Exception rate", "Cases that leave the normal path ÷ all cases", "How much work will still need a person"],
          ["After-hours share", "Cases arriving outside working hours ÷ all cases", "The work that waits until morning today"],
        ],
      },
      {
        t: "p",
        text: "Write the target down before you build: first response under five minutes at any hour, for example, or invoice entry under a minute with no more errors than today. A clear target also tells you when to stop adding features.",
      },

      { t: "h2", id: "rules-or-ai", text: "Rule-based automation or AI: which fits each step?" },
      {
        t: "p",
        text: "Much of what gets sold as AI automation is plain automation: when this happens, do that. Rules are cheap to run, predictable and easy to audit. AI earns its place where the input is unstructured: a free-text message, a voice note, a scanned invoice, a question phrased in a way nobody anticipated.",
      },
      {
        t: "table",
        caption: "Choose the tool step by step",
        head: ["", "Rule-based automation", "AI (language models)"],
        rows: [
          ["Best for", "Structured inputs and fixed decisions", "Unstructured inputs: text, voice, documents, images"],
          [
            "Examples",
            "Route invoices over a set amount to finance; send a reminder 48 hours before a booking",
            "Understand a free-text request; pull fields from a scanned invoice; draft a reply from approved content",
          ],
          ["Behaviour", "The same input gives the same output every time", "Output can vary, and can be confidently wrong"],
          ["Running cost", "Very low per case", "A usage cost per case, plus monitoring"],
          ["Main risk", "Breaks on cases the rules never covered", "Plausible answers that are false"],
        ],
      },
      {
        t: "p",
        text: "That last risk has a formal name. NIST's [Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf) calls it confabulation: “the production of confidently stated but erroneous or false content.” For that reason an AI step should answer from approved knowledge, act through a small set of well-defined actions, and hand off when it is unsure.",
      },
      {
        t: "p",
        text: "AI is also uneven in ways that are hard to predict. In a field experiment with 758 Boston Consulting Group consultants, [Dell'Acqua and colleagues](https://pubsonline.informs.org/doi/10.1287/orsc.2025.21838) found that on 18 tasks inside the AI's capabilities, consultants using it completed 12.2% more tasks, 25.1% more quickly, with higher-quality results. On a task chosen to fall just outside those capabilities, consultants using AI were less likely to reach the correct answer than those working without it. The authors call this the jagged technological frontier. The practical lesson is to test AI on your own cases, including the awkward ones, before you trust it.",
      },
      {
        t: "p",
        text: "In practice the best systems combine both. AI reads the message and works out what the customer wants; rules decide what happens next and which systems are updated. An [AI agent](/en/insights/ai-agents-for-business) goes a step further and chooses among tools to complete a task, which makes clear limits even more important.",
      },

      { t: "h2", id: "human-in-the-loop", text: "Keep a human in the loop, and design the hand-off first" },
      {
        t: "p",
        text: "Automation moves people to different work: the exceptions, the approvals and the judgement calls. Lisanne Bainbridge made the point in 1983, in a paper on industrial process control:",
      },
      {
        t: "quote",
        text: "The more advanced a control system is, so the more crucial may be the contribution of the human operator.",
        cite: "Lisanne Bainbridge, “Ironies of Automation”, Automatica (1983)",
      },
      { t: "p", text: "For every step in your map, decide which of three modes applies:" },
      {
        t: "ul",
        items: [
          "**A person approves before the system acts.** For anything costly or hard to reverse: refunds, quotes above a threshold, a message to your whole customer list.",
          "**The system acts and a person reviews a sample.** For routine work where a mistake is cheap, such as tagging enquiries or updating a CRM field.",
          "**The system acts and hands off the exceptions.** For high-volume conversations, where most cases are simple and a few need a person quickly.",
        ],
      },
      {
        t: "p",
        text: "The evidence from customer service favours AI working alongside people. In a study of 5,172 customer-support agents published in the [Quarterly Journal of Economics](https://doi.org/10.1093/qje/qjae044), AI assistance raised issues resolved per hour by 15% on average. Less experienced agents improved in both speed and quality, while the most experienced saw small gains in speed and small declines in quality.",
      },
      {
        t: "p",
        text: "A good hand-off carries the full context, so the customer never has to repeat themselves: who they are, what they asked, what the system already did and why it stopped. Some platforms require one. The [WhatsApp Business Messaging Policy](https://business.whatsapp.com/policy) allows automated replies but requires prompt, clear and direct escalation paths, such as a transfer to a human agent.",
      },
      {
        t: "p",
        text: "Responsibility stays with the business. In [Moffatt v. Air Canada](https://decisions.civilresolutionbc.ca/crt/crtd/en/525448/1/document.do) (2024), a British Columbia tribunal held the airline liable after its website chatbot gave a customer wrong information about bereavement fares. As the tribunal put it: “It makes no difference whether the information comes from a static page or a chatbot.”",
      },

      { t: "h2", id: "connect-your-tools", text: "Connect to the tools you already use" },
      {
        t: "p",
        text: "An automation that lives in a new app nobody opens becomes one more place to check. Build it into the systems your team already works in: the CRM, the calendar, the spreadsheet that really runs the business, the accounting package, email and WhatsApp.",
      },
      {
        t: "ul",
        items: [
          "**Name one system of record for each kind of data.** Bookings live in the calendar and customers in the CRM. The automation reads from and writes to those, and keeps no private copy that drifts out of date.",
          "**Check access early.** Does each tool have an API, and does your plan include it? Can you create an account with only the permissions the automation needs? Many projects stall at this point.",
          "**Read before you write.** Let the automation read data and suggest actions first, and give it write access to live systems once its suggestions hold up.",
          "**Learn each channel's rules.** On WhatsApp, a business can reply freely once a customer writes in, but outside the 24-hour customer service window it may only send pre-approved message templates, under the [WhatsApp Business Messaging Policy](https://business.whatsapp.com/policy). Reminders and follow-ups have to be designed around that.",
          "**Keep the accounts in your name.** The WhatsApp number, the calendar, the hosting and the data should belong to your business, so the system stays yours if your supplier changes.",
        ],
      },
      {
        t: "p",
        text: "When connecting systems is most of the job, treat it as an [integration project](/en/solutions#integrations) in its own right.",
      },

      { t: "h2", id: "first-project-step-by-step", text: "Your first AI automation project, step by step" },
      { t: "p", text: "Keep the first project to one process, end to end, and work in this order:" },
      {
        t: "ol",
        items: [
          "**Score your candidates** with the table above and pick the top one, even if another idea is more exciting.",
          "**Map it** with the people who run it, using real cases and their exceptions.",
          "**Measure the baseline** for two to four weeks and write down the target.",
          "**Decide rules or AI for each step**, and which of the three human modes applies.",
          "**Write the hand-off before the happy path**: what triggers it, who receives it and what context travels with it.",
          "**Build the smallest useful version** on one channel or for one team, connected to the real systems.",
          "**Run it in shadow mode**: the system drafts, a person approves, and you compare its output with what the team would have done.",
          "**Measure against the baseline**, then widen the scope or give the system more autonomy one step at a time.",
        ],
      },
      {
        t: "p",
        text: "We do this work as projects, from scoring candidates to building and installing the system. See how we approach [business automation](/en/solutions#automation), or [describe the process](/en/contact) that slows your team down.",
      },

      { t: "cta" },

      { t: "h2", id: "hidden-costs", text: "What costs are easy to miss?" },
      {
        t: "p",
        text: "The build is the visible cost. The running costs arrive later, and they are the ones most often left out of a business case. Engineers at Google made the point about machine learning in 2015, when [Sculley and colleagues](https://proceedings.neurips.cc/paper/2015/file/86df7dcfd896fcaf2674f757a2463eba-Paper.pdf) wrote that “it is common to incur massive ongoing maintenance costs in real-world ML systems.”",
      },
      {
        t: "table",
        caption: "Running costs to budget for",
        head: ["Cost", "Why it appears", "How to plan for it"],
        rows: [
          ["Maintenance", "Prices, policies, staff and connected tools change, and the system has to follow", "Agree who updates the knowledge and the rules, and how often"],
          ["Monitoring", "AI output can drift even when nothing in your own setup changed", "Review a sample of cases every week and keep tracking the baseline metrics"],
          ["Model changes", "Providers update and retire models on their own schedule", "Keep the model swappable and re-test on your own cases before each switch"],
          ["Usage fees", "AI models and messaging platforms are usually billed by use", "Estimate from your measured volume, not from a demo"],
          ["People's time", "Someone reviews exceptions, approves actions and answers hand-offs", "Count those hours in the business case"],
        ],
      },
      {
        t: "p",
        text: "Drift is measurable. Researchers at Stanford and UC Berkeley [compared two versions of GPT-4](https://hdsr.mitpress.mit.edu/pub/y95zitmz/release/2) from March and June 2023 and found its accuracy at telling prime from composite numbers fell from 84% to 51%. Models are also retired outright: OpenAI's [deprecations page](https://developers.openai.com/api/docs/deprecations) lists gpt-3.5-turbo-0613 as shut down on 13 September 2024 and gpt-4-32k on 6 June 2025, each with a recommended replacement. A system built on one model needs a tested path to the next.",
      },

      { t: "h2", id: "example-lina", text: "An example: a WhatsApp receptionist for dental clinics" },
      {
        t: "p",
        text: "Lina, the AI receptionist Flowramo built for dental clinics, shows how these choices fit together in one system. A clinic's WhatsApp scores high on the table: many messages, mostly the same questions and booking requests, and a real cost when a patient waits until morning for an answer.",
      },
      {
        t: "p",
        text: "AI handles the unstructured part: understanding messages and voice notes in Arabic (including Gulf dialect), English and Turkish, and answering only from knowledge the clinic has approved. Rules and integrations handle the rest: bookings and reschedules go straight into the clinic's calendar, and reminders go out on schedule. Urgent, clinical and sensitive cases go to the clinic team with the full context, and Lina does not diagnose. The system is installed on hosting the clinic chooses and owns, connected to the clinic's own accounts.",
      },
      {
        t: "p",
        text: "You can [see how Lina works](/en/products/lina). The same method applies to any business whose work runs through repeated conversations, documents and hand-offs.",
      },
    ],
    faq: [
      {
        q: "What business processes can be automated with AI?",
        a: "The best candidates happen often, follow a similar path each time and involve unstructured inputs such as messages, emails, voice notes or documents. Common examples are answering repeat customer questions, booking and rescheduling appointments, routing leads, pulling data from invoices and forms, and sending reminders and follow-ups. Decisions that need judgement, such as refunds or clinical questions, should stay with a person or need a person's approval.",
      },
      {
        q: "How do I decide which process to automate first?",
        a: "Score each candidate from 1 to 5 on volume, repetition, how clearly the rules can be written down, the cost of delay, how easily the data can be reached, and the risk if it goes wrong (reversed, so risky processes score low). Start with the highest total. A process that scores high on volume and cost of delay but low on risk, such as answering repeat customer questions, is usually the best first project.",
      },
      {
        q: "What is the difference between automation and AI automation?",
        a: "Rule-based automation follows fixed instructions: when this happens, do that. It is cheap, predictable and suited to structured inputs. AI automation uses language models to handle unstructured inputs, such as understanding a free-text message or reading a scanned document, but its output can vary and can be confidently wrong. Most reliable systems use AI to understand the input and rules to decide what happens next.",
      },
      {
        q: "How much does it cost to automate a business process with AI?",
        a: "It depends on the number of systems involved, how many exceptions the process has and how much of it needs AI rather than rules. Budget for the build and for running costs: usage fees for AI models and messaging, maintenance as prices and policies change, weekly monitoring, re-testing when models change, and staff time for approvals and hand-offs. Compare the total with what the process costs today, using your measured baseline.",
      },
      {
        q: "Will AI automation replace my staff?",
        a: "The strongest evidence so far comes from AI assisting staff. In a study of 5,172 customer-support agents, AI assistance raised issues resolved per hour by 15% on average, with the largest gains for less experienced agents. In practice, automation takes over repetitive steps and moves people to exceptions, approvals and conversations that need judgement.",
      },
      {
        q: "How do I stop an AI system from giving customers wrong answers?",
        a: "Limit it to knowledge you have approved, give it a small set of well-defined actions, and make it hand off to a person when it is unsure or when a case is sensitive. Review a sample of conversations every week. The business stays responsible for what its AI says: in Moffatt v. Air Canada (2024), a tribunal held the airline liable for wrong information its website chatbot gave a customer.",
      },
      {
        q: "Do I need to replace my existing tools to use AI automation?",
        a: "Usually not. Most automation connects to the tools you already use, such as your CRM, calendar, spreadsheets, accounting package, email and WhatsApp, through their APIs. Check early that each tool offers API access on your plan, keep one system of record for each kind of data, and keep the accounts in your business's name.",
      },
    ],
    sources: [
      {
        label: "Eurostat — 20% of EU enterprises use AI technologies (2025)",
        url: "https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2",
      },
      {
        label: "Harvard Business Review — The short life of online sales leads (Oldroyd, McElheran and Elkington, 2011)",
        url: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
      },
      {
        label: "Federal Reserve Bank of St. Louis — The impact of generative AI on work productivity (Bick, Blandin and Deming, 2025)",
        url: "https://www.stlouisfed.org/on-the-economy/2025/feb/impact-generative-ai-work-productivity",
      },
      {
        label: "NIST — AI 600-1, Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (2024)",
        url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf",
      },
      {
        label:
          "Organization Science — Navigating the jagged technological frontier (Dell'Acqua et al.; first released as HBS Working Paper 24-013, 2023)",
        url: "https://pubsonline.informs.org/doi/10.1287/orsc.2025.21838",
      },
      {
        label: "Quarterly Journal of Economics — Generative AI at work (Brynjolfsson, Li and Raymond, 2025)",
        url: "https://doi.org/10.1093/qje/qjae044",
      },
      {
        label: "Automatica — Ironies of automation (Bainbridge, 1983)",
        url: "https://doi.org/10.1016/0005-1098%2883%2990046-8",
      },
      {
        label: "Civil Resolution Tribunal of British Columbia — Moffatt v. Air Canada, 2024 BCCRT 149 (2024)",
        url: "https://decisions.civilresolutionbc.ca/crt/crtd/en/525448/1/document.do",
      },
      { label: "WhatsApp — WhatsApp Business Messaging Policy (2026)", url: "https://business.whatsapp.com/policy" },
      {
        label: "Harvard Data Science Review — How is ChatGPT's behavior changing over time? (Chen, Zaharia and Zou, 2024)",
        url: "https://hdsr.mitpress.mit.edu/pub/y95zitmz/release/2",
      },
      { label: "OpenAI — API deprecations (2026)", url: "https://developers.openai.com/api/docs/deprecations" },
      {
        label: "NeurIPS — Hidden technical debt in machine learning systems (Sculley et al., 2015)",
        url: "https://proceedings.neurips.cc/paper/2015/file/86df7dcfd896fcaf2674f757a2463eba-Paper.pdf",
      },
    ],
    keywords: [
      "how to automate business processes with AI",
      "AI business process automation",
      "AI automation for small business",
      "which processes to automate first",
      "rule-based automation vs AI",
      "human in the loop automation",
      "cost of AI automation",
      "WhatsApp business automation",
    ],
    minutes: 12,
  },

  ar: {
    title: "كيف تؤتمت عمليات شركتك بالذكاء الاصطناعي: من أين تبدأ",
    seoTitle: "أتمتة عمليات الشركة بالذكاء الاصطناعي: من أين تبدأ",
    description:
      "كيف تؤتمت عمليات شركتك بالذكاء الاصطناعي: اختر العملية المناسبة، وارسمها، وقِس وضعها الحالي، وحدّد القواعد أو الذكاء الاصطناعي، وأبقِ الإنسان في الحلقة.",
    answer:
      "لتؤتمت عمليات شركتك بالذكاء الاصطناعي، ابدأ بعملية واحدة تتكرر كثيرًا بخطوات متشابهة ويكلّفك تأخيرها مالًا أو عملاء. ارسمها كما تجري فعلًا، وقِس الوقت والأخطاء وسرعة الرد قبل البناء، ثم نفّذ الخطوات الثابتة بقواعد بسيطة، واستخدم الذكاء الاصطناعي حيث تكون المدخلات نصًا حرًا أو رسائل صوتية. واجعل موظفًا يعتمد القرارات الحساسة، وخصّص ميزانية للمراقبة.",
    takeaways: [
      "قيّم كل عملية مرشحة على ستة معايير: حجمها، وتكرارها، ووضوح قواعدها، وتكلفة تأخيرها، وسهولة الوصول إلى بياناتها، وحجم الضرر إذا أخطأت. وابدأ بالأعلى مجموعًا لا بالفكرة الأكثر إبهارًا.",
      "ارسم العملية كما تجري فعلًا، باستثناءاتها وجداولها الجانبية، وقِس وضعها الحالي أسبوعين إلى أربعة أسابيع قبل أن تبني أي شيء.",
      "استخدم القواعد الثابتة للمدخلات المنظمة والقرارات المحددة، والذكاء الاصطناعي للمدخلات غير المنظمة مثل الرسائل الحرة والرسائل الصوتية والمستندات الممسوحة. وأفضل الأنظمة تجمع بين الاثنين.",
      "أداء الذكاء الاصطناعي متفاوت: في تجربة ميدانية شملت 758 مستشارًا في BCG، ساعدهم في المهام التي تقع ضمن قدراته، وقلّل الإجابات الصحيحة في مهمة تقع خارجها مباشرة. فاختبره على حالاتك أنت.",
      "صمّم التحويل إلى الموظف قبل أن تصمّم المسار المعتاد. فقد حمّلت محكمة كندية شركة Air Canada مسؤولية ما قاله روبوت المحادثة في موقعها لأحد العملاء.",
      "خصّص ميزانية للصيانة والمراقبة وتغيّر النماذج، فسلوك النموذج نفسه قد يتغير بين إصدار وآخر، ومزودو النماذج يوقفونها وفق جداولهم هم.",
    ],
    blocks: [
      {
        t: "p",
        text: "اسأل أي مدير عمليات أين يذهب أسبوعه، وغالبًا ستسمع قائمة من المهام الصغيرة: نسخ الاستفسارات من واتساب إلى جدول، وملاحقة التأكيدات، وإعادة كتابة بيانات الفواتير في النظام المحاسبي، والرد على الأسئلة العشرين نفسها عن الأسعار وساعات العمل. كل مهمة تأخذ دقائق، لكنها مجتمعة تستهلك أيامًا، وهي بالضبط نوع العمل الذي تتقنه الأتمتة.",
      },
      {
        t: "p",
        text: "والشركات الصغيرة هي الأبعد عن الركب، أي أن أمامها الفرصة الأكبر. في الاتحاد الأوروبي، استخدمت [20.0% من الشركات](https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2) التي يعمل فيها 10 موظفين أو أكثر الذكاءَ الاصطناعي عام 2025، وارتفعت النسبة إلى 55.0% بين الشركات الكبيرة، بينما لم تتجاوز 17.0% بين الصغيرة. الصعب هو حسن الاختيار: إن اخترت العملية الخطأ فقد تقضي شهورًا في أتمتة شيء يحدث مرتين في الأسبوع، أو تسلّم الذكاء الاصطناعي قرارًا كان يحتاج إلى إنسان. في هذا الدليل: كيف تختار، وكيف تستعد، ومتى تتفوق القواعد البسيطة على الذكاء الاصطناعي، والتكاليف التي نادرًا ما تظهر في أول عرض سعر.",
      },

      { t: "h2", id: "choose-the-process", text: "ما العمليات التي تستحق الأتمتة أولًا؟" },
      {
        t: "p",
        text: "العمليات المرشحة الجيدة تشترك في أربع صفات. راجع كل عملية تفكر فيها على ضوئها قبل أن تنظر في أي أداة.",
      },
      {
        t: "ul",
        items: [
          "**الحجم.** تتكرر كثيرًا: عشرات المرات يوميًا أو مئات المرات شهريًا. أما المهمة التي تحدث مرتين في الأسبوع فنادرًا ما تغطي تكلفة بنائها وصيانتها.",
          "**التكرار.** معظم الحالات تسير في المسار نفسه. وإن كانت كل حالة لغزًا جديدًا، فلن يبقى الكثير مما يمكن أتمتته.",
          "**قواعد أكثر من اجتهاد.** يمكن كتابة القرار في كل خطوة، مثل: الفواتير التي تتجاوز 5,000 تُحال إلى المدير المالي. أما الخطوات التي تحتاج إلى تقدير شخصي، كالخلاف على استرداد مبلغ أو سؤال طبي، فتبقى مع موظف أو تحتاج إلى موافقته.",
          "**تكلفة التأخير.** الانتظار يكلّفك مالًا أو عملاء. فالاستفسار الذي تردّ عليه غدًا أقل قيمة من استفسار تردّ عليه الآن.",
        ],
      },
      {
        t: "p",
        text: "والصفة الأخيرة هي الأكثر استهانةً بها. في تدقيق شمل 2,241 شركة أمريكية، نشرته [Harvard Business Review](https://hbr.org/2011/03/the-short-life-of-online-sales-leads) عام 2011، ردّت 37% منها على استفسار ورد عبر الموقع خلال ساعة، ولم تردّ 23% منها أبدًا، وبلغ متوسط زمن الرد 42 ساعة لدى الشركات التي ردّت خلال 30 يومًا. ويذكر المقال نفسه أن الشركات التي حاولت التواصل مع العميل المحتمل خلال ساعة كانت أرجح بنحو سبعة أضعاف في تأهيله من الشركات التي تأخرت ولو ساعة إضافية. فحين يكون العمل هو الرد على الناس، تكون السرعة غالبًا أول ما تجني منه الأتمتة عائدها.",
      },
      {
        t: "p",
        text: "ولتقارن بين العمليات المرشحة، امنح كل واحدة درجة من 1 إلى 5 على ستة معايير. معياران منها يعملان بالعكس: العملية التي تحتاج إلى قدر كبير من الاجتهاد، أو التي يكون ضرر الخطأ فيها كبيرًا، تحصل على درجة منخفضة.",
      },
      {
        t: "table",
        caption: "قيّم كل عملية مرشحة من 1 (لا تناسب) إلى 5 (تناسب تمامًا)",
        head: ["المعيار", "تحصل على 5 حين", "تحصل على 1 حين"],
        rows: [
          ["الحجم", "تتكرر مرات كثيرة يوميًا", "تحدث بضع مرات في الشهر"],
          ["التكرار", "معظم الحالات تسير في المسار نفسه", "كل حالة مختلفة عن غيرها"],
          ["وضوح القواعد", "كل قرار يمكن كتابته قاعدةً أو سياسةً قصيرة", "القرارات تعتمد على الخبرة والتقدير الشخصي"],
          ["تكلفة التأخير", "الرد البطيء يخسّرك مالًا أو عملاء", "لن يلاحظ أحد إن انتظرت يومًا"],
          ["الوصول إلى البيانات", "المدخلات رقمية والأنظمة متاحة عبر API", "المعلومات في رؤوس الموظفين أو على الورق أو في أنظمة مغلقة"],
          ["الضرر إذا أخطأت", "الخطأ رخيص وسهل التصحيح", "الخطأ مكلف أو علني أو يصعب التراجع عنه"],
        ],
      },
      {
        t: "p",
        text: "اجمع الدرجات الست. وكقاعدة عامة: 24 من 30 فأكثر مرشح قوي للبداية، ومن 18 إلى 23 يصلح عادةً مع موظف يعتمد الخطوات المهمة، وما دون 18 يعني أن عليك إصلاح العملية أو البيانات قبل أتمتتها. هكذا قد تبدو درجات ثلاث عمليات شائعة:",
      },
      {
        t: "table",
        caption: "أمثلة للتقييم (الحجم، التكرار، القواعد، التأخير، البيانات، الضرر)",
        head: ["العملية", "الدرجات", "المجموع", "الحكم"],
        rows: [
          ["الرد على أسئلة العملاء المتكررة في واتساب: الأسعار وساعات العمل والموقع والحجز", "5، 5، 4، 5، 4، 4", "27", "مرشح قوي للبداية"],
          ["نقل بيانات الفواتير إلى النظام المحاسبي", "4، 4، 4، 2، 3، 3", "20", "تُؤتمت، مع موظف يراجع المجاميع"],
          ["اعتماد طلبات الاسترداد أو الائتمان", "2، 2، 1، 3، 3، 1", "12", "تبقى مع موظف، وتُؤتمت الأعمال الورقية حولها"],
        ],
      },

      { t: "h2", id: "map-the-process", text: "ارسم العملية كما تجري فعلًا اليوم" },
      {
        t: "p",
        text: "نادرًا ما تتطابق العملية المكتوبة في دليل الإجراءات مع العملية التي يمارسها فريقك فعلًا. فالعملية الحقيقية مليئة بالحلول الجانبية: جدول إضافي يحتفظ به أحدهم، ومجموعة واتساب تُعطى فيها الموافقات، وزميل وحيد يعرف أي العملاء لهم أسعار خاصة. أتمِت النسخة المكتوبة، وسيتعثر النظام عند أول حالة لم يخبره بها أحد.",
      },
      { t: "p", text: "ارسمها مع من يؤدون العمل بأنفسهم، واعتمد على حالات حقيقية من الشهر الماضي لا على الذاكرة:" },
      {
        t: "ol",
        items: [
          "اختر من 20 إلى 30 حالة حديثة، وتتبّع كل واحدة من لحظة بدايتها (رسالة أو نموذج أو بريد) حتى اكتمالها.",
          "دوّن كل خطوة: من ينفذها، وبأي أداة، وكم تستغرق.",
          "حدّد كل نقطة قرار والقاعدة التي تحكمها. وإن لم يستطع أحد أن يصوغ القاعدة، فهي قرار اجتهادي.",
          "اكتب الاستثناءات وعدد مرات حدوثها، فالاستثناءات هي التي تحدد كم من العملية يمكن أتمتته.",
          "سجّل كل موضع تُكتب فيه البيانات مرتين أو تُنسخ من نظام إلى آخر، فهذه عادةً أرخص المكاسب.",
        ],
      },
      {
        t: "p",
        text: "النتيجة صفحة واحدة: الخطوات، والمسؤولون عنها، والأدوات، والقواعد، والاستثناءات. وهي نفسها تصبح الموجز الذي يعمل عليه من سيبني النظام، وجوهر [تحديد نطاق مشروع الذكاء الاصطناعي](/ar/insights/how-to-scope-an-ai-project) كما ينبغي.",
      },

      { t: "h2", id: "measure-a-baseline", text: "قِس الوضع الحالي قبل أن تبني أي شيء" },
      {
        t: "p",
        text: "من دون قياس للوضع الحالي لن تعرف إن كانت الأتمتة قد نجحت، وسيتحول كل نقاش لاحق عنها إلى آراء. قِس لمدة أسبوعين إلى أربعة أسابيع قبل البناء، ومن أنظمتك مباشرة كلما أمكن بدل التقديرات.",
      },
      {
        t: "p",
        text: "أما الوقت الموفَّر كما يقدّره الموظفون أنفسهم فبديل ضعيف. في مسح أُجري في نوفمبر 2024 وحلّله [بنك الاحتياطي الفيدرالي في سانت لويس](https://www.stlouisfed.org/on-the-economy/2025/feb/impact-generative-ai-work-productivity)، قال العاملون الأمريكيون الذين استخدموا الذكاء الاصطناعي التوليدي إنه وفّر لهم 5.4% من ساعات عملهم في الأسبوع السابق، وهو ما يقدّر الباحثون أنه يعادل زيادة في الإنتاجية بنسبة 1.1% على مستوى القوى العاملة كلها. مكسب حقيقي، لكنه متواضع. وأرقامك المقاسة في شركتك ستخبرك أكثر بكثير من أي متوسط وطني.",
      },
      {
        t: "table",
        caption: "مؤشرات الوضع الحالي التي تسجّلها قبل الأتمتة",
        head: ["المؤشر", "طريقة قياسه", "لماذا يهم"],
        rows: [
          ["الحجم", "عدد الحالات يوميًا أو أسبوعيًا، حسب النوع", "يحدد سقف الوقت الذي يمكن توفيره"],
          ["وقت المعالجة", "دقائق عمل الموظف في كل حالة", "الوقت الذي يمكن أن تعيده الأتمتة إليك"],
          ["زمن الرد والإنجاز", "الوقت من بداية الحالة إلى أول رد، ثم إلى اكتمالها", "يكشف أين يكلّفك التأخير عملاء أو مالًا"],
          ["نسبة الأخطاء وإعادة العمل", "الحالات المصحّحة أو المعاد إدخالها أو المصعّدة ÷ كل الحالات", "هل تتحسن الجودة أم السرعة وحدها"],
          ["نسبة الاستثناءات", "الحالات التي تخرج عن المسار المعتاد ÷ كل الحالات", "كم من العمل سيبقى بحاجة إلى موظف"],
          ["حصة ما بعد الدوام", "الحالات الواردة خارج ساعات العمل ÷ كل الحالات", "العمل الذي ينتظر اليوم حتى الصباح"],
        ],
      },
      {
        t: "p",
        text: "اكتب هدفك قبل أن تبني: أول رد خلال خمس دقائق في أي ساعة مثلًا، أو إدخال الفاتورة في أقل من دقيقة دون أخطاء أكثر من اليوم. والهدف الواضح يخبرك أيضًا متى تتوقف عن إضافة الميزات.",
      },

      { t: "h2", id: "rules-or-ai", text: "قواعد ثابتة أم ذكاء اصطناعي: ما الذي يناسب كل خطوة؟" },
      {
        t: "p",
        text: "كثير مما يُباع على أنه أتمتة بالذكاء الاصطناعي هو أتمتة عادية: إذا حدث هذا، فافعل ذاك. والقواعد رخيصة التشغيل، ونتائجها متوقعة، ومراجعتها سهلة. أما الذكاء الاصطناعي فمكانه حيث تكون المدخلات غير منظمة: رسالة مكتوبة بحرية، أو رسالة صوتية، أو فاتورة ممسوحة ضوئيًا، أو سؤال بصياغة لم يتوقعها أحد.",
      },
      {
        t: "table",
        caption: "اختر الأداة خطوة بخطوة",
        head: ["", "الأتمتة بالقواعد", "الذكاء الاصطناعي (النماذج اللغوية)"],
        rows: [
          ["الأنسب لـ", "المدخلات المنظمة والقرارات المحددة", "المدخلات غير المنظمة: النصوص والصوت والمستندات والصور"],
          [
            "أمثلة",
            "إحالة الفواتير التي تتجاوز مبلغًا محددًا إلى المالية، وإرسال تذكير قبل الموعد بـ48 ساعة",
            "فهم طلب مكتوب بحرية، واستخراج الحقول من فاتورة ممسوحة، وصياغة رد من محتوى معتمد",
          ],
          ["السلوك", "المدخل نفسه يعطي النتيجة نفسها في كل مرة", "النتيجة قد تختلف، وقد تكون خاطئة بثقة تامة"],
          ["تكلفة التشغيل", "منخفضة جدًا لكل حالة", "تكلفة استخدام لكل حالة، إضافة إلى المراقبة"],
          ["الخطر الأساسي", "يتعطل أمام حالات لم تغطها القواعد", "إجابات مقنعة لكنها خاطئة"],
        ],
      },
      {
        t: "p",
        text: "ولهذا الخطر الأخير اسم رسمي. يسميه [ملف الذكاء الاصطناعي التوليدي](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf) الصادر عن المعهد الوطني الأمريكي للمعايير والتقنية (NIST) «التلفيق» (confabulation)، ويعرّفه بأنه «إنتاج محتوى خاطئ أو مغلوط يُقدَّم بثقة». لذلك ينبغي أن يجيب الذكاء الاصطناعي من معرفة معتمدة، وأن يتصرف عبر مجموعة صغيرة من الإجراءات المحددة، وأن يحوّل الحالة إلى موظف حين لا يكون متأكدًا.",
      },
      {
        t: "p",
        text: "وأداء الذكاء الاصطناعي متفاوت بطرق يصعب توقعها. في تجربة ميدانية شملت 758 مستشارًا في Boston Consulting Group، وجد [Dell'Acqua وزملاؤه](https://pubsonline.informs.org/doi/10.1287/orsc.2025.21838) أن المستشارين الذين استخدموه في 18 مهمة تقع ضمن قدراته أنجزوا مهام أكثر بنسبة 12.2%، وأسرع بنسبة 25.1%، وبجودة أعلى. أما في مهمة اختيرت لتقع خارج تلك القدرات مباشرة، فكان مستخدمو الذكاء الاصطناعي أقل وصولًا إلى الإجابة الصحيحة ممن عملوا بدونه. ويسمي الباحثون ذلك «الحدود التقنية المتعرجة». والدرس العملي: اختبر الذكاء الاصطناعي على حالاتك أنت، بما فيها الصعبة، قبل أن تثق به.",
      },
      {
        t: "p",
        text: "وفي التطبيق، تجمع أفضل الأنظمة بين الاثنين: الذكاء الاصطناعي يقرأ الرسالة ويفهم ما يريده العميل، والقواعد تحدد ما يحدث بعد ذلك وأي الأنظمة تُحدَّث. أما [وكيل الذكاء الاصطناعي](/ar/insights/ai-agents-for-business) فيذهب خطوة أبعد، إذ يختار بين عدة أدوات لإنجاز المهمة، ولذلك تصبح الحدود الواضحة أهم.",
      },

      { t: "h2", id: "human-in-the-loop", text: "أبقِ الإنسان في الحلقة، وصمّم التحويل إليه أولًا" },
      {
        t: "p",
        text: "الأتمتة تنقل الناس إلى عمل مختلف: الاستثناءات والموافقات والقرارات التي تحتاج إلى تقدير. وقد نبّهت إلى ذلك Lisanne Bainbridge عام 1983 في بحث عن التحكم في العمليات الصناعية:",
      },
      {
        t: "quote",
        text: "كلما تقدّم نظام التحكم، ازدادت أهمية ما يقدّمه المشغّل البشري.",
        cite: "Lisanne Bainbridge، «Ironies of Automation»، مجلة Automatica (1983). ترجمة عن الأصل الإنجليزي.",
      },
      { t: "p", text: "حدّد لكل خطوة في خريطتك أيّ الأنماط الثلاثة ينطبق عليها:" },
      {
        t: "ul",
        items: [
          "**الموظف يعتمد قبل أن ينفّذ النظام.** لكل ما هو مكلف أو صعب التراجع عنه: الاسترداد، وعروض الأسعار فوق حد معين، ورسالة إلى قائمة عملائك كلها.",
          "**النظام ينفّذ والموظف يراجع عينة.** للأعمال الروتينية التي يكون خطؤها رخيصًا، مثل تصنيف الاستفسارات أو تحديث حقل في نظام CRM.",
          "**النظام ينفّذ ويحوّل الاستثناءات.** للمحادثات كثيرة العدد، حيث معظم الحالات بسيطة وبعضها يحتاج إلى موظف بسرعة.",
        ],
      },
      {
        t: "p",
        text: "والأدلة من خدمة العملاء ترجّح أن يعمل الذكاء الاصطناعي إلى جانب الناس. في دراسة شملت 5,172 موظف دعم ونُشرت في [Quarterly Journal of Economics](https://doi.org/10.1093/qje/qjae044)، رفعت مساعدة الذكاء الاصطناعي عدد المشكلات المحلولة في الساعة بنسبة 15% في المتوسط. وتحسّن الموظفون الأقل خبرة في السرعة والجودة معًا، بينما حقق الأكثر خبرة مكاسب صغيرة في السرعة مع تراجع طفيف في الجودة.",
      },
      {
        t: "p",
        text: "والتحويل الجيد يحمل السياق كاملًا حتى لا يضطر العميل إلى تكرار كلامه: من هو، وماذا سأل، وما الذي فعله النظام، ولماذا توقف. وبعض المنصات تشترطه أصلًا: [سياسة واتساب لرسائل الأعمال](https://business.whatsapp.com/policy) تسمح بالردود الآلية، لكنها تشترط وجود مسارات تصعيد سريعة وواضحة ومباشرة، مثل التحويل إلى موظف.",
      },
      {
        t: "p",
        text: "والمسؤولية تبقى على الشركة. في قضية [Moffatt ضد Air Canada](https://decisions.civilresolutionbc.ca/crt/crtd/en/525448/1/document.do) عام 2024، حمّلت محكمة في مقاطعة بريتش كولومبيا الكندية شركة الطيران المسؤولية بعد أن أعطى روبوت المحادثة في موقعها عميلًا معلومات خاطئة عن أسعار تذاكر العزاء. وجاء في الحكم: «لا فرق إن كانت المعلومة قد جاءت من صفحة ثابتة أو من روبوت محادثة».",
      },

      { t: "h2", id: "connect-your-tools", text: "اربط الأتمتة بالأدوات التي تستخدمها أصلًا" },
      {
        t: "p",
        text: "الأتمتة التي تعيش في تطبيق جديد لا يفتحه أحد تصبح مكانًا إضافيًا عليك أن تتفقده. ابنِها داخل الأنظمة التي يعمل فيها فريقك أصلًا: نظام CRM، والتقويم، والجدول الذي يدير العمل فعلًا، والنظام المحاسبي، والبريد، وواتساب.",
      },
      {
        t: "ul",
        items: [
          "**حدّد مصدرًا معتمدًا واحدًا لكل نوع من البيانات.** المواعيد مكانها التقويم، والعملاء مكانهم نظام CRM. والأتمتة تقرأ منها وتكتب فيها، ولا تحتفظ بنسخة خاصة بها تتقادم مع الوقت.",
          "**تحقّق من إمكانية الوصول مبكرًا.** هل لكل أداة واجهة API، وهل يشملها اشتراكك؟ وهل تستطيع إنشاء حساب بالصلاحيات التي تحتاجها الأتمتة فقط؟ عند هذه النقطة تتعثر مشاريع كثيرة.",
          "**القراءة قبل الكتابة.** اجعل الأتمتة تقرأ البيانات وتقترح الإجراءات أولًا، ثم امنحها صلاحية الكتابة في الأنظمة الحية بعد أن تثبت اقتراحاتها.",
          "**افهم قواعد كل قناة.** في واتساب، تستطيع الشركة الرد بحرية بعد أن يراسلها العميل، لكنها خارج نافذة خدمة العملاء ومدتها 24 ساعة لا تستطيع أن ترسل إلا قوالب رسائل معتمدة مسبقًا، وفق [سياسة واتساب لرسائل الأعمال](https://business.whatsapp.com/policy). ولذلك تُصمَّم التذكيرات والمتابعات على هذا الأساس.",
          "**أبقِ الحسابات باسمك.** رقم واتساب، والتقويم، والاستضافة، والبيانات، كلها يجب أن تكون ملك شركتك، حتى يبقى النظام لك إن غيّرت المورّد.",
        ],
      },
      {
        t: "p",
        text: "وحين يكون ربط الأنظمة هو الجزء الأكبر من العمل، فتعامل معه على أنه [مشروع تكامل](/ar/solutions#integrations) قائم بذاته.",
      },

      { t: "h2", id: "first-project-step-by-step", text: "مشروع الأتمتة الأول، خطوة بخطوة" },
      { t: "p", text: "اجعل مشروعك الأول عملية واحدة من بدايتها إلى نهايتها، واعمل بهذا الترتيب:" },
      {
        t: "ol",
        items: [
          "**قيّم العمليات المرشحة** بالجدول أعلاه واختر الأعلى درجة، حتى لو بدت فكرة أخرى أكثر إثارة.",
          "**ارسمها** مع من يؤدونها، بحالات حقيقية واستثناءاتها.",
          "**قِس الوضع الحالي** لمدة أسبوعين إلى أربعة أسابيع، واكتب هدفك.",
          "**قرّر لكل خطوة: قواعد أم ذكاء اصطناعي**، وأيّ أنماط الإشراف البشري الثلاثة ينطبق عليها.",
          "**اكتب مسار التحويل إلى الموظف قبل المسار المعتاد**: متى يحدث، ومن يستلمه، وما السياق الذي ينتقل معه.",
          "**ابنِ أصغر نسخة مفيدة** على قناة واحدة أو لفريق واحد، مربوطة بالأنظمة الحقيقية.",
          "**شغّلها في وضع الظل أولًا**: النظام يصوغ، والموظف يعتمد، وأنت تقارن ما أنتجه النظام بما كان الفريق سيفعله.",
          "**قِس النتائج مقابل الوضع السابق**، ثم وسّع النطاق أو امنح النظام استقلالية أكبر خطوة بعد خطوة.",
        ],
      },
      {
        t: "p",
        text: "ننفذ هذا العمل على شكل مشاريع، من تقييم العمليات المرشحة حتى بناء النظام وتثبيته. اطّلع على طريقتنا في [أتمتة الأعمال](/ar/solutions#automation)، أو [صِف لنا العملية](/ar/contact) التي تبطئ فريقك.",
      },

      { t: "cta" },

      { t: "h2", id: "hidden-costs", text: "ما التكاليف التي يسهل أن تغيب عن الحساب؟" },
      {
        t: "p",
        text: "تكلفة البناء هي الظاهرة. أما تكاليف التشغيل فتأتي لاحقًا، وهي الأكثر غيابًا عن دراسات الجدوى. وقد نبّه مهندسون في Google إلى ذلك في أنظمة تعلّم الآلة عام 2015، إذ كتب [Sculley وزملاؤه](https://proceedings.neurips.cc/paper/2015/file/86df7dcfd896fcaf2674f757a2463eba-Paper.pdf) أن «تحمّل تكاليف صيانة مستمرة وضخمة أمر شائع في أنظمة تعلّم الآلة الفعلية».",
      },
      {
        t: "table",
        caption: "تكاليف تشغيل تُدرجها في الميزانية",
        head: ["التكلفة", "لماذا تظهر", "كيف تخطط لها"],
        rows: [
          ["الصيانة", "الأسعار والسياسات والموظفون والأدوات المرتبطة تتغير، والنظام يجب أن يواكبها", "اتفق على من يحدّث المعرفة والقواعد، وكل كم"],
          ["المراقبة", "مخرجات الذكاء الاصطناعي قد تنحرف حتى لو لم يتغير شيء في إعداداتك", "راجع عينة من الحالات كل أسبوع، واستمر في متابعة مؤشرات الوضع الحالي"],
          ["تغيّر النماذج", "المزودون يحدّثون النماذج ويوقفونها وفق جداولهم", "اجعل النموذج قابلًا للاستبدال، وأعد الاختبار على حالاتك قبل كل تبديل"],
          ["رسوم الاستخدام", "نماذج الذكاء الاصطناعي ومنصات المراسلة تُحاسَب عادةً حسب الاستخدام", "قدّرها من حجمك المقاس، لا من عرض تجريبي"],
          ["وقت الموظفين", "هناك من يراجع الاستثناءات ويعتمد الإجراءات ويستلم التحويلات", "احسب هذه الساعات في دراسة الجدوى"],
        ],
      },
      {
        t: "p",
        text: "والانحراف قابل للقياس. [قارن باحثون](https://hdsr.mitpress.mit.edu/pub/y95zitmz/release/2) من جامعتي Stanford وUC Berkeley بين إصدارين من GPT-4 في مارس ويونيو 2023، فوجدوا أن دقته في التمييز بين الأعداد الأولية وغير الأولية انخفضت من 84% إلى 51%. والنماذج تُوقف أيضًا بالكامل: تُظهر [صفحة النماذج المتوقفة لدى OpenAI](https://developers.openai.com/api/docs/deprecations) أن gpt-3.5-turbo-0613 أُوقف في 13 سبتمبر 2024، وأن gpt-4-32k أُوقف في 6 يونيو 2025، مع بديل موصى به لكل منهما. فالنظام المبني على نموذج معين يحتاج إلى طريق مُختبَر للانتقال إلى النموذج التالي.",
      },

      { t: "h2", id: "example-lina", text: "مثال: موظفة استقبال ذكية على واتساب لعيادات الأسنان" },
      {
        t: "p",
        text: "لينا، موظفة الاستقبال الذكية التي بنتها Flowramo لعيادات الأسنان، توضح كيف تجتمع هذه الاختيارات في نظام واحد. واتساب العيادة يحصل على درجة عالية في جدول التقييم: رسائل كثيرة، معظمها الأسئلة وطلبات الحجز نفسها، وتكلفة حقيقية حين ينتظر المريض حتى الصباح ليحصل على رد.",
      },
      {
        t: "p",
        text: "الذكاء الاصطناعي يتولى الجزء غير المنظم: فهم الرسائل المكتوبة والصوتية بالعربية (ومنها اللهجة الخليجية) والإنجليزية والتركية، والإجابة من المعرفة التي اعتمدتها العيادة فقط. والقواعد والتكاملات تتولى الباقي: الحجوزات وتغيير المواعيد تدخل مباشرة في تقويم العيادة، والتذكيرات تُرسل في وقتها. أما الحالات العاجلة والسريرية والحساسة فتُحوَّل إلى فريق العيادة مع السياق كاملًا، ولينا لا تشخّص. ويُثبَّت النظام على استضافة تختارها العيادة وتملكها، مربوطًا بحسابات العيادة نفسها.",
      },
      {
        t: "p",
        text: "يمكنك أن [ترى كيف تعمل لينا](/ar/products/lina). والطريقة نفسها تنطبق على أي شركة يمر عملها عبر محادثات ومستندات وتحويلات متكررة.",
      },
    ],
    faq: [
      {
        q: "ما العمليات التي يمكن أتمتتها بالذكاء الاصطناعي في الشركة؟",
        a: "أفضل المرشحات هي العمليات التي تتكرر كثيرًا، وتسير في مسار متشابه كل مرة، وفيها مدخلات غير منظمة مثل الرسائل والبريد والرسائل الصوتية والمستندات. ومن أمثلتها: الرد على أسئلة العملاء المتكررة، وحجز المواعيد وتغييرها، وتوجيه العملاء المحتملين، واستخراج البيانات من الفواتير والنماذج، وإرسال التذكيرات والمتابعات. أما القرارات التي تحتاج إلى تقدير، مثل الاسترداد أو الأسئلة الطبية، فتبقى مع موظف أو تحتاج إلى موافقته.",
      },
      {
        q: "كيف أعرف أي عملية أؤتمتها أولًا؟",
        a: "امنح كل عملية مرشحة درجة من 1 إلى 5 على ستة معايير: الحجم، والتكرار، ووضوح القواعد، وتكلفة التأخير، وسهولة الوصول إلى البيانات، والضرر إذا أخطأت (بالعكس، فالعملية الخطرة تأخذ درجة منخفضة). ثم ابدأ بالأعلى مجموعًا. والعملية التي تحصل على درجة عالية في الحجم وتكلفة التأخير ومنخفضة في الضرر، كالرد على أسئلة العملاء المتكررة، تكون غالبًا أفضل مشروع أول.",
      },
      {
        q: "ما الفرق بين الأتمتة العادية والأتمتة بالذكاء الاصطناعي؟",
        a: "الأتمتة بالقواعد تتبع تعليمات ثابتة: إذا حدث هذا، فافعل ذاك. وهي رخيصة ونتائجها متوقعة وتناسب المدخلات المنظمة. أما الأتمتة بالذكاء الاصطناعي فتستخدم النماذج اللغوية للتعامل مع المدخلات غير المنظمة، مثل فهم رسالة مكتوبة بحرية أو قراءة مستند ممسوح، لكن نتائجها قد تختلف وقد تكون خاطئة بثقة. ومعظم الأنظمة الموثوقة تستخدم الذكاء الاصطناعي لفهم المدخلات، والقواعد لتحديد ما يحدث بعدها.",
      },
      {
        q: "كم تكلّف أتمتة عملية في الشركة بالذكاء الاصطناعي؟",
        a: "يعتمد ذلك على عدد الأنظمة المرتبطة، وكثرة الاستثناءات في العملية، وكم منها يحتاج إلى ذكاء اصطناعي لا إلى قواعد. خصّص ميزانية للبناء ولتكاليف التشغيل: رسوم استخدام النماذج والمراسلة، والصيانة مع تغيّر الأسعار والسياسات، والمراقبة الأسبوعية، وإعادة الاختبار عند تغيّر النماذج، ووقت الموظفين في الموافقات والتحويلات. ثم قارن المجموع بتكلفة العملية اليوم كما قستها.",
      },
      {
        q: "هل ستحل أتمتة الذكاء الاصطناعي محل موظفيّ؟",
        a: "أقوى الأدلة حتى الآن تأتي من استخدام الذكاء الاصطناعي لمساعدة الموظفين. ففي دراسة شملت 5,172 موظف دعم، رفعت مساعدة الذكاء الاصطناعي عدد المشكلات المحلولة في الساعة بنسبة 15% في المتوسط، وكانت أكبر المكاسب للموظفين الأقل خبرة. وفي الواقع، تتولى الأتمتة الخطوات المتكررة، وينتقل الموظفون إلى الاستثناءات والموافقات والمحادثات التي تحتاج إلى تقدير.",
      },
      {
        q: "كيف أمنع نظام الذكاء الاصطناعي من إعطاء العملاء إجابات خاطئة؟",
        a: "اقصره على المعرفة التي اعتمدتها، وامنحه مجموعة صغيرة من الإجراءات المحددة، واجعله يحوّل الحالة إلى موظف حين لا يكون متأكدًا أو حين تكون الحالة حساسة. وراجع عينة من المحادثات كل أسبوع. فالشركة تبقى مسؤولة عما يقوله نظامها: في قضية Moffatt ضد Air Canada عام 2024، حمّلت محكمة كندية شركة الطيران المسؤولية عن معلومات خاطئة قدّمها روبوت المحادثة في موقعها لأحد العملاء.",
      },
      {
        q: "هل أحتاج إلى تغيير أدواتي الحالية لأستخدم أتمتة الذكاء الاصطناعي؟",
        a: "غالبًا لا. فمعظم الأتمتة ترتبط بالأدوات التي تستخدمها أصلًا، مثل نظام CRM والتقويم والجداول والنظام المحاسبي والبريد وواتساب، عبر واجهات API الخاصة بها. تحقّق مبكرًا من أن كل أداة تتيح الوصول عبر API في اشتراكك، واعتمد مصدرًا واحدًا لكل نوع من البيانات، وأبقِ الحسابات باسم شركتك.",
      },
    ],
    sources: [
      {
        label: "Eurostat — 20% of EU enterprises use AI technologies (2025)",
        url: "https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2",
      },
      {
        label: "Harvard Business Review — The short life of online sales leads (Oldroyd, McElheran and Elkington, 2011)",
        url: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
      },
      {
        label: "Federal Reserve Bank of St. Louis — The impact of generative AI on work productivity (Bick, Blandin and Deming, 2025)",
        url: "https://www.stlouisfed.org/on-the-economy/2025/feb/impact-generative-ai-work-productivity",
      },
      {
        label: "NIST — AI 600-1, Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (2024)",
        url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf",
      },
      {
        label:
          "Organization Science — Navigating the jagged technological frontier (Dell'Acqua et al.; first released as HBS Working Paper 24-013, 2023)",
        url: "https://pubsonline.informs.org/doi/10.1287/orsc.2025.21838",
      },
      {
        label: "Quarterly Journal of Economics — Generative AI at work (Brynjolfsson, Li and Raymond, 2025)",
        url: "https://doi.org/10.1093/qje/qjae044",
      },
      {
        label: "Automatica — Ironies of automation (Bainbridge, 1983)",
        url: "https://doi.org/10.1016/0005-1098%2883%2990046-8",
      },
      {
        label: "Civil Resolution Tribunal of British Columbia — Moffatt v. Air Canada, 2024 BCCRT 149 (2024)",
        url: "https://decisions.civilresolutionbc.ca/crt/crtd/en/525448/1/document.do",
      },
      { label: "WhatsApp — WhatsApp Business Messaging Policy (2026)", url: "https://business.whatsapp.com/policy" },
      {
        label: "Harvard Data Science Review — How is ChatGPT's behavior changing over time? (Chen, Zaharia and Zou, 2024)",
        url: "https://hdsr.mitpress.mit.edu/pub/y95zitmz/release/2",
      },
      { label: "OpenAI — API deprecations (2026)", url: "https://developers.openai.com/api/docs/deprecations" },
      {
        label: "NeurIPS — Hidden technical debt in machine learning systems (Sculley et al., 2015)",
        url: "https://proceedings.neurips.cc/paper/2015/file/86df7dcfd896fcaf2674f757a2463eba-Paper.pdf",
      },
    ],
    keywords: [
      "أتمتة العمليات بالذكاء الاصطناعي",
      "كيف تؤتمت عمليات شركتك",
      "أتمتة الأعمال للشركات الصغيرة",
      "ما العمليات التي يمكن أتمتتها",
      "الفرق بين الأتمتة والذكاء الاصطناعي",
      "تكلفة أتمتة الأعمال",
      "أتمتة واتساب للأعمال",
      "الذكاء الاصطناعي في الشركات",
    ],
    minutes: 13,
  },
};

export default article;
