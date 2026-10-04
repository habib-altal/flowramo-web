import type { Article } from "./types";

const article: Article = {
  slug: "reactivate-inactive-dental-patients",
  published: "2026-10-04",
  updated: "2026-10-04",
  related: ["reduce-dental-no-shows", "ai-receptionist-for-dental-clinics"],

  en: {
    title: "How to reactivate inactive dental patients: a WhatsApp playbook",
    seoTitle: "How to Reactivate Inactive Dental Patients: Scripts",
    description:
      "How to reactivate inactive dental patients: segment your list, send each group the right WhatsApp message, and track who comes back. Scripts included.",
    answer:
      "To reactivate inactive dental patients, treat anyone past their own recall interval as inactive, then split the list by reason: overdue recall, unfinished treatment, quoted but not booked, missed and never rebooked, long-lapsed. Send each group a WhatsApp message from their dentist with a clear reason and two specific slots, follow up twice within three weeks, then stop.",
    takeaways: [
      "Patients rarely leave with a no; most drift, and a timely, personal message brings a share of them back without paying to find them again.",
      "Overdue means past that patient's own recall interval, which NICE guidance sets between 3 and 24 months by risk, not a blanket six months.",
      "The reminder channel matters less than relevance: in a Taiwan dental study, postal, text and phone reminders produced similar return rates.",
      "Send three touches over about three weeks, each a pre-approved WhatsApp template with an easy opt-out, then stop.",
      "Track reactivation rate, booked revenue, replies and opt-outs monthly, and book the next visit before patients leave so fewer go inactive.",
    ],
    blocks: [
      { t: "h2", id: "cheapest-new-patient", text: "Why is your patient list the cheapest place to find bookings?" },
      {
        t: "p",
        text: "Open your practice software and sort patients by last visit. A few screens down is someone who was quoted for two crowns last spring, said “let me check my diary”, and never heard from you again. She has not chosen another clinic. She has been busy, and nobody reminded her that the plan was still open.",
      },
      {
        t: "p",
        text: "Every clinic has hundreds of these files. Patients rarely leave with a no. They drift: a new job, a baby, hesitation over cost, a recall card sent to an old address, a price question nobody answered. Each already knows your clinic and trusts one of your doctors. **The cheapest new patient is the one already in your files.** Winning them back costs a message, not an advertising budget.",
      },
      {
        t: "p",
        text: "The loss is quiet, which is why it is easy to ignore. An unfinished treatment plan is work you already diagnosed and quoted but never delivered. An unbooked recall is a check-up that would have found the next filling. Left alone, both become patients who answer someone else's message first.",
      },
      {
        t: "callout",
        title: "An illustrative example",
        text: "A clinic with 3,000 patient records finds 900 past their recall interval with nothing booked. If a careful campaign brings back 1 in 10, that is 90 check-ups, before counting the treatment those check-ups uncover. The numbers are illustrative; your own list holds the real figure.",
      },

      { t: "h2", id: "what-counts-as-inactive", text: "What counts as an inactive dental patient?" },
      {
        t: "p",
        text: "Most clinics call a patient inactive after six months without a visit. That rule is simple, and wrong for many patients. The NICE guideline on dental recall, [CG19](https://www.nice.org.uk/guidance/cg19), says the interval between oral health reviews should be tailored to each patient's disease risk, from 3 months up to 24 months for adults. For practical reasons, adults are assigned 3, 6, 12, 18 or 24 months.",
      },
      {
        t: "p",
        text: "The six-month habit is hard to break. A [qualitative study of 25 NHS dentists in Wales](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8916955/) notes that most patients still attend six-monthly, and many dentists were unwilling to extend recalls to 24 months even for the lowest-risk patients. For reactivation, this cuts both ways: a low-risk patient on a 12-month interval is not overdue at month seven, while a high-risk patient on a 3-month interval is seriously overdue at month six.",
      },
      {
        t: "p",
        text: "So use this definition: **a patient is inactive when they are past their own recall interval and have no future appointment booked.** If your records hold no interval per patient, start recording one at every check-up; until then, use 12 months and have each dentist flag their high-risk patients.",
      },
      { t: "h3", text: "Split the list into six segments" },
      {
        t: "p",
        text: "Each segment drifted for a different reason, so each needs a different message.",
      },
      {
        t: "ul",
        items: [
          "**Overdue for recall:** regular patients past their interval. They need a nudge and a time, not persuasion.",
          "**Unfinished treatment plan:** treatment started but not completed, such as a root canal without its crown. A clinical risk as well as lost revenue.",
          "**Quoted but not booked:** asked about implants, aligners or veneers, then went quiet. Usually price, fear or timing.",
          "**Missed and never rebooked:** a no-show or late cancellation with nothing rebooked. Often embarrassment, not lack of intent.",
          "**One-time visitors:** came once, for an emergency or a single clean, and never returned.",
          "**Long-lapsed (18 to 24+ months):** some have moved or switched dentist; others are waiting for a reason to come back.",
        ],
      },

      {
        t: "h2",
        id: "why-blanket-reminders-underperform",
        text: "Why does “send everyone a reminder” underperform?",
      },
      {
        t: "p",
        text: "The instinct is to send one message to the whole list. Reminders do work: a [Cochrane review](https://www.cochrane.org/evidence/CD007458_mobile-phone-messaging-reminders-attendance-healthcare-appointments) of 8 trials found text-message reminders increased attendance compared with none (RR 1.14, moderate-quality evidence), similar to phone calls at lower cost per attendance. But those were reminders for appointments already booked. Reactivation asks for something harder: a decision to book.",
      },
      {
        t: "p",
        text: "The closest evidence for that decision is a [Taiwan study of tooth-scaling reminders](https://scholar.lib.ntnu.edu.tw/en/publications/effects-of-tooth-scaling-reminders-for-dental-outpatients-2/) in 389 dental outpatients, comparing postcards, text messages, phone calls and no reminder. Reminded patients were 2.6 to 2.9 times more likely to revisit, yet return rates were only 11–20% and **did not differ between reminder methods.** The highest return, 26%, came from patients who were satisfied with their care and also received a reminder, and 65% said reminders increased their intention to return.",
      },
      {
        t: "p",
        text: "The lesson: the channel is not the lever; relevance and the relationship are. A generic “time for your check-up” blast speaks to a long-lapsed patient and a mid-treatment patient in the same words. A message that names their dentist, their last treatment and a specific time does what a reminder alone cannot.",
      },

      { t: "h2", id: "reactivation-playbook", text: "How to reactivate inactive dental patients, step by step" },
      {
        t: "ol",
        items: [
          "**Clean the list.** Remove duplicates, anyone who asked not to be contacted and anyone known to have moved. Use international number format and note each patient's language.",
          "**Segment it.** Tag each patient with a segment, last treatment, last visit, recall interval and named dentist. Start with the segment that matches your free chair time.",
          "**Check consent.** The [WhatsApp Business Messaging Policy](https://business.whatsapp.com/policy) requires a person's opt-in before a business messages them, and that you honour opt-outs. If a patient never agreed to WhatsApp contact, collect opt-in at their next visit instead of messaging cold, and follow your country's rules on health data.",
          "**Choose the sender.** A message from “Dr. Sara at the clinic” reads as care; one from “the clinic” reads as marketing. Use the name of the dentist they last saw, with that dentist's agreement.",
          "**Personalise by last treatment.** Name what they had and why the next step matters now. The Taiwan authors concluded that a reminder combined with health education works; one line of real clinical reason is that education.",
          "**Offer two concrete slots.** “Tuesday 10:30 or Thursday 17:00?” is easier to answer than “let us know what suits you”. Two choices turn a decision into a reply.",
          "**Send three touches over about three weeks, then stop.** Day 0: the reason and two slots. Around day 7: answer the likely hesitation (cost, time, nerves). Around day 18 to 21: a short close that says you will stop messaging and the door stays open. After that, leave them until their next recall cycle.",
          "**Route replies to someone who answers instantly.** Replies arrive at 22:00 and on weekends, and a patient who writes “ok, Thursday” and hears nothing until morning cools fast. Whoever answers needs the patient's history in front of them.",
          "**Track every send.** Log who got which message, who replied, who booked and who opted out, or you cannot tell a campaign that worked from one that annoyed people.",
        ],
      },
      {
        t: "p",
        text: "Step 8 is where most campaigns leak: if a reply cannot become a booking inside the chat, the patient has to call in opening hours, and many will not. Our guide to [WhatsApp appointment booking for dental clinics](/en/blog/whatsapp-appointment-booking-dental-clinic) shows how to close that gap.",
      },

      { t: "h2", id: "segment-decision-table", text: "What does each segment need to hear?" },
      {
        t: "p",
        text: "Use this table to brief whoever sends the messages. The last column matters as much as the others: knowing when to stop protects your number and your reputation.",
      },
      {
        t: "table",
        caption: "Reactivation messages by segment",
        head: ["Segment", "What they need to hear", "Best offer or next step", "When to stop"],
        rows: [
          ["Overdue for recall", "It's time, and booking is easy", "Two specific check-up slots", "After 3 touches; retry next cycle"],
          [
            "Unfinished treatment",
            "Why finishing matters for this tooth",
            "A slot with the treating dentist",
            "After 3 touches; flag to the dentist",
          ],
          [
            "Quoted but not booked",
            "Straight answers on cost, time and comfort",
            "Short consultation; payment options if you offer them",
            "After 3 touches or a clear no",
          ],
          ["Missed, never rebooked", "No blame; the treatment still matters", "Two new slots for the same treatment", "After 2 to 3 touches"],
          ["One-time visitor", "What regular care adds", "A first routine check-up", "After 2 touches"],
          [
            "Long-lapsed (18 to 24+ months)",
            "We'd like to see you, or to update your file",
            "Restart check-up, or remove from the list",
            "After 2 touches; archive if no reply",
          ],
        ],
      },
      { t: "cta" },

      {
        t: "h2",
        id: "whatsapp-scripts",
        text: "What should a dental recall message say? Scripts for each segment",
      },
      {
        t: "p",
        text: "Adapt these to your clinic, replace the braces, and always name a person and a time.",
      },
      {
        t: "callout",
        title: "Overdue for recall",
        text: "Hi {name}, it's Dr. {doctor} from {clinic}. It's been {months} months since your last check-up, which is when we planned to see you again. I have Tuesday at 10:30 or Thursday at 17:00. Shall I keep one for you?",
      },
      {
        t: "callout",
        title: "Unfinished treatment plan",
        text: "Hi {name}, Dr. {doctor} here. We finished the root canal on your lower right molar, and the crown is the next step. A root-filled tooth stays fragile until it is crowned, so I'd rather not leave it long. Monday at 16:00 or Wednesday at 11:00?",
      },
      {
        t: "callout",
        title: "Quoted but not booked (implants, aligners)",
        text: "Hi {name}, it's {clinic}. You asked about {treatment} in {month}. Most people at this stage ask about timing and payment, so here are both: {two lines}. Dr. {doctor} has 15 minutes on Saturday at 12:00 or Sunday at 18:30 if you'd like to talk it through.",
      },
      {
        t: "callout",
        title: "Missed and never rebooked",
        text: "Hi {name}, we missed you on {date}. No problem, these things happen. Your {treatment} is still worth doing, so would Tuesday at 09:30 or Thursday at 15:00 work instead?",
      },
      {
        t: "callout",
        title: "Long-lapsed (18 to 24+ months)",
        text: "Hi {name}, it's Dr. {doctor} at {clinic}. It's been about two years, so I wanted to check in. If you've moved or changed dentist, just tell me and I'll update your file. If not, a check-up is a good restart: Monday at 10:00 or Wednesday at 17:30?",
      },
      {
        t: "p",
        text: "For one-time visitors, adapt the recall script to why they came (“your emergency visit in June”). Keep touches two and three short: “We also have early mornings and Saturdays,” then “I'll stop messaging about this; reply whenever you're ready.”",
      },
      { t: "h3", text: "The WhatsApp rules behind these messages" },
      {
        t: "p",
        text: "If a patient has not written in the last 24 hours, you can only send a pre-approved **template**; free-form messages are allowed only inside the 24-hour customer service window their message opens ([Meta developer docs](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages)). So every first touch is a template, with name, dentist and slots as variables.",
      },
      {
        t: "p",
        text: "[Templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview) are categorised as marketing, utility or authentication, and Meta reviews each against its content. A neutral reminder about something the patient agreed to, such as a booked appointment, can fit utility; inviting a lapsed patient back is usually marketing. Since 1 July 2025 Meta charges per delivered template, marketing being the most expensive; replies inside an open service window are free ([Meta pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing)).",
      },
      {
        t: "callout",
        title: "Handling opt-outs",
        text: "Give every template an easy way out, such as a “Stop messages” quick-reply button or “Reply STOP and we won't message you again.” Record each opt-out in the patient's file the same day so no other campaign reaches them, confirm once, and do not argue. A patient who feels respected may still book later.",
      },

      { t: "h2", id: "measure-reactivation", text: "How do you measure a reactivation campaign?" },
      { t: "p", text: "Four numbers, tracked per segment, tell you almost everything." },
      {
        t: "ul",
        items: [
          "**Reactivation rate:** patients who booked and attended, divided by patients messaged. Count attendance, not bookings.",
          "**Booked revenue from reactivated patients:** treatment they accepted within 90 days; a recall that uncovers two fillings is worth more than its fee.",
          "**Reply rate:** any reply, including “not now”. A low rate usually means a generic message or the wrong sender.",
          "**Opt-out rate:** if it climbs, you are messaging the wrong people or too often. Fix the list before the next send.",
        ],
      },
      {
        t: "p",
        text: "Keep a monthly rhythm: week one, refresh the segments; week two, send touch one to the next batch; weeks three and four, send follow-ups, review the numbers and rewrite the weakest script. Size each batch to your free chair time; overfilling creates long waits, and long waits create cancellations.",
      },

      { t: "h2", id: "retention", text: "How do you stop patients going inactive in the first place?" },
      { t: "p", text: "Reactivation fixes the past; retention stops the list refilling. Three habits do most of the work." },
      {
        t: "ul",
        items: [
          "**Book the next visit before they leave.** Then a reminder is all they need, which is the job reminders do best.",
          "**Check in after treatment.** An aftercare message the evening after an extraction or implant shows care, catches problems early and keeps the conversation open.",
          "**Tie recall reminders to each patient's interval.** Send the reminder before the interval the dentist set runs out, not when someone remembers to run a report.",
        ],
      },
      {
        t: "p",
        text: "Missed appointments are the other leak: a no-show not rebooked within a week is on the way to going inactive. Our guide on [how to reduce dental no-shows](/en/blog/reduce-dental-no-shows) covers reminders, confirmations and rebooking.",
      },

      { t: "h2", id: "how-lina-brings-patients-back", text: "How Lina brings patients back" },
      {
        t: "p",
        text: "Lina is Flowramo's AI receptionist for dental clinics, built on the official WhatsApp Business Platform. She remembers each conversation: what the patient asked, whether a price was shared, whether they booked. When a patient goes quiet after asking about an implant, she follows up with an answer to the likely question and two open slots.",
      },
      {
        t: "p",
        text: "She also sends aftercare check-ins and recall messages, replies in seconds in Arabic, English or Turkish when a patient answers at night, and either books the slot into your calendar or hands the warm reply to your team with full context. She does not diagnose. For the wider picture, read [what an AI receptionist does for dental clinics](/en/blog/ai-receptionist-for-dental-clinics).",
      },
    ],
    faq: [
      {
        q: "How often should a dental clinic run a patient reactivation campaign?",
        a: "Run it as a monthly rhythm rather than a one-off blast. Refresh your segments at the start of each month, message a batch sized to the chair time you actually have free, and finish the three-touch sequence within about three weeks. Patients who did not respond rest until their next recall cycle, so nobody receives campaign messages every month.",
      },
      {
        q: "What is a good reactivation rate for inactive dental patients?",
        a: "There is no reliable public benchmark, so measure your own baseline. In a Taiwan study of tooth-scaling reminders, 11–20% of patients returned, rising to 26% among satisfied patients who were reminded, which suggests modest expectations. Track attended visits divided by patients messaged, per segment, and compare month to month rather than against figures from another clinic.",
      },
      {
        q: "Can I send recall reminders on WhatsApp without the patient's consent?",
        a: "No. WhatsApp's Business Messaging Policy requires a person's opt-in before a business messages them, and you must honour opt-outs. Health information is also treated as sensitive under many data-protection laws. Collect opt-in at booking or check-in, record it in the patient file, and give every message an easy way to stop.",
      },
      {
        q: "Should dental recall messages come from the dentist or the clinic?",
        a: "From the dentist the patient last saw, where that dentist agrees. Patients build trust with a person, and a message that names their doctor and their last treatment reads as care rather than marketing. The clinic name still appears, and replies can go to the front desk or to an assistant that has the patient's history.",
      },
      {
        q: "How many follow-up messages should I send to an overdue dental patient?",
        a: "Three touches over about three weeks is enough for most segments: the reason and two slots, then an answer to the likely hesitation, then a short close. Long-lapsed patients and one-time visitors need only two. After that, stop and wait for the next recall cycle; repeated messages raise opt-outs and lead patients to block your number.",
      },
    ],
    sources: [
      {
        label: "NICE — Dental checks: intervals between oral health reviews, CG19 (2004)",
        url: "https://www.nice.org.uk/guidance/cg19",
      },
      {
        label:
          "British Dental Journal — A qualitative exploration of decisions about dental recall intervals, Part 1: attitudes of NHS GDPs to NICE CG19 (2022)",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8916955/",
      },
      {
        label: "Journal of Telemedicine and Telecare — Effects of tooth-scaling reminders for dental outpatients (2013)",
        url: "https://scholar.lib.ntnu.edu.tw/en/publications/effects-of-tooth-scaling-reminders-for-dental-outpatients-2/",
      },
      {
        label: "Cochrane — Mobile phone messaging reminders for attendance at healthcare appointments (2013)",
        url: "https://www.cochrane.org/evidence/CD007458_mobile-phone-messaging-reminders-attendance-healthcare-appointments",
      },
      {
        label: "WhatsApp — WhatsApp Business Messaging Policy (2026)",
        url: "https://business.whatsapp.com/policy",
      },
      {
        label: "Meta for Developers — Send messages and the customer service window (2026)",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages",
      },
      {
        label: "Meta for Developers — WhatsApp message templates overview (2026)",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview",
      },
      {
        label: "Meta for Developers — WhatsApp Business Platform pricing (2026)",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing",
      },
    ],
    keywords: [
      "how to reactivate inactive dental patients",
      "dental patient reactivation",
      "dental recall system",
      "overdue dental patients",
      "dental recall messages",
      "patient retention dental clinic",
      "dental recall whatsapp message template",
      "unfinished dental treatment plan follow up",
    ],
    minutes: 12,
  },

  ar: {
    title: "كيف تستعيد المرضى المنقطعين عن عيادة الأسنان؟ دليل عملي عبر واتساب",
    seoTitle: "كيف تستعيد المرضى المنقطعين عن عيادة الأسنان؟",
    description:
      "كيف تستعيد المرضى المنقطعين عن عيادة الأسنان: قسّم قائمة مرضاك، وأرسل لكل فئة رسالة واتساب تناسبها، وتابع من عاد فعلًا. مع نماذج رسائل جاهزة.",
    answer:
      "لاستعادة المرضى المنقطعين عن عيادة الأسنان، اعتبر المريض منقطعًا حين يتجاوز فترة الاستدعاء المحددة له، لا ستة أشهر للجميع. ثم قسّم القائمة حسب السبب: فحص دوري متأخر، علاج لم يكتمل، سعر أُرسل دون حجز، موعد فائت لم يُعوَّض، وانقطاع طويل. أرسل لكل فئة رسالة واتساب باسم طبيبها، فيها سبب واضح وموعدان محددان، وتابع مرتين خلال ثلاثة أسابيع ثم توقف.",
    takeaways: [
      "نادرًا ما يغادر المريض برفض صريح؛ أغلب المرضى ينقطعون تدريجيًا، ورسالة شخصية في وقتها تعيد جزءًا منهم دون أن تدفع لتجدهم من جديد.",
      "المريض المتأخر هو من تجاوز فترة الاستدعاء الخاصة به، وإرشادات NICE تحددها بين 3 و24 شهرًا حسب درجة الخطورة، لا ستة أشهر للجميع.",
      "وسيلة التذكير أقل أهمية من مضمونه: في دراسة تايوانية على مرضى الأسنان، تقاربت نسب العودة بين البريد والرسائل النصية والاتصال.",
      "أرسل ثلاث رسائل خلال نحو ثلاثة أسابيع، كل منها قالب واتساب معتمد مسبقًا مع طريقة سهلة لإيقاف الرسائل، ثم توقف.",
      "راقب كل شهر نسبة العائدين والإيرادات المحجوزة والردود وطلبات الإيقاف، واحجز الزيارة القادمة قبل أن يغادر المريض العيادة.",
    ],
    blocks: [
      { t: "h2", id: "cheapest-new-patient", text: "لماذا قائمة مرضاك هي أرخص مصدر للحجوزات؟" },
      {
        t: "p",
        text: "افتح نظام العيادة ورتّب المرضى حسب تاريخ آخر زيارة. بعد صفحات قليلة ستجد مريضة أخذت عرض سعر لتلبيستين في الربيع الماضي، وقالت «خلني أشوف جدولي وأرد عليكم»، ثم لم يتواصل معها أحد. هي لم تختر عيادة أخرى بعد. كانت مشغولة فقط، ولم يذكّرها أحد بأن خطتها العلاجية ما زالت مفتوحة.",
      },
      {
        t: "p",
        text: "في كل عيادة مئات الملفات المشابهة. نادرًا ما يغادر المريض برفض صريح؛ هو ينقطع تدريجيًا: وظيفة جديدة، مولود، تردد بسبب التكلفة، تذكير لم يصل، أو سؤال عن السعر لم يرد عليه أحد. وكل واحد منهم يعرف عيادتك ويثق بأحد أطبائك. **أرخص مريض جديد هو المريض الموجود أصلًا في ملفاتك.** واستعادته تكلّفك رسالة، لا ميزانية إعلانات.",
      },
      {
        t: "p",
        text: "هذه الخسارة صامتة، ولهذا يسهل تجاهلها. الخطة العلاجية غير المكتملة عمل شخّصته وسعّرته ولم تنفذه. والفحص الدوري الذي لم يُحجز كان سيكشف الحشوة القادمة. وإن تُرك الاثنان، يتحول أصحابهما إلى مرضى يردّون على رسالة عيادة أخرى قبل رسالتك.",
      },
      {
        t: "callout",
        title: "مثال توضيحي",
        text: "عيادة لديها 3,000 ملف مريض، وتجد أن 900 منهم تجاوزوا فترة الاستدعاء دون أي موعد قادم. لو أعادت حملة مدروسة مريضًا واحدًا من كل عشرة، فهذه 90 زيارة فحص، قبل حساب العلاجات التي ستكشفها تلك الزيارات. هذه الأرقام للتوضيح فقط، والرقم الحقيقي في قائمتك أنت.",
      },

      { t: "h2", id: "what-counts-as-inactive", text: "متى يُعتبر مريض الأسنان منقطعًا؟" },
      {
        t: "p",
        text: "أغلب العيادات تعتبر المريض منقطعًا بعد ستة أشهر دون زيارة. القاعدة سهلة، لكنها خاطئة مع كثير من المرضى. فإرشادات الاستدعاء الدوري البريطانية الصادرة عن NICE ([CG19](https://www.nice.org.uk/guidance/cg19)) تنص على أن الفترة بين كل فحص وآخر تُحدَّد حسب درجة الخطورة لدى كل مريض، من 3 أشهر إلى 24 شهرًا للبالغين. وعمليًا يُعطى البالغ إحدى هذه الفترات: 3 أو 6 أو 12 أو 18 أو 24 شهرًا.",
      },
      {
        t: "p",
        text: "لكن عادة الستة أشهر راسخة. فقد أشارت [دراسة نوعية شملت 25 طبيب أسنان في ويلز](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8916955/) إلى أن أغلب المرضى ما زالوا يراجعون كل ستة أشهر، وأن كثيرًا من الأطباء لم يرغبوا في مدّ الفترة إلى 24 شهرًا حتى لأقل المرضى خطورة. وهذا يهمك في الاتجاهين: المريض منخفض الخطورة الذي فترته 12 شهرًا ليس متأخرًا في الشهر السابع، بينما المريض عالي الخطورة الذي فترته 3 أشهر متأخر جدًا في الشهر السادس.",
      },
      {
        t: "p",
        text: "لذلك اعتمد هذا التعريف: **المريض المنقطع هو من تجاوز فترة الاستدعاء الخاصة به، وليس لديه أي موعد قادم.** وإن كانت ملفاتك لا تحفظ فترة لكل مريض، فابدأ بتسجيلها في كل فحص، وإلى أن يكتمل ذلك اعتمد 12 شهرًا، واطلب من كل طبيب تحديد مرضاه عاليي الخطورة.",
      },
      { t: "h3", text: "قسّم القائمة إلى ست فئات" },
      {
        t: "p",
        text: "كل فئة انقطعت لسبب مختلف، ولذلك تحتاج كل واحدة رسالة مختلفة.",
      },
      {
        t: "ul",
        items: [
          "**متأخرون عن الفحص الدوري:** مرضى منتظمون تجاوزوا فترتهم. يحتاجون إلى تذكير وموعد، لا إلى إقناع.",
          "**خطة علاجية غير مكتملة:** بدأ العلاج ولم ينتهِ، مثل علاج عصب بلا تلبيسة. مخاطرة سريرية قبل أن تكون إيرادًا ضائعًا.",
          "**أخذوا السعر ولم يحجزوا:** سألوا عن الزراعة أو التقويم الشفاف أو القشور ثم اختفوا. السبب عادة السعر أو الخوف أو التوقيت.",
          "**فاتهم موعد ولم يعوّضوه:** غياب أو إلغاء متأخر بلا موعد بديل. وكثيرًا ما يكون السبب الحرج لا قلة الاهتمام.",
          "**زيارة واحدة فقط:** جاؤوا مرة لحالة طارئة أو تنظيف، ولم يعودوا.",
          "**انقطاع طويل (من 18 إلى أكثر من 24 شهرًا):** بعضهم انتقل أو غيّر طبيبه، وبعضهم ينتظر سببًا ليعود.",
        ],
      },

      {
        t: "h2",
        id: "why-blanket-reminders-underperform",
        text: "لماذا لا تنجح رسالة تذكير واحدة للجميع؟",
      },
      {
        t: "p",
        text: "أول ما يخطر في البال رسالة واحدة للقائمة كلها. والتذكير يعمل فعلًا: فقد وجدت [مراجعة Cochrane](https://www.cochrane.org/evidence/CD007458_mobile-phone-messaging-reminders-attendance-healthcare-appointments) لـ 8 تجارب أن رسائل التذكير النصية رفعت الحضور مقارنة بعدم التذكير (RR 1.14، بجودة أدلة متوسطة)، بأثر مشابه للاتصال الهاتفي وبتكلفة أقل لكل حضور. لكنها كانت تذكيرًا بمواعيد محجوزة مسبقًا. أما الاسترجاع فيطلب شيئًا أصعب: قرار الحجز نفسه.",
      },
      {
        t: "p",
        text: "وأقرب دليل على هذا القرار [دراسة تايوانية عن تذكير مرضى الأسنان بتنظيف الجير](https://scholar.lib.ntnu.edu.tw/en/publications/effects-of-tooth-scaling-reminders-for-dental-outpatients-2/) شملت 389 مراجعًا، وقارنت بين البطاقة البريدية والرسالة النصية والاتصال الهاتفي وعدم التذكير. كان احتمال عودة من تلقوا تذكيرًا أعلى بـ 2.6 إلى 2.9 مرة، ومع ذلك بقيت نسب العودة بين 11 و20% فقط، **ولم تختلف باختلاف وسيلة التذكير.** وأعلى نسبة عودة، 26%، كانت لدى المرضى الراضين عن علاجهم الذين تلقوا تذكيرًا أيضًا، وقال 65% إن التذكير زاد رغبتهم في العودة.",
      },
      {
        t: "p",
        text: "الخلاصة: الوسيلة ليست مفتاح النجاح، بل الملاءمة والعلاقة. رسالة عامة مثل «حان وقت فحصك» تخاطب مريضًا منقطعًا منذ سنتين ومريضًا في منتصف علاجه بالكلمات نفسها. أما رسالة تذكر اسم طبيبه وآخر علاج تلقاه وموعدًا محددًا، فتفعل ما لا يفعله التذكير وحده.",
      },

      { t: "h2", id: "reactivation-playbook", text: "كيف تستعيد المرضى المنقطعين خطوة بخطوة؟" },
      {
        t: "ol",
        items: [
          "**نظّف القائمة.** احذف المكرر، ومن طلبوا عدم التواصل، ومن تعرف أنهم انتقلوا. اكتب الأرقام بالصيغة الدولية، وسجّل لغة كل مريض.",
          "**قسّمها.** ضع لكل مريض فئته وآخر علاج وآخر زيارة وفترة الاستدعاء واسم طبيبه. وابدأ بالفئة التي تناسب الكراسي المتاحة لديك.",
          "**تحقق من الموافقة.** تشترط [سياسة واتساب لرسائل الأعمال](https://business.whatsapp.com/policy) موافقة الشخص قبل أن تراسله، واحترام طلبه إيقاف الرسائل. وإن لم يوافق المريض على التواصل عبر واتساب، فاطلب موافقته في زيارته القادمة بدل مراسلته فجأة، والتزم بقوانين البيانات الصحية في بلدك.",
          "**اختر المرسل.** رسالة من «د. سارة من العيادة» تُقرأ كاهتمام، ورسالة من «العيادة» تُقرأ كإعلان. استخدم اسم الطبيب الذي عالجه آخر مرة، بعد موافقة الطبيب.",
          "**خصّص الرسالة حسب آخر علاج.** اذكر ما تلقاه المريض ولماذا تهم الخطوة التالية الآن. فقد خلص باحثو الدراسة التايوانية إلى أن التذكير المقرون بالتثقيف الصحي فعّال، وسطر واحد يشرح سببًا سريريًا حقيقيًا يكفي ليكون هذا التثقيف.",
          "**اعرض موعدين محددين.** «الثلاثاء 10:30 أو الخميس 5 مساءً؟» أسهل في الرد من «خبرنا متى يناسبك». الخياران يحوّلان القرار إلى رد سريع.",
          "**أرسل ثلاث رسائل خلال نحو ثلاثة أسابيع ثم توقف.** اليوم الأول: السبب وموعدان. نحو اليوم السابع: جواب عن التردد المتوقع (التكلفة أو الوقت أو الخوف). بين اليوم 18 و21: رسالة ختام قصيرة تقول إنك ستتوقف عن المراسلة وإن الباب مفتوح. بعدها اتركه حتى دورة الاستدعاء التالية.",
          "**اجعل الردود تصل إلى من يجيب فورًا.** الردود تأتي في العاشرة ليلًا وفي عطلة نهاية الأسبوع، والمريض الذي يكتب «تمام، الخميس» ولا يسمع ردًا حتى الصباح يبرد حماسه بسرعة. ومن يرد يحتاج تاريخ المريض أمامه.",
          "**سجّل كل رسالة.** من وصلته أي رسالة، ومن رد، ومن حجز، ومن طلب الإيقاف، وإلا فلن تفرّق بين حملة نجحت وحملة أزعجت الناس.",
        ],
      },
      {
        t: "p",
        text: "الخطوة الثامنة هي حيث تتسرب أغلب الحملات: إن لم يتحول الرد إلى حجز داخل المحادثة، سيضطر المريض للاتصال في ساعات الدوام، وكثيرون لن يفعلوا. ويشرح دليلنا عن [حجز مواعيد عيادة الأسنان عبر واتساب](/ar/blog/whatsapp-appointment-booking-dental-clinic) كيف تسد هذه الفجوة.",
      },

      { t: "h2", id: "segment-decision-table", text: "ماذا تحتاج كل فئة أن تسمع؟" },
      {
        t: "p",
        text: "استخدم هذا الجدول لتوجيه من يرسل الرسائل. والعمود الأخير لا يقل أهمية عن غيره: معرفة متى تتوقف تحمي رقمك وسمعة عيادتك.",
      },
      {
        t: "table",
        caption: "رسائل الاسترجاع حسب الفئة",
        head: ["الفئة", "ما تحتاج أن تسمعه", "أفضل عرض أو خطوة تالية", "متى تتوقف"],
        rows: [
          ["متأخر عن الفحص الدوري", "حان الوقت، والحجز سهل", "موعدان محددان للفحص", "بعد 3 رسائل؛ أعد المحاولة في الدورة التالية"],
          ["علاج غير مكتمل", "لماذا يهم إكمال علاج هذا السن", "موعد مع الطبيب المعالج نفسه", "بعد 3 رسائل؛ وأبلغ الطبيب"],
          [
            "أخذ السعر ولم يحجز",
            "إجابات واضحة عن التكلفة والمدة والراحة",
            "استشارة قصيرة؛ وخيارات الدفع إن كانت متاحة",
            "بعد 3 رسائل أو رفض واضح",
          ],
          ["فاته موعد ولم يعوّضه", "لا لوم، والعلاج ما زال مهمًا", "موعدان جديدان للعلاج نفسه", "بعد رسالتين أو ثلاث"],
          ["زيارة واحدة فقط", "ما يضيفه الفحص المنتظم", "أول فحص دوري", "بعد رسالتين"],
          [
            "انقطاع طويل (18 إلى 24+ شهرًا)",
            "نود رؤيتك، أو تحديث ملفك",
            "فحص للعودة، أو حذفه من القائمة",
            "بعد رسالتين؛ وأرشفه إن لم يرد",
          ],
        ],
      },
      { t: "cta" },

      {
        t: "h2",
        id: "whatsapp-scripts",
        text: "ماذا تقول رسالة الفحص الدوري؟ نماذج جاهزة لكل فئة",
      },
      {
        t: "p",
        text: "عدّل هذه الأمثلة لتناسب عيادتك، وضع بياناتك مكان الأقواس، واذكر دائمًا اسم شخص وموعدًا محددًا.",
      },
      {
        t: "callout",
        title: "متأخر عن الفحص الدوري",
        text: "هلا {الاسم}، معك د. {اسم الطبيب} من {اسم العيادة}. صار لك {عدد} شهور من آخر فحص، وهذا الوقت اللي اتفقنا نشوفك فيه. عندي الثلاثاء 10:30 الصبح أو الخميس 5 العصر، أثبّت لك واحد منهم؟",
      },
      {
        t: "callout",
        title: "خطة علاجية غير مكتملة",
        text: "هلا {الاسم}، معك د. {اسم الطبيب}. خلّصنا علاج العصب في الضرس السفلي اليمين، والخطوة الجاية التلبيسة. السن بعد علاج العصب يظل أضعف لين نركّب له تلبيسة، فما أحب نتأخر عليه. الاثنين 4 العصر أو الأربعاء 11 الصبح؟",
      },
      {
        t: "callout",
        title: "أخذ السعر ولم يحجز (زراعة، تقويم شفاف)",
        text: "مرحبًا {الاسم}، معك {اسم العيادة}. سألتنا عن {العلاج} في {الشهر}. أغلب الناس في هالمرحلة يسألون عن المدة وطريقة الدفع، فهذا الجواب: {سطران}. ولو حاب تتكلم مع الدكتور، د. {اسم الطبيب} عنده ربع ساعة السبت 12 الظهر أو الأحد 6:30 المسا.",
      },
      {
        t: "callout",
        title: "فاته موعد ولم يعوّضه",
        text: "هلا {الاسم}، افتقدناك في موعد {التاريخ}. ولا يهمك، تصير. علاج {العلاج} ما زال مهم، يناسبك الثلاثاء 9:30 الصبح أو الخميس 3 العصر بداله؟",
      },
      {
        t: "callout",
        title: "انقطاع طويل (من 18 إلى أكثر من 24 شهرًا)",
        text: "هلا {الاسم}، معك د. {اسم الطبيب} من {اسم العيادة}. صار لنا تقريبًا سنتين ما شفناك، فحبيت أطمّن عليك. إذا انتقلت أو غيّرت طبيبك، ولا يهمك، بس قل لي وأحدّث ملفك. وإذا لا، الفحص بداية حلوة: الاثنين 10 الصبح أو الأربعاء 5:30 العصر؟",
      },
      {
        t: "p",
        text: "لمن زارك مرة واحدة، عدّل نموذج الفحص الدوري حسب سبب زيارته («زيارتك الطارئة في يونيو»). واجعل الرسالتين الثانية والثالثة قصيرتين: «ترى عندنا مواعيد الصبح بدري ويوم السبت بعد»، ثم «ما راح أزعجك برسائل عن هالموضوع مرة ثانية، ومتى ما كنت جاهز رد هنا».",
      },
      { t: "h3", text: "قواعد واتساب التي تحكم هذه الرسائل" },
      {
        t: "p",
        text: "إذا لم يراسلك المريض خلال آخر 24 ساعة، فلا يمكنك مراسلته إلا عبر **قالب** معتمد مسبقًا؛ أما الرسائل الحرة فمسموحة فقط داخل نافذة خدمة العملاء التي تُفتح لمدة 24 ساعة عندما يكتب لك المريض ([وثائق Meta للمطورين](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages)). لذلك تكون أول رسالة دائمًا قالبًا، فيه الاسم والطبيب والمواعيد كمتغيرات.",
      },
      {
        t: "p",
        text: "تنقسم [القوالب](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview) إلى ثلاث فئات: تسويقية وخدمية (Utility) وللتحقق، وتراجع Meta كل قالب حسب مضمونه. التذكير المحايد المرتبط بشيء وافق عليه المريض، مثل موعد محجوز، قد يُصنّف خدميًا؛ أما دعوة مريض منقطع للعودة فتُصنّف غالبًا تسويقية. ومنذ 1 يوليو 2025 تحاسب Meta على كل قالب يُسلَّم، والتسويقية هي الأغلى؛ أما الردود داخل نافذة الخدمة المفتوحة فمجانية ([أسعار Meta](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing)).",
      },
      {
        t: "callout",
        title: "التعامل مع طلبات إيقاف الرسائل",
        text: "اجعل في كل قالب طريقة سهلة للخروج، مثل زر رد سريع «إيقاف الرسائل» أو سطر «اكتب: إيقاف، ولن نراسلك بهذا الخصوص مرة أخرى». سجّل كل طلب إيقاف في ملف المريض في اليوم نفسه حتى لا تصله أي حملة أخرى، وأكّد له مرة واحدة، ولا تجادله. فالمريض الذي يشعر بالاحترام قد يحجز لاحقًا من تلقاء نفسه.",
      },

      { t: "h2", id: "measure-reactivation", text: "كيف تقيس نجاح حملة الاسترجاع؟" },
      { t: "p", text: "أربعة أرقام، تتابعها لكل فئة على حدة، تخبرك بكل ما تحتاجه تقريبًا." },
      {
        t: "ul",
        items: [
          "**نسبة الاسترجاع:** عدد من حجزوا وحضروا فعلًا مقسومًا على عدد من راسلتهم. احسب الحضور، لا الحجز.",
          "**الإيرادات المحجوزة من المرضى العائدين:** العلاج الذي وافقوا عليه خلال 90 يومًا؛ ففحص يكشف حشوتين أهم من رسومه.",
          "**نسبة الرد:** أي رد، حتى «مو الحين». وانخفاضها يعني غالبًا أن الرسالة عامة أو أن المرسل غير مناسب.",
          "**نسبة طلبات الإيقاف:** إن ارتفعت، فأنت تراسل الأشخاص الخطأ أو تراسلهم أكثر من اللازم. أصلح القائمة قبل الدفعة التالية.",
        ],
      },
      {
        t: "p",
        text: "التزم بإيقاع شهري: في الأسبوع الأول حدّث الفئات، وفي الثاني أرسل الرسالة الأولى للدفعة التالية، وفي الثالث والرابع أرسل المتابعات وراجع الأرقام وأعد كتابة أضعف نموذج. واجعل حجم كل دفعة على قدر الكراسي المتاحة؛ فالزحام يخلق انتظارًا طويلًا، والانتظار الطويل يخلق الإلغاءات.",
      },

      { t: "h2", id: "retention", text: "كيف تمنع انقطاع المرضى من البداية؟" },
      { t: "p", text: "الاسترجاع يعالج ما فات، والحفاظ على المرضى يمنع القائمة من أن تمتلئ من جديد. ثلاث عادات تصنع أغلب الفرق." },
      {
        t: "ul",
        items: [
          "**احجز الزيارة القادمة قبل أن يغادر.** عندها لا يحتاج المريض لاحقًا إلا إلى تذكير، وهذا بالضبط ما يتقنه التذكير.",
          "**تابع بعد العلاج.** رسالة متابعة مساء يوم الخلع أو الزراعة تُظهر الاهتمام، وتكشف المشكلات مبكرًا، وتُبقي المحادثة مفتوحة.",
          "**اربط تذكير الفحص الدوري بفترة كل مريض.** أرسل التذكير قبل أن تنتهي الفترة التي حددها الطبيب، لا حين يتذكر أحدهم استخراج تقرير.",
        ],
      },
      {
        t: "p",
        text: "والمواعيد الفائتة هي التسرب الآخر: فالمريض الذي يغيب ولا يُحجز له موعد بديل خلال أسبوع في طريقه ليصبح مريضًا منقطعًا. ويشرح دليلنا عن [كيفية تقليل غياب المرضى عن مواعيد الأسنان](/ar/blog/reduce-dental-no-shows) التذكير والتأكيد وإعادة الحجز.",
      },

      { t: "h2", id: "how-lina-brings-patients-back", text: "كيف تعيد لينا المرضى إلى عيادتك" },
      {
        t: "p",
        text: "لينا هي موظفة الاستقبال الذكية من Flowramo لعيادات الأسنان، مبنية على منصة واتساب للأعمال الرسمية. تتذكر كل محادثة: ماذا سأل المريض، وهل أُرسل له السعر، وهل حجز. وعندما يسكت مريض بعد سؤاله عن الزراعة، تتابعه بجواب عن السؤال المتوقع وموعدين متاحين.",
      },
      {
        t: "p",
        text: "وترسل لينا أيضًا رسائل المتابعة بعد العلاج وتذكير الفحص الدوري، وترد خلال ثوانٍ بالعربية أو الإنجليزية أو التركية حين يرد المريض ليلًا، ثم إما تحجز الموعد مباشرة في تقويمك أو تسلّم الرد لفريقك مع السياق كاملًا، ولا تقدّم أي تشخيص. وللصورة الأشمل، اقرأ [ما الذي تقدمه موظفة الاستقبال الذكية لعيادات الأسنان](/ar/blog/ai-receptionist-for-dental-clinics).",
      },
    ],
    faq: [
      {
        q: "كل كم شهر أسوي حملة استرجاع للمرضى المنقطعين؟",
        a: "اجعلها إيقاعًا شهريًا لا حملة واحدة ثم تنساها. حدّث فئات المرضى في بداية كل شهر، وراسل دفعة تناسب الكراسي المتاحة فعلًا، وأنهِ الرسائل الثلاث خلال نحو ثلاثة أسابيع. ومن لم يرد يُترك حتى دورة الاستدعاء التالية، فلا يتلقى أي مريض رسائل حملات كل شهر.",
      },
      {
        q: "كم نسبة المرضى اللي يرجعون للعيادة بعد رسائل التذكير؟",
        a: "لا يوجد معيار عام موثوق، لذلك قِس نسبتك أنت. في دراسة تايوانية عن تذكير مرضى الأسنان بتنظيف الجير، عاد بين 11 و20% من المرضى، وارتفعت النسبة إلى 26% بين المرضى الراضين الذين تلقوا تذكيرًا، أي أن التوقعات يجب أن تكون واقعية. احسب الحضور الفعلي مقسومًا على عدد من راسلتهم لكل فئة، وقارن شهرًا بشهر.",
      },
      {
        q: "هل أقدر أرسل رسائل تذكير واتساب للمرضى بدون موافقتهم؟",
        a: "لا. سياسة واتساب لرسائل الأعمال تشترط موافقة الشخص قبل أن تراسله، وتلزمك باحترام طلب الإيقاف. كما تُعامل البيانات الصحية كبيانات حساسة في كثير من قوانين حماية البيانات. اطلب الموافقة عند الحجز أو في الاستقبال، وسجّلها في ملف المريض، واجعل في كل رسالة طريقة سهلة لإيقافها.",
      },
      {
        q: "الأفضل رسالة التذكير تكون باسم الطبيب أو باسم العيادة؟",
        a: "باسم الطبيب الذي عالج المريض آخر مرة، بعد موافقة الطبيب. المريض يبني ثقته مع شخص، والرسالة التي تذكر طبيبه وآخر علاج تلقاه تُقرأ كاهتمام لا كإعلان. ويبقى اسم العيادة ظاهرًا، ويمكن أن تذهب الردود إلى الاستقبال أو إلى مساعد يرى تاريخ المريض كاملًا.",
      },
      {
        q: "كم رسالة متابعة أرسل للمريض المنقطع قبل ما أوقف؟",
        a: "ثلاث رسائل خلال نحو ثلاثة أسابيع تكفي لأغلب الفئات: السبب وموعدان، ثم جواب عن التردد المتوقع، ثم رسالة ختام قصيرة. ويكفي المنقطعين منذ مدة طويلة ومن زاروك مرة واحدة رسالتان فقط. بعدها توقف وانتظر دورة الاستدعاء التالية، فتكرار الرسائل يرفع طلبات الإيقاف ويدفع المرضى إلى حظر رقمك.",
      },
    ],
    sources: [
      {
        label: "NICE — Dental checks: intervals between oral health reviews, CG19 (2004)",
        url: "https://www.nice.org.uk/guidance/cg19",
      },
      {
        label:
          "British Dental Journal — A qualitative exploration of decisions about dental recall intervals, Part 1: attitudes of NHS GDPs to NICE CG19 (2022)",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8916955/",
      },
      {
        label: "Journal of Telemedicine and Telecare — Effects of tooth-scaling reminders for dental outpatients (2013)",
        url: "https://scholar.lib.ntnu.edu.tw/en/publications/effects-of-tooth-scaling-reminders-for-dental-outpatients-2/",
      },
      {
        label: "Cochrane — Mobile phone messaging reminders for attendance at healthcare appointments (2013)",
        url: "https://www.cochrane.org/evidence/CD007458_mobile-phone-messaging-reminders-attendance-healthcare-appointments",
      },
      {
        label: "WhatsApp — WhatsApp Business Messaging Policy (2026)",
        url: "https://business.whatsapp.com/policy",
      },
      {
        label: "Meta for Developers — Send messages and the customer service window (2026)",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages",
      },
      {
        label: "Meta for Developers — WhatsApp message templates overview (2026)",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview",
      },
      {
        label: "Meta for Developers — WhatsApp Business Platform pricing (2026)",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing",
      },
    ],
    keywords: [
      "كيف تستعيد المرضى المنقطعين عن عيادة الأسنان",
      "استرجاع المرضى",
      "رسائل تذكير الفحص الدوري",
      "نظام الاستدعاء الدوري عيادة اسنان",
      "زيادة عودة المرضى للعيادة",
      "الحفاظ على المرضى",
      "رسائل واتساب لمرضى عيادة الاسنان",
      "تذكير مرضى الاسنان بالفحص واتساب",
      "حجز موعد اسنان واتساب",
    ],
    minutes: 13,
  },
};

export default article;
