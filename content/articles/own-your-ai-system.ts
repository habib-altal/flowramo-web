import type { Article } from "./types";

const article: Article = {
  slug: "own-your-ai-system",
  published: "2026-10-14",
  updated: "2026-10-14",
  related: ["how-to-scope-an-ai-project", "ai-agents-for-business"],
  topic: "studio",

  en: {
    title: "Owning vs renting an AI system: hosting, data and vendor lock-in",
    seoTitle: "Own or Rent Your AI System? Hosting, Data and Lock-in",
    description:
      "Own or rent your AI system? Where your data goes, what UAE, Saudi, Turkish and EU law says, how lock-in builds up, the real costs and a contract checklist.",
    answer:
      "Renting an AI tool means the vendor runs the software, holds your data and sets the terms while you pay. Owning means the code, hosting, accounts, prompts, knowledge base and data are in your name, so you can change suppliers without starting over. Rent for standard, low-risk tasks; own systems that are core, sensitive or deeply integrated.",
    takeaways: [
      "Owning an AI system means six things sit in your name: the code, the hosting, the accounts, the data, the prompts and the knowledge base. The language model itself is usually still rented through an API.",
      "Hosting abroad does not take you outside local law: SDAIA's own guide says Saudi residents' data hosted in the USA is still regulated by the Saudi PDPL.",
      "In the UAE, health data tied to services provided in the country may not be stored or processed abroad unless the health authority allows it, and must be kept for at least 25 years.",
      "Lock-in is measurable: the UK competition regulator found that fewer than 1% of cloud customers switch provider each year, held back by egress fees and technical barriers.",
      "Before you sign, ask for the source code, admin access to every account, a documented data export and handover documentation. Rent for standard tasks; own the systems at the core of your operations.",
    ],
    blocks: [
      {
        t: "p",
        text: "Picture a business that signed up for an AI chat tool two years ago. It works, and now the owner wants to change supplier. The conversation history sits in the vendor's database. The WhatsApp number was connected through the vendor's business account. The prompts the team spent months refining live in a dashboard with no export button. Leaving means rebuilding from scratch.",
      },
      {
        t: "p",
        text: "That is what renting an AI system looks like on the day you want to leave. This guide explains what owning one actually covers, where your data travels, what data-protection law in the UAE, Saudi Arabia, Türkiye and the EU says at a high level, how lock-in builds up and what each option really costs. Renting is sometimes the better choice, and we say when. If you are still working out what an AI agent could do for your business, start with our guide to [AI agents for business](/en/insights/ai-agents-for-business).",
      },

      { t: "h2", id: "rent-vs-own", text: "What is the difference between renting and owning an AI system?" },
      {
        t: "p",
        text: "Renting usually means software as a service (SaaS). The US standards body NIST defines SaaS as using a provider's applications on the provider's infrastructure, where the customer [does not manage or control the underlying infrastructure, or even individual application capabilities](https://csrc.nist.gov/pubs/sp/800/145/final), apart from limited user settings. You pay per seat, per month or per conversation, and the vendor decides how the product works, where it runs and what it will cost next year.",
      },
      {
        t: "p",
        text: "Owning means the system is built for you and the parts that matter are in your name. An AI system has six of them:",
      },
      {
        t: "table",
        caption: "Six layers of an AI system, and who holds each one",
        head: ["Layer", "Rented (SaaS)", "Owned"],
        rows: [
          [
            "Code and workflows",
            "The vendor's product; you configure it",
            "Delivered to you, with the right to change it and move it",
          ],
          [
            "Hosting",
            "The vendor's cloud, in a region the vendor picks",
            "A server or cloud account you choose and pay directly",
          ],
          [
            "Accounts (WhatsApp, email, calendar, model API keys)",
            "Often registered by the vendor",
            "Registered to your business, with you as the admin",
          ],
          [
            "Data (conversations, customer records, logs)",
            "Stored in the vendor's database",
            "Stored in your database",
          ],
          ["Prompts and agent instructions", "Part of the vendor's product", "Documented and handed over"],
          ["Knowledge base", "Uploaded into the vendor's tool", "Kept in a format you can reuse elsewhere"],
        ],
      },
      {
        t: "p",
        text: "One part is usually rented either way: the language model. Most business AI systems call a model such as GPT, Claude or Gemini through an API and pay per use. Owning the system means the API account is yours and you can change models. The model itself still belongs to its provider.",
      },
      {
        t: "p",
        text: "Some teams run an open-weight model on their own servers so prompts never leave their infrastructure. That swaps a per-use bill for GPU hosting and upkeep, and it usually makes sense only at high volume or under strict data rules.",
      },

      { t: "h2", id: "where-data-goes", text: "Where does your data go when an AI system handles a conversation?" },
      {
        t: "p",
        text: "Follow one customer message. It arrives on a channel, reaches the server that runs your workflows, is stored in a database and is sent with the relevant context to a model provider's API, which returns the reply. Each hop is a company that sees some of the data, and each needs a contract and a location you know:",
      },
      {
        t: "ul",
        items: [
          "**The channel.** WhatsApp, your email provider or a website chat service carries the message under its own terms.",
          "**The application and database.** In a rented tool these are the vendor's servers. In an owned system they are the hosting you chose.",
          "**The model provider.** Your prompts, the customer's message and any documents retrieved from your knowledge base travel to the model's API.",
        ],
      },
      {
        t: "p",
        text: "Model providers publish what they do with that data, and the details matter. OpenAI's [data controls documentation](https://developers.openai.com/api/docs/guides/your-data), for example, lists no training use of API data, but keeps abuse-monitoring logs for up to 30 days on common endpoints such as Responses and Chat Completions unless the customer is approved for reduced retention. The same page offers regional data residency, including a UAE region that needs additional approval, charges a 10% uplift for eligible models released from 5 March 2026, and notes that system data such as account and billing details may still be processed outside the chosen region.",
      },
      {
        t: "p",
        text: "Owning your hosting puts the database and logs under your control. The message still passes through the channel and the model provider, so the real gain is a complete map: you know each party, where it stores data and which settings apply, and you can change any of them.",
      },

      {
        t: "h2",
        id: "what-the-law-says",
        text: "What do data-protection laws in the UAE, Saudi Arabia, Türkiye and the EU say?",
      },
      {
        t: "callout",
        title: "General information, not legal advice",
        text: "This section summarises the primary legal texts at a high level as of October 2026. Laws, implementing regulations and regulators' decisions change, and how they apply depends on your sector and circumstances. Ask a qualified lawyer in your jurisdiction before you decide where to host personal data.",
      },
      {
        t: "p",
        text: "Three points recur across all four regimes. The law follows the people whose data you process, wherever the server sits. Health data gets stricter treatment. And your business stays responsible when a vendor processes data on its behalf.",
      },
      { t: "h3", text: "United Arab Emirates" },
      {
        t: "p",
        text: "[Federal Decree-Law No. 45 of 2021](https://uaelegislation.gov.ae/en/legislations/1972) on the Protection of Personal Data applies to people who live or have a place of business in the UAE, to controllers and processors in the UAE, and to controllers and processors abroad that process data of people in the UAE. Articles 22 and 23 allow transfers abroad in set cases: to countries with adequate data-protection legislation, under a contract that binds the recipient to the decree-law's standards, or with the person's explicit consent. Article 14 gives people the right to receive the data they provided in an organised, machine-readable form.",
      },
      {
        t: "p",
        text: "Health data has its own law. The decree-law excludes health data covered by its own legislation, and [Federal Law No. 2 of 2019](https://uaelegislation.gov.ae/en/legislations/1209) on information and communication technology in health fields says health data related to health services provided in the UAE may not be stored or processed outside the country unless the health authority, in coordination with the Ministry, issues a decision allowing it. The same law requires health data to be kept for at least 25 years from the person's last health procedure, which makes a complete export from any vendor a practical necessity. Businesses in the DIFC and ADGM financial free zones follow those zones' own data-protection laws.",
      },
      { t: "h3", text: "Saudi Arabia" },
      {
        t: "p",
        text: "The [Personal Data Protection Law](https://sdaia.gov.sa/en/SDAIA/about/Documents/Personal%20Data%20English%20V2-23April2023-%20Reviewed-.pdf), with the Saudi Data and AI Authority (SDAIA) as regulator, covers processing in the Kingdom and processing of residents' data by any party, including one abroad. SDAIA's [guide to the law](https://dgp.sdaia.gov.sa/wps/wcm/connect/f579bc32-fda8-47bd-bc6f-66b8cb77985c/ENG-Guide+to+the+saudi+PDP+law+for+controllersprocessors.pdf?MOD=AJPERES) gives the example of residents' data hosted in the USA: the PDPL still governs it. Article 29 allows transfers outside the Kingdom for set purposes, provided they do not prejudice national security or the Kingdom's vital interests, the destination offers adequate protection and only the minimum data needed is sent. Health data is classed as sensitive, and Article 4 gives people the right to a copy of their data in a readable, clear format and to ask for its destruction once it is no longer needed.",
      },
      { t: "h3", text: "Türkiye" },
      {
        t: "p",
        text: "[Law No. 6698 on the Protection of Personal Data](https://www.kvkk.gov.tr/Icerik/6649/Personal-Data-Protection-Law) (KVKK) lists health data among the special categories that need stricter conditions. Article 12 makes the data controller jointly responsible, with any company processing data on its behalf, for security measures, so hiring a vendor does not transfer the duty. [Amendments in force since 1 June 2024](https://www.kvkk.gov.tr/Icerik/7834/6698-Sayili-Kisisel-Verilerin-Korunmasi-Kanununda-Yapilan-Degisiklikler-Hakkinda-Kamuoyu-Duyurusu) rewrote the rules on transfers abroad: they now rely on adequacy decisions or safeguards such as the Board's standard contracts, which must be notified to the Authority within five business days of signing.",
      },
      { t: "h3", text: "European Union" },
      {
        t: "p",
        text: "The [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng) can reach businesses outside Europe. Under Article 3(2), a business outside the EU that offers goods or services to people in the EU falls within its scope, so a clinic in Istanbul or Dubai that actively markets treatment to patients in Europe should check whether it applies. Article 28 requires every processor contract to say that, at the end of the service, the processor deletes or returns all personal data at the controller's choice. Article 20 gives people the right to receive their data in a structured, commonly used and machine-readable format.",
      },
      {
        t: "p",
        text: "Read together, these texts ask the same things of anyone choosing an AI system: know where every copy of the data sits, hold a contract with each processor, and be able to give people their data, correct it or delete it. All three are easier when the database is yours.",
      },

      { t: "h2", id: "vendor-lock-in", text: "How does vendor lock-in happen with AI tools?" },
      {
        t: "p",
        text: "Lock-in rarely comes from one clause. It builds up as the cost of leaving grows. In its [cloud services market investigation](https://assets.publishing.service.gov.uk/media/688b20e6ff8c05468cb7b120/summary_of_final_decision.pdf), the UK Competition and Markets Authority found that fewer than 1% of cloud customers switch provider each year and that many believe the costs of switching outweigh the benefits. It named data transfer (egress) fees and technical differences between providers as the main barriers, with egress fees weighing most on smaller customers.",
      },
      { t: "p", text: "AI tools add layers of their own:" },
      {
        t: "ul",
        items: [
          "**Data.** Conversation history, customer records and logs live in the vendor's database, and the export, where one exists, may leave out the parts you need.",
          "**Logic.** Prompts, agent instructions and workflow rules that took months to tune exist only inside the vendor's dashboard.",
          "**Accounts.** When the WhatsApp number, email domain or model API key is registered to the vendor, leaving means migrating it or opening a new one.",
          "**Knowledge.** Your price lists, policies and answers to common questions were reshaped into the vendor's format.",
          "**Integrations.** Connections to your calendar, CRM or accounting software run through the vendor's own connectors.",
        ],
      },
      {
        t: "p",
        text: "Regulators are starting to push the other way. The EU [Data Act](https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained), which has applied since 12 September 2025, requires cloud and SaaS providers to support switching, including exporting data in a commonly used, machine-readable format, and removes switching charges, including data egress fees, from 12 January 2027. It covers services offered in the EU. Elsewhere, your protection is whatever your contract says.",
      },

      { t: "h2", id: "real-costs", text: "What does each option really cost?" },
      {
        t: "p",
        text: "Comparisons usually set a monthly fee against a project quote. A fair comparison counts every line over the same period, three years for example:",
      },
      {
        t: "table",
        caption: "Cost lines to compare over the same period",
        head: ["Cost line", "Renting (SaaS)", "Owning"],
        rows: [
          [
            "Setup",
            "Low: sign up and configure; some plans charge for onboarding",
            "Higher: discovery, build, integration and testing, paid up front or by milestone",
          ],
          [
            "Subscription or licence",
            "Per seat, per conversation or per month, and it can rise at renewal",
            "None for the system itself; you may still pay for tools it uses",
          ],
          ["Hosting", "Included in the fee", "Paid by you, directly to the hosting provider"],
          [
            "Model usage",
            "Included, often with usage limits or overage charges",
            "Billed to your own account by the model provider, per million tokens",
          ],
          [
            "Maintenance",
            "Included: the vendor fixes and updates the product",
            "Your team or a support agreement: updates, monitoring, prompt and integration changes",
          ],
          [
            "Leaving",
            "Export work, migration, lost history and retraining staff",
            "Low when code, data and documentation are already in hand",
          ],
        ],
      },
      {
        t: "p",
        text: "Model usage deserves a closer look. Providers bill per million input and output tokens, and on one provider's [current price list](https://developers.openai.com/api/docs/pricing) the most capable model costs about a hundred times more per token than the smallest. Matching the model to each step of the workflow is worth testing before launch, because a routine step such as sorting messages rarely needs the largest model.",
      },
      {
        t: "p",
        text: "Maintenance is the line most often missed on the ownership side. An owned system needs someone to apply updates, watch for errors and adjust prompts when your services or prices change. Budget for it from day one, in-house or as a support agreement.",
      },

      { t: "h2", id: "when-renting-wins", text: "When is renting a SaaS AI tool the better choice?" },
      {
        t: "p",
        text: "Often. A rented tool is the sensible default for tasks that look the same in every business, such as meeting notes or writing help, and for testing whether AI helps at all before you invest in a build. Use these questions to decide each system on its own merits:",
      },
      {
        t: "table",
        caption: "Rent or own: a decision checklist",
        head: ["Question", "Lean to renting if", "Lean to owning if"],
        rows: [
          [
            "How central is the task?",
            "It is a side task that looks the same in every business",
            "It shapes how you serve or win customers",
          ],
          [
            "How sensitive is the data?",
            "Low-risk, and the vendor's terms and hosting region fit your obligations",
            "Health, financial or other special-category data",
          ],
          [
            "How much integration does it need?",
            "It works on its own or with standard connectors",
            "It must work with your calendar, CRM, booking or internal tools",
          ],
          [
            "How specific is the logic?",
            "Generic workflows are good enough",
            "Your rules, prices, tone and hand-offs are part of what you sell",
          ],
          [
            "Who will maintain it?",
            "Nobody in-house, and the vendor's roadmap suits you",
            "Your team or a partner can maintain it",
          ],
          ["How long will you use it?", "A trial or a short project", "Several years"],
        ],
      },
      {
        t: "p",
        text: "Many businesses do both: they rent general-purpose tools and own the few systems that run their core operations.",
      },

      { t: "h2", id: "contract-checklist", text: "What should an AI system contract include?" },
      {
        t: "p",
        text: "Whether you rent a tool or commission a build, exit terms are easiest to agree before you sign. Ask for these in writing:",
      },
      {
        t: "table",
        caption: "AI system contract checklist",
        head: ["Ask for", "What good looks like", "Red flag"],
        rows: [
          [
            "Source code and rights",
            "Code, workflows and prompts delivered to you with the right to change and move them; code escrow for a rented product",
            "“The configuration is our intellectual property”",
          ],
          [
            "Admin access to every account",
            "Hosting, database, channel accounts, domain and model API keys registered to your business, with you as owner",
            "Accounts under the vendor's name or a staff member's personal email",
          ],
          [
            "Data export",
            "A documented, complete export in a common machine-readable format (CSV, JSON or a database dump), on request and at exit",
            "“Export on request” with no format, scope or fee stated",
          ],
          [
            "Documentation",
            "Architecture overview, setup guide, inventory of prompts and knowledge sources, and a runbook for common failures",
            "“Our team handles that”",
          ],
          [
            "Data location and sub-processors",
            "A named hosting region and a list of every sub-processor, including the model provider",
            "“Global infrastructure” with no list",
          ],
          [
            "Deletion at the end",
            "Return or deletion of all personal data at your choice, confirmed in writing",
            "Silence on what happens to data after the contract ends",
          ],
          [
            "Exit assistance",
            "A defined handover period and rate for helping you move",
            "No exit clause at all",
          ],
          [
            "Security and incidents",
            "Who is responsible for which security measures, and how fast you are told about a breach",
            "Responsibilities left vague",
          ],
        ],
      },
      {
        t: "p",
        text: "Two rows echo the law: GDPR Article 28 already requires processor contracts to cover the return or deletion of data, and KVKK Article 12 keeps you jointly responsible for your processor's security measures. Test the export once in the first month, while everyone still remembers how the system was set up. If a vendor resists any row, ask why before you sign. Our guide on [how to scope an AI project](/en/insights/how-to-scope-an-ai-project) shows how to write these terms into the brief from the start.",
      },

      { t: "cta" },

      { t: "h2", id: "flowramo-approach", text: "How Flowramo builds systems you own" },
      {
        t: "p",
        text: "Flowramo designs and builds AI agents, business automation, custom AI applications and knowledge systems, and sells them as projects rather than subscriptions. Each system is installed on hosting the client chooses and owns, connected to the client's own accounts, so the database, workflows and accounts stay with the business that relies on them. Our [solutions](/en/solutions) page shows the kinds of systems we build.",
      },
      {
        t: "p",
        text: "[Lina](/en/products/lina), the AI WhatsApp receptionist we built for dental clinics, is one example. She runs on hosting the clinic owns, connected to the clinic's own WhatsApp and calendar, and patient records stay on the clinic's infrastructure. As with any system of this kind, each message still passes through WhatsApp and the AI model provider, so both belong on the clinic's list of processors. If you are weighing a system of your own, [tell us what it needs to do](/en/contact).",
      },
    ],
    faq: [
      {
        q: "What does it mean to own an AI system?",
        a: "It means the parts that make the system work are in your name: the code and workflows, the hosting account, the channel and API accounts, the database, the prompts and the knowledge base, plus documentation that lets another team run it. The language model is usually still used through a provider's API, but the API account is yours and you can switch models.",
      },
      {
        q: "Is it safe to send customer data to an AI model API?",
        a: "It can be, once you have checked the provider's terms and settings against your own legal duties. OpenAI's API documentation, for example, lists no training use of API data but keeps abuse-monitoring logs for up to 30 days on common endpoints unless a customer is approved for reduced retention. Send only the data each task needs, list the provider as a processor and confirm where it processes data.",
      },
      {
        q: "Where should a business in the UAE or Saudi Arabia host its AI system?",
        a: "Where your legal advice says the data may sit, which is why choosing the hosting yourself matters. In the UAE, health data tied to services provided in the country may not be stored or processed abroad without a decision from the health authority. In Saudi Arabia, the PDPL still applies to residents' data hosted abroad, and transfers outside the Kingdom must meet the conditions of Article 29. This is general information, not legal advice.",
      },
      {
        q: "How do I avoid vendor lock-in with an AI tool?",
        a: "Agree the exit before you sign. Ask for the source code or an escrow arrangement, admin access to every account in your company's name, a documented export of all data in a common format, handover documentation and a defined exit-assistance period. Run a test export early. A vendor that resists these terms is showing you how hard leaving will be.",
      },
      {
        q: "Is owning an AI system more expensive than a subscription?",
        a: "Up front, usually yes, because a build costs more than signing up. Over several years it depends on the number of users, message volume and how much you customise. Compare every cost line over the same period: setup, subscription, hosting, model usage, maintenance and the cost of leaving. Owning tends to pay off for core, high-volume or deeply integrated systems; renting suits standard tasks.",
      },
      {
        q: "What happens to my data when I cancel an AI subscription?",
        a: "That depends on your contract, so read the termination and data clauses before you cancel. Under the GDPR, processor contracts must say that the processor deletes or returns all personal data at the end of the service, at the controller's choice. Take a full export first, ask how long backups are kept and get written confirmation once the data is deleted.",
      },
    ],
    sources: [
      {
        label: "UAE Legislation — Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data",
        url: "https://uaelegislation.gov.ae/en/legislations/1972",
      },
      {
        label:
          "UAE Legislation — Federal Law No. 2 of 2019 on the Use of Information and Communication Technology in Health Fields",
        url: "https://uaelegislation.gov.ae/en/legislations/1209",
      },
      {
        label: "SDAIA — Personal Data Protection Law, official English translation (2023)",
        url: "https://sdaia.gov.sa/en/SDAIA/about/Documents/Personal%20Data%20English%20V2-23April2023-%20Reviewed-.pdf",
      },
      {
        label: "SDAIA — Guide to the Saudi Personal Data Protection Law for controllers and processors",
        url: "https://dgp.sdaia.gov.sa/wps/wcm/connect/f579bc32-fda8-47bd-bc6f-66b8cb77985c/ENG-Guide+to+the+saudi+PDP+law+for+controllersprocessors.pdf?MOD=AJPERES",
      },
      {
        label: "KVKK — Law No. 6698 on the Protection of Personal Data",
        url: "https://www.kvkk.gov.tr/Icerik/6649/Personal-Data-Protection-Law",
      },
      {
        label: "KVKK — Public announcement on the 2024 amendments to Law No. 6698 (in Turkish)",
        url: "https://www.kvkk.gov.tr/Icerik/7834/6698-Sayili-Kisisel-Verilerin-Korunmasi-Kanununda-Yapilan-Degisiklikler-Hakkinda-Kamuoyu-Duyurusu",
      },
      {
        label: "EUR-Lex — Regulation (EU) 2016/679, General Data Protection Regulation",
        url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng",
      },
      {
        label: "European Commission — Data Act explained",
        url: "https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained",
      },
      {
        label: "UK Competition and Markets Authority — Cloud services market investigation: summary of final decision (2025)",
        url: "https://assets.publishing.service.gov.uk/media/688b20e6ff8c05468cb7b120/summary_of_final_decision.pdf",
      },
      {
        label: "NIST — SP 800-145, The NIST Definition of Cloud Computing (2011)",
        url: "https://csrc.nist.gov/pubs/sp/800/145/final",
      },
      {
        label: "OpenAI — Data controls in the OpenAI platform (2026)",
        url: "https://developers.openai.com/api/docs/guides/your-data",
      },
      { label: "OpenAI — API pricing (2026)", url: "https://developers.openai.com/api/docs/pricing" },
    ],
    keywords: [
      "own vs rent ai system",
      "ai vendor lock-in",
      "who owns my data in an ai tool",
      "self-hosted ai system for business",
      "custom ai system vs saas",
      "ai system contract checklist",
      "uae pdpl ai hosting",
      "saudi pdpl data hosting",
      "kvkk ai data transfer",
    ],
    minutes: 11,
  },

  ar: {
    title: "هل تمتلك نظام الذكاء الاصطناعي أم تستأجره؟ الاستضافة والبيانات والارتباط بمزوّد واحد",
    seoTitle: "امتلاك نظام الذكاء الاصطناعي أم استئجاره؟",
    description:
      "هل تمتلك نظام الذكاء الاصطناعي أم تستأجره؟ أين تذهب بياناتك، وما تقوله قوانين الإمارات والسعودية وتركيا وأوروبا، والتكلفة الحقيقية، وقائمة بنود العقد.",
    answer:
      "استئجار أداة ذكاء اصطناعي يعني أن المزوّد يشغّل البرنامج ويحتفظ ببياناتك ويضع الشروط ما دمت تدفع. أما امتلاك النظام فيعني أن الكود والاستضافة والحسابات والتعليمات وقاعدة المعرفة والبيانات مسجّلة باسمك، فتستطيع تغيير المزوّد دون أن تبدأ من الصفر. استأجر للمهام العامة قليلة المخاطر، وامتلك الأنظمة الأساسية أو الحساسة أو المرتبطة بعمق بأنظمتك.",
    takeaways: [
      "امتلاك نظام الذكاء الاصطناعي يعني أن ستة أشياء مسجّلة باسمك: الكود، والاستضافة، والحسابات، والبيانات، والتعليمات، وقاعدة المعرفة. أما النموذج اللغوي نفسه فيبقى غالبًا مستأجرًا عبر واجهة API.",
      "الاستضافة في الخارج لا تُخرجك من نطاق القانون المحلي: دليل سدايا نفسه يذكر أن بيانات المقيمين في المملكة المستضافة في الولايات المتحدة تبقى خاضعة لنظام حماية البيانات الشخصية.",
      "في الإمارات، لا يجوز تخزين البيانات الصحية المتعلقة بخدمات مقدَّمة داخل الدولة أو معالجتها خارجها إلا بقرار من الجهة الصحية، ويجب حفظها 25 سنة على الأقل.",
      "الارتباط بمزوّد واحد ظاهرة يمكن قياسها: وجدت هيئة المنافسة البريطانية أن أقل من 1% من عملاء الخدمات السحابية يغيّرون مزوّدهم كل عام، بسبب رسوم نقل البيانات والعوائق التقنية.",
      "قبل التوقيع، اطلب الكود المصدري، وصلاحية المدير على كل حساب، وتصديرًا موثّقًا للبيانات، ووثائق التسليم. استأجر للمهام العامة، وامتلك الأنظمة التي يقوم عليها عملك.",
    ],
    blocks: [
      {
        t: "p",
        text: "تخيّل شركة اشتركت قبل سنتين في أداة محادثة تعمل بالذكاء الاصطناعي. الأداة تؤدي عملها، لكن صاحب الشركة يريد الآن تغيير المزوّد. سجل المحادثات محفوظ في قاعدة بيانات المزوّد، ورقم الواتساب مربوط عبر حساب الأعمال الخاص به، والتعليمات التي قضى الفريق شهورًا في ضبطها موجودة داخل لوحة تحكم لا تتيح التصدير. المغادرة تعني البناء من جديد.",
      },
      {
        t: "p",
        text: "هكذا يبدو استئجار نظام الذكاء الاصطناعي يوم تقرر المغادرة. في هذا الدليل نشرح ما الذي يشمله امتلاك النظام فعلًا، وأين تنتقل بياناتك، وما الذي تقوله قوانين حماية البيانات في الإمارات والسعودية وتركيا والاتحاد الأوروبي بصورة عامة، وكيف يتكوّن الارتباط بمزوّد واحد، وكم يكلّف كل خيار. وفي حالات كثيرة يكون الاستئجار هو الخيار الأصح، وسنوضح متى. وإن كنت ما زلت تستكشف ما يمكن أن يقدمه وكيل ذكاء اصطناعي لعملك، فابدأ بدليلنا عن [وكلاء الذكاء الاصطناعي للشركات](/ar/insights/ai-agents-for-business).",
      },

      { t: "h2", id: "rent-vs-own", text: "ما الفرق بين امتلاك نظام الذكاء الاصطناعي واستئجاره؟" },
      {
        t: "p",
        text: "الاستئجار يعني في الغالب نموذج «البرمجيات كخدمة» (SaaS). ويعرّفه المعهد الوطني الأمريكي للمعايير والتقنية (NIST) بأنه استخدام تطبيقات المزوّد العاملة على بنيته التحتية، بحيث [لا يدير العميل البنية التحتية ولا يتحكم فيها، ولا حتى في قدرات التطبيق نفسه](https://csrc.nist.gov/pubs/sp/800/145/final)، باستثناء إعدادات محدودة خاصة بالمستخدم. تدفع لكل مستخدم أو لكل شهر أو لكل محادثة، والمزوّد هو من يقرر كيف يعمل المنتج، وأين يعمل، وكم سيكلّفك في السنة القادمة.",
      },
      {
        t: "p",
        text: "أما الامتلاك فيعني أن النظام يُبنى لك، وأن الأجزاء المهمة فيه مسجّلة باسمك. وفي كل نظام ذكاء اصطناعي ست طبقات:",
      },
      {
        t: "table",
        caption: "ست طبقات في نظام الذكاء الاصطناعي، ومن يملك كل واحدة",
        head: ["الطبقة", "مستأجرة (SaaS)", "مملوكة"],
        rows: [
          ["الكود وسير العمل", "منتج المزوّد، وأنت تضبط إعداداته", "يُسلَّم لك مع حق تعديله ونقله"],
          ["الاستضافة", "سحابة المزوّد، في منطقة يختارها هو", "خادم أو حساب سحابي تختاره وتدفع له مباشرة"],
          [
            "الحسابات (واتساب، البريد، التقويم، مفاتيح API للنموذج)",
            "يسجّلها المزوّد في كثير من الأحيان",
            "مسجّلة باسم شركتك، وأنت مديرها",
          ],
          ["البيانات (المحادثات، سجلات العملاء، السجلات التقنية)", "في قاعدة بيانات المزوّد", "في قاعدة بياناتك"],
          ["التعليمات (البرومبت) وإرشادات الوكيل", "جزء من منتج المزوّد", "موثّقة ومسلّمة لك"],
          ["قاعدة المعرفة", "مرفوعة داخل أداة المزوّد", "محفوظة بصيغة يمكنك استخدامها في أي مكان آخر"],
        ],
      },
      {
        t: "p",
        text: "وهناك جزء يبقى مستأجرًا في الحالتين غالبًا: النموذج اللغوي. معظم أنظمة الذكاء الاصطناعي في الشركات تستدعي نموذجًا مثل GPT أو Claude أو Gemini عبر واجهة برمجية (API) وتدفع حسب الاستخدام. امتلاكك للنظام يعني أن حساب الواجهة باسمك وأنك تستطيع تغيير النموذج متى شئت، أما النموذج نفسه فيبقى ملكًا لمزوّده.",
      },
      {
        t: "p",
        text: "بعض الفرق تشغّل نموذجًا مفتوح الأوزان على خوادمها حتى لا تغادر التعليمات بنيتها التحتية أبدًا. هذا يستبدل فاتورة الاستخدام بتكلفة خوادم المعالجات الرسومية (GPU) وصيانتها، ويكون منطقيًا عادةً عند حجم استخدام كبير أو اشتراطات صارمة على البيانات.",
      },

      { t: "h2", id: "where-data-goes", text: "أين تذهب بياناتك حين يتولى نظام ذكاء اصطناعي محادثة؟" },
      {
        t: "p",
        text: "تتبّع رسالة واحدة من عميل. تصل عبر قناة، ثم إلى الخادم الذي يشغّل سير العمل، فتُحفظ في قاعدة بيانات، ثم تُرسل مع السياق المناسب إلى واجهة مزوّد النموذج الذي يعيد الرد. كل محطة من هذه المحطات شركة ترى جزءًا من البيانات، وكل واحدة تحتاج عقدًا وموقعًا تعرفه:",
      },
      {
        t: "ul",
        items: [
          "**القناة.** واتساب أو مزوّد البريد أو خدمة المحادثة في موقعك تنقل الرسالة وفق شروطها.",
          "**التطبيق وقاعدة البيانات.** في الأداة المستأجرة هي خوادم المزوّد، وفي النظام المملوك هي الاستضافة التي اخترتها أنت.",
          "**مزوّد النموذج.** تعليماتك ورسالة العميل وأي مستندات تُسترجع من قاعدة المعرفة تنتقل كلها إلى واجهة النموذج.",
        ],
      },
      {
        t: "p",
        text: "ومزوّدو النماذج ينشرون ما يفعلونه بهذه البيانات، والتفاصيل هنا مهمة. على سبيل المثال، تذكر [وثائق OpenAI عن التحكم في البيانات](https://developers.openai.com/api/docs/guides/your-data) أن بيانات واجهتها البرمجية لا تُستخدم في التدريب، لكنها تحتفظ بسجلات مراقبة إساءة الاستخدام حتى 30 يومًا في الواجهات الشائعة مثل Responses وChat Completions، ما لم يحصل العميل على موافقة بمدة احتفاظ أقل. وتتيح الصفحة نفسها تخزين البيانات ومعالجتها في مناطق محددة، منها منطقة للإمارات تحتاج موافقة إضافية، مع زيادة 10% في السعر للنماذج المؤهلة الصادرة منذ 5 مارس 2026، وتنبّه إلى أن بيانات النظام، مثل بيانات الحساب والفوترة، قد تُعالج خارج المنطقة المختارة.",
      },
      {
        t: "p",
        text: "امتلاك الاستضافة يضع قاعدة البيانات والسجلات تحت سيطرتك. لكن الرسالة تمر في كل الأحوال عبر القناة ومزوّد النموذج، فالمكسب الحقيقي هو خريطة كاملة: تعرف كل طرف، وأين يخزّن البيانات، وأي إعدادات تنطبق عليه، وتستطيع تغيير أي منها.",
      },

      {
        t: "h2",
        id: "what-the-law-says",
        text: "ماذا تقول قوانين حماية البيانات في الإمارات والسعودية وتركيا والاتحاد الأوروبي؟",
      },
      {
        t: "callout",
        title: "معلومات عامة، لا استشارة قانونية",
        text: "يلخّص هذا القسم النصوص القانونية الأصلية بصورة عامة كما هي في أكتوبر 2026. القوانين ولوائحها التنفيذية وقرارات الجهات الرقابية تتغير، وتطبيقها يعتمد على قطاعك وظروفك. استشر محاميًا مؤهلًا في بلدك قبل أن تقرر أين تستضيف البيانات الشخصية.",
      },
      {
        t: "p",
        text: "ثلاث قواعد تتكرر في الأنظمة الأربعة. القانون يتبع الأشخاص الذين تعالج بياناتهم أينما كان الخادم. والبيانات الصحية تخضع لقواعد أشد. وتبقى شركتك مسؤولة حين يعالج مزوّد البيانات نيابة عنها.",
      },
      { t: "h3", text: "الإمارات العربية المتحدة" },
      {
        t: "p",
        text: "يسري [المرسوم بقانون اتحادي رقم 45 لسنة 2021 بشأن حماية البيانات الشخصية](https://uaelegislation.gov.ae/ar/legislations/1972) على كل من يقيم في الدولة أو له مقر عمل فيها، وعلى المتحكمين والمعالجين داخلها، وعلى المتحكمين والمعالجين خارجها حين يعالجون بيانات أشخاص داخل الدولة. وتسمح المادتان 22 و23 بنقل البيانات إلى الخارج في حالات محددة: إلى دول لديها تشريعات مناسبة لحماية البيانات، أو بعقد يُلزم الجهة المستقبِلة بمعايير المرسوم، أو بموافقة صريحة من صاحب البيانات. وتمنح المادة 14 الشخص حق الحصول على البيانات التي قدّمها بصيغة منظمة تقرؤها الأنظمة آليًا.",
      },
      {
        t: "p",
        text: "وللبيانات الصحية قانونها الخاص. فالمرسوم يستثني البيانات الصحية التي ينظمها تشريع خاص، و[القانون الاتحادي رقم 2 لسنة 2019](https://uaelegislation.gov.ae/ar/legislations/1209) في شأن استخدام تقنية المعلومات والاتصالات في المجالات الصحية ينص على أنه لا يجوز تخزين البيانات الصحية المتعلقة بالخدمات المقدَّمة داخل الدولة أو معالجتها خارجها، إلا في الحالات التي يصدر بها قرار من الجهة الصحية بالتنسيق مع الوزارة. ويُلزم القانون نفسه بحفظ البيانات الصحية مدة لا تقل عن 25 سنة من تاريخ آخر إجراء صحي للشخص، وهذا وحده يجعل التصدير الكامل للبيانات من أي مزوّد ضرورة عملية. أما المنشآت في مركز دبي المالي العالمي (DIFC) وسوق أبوظبي العالمي (ADGM) فتتبع قوانين حماية البيانات الخاصة بهاتين المنطقتين.",
      },
      { t: "h3", text: "المملكة العربية السعودية" },
      {
        t: "p",
        text: "يشمل [نظام حماية البيانات الشخصية](https://sdaia.gov.sa/en/SDAIA/about/Documents/Personal%20Data%20English%20V2-23April2023-%20Reviewed-.pdf)، الذي تشرف عليه الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)، كل معالجة تتم داخل المملكة، وكل معالجة لبيانات المقيمين فيها من أي جهة، حتى لو كانت خارجها. ويضرب [دليل سدايا للنظام](https://dgp.sdaia.gov.sa/wps/wcm/connect/f579bc32-fda8-47bd-bc6f-66b8cb77985c/ENG-Guide+to+the+saudi+PDP+law+for+controllersprocessors.pdf?MOD=AJPERES) مثالًا ببيانات مقيمين مستضافة في الولايات المتحدة: النظام يبقى منطبقًا عليها. وتسمح المادة 29 بنقل البيانات خارج المملكة لأغراض محددة، بشرط ألا يمس النقل الأمن الوطني أو المصالح الحيوية للمملكة، وأن يتوفر في الجهة المستقبِلة مستوى حماية مناسب، وأن يقتصر على الحد الأدنى من البيانات اللازمة. والبيانات الصحية مصنّفة ضمن البيانات الحساسة، وتمنح المادة 4 الشخص حق الحصول على نسخة من بياناته بصيغة واضحة ومقروءة، وحق طلب إتلافها حين لا تعود هناك حاجة إليها.",
      },
      { t: "h3", text: "تركيا" },
      {
        t: "p",
        text: "يصنّف [قانون حماية البيانات الشخصية رقم 6698](https://www.kvkk.gov.tr/Icerik/6649/Personal-Data-Protection-Law) (KVKK) البيانات الصحية ضمن الفئات الخاصة التي تحتاج شروطًا أشد. وتجعل المادة 12 المتحكم مسؤولًا بالتضامن مع أي شركة تعالج البيانات نيابة عنه عن تدابير الأمان، فالتعاقد مع مزوّد لا ينقل المسؤولية عنك. وأعادت [التعديلات النافذة منذ 1 يونيو 2024](https://www.kvkk.gov.tr/Icerik/7834/6698-Sayili-Kisisel-Verilerin-Korunmasi-Kanununda-Yapilan-Degisiklikler-Hakkinda-Kamuoyu-Duyurusu) صياغة قواعد نقل البيانات إلى الخارج، فأصبح النقل يعتمد على قرارات الملاءمة أو على ضمانات مثل العقود النموذجية التي أصدرها المجلس، ويجب إخطار الهيئة بها خلال خمسة أيام عمل من توقيعها.",
      },
      { t: "h3", text: "الاتحاد الأوروبي" },
      {
        t: "p",
        text: "قد تصل [اللائحة العامة لحماية البيانات (GDPR)](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng) إلى شركات خارج أوروبا. فبحسب المادة 3(2)، تخضع لها الشركة الواقعة خارج الاتحاد إذا عرضت سلعًا أو خدمات على أشخاص داخله، ولذلك على عيادة في إسطنبول أو دبي تسوّق علاجها بنشاط لمرضى في أوروبا أن تتحقق من انطباقها عليها. وتشترط المادة 28 أن ينص كل عقد مع جهة معالجة على أن تحذف هذه الجهة كل البيانات الشخصية أو تعيدها عند انتهاء الخدمة، بحسب اختيار المتحكم. وتمنح المادة 20 الشخص حق الحصول على بياناته بصيغة منظمة وشائعة الاستخدام تقرؤها الأنظمة آليًا.",
      },
      {
        t: "p",
        text: "وإذا قرأت هذه النصوص معًا، تجدها تطلب الأمور نفسها ممن يختار نظام ذكاء اصطناعي: أن يعرف أين توجد كل نسخة من البيانات، وأن يوقّع عقدًا مع كل جهة معالجة، وأن يكون قادرًا على تسليم الناس بياناتهم أو تصحيحها أو حذفها. وكل ذلك أسهل حين تكون قاعدة البيانات ملكك.",
      },

      { t: "h2", id: "vendor-lock-in", text: "كيف يحدث الارتباط بمزوّد واحد في أدوات الذكاء الاصطناعي؟" },
      {
        t: "p",
        text: "نادرًا ما يأتي الارتباط من بند واحد في العقد. إنه يتراكم مع ارتفاع تكلفة المغادرة. ففي [تحقيقها في سوق الخدمات السحابية](https://assets.publishing.service.gov.uk/media/688b20e6ff8c05468cb7b120/summary_of_final_decision.pdf)، وجدت هيئة المنافسة والأسواق البريطانية (CMA) أن أقل من 1% من عملاء الخدمات السحابية يغيّرون مزوّدهم كل عام، وأن كثيرين منهم يرون أن تكلفة التغيير أكبر من فائدته. وحددت الهيئة رسوم نقل البيانات إلى الخارج (egress) والفروق التقنية بين المزوّدين بوصفها العوائق الرئيسية، مع أن رسوم النقل تثقل كاهل العملاء الأصغر أكثر من غيرهم.",
      },
      { t: "p", text: "وتضيف أدوات الذكاء الاصطناعي طبقات خاصة بها:" },
      {
        t: "ul",
        items: [
          "**البيانات.** سجل المحادثات وبيانات العملاء والسجلات التقنية كلها في قاعدة بيانات المزوّد، وقد يُسقط التصدير، إن وُجد، الأجزاء التي تحتاجها.",
          "**المنطق.** التعليمات وإرشادات الوكيل وقواعد سير العمل التي استغرق ضبطها شهورًا لا توجد إلا داخل لوحة تحكم المزوّد.",
          "**الحسابات.** حين يكون رقم الواتساب أو نطاق البريد أو مفتاح API للنموذج مسجّلًا باسم المزوّد، فالمغادرة تعني نقله أو فتح حساب جديد.",
          "**المعرفة.** قوائم أسعارك وسياساتك وإجاباتك عن الأسئلة المتكررة أُعيدت صياغتها بصيغة المزوّد.",
          "**الربط بالأنظمة.** الاتصال بتقويمك أو نظام إدارة العملاء (CRM) أو برنامج المحاسبة يمر عبر موصلات المزوّد الخاصة.",
        ],
      },
      {
        t: "p",
        text: "والجهات التنظيمية بدأت تدفع في الاتجاه المعاكس. فـ[قانون البيانات الأوروبي (Data Act)](https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained)، المطبّق منذ 12 سبتمبر 2025، يُلزم مزوّدي الخدمات السحابية وخدمات SaaS بتسهيل الانتقال إلى مزوّد آخر، ومن ذلك تصدير البيانات بصيغة شائعة تقرؤها الأنظمة آليًا، ويُلغي رسوم الانتقال، بما فيها رسوم نقل البيانات، ابتداءً من 12 يناير 2027. لكنه يشمل الخدمات المقدَّمة في الاتحاد الأوروبي فقط، وفي غيره تبقى حمايتك هي ما ينص عليه عقدك.",
      },

      { t: "h2", id: "real-costs", text: "كم يكلّف كل خيار فعلًا؟" },
      {
        t: "p",
        text: "المقارنات المعتادة تضع رسمًا شهريًا أمام عرض سعر لمشروع. والمقارنة العادلة تحسب كل بند على الفترة نفسها، ثلاث سنوات مثلًا:",
      },
      {
        t: "table",
        caption: "بنود التكلفة التي تقارنها على الفترة نفسها",
        head: ["بند التكلفة", "الاستئجار (SaaS)", "الامتلاك"],
        rows: [
          [
            "الإعداد",
            "منخفض: تسجيل وضبط إعدادات، وبعض الباقات تفرض رسومًا على التهيئة",
            "أعلى: تحليل الاحتياج والبناء والربط والاختبار، يُدفع مقدمًا أو على مراحل",
          ],
          [
            "الاشتراك أو الترخيص",
            "لكل مستخدم أو لكل محادثة أو شهريًا، وقد يرتفع عند التجديد",
            "لا اشتراك للنظام نفسه، وقد تدفع مقابل أدوات يستخدمها",
          ],
          ["الاستضافة", "ضمن الرسوم", "تدفعها أنت مباشرة لمزوّد الاستضافة"],
          [
            "استخدام النموذج",
            "ضمن الرسوم، غالبًا مع حدود للاستخدام أو رسوم على التجاوز",
            "يُحاسب عليه حسابك أنت لدى مزوّد النموذج، لكل مليون رمز (token)",
          ],
          [
            "الصيانة",
            "ضمن الرسوم: المزوّد يصلح المنتج ويحدّثه",
            "فريقك أو اتفاقية دعم: تحديثات ومراقبة وتعديل التعليمات والربط",
          ],
          [
            "المغادرة",
            "عمل تصدير ونقل، وتاريخ يضيع، وتدريب الموظفين من جديد",
            "منخفضة حين يكون الكود والبيانات والوثائق في يدك",
          ],
        ],
      },
      {
        t: "p",
        text: "استخدام النموذج يستحق نظرة أدق. فالمزوّدون يحاسبون لكل مليون رمز من المدخلات والمخرجات، وفي [قائمة الأسعار الحالية](https://developers.openai.com/api/docs/pricing) لدى أحد المزوّدين يكلّف أقوى نموذج نحو مئة ضعف ما يكلّفه أصغر نموذج لكل رمز. لذلك يستحق اختيار النموذج المناسب لكل خطوة في سير العمل أن يُختبر قبل الإطلاق، فخطوة روتينية مثل فرز الرسائل نادرًا ما تحتاج أكبر نموذج.",
      },
      {
        t: "p",
        text: "والصيانة هي البند الذي يُنسى أكثر من غيره في جانب الامتلاك. النظام المملوك يحتاج من يطبّق التحديثات، ويراقب الأخطاء، ويعدّل التعليمات حين تتغير خدماتك أو أسعارك. ضع لها ميزانية من اليوم الأول، داخل فريقك أو عبر اتفاقية دعم.",
      },

      { t: "h2", id: "when-renting-wins", text: "متى يكون استئجار أداة ذكاء اصطناعي هو الخيار الأفضل؟" },
      {
        t: "p",
        text: "في حالات كثيرة. الأداة المستأجرة هي الخيار المنطقي للمهام التي تتشابه في كل الشركات، مثل تلخيص الاجتماعات أو المساعدة في الكتابة، ولتجربة ما إذا كان الذكاء الاصطناعي يفيدك أصلًا قبل أن تستثمر في بناء نظام. استخدم هذه الأسئلة لتقرر كل نظام على حدة:",
      },
      {
        t: "table",
        caption: "استئجار أم امتلاك: قائمة أسئلة للقرار",
        head: ["السؤال", "تميل إلى الاستئجار إذا", "تميل إلى الامتلاك إذا"],
        rows: [
          [
            "ما مدى أهمية المهمة؟",
            "مهمة جانبية تتشابه في كل الشركات",
            "تحدد طريقة خدمتك لعملائك أو كسبهم",
          ],
          [
            "ما مدى حساسية البيانات؟",
            "قليلة المخاطر، وشروط المزوّد ومنطقة استضافته تناسب التزاماتك",
            "بيانات صحية أو مالية أو من الفئات الخاصة",
          ],
          [
            "ما حجم الربط المطلوب؟",
            "تعمل وحدها أو بموصلات جاهزة",
            "يجب أن تعمل مع تقويمك أو نظام العملاء أو الحجز أو أدواتك الداخلية",
          ],
          [
            "ما مدى خصوصية المنطق؟",
            "سير عمل عام يكفيك",
            "قواعدك وأسعارك وأسلوبك وطريقة التحويل للفريق جزء مما تبيعه",
          ],
          [
            "من سيتولى الصيانة؟",
            "لا أحد في فريقك، وخطة تطوير المزوّد تناسبك",
            "فريقك أو شريك تقني يستطيع صيانته",
          ],
          ["كم ستستخدمه؟", "تجربة أو مشروع قصير", "سنوات"],
        ],
      },
      {
        t: "p",
        text: "وكثير من الشركات تجمع بين الخيارين: تستأجر الأدوات العامة، وتمتلك الأنظمة القليلة التي يقوم عليها عملها الأساسي.",
      },

      { t: "h2", id: "contract-checklist", text: "ما البنود التي يجب أن يتضمنها عقد نظام الذكاء الاصطناعي؟" },
      {
        t: "p",
        text: "سواء استأجرت أداة أو طلبت بناء نظام، فأسهل وقت للاتفاق على شروط المغادرة هو قبل التوقيع. اطلب هذه البنود مكتوبة:",
      },
      {
        t: "table",
        caption: "قائمة بنود عقد نظام الذكاء الاصطناعي",
        head: ["اطلب", "الصيغة الجيدة", "علامة تحذير"],
        rows: [
          [
            "الكود المصدري والحقوق",
            "تسليم الكود وسير العمل والتعليمات مع حق تعديلها ونقلها، أو إيداع الكود لدى طرف ثالث (escrow) في المنتج المستأجر",
            "«الإعدادات ملكية فكرية خاصة بنا»",
          ],
          [
            "صلاحية المدير على كل حساب",
            "الاستضافة وقاعدة البيانات وحسابات القنوات والنطاق ومفاتيح API للنموذج مسجّلة باسم شركتك، وأنت المالك",
            "حسابات باسم المزوّد أو على البريد الشخصي لأحد موظفيه",
          ],
          [
            "تصدير البيانات",
            "تصدير كامل وموثّق بصيغة شائعة تقرؤها الأنظمة (CSV أو JSON أو نسخة من قاعدة البيانات)، عند الطلب وعند المغادرة",
            "«التصدير عند الطلب» دون تحديد الصيغة أو النطاق أو الرسوم",
          ],
          [
            "الوثائق",
            "وصف لبنية النظام، ودليل إعداد، وقائمة بالتعليمات ومصادر المعرفة، ودليل تشغيل للأعطال الشائعة",
            "«فريقنا يتولى ذلك»",
          ],
          [
            "موقع البيانات والمعالجون الفرعيون",
            "منطقة استضافة محددة بالاسم، وقائمة بكل معالج فرعي، ومنهم مزوّد النموذج",
            "«بنية تحتية عالمية» دون قائمة",
          ],
          [
            "الحذف عند الانتهاء",
            "إعادة كل البيانات الشخصية أو حذفها بحسب اختيارك، مع تأكيد مكتوب",
            "صمت تام عمّا يحدث للبيانات بعد انتهاء العقد",
          ],
          ["المساعدة عند المغادرة", "فترة تسليم محددة وسعر واضح لمساعدتك في الانتقال", "لا يوجد بند للمغادرة أصلًا"],
          [
            "الأمان والحوادث",
            "تحديد المسؤول عن كل تدبير أمني، وسرعة إبلاغك بأي اختراق",
            "مسؤوليات غامضة",
          ],
        ],
      },
      {
        t: "p",
        text: "بندان من هذه القائمة يرددان صدى القانون: المادة 28 من GDPR تشترط أصلًا أن تغطي عقود المعالجة إعادة البيانات أو حذفها، والمادة 12 من KVKK تُبقيك مسؤولًا بالتضامن عن تدابير الأمان لدى من يعالج بياناتك. جرّب التصدير مرة واحدة في الشهر الأول، ما دام الجميع يتذكر كيف أُعدّ النظام. وإذا رفض المزوّد أي بند، فاسأله عن السبب قبل أن توقّع. ودليلنا عن [كيفية تحديد نطاق مشروع ذكاء اصطناعي](/ar/insights/how-to-scope-an-ai-project) يشرح كيف تضع هذه الشروط في وصف المشروع من البداية.",
      },

      { t: "cta" },

      { t: "h2", id: "flowramo-approach", text: "كيف تبني Flowramo أنظمة تملكها أنت" },
      {
        t: "p",
        text: "تصمم Flowramo وتبني وكلاء الذكاء الاصطناعي، وأتمتة العمليات، والتطبيقات الذكية المخصصة، وأنظمة المعرفة، وتبيعها مشاريع لا اشتراكات. يُثبَّت كل نظام على استضافة يختارها العميل ويملكها، ويُربط بحسابات العميل نفسه، فتبقى قاعدة البيانات وسير العمل والحسابات لدى الجهة التي تعتمد عليها. وتعرض صفحة [الحلول](/ar/solutions) أنواع الأنظمة التي نبنيها.",
      },
      {
        t: "p",
        text: "و[لينا](/ar/products/lina)، موظفة الاستقبال الذكية على واتساب التي بنيناها لعيادات الأسنان، مثال على ذلك. تعمل على استضافة تملكها العيادة، ومربوطة بحساب واتساب وتقويم العيادة نفسها، وتبقى سجلات المرضى على البنية التحتية للعيادة. وكما في أي نظام من هذا النوع، تمر كل رسالة عبر واتساب ومزوّد نموذج الذكاء الاصطناعي، فكلاهما يجب أن يكون في قائمة الجهات التي تعالج بيانات العيادة. وإن كنت تفكر في نظام خاص بعملك، [أخبرنا بما تحتاجه](/ar/contact).",
      },
    ],
    faq: [
      {
        q: "ماذا يعني أن أمتلك نظام ذكاء اصطناعي؟",
        a: "يعني أن الأجزاء التي يعمل بها النظام مسجّلة باسمك: الكود وسير العمل، وحساب الاستضافة، وحسابات القنوات والواجهات البرمجية، وقاعدة البيانات، والتعليمات، وقاعدة المعرفة، مع وثائق تمكّن أي فريق آخر من تشغيله. أما النموذج اللغوي فيُستخدم عادةً عبر واجهة مزوّده، لكن حساب الواجهة باسمك وتستطيع تغيير النموذج.",
      },
      {
        q: "هل إرسال بيانات العملاء إلى ChatGPT أو واجهات الذكاء الاصطناعي آمن؟",
        a: "يمكن أن يكون آمنًا بعد أن تراجع شروط المزوّد وإعداداته مقابل التزاماتك القانونية. فوثائق OpenAI مثلًا تذكر أن بيانات واجهتها البرمجية لا تُستخدم في التدريب، لكنها تحتفظ بسجلات مراقبة إساءة الاستخدام حتى 30 يومًا في الواجهات الشائعة ما لم يحصل العميل على موافقة بمدة أقل. أرسل فقط البيانات التي تحتاجها كل مهمة، وسجّل المزوّد جهةً معالِجة، وتأكد من مكان معالجته للبيانات.",
      },
      {
        q: "أين أستضيف نظام الذكاء الاصطناعي إذا كانت شركتي في الإمارات أو السعودية؟",
        a: "حيث تقول استشارتك القانونية إن البيانات يجوز أن تكون، ولهذا يهم أن تختار الاستضافة بنفسك. في الإمارات، لا يجوز تخزين البيانات الصحية المتعلقة بخدمات مقدَّمة داخل الدولة أو معالجتها خارجها دون قرار من الجهة الصحية. وفي السعودية، يبقى نظام حماية البيانات الشخصية منطبقًا على بيانات المقيمين المستضافة في الخارج، ويجب أن يستوفي النقل خارج المملكة شروط المادة 29. هذه معلومات عامة لا استشارة قانونية.",
      },
      {
        q: "كيف أتجنب الارتباط بمزوّد واحد في أدوات الذكاء الاصطناعي؟",
        a: "اتفق على شروط المغادرة قبل التوقيع. اطلب الكود المصدري أو إيداعه لدى طرف ثالث، وصلاحية المدير على كل حساب باسم شركتك، وتصديرًا موثّقًا لكل البيانات بصيغة شائعة، ووثائق تسليم، وفترة محددة للمساعدة عند المغادرة. وجرّب التصدير مبكرًا. المزوّد الذي يرفض هذه الشروط يخبرك مسبقًا بمدى صعوبة المغادرة.",
      },
      {
        q: "هل امتلاك نظام ذكاء اصطناعي أغلى من الاشتراك الشهري؟",
        a: "في البداية غالبًا نعم، لأن البناء يكلّف أكثر من التسجيل في أداة. أما على مدى سنوات فالأمر يعتمد على عدد المستخدمين وحجم الرسائل ومقدار التخصيص. قارن كل بنود التكلفة على الفترة نفسها: الإعداد، والاشتراك، والاستضافة، واستخدام النموذج، والصيانة، وتكلفة المغادرة. الامتلاك يؤتي ثماره عادةً في الأنظمة الأساسية أو كثيفة الاستخدام أو المرتبطة بعمق بأنظمتك، والاستئجار يناسب المهام العامة.",
      },
      {
        q: "ماذا يحدث لبياناتي إذا ألغيت اشتراك أداة ذكاء اصطناعي؟",
        a: "يعتمد ذلك على عقدك، فاقرأ بنود الإنهاء والبيانات قبل الإلغاء. في اللائحة الأوروبية GDPR، يجب أن ينص عقد المعالجة على أن تحذف جهة المعالجة كل البيانات الشخصية أو تعيدها عند انتهاء الخدمة، بحسب اختيار المتحكم. صدّر بياناتك كاملة أولًا، واسأل عن مدة الاحتفاظ بالنسخ الاحتياطية، واطلب تأكيدًا مكتوبًا بعد حذف البيانات.",
      },
    ],
    sources: [
      {
        label: "تشريعات الإمارات — مرسوم بقانون اتحادي رقم 45 لسنة 2021 بشأن حماية البيانات الشخصية",
        url: "https://uaelegislation.gov.ae/ar/legislations/1972",
      },
      {
        label: "تشريعات الإمارات — قانون اتحادي رقم 2 لسنة 2019 في شأن استخدام تقنية المعلومات والاتصالات في المجالات الصحية",
        url: "https://uaelegislation.gov.ae/ar/legislations/1209",
      },
      {
        label: "SDAIA — Personal Data Protection Law, official English translation (2023)",
        url: "https://sdaia.gov.sa/en/SDAIA/about/Documents/Personal%20Data%20English%20V2-23April2023-%20Reviewed-.pdf",
      },
      {
        label: "SDAIA — Guide to the Saudi Personal Data Protection Law for controllers and processors",
        url: "https://dgp.sdaia.gov.sa/wps/wcm/connect/f579bc32-fda8-47bd-bc6f-66b8cb77985c/ENG-Guide+to+the+saudi+PDP+law+for+controllersprocessors.pdf?MOD=AJPERES",
      },
      {
        label: "KVKK — Law No. 6698 on the Protection of Personal Data",
        url: "https://www.kvkk.gov.tr/Icerik/6649/Personal-Data-Protection-Law",
      },
      {
        label: "KVKK — إعلان عن تعديلات 2024 على القانون رقم 6698 (بالتركية)",
        url: "https://www.kvkk.gov.tr/Icerik/7834/6698-Sayili-Kisisel-Verilerin-Korunmasi-Kanununda-Yapilan-Degisiklikler-Hakkinda-Kamuoyu-Duyurusu",
      },
      {
        label: "EUR-Lex — Regulation (EU) 2016/679, General Data Protection Regulation",
        url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng",
      },
      {
        label: "European Commission — Data Act explained",
        url: "https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained",
      },
      {
        label: "UK Competition and Markets Authority — Cloud services market investigation: summary of final decision (2025)",
        url: "https://assets.publishing.service.gov.uk/media/688b20e6ff8c05468cb7b120/summary_of_final_decision.pdf",
      },
      {
        label: "NIST — SP 800-145, The NIST Definition of Cloud Computing (2011)",
        url: "https://csrc.nist.gov/pubs/sp/800/145/final",
      },
      {
        label: "OpenAI — Data controls in the OpenAI platform (2026)",
        url: "https://developers.openai.com/api/docs/guides/your-data",
      },
      { label: "OpenAI — API pricing (2026)", url: "https://developers.openai.com/api/docs/pricing" },
    ],
    keywords: [
      "امتلاك نظام الذكاء الاصطناعي",
      "استئجار أداة ذكاء اصطناعي",
      "الارتباط بمزود واحد",
      "أين تخزن بيانات الذكاء الاصطناعي",
      "استضافة الذكاء الاصطناعي في السعودية",
      "قانون حماية البيانات الشخصية الإمارات",
      "نظام حماية البيانات الشخصية السعودي",
      "عقد نظام ذكاء اصطناعي",
      "الذكاء الاصطناعي للشركات",
    ],
    minutes: 12,
  },
};

export default article;
