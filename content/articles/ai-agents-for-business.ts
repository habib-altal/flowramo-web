import type { Article } from "./types";

const AI_INDEX = "https://hai-production.s3.amazonaws.com/files/hai_ai_index_report_2025.pdf";
const ANTHROPIC = "https://www.anthropic.com/engineering/building-effective-agents";
const AGENT_COMPANY = "https://arxiv.org/abs/2412.14161";
const GEN_AI_AT_WORK = "https://arxiv.org/abs/2304.11771";
const LEGAL_HALLUCINATION = "https://arxiv.org/abs/2405.20362";
const INDIRECT_INJECTION = "https://arxiv.org/abs/2302.12173";
const AGENTDOJO = "https://arxiv.org/abs/2406.13352";
const OWASP_LLM01 = "https://genai.owasp.org/llmrisk/llm01-prompt-injection/";
const OWASP_LLM06 = "https://genai.owasp.org/llmrisk/llm062025-excessive-agency/";
const OWASP_LLM09 = "https://genai.owasp.org/llmrisk/llm092025-misinformation/";

const sources = [
  { label: "Stanford HAI — The AI Index 2025 Annual Report (2025)", url: AI_INDEX },
  { label: "Anthropic — Building effective agents (2024)", url: ANTHROPIC },
  {
    label:
      "Xu et al., Carnegie Mellon University — TheAgentCompany: benchmarking LLM agents on consequential real world tasks (2025)",
    url: AGENT_COMPANY,
  },
  {
    label:
      "Brynjolfsson, Li and Raymond — Generative AI at Work (arXiv v2, 2024; published in the Quarterly Journal of Economics, 2025)",
    url: GEN_AI_AT_WORK,
  },
  {
    label: "Magesh et al., Stanford — Hallucination-free? Assessing the reliability of leading AI legal research tools (2024)",
    url: LEGAL_HALLUCINATION,
  },
  {
    label:
      "Greshake et al. — Not what you've signed up for: compromising real-world LLM-integrated applications with indirect prompt injection (2023)",
    url: INDIRECT_INJECTION,
  },
  {
    label: "Debenedetti et al., ETH Zurich — AgentDojo: prompt injection attacks and defenses for LLM agents, NeurIPS (2024)",
    url: AGENTDOJO,
  },
  { label: "OWASP — Top 10 for LLM Applications: LLM01:2025 Prompt Injection", url: OWASP_LLM01 },
  { label: "OWASP — Top 10 for LLM Applications: LLM06:2025 Excessive Agency", url: OWASP_LLM06 },
  { label: "OWASP — Top 10 for LLM Applications: LLM09:2025 Misinformation", url: OWASP_LLM09 },
];

