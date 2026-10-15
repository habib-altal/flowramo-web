import type { Article } from "./types";

const LEWIS = "https://arxiv.org/abs/2005.11401";
const NIST_GENAI = "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf";
const LEGAL_HALLUCINATION = "https://arxiv.org/abs/2405.20362";
const CLASHEVAL = "https://arxiv.org/abs/2404.10198";
const SEVEN_FAILURES = "https://arxiv.org/abs/2401.05856";
const LOST_IN_MIDDLE = "https://aclanthology.org/2024.tacl-1.9/";
const RAGAS = "https://aclanthology.org/2024.eacl-demo.16/";
const OWASP_LLM02 = "https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/";
const OWASP_LLM08 = "https://genai.owasp.org/llmrisk/llm082025-vector-and-embedding-weaknesses/";
const AIR_CANADA = "https://decisions.civilresolutionbc.ca/crt/crtd/en/525448/1/document.do";
const AZURE_ACCESS = "https://learn.microsoft.com/en-us/azure/search/search-document-level-access-overview";

const sources = [
  {
    label: "Lewis et al. — Retrieval-augmented generation for knowledge-intensive NLP tasks, NeurIPS (2020)",
    url: LEWIS,
  },
  {
    label:
      "NIST — AI 600-1, Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (2024)",
    url: NIST_GENAI,
  },
  {
    label:
      "Magesh et al., Stanford — Hallucination-free? Assessing the reliability of leading AI legal research tools, Journal of Empirical Legal Studies (2025)",
    url: LEGAL_HALLUCINATION,
  },
  {
    label:
      "Wu, Wu and Zou, Stanford — ClashEval: quantifying the tug-of-war between an LLM's internal prior and external evidence, NeurIPS (2024)",
    url: CLASHEVAL,
  },
  {
    label:
      "Barnett et al., Deakin University — Seven failure points when engineering a retrieval augmented generation system, CAIN (2024)",
    url: SEVEN_FAILURES,
  },
  {
    label: "Liu et al. — Lost in the middle: how language models use long contexts, Transactions of the ACL (2024)",
    url: LOST_IN_MIDDLE,
  },
  {
    label: "Es et al. — RAGAs: automated evaluation of retrieval augmented generation, EACL System Demonstrations (2024)",
    url: RAGAS,
  },
  { label: "OWASP — Top 10 for LLM Applications: LLM02:2025 Sensitive Information Disclosure", url: OWASP_LLM02 },
  { label: "OWASP — Top 10 for LLM Applications: LLM08:2025 Vector and Embedding Weaknesses", url: OWASP_LLM08 },
  {
    label: "Civil Resolution Tribunal of British Columbia — Moffatt v. Air Canada, 2024 BCCRT 149 (2024)",
    url: AIR_CANADA,
  },
  { label: "Microsoft Learn — Document-level access control in Azure AI Search", url: AZURE_ACCESS },
];

