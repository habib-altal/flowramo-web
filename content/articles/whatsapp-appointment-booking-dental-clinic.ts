import type { Article } from "./types";

const SRC = {
  sendMessages: "https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages",
  templates: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview",
  pricing: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing",
  policy: "https://business.whatsapp.com/policy",
  techcrunch: "https://techcrunch.com/2025/10/18/whatssapp-changes-its-terms-to-bar-general-purpose-chatbots-from-its-platform/",
  datareportal: "https://datareportal.com/reports/digital-2025-saudi-arabia",
  pdpl: "https://www.clydeco.com/en/insights/2024/09/saudi-arabia-s-personal-data-protection-law-become",
  cochrane: "https://www.cochrane.org/evidence/CD007458_mobile-phone-messaging-reminders-attendance-healthcare-appointments",
};

const sources = [
  { label: "Meta for Developers — Send messages, WhatsApp Business Platform (2026)", url: SRC.sendMessages },
  { label: "Meta for Developers — Message templates overview, WhatsApp Business Platform (2026)", url: SRC.templates },
  { label: "Meta for Developers — Pricing on the WhatsApp Business Platform (2026)", url: SRC.pricing },
  { label: "WhatsApp — WhatsApp Business Messaging Policy (2026)", url: SRC.policy },
  { label: "TechCrunch — WhatsApp changes its terms to bar general-purpose chatbots from its platform (2025)", url: SRC.techcrunch },
  { label: "DataReportal — Digital 2025: Saudi Arabia (2025)", url: SRC.datareportal },
  { label: "Clyde & Co — Saudi Arabia's Personal Data Protection Law becomes fully enforceable (2024)", url: SRC.pdpl },
  { label: "Cochrane — Mobile phone messaging reminders for attendance at healthcare appointments (2013)", url: SRC.cochrane },
];

