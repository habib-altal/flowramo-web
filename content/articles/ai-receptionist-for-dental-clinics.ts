import type { Article } from "./types";

const article: Article = {
  slug: "ai-receptionist-for-dental-clinics",
  published: "2026-10-04",
  updated: "2026-10-04",
  related: ["whatsapp-appointment-booking-dental-clinic", "reduce-dental-no-shows"],

  en: {
    title: "AI receptionist for dental clinics: what it does and how to choose",
    seoTitle: "AI Receptionist for Dental Clinics: 2026 Buyer's Guide",
    description:
      "What an AI receptionist for dental clinics really does on WhatsApp, where it must stop, how it compares with staff, and 12 questions to ask before you buy.",
    answer:
      "An AI receptionist for dental clinics answers patients on WhatsApp within seconds, day and night, using knowledge the clinic approves. It handles price questions, bookings, rescheduling, reminders, follow-ups, aftercare and recalls, and hands anything urgent or clinical to staff with full context. It does not diagnose. Choose one built on the official WhatsApp Business Platform.",
    takeaways: [
      "An AI receptionist takes the repetitive WhatsApp load and the night shift; your team keeps judgment, empathy and anything clinical.",
      "Reply speed is revenue: a patient comparing clinics at 23:41 often books with whoever answers clearly first.",
      "WhatsApp's 2026 terms bar general-purpose AI chatbots but keep business AI for bookings and customer questions allowed.",
      "Safety comes from design you can check: the official platform, clinic-approved knowledge, written handoff rules and a full conversation log.",
      "Before you sign with any vendor, make them show you live how their system answers a 2 am message about swelling and fever.",
    ],
    blocks: [
      { t: "h2", id: "why-reply-speed-matters", text: "Why does reply speed decide who gets the patient?" },
      {
        t: "p",
        text: "It is 23:41 on a Wednesday. A message lands on your clinic's WhatsApp: “Hi, how much is an implant? I can come Saturday.” The clinic closed at 21:00. At 10:05 the next morning your receptionist replies, politely and with the right price. At 10:40 the patient answers: “Thanks, I already booked somewhere else.”",
      },
      {
        t: "p",
        text: "Nobody did anything wrong; your receptionist was asleep, as she should be. But a patient comparing clinics late at night often messages more than one, and the first clear answer with a real slot tends to win. **The problem isn't your team. The front desk works one shift; WhatsApp works three.**",
      },
      {
        t: "p",
        text: "There is a quieter cost too. On the WhatsApp Business Platform, a patient's message opens a 24-hour [customer service window](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages) that resets with each new message. Inside it the clinic can reply freely; outside it, only pre-approved template messages can be sent. A message sent on the eve of Eid and opened after the holiday has already missed that window.",
      },
      { t: "h3", text: "The arithmetic of a closed inbox" },
      { t: "p", text: "Put your own numbers in. This is an illustrative example, not an industry benchmark:" },
      {
        t: "ul",
        items: [
          "**After-hours inquiries:** say 40 new-patient messages a month arrive after closing.",
          "**Lost before morning:** if 1 in 4 of those patients books elsewhere before you reply, that is 10 first visits a month.",
          "**What they were worth:** multiply by the value of a typical first treatment plan, not the consultation fee. For an implant inquiry, that is the whole case.",
        ],
      },
      {
        t: "p",
        text: "That is 120 lost first visits a year, before the check-ups and referrals those patients would have brought. The cost of a slow reply never appears on a report, which is exactly why it persists.",
      },

      { t: "h2", id: "what-it-does", text: "What does an AI receptionist actually do in a dental clinic?" },
      {
        t: "p",
        text: "Strip away the marketing and an AI dental receptionist, sometimes sold as a virtual receptionist or an AI front desk, is software that reads each patient message, works out what they want, answers from information your clinic approved, and acts in your systems: calendar, patient record, reminders. Here is one weekday.",
      },
      {
        t: "table",
        head: ["Time", "What happens", "What the AI receptionist does"],
        rows: [
          ["07:30", "Clinic opens", "Briefs the team: overnight chats, new bookings, patients who need a human"],
          ["10:15", "Front desk busy with walk-ins", "Clears the WhatsApp queue: hours, parking, insurers, scaling prep"],
          ["11:20", "“How much are veneers?”", "Gives the approved price range and what changes it, offers a consultation"],
          ["14:00", "“Can I move Thursday to next week?”", "Finds a free slot, moves the booking in the calendar, confirms"],
          ["17:00", "Tomorrow's list is set", "Sends reminders with options to confirm or reschedule"],
          ["19:30", "A patient had an extraction today", "Sends the dentist-approved aftercare, then checks in next morning"],
          ["21:00", "An implant inquiry went quiet 5 days ago", "Sends one useful follow-up with a concrete slot"],
          ["23:41", "A new patient asks about implants", "Replies in seconds in the patient's language, asks a qualifying question, books a consultation"],
          ["02:07", "“My face is swollen and I have a fever”", "Does not assess it; alerts the on-call dentist with the full chat, tells the patient what happens next"],
        ],
        caption: "An illustrative weekday. Recalls run in the background, inviting patients back at the interval their dentist set.",
      },
      {
        t: "p",
        text: "Booking is where most of the value sits, and where weak products fall short: a bot that collects a “preferred time” for someone to call back has booked nothing. Our guide to [WhatsApp appointment booking for dental clinics](/en/blog/whatsapp-appointment-booking-dental-clinic) shows a flow that does.",
      },
      { t: "h3", text: "What it must never do" },
      {
        t: "ul",
        items: [
          "**Diagnose.** It never judges whether pain, swelling or bleeding is serious, and never suggests medication.",
          "**Go beyond approved aftercare.** It shares what your dentists signed off, and nothing more.",
          "**Invent facts.** No made-up prices, discounts, availability or treatment promises. If the answer isn't in the approved knowledge, it says so and brings in staff.",
          "**Pretend to be human.** Asked whether they are talking to a person, it says it is the clinic's AI assistant.",
          "**Handle an emergency alone.** Urgent messages go to a named person at once, with a clear safety line for the patient.",
          "**Message people who haven't opted in,** or continue after someone asks to stop, as WhatsApp's [Business Messaging Policy](https://business.whatsapp.com/policy) requires anyway.",
        ],
      },

      { t: "h2", id: "ai-vs-human-vs-chatbot", text: "AI receptionist vs human receptionist vs auto-reply" },
      {
        t: "p",
        text: "Owners weighing an AI receptionist for dental clinics often lump it in with the auto-reply, or with the simple dental clinic chatbot on WhatsApp that offers a menu of buttons. They do very different jobs.",
      },
      {
        t: "table",
        head: ["What matters", "Human receptionist", "Auto-reply or menu bot", "AI receptionist"],
        rows: [
          ["Availability", "Clinic hours; one chat at a time when busy", "24/7", "24/7, many chats at once"],
          ["Languages", "Whatever your staff speak", "Fixed scripts, usually one or two", "The patient's own language and dialect"],
          ["Memory of past conversations", "Good for regulars, patchy across shifts", "None", "What each patient asked, was quoted and booked"],
          ["Free-text questions", "Yes", "Only via the right button", "Yes, from clinic-approved knowledge"],
          ["Booking into the calendar", "Yes", "Rarely; usually logs a request", "Yes, when connected to your calendar"],
          ["Reminders and follow-up", "When there is time", "Fixed blasts", "Timed to each patient's situation"],
          ["Judgment and empathy", "Strongest", "None", "Limited; should hand over"],
          ["Emergencies and complaints", "Handles them", "Cannot", "Detects them and escalates to staff"],
          ["Cost profile", "Salary for one shift; nights and holidays cost extra", "Low, but does little", "Subscription plus WhatsApp template fees"],
          ["Escalation", "Walks to the dentist", "None", "Hands the chat to staff with full context"],
        ],
        caption: "No row makes your team unnecessary. The AI absorbs volume and night hours; people keep judgment.",
      },
      {
        t: "p",
        text: "The setup that works is not either-or. The AI takes the repetitive questions, bookings and night shift; your receptionist spends the hours saved on conversations that need a person: the nervous first-timer, the complaint, the complex treatment plan.",
      },
      {
        t: "p",
        text: "On cost, Meta's [WhatsApp pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing) charges per delivered template message, while free-form replies inside the customer service window are free. A system that answers within the window keeps those fees low.",
      },

      { t: "h2", id: "why-whatsapp", text: "Why WhatsApp, and is AI still allowed on it in 2026?" },
      {
        t: "p",
        text: "In the Gulf, the channel question answers itself. Saudi Arabia had 33.9 million internet users at the start of 2025, a penetration of 99.0% ([DataReportal](https://datareportal.com/reports/digital-2025-saudi-arabia)), and most patients already treat WhatsApp as the clinic's front door. A phone that rings out after 21:00 and a web form nobody reads until Sunday are slower versions of the same channel.",
      },
      {
        t: "p",
        text: "Many owners ask whether AI chatbots were banned from WhatsApp. Partly, and the distinction matters. From 15 January 2026, WhatsApp's Business Solution terms bar general-purpose AI assistants, the ChatGPT-style bots whose AI is itself the product, from the Business API, [as TechCrunch reported](https://techcrunch.com/2025/10/18/whatssapp-changes-its-terms-to-bar-general-purpose-chatbots-from-its-platform/). Businesses using AI to serve their own customers, such as taking bookings and answering questions, remain allowed.",
      },
      {
        t: "p",
        text: "A receptionist that answers only about your services, from your approved knowledge, sits squarely on the allowed side. A bot that chats with anyone about anything is the wrong design for a clinic anyway.",
      },
      {
        t: "p",
        text: "One practical consequence: reminders, recalls and follow-ups sent more than 24 hours after the patient's last message must use pre-approved templates. A serious vendor has them ready before launch.",
      },

      { t: "h2", id: "safety-and-privacy", text: "Is an AI receptionist safe for patients and their data?" },
      {
        t: "p",
        text: "It can be, but safety comes from design choices you can check, not from a vendor's assurances. Five matter most.",
      },
      { t: "h3", text: "1. The official platform, not a workaround" },
      {
        t: "p",
        text: "Some cheap “WhatsApp automation” tools drive the ordinary WhatsApp app or WhatsApp Web with scripts instead of the official platform. That breaks WhatsApp's terms and risks a ban on the number your patients have saved for years. Only consider tools built on the official platform.",
      },
      { t: "h3", text: "2. Health data is sensitive data" },
      {
        t: "p",
        text: "Saudi Arabia's Personal Data Protection Law has been fully enforceable since 14 September 2024, and it classes health data as sensitive data with additional controls ([Clyde & Co](https://www.clydeco.com/en/insights/2024/09/saudi-arabia-s-personal-data-protection-law-become)). “My gum has bled since the root canal” is health data. Ask where conversations are stored, who can read them and for how long, and get a written data processing agreement. Other Gulf states and Türkiye have their own laws, so check yours with your adviser.",
      },
      { t: "h3", text: "3. Knowledge the clinic approves" },
      {
        t: "p",
        text: "The AI should answer only from a knowledge base your clinic signs off: services, prices or ranges, doctors, hours, preparation and aftercare. Outside it, the right answer is “let me check with the team”, not a confident guess.",
      },
      { t: "h3", text: "4. Written handoff rules" },
      {
        t: "p",
        text: "Decide in advance what always goes to a person: pain with swelling or fever, bleeding that won't stop, trauma, complaints, refunds, anything clinical, and anyone who asks for a human. The handoff carries the whole conversation, so the patient never has to repeat the story.",
      },
      { t: "h3", text: "5. A full audit trail" },
      {
        t: "p",
        text: "You should be able to read every conversation, see what the AI said and when, and see who took over. If a vendor can't show you that, you can't supervise the system.",
      },
      {
        t: "callout",
        title: "The 2 am test",
        text: "Ask the vendor to show you, live, the reply to: “My cheek is swollen and I've had a fever since last night.” A safe reply: “I'm sorry you're going through this. I'm the clinic's virtual assistant, so I can't assess symptoms, but I've alerted the on-call dentist and shared your message. If you have trouble breathing or swallowing, go to the nearest emergency department now.” No diagnosis, a human alerted, a clear next step.",
      },
      { t: "cta" },

      { t: "h2", id: "buyers-checklist", text: "12 questions to ask any AI receptionist vendor" },
      { t: "p", text: "Take this list into every demo. Vague answers are answers too." },
      {
        t: "ol",
        items: [
          "**Does it run on the official WhatsApp Business Platform, on our existing number?**",
          "**Who approves what it says about prices, and how fast can we change it?** A price change should take minutes, not a support ticket.",
          "**What happens at 2 am when a patient reports swelling and fever?** Ask to see it, not hear about it.",
          "**Does it reply in Gulf dialect, and in the other languages our patients use?** Test it with a short, informal message that mixes Arabic and English.",
          "**Can it book, reschedule and cancel straight into our calendar?** Or does it only collect requests for someone to call back?",
          "**How does it hand over to staff, to whom, and with what context?** And what does the patient see while they wait?",
          "**Can we see every conversation, including who took over and when?**",
          "**Does it remember past conversations, such as last week's implant question and the range it quoted?**",
          "**How are reminders and recalls sent after the 24-hour window closes, and who pays the template fees?**",
          "**Where is patient data stored, who can access it, and will you sign a data processing agreement?**",
          "**Will it say it is an AI when asked, and how does it handle a patient who says stop?**",
          "**What do you need from our team to go live, and what happens to our data and number if we leave?**",
        ],
      },

      { t: "h2", id: "30-day-rollout", text: "A 30-day rollout plan" },
      {
        t: "p",
        text: "You can go live in a month without risking a single patient relationship, if you move in this order.",
      },
      { t: "h3", text: "Week 1: Write down what the clinic knows" },
      {
        t: "p",
        text: "Export last month's WhatsApp chats and list the 30 questions patients ask most. Write approved answers, prices or ranges, each doctor's schedule, and dentist-signed preparation and aftercare sheets. Then write the handoff rules and the on-call contacts for nights and holidays.",
      },
      { t: "h3", text: "Week 2: Connect and rehearse" },
      {
        t: "p",
        text: "Connect the WhatsApp number and the calendar. Have staff play patients for a few days: the price haggler, the nervous first-timer, the tourist writing in Turkish, the 2 am swelling case. Fix every answer that sounds wrong before a real patient sees it.",
      },
      { t: "h3", text: "Week 3: Go live after hours" },
      {
        t: "p",
        text: "Let the AI answer outside clinic hours and when the front desk is overloaded. Each morning, someone reads every overnight conversation and corrects the knowledge base. Expect small fixes: a missing parking note, a price range that needs a sentence of context.",
      },
      { t: "h3", text: "Week 4: Full day, plus reminders and follow-ups" },
      {
        t: "p",
        text: "Extend to all hours, then switch on reminders, follow-ups for patients who went quiet, and aftercare messages. Reminders are not a nice-to-have: a [Cochrane review](https://www.cochrane.org/evidence/CD007458_mobile-phone-messaging-reminders-attendance-healthcare-appointments) of randomised trials found that text-message reminders increased attendance compared with no reminder. See our guides to [reducing dental no-shows](/en/blog/reduce-dental-no-shows) and [reactivating inactive dental patients](/en/blog/reactivate-inactive-dental-patients) for timing and wording.",
      },
      {
        t: "p",
        text: "Measure before and after: median time to first reply, inquiries arriving after hours, bookings made outside clinic hours, handoffs and how fast staff picked them up, and your no-show rate.",
      },

      { t: "h2", id: "how-lina-does-this", text: "How Lina does this" },
      {
        t: "p",
        text: "Lina is the AI receptionist we build at Flowramo, designed around the rules above. She runs your clinic's WhatsApp on the official WhatsApp Business Platform and replies in seconds, day and night, in Arabic, English and Turkish, matching the patient's language and dialect.",
      },
      {
        t: "ul",
        items: [
          "Answers only from knowledge your clinic approves: services, prices or ranges, doctors, hours, location, preparation and aftercare.",
          "Finds free slots and books, reschedules or cancels in your calendar, then sends confirmations and reminders.",
          "Remembers each conversation, follows up when a patient goes quiet, sends aftercare and invites patients back for check-ups.",
          "Hands urgent, clinical or sensitive conversations to your team with the full context. She does not diagnose.",
          "Sends you a daily briefing of bookings, conversations and patients at risk of being lost.",
        ],
      },
      { t: "p", text: "Run the checklist above on us, as you would on anyone else." },
    ],
    faq: [
      {
        q: "Can an AI receptionist replace my dental receptionist?",
        a: "Not well, and it shouldn't try. An AI receptionist takes the repetitive WhatsApp questions, bookings, reminders and the night shift. That frees your receptionist for the conversations that need a person: nervous patients, complaints, complex treatment plans and anything clinical. The realistic setup is both working together, with the software carrying volume and your team keeping judgment.",
      },
      {
        q: "Are AI chatbots allowed on WhatsApp in 2026?",
        a: "Business AI is. From 15 January 2026, WhatsApp's Business Solution terms bar general-purpose AI assistants whose AI is itself the product. Businesses using AI to serve their own customers, such as taking bookings and answering questions, remain allowed. A dental clinic's AI receptionist that answers only about the clinic's services, on the official WhatsApp Business Platform, falls in the allowed group.",
      },
      {
        q: "What does an AI receptionist do if a patient reports a dental emergency?",
        a: "A safe one does not assess the symptom. It recognises urgent signs such as swelling, fever, heavy bleeding or trauma, alerts the clinic's on-call person immediately with the full conversation, and tells the patient what happens next, including when to go to an emergency department. Ask every vendor to demonstrate this live before you sign anything.",
      },
      {
        q: "Is patient data safe with an AI dental receptionist?",
        a: "It depends on the vendor's setup, so ask. Patient messages often contain health data, which Saudi Arabia's PDPL treats as sensitive data with additional controls. Check where conversations are stored, who can access them and for how long, whether you can read every conversation, and whether the vendor will sign a data processing agreement that fits your local law.",
      },
      {
        q: "How much does an AI receptionist for a dental clinic cost?",
        a: "Expect two parts: the vendor's subscription and Meta's WhatsApp fees. Since 1 July 2025 Meta charges per delivered template message, such as reminders sent outside the 24-hour window, while free-form replies inside the customer service window are free. Compare the total with the cost of after-hours staff cover, and with the first visits you lose to slow replies.",
      },
    ],
    sources: [
      {
        label: "TechCrunch — WhatsApp changes its terms to bar general-purpose chatbots from its platform (2025)",
        url: "https://techcrunch.com/2025/10/18/whatssapp-changes-its-terms-to-bar-general-purpose-chatbots-from-its-platform/",
      },
      {
        label: "Meta for Developers — WhatsApp Business Platform: Send messages (2026)",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages",
      },
      {
        label: "Meta for Developers — WhatsApp Business Platform: Pricing (2026)",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing",
      },
      { label: "WhatsApp — Business Messaging Policy (2026)", url: "https://business.whatsapp.com/policy" },
      { label: "DataReportal — Digital 2025: Saudi Arabia (2025)", url: "https://datareportal.com/reports/digital-2025-saudi-arabia" },
      {
        label: "Clyde & Co — Saudi Arabia's Personal Data Protection Law becomes fully enforceable (2024)",
        url: "https://www.clydeco.com/en/insights/2024/09/saudi-arabia-s-personal-data-protection-law-become",
      },
      {
        label: "Cochrane — Mobile phone messaging reminders for attendance at healthcare appointments (2013)",
        url: "https://www.cochrane.org/evidence/CD007458_mobile-phone-messaging-reminders-attendance-healthcare-appointments",
      },
    ],
    keywords: [
      "AI receptionist for dental clinics",
      "AI dental receptionist",
      "virtual receptionist dental practice",
      "AI front desk dental",
      "dental clinic chatbot WhatsApp",
      "AI receptionist WhatsApp",
      "AI receptionist for dentists Saudi Arabia",
      "dental clinic AI assistant",
    ],
    minutes: 9,
  },

  ar: {
    title: "موظف استقبال ذكي لعيادة الأسنان: ماذا يفعل فعلًا وكيف تختاره",
    seoTitle: "موظف استقبال ذكي لعيادة الأسنان: دليل الاختيار 2026",
    description:
      "ماذا يفعل موظف الاستقبال الذكي في عيادة الأسنان على واتساب، وأين يجب أن يتوقف، وكيف يقارن بفريقك، و12 سؤالًا تطرحها على المزوّد قبل أن توقّع.",
    answer:
      "موظف الاستقبال الذكي لعيادة الأسنان يرد على المرضى في واتساب خلال ثوانٍ ليلًا ونهارًا، من معلومات تعتمدها العيادة. يجيب عن الأسعار، ويحجز المواعيد ويعدّلها، ويرسل التذكيرات والمتابعات وتعليمات ما بعد العلاج ودعوات الفحص الدوري، ويحوّل كل ما هو عاجل أو طبي إلى الفريق مع سياق المحادثة كاملًا. لا يشخّص. اختر نظامًا مبنيًا على منصة واتساب للأعمال الرسمية.",
    takeaways: [
      "موظف الاستقبال الذكي يحمل ضغط واتساب المتكرر ووردية الليل، ويبقى لفريقك الحكم والتعاطف وكل ما هو طبي.",
      "سرعة الرد إيراد: المريض الذي يقارن بين العيادات في 23:41 يحجز غالبًا مع أول من يرد عليه بإجابة واضحة.",
      "شروط واتساب في 2026 تمنع روبوتات الذكاء الاصطناعي العامة، وتُبقي استخدامه في الحجوزات وأسئلة العملاء مسموحًا.",
      "الأمان يأتي من تصميم تستطيع التحقق منه: منصة رسمية، ومعلومات تعتمدها العيادة، وقواعد تحويل مكتوبة، وسجل كامل للمحادثات.",
      "قبل أن توقّع مع أي مزوّد، اطلب أن يريك مباشرة كيف يرد نظامه على رسالة في الثانية فجرًا عن تورم وحرارة.",
    ],
    blocks: [
      { t: "h2", id: "why-reply-speed-matters", text: "لماذا تحدد سرعة الرد أي عيادة تكسب المريض؟" },
      {
        t: "p",
        text: "الساعة 23:41 ليلة الأربعاء. تصل رسالة إلى واتساب العيادة: «السلام عليكم، بكم زراعة السن؟ أقدر أجيكم السبت». العيادة أغلقت في التاسعة مساءً. في العاشرة وخمس دقائق صباحًا تفتح موظفة الاستقبال المحادثة وترد بلطف وبالسعر الصحيح. وفي العاشرة وأربعين دقيقة يأتي الرد: «مشكورين، حجزت في عيادة ثانية».",
      },
      {
        t: "p",
        text: "لم يخطئ أحد؛ موظفة الاستقبال كانت نائمة، وهذا حقها. لكن المريض الذي يقارن بين العيادات في آخر الليل يراسل في الغالب أكثر من عيادة، وأول إجابة واضحة تحمل موعدًا متاحًا هي التي تفوز عادة. **المشكلة ليست في فريقك: مكتب الاستقبال يعمل وردية واحدة، وواتساب يعمل ثلاث ورديات.**",
      },
      {
        t: "p",
        text: "وهناك تكلفة أقل وضوحًا. على منصة واتساب للأعمال، تفتح رسالة المريض [نافذة خدمة العملاء](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages) لمدة 24 ساعة، وتتجدد مع كل رسالة جديدة منه. داخل هذه النافذة تستطيع العيادة أن ترد بحرية، وخارجها لا ترسل إلا رسائل قوالب معتمدة مسبقًا. ورسالة وصلت ليلة العيد وفُتحت بعد الإجازة تكون قد فاتتها النافذة.",
      },
      { t: "h3", text: "حسبة بسيطة لصندوق رسائل مغلق" },
      { t: "p", text: "ضع أرقام عيادتك مكان هذه الأرقام. هذا مثال توضيحي، وليس متوسطًا للقطاع:" },
      {
        t: "ul",
        items: [
          "**استفسارات بعد الدوام:** لنفترض أن 40 رسالة من مرضى جدد تصل شهريًا بعد الإغلاق.",
          "**مرضى يضيعون قبل الصباح:** إذا حجز واحد من كل أربعة منهم في مكان آخر قبل أن ترد، فهذه 10 زيارات أولى كل شهر.",
          "**قيمتهم الحقيقية:** اضرب العدد في قيمة خطة العلاج الأولى المعتادة، لا في رسوم الاستشارة. في استفسار عن الزراعة، هذه هي الحالة كاملة.",
        ],
      },
      {
        t: "p",
        text: "أي 120 زيارة أولى ضائعة في السنة، قبل أن تحسب الفحوص الدورية والإحالات التي كان سيجلبها هؤلاء المرضى. وتكلفة الرد المتأخر لا تظهر في أي تقرير، ولهذا بالضبط تستمر.",
      },

      { t: "h2", id: "what-it-does", text: "ماذا يفعل موظف الاستقبال الذكي فعلًا في عيادة الأسنان؟" },
      {
        t: "p",
        text: "بعيدًا عن لغة التسويق، موظف الاستقبال الذكي (أو «المساعد الذكي»، أو «موظفة الاستقبال بالذكاء الاصطناعي» كما تسميها بعض الشركات) برنامج يقرأ رسالة المريض، ويفهم ما يريده، ويجيب من معلومات اعتمدتها عيادتك، ثم ينفّذ إجراءات في أنظمتك: التقويم، وملف المريض، وقائمة التذكيرات. هكذا يبدو يوم عمل واحد.",
      },
      {
        t: "table",
        head: ["الوقت", "ما يحدث", "ما يفعله موظف الاستقبال الذكي"],
        rows: [
          ["07:30", "العيادة تفتح", "يرسل للفريق ملخصًا: محادثات الليل، والحجوزات الجديدة، ومريضان يحتاجان ردًا من شخص"],
          ["10:15", "الاستقبال مشغول بالمراجعين", "يتولى طابور واتساب: ساعات العمل، والمواقف، وشركات التأمين المعتمدة، والتحضير لجلسة التنظيف"],
          ["11:20", "«كم سعر الفينير؟»", "يذكر نطاق السعر المعتمد وما الذي يغيّره، ويعرض موعد استشارة"],
          ["14:00", "«أقدر أأجل موعد الخميس للأسبوع الجاي؟»", "يجد موعدًا متاحًا، وينقل الحجز في التقويم، ويؤكده"],
          ["17:00", "جدول الغد اكتمل", "يرسل التذكيرات مع خيار التأكيد أو تغيير الموعد"],
          ["19:30", "مريض خلع ضرسه اليوم", "يرسل تعليمات ما بعد الخلع التي اعتمدها الطبيب، ثم يطمئن عليه صباح الغد"],
          ["21:00", "استفسار عن الزراعة توقف قبل 5 أيام", "يرسل متابعة واحدة مفيدة مع موعد محدد"],
          ["23:41", "مريض جديد يسأل عن الزراعة", "يرد خلال ثوانٍ بلغة المريض، ويسأل سؤالًا لفهم حالته، ثم يحجز استشارة"],
          ["02:07", "«وجهي وارم وعندي حرارة»", "لا يقيّم العَرَض؛ ينبّه الطبيب المناوب ويرسل له المحادثة كاملة، ويخبر المريض بما سيحدث الآن"],
        ],
        caption: "يوم عمل توضيحي. وفي الخلفية تعمل دعوات الفحص الدوري، فتدعو المرضى للعودة حسب الفترة التي حددها طبيبهم.",
      },
      {
        t: "p",
        text: "الحجز هو المكان الذي تتركز فيه القيمة، وهو أيضًا المكان الذي تسقط فيه المنتجات الضعيفة: النظام الذي يكتفي بسؤال المريض عن «الوقت المناسب له» ثم ينتظر موظفًا ليتصل به لم يحجز شيئًا. شرحنا مسار الحجز الكامل في دليل [حجز مواعيد عيادة الأسنان عبر واتساب](/ar/blog/whatsapp-appointment-booking-dental-clinic).",
      },
      { t: "h3", text: "ما لا يجوز أن يفعله أبدًا" },
      {
        t: "ul",
        items: [
          "**التشخيص.** لا يحكم إن كان الألم أو التورم أو النزيف خطيرًا، ولا يقترح دواءً.",
          "**تجاوز تعليمات ما بعد العلاج المعتمدة.** يرسل ما وقّع عليه أطباؤك، ولا يضيف إليه شيئًا.",
          "**اختلاق المعلومات.** لا أسعار ولا خصومات ولا مواعيد ولا وعود علاجية من عنده. وإذا لم يجد الإجابة في المعلومات المعتمدة، يقول ذلك صراحة ويُدخل الفريق.",
          "**التظاهر بأنه إنسان.** إذا سأل المريض «أكلّم شخص ولا برنامج؟» يجيب بوضوح أنه المساعد الذكي للعيادة.",
          "**التعامل مع الطوارئ وحده.** الرسائل العاجلة تذهب فورًا إلى شخص محدد، ويحصل المريض على توجيه سلامة واضح.",
          "**مراسلة من لم يوافق على التواصل،** أو الاستمرار بعد أن يطلب المريض التوقف، وهذا ما تشترطه أصلًا [سياسة واتساب لمراسلات الأعمال](https://business.whatsapp.com/policy).",
        ],
      },

      { t: "h2", id: "ai-vs-human-vs-chatbot", text: "موظف استقبال ذكي أم موظفة استقبال أم رد آلي؟" },
      {
        t: "p",
        text: "كثير من أصحاب العيادات يضعون موظف الاستقبال الذكي في سلة واحدة مع الرد الآلي في واتساب، أو مع «الشات بوت» البسيط الذي يعرض على المريض قائمة أزرار. لكن الثلاثة يؤدون أعمالًا مختلفة تمامًا. هذه مقارنة منصفة.",
      },
      {
        t: "table",
        head: ["المعيار", "موظفة الاستقبال", "رد آلي أو قائمة أزرار", "موظف الاستقبال الذكي"],
        rows: [
          ["التوفر", "ساعات الدوام، ومحادثة واحدة في كل مرة وقت الزحمة", "على مدار الساعة", "على مدار الساعة، ومحادثات كثيرة في الوقت نفسه"],
          ["اللغات", "اللغات التي يتحدثها فريقك", "نصوص ثابتة بلغة أو لغتين غالبًا", "بلغة المريض ولهجته"],
          ["تذكّر المحادثات السابقة", "جيد مع المرضى الدائمين، ومتقطع بين الورديات", "لا يتذكر شيئًا", "ما سأل عنه كل مريض، وما عُرض عليه من سعر، وهل حجز"],
          ["الأسئلة المكتوبة بحرية", "نعم", "فقط عبر الزر الصحيح", "نعم، من المعلومات التي اعتمدتها العيادة"],
          ["الحجز في التقويم", "نعم", "نادرًا؛ يكتفي غالبًا بتسجيل طلب", "نعم، إذا رُبط بتقويم العيادة"],
          ["التذكير والمتابعة", "حين يتوفر الوقت", "رسائل جماعية ثابتة", "في توقيت يناسب وضع كل مريض"],
          ["الحكمة والتعاطف", "الأقوى", "لا شيء", "محدود، ويجب أن يحوّل للفريق"],
          ["الطوارئ والشكاوى", "تتعامل معها", "لا يستطيع", "يكتشفها ويحوّلها للفريق"],
          ["طبيعة التكلفة", "راتب لوردية واحدة، والليل والإجازات تكلفة إضافية", "منخفضة، لكنه لا يؤدي عملًا يُذكر", "اشتراك ورسوم قوالب واتساب"],
          ["التحويل إلى شخص", "تمشي إلى مكتب الطبيب", "غير موجود", "يسلّم المحادثة للفريق مع سياقها كاملًا"],
        ],
        caption: "لا يوجد صف يجعل فريقك غير ضروري. الذكاء الاصطناعي يحمل الضغط وساعات الليل، والناس يحتفظون بالحكم والتقدير.",
      },
      {
        t: "p",
        text: "الإعداد الناجح ليس «إما هذا أو ذاك». موظف الاستقبال الذكي يأخذ الأسئلة المتكررة والحجوزات ووردية الليل، وتستعيد موظفة الاستقبال الساعات التي كانت تقضيها في كتابة مواعيد الدوام، لتتفرغ للمحادثات التي تحتاج إنسانًا: المريض القلق في زيارته الأولى، والشكوى، وخطة العلاج المعقدة.",
      },
      {
        t: "p",
        text: "وفي التكلفة، بحسب [تسعير منصة واتساب للأعمال](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing) تحاسب Meta على كل رسالة قالب تُسلَّم، بينما الردود الحرة داخل نافذة خدمة العملاء مجانية. والنظام الذي يرد داخل هذه النافذة يُبقي الرسوم منخفضة.",
      },

      { t: "h2", id: "why-whatsapp", text: "لماذا واتساب؟ وهل ما زال الذكاء الاصطناعي مسموحًا عليه في 2026؟" },
      {
        t: "p",
        text: "في الخليج، سؤال القناة يجيب عن نفسه. كان في السعودية 33.9 مليون مستخدم للإنترنت مطلع 2025، بنسبة انتشار 99.0% بحسب [DataReportal](https://datareportal.com/reports/digital-2025-saudi-arabia)، ومعظم المرضى يتعاملون مع واتساب على أنه الباب الأمامي للعيادة: فيه يحفظون رقمها، ومنه يسألون ويحجزون. أما الهاتف الذي لا يرد بعد التاسعة مساءً، ونموذج الموقع الذي لا يقرؤه أحد قبل الأحد، فهما نسختان أبطأ من القناة نفسها.",
      },
      {
        t: "p",
        text: "كثير من أصحاب العيادات يسألون: هل مُنعت روبوتات الذكاء الاصطناعي من واتساب؟ الجواب: جزئيًا، والفرق مهم. منذ 15 يناير 2026 تمنع شروط WhatsApp Business Solution مساعدي الذكاء الاصطناعي العامين، أي الروبوتات من نوع ChatGPT التي يكون الذكاء الاصطناعي نفسه هو منتجها، من استخدام واجهة الأعمال، [بحسب ما نقلته TechCrunch](https://techcrunch.com/2025/10/18/whatssapp-changes-its-terms-to-bar-general-purpose-chatbots-from-its-platform/). أما الشركات التي تستخدم الذكاء الاصطناعي لخدمة عملائها، مثل الحجز والإجابة عن الأسئلة، فما زال ذلك مسموحًا لها.",
      },
      {
        t: "p",
        text: "موظف استقبال يجيب فقط عن خدمات عيادتك ومن معلوماتها المعتمدة يقع بوضوح في الجهة المسموحة. أما روبوت يدردش مع أي شخص في أي موضوع، فهو تصميم خاطئ لعيادة أسنان في كل الأحوال.",
      },
      {
        t: "p",
        text: "وهناك نتيجة عملية لتصميم المنصة: التذكيرات ودعوات الفحص الدوري والمتابعات التي تُرسل بعد مرور 24 ساعة على آخر رسالة من المريض يجب أن تكون قوالب معتمدة مسبقًا. والمزوّد الجاد يجهّزها قبل أن تبدأ العمل.",
      },

      { t: "h2", id: "safety-and-privacy", text: "هل موظف الاستقبال الذكي آمن على المرضى وبياناتهم؟" },
      {
        t: "p",
        text: "يمكن أن يكون آمنًا، لكن الأمان يأتي من قرارات تصميم تستطيع أن تتحقق منها بنفسك، لا من وعود المزوّد. وهذه أهم خمسة منها.",
      },
      { t: "h3", text: "1. المنصة الرسمية، لا الطرق الالتفافية" },
      {
        t: "p",
        text: "بعض أدوات «أتمتة واتساب» الرخيصة تشغّل تطبيق واتساب العادي أو واتساب ويب ببرامج نصية، بدل استخدام منصة واتساب للأعمال الرسمية. هذا يخالف شروط واتساب ويعرّض للحظر الرقمَ الذي يحفظه مرضاك في جوالاتهم منذ سنوات. لا تنظر إلا في الأدوات المبنية على المنصة الرسمية.",
      },
      { t: "h3", text: "2. البيانات الصحية بيانات حساسة" },
      {
        t: "p",
        text: "أصبح نظام حماية البيانات الشخصية في السعودية نافذًا بالكامل منذ 14 سبتمبر 2024، وهو يصنّف البيانات الصحية بيانات حساسة تخضع لضوابط إضافية، بحسب [Clyde & Co](https://www.clydeco.com/en/insights/2024/09/saudi-arabia-s-personal-data-protection-law-become). وعبارة مثل «لثتي تنزف من بعد علاج العصب» بيانات صحية. اسأل أين تُخزَّن المحادثات، ومن يستطيع قراءتها، وكم تُحفظ، واطلب اتفاقية معالجة بيانات مكتوبة. ولكل دولة خليجية، ولتركيا، قوانينها الخاصة، فراجع ما ينطبق عليك مع مستشارك.",
      },
      { t: "h3", text: "3. معلومات تعتمدها العيادة" },
      {
        t: "p",
        text: "يجب أن يجيب النظام فقط من قاعدة معرفة توقّع عليها عيادتك: الخدمات، والأسعار أو نطاقاتها، والأطباء، وساعات العمل، والتحضير، وتعليمات ما بعد العلاج. وحين يخرج السؤال عنها، فالجواب الصحيح هو «خلني أتأكد لك من الفريق»، لا تخمين واثق.",
      },
      { t: "h3", text: "4. قواعد تحويل مكتوبة" },
      {
        t: "p",
        text: "حدّد مسبقًا ما يذهب دائمًا إلى شخص: ألم مع تورم أو حرارة، ونزيف لا يتوقف، وإصابة، وشكوى، وطلب استرداد، وأي سؤال طبي، وأي مريض يطلب التحدث مع إنسان. ويصل التحويل ومعه المحادثة كاملة، حتى لا يضطر المريض إلى إعادة قصته من البداية.",
      },
      { t: "h3", text: "5. سجل كامل لكل محادثة" },
      {
        t: "p",
        text: "يجب أن تستطيع قراءة كل محادثة، ومعرفة ما قاله النظام ومتى، ومن تسلّم المحادثة بعده. وإذا لم يستطع المزوّد أن يريك ذلك، فلن تستطيع أنت الإشراف على النظام.",
      },
      {
        t: "callout",
        title: "اختبار الثانية فجرًا",
        text: "اطلب من المزوّد أن يريك، مباشرة، الرد على هذه الرسالة: «خدي وارم وعندي حرارة من أمس بالليل». الرد الآمن: «سلامتك، آسفين على اللي تمر فيه. أنا المساعد الذكي للعيادة وما أقدر أقيّم الأعراض، لكني نبّهت الطبيب المناوب الحين وأرسلت له رسالتك. إذا حسيت بصعوبة في التنفس أو البلع، توجّه فورًا لأقرب طوارئ». لا تشخيص، وشخص نُبّه فورًا، وخطوة تالية واضحة.",
      },
      { t: "cta" },

      { t: "h2", id: "buyers-checklist", text: "12 سؤالًا تطرحها على أي مزوّد قبل أن توقّع" },
      { t: "p", text: "خذ هذه القائمة إلى كل عرض تجريبي. والإجابات المبهمة إجابات أيضًا." },
      {
        t: "ol",
        items: [
          "**هل يعمل على منصة واتساب للأعمال الرسمية، وعلى رقمنا الحالي؟**",
          "**من يعتمد ما يقوله عن الأسعار، وكم يستغرق تعديله؟** تغيير السعر يجب أن يأخذ دقائق، لا طلب دعم فني.",
          "**ماذا يحدث في الثانية فجرًا إذا كتب مريض أن عنده تورمًا وحرارة؟** اطلب أن تراه بعينك، لا أن تسمع عنه.",
          "**هل يرد باللهجة الخليجية، وباللغات الأخرى التي يستخدمها مرضانا؟** جرّبه برسالة قصيرة غير رسمية تخلط العربي بالإنجليزي.",
          "**هل يحجز ويعدّل ويلغي المواعيد مباشرة في تقويمنا؟** أم يكتفي بجمع طلبات ليتصل بها أحد لاحقًا؟",
          "**كيف يحوّل المحادثة للفريق، وإلى من، ومع أي سياق؟** وماذا يرى المريض وهو ينتظر؟",
          "**هل نستطيع رؤية كل محادثة، ومن تسلّمها ومتى؟**",
          "**هل يتذكر المحادثات السابقة، مثل سؤال المريض عن الزراعة الأسبوع الماضي ونطاق السعر الذي أُرسل له؟**",
          "**كيف تُرسل التذكيرات ودعوات الفحص بعد انتهاء نافذة الـ24 ساعة، ومن يدفع رسوم القوالب؟**",
          "**أين تُخزَّن بيانات المرضى، ومن يصل إليها، وهل توقّعون معنا اتفاقية معالجة بيانات؟**",
          "**هل يقول إنه ذكاء اصطناعي إذا سُئل، وكيف يتعامل مع مريض يطلب إيقاف الرسائل؟**",
          "**ماذا تحتاجون من فريقنا لنبدأ، وماذا يحدث لبياناتنا ورقمنا إذا قررنا التوقف؟**",
        ],
      },

      { t: "h2", id: "30-day-rollout", text: "خطة التشغيل في 30 يومًا" },
      {
        t: "p",
        text: "تستطيع أن تبدأ خلال شهر دون أن تخاطر بعلاقتك مع أي مريض، إذا مشيت بهذا الترتيب.",
      },
      { t: "h3", text: "الأسبوع 1: اكتب ما تعرفه العيادة" },
      {
        t: "p",
        text: "صدّر محادثات واتساب للشهر الماضي، واستخرج منها أكثر 30 سؤالًا يتكرر. اكتب لها إجابات معتمدة، والأسعار أو نطاقاتها، وجدول كل طبيب، وتعليمات التحضير وما بعد العلاج التي وقّع عليها طبيب. ثم اكتب قواعد التحويل وأرقام المناوبين في الليل والإجازات.",
      },
      { t: "h3", text: "الأسبوع 2: اربط النظام وتدرّب عليه" },
      {
        t: "p",
        text: "اربط رقم واتساب والتقويم. ثم اجعل الفريق يمثّل دور المرضى لعدة أيام: المريض الذي يفاوض على السعر، والمريض القلق في زيارته الأولى، والسائحة التي تكتب بالتركية، وحالة التورم في الثانية فجرًا. أصلح كل إجابة لا تبدو صحيحة قبل أن يراها مريض حقيقي.",
      },
      { t: "h3", text: "الأسبوع 3: ابدأ خارج ساعات الدوام" },
      {
        t: "p",
        text: "دع النظام يرد خارج ساعات العمل ووقت ضغط الاستقبال. وكل صباح، يقرأ أحد أفراد الفريق كل محادثات الليل ويصحح قاعدة المعرفة. توقّع تصحيحات صغيرة: ملاحظة عن المواقف لم تُكتب، أو نطاق سعر يحتاج جملة توضيح.",
      },
      { t: "h3", text: "الأسبوع 4: اليوم كاملًا، مع التذكيرات والمتابعات" },
      {
        t: "p",
        text: "وسّع العمل إلى كل الساعات، ثم فعّل التذكيرات، ومتابعة المرضى الذين توقفوا عن الرد، ورسائل ما بعد العلاج. والتذكيرات ليست إضافة شكلية: وجدت [مراجعة كوكرين](https://www.cochrane.org/evidence/CD007458_mobile-phone-messaging-reminders-attendance-healthcare-appointments) للتجارب العشوائية أن التذكير بالرسائل النصية رفع نسبة الحضور مقارنة بعدم التذكير. وتجد التوقيت والصياغة في دليلَي [تقليل تغيّب المرضى عن مواعيد الأسنان](/ar/blog/reduce-dental-no-shows) و[إعادة المرضى غير النشطين إلى عيادة الأسنان](/ar/blog/reactivate-inactive-dental-patients).",
      },
      {
        t: "p",
        text: "قِس قبل وبعد: متوسط وقت أول رد، وعدد الاستفسارات التي تصل بعد الدوام، والحجوزات التي تمت خارج ساعات العمل، وعدد التحويلات وسرعة استلام الفريق لها، ونسبة التغيّب عن المواعيد.",
      },

      { t: "h2", id: "how-lina-does-this", text: "كيف تفعل لينا ذلك" },
      {
        t: "p",
        text: "لينا هي موظفة الاستقبال الذكية التي نبنيها في Flowramo، وقد صُممت حول القواعد السابقة نفسها. تدير واتساب عيادتك على منصة واتساب للأعمال الرسمية، وترد خلال ثوانٍ ليلًا ونهارًا بالعربية والإنجليزية والتركية، بلغة المريض ولهجته.",
      },
      {
        t: "ul",
        items: [
          "تجيب فقط من معلومات تعتمدها عيادتك: الخدمات، والأسعار أو نطاقاتها، والأطباء، وساعات العمل، والموقع، والتحضير، وتعليمات ما بعد العلاج.",
          "تجد المواعيد المتاحة، وتحجز أو تعدّل أو تلغي في تقويمك، ثم ترسل التأكيدات والتذكيرات.",
          "تتذكر كل محادثة، وتتابع المريض حين يصمت، وترسل تعليمات ما بعد العلاج، وتدعو المرضى للعودة إلى الفحص الدوري.",
          "تحوّل المحادثات العاجلة أو الطبية أو الحساسة إلى فريقك مع سياقها كاملًا. ولا تشخّص.",
          "ترسل لك ملخصًا يوميًا بالحجوزات والمحادثات والمرضى المعرّضين للضياع.",
        ],
      },
      { t: "p", text: "طبّق علينا قائمة الأسئلة أعلاه كما تطبّقها على أي مزوّد آخر." },
    ],
    faq: [
      {
        q: "هل يقدر موظف الاستقبال الذكي يحل محل موظفة الاستقبال في العيادة؟",
        a: "ليس بشكل جيد، ولا ينبغي أن يحاول. هو يتولى الأسئلة المتكررة في واتساب والحجوزات والتذكيرات ووردية الليل، فتتفرغ موظفة الاستقبال للمحادثات التي تحتاج إنسانًا: المريض القلق، والشكوى، وخطة العلاج المعقدة، وأي سؤال طبي. الإعداد الواقعي هو الاثنان معًا: نظام يحمل الضغط، وفريق يحتفظ بالحكم والتقدير.",
      },
      {
        q: "هل استخدام الذكاء الاصطناعي في واتساب مسموح بعد قرار 2026؟",
        a: "نعم للاستخدام التجاري. منذ 15 يناير 2026 تمنع شروط واتساب للأعمال مساعدي الذكاء الاصطناعي العامين الذين يكون الذكاء الاصطناعي نفسه هو منتجهم. أما الشركات التي تستخدمه لخدمة عملائها، مثل الحجز والإجابة عن الأسئلة، فما زال ذلك مسموحًا لها. وموظف استقبال ذكي يجيب فقط عن خدمات العيادة، على منصة واتساب للأعمال الرسمية، يقع ضمن المسموح.",
      },
      {
        q: "وش يسوي موظف الاستقبال الذكي إذا كتب مريض عن حالة طارئة بالليل؟",
        a: "النظام الآمن لا يقيّم الأعراض. يتعرف على العلامات العاجلة مثل التورم أو الحرارة أو النزيف الشديد أو الإصابة، وينبّه الشخص المناوب في العيادة فورًا ومعه المحادثة كاملة، ويخبر المريض بما سيحدث بعدها، ومتى يتوجه إلى الطوارئ. اطلب من كل مزوّد أن يريك ذلك مباشرة قبل أن توقّع أي عقد.",
      },
      {
        q: "هل بيانات المرضى آمنة مع موظف الاستقبال الذكي؟",
        a: "يعتمد ذلك على إعداد المزوّد، فاسأله مباشرة. رسائل المرضى تحتوي غالبًا بيانات صحية، ونظام حماية البيانات الشخصية في السعودية يعاملها بيانات حساسة تخضع لضوابط إضافية. تحقق أين تُخزَّن المحادثات، ومن يصل إليها، وكم تُحفظ، وهل تستطيع قراءة كل محادثة، وهل سيوقّع المزوّد اتفاقية معالجة بيانات تناسب القانون في بلدك.",
      },
      {
        q: "كم تكلفة موظف استقبال ذكي لعيادة أسنان؟",
        a: "التكلفة من جزأين: اشتراك المزوّد، ورسوم واتساب التي تفرضها Meta. منذ 1 يوليو 2025 تحاسب Meta على كل رسالة قالب تُسلَّم، مثل التذكيرات المرسلة خارج نافذة الـ24 ساعة، بينما الردود الحرة داخل نافذة خدمة العملاء مجانية. قارن المجموع بتكلفة تغطية ما بعد الدوام بموظفين، وبالزيارات الأولى التي تخسرها بسبب الرد المتأخر.",
      },
    ],
    sources: [
      {
        label: "TechCrunch — WhatsApp changes its terms to bar general-purpose chatbots from its platform (2025)",
        url: "https://techcrunch.com/2025/10/18/whatssapp-changes-its-terms-to-bar-general-purpose-chatbots-from-its-platform/",
      },
      {
        label: "Meta for Developers — WhatsApp Business Platform: Send messages (2026)",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages",
      },
      {
        label: "Meta for Developers — WhatsApp Business Platform: Pricing (2026)",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing",
      },
      { label: "WhatsApp — Business Messaging Policy (2026)", url: "https://business.whatsapp.com/policy" },
      { label: "DataReportal — Digital 2025: Saudi Arabia (2025)", url: "https://datareportal.com/reports/digital-2025-saudi-arabia" },
      {
        label: "Clyde & Co — Saudi Arabia's Personal Data Protection Law becomes fully enforceable (2024)",
        url: "https://www.clydeco.com/en/insights/2024/09/saudi-arabia-s-personal-data-protection-law-become",
      },
      {
        label: "Cochrane — Mobile phone messaging reminders for attendance at healthcare appointments (2013)",
        url: "https://www.cochrane.org/evidence/CD007458_mobile-phone-messaging-reminders-attendance-healthcare-appointments",
      },
    ],
    keywords: [
      "موظف استقبال ذكي لعيادة الأسنان",
      "موظفة استقبال بالذكاء الاصطناعي",
      "مساعد ذكي لعيادة اسنان",
      "رد آلي واتساب عيادة",
      "شات بوت عيادة اسنان",
      "ذكاء اصطناعي للعيادات",
      "حجز موعد اسنان واتساب",
      "رد تلقائي واتساب للعيادات",
      "موظف استقبال عيادة اسنان بالذكاء الاصطناعي",
    ],
    minutes: 11,
  },
};

export default article;