const article: Article = {
  slug: "ai-knowledge-system-for-company-documents",
  published: "2026-10-14",
  updated: "2026-10-14",
  related: ["own-your-ai-system", "ai-agents-for-business"],
  topic: "studio",

  en: {
    title: "AI knowledge systems: how to make your company's documents answer questions",
    seoTitle: "AI Knowledge System for Company Documents: RAG Guide",
    description:
      "How an AI knowledge system (RAG) answers questions from your company documents, why answers go wrong, the guardrails, what to prepare and how to measure it.",
    answer:
      "An AI knowledge system answers questions from your company's documents. For each question it retrieves the most relevant passages, and a language model writes an answer from them, citing its sources. This is called retrieval-augmented generation (RAG). It works well only when documents are current and owned, permissions are enforced and answers are tested on real questions.",
    takeaways: [
      "An AI knowledge system has two parts: a search step that finds the passages in your documents that bear on a question, and a language model that writes the answer from those passages and cites them. Engineers call it retrieval-augmented generation (RAG).",
      "It answers from whatever the documents say at the moment of the question. In the original RAG paper, questions about world leaders were answered correctly 68–70% of the time with an index from the matching year, and only 4–12% of the time with an index from the wrong year.",
      "Bad documents beat good models: in a Stanford benchmark, six leading models adopted incorrect retrieved content over their own correct knowledge more than 60% of the time. Every document set needs an owner and a review date.",
      "Retrieval reduces confabulation without removing it: legal research tools built this way still hallucinated 17–33% of the time in a peer-reviewed Stanford study.",
      "Five guardrails carry most of the weight: a cited source in every answer, an honest “I don't know”, permissions enforced at search time for each user, an owner for each document set, and evaluation on real questions before launch.",
      "Measure answer accuracy, citation support, retrieval hits, “I don't know” rates, permission leaks and hand-offs on a fixed test set, and keep measuring after launch.",
    ],
    blocks: [
      {
        t: "p",
        text: "A new employee asks how many days' notice a supplier contract requires. The answer is in a PDF signed two years ago, in an amended version on the shared drive and in the head of procurement's memory. Most businesses already hold the answers to most of their questions. They are scattered across policies, contracts, manuals, price lists and email threads, and finding them takes a person who knows where to look.",
      },
      {
        t: "p",
        text: "An AI knowledge system lets people ask those documents directly, in plain language, and get an answer with the source attached. This guide explains how it works, which questions it handles well and which it does not, the four reasons answers go wrong and the guardrail for each, what to prepare, whether to build, buy or own one, and how to tell whether it works. It is written for owners and operators, not engineers.",
      },

      { t: "h2", id: "what-is-an-ai-knowledge-system", text: "What is an AI knowledge system, in plain words?" },
      {
        t: "p",
        text: "An AI knowledge system is a search engine and a writer working as a pair. The search finds the passages in your documents that bear on a question. The language model then writes an answer using only those passages and cites where each point came from. Ask “what is our refund window for annual contracts?” and you get a short answer with a link to the clause in the policy, instead of a list of files to open.",
      },
      {
        t: "p",
        text: "The technique is called retrieval-augmented generation (RAG), a name that comes from a [2020 paper by Lewis and colleagues](" +
          LEWIS +
          ") presented at NeurIPS. The authors started from a known weakness of language models: the facts they learn in training are stored inside the model's parameters, and for such models, showing where an answer came from and updating what they know remained open research problems. RAG adds a second, external memory: a searchable index of documents that the model consults at the moment of each question.",
      },
      {
        t: "p",
        text: "That external memory is what makes the approach practical for a business, and the same paper tested it by swapping the index. Asked about 82 world leaders whose posts changed between 2016 and 2018, the system answered correctly 70% of the time with a 2016 Wikipedia index for 2016 leaders, and 68% of the time with a 2018 index for 2018 leaders. Given the index from the wrong year, it answered correctly only 4–12% of the time. Nothing was retrained. The answers followed the documents, which is both the strength of RAG and its main risk.",
      },
      { t: "h3", text: "How a question becomes an answer" },
      {
        t: "ol",
        items: [
          "**Prepare.** Documents are collected from where they live (a shared drive, a wiki, a help centre), split into short passages and indexed. Each passage is tagged with its source, its date and who is allowed to see it.",
          "**Retrieve.** When someone asks a question, the system searches the index for the passages most likely to contain the answer, using only the documents that person is allowed to read.",
          "**Generate.** The language model receives the question and those passages, writes an answer from them and cites the passages it used.",
          "**Decline or hand over.** When the passages do not contain the answer, the system says so and, where it matters, passes the question to a person.",
        ],
      },
      { t: "h3", text: "Why not train a model on your documents, or paste them all in?" },
      {
        t: "p",
        text: "Training a model on your documents puts the knowledge back inside its parameters, where, as the RAG paper notes, it is hard to update and hard to trace to a source. Pasting every document into one long prompt fails in a different way. A study of how language models use long inputs, [Lost in the Middle](" +
          LOST_IN_MIDDLE +
          "), found that accuracy was usually highest when the relevant information sat at the beginning or end of the input and dropped when it sat in the middle, even for models built for long contexts. Retrieval keeps the input short and relevant, and updating the knowledge becomes a matter of updating a document.",
      },

      {
        t: "h2",
        id: "questions-it-answers",
        text: "Which questions does a knowledge system answer well, and which does it not?",
      },
      {
        t: "p",
        text: "A knowledge system is strongest when the answer is written down somewhere, in a passage or two, and the person asking needs it quickly. It is weak when the answer has to be calculated across many records, decided by someone, or has not been written down yet.",
      },
      {
        t: "table",
        caption: "Questions that suit a knowledge system, and questions that need something else",
        head: ["Type of question", "Example", "Fit"],
        rows: [
          [
            "Policy and procedure",
            "“How many days of annual leave carry over to next year?”",
            "Good: the answer sits in one or two passages of a policy",
          ],
          [
            "Product and service facts",
            "“Does the premium plan include on-site installation?”",
            "Good, provided the product documents are current",
          ],
          [
            "Contract and document lookup",
            "“What notice period does our contract with this supplier require?”",
            "Good, if the system shows the clause and the version it read",
          ],
          [
            "How-to and troubleshooting",
            "“How do I issue a credit note in our accounting system?”",
            "Good, when there is a written guide to retrieve",
          ],
          [
            "Counts and totals across records",
            "“How many customers cancelled last quarter?”",
            "Poor: this is a database or reporting query, not a document search",
          ],
          [
            "Exhaustive lists",
            "“List every contract that renews in March.”",
            "Weak: retrieval returns the closest passages, not every match; use structured data",
          ],
          [
            "Judgement and approval",
            "“Should we grant this customer an exception?”",
            "Poor: the system can retrieve the policy, but a person decides",
          ],
          [
            "Anything not written down",
            "“What did we agree in yesterday's meeting?”",
            "Not possible until it is recorded in a document the system can read",
          ],
        ],
      },
      {
        t: "p",
        text: "Typical first uses follow from this: an internal assistant that answers staff questions on HR policies and operating procedures, a support assistant that answers customers from product documentation, and a sales assistant that finds the right specification or contract clause. Each starts with one document set and one audience. If the job you have in mind means acting in other systems, such as booking appointments or updating records, you are describing an AI agent, and the knowledge system becomes one of its tools.",
      },

      { t: "h2", id: "why-answers-go-wrong", text: "Why do AI knowledge systems give wrong answers?" },
      {
        t: "p",
        text: "Wrong answers have four common causes, and only one of them is the model inventing things. Each has a guardrail you can design in before launch.",
      },
      { t: "h3", text: "1. Stale or conflicting documents" },
      {
        t: "p",
        text: "A knowledge system repeats what its documents say. If last year's price list is still in the index next to this year's, or two policies disagree, the model has to choose, and it tends to trust what it is given. In [ClashEval](" +
          CLASHEVAL +
          "), a Stanford benchmark of more than 1,200 questions presented at NeurIPS 2024, six leading models, GPT-4o among them, adopted incorrect retrieved content over their own correct knowledge more than 60% of the time. The further the content strayed from the truth, the less likely the models were to adopt it, which means small, plausible errors such as an old price or a superseded notice period are the ones most likely to pass unnoticed.",
      },
      {
        t: "p",
        text: "The business answers for the result. In [Moffatt v. Air Canada](" +
          AIR_CANADA +
          "), a 2024 decision of British Columbia's Civil Resolution Tribunal, the airline's website chatbot told a passenger he could claim a bereavement fare after travelling, while the airline's own policy page said the opposite. Air Canada argued that the chatbot was a separate legal entity responsible for its own actions. The tribunal called this a remarkable submission, held the airline responsible for all the information on its website, whether it came from a static page or a chatbot, and found that it “did not take reasonable care to ensure its chatbot was accurate”.",
      },
      {
        t: "p",
        text: "**Guardrail:** give every document set a named owner and a review date. Keep one source of truth per topic, and remove superseded versions from the index instead of leaving them beside the current ones. Sync the index from the system where documents are maintained rather than uploading copies by hand, and show each document's date next to its citation so readers can see how fresh the answer is.",
      },
      { t: "h3", text: "2. Missing permissions" },
      {
        t: "p",
        text: "A knowledge system that can read the salary sheet can repeat it to anyone who asks the right question. The OWASP Top 10 for LLM applications lists [sensitive information disclosure](" +
          OWASP_LLM02 +
          ") as a core risk, covering personal data, financial details, health records, confidential business data and legal documents. It warns that instructions in the system prompt telling the model not to reveal something may not always be honoured and can be bypassed through prompt injection. Its entry on [vector and embedding weaknesses](" +
          OWASP_LLM08 +
          "), new in the 2025 list and aimed at retrieval systems, recommends fine-grained access controls and permission-aware stores, with strict logical and access partitioning so that different groups of users cannot reach each other's data.",
      },
      {
        t: "p",
        text: "**Guardrail:** enforce permissions in the search step, before the model sees anything. Each passage carries the access rights of the document it came from, and each search is filtered by the identity of the person asking. Microsoft's [documentation for Azure AI Search](" +
          AZURE_ACCESS +
          "), for example, describes storing the groups allowed to see each document in the index and filtering every query by the groups the user belongs to. Test this with accounts at different access levels before launch, and keep sensitive document sets out of the index until their permissions are mapped.",
      },
      { t: "h3", text: "3. Retrieval misses" },
      {
        t: "p",
        text: "Sometimes the answer exists but never reaches the model. Researchers at Deakin University who built RAG systems for research, education and biomedicine documented [seven failure points](" +
          SEVEN_FAILURES +
          "). Two of them start in the search step. With missing content, the documents cannot answer the question: the system should say it does not know, but it can be drawn into answering anyway. With missed top-ranked documents, the answer is in a document that does not rank high enough to be passed to the model. Their conclusion is practical: a RAG system can only be fully validated in operation, and its robustness evolves over time rather than being designed in at the start.",
      },
      {
        t: "p",
        text: "**Guardrail:** test the search on its own before judging the answers. For each real question, check whether the right passage was retrieved. Fix the documents first: clear headings, one topic per section, tables and scanned pages converted to readable text, and the terms your staff and customers actually use, in every language they use them. A question written in Arabic about a policy stored in English has to find that policy too.",
      },
      { t: "h3", text: "4. Confabulation: the model fills the gap" },
      {
        t: "p",
        text: "Even with the right passages in hand, a model can state something the passages do not say. NIST's [Generative AI Profile](" +
          NIST_GENAI +
          ") calls this confabulation: a system confidently presenting erroneous or false content, often called hallucination. It explains that the statistical prediction behind these models can produce accurate output, and also output that is inaccurate or internally inconsistent. Retrieval reduces the problem without removing it. A peer-reviewed [Stanford study](" +
          LEGAL_HALLUCINATION +
          ") of AI legal research tools from LexisNexis and Thomson Reuters, which retrieve from legal sources, found that each hallucinated between 17% and 33% of the time. That was less than general-purpose GPT-4, and the authors judged the vendors' claims of hallucination-free answers to be overstated. The study counted an answer as a hallucination when it was incorrect or misgrounded, meaning it cited a source that does not support the claim.",
      },
      {
        t: "p",
        text: "**Guardrail:** require a cited source in every answer, linked to the passage rather than just the file, and check during testing that each citation actually supports the claim beside it. Instruct the system to answer only from the retrieved passages and to say “I don't know” when they do not contain the answer, then test that it does, using questions the documents cannot answer. Where an answer carries weight, such as a price, a legal term or anything touching health or safety, route the question to a person.",
      },
      {
        t: "table",
        caption: "Four causes of wrong answers and their guardrails",
        head: ["Cause", "What it looks like", "Guardrail"],
        rows: [
          [
            "Stale or conflicting documents",
            "Last year's price, or one of two contradictory policies, quoted with confidence",
            "An owner and a review date per document set, one source of truth, superseded versions removed, dates shown with citations",
          ],
          [
            "Missing permissions",
            "A user receives content from a document they should not see",
            "Access rights carried into the index and enforced in every search, tested with real accounts",
          ],
          [
            "Retrieval misses",
            "“I don't know” when the answer exists, or an answer built on the wrong passage",
            "Search tested separately, documents restructured, the words users really use",
          ],
          [
            "Confabulation",
            "A fluent answer the sources do not support, sometimes with a citation that does not back it",
            "A cited passage in every answer, “I don't know” when the sources are silent, hand-off for high-stakes questions",
          ],
        ],
      },

      { t: "h2", id: "what-to-prepare", text: "What should you prepare before building a knowledge system?" },
      {
        t: "p",
        text: "Most of the work that decides quality happens before any code is written, and most of it is about documents and people.",
      },
      {
        t: "ol",
        items: [
          "**Choose one document set and one audience.** HR policies for staff, product documentation for customers or contracts for the finance team. A narrow first scope is easier to clean, to permission and to test.",
          "**Take an inventory.** For each document, record where it lives, its format, its owner, when it was last reviewed and who may see it. Scanned PDFs and images need converting to text before they can be searched.",
          "**Clean up.** Remove duplicates and old versions, resolve contradictions and mark which document is the source of truth for each topic. Where answers exist only in people's heads, write them down first.",
          "**Name an owner for each set.** The owner approves what goes in, fixes errors found in review and updates the documents when the business changes. Without an owner, the system drifts out of date while still sounding sure of itself.",
          "**Decide how it stays current.** Connect the index to the system where documents are maintained so that changes flow through, and set a review cycle for each set. A policy change is not finished until the document has changed.",
          "**Collect real questions.** Pull them from email, support tickets, chat logs and the people who answer them today, with the correct answer and its source for each. Include awkward ones and questions the documents cannot answer. This becomes your test set.",
        ],
      },

      { t: "h2", id: "build-buy-own", text: "Should you build, buy or own a knowledge system?" },
      {
        t: "p",
        text: "Buy when your documents already live in one workplace suite or help-desk product that offers an AI assistant over its own content, that assistant respects the permissions you have already set, and the questions are internal and routine. It is the quickest way to learn whether people use the answers at all.",
      },
      { t: "p", text: "Build, or commission a build, when at least one of these is true:" },
      {
        t: "ul",
        items: [
          "The documents are spread across several systems that no single product searches well.",
          "Answers have to reach people where they already are, such as WhatsApp, your website or an internal tool.",
          "Questions arrive in more than one language, such as Arabic and English, or in dialect.",
          "Permissions are specific to your organisation and must be enforced exactly.",
          "You need control over where documents and logs are stored and which model writes the answers.",
        ],
      },
      {
        t: "p",
        text: "Whichever route you take, make sure the knowledge itself stays yours: the cleaned documents, the index, the test set, the prompts and the logs, in formats you can move. One limit applies either way. The passages retrieved for each question are sent to the provider of the language model that writes the answer, so that provider belongs on your list of processors and its terms on data retention and training need checking. Our guide to [owning versus renting an AI system](/en/insights/own-your-ai-system) covers hosting, data location and contract terms in detail.",
      },
      { t: "p", text: "Before you sign with any supplier, ask:" },
      {
        t: "ul",
        items: [
          "Where are the documents, the index and the conversation logs stored, and who can read them?",
          "Are permissions enforced in the search step for each user, and how is that tested?",
          "Does every answer cite the passage it came from, and what happens when the documents have no answer?",
          "Which model writes the answers, and can it be changed without rebuilding the index?",
          "Can we export the documents, the index and the test set, and what happens if we stop paying?",
        ],
      },
      {
        t: "p",
        text: "Flowramo designs and builds AI knowledge systems as projects, alongside AI agents, business automation and custom AI applications. Each system is installed on hosting the client chooses and owns and connected to the client's own accounts, so the documents, the index and the logs stay with the business that relies on them. See [what we build](/en/solutions).",
      },

      { t: "h2", id: "measure-a-knowledge-system", text: "How do you measure whether a knowledge system works?" },
      {
        t: "p",
        text: "Start before launch, with the test set of real questions. The [RAGAS framework](" +
          RAGAS +
          "), presented at EACL 2024, offers three useful lenses: faithfulness, whether the claims in an answer can be inferred from the retrieved passages; answer relevance, whether the answer addresses the question that was asked; and context relevance, whether the retrieved passages are focused rather than padded with irrelevant text. Tools can score these automatically with a language model, but grade a sample by hand as well, because an automated judge can be wrong too.",
      },
      {
        t: "table",
        caption: "A scorecard for an AI knowledge system",
        head: ["Metric", "How to measure it", "What it tells you"],
        rows: [
          [
            "Answer accuracy",
            "Correct answers ÷ questions in the test set, graded against the known answer",
            "Whether people can rely on it",
          ],
          [
            "Citation support",
            "Answers whose cited passage actually supports the claim ÷ answers checked",
            "Whether the sources shown are evidence or decoration",
          ],
          [
            "Retrieval hit rate",
            "Questions where the right passage was among those retrieved ÷ questions with a known source",
            "Whether failures start in the search or in the writing",
          ],
          [
            "Correct “I don't know”",
            "Unanswerable test questions declined ÷ unanswerable questions asked",
            "Whether it admits the limits of its documents",
          ],
          [
            "Missed answers",
            "Answerable questions declined ÷ answerable questions asked",
            "Gaps in the documents or in the search",
          ],
          [
            "Permission leaks",
            "Answers containing content above the user's access level, on test accounts",
            "Must be zero before launch",
          ],
          [
            "Freshness",
            "Documents past their review date ÷ documents in the index",
            "Whether owners are keeping up",
          ],
          [
            "Use and hand-offs",
            "Questions per week, share passed to a person, time to an answer",
            "Whether it saves time in practice",
          ],
        ],
      },
      {
        t: "p",
        text: "Keep measuring after launch. As the Deakin team concluded, a RAG system can only be fully validated in operation: new questions arrive, documents change and models are updated. Re-run the test set after every change to the documents' structure, the search settings, the prompts or the model, add the questions that went wrong to it, and review a sample of real conversations with the document owners every week.",
      },

      { t: "cta" },

      { t: "h2", id: "example-lina", text: "An example: Lina answers only from clinic-approved knowledge" },
      {
        t: "p",
        text: "[Lina](/en/products/lina), the AI receptionist we built for dental clinics on WhatsApp and the clinic's website, is built on the same idea for one narrow job. She answers patients only from knowledge the clinic has approved, retrieving from that knowledge for each conversation, and she does not diagnose. Urgent, clinical and sensitive questions go to the clinic team with the full conversation, so the patient never has to start again. She runs on hosting the clinic chooses and owns, connected to the clinic's own accounts.",
      },
      {
        t: "p",
        text: "A knowledge system for your own documents follows the same pattern with a different audience: approved sources, cited answers, permissions, an owner and a clear route to a person. If you are weighing one, [tell us which questions it should answer](/en/contact).",
      },
    ],
    faq: [
      {
        q: "What is retrieval-augmented generation (RAG) in simple terms?",
        a: "RAG is a way of making a language model answer from specific documents. For each question, a search step retrieves the most relevant passages from your documents, and the model writes the answer from those passages and cites them. The technique was introduced in a 2020 paper by Lewis and colleagues at NeurIPS. Its knowledge is updated by updating the documents, with no retraining.",
      },
      {
        q: "Is a knowledge system the same as training ChatGPT on my documents?",
        a: "No. Training stores knowledge inside the model, where it is hard to update and hard to trace to a source. A knowledge system leaves the model as it is and looks up your documents at the moment of each question, so answers can cite their source and change as soon as a document changes. The retrieved passages are still sent to the model provider, so check its data terms.",
      },
      {
        q: "Can an AI knowledge system stop hallucinations completely?",
        a: "No. Retrieval reduces confabulation but does not remove it: in a peer-reviewed Stanford study, legal research tools that retrieve from legal sources still hallucinated 17–33% of the time. Require a cited passage in every answer, make the system say “I don't know” when its sources are silent, test it on real questions before launch and send high-stakes questions to a person.",
      },
      {
        q: "How do I stop people seeing documents they are not allowed to see?",
        a: "Enforce permissions in the search step, not in the model's instructions, which OWASP warns can be bypassed. Each indexed passage should carry the access rights of its source document, and every search should be filtered by the identity of the person asking, so restricted content never reaches the model. Test with accounts at different access levels before launch.",
      },
      {
        q: "Which documents should we start with?",
        a: "Start with one set that answers frequent questions for one audience, has a clear owner and is mostly current: HR policies and procedures for staff, or product and service documentation for customers. Clean it first by removing old versions, resolving contradictions and writing down answers that exist only in people's heads. Add more sets once the first one passes its tests.",
      },
      {
        q: "How do we keep the answers up to date?",
        a: "Keep the documents up to date, because the system answers from whatever they say. Give each document set an owner and a review date, connect the index to the system where documents are maintained so changes flow through, and remove superseded versions. In the original RAG paper, an index from the wrong year cut correct answers about world leaders to 4–12%.",
      },
      {
        q: "How do we know if an AI knowledge system is working?",
        a: "Build a test set of real questions with known answers and sources before launch. Track answer accuracy, whether citations support the claims, whether the right passage was retrieved, how often it correctly says “I don't know”, permission leaks on test accounts and the share of questions handed to a person. Re-run the test set after every change and review real conversations weekly.",
      },
    ],
    sources,
    keywords: [
      "ai knowledge system",
      "ai knowledge base for business",
      "retrieval augmented generation explained",
      "rag for business",
      "chat with company documents",
      "ai search for company documents",
      "rag hallucination",
      "rag access control",
      "how to evaluate rag",
    ],
    minutes: 12,
  },

  ar: {
    title: "أنظمة المعرفة بالذكاء الاصطناعي: كيف تجعل مستندات شركتك تجيب عن الأسئلة",
    seoTitle: "نظام معرفة بالذكاء الاصطناعي لمستندات شركتك",
    description:
      "كيف يجيب نظام المعرفة بالذكاء الاصطناعي (RAG) عن الأسئلة من مستندات شركتك، ولماذا تخطئ إجاباته، وما الضوابط، وما الذي تجهّزه، وكيف تقيس نتائجه.",
    answer:
      "نظام المعرفة بالذكاء الاصطناعي يجيب عن الأسئلة من مستندات شركتك. فمع كل سؤال يسترجع المقاطع الأقرب صلة به، ثم يكتب نموذج لغوي الإجابة منها ويذكر مصادرها. وتُسمّى هذه التقنية «التوليد المعزّز بالاسترجاع» (RAG). ولا يعمل جيدًا إلا حين تكون المستندات محدّثة ولها مسؤول، والصلاحيات مطبّقة، والإجابات مختبرة على أسئلة حقيقية.",
    takeaways: [
      "لنظام المعرفة بالذكاء الاصطناعي جزءان: خطوة بحث تجد في مستنداتك المقاطع المتصلة بالسؤال، ونموذج لغوي يكتب الإجابة من تلك المقاطع ويذكرها مصدرًا. ويسمّيه المهندسون «التوليد المعزّز بالاسترجاع» (RAG).",
      "النظام يجيب بما تقوله المستندات لحظة السؤال. ففي الورقة البحثية الأصلية لتقنية RAG، أُجيب عن أسئلة حول قادة العالم إجابة صحيحة في 68% إلى 70% من الحالات بفهرس من السنة المطابقة، وفي 4% إلى 12% فقط بفهرس من السنة الخطأ.",
      "المستند الرديء يتغلب على النموذج الجيد: في اختبار معياري من جامعة ستانفورد، تبنّت ستة نماذج رائدة محتوى مسترجعًا خاطئًا وتركت معرفتها الصحيحة في أكثر من 60% من الحالات. لذلك تحتاج كل مجموعة مستندات مسؤولًا وتاريخ مراجعة.",
      "الاسترجاع يخفف التلفيق ولا يلغيه: أدوات بحث قانوني مبنية بهذه الطريقة هلوست في 17% إلى 33% من الحالات في دراسة محكّمة من جامعة ستانفورد.",
      "خمسة ضوابط تحمل معظم العبء: مصدر مذكور في كل إجابة، و«لا أعرف» صادقة، وصلاحيات تُطبَّق لكل مستخدم لحظة البحث، ومسؤول عن كل مجموعة مستندات، واختبار على أسئلة حقيقية قبل الإطلاق.",
      "قِس دقة الإجابات، ودعم المصادر لها، وإصابة الاسترجاع، ونسب «لا أعرف»، وتسرّب الصلاحيات، والتحويل إلى الموظفين على مجموعة اختبار ثابتة، واستمر في القياس بعد الإطلاق.",
    ],
    blocks: [
      {
        t: "p",
        text: "يسأل موظف جديد: كم يومًا من الإشعار المسبق يشترط عقدنا مع أحد الموردين؟ الإجابة موجودة في ملف PDF وُقّع قبل سنتين، وفي نسخة معدّلة على المجلد المشترك، وفي ذاكرة مدير المشتريات. معظم الشركات تملك بالفعل إجابات معظم أسئلتها، لكنها موزعة بين السياسات والعقود والأدلة وقوائم الأسعار وسلاسل البريد، والوصول إليها يحتاج شخصًا يعرف أين يبحث.",
      },
      {
        t: "p",
        text: "نظام المعرفة بالذكاء الاصطناعي يتيح للناس أن يسألوا هذه المستندات مباشرة بلغتهم اليومية، فيحصلوا على إجابة مرفقة بمصدرها. في هذا الدليل نشرح كيف يعمل، وما الأسئلة التي يتقنها وما التي لا يصلح لها، والأسباب الأربعة التي تجعل إجاباته تخطئ مع الضابط المناسب لكل سبب، وما الذي تجهّزه قبل البناء، وهل تبنيه أم تشتريه أم تمتلكه، وكيف تعرف أنه يعمل. وهو مكتوب لأصحاب الأعمال ومديري التشغيل، لا للمهندسين.",
      },

      { t: "h2", id: "what-is-an-ai-knowledge-system", text: "ما نظام المعرفة بالذكاء الاصطناعي بكلمات بسيطة؟" },
      {
        t: "p",
        text: "نظام المعرفة بالذكاء الاصطناعي محرك بحث وكاتب يعملان معًا. البحث يجد في مستنداتك المقاطع المتصلة بالسؤال، ثم يكتب النموذج اللغوي إجابة لا يعتمد فيها إلا على تلك المقاطع، ويذكر من أين جاءت كل معلومة. اسأله: «ما مهلة استرداد المبلغ في العقود السنوية؟» فتحصل على إجابة قصيرة مع رابط إلى البند في السياسة، بدل قائمة ملفات عليك أن تفتحها واحدًا تلو الآخر.",
      },
      {
        t: "p",
        text: "وتُسمّى هذه التقنية «التوليد المعزّز بالاسترجاع» (Retrieval-Augmented Generation أو RAG)، وهو اسم جاء من [ورقة بحثية نشرها لويس وزملاؤه عام 2020](" +
          LEWIS +
          ") وعُرضت في مؤتمر NeurIPS. انطلق الباحثون من نقطة ضعف معروفة في النماذج اللغوية: المعلومات التي تتعلمها أثناء التدريب تُخزَّن داخل معاملاتها، وبقي ربط إجاباتها بمصدر واضح وتحديث ما تعرفه مسألتين بحثيتين مفتوحتين. فأضافت RAG ذاكرة ثانية خارجية: فهرسًا من المستندات قابلًا للبحث، يرجع إليه النموذج لحظة طرح كل سؤال.",
      },
      {
        t: "p",
        text: "وهذه الذاكرة الخارجية هي ما يجعل الفكرة عملية للشركات، وقد اختبرها الباحثون أنفسهم باستبدال الفهرس. سألوا النظام عن 82 من قادة العالم تغيّرت مناصبهم بين عامي 2016 و2018، فأجاب إجابة صحيحة في 70% من الحالات حين استخدم فهرس ويكيبيديا لعام 2016 مع قادة 2016، وفي 68% حين استخدم فهرس 2018 مع قادة 2018. أما حين أُعطي فهرس السنة الخطأ، فلم تتجاوز الإجابات الصحيحة ما بين 4% و12%. لم يُعَد تدريب شيء، بل تبعت الإجابات المستندات، وهذه هي قوة RAG وخطرها الأكبر في آن واحد.",
      },
      { t: "h3", text: "كيف يتحول السؤال إلى إجابة" },
      {
        t: "ol",
        items: [
          "**التجهيز.** تُجمع المستندات من أماكنها (مجلد مشترك، أو ويكي داخلي، أو مركز مساعدة)، وتُقسَّم إلى مقاطع قصيرة وتُفهرَس، ويُوسَم كل مقطع بمصدره وتاريخه ومن يحق له رؤيته.",
          "**الاسترجاع.** حين يطرح أحدهم سؤالًا، يبحث النظام في الفهرس عن المقاطع الأرجح أن تحتوي الإجابة، مقتصرًا على المستندات التي يحق لهذا الشخص قراءتها.",
          "**التوليد.** يتلقى النموذج اللغوي السؤال وهذه المقاطع، فيكتب الإجابة منها ويشير إلى المقاطع التي استند إليها.",
          "**الاعتذار أو التحويل.** إذا لم تحتوِ المقاطع على الإجابة، يقول النظام ذلك صراحة، ويحوّل السؤال إلى موظف حين يكون الأمر مهمًا.",
        ],
      },
      { t: "h3", text: "لماذا لا ندرّب نموذجًا على مستنداتنا، أو نلصقها كلها في المحادثة؟" },
      {
        t: "p",
        text: "تدريب نموذج على مستنداتك يعيد المعرفة إلى داخل معاملاته، حيث يصعب تحديثها ويصعب ربطها بمصدر، كما تشير ورقة RAG نفسها. أما لصق كل المستندات في طلب واحد طويل فيفشل بطريقة أخرى. فقد وجدت دراسة عن طريقة استخدام النماذج اللغوية للمدخلات الطويلة، بعنوان [«الضياع في المنتصف»](" +
          LOST_IN_MIDDLE +
          ")، أن الدقة تكون في الغالب أعلى حين تقع المعلومة المطلوبة في بداية المدخل أو نهايته، وتنخفض حين تقع في وسطه، حتى في النماذج المصممة للسياقات الطويلة. الاسترجاع يُبقي المدخل قصيرًا ومتصلًا بالسؤال، ويصبح تحديث المعرفة مجرد تحديث لمستند.",
      },

      {
        t: "h2",
        id: "questions-it-answers",
        text: "ما الأسئلة التي يجيد نظام المعرفة الإجابة عنها، وما التي لا يصلح لها؟",
      },
      {
        t: "p",
        text: "يكون نظام المعرفة في أفضل حالاته حين تكون الإجابة مكتوبة في مكان ما، في مقطع أو مقطعين، ويحتاجها السائل بسرعة. ويضعف حين يجب حساب الإجابة عبر سجلات كثيرة، أو حين تحتاج قرارًا من شخص، أو حين لم تُكتب بعد.",
      },
      {
        t: "table",
        caption: "أسئلة تناسب نظام المعرفة، وأسئلة تحتاج أداة أخرى",
        head: ["نوع السؤال", "مثال", "مدى الملاءمة"],
        rows: [
          [
            "السياسات والإجراءات",
            "«كم يومًا من الإجازة السنوية يُرحَّل إلى العام القادم؟»",
            "مناسب: الإجابة في مقطع أو مقطعين من السياسة",
          ],
          [
            "معلومات المنتجات والخدمات",
            "«هل تشمل الباقة المميزة التركيب في الموقع؟»",
            "مناسب، بشرط أن تكون مستندات المنتج محدّثة",
          ],
          [
            "البحث في العقود والمستندات",
            "«ما مدة الإشعار التي يشترطها عقدنا مع هذا المورد؟»",
            "مناسب، إذا عرض النظام البند والنسخة التي قرأها",
          ],
          [
            "الشرح وحل المشكلات",
            "«كيف أصدر إشعارًا دائنًا في نظام المحاسبة لدينا؟»",
            "مناسب، حين يوجد دليل مكتوب يمكن استرجاعه",
          ],
          [
            "العدّ والمجاميع عبر السجلات",
            "«كم عميلًا ألغى اشتراكه في الربع الماضي؟»",
            "غير مناسب: هذا استعلام في قاعدة بيانات أو تقرير، لا بحث في مستندات",
          ],
          [
            "القوائم الشاملة",
            "«اذكر كل العقود التي تتجدد في مارس.»",
            "ضعيف: الاسترجاع يعيد أقرب المقاطع لا كل النتائج، والأنسب هنا بيانات منظمة",
          ],
          [
            "التقدير والموافقة",
            "«هل نمنح هذا العميل استثناءً؟»",
            "غير مناسب: النظام يسترجع السياسة، والقرار لشخص",
          ],
          [
            "ما لم يُكتب بعد",
            "«ماذا اتفقنا عليه في اجتماع أمس؟»",
            "غير ممكن حتى يُدوَّن في مستند يستطيع النظام قراءته",
          ],
        ],
      },
      {
        t: "p",
        text: "ومن هنا تأتي الاستخدامات الأولى المعتادة: مساعد داخلي يجيب الموظفين عن سياسات الموارد البشرية وإجراءات التشغيل، ومساعد دعم يجيب العملاء من وثائق المنتج، ومساعد مبيعات يجد المواصفة أو بند العقد المناسب. وكل منها يبدأ بمجموعة مستندات واحدة وجمهور واحد. وإذا كانت المهمة التي تفكر فيها تتطلب تنفيذ إجراءات في أنظمة أخرى، كحجز المواعيد أو تحديث السجلات، فأنت تصف وكيل ذكاء اصطناعي، ويصبح نظام المعرفة إحدى أدواته.",
      },

      { t: "h2", id: "why-answers-go-wrong", text: "لماذا يعطي نظام المعرفة إجابات خاطئة؟" },
      {
        t: "p",
        text: "للإجابات الخاطئة أربعة أسباب شائعة، واحد منها فقط أن يختلق النموذج معلومات من عنده. ولكل سبب ضابط يمكنك بناؤه في النظام قبل الإطلاق.",
      },
      { t: "h3", text: "1. مستندات قديمة أو متعارضة" },
      {
        t: "p",
        text: "نظام المعرفة يكرر ما تقوله مستنداته. فإذا بقيت قائمة أسعار العام الماضي في الفهرس بجانب قائمة هذا العام، أو تعارضت سياستان، فعلى النموذج أن يختار، وهو يميل إلى تصديق ما يُعطى له. ففي [ClashEval](" +
          CLASHEVAL +
          ")، وهو اختبار معياري من جامعة ستانفورد يضم أكثر من 1,200 سؤال وعُرض في مؤتمر NeurIPS 2024، تبنّت ستة نماذج رائدة، منها GPT-4o، محتوى مسترجعًا خاطئًا وتركت معرفتها الصحيحة في أكثر من 60% من الحالات. وكلما ابتعد المحتوى عن الحقيقة قلّ احتمال أن تتبناه النماذج، ما يعني أن الأخطاء الصغيرة المعقولة، كسعر قديم أو مدة إشعار استُبدلت، هي الأرجح أن تمر دون أن ينتبه لها أحد.",
      },
      {
        t: "p",
        text: "والشركة هي من يتحمل النتيجة. ففي قضية [موفات ضد طيران كندا (Moffatt v. Air Canada)](" +
          AIR_CANADA +
          ")، التي فصلت فيها محكمة تسوية النزاعات المدنية في مقاطعة كولومبيا البريطانية الكندية عام 2024، أخبر روبوت المحادثة في موقع الشركة مسافرًا بأنه يستطيع طلب سعر تذكرة العزاء بعد السفر، بينما تقول صفحة السياسة في موقع الشركة نفسها عكس ذلك. ودفعت الشركة بأن روبوت المحادثة كيان قانوني مستقل مسؤول عن أفعاله، فوصفت المحكمة هذا الدفع بأنه لافت للنظر، وقررت أن الشركة مسؤولة عن كل المعلومات في موقعها، سواء جاءت من صفحة ثابتة أو من روبوت محادثة، وأنها لم تبذل العناية المعقولة للتأكد من دقة روبوت المحادثة.",
      },
      {
        t: "p",
        text: "**الضابط:** عيّن لكل مجموعة مستندات مسؤولًا باسمه وتاريخ مراجعة. واجعل لكل موضوع مصدرًا واحدًا معتمدًا، واحذف النسخ الملغاة من الفهرس بدل تركها بجانب النسخ الحالية. وزامن الفهرس مع النظام الذي تُحدَّث فيه المستندات بدل رفع نسخ يدويًا، واعرض تاريخ المستند بجانب كل مصدر ليرى القارئ مدى حداثة الإجابة.",
      },
      { t: "h3", text: "2. صلاحيات غير مطبّقة" },
      {
        t: "p",
        text: "نظام المعرفة الذي يستطيع قراءة كشف الرواتب يستطيع أن يكرره لأي شخص يطرح السؤال المناسب. وتضع قائمة OWASP لأبرز عشرة مخاطر في تطبيقات النماذج اللغوية الكبيرة [كشف المعلومات الحساسة](" +
          OWASP_LLM02 +
          ") بين المخاطر الأساسية، وتُدخل فيه البيانات الشخصية والتفاصيل المالية والسجلات الصحية وبيانات الأعمال السرية والمستندات القانونية. وتحذّر من أن التعليمات التي تطلب من النموذج ألا يكشف أمرًا ما قد لا يلتزم بها دائمًا، ويمكن تجاوزها بحقن الأوامر (prompt injection). أما بندها عن [نقاط الضعف في المتجهات والتضمينات](" +
          OWASP_LLM08 +
          ")، الجديد في قائمة 2025 والموجّه إلى أنظمة الاسترجاع، فيوصي بضوابط وصول دقيقة ومخازن تراعي الصلاحيات، مع فصل منطقي صارم في البيانات وصلاحيات الوصول إليها، حتى لا تصل فئة من المستخدمين إلى بيانات فئة أخرى.",
      },
      {
        t: "p",
        text: "**الضابط:** طبّق الصلاحيات في خطوة البحث، قبل أن يرى النموذج أي شيء. يحمل كل مقطع صلاحيات المستند الذي جاء منه، ويُصفّى كل بحث بحسب هوية السائل. فعلى سبيل المثال، تصف [وثائق Microsoft لخدمة Azure AI Search](" +
          AZURE_ACCESS +
          ") تخزين المجموعات المسموح لها برؤية كل مستند داخل الفهرس، وتصفية كل استعلام بحسب المجموعات التي ينتمي إليها المستخدم. اختبر ذلك بحسابات ذات مستويات وصول مختلفة قبل الإطلاق، وأبقِ مجموعات المستندات الحساسة خارج الفهرس إلى أن تُضبط صلاحياتها.",
      },
      { t: "h3", text: "3. إخفاق الاسترجاع" },
      {
        t: "p",
        text: "أحيانًا تكون الإجابة موجودة لكنها لا تصل إلى النموذج أبدًا. فقد وثّق باحثون في جامعة ديكن الأسترالية، بنوا أنظمة RAG في مجالات البحث العلمي والتعليم والطب الحيوي، [سبع نقاط إخفاق](" +
          SEVEN_FAILURES +
          ")، اثنتان منها تبدآن في خطوة البحث. الأولى المحتوى المفقود: المستندات لا تجيب عن السؤال، فيُفترض أن يقول النظام إنه لا يعرف، لكنه قد يُستدرَج إلى الإجابة رغم ذلك. والثانية مستندات لم تبلغ رأس النتائج: الإجابة موجودة في مستند لم يحصل على ترتيب كافٍ ليُمرَّر إلى النموذج. وخلاصتهم عملية: لا يمكن التحقق من نظام RAG تحققًا كاملًا إلا أثناء التشغيل، ومتانته تتطور مع الوقت ولا تُصمَّم كاملة من البداية.",
      },
      {
        t: "p",
        text: "**الضابط:** اختبر البحث وحده قبل أن تحكم على الإجابات، فتحقق لكل سؤال حقيقي هل استُرجع المقطع الصحيح. وابدأ بإصلاح المستندات: عناوين واضحة، وموضوع واحد في كل قسم، وجداول وصفحات ممسوحة ضوئيًا محوّلة إلى نص مقروء، والمصطلحات التي يستخدمها موظفوك وعملاؤك فعلًا، بكل اللغات التي يستخدمونها. فالسؤال المكتوب بالعربية عن سياسة محفوظة بالإنجليزية يجب أن يصل إليها أيضًا.",
      },
      { t: "h3", text: "4. التلفيق: النموذج يملأ الفراغ من عنده" },
      {
        t: "p",
        text: "حتى حين تكون المقاطع الصحيحة بين يديه، قد يقرر النموذج شيئًا لا تقوله المقاطع. ويسمّي [ملف المخاطر الخاص بالذكاء الاصطناعي التوليدي](" +
          NIST_GENAI +
          ") الصادر عن المعهد الوطني الأمريكي للمعايير والتقنية (NIST) هذه الظاهرة «التلفيق» (confabulation): أن يقدّم النظام بثقة محتوى خاطئًا أو غير صحيح، وهو ما يُعرف شائعًا بالهلوسة. ويوضح أن التنبؤ الإحصائي الذي تقوم عليه هذه النماذج قد ينتج مخرجات دقيقة، وقد ينتج أيضًا مخرجات غير دقيقة أو متناقضة داخليًا. والاسترجاع يخفف المشكلة ولا يلغيها. فقد وجدت [دراسة محكّمة من جامعة ستانفورد](" +
          LEGAL_HALLUCINATION +
          ") على أدوات البحث القانوني بالذكاء الاصطناعي من LexisNexis وThomson Reuters، وهي أدوات تسترجع من مصادر قانونية، أن كلًا منها هلوس في ما بين 17% و33% من الحالات. هذا أقل من GPT-4 للاستخدام العام، لكن الباحثين رأوا أن ادعاءات الشركات بخلوّ إجاباتها من الهلوسة مبالغ فيها. وقد عدّت الدراسة الإجابة هلوسةً إذا كانت خاطئة، أو إذا استشهدت بمصدر لا يدعم ما تقوله.",
      },
      {
        t: "p",
        text: "**الضابط:** اشترط مصدرًا في كل إجابة، مع رابط إلى المقطع نفسه لا إلى الملف فقط، وتحقق أثناء الاختبار من أن كل مصدر يدعم فعلًا المعلومة التي بجانبه. ووجّه النظام إلى أن يجيب من المقاطع المسترجعة وحدها، وأن يقول «لا أعرف» حين لا تحتوي الإجابة، ثم اختبر أنه يفعل ذلك بأسئلة لا تجيب عنها المستندات. وحين تكون للإجابة عواقب، كسعر أو شرط قانوني أو أي أمر يمس الصحة أو السلامة، حوّل السؤال إلى موظف.",
      },
      {
        t: "table",
        caption: "أربعة أسباب للإجابات الخاطئة والضابط لكل منها",
        head: ["السبب", "كيف يظهر", "الضابط"],
        rows: [
          [
            "مستندات قديمة أو متعارضة",
            "سعر العام الماضي، أو إحدى سياستين متعارضتين، يُذكر بثقة",
            "مسؤول وتاريخ مراجعة لكل مجموعة مستندات، ومصدر واحد معتمد، وحذف النسخ الملغاة، وعرض التاريخ مع المصدر",
          ],
          [
            "صلاحيات غير مطبّقة",
            "مستخدم يتلقى محتوى من مستند لا يحق له رؤيته",
            "صلاحيات تنتقل إلى الفهرس وتُطبَّق في كل بحث، وتُختبر بحسابات حقيقية",
          ],
          [
            "إخفاق الاسترجاع",
            "«لا أعرف» والإجابة موجودة، أو إجابة مبنية على المقطع الخطأ",
            "اختبار البحث منفصلًا، وإعادة هيكلة المستندات، واستخدام كلمات المستخدمين الفعلية",
          ],
          [
            "التلفيق",
            "إجابة سلسة لا تدعمها المصادر، وأحيانًا مع مصدر لا يسندها",
            "مقطع مذكور مصدرًا في كل إجابة، و«لا أعرف» حين تسكت المصادر، وتحويل الأسئلة الحساسة إلى موظف",
          ],
        ],
      },

      { t: "h2", id: "what-to-prepare", text: "ما الذي تجهّزه قبل بناء نظام معرفة؟" },
      {
        t: "p",
        text: "معظم العمل الذي يحدد الجودة يحدث قبل كتابة أي سطر من الكود، ومعظمه يتعلق بالمستندات والأشخاص.",
      },
      {
        t: "ol",
        items: [
          "**اختر مجموعة مستندات واحدة وجمهورًا واحدًا.** سياسات الموارد البشرية للموظفين، أو وثائق المنتج للعملاء، أو العقود لفريق المالية. والنطاق الضيق في البداية أسهل في التنظيف وضبط الصلاحيات والاختبار.",
          "**اجرد المستندات.** سجّل لكل مستند مكانه وصيغته ومسؤوله وتاريخ آخر مراجعة له ومن يحق له رؤيته. وملفات PDF الممسوحة ضوئيًا والصور تحتاج تحويلًا إلى نص قبل أن يمكن البحث فيها.",
          "**نظّف.** احذف المكرر والنسخ القديمة، وحُلّ التعارضات، وحدّد المستند المعتمد لكل موضوع. وحين تكون الإجابات محفوظة في رؤوس الموظفين فقط، فاكتبها أولًا.",
          "**عيّن مسؤولًا لكل مجموعة.** يوافق المسؤول على ما يدخل الفهرس، ويصلح الأخطاء التي تظهر في المراجعة، ويحدّث المستندات حين يتغير العمل. ومن دون مسؤول، يتقادم النظام وهو ما زال يتحدث بثقة.",
          "**قرّر كيف يبقى محدّثًا.** اربط الفهرس بالنظام الذي تُحفظ فيه المستندات حتى تنتقل التغييرات تلقائيًا، وحدّد دورة مراجعة لكل مجموعة. فتغيير السياسة لا يكتمل حتى يتغير المستند.",
          "**اجمع أسئلة حقيقية.** استخرجها من البريد وتذاكر الدعم وسجلات المحادثات ومن الأشخاص الذين يجيبون عنها اليوم، مع الإجابة الصحيحة ومصدرها لكل سؤال. وأضف الأسئلة الصعبة، وأسئلة لا تجيب عنها المستندات. هذه هي مجموعة الاختبار التي ستقيس بها النظام.",
        ],
      },

      { t: "h2", id: "build-buy-own", text: "هل تبني نظام المعرفة أم تشتريه أم تمتلكه؟" },
      {
        t: "p",
        text: "اشترِ حين تكون مستنداتك في منصة عمل واحدة أو نظام دعم واحد يقدم مساعدًا ذكيًا على محتواه، ويحترم هذا المساعد الصلاحيات التي ضبطتها مسبقًا، وتكون الأسئلة داخلية ومتكررة. فهذا أسرع طريق لتعرف هل سيستخدم الناس الإجابات أصلًا.",
      },
      { t: "p", text: "وابنِ، أو اطلب من جهة متخصصة أن تبني لك، حين يصدق واحد على الأقل مما يلي:" },
      {
        t: "ul",
        items: [
          "المستندات موزعة على عدة أنظمة لا يبحث فيها منتج واحد بشكل جيد.",
          "يجب أن تصل الإجابات إلى الناس حيث هم، كواتساب أو موقعك أو أداة داخلية.",
          "الأسئلة تأتي بأكثر من لغة، كالعربية والإنجليزية، أو باللهجات المحلية.",
          "الصلاحيات خاصة بمؤسستك ويجب تطبيقها بدقة.",
          "تحتاج إلى التحكم في مكان تخزين المستندات والسجلات، وفي النموذج الذي يكتب الإجابات.",
        ],
      },
      {
        t: "p",
        text: "وأيًّا كان طريقك، تأكد من أن المعرفة نفسها تبقى ملكك: المستندات بعد تنظيفها، والفهرس، ومجموعة الاختبار، والتعليمات، والسجلات، بصيغ يمكنك نقلها. وهناك حدّ يبقى قائمًا في الحالتين: المقاطع المسترجعة لكل سؤال تُرسل إلى مزوّد النموذج اللغوي الذي يكتب الإجابة، فهذا المزوّد يجب أن يكون في قائمة الجهات التي تعالج بياناتك، وشروطه في الاحتفاظ بالبيانات والتدريب عليها تحتاج مراجعة. ويتناول دليلنا عن [امتلاك نظام الذكاء الاصطناعي أو استئجاره](/ar/insights/own-your-ai-system) الاستضافة وموقع البيانات وبنود العقد بالتفصيل.",
      },
      { t: "p", text: "وقبل التوقيع مع أي مزوّد، اسأل:" },
      {
        t: "ul",
        items: [
          "أين تُخزَّن المستندات والفهرس وسجلات المحادثات، ومن يستطيع قراءتها؟",
          "هل تُطبَّق الصلاحيات في خطوة البحث لكل مستخدم، وكيف يُختبر ذلك؟",
          "هل تذكر كل إجابة المقطع الذي جاءت منه، وماذا يحدث حين لا تجد المستندات إجابة؟",
          "أي نموذج يكتب الإجابات، وهل يمكن تغييره دون إعادة بناء الفهرس؟",
          "هل يمكننا تصدير المستندات والفهرس ومجموعة الاختبار، وماذا يحدث إذا توقفنا عن الدفع؟",
        ],
      },
      {
        t: "p",
        text: "تصمم Flowramo وتبني أنظمة المعرفة بالذكاء الاصطناعي في صورة مشاريع، إلى جانب وكلاء الذكاء الاصطناعي وأتمتة العمليات والتطبيقات الذكية المخصصة. يُثبَّت كل نظام على استضافة يختارها العميل ويملكها، ويُربط بحسابات العميل نفسه، فتبقى المستندات والفهرس والسجلات لدى الجهة التي تعتمد عليها. اطّلع على [ما نبنيه](/ar/solutions).",
      },

      { t: "h2", id: "measure-a-knowledge-system", text: "كيف تقيس نجاح نظام المعرفة؟" },
      {
        t: "p",
        text: "ابدأ قبل الإطلاق، بمجموعة الاختبار المكوّنة من أسئلة حقيقية. ويقدم إطار [RAGAS](" +
          RAGAS +
          ")، الذي عُرض في مؤتمر EACL 2024، ثلاث زوايا مفيدة: الأمانة للمصدر (faithfulness)، أي هل يمكن استنتاج ما تقوله الإجابة من المقاطع المسترجعة، وصلة الإجابة بالسؤال، أي هل تجيب عمّا سُئل فعلًا، وصلة السياق، أي هل المقاطع المسترجعة مركّزة لا محشوة بنص لا علاقة له بالسؤال. ويمكن لأدوات القياس أن تحسب هذه الدرجات آليًا باستخدام نموذج لغوي، لكن قيّم عينة يدويًا أيضًا، فالمقيّم الآلي قد يخطئ هو الآخر.",
      },
      {
        t: "table",
        caption: "بطاقة قياس لنظام المعرفة بالذكاء الاصطناعي",
        head: ["المقياس", "طريقة الحساب", "ماذا يخبرك"],
        rows: [
          [
            "دقة الإجابات",
            "الإجابات الصحيحة ÷ أسئلة مجموعة الاختبار، مقارنةً بالإجابة المعروفة",
            "هل يمكن الاعتماد عليه",
          ],
          [
            "دعم المصادر",
            "الإجابات التي يدعم مصدرُها المعلومةَ فعلًا ÷ الإجابات التي رُوجعت",
            "هل المصادر المعروضة دليل حقيقي أم مجرد زينة",
          ],
          [
            "إصابة الاسترجاع",
            "الأسئلة التي كان المقطع الصحيح بين نتائجها ÷ الأسئلة ذات المصدر المعروف",
            "هل يبدأ الخلل في البحث أم في الكتابة",
          ],
          [
            "«لا أعرف» في موضعها",
            "الأسئلة غير القابلة للإجابة التي اعتذر عنها النظام ÷ كل الأسئلة غير القابلة للإجابة",
            "هل يعترف بحدود مستنداته",
          ],
          [
            "إجابات فائتة",
            "الأسئلة القابلة للإجابة التي اعتذر عنها ÷ كل الأسئلة القابلة للإجابة",
            "ثغرات في المستندات أو في البحث",
          ],
          [
            "تسرّب الصلاحيات",
            "إجابات تتضمن محتوى فوق مستوى وصول المستخدم، على حسابات اختبار",
            "يجب أن يكون صفرًا قبل الإطلاق",
          ],
          [
            "حداثة المستندات",
            "المستندات التي تجاوزت تاريخ مراجعتها ÷ كل المستندات في الفهرس",
            "هل يواكب المسؤولون التغييرات",
          ],
          [
            "الاستخدام والتحويل",
            "عدد الأسئلة أسبوعيًا، ونسبة ما يُحوَّل إلى موظف، والوقت حتى الإجابة",
            "هل يوفّر الوقت فعلًا",
          ],
        ],
      },
      {
        t: "p",
        text: "واستمر في القياس بعد الإطلاق، فكما خلص فريق جامعة ديكن، لا يمكن التحقق من نظام RAG تحققًا كاملًا إلا أثناء التشغيل: تصل أسئلة جديدة، وتتغير المستندات، وتُحدَّث النماذج. أعد تشغيل مجموعة الاختبار بعد كل تغيير في هيكلة المستندات أو إعدادات البحث أو التعليمات أو النموذج، وأضف إليها الأسئلة التي أخطأ فيها النظام، وراجع عينة من المحادثات الحقيقية كل أسبوع مع مسؤولي المستندات.",
      },

      { t: "cta" },

      { t: "h2", id: "example-lina", text: "مثال: لينا تجيب من المعرفة التي اعتمدتها العيادة فقط" },
      {
        t: "p",
        text: "[لينا](/ar/products/lina)، موظفة الاستقبال الذكية التي بنيناها لعيادات الأسنان على واتساب وموقع العيادة، قائمة على الفكرة نفسها في مهمة محددة. فهي تجيب المرضى من المعرفة التي اعتمدتها العيادة فقط، وتسترجع منها في كل محادثة، ولا تشخّص. والأسئلة العاجلة والسريرية والحساسة تذهب إلى فريق العيادة مع المحادثة كاملة، فلا يضطر المريض إلى إعادة قصته من البداية. وتعمل على استضافة تختارها العيادة وتملكها، مربوطة بحسابات العيادة نفسها.",
      },
      {
        t: "p",
        text: "ونظام المعرفة لمستندات شركتك يتبع النمط نفسه مع جمهور مختلف: مصادر معتمدة، وإجابات بمصادرها، وصلاحيات، ومسؤول عن المحتوى، وطريق واضح إلى موظف. وإن كنت تفكر في نظام كهذا، [أخبرنا بالأسئلة التي يجب أن يجيب عنها](/ar/contact).",
      },
    ],
    faq: [
      {
        q: "ما التوليد المعزّز بالاسترجاع (RAG) بعبارة بسيطة؟",
        a: "هو طريقة تجعل النموذج اللغوي يجيب من مستندات محددة. فمع كل سؤال، تسترجع خطوة البحث أقرب المقاطع صلة به من مستنداتك، ثم يكتب النموذج الإجابة من تلك المقاطع ويذكرها مصدرًا. وقد قُدّمت التقنية في ورقة بحثية نشرها لويس وزملاؤه عام 2020 في مؤتمر NeurIPS. وتُحدَّث معرفة النظام بتحديث المستندات، دون إعادة تدريب.",
      },
      {
        q: "هل نظام المعرفة هو نفسه تدريب ChatGPT على مستنداتي؟",
        a: "لا. التدريب يخزّن المعرفة داخل النموذج، حيث يصعب تحديثها ويصعب ربطها بمصدر. أما نظام المعرفة فيترك النموذج كما هو ويرجع إلى مستنداتك لحظة كل سؤال، فتستطيع الإجابات أن تذكر مصدرها وأن تتغير فور تغيّر المستند. لكن المقاطع المسترجعة تُرسل إلى مزوّد النموذج، فراجع شروطه في التعامل مع البيانات.",
      },
      {
        q: "هل يستطيع نظام المعرفة أن يمنع الهلوسة تمامًا؟",
        a: "لا. الاسترجاع يخفف التلفيق ولا يلغيه: ففي دراسة محكّمة من جامعة ستانفورد، هلوست أدوات بحث قانوني تسترجع من مصادر قانونية في 17% إلى 33% من الحالات. اشترط مقطعًا مذكورًا مصدرًا في كل إجابة، واجعل النظام يقول «لا أعرف» حين تسكت مصادره، واختبره على أسئلة حقيقية قبل الإطلاق، وحوّل الأسئلة ذات العواقب إلى موظف.",
      },
      {
        q: "كيف أمنع الموظفين من رؤية مستندات لا يحق لهم رؤيتها؟",
        a: "طبّق الصلاحيات في خطوة البحث، لا في تعليمات النموذج التي تحذّر OWASP من إمكانية تجاوزها. يجب أن يحمل كل مقطع مفهرس صلاحيات المستند الذي جاء منه، وأن يُصفّى كل بحث بحسب هوية السائل، فلا يصل المحتوى المقيّد إلى النموذج أصلًا. واختبر ذلك بحسابات ذات مستويات وصول مختلفة قبل الإطلاق.",
      },
      {
        q: "بأي مستندات نبدأ؟",
        a: "ابدأ بمجموعة واحدة تجيب عن أسئلة متكررة لجمهور واحد، ولها مسؤول واضح، ومعظمها محدّث: سياسات الموارد البشرية وإجراءاتها للموظفين، أو وثائق المنتجات والخدمات للعملاء. نظّفها أولًا بحذف النسخ القديمة وحل التعارضات وكتابة الإجابات المحفوظة في رؤوس الموظفين فقط. ثم أضف مجموعات أخرى حين تنجح الأولى في اختباراتها.",
      },
      {
        q: "كيف نُبقي الإجابات محدّثة؟",
        a: "أبقِ المستندات محدّثة، لأن النظام يجيب بما تقوله. عيّن لكل مجموعة مستندات مسؤولًا وتاريخ مراجعة، واربط الفهرس بالنظام الذي تُحفظ فيه المستندات حتى تنتقل التغييرات تلقائيًا، واحذف النسخ الملغاة. ففي الورقة الأصلية لتقنية RAG، أدى استخدام فهرس من السنة الخطأ إلى هبوط الإجابات الصحيحة عن قادة العالم إلى ما بين 4% و12%.",
      },
      {
        q: "كيف نعرف أن نظام المعرفة يعمل فعلًا؟",
        a: "ابنِ قبل الإطلاق مجموعة اختبار من أسئلة حقيقية معروفة الإجابات والمصادر. وتابع دقة الإجابات، وهل تدعم المصادرُ ما تقوله الإجابات، وهل استُرجع المقطع الصحيح، وكم مرة قال النظام «لا أعرف» في موضعها، وأي تسرّب للصلاحيات على حسابات الاختبار، ونسبة الأسئلة المحوّلة إلى موظف. وأعد تشغيل الاختبار بعد كل تغيير، وراجع المحادثات الحقيقية أسبوعيًا.",
      },
    ],
    sources,
    keywords: [
      "نظام معرفة بالذكاء الاصطناعي",
      "التوليد المعزز بالاسترجاع",
      "ما هو RAG",
      "الذكاء الاصطناعي لمستندات الشركة",
      "قاعدة معرفة ذكية للشركات",
      "البحث في مستندات الشركة بالذكاء الاصطناعي",
      "هلوسة الذكاء الاصطناعي",
      "صلاحيات الوصول في أنظمة RAG",
      "تقييم أنظمة RAG",
    ],
    minutes: 12,
  },
};

export default article;
