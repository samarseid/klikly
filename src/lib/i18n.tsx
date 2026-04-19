import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "uz" | "ru";

type Dict = Record<string, string | string[] | Record<string, string>>;

const dictionaries: Record<Lang, Dict> = {
  en: {
    "nav.home": "Home",
    "nav.problem": "Problem",
    "nav.solution": "Solution",
    "nav.business": "Business",
    "nav.team": "Team",
    "nav.demo": "Demo",
    "nav.download": "Download",
    "nav.signin": "Sign In",

    "hero.badge": "AI-Driven Super App · Ready for Launch",
    "hero.title1": "One Super App for",
    "hero.title2": "Real Estate & Services",
    "hero.subtitle":
      "Find homes, hire trusted professionals, and manage everything in one intelligent platform powered by AI.",
    "hero.cta.demo": "Try Demo",
    "hero.cta.download": "Download App",
    "hero.stat1": "Verified Listings",
    "hero.stat2": "Trusted Specialists",
    "hero.stat3": "AI Match Speed",

    "problem.kicker": "The Problem",
    "problem.title": "The market is fragmented, slow, and unsafe",
    "problem.subtitle":
      "People juggle 10+ apps, navigate fake listings, and waste hours negotiating with unverified workers.",
    "problem.scenario.title": "Real-life scenario",
    "problem.scenario.body":
      "“A user spends 3–5 hours scrolling outdated listings on Telegram, only to call a landlord whose apartment was rented last week. They then search a separate site for an electrician, with no rating or guarantee.”",
    "problem.list.0.title": "Market Fragmentation",
    "problem.list.0.body": "Users juggle 10+ platforms — classifieds, chats, agents, repair groups.",
    "problem.list.1.title": "Fake & Outdated Listings",
    "problem.list.1.body": "Up to 40% of property posts are stale or fraudulent.",
    "problem.list.2.title": "No Trust System for Workers",
    "problem.list.2.body": "Hiring relies on word-of-mouth — no ratings, no guarantees.",
    "problem.list.3.title": "Hours Wasted Negotiating",
    "problem.list.3.body": "Manual price discovery and back-and-forth chats kill momentum.",
    "problem.list.4.title": "No AI Personalization",
    "problem.list.4.body": "Existing platforms show the same listings to everyone.",
    "problem.list.5.title": "Payment & Safety Risks",
    "problem.list.5.body": "Cash deals, no escrow, no recourse if work goes wrong.",

    "solution.kicker": "The Solution",
    "solution.title": "Klikly unifies everything in one intelligent layer",
    "solution.subtitle":
      "Verified listings, AI matching, escrow payments, and a trusted worker network — in a single Super App.",
    "solution.steps.0.title": "1. Tell Klikly what you need",
    "solution.steps.0.body":
      "Type or speak: “2-bedroom near metro under $600” or “electrician for chandelier today”.",
    "solution.steps.1.title": "2. AI matches verified options",
    "solution.steps.1.body":
      "Our recommendation engine ranks listings and specialists by fit, price, ratings, and proximity.",
    "solution.steps.2.title": "3. Book, pay, and track in-app",
    "solution.steps.2.body":
      "Escrow-protected payments, in-app chat, and post-service rating — all in one flow.",
    "solution.feature.0": "Unified property + service marketplace",
    "solution.feature.1": "AI recommendation engine",
    "solution.feature.2": "Verified listings & specialists",
    "solution.feature.3": "Smart filters: budget, location, rating",
    "solution.feature.4": "Escrow-protected instant booking",
    "solution.feature.5": "Two-way trust & review system",

    "business.kicker": "Business Model",
    "business.title": "Scalable revenue from day one",
    "business.subtitle": "Five compounding revenue streams across both marketplaces.",
    "business.streams.0.label": "Transaction Commission",
    "business.streams.0.value": "3–7%",
    "business.streams.0.desc": "Per booking on services and rentals.",
    "business.streams.1.label": "Premium Listings",
    "business.streams.1.value": "$5–$50",
    "business.streams.1.desc": "Per featured property listing.",
    "business.streams.2.label": "Worker Subscription",
    "business.streams.2.value": "$10/mo",
    "business.streams.2.desc": "Pro tier for specialists & contractors.",
    "business.streams.3.label": "Featured Ads",
    "business.streams.3.value": "CPM/CPC",
    "business.streams.3.desc": "Boosted visibility for partners.",
    "business.streams.4.label": "AI Upsell",
    "business.streams.4.value": "Premium",
    "business.streams.4.desc": "Priority AI recommendations & insights.",
    "business.proj.title": "Projection",
    "business.proj.y1": "Year 1 · 10,000 users",
    "business.proj.y2": "Year 2 · 50,000 users",
    "business.proj.y3": "ARPU · $12 / year",
    "business.proj.note":
      "Capital-light marketplace economics: gross margin > 70% as supply density compounds in each city.",

    "ai.kicker": "AI System",
    "ai.title": "Intelligence at the core",
    "ai.subtitle": "Four proprietary AI layers that turn search into decisions.",
    "ai.modules.0.title": "NLP Chatbot",
    "ai.modules.0.body":
      "Conversational search in Uzbek, Russian, and English — understands intent, not just keywords.",
    "ai.modules.1.title": "Recommendation Engine",
    "ai.modules.1.body":
      "Ranks listings & specialists from your behavior, location, budget, and lifestyle signals.",
    "ai.modules.2.title": "Price Estimation Model",
    "ai.modules.2.body":
      "Real-time fair-price prediction based on regional comparables and seasonality.",
    "ai.modules.3.title": "Behavioral Suggestions",
    "ai.modules.3.body":
      "Anticipates needs: re-booking, maintenance reminders, market opportunities.",

    "roadmap.kicker": "Roadmap",
    "roadmap.title": "From idea to regional Super App",
    "roadmap.0.title": "Idea",
    "roadmap.0.body": "Market research & founding team assembled.",
    "roadmap.0.tag": "Completed",
    "roadmap.1.title": "Prototype",
    "roadmap.1.body": "Core flows, design system, AI prototype.",
    "roadmap.1.tag": "Current",
    "roadmap.2.title": "MVP",
    "roadmap.2.body": "Beta in Tashkent — verified listings & 1,000 specialists.",
    "roadmap.2.tag": "3 months",
    "roadmap.3.title": "Public Launch",
    "roadmap.3.body": "Marketing campaign, escrow live, paid acquisition.",
    "roadmap.3.tag": "6 months",
    "roadmap.4.title": "Regional Expansion",
    "roadmap.4.body": "Almaty, Bishkek, Dushanbe — Central Asia roll-out.",
    "roadmap.4.tag": "12–18 months",

    "team.kicker": "Team",
    "team.title": "Built by operators who ship",
    "team.subtitle": "A senior team blending engineering, marketing, and architecture.",
    "team.0.name": "Samar Saidov",
    "team.0.role": "CEO & Co-Founder",
    "team.0.bio":
      "4 years Full-Stack Developer. Expert in scalable systems and startup architecture.",
    "team.1.name": "To‘rabek Yo‘ldoshev",
    "team.1.role": "CMO & Co-Founder",
    "team.1.bio":
      "4 years marketing + real estate. Deep market understanding and growth strategy.",
    "team.2.name": "Azizbek Xayrullayev",
    "team.2.role": "CTO",
    "team.2.bio": "3 years Backend Developer. System architecture and API design specialist.",
    "team.3.name": "Murodjon Sotiboldiyev",
    "team.3.role": "Backend & Web Designer",
    "team.3.bio": "UI/UX and backend integration expert. Builds beautiful, fast interfaces.",

    "why.kicker": "Why Klikly",
    "why.title": "Why we win",
    "why.0.title": "Senior execution team",
    "why.0.body": "Operators who have shipped real products at scale.",
    "why.1.title": "Real, painful market gap",
    "why.1.body": "Validated demand across renters, owners, and specialists.",
    "why.2.title": "Speed of development",
    "why.2.body": "MVP in 90 days — modern stack, integrated AI from day one.",
    "why.3.title": "AI-first advantage",
    "why.3.body": "Competitors are classifieds. We are an intelligence layer.",

    "chatbot.kicker": "AI Assistant",
    "chatbot.title": "Ask Klikly anything",
    "chatbot.subtitle": "Trained for Uzbek, Russian, and English.",
    "chatbot.placeholder": "Ask about apartments, services, pricing…",
    "chatbot.send": "Send",
    "chatbot.q.0": "Find a 2-bedroom near Chilonzor metro under $500",
    "chatbot.a.0":
      "I found 18 verified listings. Top match: bright 2BR, 8 min walk to metro, $475/mo, owner verified, 4.9★.",
    "chatbot.q.1": "I need a trusted electrician today",
    "chatbot.a.1":
      "3 specialists available within 30 min near you. Recommended: Akmal R., 4.9★ (212 jobs), $18/hr, escrow-protected.",
    "chatbot.q.2": "How does Klikly verify listings?",
    "chatbot.a.2":
      "Every listing passes a 12-point check: ID, ownership docs, photo authenticity, AI duplicate scan, and live updates.",
    "chatbot.q.3": "What does it cost to list a property?",
    "chatbot.a.3":
      "Standard listings are free. Premium featured slots range from $5 to $50 depending on city and duration.",

    "demo.kicker": "Live Demo",
    "demo.title": "See Klikly in action",
    "demo.subtitle":
      "A 90-second walkthrough: search, AI match, book, pay, and rate — all in one flow.",
    "demo.cta": "Watch demo",

    "download.kicker": "Get Klikly",
    "download.title": "Download the apps",
    "download.subtitle": "Two purpose-built apps for our two-sided marketplace.",
    "download.users.title": "Klikly for Users",
    "download.users.body": "Find homes and hire specialists.",
    "download.users.cta": "Download Users App",
    "download.workers.title": "Klikly for Workers",
    "download.workers.body": "Get jobs, build your reputation, earn more.",
    "download.workers.cta": "Download Workers App",

    "footer.tagline": "One Super App for Real Estate & Services.",
    "footer.product": "Product",
    "footer.company": "Company",
    "footer.legal": "Legal",
    "footer.rights": "All rights reserved.",
  },

  uz: {
    "nav.home": "Bosh sahifa",
    "nav.problem": "Muammo",
    "nav.solution": "Yechim",
    "nav.business": "Biznes",
    "nav.team": "Jamoa",
    "nav.demo": "Demo",
    "nav.download": "Yuklab olish",
    "nav.signin": "Kirish",

    "hero.badge": "AI asosidagi Super ilova · Ishga tushishga tayyor",
    "hero.title1": "Ko‘chmas mulk va xizmatlar uchun",
    "hero.title2": "yagona Super ilova",
    "hero.subtitle":
      "Uy toping, ishonchli mutaxassislarni yollang va hammasini AI yordamida bitta platformada boshqaring.",
    "hero.cta.demo": "Demo ko‘rish",
    "hero.cta.download": "Ilovani yuklash",
    "hero.stat1": "Tasdiqlanishi kutilayotgan e'lonlar",
    "hero.stat2": "Ishonchli mutaxassislarni ishga olish rejasi",
    "hero.stat3": "AI tezligi",

    "problem.kicker": "Muammo",
    "problem.title": "Bozor parchalangan, sekin va xavfli",
    "problem.subtitle":
      "Odamlar 10+ ilova ishlatadi, soxta e’lonlarga duch keladi va tasdiqlanmagan ustalar bilan soatlab gaplashadi.",
    "problem.scenario.title": "Hayotiy holat",
    "problem.scenario.body":
      "“Foydalanuvchi Telegramda eski e’lonlarni 3–5 soat varaqlaydi, oxirida o‘tgan haftada ijaraga berilgan kvartira egasiga qo‘ng‘iroq qiladi. Keyin elektrik uchun alohida saytni qidiradi — reyting yoki kafolat yo‘q.”",
    "problem.list.0.title": "Bozor parchalanishi",
    "problem.list.0.body": "Foydalanuvchilar 10+ platformani — e’lonlar, chatlar, agentlarni qo‘llaydi.",
    "problem.list.1.title": "Soxta va eskirgan e’lonlar",
    "problem.list.1.body": "Mulk e’lonlarining 40% gacha eskirgan yoki firibgarlik.",
    "problem.list.2.title": "Ustalar uchun ishonch tizimi yo‘q",
    "problem.list.2.body": "Yollash og‘zaki tavsiyaga asoslanadi — reyting va kafolat yo‘q.",
    "problem.list.3.title": "Soatlab muzokara",
    "problem.list.3.body": "Qo‘lda narx aniqlash va uzun yozishmalar vaqtni yo‘qotadi.",
    "problem.list.4.title": "AI personalizatsiya yo‘q",
    "problem.list.4.body": "Mavjud platformalar hammaga bir xil e’lonlarni ko‘rsatadi.",
    "problem.list.5.title": "To‘lov va xavfsizlik xatari",
    "problem.list.5.body": "Naqd to‘lov, eskrow yo‘q, ish noto‘g‘ri bo‘lsa kafolat yo‘q.",

    "solution.kicker": "Yechim",
    "solution.title": "Klikly hammasini bitta intellektual qatlamda birlashtiradi",
    "solution.subtitle":
      "Tasdiqlangan e’lonlar, AI moslashuv, eskrow to‘lovlar va ishonchli ustalar tarmog‘i — bitta Super ilovada.",
    "solution.steps.0.title": "1. Klikly’ga nima kerakligini ayting",
    "solution.steps.0.body":
      "Yozing yoki ayting: “Metro yaqinida 2 xonali, $600 gacha” yoki “bugun lustra uchun elektrik”.",
    "solution.steps.1.title": "2. AI tasdiqlangan variantlarni tanlaydi",
    "solution.steps.1.body":
      "Tavsiyalar dvigateli e’lonlar va mutaxassislarni moslik, narx, reyting va yaqinlik bo‘yicha saralaydi.",
    "solution.steps.2.title": "3. Buyurtma bering, to‘lang va kuzating",
    "solution.steps.2.body":
      "Eskrow himoyasidagi to‘lovlar, ilova ichidagi chat va xizmatdan keyin baholash — barchasi bir oqimda.",
    "solution.feature.0": "Mulk + xizmatlar yagona bozori",
    "solution.feature.1": "AI tavsiyalar dvigateli",
    "solution.feature.2": "Tasdiqlangan e’lonlar va mutaxassislar",
    "solution.feature.3": "Aqlli filtrlar: byudjet, joylashuv, reyting",
    "solution.feature.4": "Eskrow himoyasidagi tezkor buyurtma",
    "solution.feature.5": "Ikki tomonlama ishonch va sharhlar tizimi",

    "business.kicker": "Biznes modeli",
    "business.title": "Birinchi kundan masshtablashuvchi daromad",
    "business.subtitle": "Ikkala bozor uchun beshta birikkan daromad oqimi.",
    "business.streams.0.label": "Tranzaksiya komissiyasi",
    "business.streams.0.value": "3–7%",
    "business.streams.0.desc": "Har bir buyurtma va ijara uchun.",
    "business.streams.1.label": "Premium e’lonlar",
    "business.streams.1.value": "$5–$50",
    "business.streams.1.desc": "Ajratilgan mulk e’loni uchun.",
    "business.streams.2.label": "Usta obunasi",
    "business.streams.2.value": "$10/oy",
    "business.streams.2.desc": "Mutaxassislar uchun Pro tarif.",
    "business.streams.3.label": "Reklama",
    "business.streams.3.value": "CPM/CPC",
    "business.streams.3.desc": "Hamkorlar uchun ko‘rinish kuchaytirish.",
    "business.streams.4.label": "AI Upsell",
    "business.streams.4.value": "Premium",
    "business.streams.4.desc": "Ustuvor AI tavsiyalari va tahlillar.",
    "business.proj.title": "Prognoz",
    "business.proj.y1": "1-yil · 10,000 foydalanuvchi",
    "business.proj.y2": "2-yil · 50,000 foydalanuvchi",
    "business.proj.y3": "ARPU · $12 / yil",
    "business.proj.note":
      "Kapitalga oz ehtiyojli marketplace iqtisodi: har bir shaharda taklif zichligi oshgan sari yalpi marja 70% dan yuqori.",

    "ai.kicker": "AI tizimi",
    "ai.title": "Markazda intellekt",
    "ai.subtitle": "Qidiruvni qarorga aylantiradigan to‘rt xususiy AI qatlami.",
    "ai.modules.0.title": "NLP chatbot",
    "ai.modules.0.body":
      "O‘zbek, rus va ingliz tillarida suhbat — kalit so‘z emas, niyatni tushunadi.",
    "ai.modules.1.title": "Tavsiyalar dvigateli",
    "ai.modules.1.body":
      "E’lonlar va mutaxassislarni xulq-atvor, joylashuv va byudjet asosida saralaydi.",
    "ai.modules.2.title": "Narx baholash modeli",
    "ai.modules.2.body":
      "Mintaqaviy taqqoslama va mavsumiylik asosida real vaqtda adolatli narx prognozi.",
    "ai.modules.3.title": "Xulq-atvorli takliflar",
    "ai.modules.3.body":
      "Ehtiyojlarni oldindan biladi: qayta buyurtma, ta’mirlash eslatmalari, bozor imkoniyatlari.",

    "roadmap.kicker": "Yo‘l xaritasi",
    "roadmap.title": "G‘oyadan mintaqaviy Super ilovagacha",
    "roadmap.0.title": "G‘oya",
    "roadmap.0.body": "Bozor tadqiqoti va asoschilar jamoasi yig‘ildi.",
    "roadmap.0.tag": "Bajarildi",
    "roadmap.1.title": "Prototip",
    "roadmap.1.body": "Asosiy oqimlar, dizayn tizimi, AI prototipi.",
    "roadmap.1.tag": "Hozir",
    "roadmap.2.title": "MVP",
    "roadmap.2.body": "Toshkentda beta — tasdiqlangan e’lonlar va 1,000 mutaxassis.",
    "roadmap.2.tag": "3 oy",
    "roadmap.3.title": "Ommaviy ishga tushirish",
    "roadmap.3.body": "Marketing kampaniyasi, eskrow ishlaydi, pullik jalb qilish.",
    "roadmap.3.tag": "6 oy",
    "roadmap.4.title": "Mintaqaviy kengayish",
    "roadmap.4.body": "Almati, Bishkek, Dushanbe — Markaziy Osiyoga.",
    "roadmap.4.tag": "12–18 oy",

    "team.kicker": "Jamoa",
    "team.title": "Mahsulotni yetkazadigan operatorlar",
    "team.subtitle": "Muhandislik, marketing va arxitekturani birlashtirgan jamoa.",
    "team.0.name": "Samar Saidov",
    "team.0.role": "CEO & Hammuassis",
    "team.0.bio":
      "4 yillik Full-Stack dasturchi. Masshtablanuvchi tizimlar va startap arxitekturasi mutaxassisi.",
    "team.1.name": "To‘rabek Yo‘ldoshev",
    "team.1.role": "CMO & Hammuassis",
    "team.1.bio":
      "4 yillik marketing + ko‘chmas mulk. Bozorni chuqur tushunish va o‘sish strategiyasi.",
    "team.2.name": "Azizbek Xayrullayev",
    "team.2.role": "CTO",
    "team.2.bio": "3 yillik Backend dasturchi. Tizim arxitekturasi va API dizayni mutaxassisi.",
    "team.3.name": "Murodjon Sotiboldiyev",
    "team.3.role": "Backend & Web dizayner",
    "team.3.bio": "UI/UX va backend integratsiyasi mutaxassisi. Chiroyli, tez interfeyslar quradi.",

    "why.kicker": "Nega Klikly",
    "why.title": "Nega g‘alaba qozonamiz",
    "why.0.title": "Tajribali jamoa",
    "why.0.body": "Real mahsulotlarni masshtabda yetkazgan operatorlar.",
    "why.1.title": "Haqiqiy bozor muammosi",
    "why.1.body": "Ijarachilar, egalar va mutaxassislar tomonidan tasdiqlangan talab.",
    "why.2.title": "Tezkor rivojlanish",
    "why.2.body": "MVP 90 kunda — zamonaviy stek, birinchi kundan AI bilan integratsiya.",
    "why.3.title": "AI-birinchi ustunlik",
    "why.3.body": "Raqobatchilar — e’lonlar. Biz — intellekt qatlami.",

    "chatbot.kicker": "AI yordamchi",
    "chatbot.title": "Klikly’dan istalgan narsani so‘rang",
    "chatbot.subtitle": "O‘zbek, rus va ingliz tillarida ishlaydi.",
    "chatbot.placeholder": "Kvartira, xizmat, narx haqida so‘rang…",
    "chatbot.send": "Yuborish",
    "chatbot.q.0": "Chilonzor metrosi yaqinida $500 gacha 2 xonali toping",
    "chatbot.a.0":
      "18 ta tasdiqlangan e’lon topildi. Eng mosi: yorug‘ 2 xonali, metroga 8 daqiqa, $475/oy, 4.9★.",
    "chatbot.q.1": "Bugun ishonchli elektrik kerak",
    "chatbot.a.1":
      "Yaqin atrofda 30 daqiqada 3 mutaxassis bor. Tavsiya: Akmal R., 4.9★ (212 ish), $18/soat.",
    "chatbot.q.2": "Klikly e’lonlarni qanday tekshiradi?",
    "chatbot.a.2":
      "Har bir e’lon 12 punkt bo‘yicha tekshiriladi: ID, mulk hujjati, foto haqiqiyligi, AI dublikat skani.",
    "chatbot.q.3": "Mulk e’loni qancha turadi?",
    "chatbot.a.3":
      "Oddiy e’lonlar bepul. Premium ajratilgan joylar shahar va davomiylikka qarab $5–$50.",

    "demo.kicker": "Jonli demo",
    "demo.title": "Klikly’ni harakatda ko‘ring",
    "demo.subtitle":
      "90 soniyalik tanishuv: qidiruv, AI moslashuv, buyurtma, to‘lov va baholash — bir oqimda.",
    "demo.cta": "Demo ko‘rish",

    "download.kicker": "Klikly’ni oling",
    "download.title": "Ilovalarni yuklab oling",
    "download.subtitle": "Ikki tomonlama bozor uchun ikki maxsus ilova.",
    "download.users.title": "Klikly Foydalanuvchilar uchun",
    "download.users.body": "Uy toping va mutaxassislarni yollang.",
    "download.users.cta": "Foydalanuvchilar ilovasi",
    "download.workers.title": "Klikly Ustalar uchun",
    "download.workers.body": "Ish toping, obro‘ qozoning, ko‘proq ishlang.",
    "download.workers.cta": "Ustalar ilovasi",

    "footer.tagline": "Ko‘chmas mulk va xizmatlar uchun yagona Super ilova.",
    "footer.product": "Mahsulot",
    "footer.company": "Kompaniya",
    "footer.legal": "Huquqiy",
    "footer.rights": "Barcha huquqlar himoyalangan.",
  },

  ru: {
    "nav.home": "Главная",
    "nav.problem": "Проблема",
    "nav.solution": "Решение",
    "nav.business": "Бизнес",
    "nav.team": "Команда",
    "nav.demo": "Демо",
    "nav.download": "Скачать",
    "nav.signin": "Войти",

    "hero.badge": "Супер-приложение на базе ИИ · Готово к запуску",
    "hero.title1": "Супер-приложение для",
    "hero.title2": "недвижимости и услуг",
    "hero.subtitle":
      "Находите жильё, нанимайте проверенных специалистов и управляйте всем в одной интеллектуальной платформе с ИИ.",
    "hero.cta.demo": "Открыть демо",
    "hero.cta.download": "Скачать приложение",
    "hero.stat1": "Проверенные объявления",
    "hero.stat2": "Надёжные специалисты",
    "hero.stat3": "Скорость подбора ИИ",

    "problem.kicker": "Проблема",
    "problem.title": "Рынок раздроблен, медленный и небезопасный",
    "problem.subtitle":
      "Люди жонглируют 10+ приложениями, натыкаются на фейковые объявления и теряют часы на переговоры с непроверенными мастерами.",
    "problem.scenario.title": "Реальный сценарий",
    "problem.scenario.body":
      "«Пользователь 3–5 часов листает устаревшие объявления в Telegram, чтобы позвонить владельцу квартиры, сданной неделю назад. Затем ищет электрика на отдельном сайте — без рейтинга и гарантий.»",
    "problem.list.0.title": "Фрагментация рынка",
    "problem.list.0.body": "Пользователи используют 10+ платформ — доски, чаты, агенты, ремонтные группы.",
    "problem.list.1.title": "Фейковые и устаревшие объявления",
    "problem.list.1.body": "До 40% объявлений недвижимости неактуальны или мошеннические.",
    "problem.list.2.title": "Нет системы доверия для мастеров",
    "problem.list.2.body": "Найм основан на сарафанном радио — без рейтингов и гарантий.",
    "problem.list.3.title": "Часы переговоров",
    "problem.list.3.body": "Ручной поиск цены и долгая переписка убивают темп.",
    "problem.list.4.title": "Нет ИИ-персонализации",
    "problem.list.4.body": "Существующие платформы показывают одинаковые объявления всем.",
    "problem.list.5.title": "Риски оплаты и безопасности",
    "problem.list.5.body": "Наличные, нет эскроу, нет защиты при некачественной работе.",

    "solution.kicker": "Решение",
    "solution.title": "Klikly объединяет всё в один интеллектуальный слой",
    "solution.subtitle":
      "Проверенные объявления, ИИ-подбор, эскроу-платежи и сеть надёжных мастеров — в одном Супер-приложении.",
    "solution.steps.0.title": "1. Скажите Klikly, что нужно",
    "solution.steps.0.body":
      "Напишите или скажите: «2-комнатная у метро до $600» или «электрик для люстры сегодня».",
    "solution.steps.1.title": "2. ИИ подбирает проверенные варианты",
    "solution.steps.1.body":
      "Движок рекомендаций ранжирует объявления и мастеров по соответствию, цене, рейтингу и близости.",
    "solution.steps.2.title": "3. Бронируйте, платите и отслеживайте",
    "solution.steps.2.body":
      "Эскроу-платежи, чат в приложении и оценка после услуги — всё в одном потоке.",
    "solution.feature.0": "Единый рынок недвижимости и услуг",
    "solution.feature.1": "Движок ИИ-рекомендаций",
    "solution.feature.2": "Проверенные объявления и мастера",
    "solution.feature.3": "Умные фильтры: бюджет, район, рейтинг",
    "solution.feature.4": "Мгновенное бронирование с эскроу",
    "solution.feature.5": "Двусторонняя система отзывов",

    "business.kicker": "Бизнес-модель",
    "business.title": "Масштабируемый доход с первого дня",
    "business.subtitle": "Пять накопительных потоков дохода на двух рынках.",
    "business.streams.0.label": "Комиссия с транзакций",
    "business.streams.0.value": "3–7%",
    "business.streams.0.desc": "С каждой брони услуги и аренды.",
    "business.streams.1.label": "Премиум-объявления",
    "business.streams.1.value": "$5–$50",
    "business.streams.1.desc": "За выделенное объявление недвижимости.",
    "business.streams.2.label": "Подписка для мастеров",
    "business.streams.2.value": "$10/мес",
    "business.streams.2.desc": "Pro-тариф для специалистов.",
    "business.streams.3.label": "Реклама",
    "business.streams.3.value": "CPM/CPC",
    "business.streams.3.desc": "Усиление видимости для партнёров.",
    "business.streams.4.label": "AI Upsell",
    "business.streams.4.value": "Premium",
    "business.streams.4.desc": "Приоритетные ИИ-рекомендации.",
    "business.proj.title": "Прогноз",
    "business.proj.y1": "1-й год · 10 000 пользователей",
    "business.proj.y2": "2-й год · 50 000 пользователей",
    "business.proj.y3": "ARPU · $12 / год",
    "business.proj.note":
      "Низкокапитальная маркетплейс-экономика: валовая маржа > 70% по мере роста плотности предложения.",

    "ai.kicker": "ИИ-система",
    "ai.title": "Интеллект в основе",
    "ai.subtitle": "Четыре собственных ИИ-слоя превращают поиск в решения.",
    "ai.modules.0.title": "NLP-чатбот",
    "ai.modules.0.body":
      "Разговорный поиск на узбекском, русском и английском — понимает намерение, а не ключевые слова.",
    "ai.modules.1.title": "Движок рекомендаций",
    "ai.modules.1.body":
      "Ранжирует объявления и мастеров по поведению, локации, бюджету и образу жизни.",
    "ai.modules.2.title": "Модель оценки цены",
    "ai.modules.2.body":
      "Реальное прогнозирование справедливой цены на базе сравнимых и сезонности.",
    "ai.modules.3.title": "Поведенческие подсказки",
    "ai.modules.3.body":
      "Предугадывает потребности: повторные брони, напоминания об обслуживании, рыночные окна.",

    "roadmap.kicker": "Дорожная карта",
    "roadmap.title": "От идеи к региональному Супер-приложению",
    "roadmap.0.title": "Идея",
    "roadmap.0.body": "Исследование рынка и сбор команды основателей.",
    "roadmap.0.tag": "Завершено",
    "roadmap.1.title": "Прототип",
    "roadmap.1.body": "Основные потоки, дизайн-система, ИИ-прототип.",
    "roadmap.1.tag": "Сейчас",
    "roadmap.2.title": "MVP",
    "roadmap.2.body": "Бета в Ташкенте — проверенные объявления и 1 000 мастеров.",
    "roadmap.2.tag": "3 месяца",
    "roadmap.3.title": "Публичный запуск",
    "roadmap.3.body": "Маркетинговая кампания, эскроу, платное привлечение.",
    "roadmap.3.tag": "6 месяцев",
    "roadmap.4.title": "Региональная экспансия",
    "roadmap.4.body": "Алматы, Бишкек, Душанбе — Центральная Азия.",
    "roadmap.4.tag": "12–18 месяцев",

    "team.kicker": "Команда",
    "team.title": "Создано операторами, которые поставляют",
    "team.subtitle": "Старшая команда: инженерия, маркетинг и архитектура.",
    "team.0.name": "Самар Саидов",
    "team.0.role": "CEO и сооснователь",
    "team.0.bio":
      "4 года Full-Stack разработки. Эксперт по масштабируемым системам и архитектуре стартапов.",
    "team.1.name": "Турабек Юлдашев",
    "team.1.role": "CMO и сооснователь",
    "team.1.bio":
      "4 года маркетинга + недвижимость. Глубокое понимание рынка и стратегия роста.",
    "team.2.name": "Азизбек Хайруллаев",
    "team.2.role": "CTO",
    "team.2.bio": "3 года Backend разработки. Специалист по архитектуре систем и API.",
    "team.3.name": "Муроджон Сотиболдиев",
    "team.3.role": "Backend и веб-дизайнер",
    "team.3.bio": "UI/UX и интеграция бэкенда. Создаёт красивые и быстрые интерфейсы.",

    "why.kicker": "Почему Klikly",
    "why.title": "Почему мы выигрываем",
    "why.0.title": "Сильная команда исполнения",
    "why.0.body": "Операторы, поставлявшие реальные продукты в масштабе.",
    "why.1.title": "Реальная боль рынка",
    "why.1.body": "Подтверждённый спрос среди арендаторов, владельцев и мастеров.",
    "why.2.title": "Скорость разработки",
    "why.2.body": "MVP за 90 дней — современный стек, ИИ с первого дня.",
    "why.3.title": "Преимущество ИИ",
    "why.3.body": "Конкуренты — доски объявлений. Мы — слой интеллекта.",

    "chatbot.kicker": "ИИ-ассистент",
    "chatbot.title": "Спросите Klikly о чём угодно",
    "chatbot.subtitle": "Обучен узбекскому, русскому и английскому.",
    "chatbot.placeholder": "Спросите о квартирах, услугах, ценах…",
    "chatbot.send": "Отправить",
    "chatbot.q.0": "Найди 2-комнатную у метро Чиланзар до $500",
    "chatbot.a.0":
      "Найдено 18 проверенных объявлений. Лучший вариант: светлая 2-комн., 8 минут до метро, $475/мес, 4.9★.",
    "chatbot.q.1": "Нужен надёжный электрик сегодня",
    "chatbot.a.1":
      "3 специалиста доступны в течение 30 минут. Рекомендуем: Акмаль Р., 4.9★ (212 работ), $18/час.",
    "chatbot.q.2": "Как Klikly проверяет объявления?",
    "chatbot.a.2":
      "Каждое объявление проходит 12-пунктовую проверку: ID, документы, подлинность фото, ИИ-сканирование дублей.",
    "chatbot.q.3": "Сколько стоит разместить недвижимость?",
    "chatbot.a.3":
      "Стандартные объявления бесплатны. Премиум-выделение от $5 до $50 в зависимости от города.",

    "demo.kicker": "Живое демо",
    "demo.title": "Посмотрите Klikly в действии",
    "demo.subtitle":
      "90-секундный обзор: поиск, ИИ-подбор, бронь, оплата и оценка — в одном потоке.",
    "demo.cta": "Смотреть демо",

    "download.kicker": "Получить Klikly",
    "download.title": "Скачайте приложения",
    "download.subtitle": "Два специальных приложения для двустороннего рынка.",
    "download.users.title": "Klikly для пользователей",
    "download.users.body": "Находите жильё и нанимайте мастеров.",
    "download.users.cta": "Приложение для пользователей",
    "download.workers.title": "Klikly для мастеров",
    "download.workers.body": "Получайте заказы, растите репутацию, зарабатывайте больше.",
    "download.workers.cta": "Приложение для мастеров",

    "footer.tagline": "Супер-приложение для недвижимости и услуг.",
    "footer.product": "Продукт",
    "footer.company": "Компания",
    "footer.legal": "Юридическое",
    "footer.rights": "Все права защищены.",
  },
};

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nCtx | null>(null);

const STORAGE_KEY = "klikly-lang";

// 👇 DEFAULT = UZ
function getInitialLang(): Lang {
  if (typeof window === "undefined") return "uz";

  const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;

  if (saved === "uz" || saved === "en" || saved === "ru") {
    return saved;
  }

  return "uz"; // 👈 MUHIM: default UZ
}

export function I18nProvider({ children }: { children: ReactNode }) {
  // 👇 endi EN emas UZ
  const [lang, setLangState] = useState<Lang>("uz");

  // 👇 birinchi renderda ham UZ chiqadi
  useEffect(() => {
    setLangState(getInitialLang());
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, l);
    }
  };

  const t = (key: string): string => {
    const dict = dictionaries[lang];
    const value = dict[key];

    if (typeof value === "string") return value;

    const fallback = dictionaries.en[key];
    return typeof fallback === "string" ? fallback : key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}