const article: Article = {
  slug: "whatsapp-appointment-booking-dental-clinic",
  published: "2026-10-04",
  updated: "2026-10-04",
  related: ["ai-receptionist-for-dental-clinics", "reduce-dental-no-shows"],

  en: {
    title: "WhatsApp Appointment Booking for Dental Clinics: A Practical Playbook",
    seoTitle: "WhatsApp Appointment Booking for Dental Clinics (2026)",
    description:
      "WhatsApp appointment booking for dental clinics: app vs API, the 24-hour rule, templates to pre-approve and a booking script that turns chats into visits.",
    answer:
      "To run WhatsApp appointment booking for a dental clinic, use the official WhatsApp Business Platform on a dedicated clinic number, connect it to your calendar, and pre-approve utility templates for reminders. Reply while the 24-hour service window is open, offer two specific slots instead of an open question, confirm in one tap, and hand clinical questions to staff.",
    takeaways: [
      "Gulf patients already live on WhatsApp, and every extra step between their message and a booking, such as a call or a web form, loses some of the people who write at night.",
      "Of the three ways to take bookings on WhatsApp, only the official WhatsApp Business Platform scales safely; unofficial bots put the clinic's number at risk.",
      "Replies inside the 24-hour customer service window are free; outside it you need pre-approved templates, and marketing templates cost the most.",
      "A booking chat converts when it answers first, gives an approved price range, offers two specific slots and confirms in one tap.",
      "Collect the minimum health data in chat, never diagnose over WhatsApp, and send promotions only to patients who opted in.",
    ],
    blocks: [
      { t: "h2", id: "why-whatsapp", text: "Why should a dental clinic take bookings on WhatsApp?" },
      {
        t: "p",
        text: "It is 23:41 on a Sunday. A patient who has put off a missing back tooth for a year finally writes to your clinic's WhatsApp: “How much is an implant, and do you have anything next week?” Your receptionist sees it at 10:10 the next morning. By then the patient has a reply, a price and a Wednesday slot from another clinic.",
      },
      {
        t: "p",
        text: "Nobody on your team did anything wrong; no one was in the chat when the decision was made. **The problem is not the patient's timing; it is a booking system built around opening hours.**",
      },
      {
        t: "p",
        text: "In the Gulf, that moment happens on a phone. Saudi Arabia had 33.9 million internet users at the start of 2025, an internet penetration of 99.0% ([DataReportal](https://datareportal.com/reports/digital-2025-saudi-arabia)). The question is whether your clinic answers there in the same moment.",
      },
      {
        t: "p",
        text: "Every other channel adds a step between intent and booking. A phone line needs opening hours and a free receptionist; a web form promises a callback the patient may miss. WhatsApp booking done well removes the step: the patient asks, gets an answer, picks a time and is booked in the thread where they already talk to family.",
      },

      { t: "h2", id: "three-ways", text: "What are the three ways to take bookings on WhatsApp?" },
      {
        t: "p",
        text: "Most clinics drift into WhatsApp booking: a receptionist replies from a clinic phone, the number spreads, and a year later the front desk is one handset. There are three ways to run it; only one scales safely.",
      },
      { t: "h3", text: "1. The WhatsApp Business app on a staff phone" },
      {
        t: "p",
        text: "Free and quick to start, with a business profile, quick replies and away messages. But a person types every reply, the account lives on one primary phone plus a few linked devices, and nothing connects to your calendar. When that phone is on silent, the clinic is closed on WhatsApp.",
      },
      { t: "h3", text: "2. The WhatsApp Business Platform with an automated assistant" },
      {
        t: "p",
        text: "This is Meta's official route for businesses that need scale, usually through the Cloud API. Software can answer instantly, read and write the clinic calendar, send approved reminder templates and pass a chat to the right person. Several staff can work one number at once, and every conversation is kept. Meta charges per delivered template message; a provider or developer connects it.",
      },
      { t: "h3", text: "3. Unofficial automation tools and browser bots" },
      {
        t: "p",
        text: "Scripts that drive WhatsApp Web or the consumer app look cheap. They operate outside WhatsApp's terms, break when the interface changes, and the number can be banned, taking every patient thread with it. For a clinic whose patients know one number, the saving is not worth it.",
      },
      {
        t: "table",
        head: ["Criterion", "Business app on a staff phone", "Business Platform + assistant", "Unofficial bots"],
        rows: [
          ["Cost", "Free app; staff time for every reply", "Per template message, plus your software", "Cheap until the number is lost"],
          ["Scale", "One primary phone and a few linked devices", "Many staff plus automation on one number", "Unstable at volume"],
          ["Automation", "Greeting, away and quick replies", "Answers, bookings, reminders, follow-ups", "Scripted and fragile"],
          ["Calendar integration", "None; bookings copied by hand", "Reads free slots, writes bookings", "Unreliable"],
          ["Compliance", "Within terms, but manual only", "Official; templates reviewed by Meta", "Violates WhatsApp's terms"],
          ["Risk", "Missed messages; one person is the system", "Low with opt-in and approved templates", "Number ban and lost history"],
        ],
        caption: "Three ways to take dental bookings on WhatsApp, compared.",
      },

      { t: "h2", id: "whatsapp-rules", text: "Which WhatsApp rules shape the booking experience?" },
      {
        t: "p",
        text: "Five rules decide what a patient sees and what you pay. Get them right at the start and the rest is design.",
      },
      {
        t: "ul",
        items: [
          "**The 24-hour customer service window.** When a patient messages you, a 24-hour window opens and resets each time they write again. Inside it you can send free-form replies, which Meta calls service messages ([Meta: Send messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages)).",
          "**Templates outside the window.** Once the window closes, you can only start a conversation with a pre-approved template, categorised as Marketing, Utility or Authentication ([Meta: Templates overview](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview)). Utility covers factual updates on something the patient arranged, such as an appointment; anything promotional is Marketing.",
          "**Per-message pricing.** Since 1 July 2025, Meta charges per delivered template message, not per conversation. Service messages inside the window are free, utility templates sent while the window is open are free, and marketing templates are the most expensive category ([Meta: Pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing)).",
          "**Opt-in and opt-out.** The [WhatsApp Business Messaging Policy](https://business.whatsapp.com/policy) requires permission before you message someone, and that you honour requests to stop. A patient who agrees to booking reminders has not agreed to offers.",
          "**The January 2026 AI rule.** From 15 January 2026, WhatsApp's business terms bar general-purpose AI assistants, chatbots whose AI is the product. AI for customer service, such as bookings and answering customer questions, remains allowed ([TechCrunch](https://techcrunch.com/2025/10/18/whatssapp-changes-its-terms-to-bar-general-purpose-chatbots-from-its-platform/)), and a clinic receptionist that books appointments is exactly that case.",
        ],
      },
      {
        t: "p",
        text: "In practice: answer fast while the window is open, when replies cost nothing, and keep templates for when the patient is not in the chat.",
      },
      {
        t: "table",
        head: ["Clinic message", "Usual type", "What to watch"],
        rows: [
          ["Booking confirmation", "Service message", "Sent in the chat where the patient just booked, so the window is open."],
          ["Reminder before the visit", "Utility template", "The window has usually closed. Keep it factual: date, time, doctor, place."],
          ["Reschedule or cancellation", "Service message or utility template", "Free-form if the patient asked; a template if the clinic starts it."],
          ["Aftercare check-in", "Utility template", "Tied to the treatment just done. An offer inside it makes it marketing."],
          ["6-month check-up recall", "Often marketing", "With no appointment booked, Meta may treat it as re-engagement. Needs opt-in."],
          ["Promotion or seasonal offer", "Marketing template", "Opted-in patients only, with an easy way to stop."],
        ],
        caption: "Typical clinic messages by WhatsApp message type. Meta decides the final category at template review.",
      },

      { t: "h2", id: "booking-conversation", text: "What does a booking conversation that converts look like?" },
      {
        t: "p",
        text: "WhatsApp chats that never become bookings usually fail the same way: the clinic answers a question with a question. “When are you free?” hands the work back to a tired patient late at night, and they do not reply. A converting conversation has six moves.",
      },
      {
        t: "ol",
        items: [
          "**Answer the question first.** If they asked about implants, the first line is about implants, not “How can I help you?”",
          "**Give a price range from approved knowledge.** A range the clinic has signed off, with what moves it up or down, beats “prices vary, please visit”.",
          "**Offer two specific slots.** “Tuesday 4:30 pm or Wednesday 11:00 am?” is a one-word decision; an open question is homework.",
          "**Confirm in one tap.** Repeat the booking back with day, date, time, doctor and treatment, and accept a simple “yes”.",
          "**Send a location pin and prep instructions.** Parking, floor, what to bring, whether to eat beforehand.",
          "**Then remind.** A utility template before the visit, with an easy way to reschedule.",
        ],
      },
      {
        t: "p",
        text: "Reminders are not a courtesy: a [Cochrane review](https://www.cochrane.org/evidence/CD007458_mobile-phone-messaging-reminders-attendance-healthcare-appointments) of eight trials found text-message reminders increased attendance compared with no reminder, with an effect similar to phone calls at lower cost per attendance. Our guide to [reducing dental no-shows](/en/blog/reduce-dental-no-shows) covers the schedule.",
      },
      { t: "h3", text: "Example: the 23:41 implant enquiry, booked" },
      { t: "p", text: "The exchange below is illustrative; the doctor, prices and times are placeholders." },
      {
        t: "ul",
        items: [
          "**Patient, Sunday 23:41:** Hi, how much is a dental implant? I lost a back tooth last year.",
          "**Clinic:** Hi, thanks for your message. A single implant with its crown is usually SAR 4,500–7,000 here; the exact plan follows an x-ray at the consultation. Would you like one with Dr. Sara? Tuesday 4:30 pm or Wednesday 11:00 am are free.",
          "**Patient:** Wednesday is better. Does it hurt?",
          "**Clinic:** The consultation is an examination and an x-ray, about 30 minutes, nothing invasive. If you go ahead, Dr. Sara explains the anaesthetic and recovery in detail. Shall I book Wednesday at 11:00 am?",
          "**Patient:** Yes please.",
          "**Clinic:** Booked: Wednesday 7 October, 11:00 am, implant consultation with Dr. Sara. Here is our location pin; parking is under the building, 2nd floor. Please bring any previous x-rays. Reply here anytime to change it.",
          "**Utility template, Tuesday 18:00:** Reminder: your appointment with Dr. Sara is tomorrow, Wednesday 7 October, at 11:00 am. Reply 1 to confirm or 2 to reschedule.",
        ],
      },
      {
        t: "p",
        text: "Three patient messages, a few minutes, no phone call, and the clinic never once asked “when are you free?”",
      },
      { t: "cta" },

      { t: "h2", id: "setup-checklist", text: "How do you set up WhatsApp booking, step by step?" },
      {
        t: "ol",
        items: [
          "**Get a dedicated number.** A clinic-owned number that is nobody's personal phone; it will sit on your signage, website and maps listing for years.",
          "**Verify the business with Meta.** Complete business verification in Meta Business Manager with your commercial registration, tying the account to the clinic's legal entity.",
          "**Set the display name.** Meta reviews the name patients see; it should match your real clinic brand, not a generic “Dental Clinic”.",
          "**Pre-approve templates.** Submit them before launch; review takes time and rejected wording needs rewriting. The core set is below.",
          "**Connect the calendar.** The assistant must read real free slots per doctor and chair and write bookings back, so the chat and the front desk never double-book.",
          "**Write handoff rules.** Decide what goes straight to a person: pain, swelling or bleeding after treatment, complaints, anything clinical, and anyone who asks for a human.",
          "**Publish click-to-chat links.** Put a wa.me link on your website, Instagram bio and Google Business Profile so every patient lands in the same thread.",
        ],
      },
      { t: "h3", text: "Templates to pre-approve" },
      {
        t: "p",
        text: "Write utility templates as plain facts about one appointment, with no offers; variables such as {{1}} are filled per patient.",
      },
      {
        t: "ul",
        items: [
          "**Appointment reminder (utility):** “Hi {{1}}, a reminder of your appointment with {{2}} on {{3}} at {{4}}. Reply 1 to confirm or 2 to reschedule.”",
          "**Same-day reminder (utility):** “Hi {{1}}, we look forward to seeing you today at {{2}}. Our location: {{3}}.”",
          "**Phone booking confirmation (utility):** “Your appointment is confirmed: {{1}} at {{2}} with {{3}}. Reply here if you need to change it.”",
          "**Reschedule request (utility):** “Hi {{1}}, {{2}} is no longer available on {{3}}. Would {{4}} or {{5}} suit you? Reply with your choice.”",
          "**Aftercare check-in (utility):** “Hi {{1}}, how are you feeling after your {{2}}? If swelling, bleeding or pain is getting worse, reply here and our team will contact you.”",
          "**Missed appointment (usually utility):** “Hi {{1}}, we missed you today. Would you like to rebook? Reply and we will send the next free times.”",
          "**Check-up recall (likely marketing):** “Hi {{1}}, it has been {{2}} months since your last check-up. Would you like us to find you a time?”",
        ],
      },
      { t: "h3", text: "Click-to-chat links" },
      {
        t: "p",
        text: "A wa.me link opens a chat with your number and can pre-fill the first message, with no developer account needed. Write your full international number without the + sign or leading zeros, then add ?text= and the message, URL-encoded (a space becomes %20).",
      },
      {
        t: "table",
        head: ["Part", "Example"],
        rows: [
          ["Base link", "https://wa.me/9665XXXXXXXX"],
          ["Pre-filled text", "?text=Book%20a%20check-up"],
          ["Full link", "https://wa.me/9665XXXXXXXX?text=Book%20a%20check-up"],
        ],
        caption: "The wa.me link format. Replace the X's with your clinic number.",
      },
      {
        t: "p",
        text: "Vary the text by channel, such as “Hi, I found you on Instagram” or “Hi, I found you on Google Maps”, and the first message tells you where each booking came from.",
      },

      { t: "h2", id: "patient-privacy", text: "How do you protect patient privacy in WhatsApp booking?" },
      {
        t: "p",
        text: "Booking chats touch health data. In Saudi Arabia, the Personal Data Protection Law (PDPL) became fully enforceable on 14 September 2024 after a one-year grace period and classes health data as sensitive data with additional controls ([Clyde & Co](https://www.clydeco.com/en/insights/2024/09/saudi-arabia-s-personal-data-protection-law-become)). Elsewhere in the Gulf, check your local law; the safest design is the same everywhere.",
      },
      {
        t: "ul",
        items: [
          "**Collect the minimum.** Name, preferred time and the reason for the visit in the patient's own words are enough to book. Medical history belongs in the clinical record, not a chat thread.",
          "**No diagnosis over chat.** Explaining what a consultation involves is fine; telling a patient what is wrong with a tooth from a photo is not. Pain, swelling and trauma go to a clinician.",
          "**Make consent explicit.** Tell patients at booking that reminders will come on WhatsApp, and ask separately before sending any offers.",
          "**Control access.** Decide who can read which chats, and keep the history in the clinic's system, not on personal phones.",
        ],
      },
      {
        t: "p",
        text: "This is practical guidance, not legal advice; ask your data-protection adviser to review the final setup.",
      },

      { t: "h2", id: "common-mistakes", text: "Which mistakes cost clinics bookings on WhatsApp?" },
      {
        t: "ul",
        items: [
          "**Making patients call instead.** “Please call us to book” turns a warm enquiry into a task for tomorrow. Book in the channel the patient chose.",
          "**Asking open questions.** “When suits you?” is homework. Offer two times.",
          "**Sending promotions without opt-in.** It breaches the messaging policy, pushes patients to block or report your number, and costs the highest rate.",
          "**Letting one staff phone become the system.** When that person is on leave, the front desk and every chat history go with them.",
          "**No follow-up after “I'll think about it”.** That patient just told you they are interested. A respectful message a few days later that answers the likely worry can recover the booking. After 24 hours it needs a template, so write one in advance; our guide to [reactivating inactive patients](/en/blog/reactivate-inactive-dental-patients) covers the longer version.",
        ],
      },

      { t: "h2", id: "how-lina-works", text: "How Lina runs WhatsApp booking" },
      {
        t: "p",
        text: "Lina is the AI receptionist Flowramo builds for dental clinics, on the official WhatsApp Business Platform. It answers patients in seconds, day and night, in Arabic, English and Turkish, matching the patient's language and dialect, using only knowledge the clinic approves: services, price ranges, doctors, hours, location, prep and aftercare instructions.",
      },
      {
        t: "p",
        text: "Lina finds free slots and books, reschedules or cancels in the clinic calendar, then sends confirmations and reminders. It remembers each conversation, follows up when a patient goes quiet, sends aftercare and brings patients back for check-ups. Anything urgent, clinical, sensitive or outside its knowledge goes to your team with the full context; it does not diagnose. The clinic gets a daily briefing of bookings, conversations and patients at risk of being lost.",
      },
      {
        t: "p",
        text: "More on the role: [what an AI receptionist does for a dental clinic](/en/blog/ai-receptionist-for-dental-clinics).",
      },
    ],
    faq: [
      {
        q: "What is the difference between the WhatsApp Business app and the WhatsApp Business API?",
        a: "The WhatsApp Business app is a free phone app for manual replies, with quick replies and away messages, running on one primary phone and a few linked devices. The WhatsApp Business Platform (Cloud API) is Meta's official interface for software: automated replies, calendar booking, approved reminder templates and many staff on one number. A clinic that wants automated booking needs the platform, which charges per delivered template message.",
      },
      {
        q: "How much does WhatsApp appointment booking cost a dental clinic?",
        a: "Since 1 July 2025, Meta charges per delivered template message. Free-form service messages inside the 24-hour customer service window are free, and utility templates sent while that window is open are free too. Reminders sent after the window closes are charged, and marketing templates cost the most. Rates vary by country, so check Meta's current rate card. The software or provider that runs the booking is a separate cost.",
      },
      {
        q: "Can a dental clinic send WhatsApp appointment reminders automatically?",
        a: "Yes, through the WhatsApp Business Platform. Because a reminder usually goes out after the 24-hour window has closed, it must be a pre-approved template, normally in the Utility category, and the patient should have agreed to receive reminders on WhatsApp. Keep it factual: date, time, doctor, location and an easy way to confirm or reschedule. A Cochrane review found that text reminders increase attendance compared with no reminder.",
      },
      {
        q: "Are AI chatbots still allowed on WhatsApp after January 2026?",
        a: "Yes, for business use. From 15 January 2026, WhatsApp's business terms bar general-purpose AI assistants, the chatbots whose AI is itself the product. Businesses that use AI for customer service and operations, such as booking appointments and answering customer questions, remain allowed. A dental clinic's AI receptionist that answers patients and books their appointments falls into the permitted category.",
      },
      {
        q: "What patient information should a clinic collect over WhatsApp?",
        a: "Only what is needed to book: the patient's name, preferred time and the reason for the visit in their own words. In Saudi Arabia, health data is sensitive data under the PDPL, which has been fully enforceable since 14 September 2024. Keep medical history for the clinical record, avoid diagnosis over chat, ask consent for reminders and separately for offers, and limit which staff can read chats.",
      },
    ],
    sources,
    keywords: [
      "WhatsApp appointment booking for dental clinics",
      "WhatsApp booking system clinic",
      "WhatsApp Business API for clinics",
      "dental appointment booking WhatsApp",
      "WhatsApp Business app vs API",
      "WhatsApp appointment reminders",
      "WhatsApp 24-hour customer service window",
      "WhatsApp message templates for clinics",
    ],
    minutes: 9,
  },

  ar: {
    title: "حجز المواعيد عبر واتساب لعيادة الأسنان: الدليل العملي الكامل",
    seoTitle: "حجز المواعيد عبر واتساب لعيادة الأسنان: دليل عملي",
    description:
      "دليل عملي لحجز المواعيد عبر واتساب لعيادة الأسنان: الفرق بين واتساب بزنس و API، وقاعدة الـ24 ساعة، وقوالب جاهزة، ونص محادثة يحوّل السؤال إلى موعد.",
    answer:
      "لتشغيل حجز المواعيد عبر واتساب لعيادة الأسنان، استخدم منصة واتساب للأعمال الرسمية على رقم مخصص للعيادة، واربطها بتقويم المواعيد، واعتمد مسبقًا قوالب خدمية للتذكير. رُدّ على المريض ما دامت نافذة الـ24 ساعة مفتوحة، واعرض عليه موعدين محددين بدل سؤال مفتوح، وأكّد الحجز بضغطة واحدة، وحوّل الأسئلة السريرية إلى الفريق الطبي.",
    takeaways: [
      "مرضى الخليج موجودون على واتساب أصلًا، وكل خطوة إضافية بين رسالتهم والحجز، كاتصال هاتفي أو نموذج على الموقع، تُخسرك جزءًا ممن يراسلونك ليلًا.",
      "من بين الطرق الثلاث لاستقبال الحجوزات على واتساب، وحدها منصة واتساب للأعمال الرسمية تتوسع بأمان، أما الأدوات غير الرسمية فتعرّض رقم العيادة للحظر.",
      "الردود داخل نافذة خدمة العملاء (24 ساعة) مجانية، وخارجها تحتاج إلى قوالب معتمدة مسبقًا، والقوالب التسويقية هي الأعلى تكلفة.",
      "محادثة الحجز الناجحة تجيب أولًا، وتعطي نطاق سعر معتمدًا، وتعرض موعدين محددين، وتؤكد الحجز بضغطة واحدة.",
      "اجمع أقل قدر من البيانات الصحية في المحادثة، ولا تشخّص عبر واتساب، ولا ترسل العروض إلا لمن وافق على استقبالها.",
    ],
    blocks: [
      { t: "h2", id: "why-whatsapp", text: "لماذا تستقبل عيادة الأسنان الحجوزات عبر واتساب؟" },
      {
        t: "p",
        text: "الساعة 23:41 من مساء الأحد. مريض أجّل تعويض ضرسه المخلوع سنة كاملة، ثم كتب أخيرًا على واتساب العيادة: «كم سعر الزراعة؟ وعندكم موعد الأسبوع الجاي؟». موظفة الاستقبال تقرأ الرسالة في العاشرة وعشر دقائق صباح اليوم التالي، وفي ذلك الوقت يكون المريض قد تلقى ردًا وسعرًا وموعدًا يوم الأربعاء من عيادة أخرى.",
      },
      {
        t: "p",
        text: "لم يخطئ أحد في فريقك. كل ما في الأمر أن العيادة لم يكن فيها أحد داخل المحادثة لحظة اتخاذ القرار. **المشكلة ليست في توقيت المريض، بل في نظام حجز مبني على ساعات الدوام.**",
      },
      {
        t: "p",
        text: "وفي الخليج تحدث هذه اللحظة على الجوال. ففي السعودية بلغ عدد مستخدمي الإنترنت 33.9 مليون مستخدم مطلع 2025، بنسبة انتشار 99.0% ([DataReportal](https://datareportal.com/reports/digital-2025-saudi-arabia)). مرضاك متصلون وجوالاتهم في أيديهم، والسؤال الحقيقي: هل عيادتك متاحة لهم هناك في اللحظة نفسها؟",
      },
      {
        t: "p",
        text: "كل قناة أخرى تضيف خطوة بين الرغبة والحجز. الخط الهاتفي يحتاج إلى ساعات دوام وموظفة متفرغة، ونموذج الموقع يعد باتصال قد يفوت المريض. أما الحجز عبر واتساب حين يُدار جيدًا فيلغي هذه الخطوة: يسأل المريض فيتلقى الجواب، ويختار الوقت، ويُحجز موعده في المحادثة نفسها التي يكلّم فيها أهله.",
      },

      { t: "h2", id: "three-ways", text: "ما الطرق الثلاث لاستقبال الحجوزات على واتساب؟" },
      {
        t: "p",
        text: "تصل معظم العيادات إلى الحجز عبر واتساب بالصدفة: تبدأ موظفة الاستقبال بالرد من جوال العيادة، وينتشر الرقم، وبعد سنة يصبح مكتب الاستقبال كله جهازًا واحدًا. هناك ثلاث طرق لإدارة الأمر، وواحدة فقط منها تتوسع بأمان.",
      },
      { t: "h3", text: "1. تطبيق واتساب بزنس على جوال الموظفة" },
      {
        t: "p",
        text: "مجاني وسريع البدء: ملف تجاري، وردود سريعة، ورسائل ترحيب وغياب. لكن كل رد يكتبه شخص بيده، والحساب مرتبط بجوال رئيسي واحد مع عدد محدود من الأجهزة المرتبطة، ولا يتصل بتقويم المواعيد. وحين يكون ذلك الجوال على الصامت أو في الحقيبة، تكون العيادة مغلقة على واتساب.",
      },
      { t: "h3", text: "2. منصة واتساب للأعمال (API) مع مساعد آلي" },
      {
        t: "p",
        text: "هذا هو المسار الرسمي من Meta للأعمال التي تحتاج إلى التوسع، وغالبًا عبر Cloud API. تصل الرسائل عبر واجهة برمجية، فيستطيع النظام الرد فورًا، وقراءة التقويم والكتابة فيه، وإرسال قوالب تذكير معتمدة، وتحويل المحادثة إلى الشخص المناسب. ويعمل أكثر من موظف على الرقم نفسه في الوقت ذاته، وتُحفظ كل محادثة. تحاسب Meta على كل رسالة قالب تُسلَّم، وتحتاج إلى مزوّد خدمة أو مطوّر لربط المنصة.",
      },
      { t: "h3", text: "3. الأدوات غير الرسمية وروبوتات المتصفح" },
      {
        t: "p",
        text: "برامج تتحكم في واتساب ويب أو في التطبيق العادي عبر سكربتات، وتبدو رخيصة وسريعة. لكنها تعمل خارج شروط واتساب، وتتعطل كلما تغيّرت الواجهة، وقد يُحظر الرقم الذي تعمل عليه فتضيع معه كل محادثات المرضى. وعيادة يعرف مرضاها رقمًا واحدًا لا تحتمل هذه المخاطرة مقابل توفير بسيط.",
      },
      {
        t: "table",
        head: ["المعيار", "تطبيق واتساب بزنس على جوال", "منصة واتساب للأعمال + مساعد", "الأدوات غير الرسمية"],
        rows: [
          ["التكلفة", "التطبيق مجاني، لكن كل رد يستهلك وقت الموظفين", "رسوم على كل رسالة قالب تُسلَّم، إضافة إلى البرنامج المربوط", "رخيصة حتى يضيع الرقم"],
          ["التوسع", "جوال رئيسي وعدد قليل من الأجهزة المرتبطة", "فريق كامل وردود آلية على رقم واحد", "غير مستقرة مع زيادة الرسائل"],
          ["الأتمتة", "رسائل ترحيب وغياب وردود سريعة", "ردود وحجوزات وتذكيرات ومتابعات", "سكربتات هشة"],
          ["الربط بالتقويم", "لا يوجد، والحجوزات تُنسخ يدويًا", "يقرأ المواعيد المتاحة ويسجّل الحجوزات", "غير موثوق"],
          ["الامتثال", "ضمن الشروط، لكنه يدوي بالكامل", "رسمي، والقوالب تراجعها Meta", "مخالفة لشروط واتساب"],
          ["المخاطر", "رسائل فائتة، وشخص واحد هو النظام كله", "منخفضة مع موافقة المريض وقوالب معتمدة", "حظر الرقم وضياع السجل"],
        ],
        caption: "مقارنة بين الطرق الثلاث لاستقبال حجوزات الأسنان على واتساب.",
      },

      { t: "h2", id: "whatsapp-rules", text: "ما قواعد واتساب التي تحدد تجربة الحجز؟" },
      {
        t: "p",
        text: "لا تحتاج إلى قراءة وثائق Meta للمطورين، لكن خمس قواعد تحدد ما يراه المريض وما تدفعه أنت. اضبطها من البداية، ويصبح الباقي مسألة تصميم.",
      },
      {
        t: "ul",
        items: [
          "**نافذة خدمة العملاء (24 ساعة).** حين يراسلك المريض تُفتح نافذة مدتها 24 ساعة، وتتجدد مع كل رسالة جديدة منه. داخلها تستطيع الرد بحرية، وتسمي Meta هذه الردود «رسائل خدمة» ([Meta: إرسال الرسائل](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages)).",
          "**القوالب خارج النافذة.** بعد إغلاق النافذة لا يمكنك بدء المحادثة إلا برسالة قالب معتمدة مسبقًا، والقوالب ثلاث فئات: تسويقية (Marketing) وخدمية (Utility) ومصادقة (Authentication) ([Meta: نظرة عامة على القوالب](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview)). الفئة الخدمية تغطي التحديثات الواقعية عن أمر رتّبه المريض بالفعل كالموعد، وأي محتوى ترويجي يُعد تسويقيًا.",
          "**التسعير لكل رسالة.** منذ 1 يوليو 2025 تحاسب Meta على كل رسالة قالب تُسلَّم، لا على المحادثة. رسائل الخدمة داخل النافذة مجانية، والقوالب الخدمية المرسلة والنافذة مفتوحة مجانية أيضًا، والقوالب التسويقية هي الفئة الأعلى تكلفة ([Meta: التسعير](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing)).",
          "**الموافقة وإلغاؤها.** تشترط [سياسة رسائل واتساب للأعمال](https://business.whatsapp.com/policy) الحصول على موافقة الشخص قبل مراسلته، واحترام طلبه إذا أراد التوقف. والمريض الذي وافق على تذكيرات المواعيد لم يوافق بذلك على العروض.",
          "**قاعدة الذكاء الاصطناعي (يناير 2026).** ابتداءً من 15 يناير 2026 تمنع شروط واتساب للأعمال مساعدات الذكاء الاصطناعي العامة، أي روبوتات المحادثة التي يكون الذكاء الاصطناعي نفسه هو المنتج فيها. أما الأعمال التي تستخدم الذكاء الاصطناعي لخدمة العملاء، كالحجز والإجابة عن أسئلة العملاء، فما زالت مسموحة ([TechCrunch](https://techcrunch.com/2025/10/18/whatssapp-changes-its-terms-to-bar-general-purpose-chatbots-from-its-platform/)). وموظفة استقبال ذكية تحجز مواعيد العيادة هي بالضبط الحالة المسموح بها.",
        ],
      },
      {
        t: "p",
        text: "النتيجة العملية: رُدّ بسرعة ما دامت النافذة مفتوحة، لأن الردود عندها بلا تكلفة، واحتفظ بالقوالب للحظات التي لا يكون فيها المريض داخل المحادثة. وهذا تصنيف الرسائل الشائعة في العيادة عادةً.",
      },
      {
        t: "table",
        head: ["رسالة العيادة", "النوع المعتاد", "ما يجب الانتباه إليه"],
        rows: [
          ["تأكيد الحجز", "رسالة خدمة", "تُرسل في المحادثة التي حجز فيها المريض للتو، فالنافذة مفتوحة."],
          ["التذكير قبل الموعد", "قالب خدمي", "غالبًا تكون النافذة قد أُغلقت. اجعله وقائع فقط: التاريخ والوقت والطبيب والمكان."],
          ["تغيير الموعد أو إلغاؤه", "رسالة خدمة أو قالب خدمي", "رد حر إذا طلب المريض، وقالب إذا بادرت العيادة."],
          ["الاطمئنان بعد العلاج", "قالب خدمي", "مرتبط بالعلاج الذي تم للتو، وأي عرض داخله يحوّله إلى تسويقي."],
          ["تذكير الفحص الدوري كل 6 أشهر", "تسويقي في الغالب", "لا يوجد موعد محجوز، فقد تعدّه Meta رسالة إعادة تفاعل. يحتاج إلى موافقة."],
          ["عرض ترويجي أو موسمي", "قالب تسويقي", "لمن وافق على العروض فقط، مع طريقة سهلة لإيقافها."],
        ],
        caption: "كيف تتوزع رسائل العيادة المعتادة على أنواع رسائل واتساب. القرار النهائي في التصنيف لـ Meta عند مراجعة القالب.",
      },

      { t: "h2", id: "booking-conversation", text: "كيف تبدو محادثة الحجز التي تنتهي بموعد؟" },
      {
        t: "p",
        text: "أغلب محادثات واتساب التي لا تنتهي بحجز تفشل بالطريقة نفسها: العيادة ترد على السؤال بسؤال. عبارة «متى يناسبك؟» تعيد العبء إلى مريض متعب في آخر الليل، فلا يرد. أما المحادثة التي تتحول إلى موعد فتمر بست خطوات.",
      },
      {
        t: "ol",
        items: [
          "**أجب عن السؤال أولًا.** إذا سأل عن الزراعة، فأول سطر عن الزراعة، لا «كيف أقدر أخدمك؟».",
          "**أعطِ نطاق سعر من المعلومات المعتمدة.** نطاق وافقت عليه العيادة، مع ما يرفعه أو يخفضه، أفضل بكثير من «الأسعار تختلف، تفضل بزيارتنا».",
          "**اعرض موعدين محددين.** «الثلاثاء 4:30 عصرًا أو الأربعاء 11:00 صباحًا؟» قرار بكلمة واحدة، أما السؤال المفتوح فواجب منزلي.",
          "**أكّد بضغطة واحدة.** أعد تفاصيل الحجز كاملة: اليوم والتاريخ والوقت والطبيب ونوع العلاج، واكتفِ بـ«نعم» من المريض.",
          "**أرسل موقع العيادة وتعليمات التحضير.** المواقف، والدور، وما يجب إحضاره، وهل يأكل قبل الموعد.",
          "**ثم ذكّره.** قالب خدمي قبل الموعد، مع طريقة سهلة لتغييره.",
        ],
      },
      {
        t: "p",
        text: "الخطوة الأخيرة ليست مجاملة. فقد وجدت [مراجعة كوكرين](https://www.cochrane.org/evidence/CD007458_mobile-phone-messaging-reminders-attendance-healthcare-appointments) لثماني تجارب أن رسائل التذكير النصية رفعت نسبة الحضور مقارنة بعدم التذكير، بأثر مماثل للتذكير بالاتصال الهاتفي وبتكلفة أقل لكل حضور. ويشرح دليلنا عن [تقليل غياب مرضى الأسنان عن مواعيدهم](/ar/blog/reduce-dental-no-shows) جدول التذكير بالتفصيل.",
      },
      { t: "h3", text: "مثال: استفسار الزراعة في 23:41 وقد تحوّل إلى موعد" },
      { t: "p", text: "المحادثة التالية توضيحية، واسم الطبيبة والأسعار والمواعيد افتراضية." },
      {
        t: "ul",
        items: [
          "**المريض، الأحد 23:41:** السلام عليكم، كم سعر زراعة السن؟ عندي ضرس ورا مخلوع من سنة.",
          "**العيادة:** وعليكم السلام، أهلًا بك. زراعة السن الواحد مع التاج تتراوح عندنا عادةً بين 4,500 و7,000 ريال، والخطة الدقيقة تحددها الطبيبة بعد فحص العظم بالأشعة في الاستشارة. هل يناسبك أن نحجز لك استشارة مع د. سارة؟ المتاح: الثلاثاء 4:30 عصرًا أو الأربعاء 11:00 صباحًا.",
          "**المريض:** الأربعاء أنسب لي. بس الزراعة تعوّر؟",
          "**العيادة:** الاستشارة فحص وأشعة فقط، ومدتها نحو 30 دقيقة دون أي إجراء مؤلم. وإن قررت الزراعة تشرح لك د. سارة التخدير وفترة التعافي بالتفصيل. هل أؤكد لك موعد الأربعاء 11:00 صباحًا؟",
          "**المريض:** إيه أكّديه، الله يعطيك العافية.",
          "**العيادة:** تم الحجز: الأربعاء 7 أكتوبر، 11:00 صباحًا، استشارة زراعة مع د. سارة. هذا موقع العيادة على الخريطة، والمواقف أسفل المبنى، والعيادة في الدور الثاني. أحضر معك أي أشعة سابقة إن وُجدت، وإذا احتجت إلى تغيير الموعد فاكتب لنا هنا في أي وقت.",
          "**قالب خدمي، الثلاثاء 6:00 مساءً:** تذكير: موعدك مع د. سارة غدًا الأربعاء 7 أكتوبر الساعة 11:00 صباحًا. أرسل 1 للتأكيد أو 2 لتغيير الموعد.",
        ],
      },
      {
        t: "p",
        text: "ثلاث رسائل من المريض، ودقائق قليلة، دون أي اتصال هاتفي، ولم تسأله العيادة مرة واحدة «متى يناسبك؟».",
      },
      { t: "cta" },

      { t: "h2", id: "setup-checklist", text: "كيف تجهّز الحجز عبر واتساب خطوة بخطوة؟" },
      {
        t: "ol",
        items: [
          "**خصّص رقمًا للعيادة.** رقم تملكه العيادة، لا الجوال الشخصي لأحد الموظفين، فهذا الرقم سيبقى على لوحة العيادة وموقعها الإلكتروني وخرائط Google لسنوات.",
          "**وثّق النشاط التجاري لدى Meta.** أكمل توثيق النشاط التجاري في Meta Business Manager بالسجل التجاري وبيانات العيادة، ليرتبط الحساب بالكيان القانوني للعيادة.",
          "**اختر الاسم المعروض.** تراجع Meta الاسم الذي يراه المريض، ويجب أن يطابق اسم عيادتك الحقيقي، لا اسمًا عامًا مثل «عيادة أسنان».",
          "**اعتمد القوالب مسبقًا.** قدّمها قبل الإطلاق، فالمراجعة تأخذ وقتًا، والقالب المرفوض يحتاج إلى إعادة صياغة. المجموعة الأساسية في الأسفل.",
          "**اربط التقويم.** يجب أن يقرأ المساعد المواعيد المتاحة فعلًا لكل طبيب وكرسي، وأن يسجّل الحجوزات فيه، حتى لا يتعارض حجز المحادثة مع حجز الاستقبال.",
          "**حدّد قواعد التحويل إلى الفريق.** قرّر مسبقًا ما يذهب مباشرة إلى شخص من الفريق: الألم أو التورم أو النزيف بعد العلاج، والشكاوى، وأي سؤال سريري، وأي مريض يطلب التحدث مع موظف.",
          "**انشر روابط المحادثة المباشرة.** ضع رابط wa.me في موقعك، وفي نبذة حسابك على إنستغرام، وفي ملفك على Google Business Profile، ليصل كل مريض إلى المحادثة نفسها.",
        ],
      },
      { t: "h3", text: "قوالب تعتمدها قبل الإطلاق" },
      {
        t: "p",
        text: "اكتب القوالب الخدمية بصيغة وقائع عن موعد محدد، دون أي عرض. المتغيرات مثل {{1}} تُملأ لكل مريض على حدة.",
      },
      {
        t: "ul",
        items: [
          "**تذكير بالموعد (خدمي):** «مرحبًا {{1}}، نذكّرك بموعدك مع {{2}} يوم {{3}} الساعة {{4}}. أرسل 1 للتأكيد أو 2 لتغيير الموعد.»",
          "**تذكير يوم الموعد (خدمي):** «مرحبًا {{1}}، بانتظارك اليوم الساعة {{2}}. موقعنا: {{3}}.»",
          "**تأكيد حجز تم بالهاتف (خدمي):** «تم تأكيد موعدك: {{1}} الساعة {{2}} مع {{3}}. للتعديل يمكنك الرد هنا.»",
          "**طلب تغيير موعد (خدمي):** «مرحبًا {{1}}، {{2}} لن يكون متاحًا يوم {{3}}. هل يناسبك {{4}} أو {{5}}؟ أرسل اختيارك.»",
          "**الاطمئنان بعد العلاج (خدمي):** «مرحبًا {{1}}، كيف حالك بعد {{2}}؟ إذا زاد التورم أو النزيف أو الألم فاكتب لنا هنا وسيتواصل معك فريقنا.»",
          "**موعد فائت (خدمي غالبًا):** «مرحبًا {{1}}، افتقدناك في موعد اليوم. هل تود حجز موعد جديد؟ ردّ علينا ونرسل لك أقرب المواعيد المتاحة.»",
          "**تذكير الفحص الدوري (تسويقي غالبًا):** «مرحبًا {{1}}، مرّ {{2}} أشهر على آخر فحص لك. هل تود أن نجد لك موعدًا مناسبًا؟»",
          "**متابعة خطة العلاج (تسويقي غالبًا):** «مرحبًا {{1}}، طلب منا د. {{2}} أن نتأكد إن كان لديك أي سؤال عن خطة {{3}} التي ناقشتماها.»",
        ],
      },
      { t: "h3", text: "روابط المحادثة المباشرة" },
      {
        t: "p",
        text: "رابط wa.me يفتح محادثة مع رقمك، ويمكنه أن يملأ أول رسالة مسبقًا، دون الحاجة إلى أي حساب للمطورين. اكتب رقمك بالصيغة الدولية كاملة دون علامة + ودون الأصفار في البداية، ثم أضف المعامل text متبوعًا بنص الرسالة مرمّزًا، كما في الجدول.",
      },
      {
        t: "table",
        head: ["الجزء", "مثال"],
        rows: [
          ["الرابط الأساسي", "https://wa.me/9665XXXXXXXX"],
          ["رابط مع رسالة جاهزة", "https://wa.me/9665XXXXXXXX?text=%D8%AD%D8%AC%D8%B2%20%D9%85%D9%88%D8%B9%D8%AF"],
          ["ما يظهر للمريض في خانة الكتابة", "حجز موعد"],
        ],
        caption: "صيغة رابط wa.me. استبدل الرموز X برقم عيادتك.",
      },
      {
        t: "p",
        text: "غيّر نص الرسالة حسب القناة، مثل «مرحبًا، وجدتكم على إنستغرام» أو «مرحبًا، وجدتكم على خرائط Google»، فتعرف من أول رسالة من أين جاء كل حجز.",
      },

      { t: "h2", id: "patient-privacy", text: "كيف تحمي خصوصية المريض في محادثات الحجز؟" },
      {
        t: "p",
        text: "محادثات الحجز تلامس بيانات صحية. وفي السعودية أصبح نظام حماية البيانات الشخصية (PDPL) واجب التطبيق بالكامل في 14 سبتمبر 2024 بعد مهلة سنة، وهو يصنّف البيانات الصحية بيانات حساسة تخضع لضوابط إضافية ([Clyde & Co](https://www.clydeco.com/en/insights/2024/09/saudi-arabia-s-personal-data-protection-law-become)). وفي بقية دول الخليج راجع قانون حماية البيانات المحلي، فالتصميم الأكثر أمانًا واحد في كل مكان.",
      },
      {
        t: "ul",
        items: [
          "**اجمع الحد الأدنى.** الاسم والوقت المفضل وسبب الزيارة بكلمات المريض نفسه تكفي للحجز. أما التاريخ المرضي فمكانه السجل الطبي في العيادة، لا محادثة واتساب.",
          "**لا تشخيص عبر المحادثة.** لا بأس بشرح ما تتضمنه الاستشارة، لكن لا يصح أن تخبر المريض بما في سنّه من خلال صورة. الألم والتورم والإصابات تذهب إلى الطبيب.",
          "**اطلب الموافقة صراحة.** أخبر المريض عند الحجز أن التذكيرات ستصله على واتساب، واطلب موافقته بشكل منفصل قبل إرسال أي عروض.",
          "**تحكّم في الصلاحيات.** حدّد من في الفريق يقرأ أي محادثات، واحفظ السجل في نظام العيادة لا في الجوالات الشخصية.",
        ],
      },
      {
        t: "p",
        text: "هذه إرشادات عملية وليست استشارة قانونية، ويُستحسن أن يراجع مستشار حماية البيانات لديك الإعداد النهائي.",
      },

      { t: "h2", id: "common-mistakes", text: "ما الأخطاء التي تخسر بها العيادات حجوزات واتساب؟" },
      {
        t: "ul",
        items: [
          "**مطالبة المريض بالاتصال.** عبارة «تفضل اتصل علينا للحجز» تحوّل استفسارًا جادًا إلى مهمة مؤجلة للغد. احجز له في القناة التي اختارها هو.",
          "**الأسئلة المفتوحة.** «أي وقت يناسبك؟» واجب منزلي. اعرض موعدين.",
          "**إرسال العروض دون موافقة.** يخالف سياسة الرسائل، ويدفع المرضى إلى حظر رقمك والإبلاغ عنه، وتدفع عليه أعلى سعر.",
          "**جوال موظفة واحدة يصبح هو النظام.** حين تأخذ إجازة، يغيب معها مكتب الاستقبال وسجل المحادثات كله.",
          "**لا متابعة بعد «بفكر وأرد عليك».** هذا المريض أخبرك للتو أنه مهتم. رسالة لبقة بعد أيام قليلة تجيب عن قلقه المتوقع قد تعيد حجزًا كان سيضيع. وبعد 24 ساعة تحتاج هذه الرسالة إلى قالب، فاكتبه مسبقًا. ويتناول دليلنا عن [إعادة المرضى المنقطعين](/ar/blog/reactivate-inactive-dental-patients) هذه المتابعة بتوسع.",
        ],
      },

      { t: "h2", id: "how-lina-works", text: "كيف تدير لينا الحجز عبر واتساب" },
      {
        t: "p",
        text: "لينا موظفة الاستقبال الذكية التي تبنيها Flowramo لعيادات الأسنان، وتعمل على منصة واتساب للأعمال الرسمية. ترد على المرضى خلال ثوانٍ، ليلًا ونهارًا، بالعربية والإنجليزية والتركية، بلغة المريض ولهجته، ومن المعلومات التي تعتمدها العيادة فقط: الخدمات ونطاقات الأسعار والأطباء وساعات العمل والموقع وتعليمات التحضير وما بعد العلاج.",
      },
      {
        t: "p",
        text: "تبحث لينا عن المواعيد المتاحة، وتحجز المواعيد أو تغيّرها أو تلغيها في تقويم العيادة، ثم ترسل التأكيدات والتذكيرات. وتتذكر كل محادثة، وتتابع المريض حين يتوقف عن الرد، وترسل رسائل ما بعد العلاج، وتعيد المرضى إلى فحوصاتهم الدورية. وإذا كان الأمر عاجلًا أو سريريًا أو حساسًا أو خارج ما تعرفه، حوّلت المحادثة إلى فريقك مع سياقها كاملًا، فهي لا تشخّص. وكل يوم تتلقى العيادة ملخصًا بالحجوزات والمحادثات والمرضى المعرّضين للضياع.",
      },
      {
        t: "p",
        text: "وللصورة الأوسع عن هذا الدور، اقرأ [ماذا تقدم موظفة الاستقبال الذكية لعيادة الأسنان](/ar/blog/ai-receptionist-for-dental-clinics).",
      },
    ],
    faq: [
      {
        q: "ما الفرق بين واتساب بزنس و API للعيادة؟",
        a: "تطبيق واتساب بزنس مجاني للردود اليدوية، فيه ردود سريعة ورسائل غياب، ويعمل على جوال رئيسي وعدد محدود من الأجهزة المرتبطة. أما منصة واتساب للأعمال (API) فهي الواجهة الرسمية من Meta لربط البرامج: ردود آلية، وحجز في التقويم، وقوالب تذكير معتمدة، وفريق كامل على رقم واحد. والعيادة التي تريد حجزًا آليًا تحتاج إلى المنصة، وتُحاسب فيها على كل رسالة قالب تُسلَّم.",
      },
      {
        q: "كم تكلفة نظام حجز المواعيد عبر واتساب للعيادة؟",
        a: "منذ 1 يوليو 2025 تحاسب Meta على كل رسالة قالب تُسلَّم. رسائل الخدمة داخل نافذة الـ24 ساعة مجانية، والقوالب الخدمية المرسلة والنافذة مفتوحة مجانية أيضًا. أما التذكيرات المرسلة بعد إغلاق النافذة فمدفوعة، والقوالب التسويقية هي الأعلى سعرًا. وتختلف الأسعار حسب الدولة، فراجع جدول أسعار Meta الحالي. وتكلفة البرنامج أو المزوّد الذي يدير الحجز منفصلة عن ذلك.",
      },
      {
        q: "هل أقدر أرسل تذكير المواعيد للمرضى على واتساب تلقائيًا؟",
        a: "نعم، عبر منصة واتساب للأعمال. ولأن التذكير يُرسل غالبًا بعد إغلاق نافذة الـ24 ساعة، فلا بد أن يكون قالبًا معتمدًا مسبقًا، عادةً من الفئة الخدمية (Utility)، وأن يكون المريض قد وافق على استقبال التذكيرات على واتساب. اجعل التذكير وقائع فقط: التاريخ والوقت والطبيب والموقع وطريقة سهلة للتأكيد أو التغيير. وقد وجدت مراجعة كوكرين أن التذكير النصي يرفع نسبة الحضور مقارنة بعدم التذكير.",
      },
      {
        q: "هل ما زال استخدام الذكاء الاصطناعي في واتساب العيادة مسموحًا بعد قرار 2026؟",
        a: "نعم للاستخدام التجاري. فمنذ 15 يناير 2026 تمنع شروط واتساب للأعمال مساعدات الذكاء الاصطناعي العامة، أي الروبوتات التي يكون الذكاء الاصطناعي نفسه هو المنتج فيها. أما الأعمال التي تستخدمه لخدمة العملاء وتشغيل أعمالها، كحجز المواعيد والإجابة عن أسئلة العملاء، فما زالت مسموحة. وموظفة الاستقبال الذكية التي ترد على المرضى وتحجز مواعيدهم تقع ضمن الاستخدام المسموح.",
      },
      {
        q: "وش المعلومات اللي تطلبها العيادة من المريض في واتساب؟",
        a: "فقط ما يلزم للحجز: الاسم والوقت المفضل وسبب الزيارة بكلمات المريض. ففي السعودية تُعد البيانات الصحية بيانات حساسة بموجب نظام حماية البيانات الشخصية، الواجب التطبيق بالكامل منذ 14 سبتمبر 2024. احتفظ بالتاريخ المرضي للسجل الطبي، وتجنّب التشخيص عبر المحادثة، واطلب الموافقة على التذكيرات وبشكل منفصل على العروض، وحدّد من يقرأ المحادثات من الفريق.",
      },
    ],
    sources,
    keywords: [
      "حجز المواعيد عبر واتساب لعيادة الأسنان",
      "حجز موعد اسنان واتساب",
      "واتساب بزنس للعيادات",
      "نظام حجز مواعيد واتساب",
      "الفرق بين واتساب بزنس و API",
      "رسائل تذكير المواعيد واتساب",
      "واتساب API للعيادات",
      "حجز مواعيد عيادة اسنان",
      "رابط واتساب مباشر للعيادة",
    ],
    minutes: 9,
  },
};

export default article;