const article: Article = {
  slug: "ai-agents-for-business",
  published: "2026-10-14",
  updated: "2026-10-14",
  related: ["ai-automation-for-business-processes", "how-to-scope-an-ai-project"],
  topic: "studio",

  en: {
    title: "AI agents for business: what they can do, where they fail, and how to start",
    seoTitle: "AI Agents for Business: Uses, Risks and How to Start",
    description:
      "What AI agents for business really do, the four ways they fail and the guardrail for each, and how to choose, measure, build or buy your first one.",
    answer:
      "An AI agent is software, built on a large language model, that decides its own steps toward a goal and acts through tools such as your calendar, CRM or inbox. Agents work best on narrow, high-volume jobs: answering and qualifying enquiries, booking, routing and handling documents. Start with one job, tight permissions, a human hand-off and weekly measurement.",
    takeaways: [
      "A chatbot answers, a workflow follows steps you fixed in advance, and an agent chooses its own next step and acts through tools. Many business problems are better served by a workflow with one AI step than by a full agent.",
      "Agents do best on short, bounded, high-volume jobs. In a simulated software company the best agent finished 30.3% of realistic tasks on its own, and admin and finance tasks scored lowest.",
      "Grounding answers in your own documents reduces hallucination without removing it: legal research tools built that way still hallucinated 17–33% of the time in a Stanford study.",
      "Prompt injection has no known complete fix, so limit the damage: give the agent only the tools and permissions its job needs, and require human approval for anything costly or irreversible.",
      "Choose a first job with high volume and a low cost of error, keep a person in the loop at first, and track resolution, hand-offs, errors and response time every week.",
      "Buy when the job is the same in every company. Build when the process, the integrations or control of the data is what sets you apart.",
    ],
    blocks: [
      {
        t: "p",
        text: "A message arrives at 23:40. A prospect wants a price, two possible dates and to know whether you deliver to Dammam. Nobody replies until 9:30 the next morning, and by then they have asked two of your competitors. That gap is what AI agents are sold to close.",
      },
      {
        t: "p",
        text: "Most companies already use AI in some form. In the [Stanford AI Index 2025](" +
          AI_INDEX +
          "), 78% of organisations surveyed reported using AI in 2024, up from 55% the year before. Agents are the next step, and the word now covers everything from a FAQ widget to software that runs half a department. This guide gives a plain definition, the jobs agents do well, the four ways they fail in a business and the guardrail for each, how to choose and measure a first use case, when to build or buy, and how we applied all of it in Lina, the WhatsApp receptionist we built for dental clinics.",
      },

      { t: "h2", id: "what-is-an-ai-agent", text: "What is an AI agent, in plain terms?" },
      {
        t: "p",
        text: "An AI agent is software built around a large language model that works toward a goal in a loop. It reads the situation, decides the next step and uses a tool: it checks a calendar, looks up an order or updates a CRM record. Then it looks at the result and decides again, until the job is done or it hands over to a person. The tools are what turn a model that can advise you into a system that can act for you.",
      },
      {
        t: "p",
        text: "[Anthropic's engineering guide to agents](" +
          ANTHROPIC +
          ") draws the line most practitioners now use. Workflows are “systems where LLMs and tools are orchestrated through predefined code paths”. Agents are “systems where LLMs dynamically direct their own processes and tool usage”. In a workflow you decide the steps in advance. In an agent, the model decides them as it goes.",
      },
      {
        t: "table",
        caption: "Chatbot, workflow or agent?",
        head: ["", "Chatbot", "Automated workflow", "AI agent"],
        rows: [
          [
            "Who decides the steps",
            "It answers one message at a time",
            "You, in advance",
            "The model, at run time, within limits you set",
          ],
          [
            "Can it act in your systems?",
            "Rarely; it mostly answers questions",
            "Yes, the same way every time",
            "Yes, choosing which tool to use and when",
          ],
          [
            "Best for",
            "Questions answered from a fixed script or knowledge base",
            "Predictable, rule-based processes",
            "Varied requests that need judgement and several steps",
          ],
          [
            "Main risk",
            "Wrong or unhelpful answers",
            "Breaks when an input doesn't fit the rules",
            "Wrong actions taken with confidence",
          ],
        ],
      },
      {
        t: "p",
        text: "Most useful systems mix the two. A fixed workflow can have one AI step in the middle, such as reading an email and pulling out the order details. An agent can be fenced inside a workflow that limits what it can touch. The same guide recommends the simplest solution that works, adding complexity only when it is needed, and notes that this sometimes means building no agent at all. If your process is predictable, start with [AI automation for business processes](/en/insights/ai-automation-for-business-processes).",
      },

      { t: "h2", id: "what-agents-do-well", text: "Which business jobs do AI agents do well?" },
      {
        t: "p",
        text: "Agents earn their keep on work that is frequent, written in language, governed by clear rules and recorded in a system you already use. The best first jobs share one more trait: a mistake is cheap to spot and easy to undo.",
      },
      {
        t: "ul",
        items: [
          "**Answering and qualifying enquiries.** Replying in seconds from your approved information, asking the questions a salesperson would ask (budget, timing, location) and logging the lead with a summary.",
          "**Booking and rescheduling.** Checking real availability, offering two or three slots, writing the booking into your calendar and sending the confirmation.",
          "**Routing and triage.** Reading an inbound email, ticket or message, deciding what it is and who should own it, and passing it on with a short summary.",
          "**Document handling.** Pulling fields from invoices, purchase orders or application forms, checking them against your rules and flagging the exceptions for a person.",
          "**Follow-ups.** Chasing an unanswered quote, sending reminders and checking in with customers who went quiet.",
          "**Internal knowledge.** Answering staff questions about policies, prices or procedures, with the source attached so they can check it.",
        ],
      },
      {
        t: "p",
        text: "The strongest field evidence so far is for AI that helps people do these jobs. In a study of [5,172 customer-support agents](" +
          GEN_AI_AT_WORK +
          "), access to an AI assistant that suggested replies raised the number of issues resolved per hour by 15% on average and by about 30% for less experienced and less skilled staff, with minimal gains for the most experienced. Customers were also less likely to ask to speak to a manager. The assistant suggested and people decided, which is often the safest way to start.",
      },
      {
        t: "p",
        text: "Full autonomy is harder. Researchers at Carnegie Mellon built [TheAgentCompany](" +
          AGENT_COMPANY +
          "), a simulated software company with realistic office tasks. The best agent they tested completed 30.3% of the tasks on its own. Administrative, finance and data-science tasks scored lowest, and the authors traced many failures to reading documents, communicating with colleagues and navigating complex software. Most people would call those tasks routine.",
      },
      {
        t: "p",
        text: "Length matters too. The [AI Index](" +
          AI_INDEX +
          ") reports that on RE-Bench, a 2024 set of open-ended machine-learning research tasks, top AI systems given a two-hour budget scored four times higher than human experts. Given 32 hours, the humans outscored them two to one. Give an agent short, well-defined tasks and keep the long, open-ended ones with your team.",
      },

      {
        t: "h2",
        id: "where-agents-fail",
        text: "What are the four ways AI agents fail, and how do you guard against each?",
      },
      {
        t: "p",
        text: "AI agents fail in a business in four recurring ways: hallucination, prompt injection, unclear ownership and no human hand-off. Each one has a guardrail you can design in from the first day.",
      },
      { t: "h3", text: "1. Hallucination: confident answers that are wrong" },
      {
        t: "p",
        text: "Language models produce fluent text whether or not it is true. The OWASP Top 10 for LLM applications lists [misinformation](" +
          OWASP_LLM09 +
          ") as a core risk and cites Air Canada, whose chatbot gave travellers wrong information; the airline was successfully sued. Connecting the model to your own documents, known as retrieval-augmented generation (RAG), helps without curing the problem. A preregistered [Stanford study](" +
          LEGAL_HALLUCINATION +
          ") found that AI legal research tools built this way hallucinated less than general-purpose GPT-4, yet still hallucinated between 17% and 33% of the time.",
      },
      {
        t: "p",
        text: "**Guardrail:** let the agent answer only from a written, approved knowledge base that a named person keeps current. When the knowledge base does not cover a question, the agent says so and hands over. Keep prices, policies and promises in that source so the agent quotes them instead of guessing. Review a sample of conversations every week, and when you find an error, fix the source.",
      },
      { t: "h3", text: "2. Prompt injection: instructions hidden in the input" },
      {
        t: "p",
        text: "Prompt injection is text the agent reads (a message, email or file) that contains instructions it then follows. Agents read a lot of outside text, from customer messages and emails to web pages and PDFs, and any of it can carry such instructions. OWASP puts [prompt injection](" +
          OWASP_LLM01 +
          ") first in its 2025 list and separates direct attacks, typed by a user, from indirect ones hidden in content the model processes. A 2023 paper that demonstrated [indirect prompt injection](" +
          INDIRECT_INJECTION +
          ") against real systems, including Bing's GPT-4-powered chat, named the root cause: LLM-integrated applications “blur the line between data and instructions”. OWASP adds that it is unclear whether any fool-proof prevention exists.",
      },
      {
        t: "p",
        text: "**Guardrail:** limit what a successful injection could do. Give the agent only the tools its job needs, with the narrowest permissions, and require a person's approval for anything costly or hard to reverse, such as refunds, payments, deletions or messages to many customers. Treat everything that arrives from outside as data to be checked. The approach holds up in testing. In [AgentDojo](" +
          AGENTDOJO +
          "), an ETH Zurich benchmark presented at NeurIPS 2024, letting GPT-4o choose only the tools a task needed, before it read any untrusted data, cut successful attacks from about half of the attacked tasks to under 10%. The authors also show its limit: it fails when the tools a task needs are enough to carry out the attack.",
      },
      { t: "h3", text: "3. Unclear ownership: nobody decided what the agent may do" },
      {
        t: "p",
        text: "Many agent failures start as management gaps. Nobody wrote down what the agent may do on its own, which systems it can touch or who answers for its mistakes. OWASP calls the technical side [excessive agency](" +
          OWASP_LLM06 +
          ") and traces it to three roots: excessive functionality, excessive permissions and excessive autonomy. Its example is an agent that only needs to read documents but is connected through a plug-in that can also modify and delete them. Agents also improvise. In TheAgentCompany, an agent that could not find the colleague it was supposed to ask renamed another user to that colleague's name as a shortcut.",
      },
      {
        t: "p",
        text: "**Guardrail:** give every agent a named owner and a one-page scope: what it does alone, what it does only with approval, and what it never does. Give it its own credentials with the minimum access, log every action it takes, and have the owner review the log and a sample of conversations each week. When the agent's job changes, update the scope first.",
      },
      { t: "h3", text: "4. No human hand-off: the customer gets stuck" },
      {
        t: "p",
        text: "An agent that cannot pass a conversation to a person leaves the hardest cases stuck in a loop: the complaint, the urgent problem, the request it doesn't understand. Anthropic's guide builds the exit into the design, with agents that “pause for human feedback at checkpoints or when encountering blockers”. OWASP's guidance on prompt injection also calls for human approval of high-risk actions.",
      },
      {
        t: "p",
        text: "**Guardrail:** write the hand-off triggers before launch. Typical triggers are a customer asking for a person, a complaint, anything urgent, sensitive or outside the knowledge base, and any decision with money or safety attached. Pass on the full conversation and a summary so the customer never has to repeat themselves. Make sure a person picks the case up within a time you have set, and tell customers at the start that they are talking to an AI assistant.",
      },
      {
        t: "table",
        caption: "Four failure modes and their guardrails",
        head: ["Failure", "What it looks like", "Guardrail"],
        rows: [
          [
            "Hallucination",
            "A confident, wrong answer about a price, a policy or a date",
            "Answers only from an approved knowledge base, a hand-off when the answer isn't there, a weekly review",
          ],
          [
            "Prompt injection",
            "A message, email or document contains instructions the agent follows",
            "Minimum tools and permissions, human approval for costly or irreversible actions, outside content treated as data",
          ],
          [
            "Unclear ownership",
            "The agent takes actions nobody approved, or nobody fixes its errors",
            "A named owner, a written scope, its own limited credentials, an action log",
          ],
          [
            "No human hand-off",
            "A customer with an urgent or unusual problem goes round in circles",
            "Written hand-off triggers, full context passed on, a set response time, AI disclosed up front",
          ],
        ],
      },

      { t: "h2", id: "choose-first-use-case", text: "How do you choose your first AI agent use case?" },
      {
        t: "p",
        text: "The first project decides whether your team trusts the next one. Pick a job where the agent can succeed visibly and fail cheaply.",
      },
      {
        t: "ol",
        items: [
          "**List the candidates.** Write down every repetitive job that is heavy on conversations or documents, with its weekly volume and the minutes each item takes. Volume times minutes is the time you could get back.",
          "**Score each one on four questions.** Are the rules written down, or only in someone's head? Does the information the agent needs exist in a system it can read? What does a mistake cost? Can a mistake be undone?",
          "**Pick high volume and a low cost of error.** Answering and qualifying enquiries, booking and routing usually score well. Approving payments, giving legal or medical advice, and anything that cannot be reversed make poor first jobs.",
          "**Write the agent's job description.** List the inputs, the actions it may take, the hand-off triggers and what “done” means for one item.",
          "**Build a test set from real history.** Collect past messages or documents, including the awkward ones, with the right answer for each. Every version of the agent must pass this set before it goes live.",
          "**Start with a person in the loop.** Let the agent draft and a person approve. Then let it act alone on the categories where its drafts were consistently right, and widen the scope one category at a time.",
        ],
      },
      {
        t: "p",
        text: "For the full process, from problem statement to budget, see our guide on [how to scope an AI project](/en/insights/how-to-scope-an-ai-project).",
      },

      { t: "h2", id: "measure-an-ai-agent", text: "How to measure whether an AI agent is working" },
      {
        t: "p",
        text: "Measure the job as it runs today for two to four weeks before launch, so you have a baseline. Then review a short scorecard every week:",
      },
      {
        t: "table",
        caption: "Weekly AI agent scorecard",
        head: ["Metric", "How to calculate it", "What it tells you"],
        rows: [
          [
            "Resolution rate",
            "Items completed end to end without a person ÷ all items",
            "How much work the agent actually takes off your team",
          ],
          [
            "Hand-off rate and reasons",
            "Items passed to a person ÷ all items, grouped by trigger",
            "Where the knowledge base or the scope needs work",
          ],
          [
            "Error rate",
            "Wrong answers or actions found in a weekly sample ÷ items reviewed",
            "Whether the agent can be trusted with more",
          ],
          ["Response time", "Median time from message to first useful reply", "The speed your customers actually feel"],
          [
            "Business outcome",
            "Bookings, qualified leads or documents processed per week",
            "Whether the work turns into revenue or saved time",
          ],
          [
            "Cost per resolved item",
            "Running costs plus review time ÷ resolved items",
            "Whether it beats the way you do the job today",
          ],
        ],
      },
      {
        t: "p",
        text: "Re-run your test set after every change to the prompt, the model or the knowledge base. A change that fixes one answer can quietly break another, and the test set shows you before customers do. Anthropic's guide gives the same order of work: start with simple prompts, improve them through thorough evaluation, and add multi-step agents only when simpler solutions fall short.",
      },

      { t: "cta" },

      { t: "h2", id: "build-or-buy", text: "Should you build an AI agent or buy one?" },
      {
        t: "p",
        text: "Buy when the job is the same in every company, such as meeting notes, drafting emails or a standard help desk. Mature products exist for these, and how you take meeting notes is unlikely to be why customers choose you.",
      },
      { t: "p", text: "Build, or commission a build, when at least one of these is true:" },
      {
        t: "ul",
        items: [
          "The process itself is part of how you win customers, and a generic tool would flatten it.",
          "The agent must work across several of your systems (a WhatsApp number, a calendar, a CRM, an ERP) that no single product connects well.",
          "Language and channel matter: your customers write in Gulf Arabic or Turkish, send voice notes and expect answers on WhatsApp.",
          "You need control over where data is stored, which model runs the agent and what happens to the conversations if you change supplier.",
        ],
      },
      { t: "p", text: "Either way, ask these questions before you sign:" },
      {
        t: "ul",
        items: [
          "Where are conversations and customer data stored, and who can read them?",
          "Can we export everything, and what happens if we stop paying?",
          "Which model runs it, and can it be changed without a rebuild?",
          "How does the hand-off to a person work, and how are errors reviewed and fixed?",
          "Who owns the knowledge base, the prompts and the integrations?",
        ],
      },
      {
        t: "p",
        text: "Flowramo builds the second kind. We sell systems as projects and install them on hosting you choose and own, connected to your own accounts. See [what we build](/en/solutions) or [tell us about the job you have in mind](/en/contact).",
      },

      { t: "h2", id: "example-lina", text: "An example: the guardrails inside Lina" },
      {
        t: "p",
        text: "Lina is the AI receptionist we built for dental clinics. She runs on the clinic's WhatsApp, answers patients day and night in their own language, from Gulf Arabic to English and Turkish, books and reschedules appointments in the clinic's calendar, and sends reminders and aftercare messages. Under the hood she is several cooperating agents with retrieval over the clinic's knowledge. Each failure mode above shaped a design decision:",
      },
      {
        t: "ul",
        items: [
          "**Hallucination.** Lina answers only from knowledge the clinic has approved, and she does not diagnose.",
          "**Ownership and scope.** Her job is defined: conversations, bookings, reminders and follow-ups. She is installed on hosting the clinic chooses and owns and connected to the clinic's own accounts, so patient data stays on the clinic's infrastructure.",
          "**Hand-off.** Urgent, clinical and sensitive cases go to the clinic team with the full conversation, so nobody has to ask the patient to start again.",
          "**Real-world input.** Patients send voice notes and photos as well as text, so Lina transcribes voice notes and can understand images before she decides what to do.",
        ],
      },
      {
        t: "p",
        text: "We will publish results once a clinic agrees to share them. Until then, you can read how [an AI receptionist works in a dental clinic](/en/insights/ai-receptionist-for-dental-clinics) or [see Lina in detail](/en/products/lina).",
      },
    ],
    faq: [
      {
        q: "What is the difference between an AI agent and a chatbot?",
        a: "A chatbot answers messages. An AI agent works toward a goal: it decides its next step, uses tools such as a calendar, CRM or inbox, checks the result and carries on until the job is done or it hands over to a person. A chatbot can tell a customer your opening hours, while an agent can book the appointment and send the confirmation.",
      },
      {
        q: "What are good examples of AI agents in business?",
        a: "The jobs that suit agents are frequent, language-heavy and rule-bound: answering and qualifying enquiries, booking and rescheduling, routing emails and tickets to the right person, extracting data from invoices or forms, chasing follow-ups, and answering staff questions from internal documents. Start with one where a mistake is cheap to spot and easy to undo.",
      },
      {
        q: "Are AI agents safe to use with customer data?",
        a: "They can be, if safety is designed in. Give the agent only the tools and permissions its job needs, require human approval for costly or irreversible actions, log everything it does, and know where conversations are stored and who can read them. OWASP's Top 10 for LLM applications lists prompt injection and excessive agency among the main risks, so ask any supplier how they handle both.",
      },
      {
        q: "How do I stop an AI agent from making things up?",
        a: "You can reduce hallucination, but you can't remove it. Let the agent answer only from an approved knowledge base, make it say so and hand over when the answer isn't there, keep prices and policies in that source, and review a sample of conversations every week. In a 2024 Stanford study, even legal research tools that retrieve from source documents hallucinated 17–33% of the time, so checks stay necessary.",
      },
      {
        q: "Will AI agents replace my staff?",
        a: "In most businesses, agents take over the repetitive parts of jobs while people keep the exceptions and the relationships. The best evidence so far is for AI that helps people: in a study of 5,172 customer-support agents, an AI assistant raised issues resolved per hour by 15% on average. In a simulated company, the best autonomous agent completed 30.3% of realistic tasks on its own.",
      },
      {
        q: "How do I measure the ROI of an AI agent?",
        a: "Measure the current process for a few weeks first. Then track, every week, the share of items the agent completes without help, the hand-off rate and its reasons, errors found in a reviewed sample, response time, the business outcome (bookings, qualified leads, documents processed) and the cost per resolved item, including the time people spend reviewing. Compare each number with your baseline.",
      },
      {
        q: "Should I build or buy an AI agent?",
        a: "Buy when the job is the same in every company and a mature product connects to your tools. Build, or commission a build, when the process is part of your advantage, when the agent must work across several of your systems or channels such as WhatsApp, or when you need control over where data lives and which model runs it. In both cases, confirm you can export your data and your knowledge base.",
      },
    ],
    sources,
    keywords: [
      "ai agents for business",
      "what is an ai agent",
      "ai agent vs chatbot",
      "ai agent use cases",
      "ai agent risks",
      "ai agent guardrails",
      "prompt injection",
      "ai hallucination in business",
      "build or buy ai agent",
    ],
    minutes: 11,
  },

  ar: {
    title: "وكلاء الذكاء الاصطناعي للشركات: ماذا يفعلون فعلًا، وأين يخطئون، وكيف تبدأ",
    seoTitle: "وكلاء الذكاء الاصطناعي للشركات: الاستخدامات والمخاطر",
    description:
      "ماذا يفعل وكلاء الذكاء الاصطناعي في الشركات فعلًا، وأين يخطئون، وما الضابط الذي يعالج كل خطأ، وكيف تختار أول مهمة لهم وتقيس نتيجتها، وهل تبني أم تشتري.",
    answer:
      "وكيل الذكاء الاصطناعي برنامج مبني على نموذج لغوي كبير، يقرر خطواته بنفسه نحو هدف محدد، وينفّذها عبر أدوات مثل التقويم ونظام إدارة العملاء (CRM) والبريد. وأفضل ما يتقنه المهام المتكررة كثيرة العدد: الرد على الاستفسارات وتأهيلها، والحجز، وتوجيه الطلبات، ومعالجة المستندات. ابدأ بمهمة واحدة، وصلاحيات محدودة، وتحويل واضح إلى موظف، وقياس أسبوعي.",
    takeaways: [
      "روبوت المحادثة يجيب، وسير العمل المؤتمت ينفّذ خطوات حددتها مسبقًا، أما الوكيل فيختار خطوته التالية بنفسه وينفّذها عبر الأدوات. وكثير من مشكلات الشركات يحلّها سير عمل فيه خطوة ذكاء اصطناعي واحدة أفضل مما يحلّها وكيل كامل.",
      "ينجح الوكلاء في المهام القصيرة المحددة كثيرة التكرار. في شركة برمجيات محاكاة، أنجز أفضل وكيل 30.3% من المهام الواقعية وحده، وكانت المهام الإدارية والمالية الأضعف نتيجة.",
      "ربط الإجابات بمستنداتك يقلل الهلوسة ولا يلغيها: أدوات بحث قانوني مبنية بهذه الطريقة هلوست في 17% إلى 33% من الحالات في دراسة من جامعة ستانفورد.",
      "لا يوجد حتى الآن علاج كامل معروف لحقن الأوامر، فقلّل الضرر الممكن: أعطِ الوكيل الأدوات والصلاحيات التي تحتاجها مهمته فقط، واشترط موافقة موظف على أي إجراء مكلف أو لا يمكن التراجع عنه.",
      "اختر أول مهمة كثيرة العدد وقليلة كلفة الخطأ، وأبقِ موظفًا في الحلقة في البداية، وتابع أسبوعيًا نسبة الإنجاز والتحويل والأخطاء وسرعة الرد.",
      "اشترِ حين تكون المهمة واحدة في كل الشركات، وابنِ حين تكون طريقة العمل أو الأنظمة المترابطة أو التحكم في البيانات هي ما يميّزك.",
    ],
    blocks: [
      {
        t: "p",
        text: "تصل رسالة في الحادية عشرة وأربعين دقيقة ليلًا. عميل محتمل يسأل عن السعر، ويقترح موعدين، ويريد أن يعرف إن كنتم توصلون إلى الدمام. لا يرد أحد حتى التاسعة والنصف صباحًا، وفي تلك الساعات يكون قد راسل اثنين من منافسيك. وهذه بالضبط الفجوة التي يَعِد بائعو وكلاء الذكاء الاصطناعي بسدّها.",
      },
      {
        t: "p",
        text: "ومعظم الشركات تستخدم الذكاء الاصطناعي اليوم بشكل أو بآخر. في [تقرير مؤشر الذكاء الاصطناعي لعام 2025 من جامعة ستانفورد](" +
          AI_INDEX +
          ")، أفادت 78% من المؤسسات المشمولة بالاستطلاع بأنها استخدمت الذكاء الاصطناعي في 2024، مقارنة بـ55% في العام الذي قبله. والوكلاء هم الخطوة التالية، لكن الكلمة صارت تُطلق على كل شيء، من نافذة أسئلة شائعة بسيطة إلى برنامج يدير نصف قسم. في هذا الدليل تعريف واضح، والمهام التي يتقنها الوكلاء، والطرق الأربع التي يخطئون بها داخل الشركات مع الضابط المناسب لكل منها، وكيف تختار أول مهمة وتقيسها، ومتى تبني ومتى تشتري، وكيف طبّقنا ذلك كله في لينا، موظفة الاستقبال التي بنيناها لعيادات الأسنان على واتساب.",
      },

      { t: "h2", id: "what-is-an-ai-agent", text: "ما وكيل الذكاء الاصطناعي ببساطة؟" },
      {
        t: "p",
        text: "وكيل الذكاء الاصطناعي (AI Agent) برنامج مبني حول نموذج لغوي كبير، يعمل نحو هدف في حلقة متكررة. يقرأ الموقف، ويقرر الخطوة التالية، ويستخدم أداة: يتحقق من التقويم، أو يبحث عن طلب، أو يحدّث سجل عميل في نظام CRM. ثم ينظر في النتيجة ويقرر من جديد، حتى تنتهي المهمة أو يحوّلها إلى موظف. والأدوات هي ما ينقل النموذج من مستشار يكتب لك نصًا إلى نظام ينفّذ عنك.",
      },
      {
        t: "p",
        text: "ويرسم [دليل Anthropic الهندسي لبناء الوكلاء](" +
          ANTHROPIC +
          ") الحدّ الذي يعتمده معظم المختصين اليوم. سير العمل المؤتمت (Workflow) نظام تُنسَّق فيه النماذج اللغوية والأدوات عبر مسارات مكتوبة مسبقًا في الكود. أما الوكيل فنظام يوجّه فيه النموذج خطواته واستخدامه للأدوات بنفسه. في سير العمل أنت من يحدد الخطوات مسبقًا، وفي الوكيل يحددها النموذج أثناء العمل.",
      },
      {
        t: "table",
        caption: "روبوت محادثة، أم سير عمل مؤتمت، أم وكيل؟",
        head: ["", "روبوت المحادثة (Chatbot)", "سير العمل المؤتمت", "وكيل الذكاء الاصطناعي"],
        rows: [
          ["من يحدد الخطوات", "يرد على كل رسالة على حدة", "أنت، مسبقًا", "النموذج أثناء العمل، ضمن حدود تضعها أنت"],
          [
            "هل ينفّذ إجراءات في أنظمتك؟",
            "نادرًا، فهو يجيب عن الأسئلة غالبًا",
            "نعم، بالطريقة نفسها كل مرة",
            "نعم، ويختار الأداة المناسبة ووقت استخدامها",
          ],
          [
            "يناسب",
            "أسئلة تُجاب من نص ثابت أو قاعدة معرفة",
            "عمليات متوقعة تحكمها قواعد واضحة",
            "طلبات متنوعة تحتاج تقديرًا وعدة خطوات",
          ],
          ["الخطر الأكبر", "إجابة خاطئة أو غير مفيدة", "يتعطل حين يأتي مدخل لا يطابق القواعد", "إجراء خاطئ يُنفَّذ بثقة"],
        ],
      },
      {
        t: "p",
        text: "وأغلب الأنظمة المفيدة تجمع بين الاثنين. قد يكون عندك سير عمل ثابت في وسطه خطوة ذكاء اصطناعي واحدة، مثل قراءة بريد واستخراج تفاصيل الطلب منه. وقد يعمل الوكيل داخل سير عمل يحدد ما يستطيع الوصول إليه. ويوصي الدليل نفسه بأبسط حل يؤدي الغرض، وبإضافة التعقيد عند الحاجة فقط، وينبّه إلى أن هذا يعني أحيانًا ألا تبني وكيلًا أصلًا. فإن كانت عمليتك متوقعة، فابدأ من دليلنا عن [أتمتة العمليات في الشركات بالذكاء الاصطناعي](/ar/insights/ai-automation-for-business-processes).",
      },

      { t: "h2", id: "what-agents-do-well", text: "ما المهام التي يتقنها وكلاء الذكاء الاصطناعي في الشركات؟" },
      {
        t: "p",
        text: "يثبت الوكيل قيمته في العمل المتكرر، المكتوب بلغة الناس، الذي تحكمه قواعد واضحة ويُسجَّل في نظام تستخدمه أصلًا. وأفضل المهام للبداية تشترك في صفة إضافية: الخطأ فيها سهل الاكتشاف وسهل التراجع عنه.",
      },
      {
        t: "ul",
        items: [
          "**الرد على الاستفسارات وتأهيلها.** يرد خلال ثوانٍ من معلوماتك المعتمدة، ويسأل ما يسأله موظف المبيعات (الميزانية والتوقيت والموقع)، ثم يسجّل العميل المحتمل مع ملخص.",
          "**الحجز وتغيير المواعيد.** يتحقق من الأوقات المتاحة فعلًا، ويعرض موعدين أو ثلاثة، ويسجّل الحجز في تقويمك، ويرسل التأكيد.",
          "**التوجيه والفرز.** يقرأ البريد أو التذكرة أو الرسالة الواردة، ويحدد نوعها ومن المسؤول عنها، ثم يحوّلها إليه مع ملخص قصير.",
          "**معالجة المستندات.** يستخرج البيانات من الفواتير وأوامر الشراء ونماذج الطلبات، ويطابقها مع قواعدك، ويرفع الحالات الشاذة إلى موظف.",
          "**المتابعة.** يتابع عرض سعر لم يُرد عليه، ويرسل التذكيرات، ويطمئن على العملاء الذين انقطع تواصلهم.",
          "**المعرفة الداخلية.** يجيب الموظفين عن السياسات والأسعار والإجراءات، ويرفق المصدر ليتحققوا بأنفسهم.",
        ],
      },
      {
        t: "p",
        text: "وأقوى الأدلة الميدانية حتى الآن تخص الذكاء الاصطناعي الذي يساعد الموظفين في هذه المهام. في دراسة شملت [5,172 موظف دعم عملاء](" +
          GEN_AI_AT_WORK +
          ")، رفع مساعد ذكي يقترح الردود عدد المشكلات المحلولة في الساعة بنسبة 15% في المتوسط، وبنحو 30% لدى الموظفين الأقل خبرة ومهارة، بينما كان الأثر محدودًا جدًا لدى الأكثر خبرة. كما قلّ طلب العملاء التحدث إلى مدير. المساعد يقترح والموظف يقرر، وهذه غالبًا أكثر طرق البداية أمانًا.",
      },
      {
        t: "p",
        text: "أما الاستقلال الكامل فأصعب. بنى باحثون في جامعة كارنيغي ميلون [TheAgentCompany](" +
          AGENT_COMPANY +
          ")، وهي شركة برمجيات محاكاة فيها مهام مكتبية واقعية. أفضل وكيل اختبروه أنجز 30.3% من المهام وحده. وجاءت المهام الإدارية والمالية ومهام تحليل البيانات في أدنى النتائج، وأرجع الباحثون كثيرًا من الإخفاقات إلى فهم المستندات، والتواصل مع الزملاء، والتنقل في البرامج المعقدة. وهي مهام يراها معظم الناس روتينية.",
      },
      {
        t: "p",
        text: "وطول المهمة يصنع فرقًا أيضًا. يذكر [تقرير مؤشر الذكاء الاصطناعي](" +
          AI_INDEX +
          ") أن أفضل أنظمة الذكاء الاصطناعي، في اختبار RE-Bench الذي صدر عام 2024 ويضم مهام بحثية مفتوحة في تعلّم الآلة، سجّلت أربعة أضعاف نتيجة الخبراء البشر حين كانت المهلة ساعتين. وحين امتدت المهلة إلى 32 ساعة، تفوّق البشر بضعف نتيجتها. أعطِ الوكيل مهام قصيرة واضحة الحدود، واترك المهام الطويلة المفتوحة لفريقك.",
      },

      { t: "h2", id: "where-agents-fail", text: "ما الطرق الأربع التي يخطئ بها وكلاء الذكاء الاصطناعي، وما الضابط لكل منها؟" },
      {
        t: "p",
        text: "يخطئ وكلاء الذكاء الاصطناعي داخل الشركات بأربع طرق تتكرر: الهلوسة، وحقن الأوامر، والملكية غير الواضحة، وغياب التحويل إلى موظف. ولكل منها ضابط تستطيع تصميمه من اليوم الأول.",
      },
      { t: "h3", text: "1. الهلوسة: إجابة واثقة وخاطئة" },
      {
        t: "p",
        text: "النماذج اللغوية تكتب نصًا سلسًا سواء كان صحيحًا أم لا. وتضع قائمة OWASP لأكبر عشرة مخاطر في تطبيقات النماذج اللغوية [المعلومات المضللة](" +
          OWASP_LLM09 +
          ") ضمن المخاطر الأساسية، وتذكر مثال الخطوط الجوية الكندية، إذ قدّم روبوت المحادثة لديها معلومات خاطئة للمسافرين، فرُفعت على الشركة دعوى وخسرتها. وربط النموذج بمستنداتك، وهو ما يُعرف بالتوليد المعزّز بالاسترجاع (RAG)، يخفف المشكلة دون أن يحلها. فقد وجدت [دراسة مسجّلة مسبقًا من جامعة ستانفورد](" +
          LEGAL_HALLUCINATION +
          ") أن أدوات البحث القانوني المبنية بهذه الطريقة هلوست أقل من GPT-4 للاستخدام العام، لكنها ظلت تهلوس في 17% إلى 33% من الحالات.",
      },
      {
        t: "p",
        text: "**الضابط:** اجعل الوكيل يجيب من قاعدة معرفة مكتوبة ومعتمدة فقط، يحدّثها شخص محدد بالاسم. وحين لا تغطي القاعدة السؤال، يقول الوكيل ذلك صراحة ويحوّل المحادثة. وضع الأسعار والسياسات والالتزامات في هذا المصدر، حتى ينقلها الوكيل كما هي بدل أن يخمّن. وراجع عينة من المحادثات كل أسبوع، وإذا وجدت خطأ فأصلحه في المصدر نفسه.",
      },
      { t: "h3", text: "2. حقن الأوامر: تعليمات مخفية في المدخلات" },
      {
        t: "p",
        text: "حقن الأوامر (Prompt Injection) نص يقرؤه الوكيل، كرسالة أو بريد أو ملف، ويحمل تعليمات ينفّذها الوكيل بعد ذلك. والوكيل يقرأ نصوصًا كثيرة تأتي من الخارج، من رسائل العملاء والبريد إلى صفحات الويب وملفات PDF، وأي منها قد يحمل تعليمات من هذا النوع. وتضع OWASP [حقن الأوامر](" +
          OWASP_LLM01 +
          ") في المرتبة الأولى في قائمتها لعام 2025، وتفرّق بين الهجوم المباشر الذي يكتبه المستخدم، وغير المباشر المخفي في محتوى يعالجه النموذج. وورقة بحثية من عام 2023 أثبتت [حقن الأوامر غير المباشر](" +
          INDIRECT_INJECTION +
          ") على أنظمة حقيقية، منها محادثة Bing المبنية على GPT-4، وحددت أصل المشكلة: هذه التطبيقات تطمس الحد بين البيانات والتعليمات. وتضيف OWASP أنه ليس واضحًا إن كانت هناك وسيلة وقاية مضمونة تمامًا.",
      },
      {
        t: "p",
        text: "**الضابط:** قلّل ما يستطيع الهجوم الناجح فعله. أعطِ الوكيل الأدوات التي تحتاجها مهمته فقط، بأضيق صلاحيات ممكنة، واشترط موافقة موظف على كل إجراء مكلف أو صعب التراجع عنه، مثل الاسترداد والدفع والحذف والرسائل الجماعية. وتعامل مع كل ما يصل من الخارج على أنه بيانات تُفحص. وهذا النهج أثبت نفسه في الاختبارات: في [AgentDojo](" +
          AGENTDOJO +
          ")، وهو اختبار من المعهد الفدرالي السويسري للتكنولوجيا في زيورخ قُدّم في مؤتمر NeurIPS 2024، أدى السماح لـGPT-4o باختيار الأدوات التي تحتاجها المهمة فقط، قبل أن يقرأ أي بيانات غير موثوقة، إلى خفض الهجمات الناجحة من نحو نصف المهام المستهدفة إلى أقل من 10%. ويبيّن الباحثون حدوده أيضًا: يفشل هذا الأسلوب حين تكون الأدوات التي تحتاجها المهمة كافية لتنفيذ الهجوم.",
      },
      { t: "h3", text: "3. ملكية غير واضحة: لم يحدد أحد ما يُسمح للوكيل بفعله" },
      {
        t: "p",
        text: "كثير من أخطاء الوكلاء يبدأ من ثغرة إدارية. لم يكتب أحد ما يحق للوكيل فعله وحده، ولا الأنظمة التي يصل إليها، ولا من يتحمل أخطاءه. وتسمي OWASP الجانب التقني من ذلك [الوكالة المفرطة (Excessive Agency)](" +
          OWASP_LLM06 +
          ")، وترجعها إلى ثلاثة أسباب: وظائف زائدة، وصلاحيات زائدة، واستقلالية زائدة. ومثالها وكيل يحتاج إلى قراءة المستندات فقط، لكنه موصول بإضافة تتيح له تعديلها وحذفها أيضًا. والوكلاء يرتجلون كذلك: في تجربة TheAgentCompany، لم يجد أحد الوكلاء الزميل الذي يُفترض أن يسأله، فغيّر اسم مستخدم آخر إلى اسم ذلك الزميل ليختصر الطريق.",
      },
      {
        t: "p",
        text: "**الضابط:** لكل وكيل مسؤول محدد بالاسم، ووثيقة نطاق من صفحة واحدة: ما يفعله وحده، وما يفعله بموافقة فقط، وما لا يفعله أبدًا. أعطِه بيانات دخول خاصة به بأقل صلاحيات ممكنة، وسجّل كل إجراء يقوم به، واجعل المسؤول يراجع السجل وعينة من المحادثات كل أسبوع. وإذا تغيّرت مهمة الوكيل، فحدّث وثيقة النطاق أولًا.",
      },
      { t: "h3", text: "4. لا تحويل إلى موظف: العميل عالق" },
      {
        t: "p",
        text: "الوكيل الذي لا يستطيع تحويل المحادثة إلى موظف يترك أصعب الحالات تدور في حلقة مفرغة: الشكوى، والمشكلة العاجلة، والطلب الذي لم يفهمه. ودليل Anthropic يجعل المخرج جزءًا من التصميم، فالوكيل يتوقف ليطلب رأي الإنسان عند نقاط مراجعة محددة أو حين يواجه عائقًا. وإرشادات OWASP عن حقن الأوامر تطلب أيضًا موافقة بشرية على الإجراءات عالية الخطورة.",
      },
      {
        t: "p",
        text: "**الضابط:** اكتب أسباب التحويل قبل الإطلاق. ومن أكثرها شيوعًا: طلب العميل التحدث إلى موظف، والشكوى، وكل ما هو عاجل أو حساس أو خارج قاعدة المعرفة، وأي قرار يتعلق بالمال أو السلامة. وانقل المحادثة كاملة مع ملخص، حتى لا يضطر العميل إلى إعادة كلامه. وتأكد أن موظفًا يتسلّم الحالة خلال وقت محدد، وأخبر العملاء من البداية أنهم يتحدثون مع مساعد ذكي.",
      },
      {
        t: "table",
        caption: "أربعة أخطاء شائعة وضوابطها",
        head: ["الخطأ", "كيف يظهر", "الضابط"],
        rows: [
          [
            "الهلوسة",
            "إجابة واثقة وخاطئة عن سعر أو سياسة أو موعد",
            "إجابات من قاعدة معرفة معتمدة فقط، وتحويل حين لا توجد إجابة، ومراجعة أسبوعية",
          ],
          [
            "حقن الأوامر",
            "رسالة أو بريد أو مستند يحمل تعليمات ينفّذها الوكيل",
            "أقل الأدوات والصلاحيات، وموافقة بشرية على الإجراءات المكلفة أو النهائية، ومعاملة المحتوى الخارجي على أنه بيانات",
          ],
          [
            "ملكية غير واضحة",
            "الوكيل ينفّذ إجراءات لم يوافق عليها أحد، أو لا أحد يصلح أخطاءه",
            "مسؤول محدد بالاسم، ونطاق مكتوب، وبيانات دخول محدودة خاصة به، وسجل للإجراءات",
          ],
          [
            "لا تحويل إلى موظف",
            "عميل لديه مشكلة عاجلة أو غير معتادة يدور في حلقة مفرغة",
            "أسباب تحويل مكتوبة، ونقل السياق كاملًا، ووقت استجابة محدد، وإفصاح من البداية بأنه مساعد ذكي",
          ],
        ],
      },

      { t: "h2", id: "choose-first-use-case", text: "كيف تختار أول مهمة لوكيل الذكاء الاصطناعي؟" },
      {
        t: "p",
        text: "المشروع الأول هو الذي يحدد إن كان فريقك سيثق بالمشروع الثاني. فاختر مهمة ينجح فيها الوكيل نجاحًا ظاهرًا، ويكون خطؤه فيها رخيصًا.",
      },
      {
        t: "ol",
        items: [
          "**اكتب قائمة المرشحات.** دوّن كل مهمة متكررة تعتمد على المحادثات أو المستندات، مع عددها الأسبوعي والدقائق التي يستغرقها كل منها. حاصل ضرب العدد في الدقائق هو الوقت الذي يمكن أن تستعيده.",
          "**قيّم كل مهمة بأربعة أسئلة.** هل القواعد مكتوبة، أم موجودة في رأس شخص واحد؟ هل المعلومات التي يحتاجها الوكيل موجودة في نظام يستطيع قراءته؟ كم يكلّف الخطأ؟ وهل يمكن التراجع عنه؟",
          "**اختر مهمة كثيرة التكرار قليلة كلفة الخطأ.** الرد على الاستفسارات وتأهيلها، والحجز، والتوجيه تحصل عادة على تقييم جيد. أما اعتماد المدفوعات، وتقديم استشارات قانونية أو طبية، وكل ما لا يمكن التراجع عنه، فلا تصلح بداية.",
          "**اكتب الوصف الوظيفي للوكيل.** حدد المدخلات، والإجراءات المسموح بها، وأسباب التحويل إلى موظف، ومعنى «اكتملت المهمة» في الحالة الواحدة.",
          "**ابنِ مجموعة اختبار من تاريخك الفعلي.** اجمع رسائل أو مستندات سابقة، ومنها الحالات الصعبة، مع الإجابة الصحيحة لكل منها. وكل نسخة من الوكيل يجب أن تجتاز هذه المجموعة قبل التشغيل.",
          "**ابدأ وموظف في الحلقة.** دع الوكيل يكتب المسودة والموظف يعتمدها. ثم اسمح له بالعمل وحده في الفئات التي كانت مسوداته فيها صحيحة باستمرار، ووسّع نطاقه فئة بعد فئة.",
        ],
      },
      {
        t: "p",
        text: "وللخطوات الكاملة، من تعريف المشكلة حتى الميزانية، اقرأ دليلنا عن [كيفية تحديد نطاق مشروع ذكاء اصطناعي](/ar/insights/how-to-scope-an-ai-project).",
      },

      { t: "h2", id: "measure-an-ai-agent", text: "كيف تقيس إن كان الوكيل يؤدي عمله فعلًا؟" },
      {
        t: "p",
        text: "قِس المهمة كما تُنجز اليوم لمدة أسبوعين إلى أربعة أسابيع قبل الإطلاق، ليكون لديك خط أساس. ثم راجع كل أسبوع هذه المؤشرات:",
      },
      {
        t: "table",
        caption: "لوحة المتابعة الأسبوعية لوكيل الذكاء الاصطناعي",
        head: ["المؤشر", "طريقة حسابه", "ماذا يخبرك"],
        rows: [
          [
            "نسبة الإنجاز الكامل",
            "الحالات المنجزة من البداية للنهاية دون موظف ÷ كل الحالات",
            "حجم العمل الذي يرفعه الوكيل عن فريقك فعلًا",
          ],
          [
            "نسبة التحويل وأسبابه",
            "الحالات المحوّلة إلى موظف ÷ كل الحالات، مصنفة حسب السبب",
            "أين تحتاج قاعدة المعرفة أو النطاق إلى تحسين",
          ],
          [
            "نسبة الخطأ",
            "الإجابات أو الإجراءات الخاطئة في عينة أسبوعية ÷ الحالات المراجَعة",
            "هل يمكن الوثوق بالوكيل في مهام أكثر",
          ],
          ["سرعة الرد", "الوسيط الزمني من وصول الرسالة إلى أول رد مفيد", "السرعة التي يشعر بها عملاؤك فعلًا"],
          [
            "النتيجة التجارية",
            "الحجوزات أو العملاء المؤهلون أو المستندات المعالجة أسبوعيًا",
            "هل يتحول العمل إلى إيراد أو وقت موفَّر",
          ],
          [
            "التكلفة لكل حالة منجزة",
            "تكاليف التشغيل مع وقت المراجعة ÷ الحالات المنجزة",
            "هل هو أوفر من طريقتك الحالية في إنجاز المهمة",
          ],
        ],
      },
      {
        t: "p",
        text: "وأعد تشغيل مجموعة الاختبار بعد كل تغيير في التعليمات أو النموذج أو قاعدة المعرفة. فالتعديل الذي يصلح إجابة قد يفسد أخرى دون أن تنتبه، ومجموعة الاختبار تكشف ذلك قبل أن يكشفه عملاؤك. ودليل Anthropic يقترح الترتيب نفسه: ابدأ بتعليمات بسيطة، وحسّنها بتقييم شامل، ولا تضف وكلاء متعددي الخطوات إلا حين تقصر الحلول الأبسط.",
      },

      { t: "cta" },

      { t: "h2", id: "build-or-buy", text: "هل تبني وكيلًا خاصًا بك أم تشتري منتجًا جاهزًا؟" },
      {
        t: "p",
        text: "اشترِ حين تكون المهمة واحدة في كل الشركات، مثل تدوين محاضر الاجتماعات أو صياغة الرسائل أو مكتب دعم تقليدي. فالمنتجات الناضجة موجودة لهذه المهام، وطريقة تدوين محاضر اجتماعاتك ليست على الأرجح سبب اختيار العملاء لك.",
      },
      { t: "p", text: "وابنِ، أو كلّف من يبني لك، إذا انطبق واحد على الأقل مما يلي:" },
      {
        t: "ul",
        items: [
          "طريقة العمل نفسها جزء مما يكسب لك العملاء، والأداة العامة ستسطّحها.",
          "الوكيل يحتاج إلى العمل عبر عدة أنظمة لديك (رقم واتساب، وتقويم، ونظام CRM، ونظام ERP) لا يربطها منتج واحد بشكل جيد.",
          "اللغة والقناة مهمتان: عملاؤك يكتبون باللهجة الخليجية أو بالتركية، ويرسلون رسائل صوتية، وينتظرون الرد على واتساب.",
          "تحتاج إلى التحكم في مكان تخزين البيانات، وفي النموذج الذي يشغّل الوكيل، وفي مصير المحادثات إذا غيّرت المورّد.",
        ],
      },
      { t: "p", text: "وفي الحالتين، اطرح هذه الأسئلة قبل التوقيع:" },
      {
        t: "ul",
        items: [
          "أين تُخزَّن المحادثات وبيانات العملاء، ومن يستطيع قراءتها؟",
          "هل نستطيع تصدير كل شيء، وماذا يحدث إذا توقفنا عن الدفع؟",
          "ما النموذج الذي يشغّل الوكيل، وهل يمكن تغييره دون إعادة البناء؟",
          "كيف يعمل التحويل إلى موظف، وكيف تُراجع الأخطاء وتُصلح؟",
          "من يملك قاعدة المعرفة والتعليمات والربط مع الأنظمة؟",
        ],
      },
      {
        t: "p",
        text: "وFlowramo تبني النوع الثاني. نبيع الأنظمة مشاريع، ونثبّتها على استضافة تختارها وتملكها، موصولة بحساباتك أنت. اطّلع على [ما نبنيه](/ar/solutions)، أو [حدّثنا عن المهمة التي تفكر فيها](/ar/contact).",
      },

      { t: "h2", id: "example-lina", text: "مثال عملي: الضوابط داخل لينا" },
      {
        t: "p",
        text: "لينا موظفة الاستقبال الذكية التي بنيناها لعيادات الأسنان. تعمل على واتساب العيادة، وترد على المرضى ليلًا ونهارًا بلغتهم، من اللهجة الخليجية إلى الإنجليزية والتركية، وتحجز المواعيد وتغيّرها في تقويم العيادة، وترسل التذكيرات ورسائل ما بعد العلاج. ومن الداخل هي عدة وكلاء يعملون معًا، ويسترجعون المعلومات من معرفة العيادة. وكل خطأ من الأخطاء الأربعة السابقة صنع قرارًا في تصميمها:",
      },
      {
        t: "ul",
        items: [
          "**الهلوسة.** لينا تجيب فقط من المعرفة التي اعتمدتها العيادة، ولا تشخّص.",
          "**الملكية والنطاق.** مهمتها محددة: المحادثات، والحجوزات، والتذكيرات، والمتابعة. وتُثبَّت على استضافة تختارها العيادة وتملكها، موصولة بحسابات العيادة نفسها، فتبقى بيانات المرضى على بنية العيادة التقنية.",
          "**التحويل إلى موظف.** الحالات العاجلة والسريرية والحساسة تذهب إلى فريق العيادة مع المحادثة كاملة، فلا يضطر أحد إلى أن يطلب من المريض أن يعيد القصة من أولها.",
          "**مدخلات الواقع.** المرضى يرسلون رسائل صوتية وصورًا إلى جانب النص، لذلك تحوّل لينا الرسائل الصوتية إلى نص وتفهم الصور قبل أن تقرر ما تفعله.",
        ],
      },
      {
        t: "p",
        text: "سننشر النتائج حين توافق عيادة على مشاركتها. وإلى ذلك الحين، يمكنك أن تقرأ كيف [تعمل موظفة الاستقبال الذكية في عيادة الأسنان](/ar/insights/ai-receptionist-for-dental-clinics)، أو [تتعرف إلى لينا بالتفصيل](/ar/products/lina).",
      },
    ],
    faq: [
      {
        q: "ما الفرق بين وكيل الذكاء الاصطناعي والشات بوت؟",
        a: "الشات بوت يرد على الرسائل. أما وكيل الذكاء الاصطناعي فيعمل نحو هدف: يقرر خطوته التالية، ويستخدم أدوات مثل التقويم ونظام CRM والبريد، ويتحقق من النتيجة، ويواصل حتى تنتهي المهمة أو يحوّلها إلى موظف. الشات بوت يستطيع أن يخبر العميل بمواعيد عملك، والوكيل يستطيع أن يحجز له الموعد ويرسل التأكيد.",
      },
      {
        q: "ما أمثلة استخدام وكلاء الذكاء الاصطناعي في الشركات؟",
        a: "المهام المناسبة للوكلاء متكررة، وتعتمد على اللغة، وتحكمها قواعد: الرد على الاستفسارات وتأهيل العملاء المحتملين، والحجز وتغيير المواعيد، وتوجيه البريد والتذاكر إلى الشخص المناسب، واستخراج البيانات من الفواتير والنماذج، والمتابعة، والإجابة عن أسئلة الموظفين من المستندات الداخلية. ابدأ بمهمة يكون الخطأ فيها سهل الاكتشاف وسهل التراجع عنه.",
      },
      {
        q: "هل وكلاء الذكاء الاصطناعي آمنون على بيانات العملاء؟",
        a: "يمكن أن يكونوا آمنين إذا صُمم الأمان من البداية. أعطِ الوكيل الأدوات والصلاحيات التي تحتاجها مهمته فقط، واشترط موافقة موظف على الإجراءات المكلفة أو النهائية، وسجّل كل ما يفعله، واعرف أين تُخزَّن المحادثات ومن يستطيع قراءتها. وقائمة OWASP لمخاطر تطبيقات النماذج اللغوية تضع حقن الأوامر والوكالة المفرطة بين أبرز المخاطر، فاسأل أي مورّد كيف يتعامل معهما.",
      },
      {
        q: "كيف أمنع وكيل الذكاء الاصطناعي من اختلاق المعلومات؟",
        a: "تستطيع تقليل الهلوسة، لكنك لا تستطيع إلغاءها. اجعل الوكيل يجيب من قاعدة معرفة معتمدة فقط، ويعترف حين لا يجد الإجابة ويحوّل المحادثة، وضع الأسعار والسياسات في هذا المصدر، وراجع عينة من المحادثات كل أسبوع. ففي دراسة من جامعة ستانفورد عام 2024، هلوست حتى أدوات البحث القانوني التي تسترجع من المستندات الأصلية في 17% إلى 33% من الحالات، لذلك تبقى المراجعة ضرورية.",
      },
      {
        q: "هل سيحل وكلاء الذكاء الاصطناعي محل الموظفين؟",
        a: "في أغلب الشركات، يتولى الوكلاء الأجزاء المتكررة من الوظائف، ويبقى للموظفين التعامل مع الاستثناءات والعلاقات. وأقوى الأدلة حتى الآن تخص الذكاء الاصطناعي الذي يساعد الموظفين: في دراسة شملت 5,172 موظف دعم عملاء، رفع مساعد ذكي عدد المشكلات المحلولة في الساعة بنسبة 15% في المتوسط. وفي شركة محاكاة، أنجز أفضل وكيل مستقل 30.3% من المهام الواقعية وحده.",
      },
      {
        q: "كيف أقيس العائد من وكيل الذكاء الاصطناعي؟",
        a: "قِس العملية الحالية لبضعة أسابيع أولًا. ثم تابع كل أسبوع نسبة الحالات التي ينجزها الوكيل دون مساعدة، ونسبة التحويل وأسبابه، والأخطاء في عينة تراجعها، وسرعة الرد، والنتيجة التجارية (الحجوزات أو العملاء المؤهلون أو المستندات المعالجة)، والتكلفة لكل حالة منجزة بما فيها وقت المراجعة. وقارن كل رقم بخط الأساس.",
      },
      {
        q: "هل أبني وكيل ذكاء اصطناعي خاصًا بشركتي أم أشتري منتجًا جاهزًا؟",
        a: "اشترِ حين تكون المهمة واحدة في كل الشركات ويوجد منتج ناضج يتصل بأدواتك. وابنِ، أو كلّف من يبني لك، حين تكون طريقة العمل جزءًا من تميزك، أو حين يحتاج الوكيل إلى العمل عبر عدة أنظمة أو قنوات مثل واتساب، أو حين تحتاج إلى التحكم في مكان البيانات والنموذج الذي يشغّل الوكيل. وفي الحالتين، تأكد أنك تستطيع تصدير بياناتك وقاعدة معرفتك.",
      },
    ],
    sources,
    keywords: [
      "وكلاء الذكاء الاصطناعي",
      "وكيل ذكاء اصطناعي للشركات",
      "ما هو وكيل الذكاء الاصطناعي",
      "الفرق بين وكيل الذكاء الاصطناعي والشات بوت",
      "استخدامات الذكاء الاصطناعي في الشركات",
      "مخاطر وكلاء الذكاء الاصطناعي",
      "حقن الأوامر",
      "هلوسة الذكاء الاصطناعي",
      "أتمتة الأعمال بالذكاء الاصطناعي",
    ],
    minutes: 12,
  },
};

export default article;
