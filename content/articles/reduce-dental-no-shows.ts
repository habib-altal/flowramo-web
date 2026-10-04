import type { Article } from "./types";

const article: Article = {
  slug: "reduce-dental-no-shows",
  published: "2026-10-04",
  updated: "2026-10-04",
  related: ["reactivate-inactive-dental-patients", "whatsapp-appointment-booking-dental-clinic"],

  en: {
    title: "How to reduce no-shows in a dental clinic: an evidence-based playbook",
    seoTitle: "How to Reduce No-Shows in a Dental Clinic: 8-Step Playbook",
    description:
      "How to reduce no-shows in a dental clinic: what the research shows, the real cost of an empty chair, an 8-step playbook and WhatsApp reminder scripts.",
    answer:
      "To reduce no-shows in a dental clinic, change the appointment system, not the patient: send two-way WhatsApp reminders 48–72 hours and a few hours before, asking patients to confirm or reschedule; make rescheduling instant; shorten how far ahead you book; refill freed slots from a waitlist; treat repeat no-shows differently; and follow up every missed visit the same day.",
    takeaways: [
      "No-shows are concentrated: across 2.5 million dental appointments in Helsinki, 5% of patients caused 21.8% of all no-shows, so target the repeat few.",
      "Forgetting is the most common reason patients give, and text reminders raised attendance by about 14% in relative terms in a Cochrane review.",
      "A one-way reminder only informs; a two-way reminder (reply 1 to confirm, 2 to reschedule) gives you time to refill the slot.",
      "The most effective change in a 25-practice East London programme was shortening the forward-booking period: fix the system, not the patient.",
      "Follow up every missed visit the same day, and track four numbers weekly: no-show rate, late cancellations, confirmation rate and 7-day rebook rate.",
    ],
    blocks: [
      {
        t: "p",
        text: "It's 9:00 on a Tuesday. The implant slot you blocked for 90 minutes is empty: the surgical kit is sterilised and laid out, the assistant is ready, and the patient who confirmed by phone two weeks ago isn't answering. By 9:20 you know the morning is gone. Nobody on your waiting list knew the chair was free, because nobody could have told them in time.",
      },
      {
        t: "p",
        text: "Most clinics blame bad luck or bad patients. The research points somewhere more useful: no-shows are largely a product of the appointment system, and systems can be redesigned. Below: the real cost, the evidence on who misses and why, and an 8-step playbook with WhatsApp scripts you can use this week.",
      },

      { t: "h2", id: "cost-of-a-no-show", text: "How much does a no-show really cost a dental clinic?" },
      {
        t: "p",
        text: "A dental chair-hour is perishable inventory. Like an airline seat, an empty slot can't be stored and sold tomorrow: once 10:30 passes with nobody in the chair, that revenue is gone for good, while rent, salaries and equipment costs stay the same.",
      },
      { t: "p", text: "Replace these illustrative numbers with your own:" },
      {
        t: "callout",
        title: "Illustrative example",
        text: "A clinic books **400 appointments a month** with a **7% no-show rate** (the starting rate in the East London study below, and close to the 7.4% in the Helsinki data). That is **28 empty slots a month**. At an average visit value of **400** in your local currency, that is **11,200 a month**, or **134,400 a year**, in treatment that was scheduled and never happened.",
      },
      { t: "p", text: "The hidden costs are often larger:" },
      {
        t: "ul",
        items: [
          "**Idle staff time.** The dentist, assistant and hygienist are paid whether the chair is full or not.",
          "**Wasted preparation.** Sterilised instruments, a lab-made crown waiting to be fitted, a long surgical block that could have held two shorter cases.",
          "**Longer waits for everyone else.** Each lost slot pushes another patient's treatment further out, and long waits produce more no-shows.",
          "**Broken treatment plans.** A root canal left between stages or a temporary crown that stays in too long becomes a clinical problem, and often a more expensive repair.",
          "**Front-desk time.** Every missed visit creates calls, messages and rebooking work.",
        ],
      },

      { t: "h2", id: "why-patients-miss", text: "Who misses dental appointments, and why?" },
      {
        t: "p",
        text: "The largest dental dataset on this comes from Helsinki's public oral health service. Researchers reviewed **2,513,376 appointments** for children and adolescents between 2006 and 2020: [7.4% were no-shows](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12535098/), lower among children aged 0–9 (5.2%) than adolescents aged 10–17 (8.6%). The rate fell from 9.9% to 5.8% over the period, so a no-show rate is not fixed. It moves when the system around it changes.",
      },
      {
        t: "p",
        text: "The most useful finding for a clinic owner is the concentration: **5% of patients accounted for 21.8% of all no-shows.** A small group of repeat non-attenders fills a large share of your empty chairs, so one policy for everyone is the wrong tool.",
      },
      {
        t: "p",
        text: "Why do people miss? A 2025 study of 420 adults who missed outpatient appointments at [Ibra Hospital in Oman](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12696599/) found the most common reason was simply **forgetting** (12.09%), followed by no leave from work (9.13%), needing to reschedule (6.91%) and transport problems (6.41%). In a [pediatric dental clinic survey](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6102432/) of 294 parents, 52.0% said they had missed an appointment; parents' forgetfulness and children's school exams topped the reasons, and 52.0% relied on memory alone to remember the date.",
      },
      {
        t: "p",
        text: "Each cause needs a different fix. A reminder solves forgetting; it does nothing for a patient who can't get time off work on a Wednesday morning.",
      },
      {
        t: "table",
        caption: "Match the fix to the cause",
        head: ["Why patients miss", "What to change"],
        rows: [
          ["Forgetting", "Two-way reminders 48–72 hours and a few hours before, asking for a reply"],
          ["No leave from work", "Early-morning, evening and weekend slots; rescheduling in one message"],
          [
            "Children's school and exams",
            "After-school slots, no bookings in exam weeks, reminders sent to the parent",
          ],
          ["Transport and finding the clinic", "Location pin and parking details in the confirmation and on the day"],
          [
            "Anxiety or fear of the cost",
            "Pre-visit reassurance: what will happen, how long it takes, and the price range your clinic approved",
          ],
          [
            "Long wait between booking and visit",
            "A shorter booking horizon; recall invitations sent close to the due date",
          ],
        ],
      },

      { t: "h2", id: "fix-the-system", text: "Why the fix is the appointment system, not the patient" },
      {
        t: "p",
        text: "In East London, 25 general practices ran a two-year quality-improvement programme on missed appointments. The mean did-not-attend rate fell from 7% to 5.2%, about 4,030 fewer missed appointments. The most effective practice intervention was not aimed at patients at all: it was [shortening the forward-booking period](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7716879/). One practice that cut its booking horizon to a single day halved its rate, from 7.8% to 3.9%.",
      },
      {
        t: "quote",
        text: "To reduce non-attendance, it appears that the appointment system needs to change, not the patient.",
        cite: "Margham, Williams, Steadman and Hull, British Journal of General Practice (2021)",
      },
      {
        t: "p",
        text: "The study was in general practice, and a dental clinic can't book everyone for tomorrow. But the principle carries over: the longer the gap between booking and visit, the more time for plans to change and the date to be forgotten. Every step below changes the system, not the patient.",
      },

      { t: "h2", id: "what-reminders-can-do", text: "What can appointment reminders do, and what can't they?" },
      {
        t: "p",
        text: "Reminders are the best-studied tool. A [Cochrane review](https://www.cochrane.org/evidence/CD007458_mobile-phone-messaging-reminders-attendance-healthcare-appointments) of 8 randomised trials with 6,615 participants found that text-message reminders improved attendance compared with no reminder (risk ratio 1.14, moderate-quality evidence). Put simply, attendance was about 14% higher in relative terms. Text reminders worked about as well as phone-call reminders and cost less per attendance.",
      },
      {
        t: "p",
        text: "That is a real gain for little effort. But a one-way reminder has limits:",
      },
      {
        t: "ul",
        items: [
          "It doesn't help the patient who can't leave work that day. They need a different slot, not a better memory.",
          "It tells you nothing. If nobody replies, you still find out at 9:20 that the chair is empty.",
          "It doesn't reach the fear behind some no-shows, especially before surgery or expensive treatment.",
        ],
      },
      {
        t: "p",
        text: "The upgrade is a **two-way reminder**: one that asks for an answer and makes answering easy. A confirmation tells you who is coming. A reschedule request 48 hours out gives you two days to refill the slot. Silence is a signal too: a patient who hasn't confirmed gets a second message or a call.",
      },

      { t: "h2", id: "no-show-playbook", text: "The 8-step playbook to reduce dental no-shows" },
      {
        t: "p",
        text: "Start with steps 1 to 3. They cost the least and address the most common cause. Add the rest as you measure.",
      },
      { t: "h3", text: "1. Confirm at booking, and get permission to message" },
      {
        t: "p",
        text: "Send a written confirmation the moment the appointment is made: date, time, doctor, location pin and what to bring. Make sure the patient has agreed to receive WhatsApp messages from you; the [WhatsApp Business Messaging Policy](https://business.whatsapp.com/policy) requires opt-in and requires you to honour opt-outs.",
      },
      { t: "h3", text: "2. Remind twice, and ask for a reply" },
      {
        t: "p",
        text: "Send one reminder 48–72 hours before and one on the morning of the visit, or 2–3 hours before an afternoon slot. The first asks for an answer: **reply 1 to confirm, 2 to reschedule**, or two quick-reply buttons. The second carries the location and an easy way to say you're running late.",
      },
      { t: "h3", text: "3. Make rescheduling easier than not showing up" },
      {
        t: "p",
        text: "Some no-shows are patients who meant to reschedule (it was the third most common reason in the Oman study) but found it awkward: a call during working hours, a wait on hold, an explanation. When rescheduling takes one message, at any hour, with two concrete slots offered back, patients use it. A late cancellation you can refill beats a silent no-show every time.",
      },
      { t: "h3", text: "4. Shorten the booking horizon" },
      {
        t: "p",
        text: "Book as close to the visit as your capacity allows. For six-month recalls, don't fix a date half a year ahead and hope; invite the patient two to three weeks before the due date and let them choose a slot. Keep some same-week capacity for treatment follow-ups, so a patient who needs a filling isn't booked a month out.",
      },
      { t: "h3", text: "5. Keep a short-notice list" },
      {
        t: "p",
        text: "Ask patients who want an earlier slot if they'd like to hear when one opens. When a 2 comes back or a cancellation arrives, offer the slot to that list straight away. A slot freed 48 hours ahead is easy to fill; one freed at 9:20 almost never is.",
      },
      { t: "h3", text: "6. Treat the repeat few differently" },
      {
        t: "p",
        text: "Remember the Helsinki concentration: 5% of patients produced more than a fifth of no-shows. Flag anyone with two or more missed visits. For them, require an active confirmation (no reply means a phone call the day before), offer shorter lead times, and don't give them your longest, most valuable blocks without a deposit.",
      },
      { t: "h3", text: "7. Use deposits for long or expensive procedures" },
      {
        t: "p",
        text: "For implant surgery, long restorative sessions or cosmetic cases that block a large part of the day, a modest deposit deducted from the treatment cost is reasonable. Make it transferable or refundable with adequate notice, for example 48 hours. For check-ups and cleanings it rarely justifies the friction. Check your local consumer and health regulations before introducing one.",
      },
      { t: "h3", text: "8. Write a firm, kind policy, and follow up every missed visit the same day" },
      {
        t: "p",
        text: "Put your cancellation policy in one or two sentences and include it in the booking confirmation, for example: **“If you can't make it, please let us know at least 24 hours before, so we can offer the time to another patient.”** Giving the reason, another patient waiting, makes the rule read as fair rather than punitive.",
      },
      {
        t: "p",
        text: "Then message every patient who doesn't turn up, the same day, without blame, with two new slots. A same-day message reaches them while the missed visit is still fresh; wait a month and they may drift away from your clinic entirely. If they do, our guide to [reactivating inactive dental patients](/en/blog/reactivate-inactive-dental-patients) shows how to bring them back.",
      },

      { t: "cta" },

      { t: "h2", id: "whatsapp-reminder-scripts", text: "WhatsApp appointment reminder scripts you can copy" },
      {
        t: "p",
        text: "Adapt the wording to your clinic's voice; items in curly brackets are variables. One rule first: messages sent outside the 24-hour customer service window, which opens when the patient messages you, must be [pre-approved template messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview). Appointment reminders belong in the **Utility** category, so keep them strictly about the appointment. Promotional wording turns a template into **Marketing**, the [most expensive category](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing). Our guide to [WhatsApp appointment booking for dental clinics](/en/blog/whatsapp-appointment-booking-dental-clinic) covers templates and setup in detail.",
      },
      {
        t: "callout",
        title: "1. Booking confirmation (sent immediately)",
        text: "Hi {name}, you're booked with {doctor} on {day} at {time}. Here's our location: {map link}. Parking: {parking details}. We'll remind you two days before. If anything changes, just reply here and we'll find you another time.",
      },
      {
        t: "callout",
        title: "2. Reminder, 48 hours before",
        text: "Hi {name}, a reminder of your appointment with {doctor} on {day} at {time}. Reply 1 to confirm or 2 to choose another time. Moving it takes a minute and lets us offer your slot to another patient.",
      },
      {
        t: "callout",
        title: "3. Same-day reminder",
        text: "Good morning {name}, we'll see you today at {time} with {doctor}. Location: {map link}. Running late or can't make it? Reply here and we'll sort it out.",
      },
      {
        t: "callout",
        title: "4. Missed appointment (same day)",
        text: "Hi {name}, we missed you at {time} today and hope everything is all right. Would you like to rebook? We can offer {first slot} or {second slot}. Reply with the one that suits you.",
      },
      {
        t: "callout",
        title: "5. Waitlist offer",
        text: "Hi {name}, a {treatment} appointment with {doctor} has just opened on {day} at {time}. You asked to hear about earlier times, so we're telling you first. Reply 1 to take it and we'll hold it for 30 minutes.",
      },

      { t: "h2", id: "metrics-to-track", text: "Which no-show numbers should you track every week?" },
      {
        t: "p",
        text: "You can't manage what you only notice on bad mornings. Four numbers, reviewed weekly, tell you whether the changes are working:",
      },
      {
        t: "table",
        caption: "Weekly no-show dashboard",
        head: ["Metric", "How to calculate it", "What it tells you"],
        rows: [
          [
            "No-show rate",
            "Missed appointments ÷ appointments booked that week",
            "The headline. Split it by doctor, weekday and treatment.",
          ],
          [
            "Late-cancellation rate",
            "Cancellations with under 24 hours' notice ÷ appointments booked",
            "Whether patients reschedule instead of simply not coming.",
          ],
          [
            "Confirmation rate",
            "Patients who confirmed ÷ reminders sent",
            "Whether reminders get answered; a low rate means unclear wording or poor timing.",
          ],
          [
            "Rebook rate within 7 days",
            "No-shows and late cancellations rebooked within 7 days ÷ all of them",
            "Whether your same-day follow-up recovers lost visits.",
          ],
        ],
      },
      {
        t: "p",
        text: "Expect movement over weeks, not days; both Helsinki and East London measured change over years. What you want is a line that keeps going down.",
      },

      { t: "h2", id: "where-ai-fits", text: "Where an AI receptionist fits" },
      {
        t: "p",
        text: "Most of this playbook is simple. The hard part is doing it every day, including at 22:00 when a patient replies 2 and the front desk has gone home. That is the gap an [AI receptionist for dental clinics](/en/blog/ai-receptionist-for-dental-clinics) is built to close.",
      },
      {
        t: "p",
        text: "Lina, Flowramo's AI receptionist, runs this on your clinic's WhatsApp. She sends confirmations and two-way reminders, understands the reply even when it is free text in Arabic, English or Turkish (“Thursday doesn't work, anything next week after 5?”), and reschedules straight into your calendar at any hour. When a slot opens, she can offer it to patients who asked for an earlier time. When someone misses a visit, she messages them the same day with new slots, and patients at risk of being lost appear in the clinic's daily briefing. Anything clinical, urgent or sensitive goes to your team with the full conversation.",
      },
    ],
    faq: [
      {
        q: "What is a normal no-show rate for a dental clinic?",
        a: "There is no single benchmark, so measure your own rate first. In the largest dental dataset, 2.5 million appointments for under-18s in Helsinki's public service, 7.4% were no-shows, falling from 9.9% to 5.8% over 15 years. An East London general-practice programme started from 7%. What matters most is your trend: a rate that keeps falling shows your system changes are working.",
      },
      {
        q: "Do WhatsApp reminders really reduce missed dental appointments?",
        a: "The strongest evidence is for text-message reminders: a Cochrane review found they raised attendance compared with no reminder (risk ratio 1.14), about as well as phone calls and at lower cost per attendance. WhatsApp delivers the same kind of message on an app many patients already use to contact their clinic, and adds two-way replies, so patients can confirm or reschedule in the chat instead of simply not turning up.",
      },
      {
        q: "When should a dental clinic send appointment reminders?",
        a: "Send three messages: a confirmation at the moment of booking, a reminder 48–72 hours before that asks the patient to reply 1 to confirm or 2 to reschedule, and a short same-day reminder on the morning of the visit or 2–3 hours before an afternoon slot. The 48-hour message matters most, because it leaves enough time to offer a freed slot to someone else.",
      },
      {
        q: "Should a dental clinic charge a deposit or a no-show fee?",
        a: "Use deposits selectively. For long or expensive procedures such as implant surgery, a modest deposit deducted from the treatment cost and transferable with 48 hours' notice is reasonable. For check-ups and cleanings, two-way reminders, easy rescheduling and a clear 24-hour cancellation policy are usually a better fit than fees. Check your country's consumer and health regulations before introducing any charge.",
      },
      {
        q: "What should we do when a patient misses a dental appointment?",
        a: "Message the patient the same day, without blame: say you missed them, hope everything is all right, and offer two specific new slots. Record the reason if they give one. Flag patients with two or more missed visits so that next time they get an active confirmation, a shorter lead time and, for long procedures, a deposit. Then track how many are rebooked within 7 days.",
      },
    ],
    sources: [
      {
        label: "Cochrane — Mobile phone messaging reminders for attendance at healthcare appointments (2013)",
        url: "https://www.cochrane.org/evidence/CD007458_mobile-phone-messaging-reminders-attendance-healthcare-appointments",
      },
      {
        label:
          "PubMed Central — No-shows among children and adolescents in public oral health service: a register-based study from Finland (2025)",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12535098/",
      },
      {
        label: "Cureus — Exploring the causes of missed appointments at Ibra Hospital in the Sultanate of Oman (2025)",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12696599/",
      },
      {
        label:
          "British Journal of General Practice — Reducing missed appointments in general practice: a quality improvement programme in East London (2021)",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7716879/",
      },
      {
        label: "PubMed Central — Pediatric dental appointments no-show: rates and reasons (2018)",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6102432/",
      },
      {
        label: "Meta for Developers — WhatsApp Business Platform: message templates overview (2026)",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview",
      },
      {
        label: "Meta for Developers — WhatsApp Business Platform: pricing (2026)",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing",
      },
      { label: "WhatsApp — WhatsApp Business Messaging Policy (2026)", url: "https://business.whatsapp.com/policy" },
    ],
    keywords: [
      "how to reduce no-shows in a dental clinic",
      "dental no-shows",
      "reduce missed dental appointments",
      "dental appointment reminders",
      "dental no-show rate",
      "dental cancellation policy",
      "whatsapp appointment reminder dental clinic",
      "dental missed appointment message",
    ],
    minutes: 10,
  },

  ar: {
    title: "كيف تقلل غياب المرضى عن المواعيد في عيادة الأسنان؟ خطة من 8 خطوات",
    seoTitle: "كيف تقلل غياب المرضى عن المواعيد في عيادة الأسنان",
    description:
      "كيف تقلل غياب المرضى عن المواعيد في عيادة الأسنان: ما تقوله الأبحاث، والتكلفة الحقيقية للكرسي الفارغ، وخطة من 8 خطوات ورسائل تذكير واتساب جاهزة.",
    answer:
      "لتقليل غياب المرضى عن المواعيد في عيادة الأسنان، غيّر نظام المواعيد لا المريض: أرسل على واتساب تذكيرًا يطلب التأكيد أو التغيير قبل الموعد بـ48 إلى 72 ساعة، وآخر قبله بساعات، واجعل التغيير برسالة واحدة، وقصّر مدة الحجز المسبق، واملأ المواعيد المتحررة من قائمة انتظار، وعامل المتغيبين المتكررين بطريقة مختلفة، وتابع كل موعد فائت في اليوم نفسه.",
    takeaways: [
      "الغياب متركّز: في 2.5 مليون موعد أسنان في هلسنكي، كان 5% من المرضى وراء 21.8% من كل حالات الغياب، فابدأ بهذه القلة المتكررة.",
      "النسيان هو السبب الأكثر شيوعًا، والتذكير بالرسائل النصية رفع الحضور بنحو 14% نسبيًا في مراجعة كوكرين.",
      "التذكير في اتجاه واحد يُخبر المريض فقط، أما التذكير التفاعلي («1 للتأكيد، 2 لتغيير الموعد») فيمنحك وقتًا لملء الموعد.",
      "أنجح تغيير في برنامج شمل 25 عيادة في شرق لندن كان تقصير مدة الحجز المسبق: غيّر النظام لا المريض.",
      "تابع كل موعد فائت في اليوم نفسه، وراقب أسبوعيًا أربعة أرقام: الغياب، والإلغاء المتأخر، والتأكيد، وإعادة الحجز خلال 7 أيام.",
    ],
    blocks: [
      {
        t: "p",
        text: "التاسعة صباح الثلاثاء. موعد الزراعة الذي خصصت له تسعين دقيقة ما زال فارغًا: أدوات الجراحة معقّمة وجاهزة، والمساعدة في مكانها، والمريض الذي أكّد موعده بالهاتف قبل أسبوعين لا يرد. في التاسعة وعشرين دقيقة تدرك أن الصباح ضاع. ولم يعلم أحد في قائمة الانتظار أن الكرسي متاح، لأن أحدًا لم يكن يستطيع إخبارهم في الوقت المناسب.",
      },
      {
        t: "p",
        text: "أغلب العيادات تعدّ ذلك سوء حظ، أو تلوم المرضى. لكن الأبحاث تشير إلى ما هو أنفع: الغياب في معظمه نتيجة لطريقة تصميم نظام المواعيد، والنظام يمكن تغييره. في هذا الدليل ستجد التكلفة الحقيقية للموعد الفائت، وما تقوله الدراسات عمّن يغيب ولماذا، وخطة عملية من ثماني خطوات مع رسائل واتساب جاهزة تبدأ بها هذا الأسبوع.",
      },

      { t: "h2", id: "cost-of-a-no-show", text: "كم يكلّف غياب المريض عيادتك فعلًا؟" },
      {
        t: "p",
        text: "ساعة الكرسي في عيادة الأسنان بضاعة لا تُخزَّن. مثل مقعد الطائرة، لا يمكن بيع الموعد الفارغ في الغد: إذا مرّت الساعة العاشرة والنصف دون مريض على الكرسي، ذهب دخلها نهائيًا، بينما يبقى الإيجار والرواتب وتكاليف الأجهزة كما هي.",
      },
      { t: "p", text: "هذه طريقة الحساب بأرقام توضيحية، ضع أرقام عيادتك مكانها." },
      {
        t: "callout",
        title: "مثال توضيحي",
        text: "عيادة تحجز **400 موعد في الشهر**، ونسبة الغياب فيها **7%** (وهي نسبة البداية في دراسة شرق لندن أدناه، وقريبة من 7.4% في بيانات هلسنكي). النتيجة **28 موعدًا فارغًا كل شهر**. وإذا كان متوسط قيمة الزيارة **400 ريال**، فالخسارة **11,200 ريال شهريًا**، أي **134,400 ريال في السنة** من علاج كان مجدولًا ولم يحدث.",
      },
      { t: "p", text: "والدخل الظاهر ليس إلا جزءًا من الخسارة. التكاليف الخفية غالبًا أكبر:" },
      {
        t: "ul",
        items: [
          "**فريق بلا عمل.** الطبيب والمساعدة وأخصائي صحة الفم يتقاضون رواتبهم سواء امتلأ الكرسي أم لا.",
          "**تحضير ضائع.** أدوات معقّمة، وتاج جاهز من المختبر ينتظر التركيب، وفترة جراحية طويلة كانت تتسع لحالتين أقصر.",
          "**انتظار أطول للآخرين.** كل موعد ضائع يؤخر علاج مريض آخر، وطول الانتظار نفسه يرفع الغياب كما سنرى.",
          "**خطط علاج متقطعة.** علاج عصب متوقف بين جلستين، أو تاج مؤقت بقي أطول مما ينبغي، يتحول إلى مشكلة سريرية، وغالبًا إلى إصلاح أعلى تكلفة.",
          "**وقت الاستقبال.** كل موعد فائت يعني اتصالات ورسائل وإعادة حجز تُضاف إلى يوم مزدحم أصلًا.",
        ],
      },

      { t: "h2", id: "why-patients-miss", text: "من يغيب عن مواعيد الأسنان، ولماذا؟" },
      {
        t: "p",
        text: "أكبر قاعدة بيانات في هذا الموضوع تأتي من خدمة صحة الفم العامة في هلسنكي. راجع الباحثون **2,513,376 موعدًا** للأطفال والمراهقين بين 2006 و2020، فكانت [7.4% منها مواعيد لم يحضرها أصحابها](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12535098/)، بنسبة أقل لدى الأطفال من 0 إلى 9 سنوات (5.2%) مقارنة بالمراهقين من 10 إلى 17 سنة (8.6%). وانخفضت النسبة من 9.9% إلى 5.8% خلال تلك الفترة، أي أن نسبة الغياب ليست قدرًا ثابتًا، بل تتغير حين يتغير النظام من حولها.",
      },
      {
        t: "p",
        text: "أهم ما في الدراسة لصاحب العيادة هو التركّز: **5% من المرضى كانوا وراء 21.8% من كل حالات الغياب.** مجموعة صغيرة من المتغيبين المتكررين تصنع حصة كبيرة من الكراسي الفارغة، ولذلك فإن سياسة واحدة للجميع ليست الأداة المناسبة.",
      },
      {
        t: "p",
        text: "أما الأسباب، فقد شملت دراسة نُشرت عام 2025 في [مستشفى إبراء بسلطنة عُمان](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12696599/) 420 بالغًا فاتتهم مواعيد في العيادات الخارجية، وكان السبب الأكثر شيوعًا هو **النسيان** (12.09%)، ثم عدم الحصول على إذن من العمل (9.13%)، ثم الحاجة إلى تغيير الموعد (6.91%)، ثم مشكلات المواصلات (6.41%). وفي [استبيان لعيادة أسنان أطفال](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6102432/) شمل 294 من الآباء والأمهات، قال 52.0% إنهم فوّتوا موعدًا من قبل، وتصدّر الأسباب نسيانُ الأهل واختباراتُ الأبناء المدرسية، واعتمد 52.0% منهم على الذاكرة وحدها لتذكّر الموعد.",
      },
      {
        t: "p",
        text: "ولكل سبب علاج مختلف. التذكير يعالج النسيان، لكنه لا يفعل شيئًا لمريض لا يستطيع الخروج من دوامه صباح الأربعاء.",
      },
      {
        t: "table",
        caption: "طابِق الحل مع السبب",
        head: ["لماذا يغيب المريض", "ما الذي تغيّره"],
        rows: [
          ["النسيان", "تذكير تفاعلي قبل الموعد بـ48 إلى 72 ساعة، وآخر قبله بساعات، مع طلب رد"],
          ["عدم الحصول على إذن من العمل", "مواعيد صباحية مبكرة ومسائية وفي نهاية الأسبوع، وتغيير الموعد برسالة واحدة"],
          [
            "مدارس الأبناء واختباراتهم",
            "مواعيد بعد الدوام المدرسي، وتجنّب أسابيع الاختبارات، وإرسال التذكير لولي الأمر",
          ],
          ["المواصلات والوصول إلى العيادة", "رابط الموقع وتفاصيل المواقف في رسالة التأكيد ويوم الموعد"],
          ["القلق أو الخوف من التكلفة", "طمأنة قبل الزيارة: ماذا سيحدث، وكم يستغرق، ونطاق السعر الذي اعتمدته العيادة"],
          ["طول المدة بين الحجز والزيارة", "تقصير مدة الحجز المسبق، وإرسال دعوة الفحص الدوري قرب موعد استحقاقه"],
        ],
      },

      { t: "h2", id: "fix-the-system", text: "لماذا يكمن الحل في نظام المواعيد لا في المريض؟" },
      {
        t: "p",
        text: "في شرق لندن، نفّذت 25 عيادة طب عام برنامجًا لتحسين الجودة استمر عامين لتقليل المواعيد الفائتة. انخفض متوسط نسبة عدم الحضور من 7% إلى 5.2%، أي نحو 4,030 موعدًا فائتًا أقل. والتدخل الأنجح لم يكن موجّهًا إلى المرضى أصلًا، بل كان [تقصير مدة الحجز المسبق](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7716879/). وعيادة واحدة قصّرت هذه المدة إلى يوم واحد خفّضت نسبة الغياب لديها إلى النصف، من 7.8% إلى 3.9%.",
      },
      {
        t: "quote",
        text: "لتقليل عدم الحضور، يبدو أن نظام المواعيد هو ما يحتاج إلى التغيير، لا المريض.",
        cite: "Margham وزملاؤه، British Journal of General Practice (2021). ترجمة عن الأصل الإنجليزي.",
      },
      {
        t: "p",
        text: "عيادة الأسنان لا تستطيع أن تحجز لكل مريض في اليوم التالي، والدراسة أُجريت في عيادات طب عام لا عيادات أسنان. لكن المبدأ ينتقل بسهولة: كلما طالت المدة بين الحجز والزيارة، زادت فرصة أن تتغير ظروف المريض أو يغيب الموعد عن ذهنه. وكل خطوة في الخطة التالية تغيير في النظام، لا محاضرة للمرضى.",
      },

      {
        t: "h2",
        id: "what-reminders-can-do",
        text: "ماذا يستطيع تذكير المرضى بالمواعيد أن يفعل، وما الذي لا يستطيعه؟",
      },
      {
        t: "p",
        text: "التذكير هو أكثر الأدوات دراسة. وجدت [مراجعة كوكرين](https://www.cochrane.org/evidence/CD007458_mobile-phone-messaging-reminders-attendance-healthcare-appointments) شملت 8 تجارب عشوائية و6,615 مشاركًا أن التذكير بالرسائل النصية رفع نسبة الحضور مقارنة بعدم التذكير (نسبة الخطر 1.14، بأدلة متوسطة الجودة)، أي أن الحضور كان أعلى بنحو 14% بالمقارنة النسبية. وكان أثر الرسائل قريبًا من أثر الاتصال الهاتفي، بتكلفة أقل لكل زيارة تمّت.",
      },
      {
        t: "p",
        text: "هذا مكسب حقيقي مقابل جهد بسيط، فعلى كل عيادة أن ترسل التذكير. لكن التذكير الذي يسير في اتجاه واحد له حدود:",
      },
      {
        t: "ul",
        items: [
          "لا يساعد المريض الذي لا يستطيع الخروج من عمله في ذلك اليوم. هذا يحتاج موعدًا آخر، لا ذاكرة أفضل.",
          "لا يخبرك بشيء. إن لم يرد أحد، ستكتشف في التاسعة وعشرين دقيقة أن الكرسي فارغ.",
          "لا يعالج الخوف الذي يقف وراء بعض حالات الغياب، خاصة قبل الجراحة أو العلاج المكلف.",
        ],
      },
      {
        t: "p",
        text: "الخطوة الأفضل هي **التذكير التفاعلي**: رسالة تطلب ردًا وتجعل الرد سهلًا. التأكيد يخبرك من سيحضر، وطلب تغيير الموعد قبل 48 ساعة يمنحك يومين لملء الموعد. وحتى الصمت إشارة: المريض الذي لم يؤكد يتلقى رسالة ثانية أو اتصالًا.",
      },

      { t: "h2", id: "no-show-playbook", text: "خطة من 8 خطوات لتقليل الغياب في عيادتك" },
      {
        t: "p",
        text: "ابدأ بالخطوات من 1 إلى 3، فهي الأقل تكلفة وتعالج السبب الأكثر شيوعًا. ثم أضف البقية وأنت تقيس النتائج.",
      },
      { t: "h3", text: "1. أكّد الموعد عند الحجز، واحصل على إذن المراسلة" },
      {
        t: "p",
        text: "أرسل تأكيدًا مكتوبًا لحظة الحجز: التاريخ والوقت والطبيب ورابط الموقع وما يجب إحضاره. وتأكد أن المريض وافق على تلقي رسائل واتساب منك، فـ[سياسة واتساب لرسائل الأعمال](https://business.whatsapp.com/policy) تشترط موافقته المسبقة، وتلزمك باحترام طلبه إذا أراد التوقف.",
      },
      { t: "h3", text: "2. ذكّر مرتين، واطلب ردًا" },
      {
        t: "p",
        text: "أرسل تذكيرًا قبل الموعد بـ48 إلى 72 ساعة، وآخر صباح يوم الموعد، أو قبله بساعتين إلى ثلاث إن كان مسائيًا. التذكير الأول يطلب ردًا: **أرسل 1 للتأكيد، أو 2 لتغيير الموعد**، أو زرّي رد سريع. والثاني يحمل رابط الموقع وطريقة سهلة لإبلاغكم بالتأخير.",
      },
      { t: "h3", text: "3. اجعل تغيير الموعد أسهل من الغياب" },
      {
        t: "p",
        text: "بعض المتغيبين كانوا ينوون تغيير الموعد أصلًا (وكان ذلك ثالث الأسباب في دراسة عُمان)، لكن الأمر بدا مرهقًا: اتصال في وقت الدوام، وانتظار على الخط، وشرح. حين يصبح التغيير برسالة واحدة، في أي ساعة، مع موعدين بديلين محددين، سيستخدمه المرضى. والإلغاء المتأخر الذي تستطيع ملء موعده أفضل دائمًا من غياب صامت.",
      },
      { t: "h3", text: "4. قصّر مدة الحجز المسبق" },
      {
        t: "p",
        text: "احجز أقرب ما تسمح به طاقة العيادة. وفي الفحص الدوري كل ستة أشهر، لا تثبّت موعدًا قبل نصف سنة وتنتظر، بل ادعُ المريض قبل موعد استحقاقه بأسبوعين إلى ثلاثة واترك له اختيار الوقت. واحتفظ بمواعيد في الأسبوع نفسه لاستكمال العلاج، حتى لا يُحجز مريض يحتاج حشوة بعد شهر.",
      },
      { t: "h3", text: "5. احتفظ بقائمة للمواعيد القريبة" },
      {
        t: "p",
        text: "اسأل المرضى الذين يريدون موعدًا أقرب إن كانوا يرغبون في إبلاغهم حين يتوفر. وعندما يصلك رد بـ2 أو إلغاء، اعرض الموعد على هذه القائمة فورًا. الموعد الذي يتحرر قبل 48 ساعة سهل الملء، أما الذي يتحرر في التاسعة وعشرين دقيقة فنادرًا ما يُملأ.",
      },
      { t: "h3", text: "6. تعامل مع القلة المتكررة بطريقة مختلفة" },
      {
        t: "p",
        text: "تذكّر نتيجة هلسنكي: 5% من المرضى كانوا وراء أكثر من خُمس حالات الغياب. ضع علامة على كل مريض فاته موعدان أو أكثر. واطلب منه تأكيدًا صريحًا (عدم الرد يعني اتصالًا في اليوم السابق)، واعرض عليه مواعيد أقرب، ولا تعطه أطول فتراتك وأعلاها قيمة دون عربون.",
      },
      { t: "h3", text: "7. اطلب عربونًا في الإجراءات الطويلة أو المكلفة" },
      {
        t: "p",
        text: "في جراحة الزراعة، أو جلسات الترميم الطويلة، أو حالات التجميل التي تحجز جزءًا كبيرًا من اليوم، يكون العربون المعقول الذي يُخصم من تكلفة العلاج إجراءً منطقيًا. اجعله قابلًا للنقل أو الاسترداد إذا أبلغ المريض مبكرًا، قبل 48 ساعة مثلًا. أما في الفحوص والتنظيف فنادرًا ما يستحق هذا التعقيد. وراجع أنظمة حماية المستهلك والأنظمة الصحية في بلدك قبل تطبيقه.",
      },
      { t: "h3", text: "8. اكتب سياسة حازمة ولطيفة، وتابع كل موعد فائت في اليوم نفسه" },
      {
        t: "p",
        text: "اختصر سياسة إلغاء المواعيد في جملة أو جملتين، وضعها في رسالة تأكيد الحجز، مثل: **«إذا تعذّر حضورك، نرجو إبلاغنا قبل 24 ساعة على الأقل، حتى نعطي الموعد لمريض آخر ينتظر.»** ذكر السبب، وهو مريض آخر ينتظر، يجعل القاعدة تبدو عادلة لا عقابية.",
      },
      {
        t: "p",
        text: "ثم راسل كل مريض لم يحضر، في اليوم نفسه، دون لوم، مع موعدين جديدين. الرسالة في اليوم نفسه تصله والموعد ما زال حاضرًا في ذهنه، أما الانتظار شهرًا فقد يعني أنه ابتعد عن العيادة تمامًا. وإن حدث ذلك، فدليلنا عن [إعادة المرضى غير النشطين إلى عيادة الأسنان](/ar/blog/reactivate-inactive-dental-patients) يشرح كيف تستعيدهم.",
      },

      { t: "cta" },

      { t: "h2", id: "whatsapp-reminder-scripts", text: "رسائل تذكير المرضى بالمواعيد على واتساب، جاهزة للنسخ" },
      {
        t: "p",
        text: "عدّل الصياغة لتناسب أسلوب عيادتك، واجعل كل رسالة قصيرة، وما بين الأقواس المعقوفة متغيرات. وقبل أي إرسال، هناك قاعدة مهمة: الرسائل التي تُرسل خارج نافذة خدمة العملاء، ومدتها 24 ساعة تبدأ حين يراسلك المريض، يجب أن تكون [رسائل قوالب معتمدة مسبقًا](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview). وتذكيرات المواعيد تندرج في فئة **Utility** (الرسائل الخدمية)، فاجعلها عن الموعد وحده، لأن أي صياغة ترويجية تنقل القالب إلى فئة **Marketing** (التسويقية)، وهي [الفئة الأعلى سعرًا](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing). ودليلنا عن [حجز مواعيد الأسنان عبر واتساب](/ar/blog/whatsapp-appointment-booking-dental-clinic) يشرح القوالب وطريقة الإعداد بالتفصيل.",
      },
      {
        t: "callout",
        title: "1. تأكيد الحجز (فور الحجز)",
        text: "هلا {الاسم}، تم تأكيد موعدك مع {الطبيب} يوم {اليوم} الساعة {الوقت}. موقع العيادة: {رابط الخريطة}، والمواقف: {تفاصيل المواقف}. بنرسل لك تذكير قبل الموعد بيومين، ولو تغيّر أي شيء ردّ علينا هنا ونرتب لك وقت ثاني.",
      },
      {
        t: "callout",
        title: "2. تذكير قبل الموعد بـ48 ساعة",
        text: "مرحبا {الاسم}، نذكّرك بموعدك مع {الطبيب} يوم {اليوم} الساعة {الوقت}. أرسل 1 للتأكيد، أو 2 إذا تبي موعد ثاني. التغيير ما ياخذ دقيقة، ويخلّينا نعطي الوقت لمريض ثاني ينتظر.",
      },
      {
        t: "callout",
        title: "3. تذكير يوم الموعد",
        text: "صباح الخير {الاسم}، ننتظرك اليوم الساعة {الوقت} عند {الطبيب}. موقع العيادة: {رابط الخريطة}. لو بتتأخر أو ما تقدر تجي، ردّ علينا هنا ونرتبها لك.",
      },
      {
        t: "callout",
        title: "4. بعد موعد فائت (في اليوم نفسه)",
        text: "هلا {الاسم}، افتقدناك اليوم في موعد الساعة {الوقت}، ونتمنى إن كل شيء بخير. تحب نحجز لك موعد جديد؟ عندنا {الموعد الأول} أو {الموعد الثاني}، اختر اللي يناسبك.",
      },
      {
        t: "callout",
        title: "5. عرض موعد من قائمة الانتظار",
        text: "هلا {الاسم}، توفّر موعد {العلاج} عند {الطبيب} يوم {اليوم} الساعة {الوقت}. طلبت نبلغك إذا توفّر موعد أقرب، فأنت أول من نخبره. أرسل 1 إذا تبيه، ونحجزه لك نص ساعة.",
      },

      { t: "h2", id: "metrics-to-track", text: "ما الأرقام التي تتابعها كل أسبوع لقياس الغياب؟" },
      {
        t: "p",
        text: "لا يمكنك إدارة ما لا تلاحظه إلا في الصباحات السيئة. أربعة أرقام تراجعها كل أسبوع تخبرك إن كانت التغييرات تعمل:",
      },
      {
        t: "table",
        caption: "لوحة متابعة الغياب الأسبوعية",
        head: ["المؤشر", "طريقة حسابه", "ماذا يخبرك"],
        rows: [
          [
            "نسبة عدم الحضور",
            "المواعيد الفائتة ÷ المواعيد المحجوزة في الأسبوع",
            "الرقم الأساسي. قسّمه حسب الطبيب واليوم ونوع العلاج.",
          ],
          [
            "نسبة الإلغاء المتأخر",
            "الإلغاءات قبل أقل من 24 ساعة ÷ المواعيد المحجوزة",
            "هل يغيّر المرضى مواعيدهم بدل أن يغيبوا ببساطة.",
          ],
          [
            "نسبة التأكيد",
            "المرضى الذين أكدوا ÷ رسائل التذكير المرسلة",
            "هل تُقرأ رسائلك ويُرد عليها. انخفاضها يعني صياغة غير واضحة أو توقيتًا غير مناسب.",
          ],
          [
            "نسبة إعادة الحجز خلال 7 أيام",
            "المتغيبون وأصحاب الإلغاء المتأخر الذين أعادوا الحجز خلال 7 أيام ÷ عددهم الكلي",
            "هل تستعيد متابعتك في اليوم نفسه الزيارات الفائتة.",
          ],
        ],
      },
      {
        t: "p",
        text: "توقّع أن ترى التغيير خلال أسابيع لا أيام، فدراستا هلسنكي وشرق لندن قاستا التغيير على مدى سنوات. ما تريده هو خط يواصل النزول.",
      },

      { t: "h2", id: "where-ai-fits", text: "أين تأتي موظفة الاستقبال الذكية؟" },
      {
        t: "p",
        text: "أغلب ما في هذه الخطة بسيط. الصعب هو تطبيقه كل يوم، بما في ذلك الساعة العاشرة ليلًا حين يرد مريض بـ2 ويكون فريق الاستقبال قد غادر. هذه هي الفجوة التي صُممت لها [موظفة الاستقبال الذكية لعيادات الأسنان](/ar/blog/ai-receptionist-for-dental-clinics).",
      },
      {
        t: "p",
        text: "لينا، موظفة الاستقبال الذكية من Flowramo، تتولى ذلك على واتساب عيادتك. ترسل التأكيدات والتذكيرات التفاعلية، وتفهم الرد حتى لو كان نصًا حرًا بالعربية أو الإنجليزية أو التركية («الخميس ما يناسبني، فيه شي الأسبوع الجاي بعد الخمس؟»)، وتغيّر الموعد مباشرة في تقويم العيادة في أي ساعة. وحين يتحرر موعد، تستطيع أن تعرضه على المرضى الذين طلبوا موعدًا أقرب. وإذا فات مريضًا موعده، تراسله في اليوم نفسه بمواعيد جديدة، ويظهر المرضى المعرّضون للضياع في الملخص اليومي للعيادة. وأي أمر سريري أو عاجل أو حساس يُحوَّل إلى فريقك مع المحادثة كاملة.",
      },
    ],
    faq: [
      {
        q: "كم نسبة الغياب الطبيعية في عيادة الأسنان؟",
        a: "لا يوجد رقم معياري واحد، لذا ابدأ بقياس نسبتك أنت. في أكبر قاعدة بيانات لمواعيد الأسنان، وهي 2.5 مليون موعد لمن هم دون 18 عامًا في الخدمة العامة بهلسنكي، كانت نسبة الغياب 7.4%، وانخفضت من 9.9% إلى 5.8% خلال 15 عامًا. وبدأ برنامج عيادات الطب العام في شرق لندن من 7%. الأهم هو الاتجاه: نسبة تنخفض شهرًا بعد شهر تعني أن تغييراتك تعمل.",
      },
      {
        q: "هل رسائل التذكير على الواتساب تقلل غياب المرضى فعلًا؟",
        a: "أقوى الأدلة تخص التذكير بالرسائل النصية: وجدت مراجعة كوكرين أنه رفع الحضور مقارنة بعدم التذكير (نسبة الخطر 1.14)، بأثر يقارب الاتصال الهاتفي وبتكلفة أقل لكل زيارة. وواتساب يوصل الرسالة نفسها على تطبيق يستخدمه كثير من المرضى أصلًا للتواصل مع عياداتهم، ويضيف إمكانية الرد، فيؤكد المريض موعده أو يغيّره في المحادثة نفسها بدل أن يغيب.",
      },
      {
        q: "متى أرسل رسالة تذكير الموعد للمريض؟",
        a: "أرسل ثلاث رسائل: تأكيدًا لحظة الحجز، وتذكيرًا قبل الموعد بـ48 إلى 72 ساعة يطلب من المريض إرسال 1 للتأكيد أو 2 لتغيير الموعد، وتذكيرًا قصيرًا صباح يوم الموعد أو قبله بساعتين إلى ثلاث إن كان مسائيًا. رسالة الـ48 ساعة هي الأهم، لأنها تترك وقتًا كافيًا لعرض الموعد المتحرر على مريض آخر.",
      },
      {
        q: "هل آخذ عربون من المريض حتى لا يغيب عن موعده؟",
        a: "استخدم العربون بانتقائية. في الإجراءات الطويلة أو المكلفة مثل جراحة الزراعة، يكون العربون المعقول الذي يُخصم من تكلفة العلاج، ويمكن نقله إذا أبلغ المريض قبل 48 ساعة، إجراءً منطقيًا. أما في الفحوص والتنظيف، فالتذكير التفاعلي وسهولة تغيير الموعد وسياسة واضحة للإبلاغ قبل 24 ساعة أنسب غالبًا من الرسوم. وراجع أنظمة بلدك قبل فرض أي رسوم.",
      },
      {
        q: "ماذا أفعل إذا غاب المريض عن موعده في العيادة؟",
        a: "راسله في اليوم نفسه دون لوم: قل إنكم افتقدتموه وتتمنون أن يكون بخير، واعرض عليه موعدين جديدين محددين. وسجّل السبب إن ذكره. ثم ضع علامة على كل مريض فاته موعدان أو أكثر، حتى يحصل في المرة القادمة على طلب تأكيد صريح ومدة حجز أقصر، وعربون في الإجراءات الطويلة. وتابع كم منهم أعاد الحجز خلال 7 أيام.",
      },
    ],
    sources: [
      {
        label: "Cochrane — Mobile phone messaging reminders for attendance at healthcare appointments (2013)",
        url: "https://www.cochrane.org/evidence/CD007458_mobile-phone-messaging-reminders-attendance-healthcare-appointments",
      },
      {
        label:
          "PubMed Central — No-shows among children and adolescents in public oral health service: a register-based study from Finland (2025)",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12535098/",
      },
      {
        label: "Cureus — Exploring the causes of missed appointments at Ibra Hospital in the Sultanate of Oman (2025)",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12696599/",
      },
      {
        label:
          "British Journal of General Practice — Reducing missed appointments in general practice: a quality improvement programme in East London (2021)",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7716879/",
      },
      {
        label: "PubMed Central — Pediatric dental appointments no-show: rates and reasons (2018)",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6102432/",
      },
      {
        label: "Meta for Developers — WhatsApp Business Platform: message templates overview (2026)",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview",
      },
      {
        label: "Meta for Developers — WhatsApp Business Platform: pricing (2026)",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing",
      },
      { label: "WhatsApp — WhatsApp Business Messaging Policy (2026)", url: "https://business.whatsapp.com/policy" },
    ],
    keywords: [
      "كيف تقلل غياب المرضى عن المواعيد في عيادة الأسنان",
      "غياب المرضى عن المواعيد",
      "تذكير المرضى بالمواعيد واتساب",
      "نسبة عدم الحضور عيادة اسنان",
      "إلغاء المواعيد في العيادة",
      "تقليل الغياب في العيادات",
      "رسالة تذكير بموعد عيادة الاسنان",
      "حجز موعد اسنان واتساب",
    ],
    minutes: 11,
  },
};

export default article;
