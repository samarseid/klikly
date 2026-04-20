import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "uz" | "ru";

type Dict = Record<string, string>;

const dictionaries: Record<Lang, Dict> = {
  en: {
    "nav.home": "Home",
    "nav.problem": "Problem",
    "nav.solution": "Solution",
    "nav.business": "Business",
    "nav.team": "Team",
    "nav.demo": "Demo",
    "nav.download": "Get Early Access",
    "nav.signin": "Sign In",

    "hero.badge": "Backed by founders. Built for cities.",
    "hero.title1": "The operating system for",
    "hero.title2": "where you live & how you live.",
    "hero.subtitle":
      "Klikly replaces fragmented classifieds, brokers and chat groups with a single AI-powered Super App — verified listings, trusted specialists, escrow payments, in 30 seconds.",
    "hero.cta.demo": "Experience the Future",
    "hero.cta.download": "Get Early Access",
    "hero.trust": "Trusted by early adopters across Tashkent · Almaty · Bishkek",
    "hero.stat1": "Verified listings",
    "hero.stat2": "Vetted specialists",
    "hero.stat3": "Average AI match",

    "problem.kicker": "What’s broken",
    "problem.title": "Finding a home or a worker today is medieval.",
    "problem.subtitle":
      "10+ apps. Fake listings. Cash deals. Zero accountability. Millions of hours, billions of dollars — wasted on a market that pretends to function.",
    "problem.scenario.title": "A real Tuesday in Tashkent",
    "problem.scenario.body":
      "“She scrolled Telegram for 4 hours, called 11 numbers, two were rented last week, three never picked up. She finally booked an electrician through a friend-of-a-friend — he arrived a day late, broke a fixture, and demanded cash. No rating. No refund. No recourse.”",
    "problem.list.0.title": "10+ apps just to start",
    "problem.list.0.body":
      "Classifieds, Telegram channels, agents, repair groups — every search burns hours stitching dead-end leads.",
    "problem.list.1.title": "Up to 40% fake or stale",
    "problem.list.1.body":
      "Listings stay online weeks after they’re rented. Photos are stolen. Prices are bait. Trust collapses on day one.",
    "problem.list.2.title": "No accountability for workers",
    "problem.list.2.body":
      "Hiring is word-of-mouth roulette. No verified ID. No ratings. No insurance. One bad job — and you eat the loss.",
    "problem.list.3.title": "Hours lost to negotiation",
    "problem.list.3.body":
      "Manual price discovery, endless DMs, no fair-price reference. The market runs on friction, not data.",
    "problem.list.4.title": "Zero personalization",
    "problem.list.4.body":
      "Every user sees the same firehose. Algorithms? Recommendations? Not in this market. Yet.",
    "problem.list.5.title": "Cash, risk, no recourse",
    "problem.list.5.body":
      "No escrow. No guarantees. If the work fails, you’re alone. The system is engineered for the worst actor.",

    "solution.kicker": "What we built",
    "solution.title": "One app. Verified everything. Powered by AI.",
    "solution.subtitle":
      "Klikly isn’t another listing site. It’s the trust layer the market has been missing — search, match, book and pay in a single, intelligent flow.",
    "solution.steps.0.title": "Tell Klikly what you need",
    "solution.steps.0.body":
      "Type or speak in any language: “2-bed near metro under $600” or “electrician for a chandelier today”. No filters to fight.",
    "solution.steps.1.title": "AI surfaces verified matches",
    "solution.steps.1.body":
      "Our engine ranks listings and specialists by fit, fair price, ratings and proximity — every option pre-checked, no fakes.",
    "solution.steps.2.title": "Book, pay, done",
    "solution.steps.2.body":
      "Escrow-protected payments. In-app chat. Two-way ratings. From request to handshake in minutes — no calls, no middlemen, no risk.",
    "solution.feature.0": "Unified property + services marketplace",
    "solution.feature.1": "AI recommendation engine",
    "solution.feature.2": "12-point verification on every listing",
    "solution.feature.3": "Smart filters: budget, location, rating",
    "solution.feature.4": "Escrow-protected instant booking",
    "solution.feature.5": "Two-way trust & review system",

    "trust.kicker": "Trust, engineered",
    "trust.title": "Built so you never have to take anyone’s word again.",
    "trust.subtitle":
      "Verified identities, escrow-held funds, and a guarantee that beats the market by design — not by promise.",
    "trust.stats.0.value": "4.9★",
    "trust.stats.0.label": "Specialist rating",
    "trust.stats.0.note": "Average across early pilots",
    "trust.stats.1.value": "100%",
    "trust.stats.1.label": "Listings verified",
    "trust.stats.1.note": "12-point check, every post",
    "trust.stats.2.value": "$0",
    "trust.stats.2.label": "Released until job done",
    "trust.stats.2.note": "Escrow-protected payments",
    "trust.stats.3.value": "<24h",
    "trust.stats.3.label": "Dispute resolution",
    "trust.stats.3.note": "Backed by Klikly Guarantee",
    "trust.pillars.0.title": "Verified identities",
    "trust.pillars.0.body":
      "Government ID, ownership documents and live selfie checks. The person you message is the person who shows up.",
    "trust.pillars.1.title": "12-point listing audit",
    "trust.pillars.1.body":
      "Photo authenticity, duplicate detection, ownership proof and price-sanity check — done before a listing goes live.",
    "trust.pillars.2.title": "Escrow on every job",
    "trust.pillars.2.body":
      "Funds are held by Klikly until both sides confirm. No cash, no chasing, no surprises.",
    "trust.pillars.3.title": "Klikly Guarantee",
    "trust.pillars.3.body":
      "If verified work fails our standard, we refund you and re-book at our cost. Risk shifts from user to platform.",
    "trust.pillars.4.title": "Two-way reputation",
    "trust.pillars.4.body":
      "Both sides rate. Bad actors are removed automatically. The network gets cleaner the more it grows.",
    "trust.pillars.5.title": "24/7 human review",
    "trust.pillars.5.body":
      "AI flags risk in real time. Trained agents step in for any dispute, in your language, within hours.",

    "business.kicker": "How it scales",
    "business.title": "Marketplace economics, built to compound.",
    "business.subtitle":
      "Five revenue streams stacked on a capital-light, two-sided network. Every new city accelerates the next.",
    "business.streams.0.label": "Transaction commission",
    "business.streams.0.value": "3–7%",
    "business.streams.0.desc": "On every booking and rental.",
    "business.streams.1.label": "Featured listings",
    "business.streams.1.value": "$5–$50",
    "business.streams.1.desc": "Premium slots for owners and agents.",
    "business.streams.2.label": "Worker subscription",
    "business.streams.2.value": "$10/mo",
    "business.streams.2.desc": "Pro tier for verified specialists.",
    "business.streams.3.label": "Sponsored placement",
    "business.streams.3.value": "CPM/CPC",
    "business.streams.3.desc": "Brand and partner amplification.",
    "business.streams.4.label": "AI Premium",
    "business.streams.4.value": "$5/mo",
    "business.streams.4.desc": "Priority matching, market insights.",
    "business.proj.title": "Trajectory",
    "business.proj.y1": "Year 1 · 10,000 active users in Tashkent",
    "business.proj.y2": "Year 2 · 50,000 users across 3 cities",
    "business.proj.y3": "Year 3 · ARPU $12 · gross margin >70%",
    "business.proj.note":
      "Capital-light, two-sided liquidity. Every city we densify lifts margin and lowers acquisition cost — the playbook compounds.",

    "ai.kicker": "AI core",
    "ai.title": "Not a feature. The whole system.",
    "ai.subtitle":
      "Four proprietary AI layers turn fragmented intent into one decisive action — in any language.",
    "ai.modules.0.title": "Conversational search",
    "ai.modules.0.body":
      "Uzbek, Russian, English. Understands intent, budget, urgency — not just keywords.",
    "ai.modules.1.title": "Recommendation engine",
    "ai.modules.1.body":
      "Ranks listings and specialists from behavior, location, budget and lifestyle signals.",
    "ai.modules.2.title": "Fair-price model",
    "ai.modules.2.body":
      "Real-time price prediction from regional comparables and seasonality. No more haggling blind.",
    "ai.modules.3.title": "Anticipatory layer",
    "ai.modules.3.body":
      "Predicts re-bookings, maintenance windows, market opportunities — before you ask.",

    "roadmap.kicker": "Roadmap",
    "roadmap.title": "Tashkent today. Central Asia next.",
    "roadmap.0.title": "Idea",
    "roadmap.0.body": "Market validation, founding team, design system locked.",
    "roadmap.0.tag": "Done",
    "roadmap.1.title": "Prototype",
    "roadmap.1.body": "Core flows, AI prototype, pilot listings onboarded.",
    "roadmap.1.tag": "Now",
    "roadmap.2.title": "MVP",
    "roadmap.2.body": "Tashkent beta — verified listings, 1,000 specialists.",
    "roadmap.2.tag": "3 months",
    "roadmap.3.title": "Public launch",
    "roadmap.3.body": "Marketing campaign, escrow live, paid acquisition.",
    "roadmap.3.tag": "6 months",
    "roadmap.4.title": "Regional expansion",
    "roadmap.4.body": "Almaty, Bishkek, Dushanbe — Central Asia roll-out.",
    "roadmap.4.tag": "12–18 months",

    "team.kicker": "Team",
    "team.title": "Operators who ship.",
    "team.subtitle":
      "Senior engineering, growth and design — the rare combination that turns vision into traction.",
    "team.0.name": "Samar Saidov",
    "team.0.role": "CEO & Co-Founder",
    "team.0.bio":
      "Full-stack engineer. Builds scalable systems and ships product fast.",
    "team.1.name": "To‘rabek Yo‘ldoshev",
    "team.1.role": "CMO & Co-Founder",
    "team.1.bio":
      "Marketing + real estate. Owns growth, brand, and demand-side strategy.",
    "team.2.name": "Azizbek Xayrullayev",
    "team.2.role": "CTO",
    "team.2.bio": "Backend engineer. System architecture and API design.",
    "team.3.name": "Murodjon Sotiboldiyev",
    "team.3.role": "Product Designer",
    "team.3.bio": "UI/UX and frontend. Builds beautiful, fast interfaces.",

    "why.kicker": "Why we win",
    "why.title": "Why Klikly is inevitable.",
    "why.0.title": "Senior execution team",
    "why.0.body": "Operators who have shipped real products at scale.",
    "why.1.title": "A painful, validated market",
    "why.1.body": "Demand confirmed across renters, owners and specialists.",
    "why.2.title": "Speed of development",
    "why.2.body": "MVP in 90 days — modern stack, AI integrated from day one.",
    "why.3.title": "AI-first advantage",
    "why.3.body": "Competitors are classifieds. We are the intelligence layer.",

    "chatbot.kicker": "Talk to Klikly",
    "chatbot.title": "Ask anything. Get an answer in seconds.",
    "chatbot.subtitle":
      "Powered by real AI. Fluent in Uzbek, Russian and English. Trained on Klikly’s product, market and roadmap.",
    "chatbot.placeholder": "Ask about apartments, services, pricing, escrow…",
    "chatbot.send": "Send",
    "chatbot.greeting":
      "Hi — I’m Klikly AI. Ask me about finding an apartment, hiring a specialist, how escrow works, or our launch plans.",
    "chatbot.q.0": "Find a 2-bedroom near Chilonzor metro under $500",
    "chatbot.q.1": "How do you make sure a worker won’t scam me?",
    "chatbot.q.2": "How does Klikly verify listings?",
    "chatbot.q.3": "What’s your business model?",
    "chatbot.error.network": "Connection issue. Please try again.",
    "chatbot.error.rate": "Too many messages — give me a few seconds.",
    "chatbot.error.payment": "AI usage limit reached. Owner needs to top up credits.",
    "chatbot.error.generic": "Something went wrong. Please try again.",

    "demo.kicker": "See it in action",
    "demo.title": "200 seconds to understand the future.",
    "demo.subtitle":
      "Search, AI match, book, pay, rate — one flow, zero friction. This is what every city deserves.",
    "demo.cta": "Watch demo",

    "download.kicker": "Get Klikly",
    "download.title": "Two apps. One ecosystem.",
    "download.subtitle":
      "Built for both sides of the marketplace — so the experience never breaks.",
    "download.users.title": "Klikly for Users",
    "download.users.body": "Find homes. Hire specialists. Pay safely.",
    "download.users.cta": "Get the User App",
    "download.workers.title": "Klikly for Workers",
    "download.workers.body": "Get jobs. Build reputation. Earn more.",
    "download.workers.cta": "Get the Worker App",

    "footer.tagline": "The Super App for where you live and how you live.",
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
    "nav.download": "Erta foydalanish",
    "nav.signin": "Kirish",

    "hero.badge": "Asoschilar tomonidan. Shaharlar uchun.",
    "hero.title1": "Qaerda yashashing va qanday yashashing uchun",
    "hero.title2": "operatsion tizim.",
    "hero.subtitle":
      "Klikly tarqoq va tizimsiz e’lonlar, brokerlar va chat-guruhlarni bitta AI Super ilovaga aylantiradi — tasdiqlangan e’lonlar, ishonchli ishchilar, eskrow to‘lovlar, 30 soniyada.",
    "hero.cta.demo": "Kelajakni sinab ko‘ring",
    "hero.cta.download": "Erta foydalanish",
    "hero.trust": "Toshkent · Almati · Bishkekdagi erta foydalanuvchilar ishonchini qozondi",
    "hero.stat1": "Tasdiqlangan e’lonlar",
    "hero.stat2": "Tekshirilgan ishchilarlar",
    "hero.stat3": "AI moslashuv",

    "problem.kicker": "Nima buzilgan",
    "problem.title": "Bugun uy yoki ishchi (kunlik xizmatchilar) topish — o‘rta asrlarcha jarayon.",
    "problem.subtitle":
      "10+ ilova. Soxta e’lonlar. Naqd kelishuv. Mas’uliyat yo‘q. Million soat va milliard dollar — ishlamayotgan bozorga sarflanmoqda.",
    "problem.scenario.title": "Toshkentda oddiy seshanba",
    "problem.scenario.body":
      "“U Telegramni 4 soat varaqladi, 11 raqamga qo‘ng‘iroq qildi — ikkitasi o‘tgan haftada ijaraga berilgan, uchtasi javob bermadi. Oxirida tanish orqali elektrik chaqirdi — bir kun kech keldi, lyustrani sindirdi va naqd talab qildi. Reyting yo‘q. Pul qaytarilmadi. Hech narsa qila olmadi.”",
    "problem.list.0.title": "Boshlash uchun 10+ ilova",
    "problem.list.0.body":
      "E’lonlar, Telegram kanallari, agentlar — har bir qidiruv soatlab vaqtni yo‘qotadi.",
    "problem.list.1.title": "40% gacha soxta yoki eskirgan",
    "problem.list.1.body":
      "E’lonlar ijaradan keyin haftalab turadi. Suratlar o‘g‘irlangan, narxlar — quroq.",
    "problem.list.2.title": "Ischilarlar uchun mas’uliyat yo‘q",
    "problem.list.2.body":
      "Yollash — og‘zaki ruletka. ID yo‘q, reyting yo‘q, sug‘urta yo‘q. Bir yomon ish — barcha zarar sizniki.",
    "problem.list.3.title": "Soatlab muzokara",
    "problem.list.3.body":
      "Qo‘lda narx aniqlash, cheksiz yozishmalar, adolatli narx haqida ma’lumot yo‘q.",
    "problem.list.4.title": "Personalizatsiya yo‘q",
    "problem.list.4.body":
      "Hammaga bir xil oqim. Algoritmlar? Tavsiyalar? Bu bozorda hali yo‘q.",
    "problem.list.5.title": "Naqd, xavf, kafolat yo‘q",
    "problem.list.5.body":
      "Eskrow yo‘q. Kafolat yo‘q. Ish noto‘g‘ri bo‘lsa — yolg‘izsiz. Tizim eng yomonga moslashtirilgan.",

    "solution.kicker": "Biz qurgan narsa",
    "solution.title": "Bitta ilova. Hammasi tasdiqlangan. AI bilan ishlaydi.",
    "solution.subtitle":
      "Klikly — yana bir e’lon sayti emas. Bu bozorga yetishmayotgan ishonch qatlami — qidiruv, moslashuv, buyurtma va to‘lov bir oqimda.",
    "solution.steps.0.title": "Klikly’ga nima kerakligini ayting",
    "solution.steps.0.body":
      "Istalgan tilda: “Metro yaqinida 2 xonali, $600 gacha” yoki “bugun lustra uchun elektrik”. Filtrlar bilan kurashing — kerak emas.",
    "solution.steps.1.title": "AI tasdiqlangan variantlarni topadi",
    "solution.steps.1.body":
      "Tavsiyalar dvigateli moslik, adolatli narx, reyting va yaqinlikka qarab saralaydi. Hammasi oldindan tekshirilgan.",
    "solution.steps.2.title": "Buyurtma bering, to‘lang, tamom",
    "solution.steps.2.body":
      "Eskrow himoyasidagi to‘lov. Ilova ichidagi chat. Ikki tomonlama reyting. So‘rovdan kelishuvgacha — daqiqalarda. Qo‘ng‘iroq yo‘q. Vositachi yo‘q. Xavf yo‘q.",
    "solution.feature.0": "Mulk + xizmatlar yagona bozori",
    "solution.feature.1": "AI tavsiyalar dvigateli",
    "solution.feature.2": "Har bir e’lon uchun 12 punktli tekshiruv",
    "solution.feature.3": "Aqlli filtrlar: byudjet, joylashuv, reyting",
    "solution.feature.4": "Eskrow himoyasidagi tezkor buyurtma",
    "solution.feature.5": "Ikki tomonlama ishonch va sharhlar",

    "trust.kicker": "Ishonch — muhandislik darajasida",
    "trust.title": "Endi hech kimga so‘z bilan ishonish shart emas.",
    "trust.subtitle":
      "Tasdiqlangan shaxslar, eskrow’da ushlangan mablag‘ va bozordan ustun kafolat — va’da bilan emas, dizayn bilan.",
    "trust.stats.0.value": "4.9★",
    "trust.stats.0.label": "Ischi reytingi",
    "trust.stats.0.note": "Pilot loyihalardagi o‘rtacha",
    "trust.stats.1.value": "100%",
    "trust.stats.1.label": "Tasdiqlangan e’lonlar",
    "trust.stats.1.note": "Har biri 12 punktdan o‘tadi",
    "trust.stats.2.value": "$0",
    "trust.stats.2.label": "Ish bitmaguncha to‘lanmaydi",
    "trust.stats.2.note": "Eskrow himoyasidagi to‘lov",
    "trust.stats.3.value": "<24s",
    "trust.stats.3.label": "Nizolarni hal qilish",
    "trust.stats.3.note": "Klikly Kafolati bilan",
    "trust.pillars.0.title": "Tasdiqlangan shaxslar",
    "trust.pillars.0.body":
      "Davlat ID, mulk hujjatlari va jonli selfi tekshiruvi. Yozgan odam aynan keladigan odam.",
    "trust.pillars.1.title": "12 punktli e’lon auditi",
    "trust.pillars.1.body":
      "Foto haqiqiyligi, dublikat skani, mulk huquqi va narx tekshiruvi — e’lon chiqishidan oldin.",
    "trust.pillars.2.title": "Har bir ishda eskrow",
    "trust.pillars.2.body":
      "Mablag‘ Klikly’da turadi. Ikki tomon tasdiqlamaguncha — pul ko‘chmaydi.",
    "trust.pillars.3.title": "Klikly Kafolati",
    "trust.pillars.3.body":
      "Tasdiqlangan ish standartdan past bo‘lsa — pulni qaytaramiz va o‘z hisobimizdan qayta buyurtma qilamiz.",
    "trust.pillars.4.title": "Ikki tomonlama reputatsiya",
    "trust.pillars.4.body":
      "Ikki tomon ham baholaydi. Yomon aktyorlar avtomatik o‘chiriladi. Tarmoq o‘sgan sari toza bo‘ladi.",
    "trust.pillars.5.title": "24/7 inson nazorati",
    "trust.pillars.5.body":
      "AI xavfni real vaqtda aniqlaydi. Tayyorlangan agentlar har qanday nizoga sizning tilingizda javob beradi.",

    "business.kicker": "Qanday masshtablashadi",
    "business.title": "Birikuvchi marketplace iqtisodi.",
    "business.subtitle":
      "Ikki tomonlama tarmoqda beshta daromad oqimi. Har bir yangi shahar keyingisini tezlashtiradi.",
    "business.streams.0.label": "Tranzaksiya komissiyasi",
    "business.streams.0.value": "3–7%",
    "business.streams.0.desc": "Har bir buyurtma va ijara uchun.",
    "business.streams.1.label": "Premium e’lonlar",
    "business.streams.1.value": "$5–$50",
    "business.streams.1.desc": "Egalar va agentlar uchun.",
    "business.streams.2.label": "Ischi obunasi",
    "business.streams.2.value": "$10/oy",
    "business.streams.2.desc": "Tasdiqlangan mutaxassislar uchun Pro.",
    "business.streams.3.label": "Sponsorlik joyi",
    "business.streams.3.value": "CPM/CPC",
    "business.streams.3.desc": "Brendlar va hamkorlarni kuchaytirish.",
    "business.streams.4.label": "AI Premium",
    "business.streams.4.value": "$5/oy",
    "business.streams.4.desc": "Ustuvor moslashuv, bozor tahlillari.",
    "business.proj.title": "Trayektoriya",
    "business.proj.y1": "1-yil · Toshkentda 10,000 faol foydalanuvchi",
    "business.proj.y2": "2-yil · 3 shaharda 50,000 foydalanuvchi",
    "business.proj.y3": "3-yil · ARPU $12 · marja >70%",
    "business.proj.note":
      "Kapitalga oz ehtiyojli, ikki tomonlama likvidlik. Har bir zichlashgan shahar marjani oshiradi va jalb qilish narxini pasaytiradi.",

    "ai.kicker": "AI markazi",
    "ai.title": "Funksiya emas. Butun tizim.",
    "ai.subtitle":
      "To‘rt xususiy AI qatlami parchalangan niyatni bitta qaroriga aylantiradi — istalgan tilda.",
    "ai.modules.0.title": "Suhbat asosida qidiruv",
    "ai.modules.0.body":
      "O‘zbek, rus, ingliz. Kalit so‘zni emas, niyatni va shoshilinchlikni tushunadi.",
    "ai.modules.1.title": "Tavsiyalar dvigateli",
    "ai.modules.1.body":
      "Xulq, joylashuv, byudjet va turmush tarzi signallaridan e’lon va xizmatchilarni saralaydi.",
    "ai.modules.2.title": "Adolatli narx modeli",
    "ai.modules.2.body":
      "Mintaqaviy taqqoslama va mavsumiylik asosida real vaqtdagi narx prognozi.",
    "ai.modules.3.title": "Oldindan ko‘rish qatlami",
    "ai.modules.3.body":
      "Qayta buyurtma, ta’mirlash oynalari va bozor imkoniyatlarini siz so‘ramasdan oldin biladi.",

    "roadmap.kicker": "Yo‘l xaritasi",
    "roadmap.title": "Bugun Toshkent. Ertaga Markaziy Osiyo.",
    "roadmap.0.title": "G‘oya",
    "roadmap.0.body": "Bozor tasdig‘i, asoschilar jamoasi, dizayn tizimi.",
    "roadmap.0.tag": "Bajarildi",
    "roadmap.1.title": "Prototip",
    "roadmap.1.body": "Asosiy oqimlar, AI prototipi, pilot e’lonlar.",
    "roadmap.1.tag": "Hozir",
    "roadmap.2.title": "MVP",
    "roadmap.2.body": "Toshkentda beta — tasdiqlangan e’lonlar va 1,000 ischilar.",
    "roadmap.2.tag": "3 oy",
    "roadmap.3.title": "Ommaviy ishga tushirish",
    "roadmap.3.body": "Marketing, eskrow ishga tushadi, pullik jalb qilish.",
    "roadmap.3.tag": "6 oy",
    "roadmap.4.title": "Mintaqaviy kengayish",
    "roadmap.4.body": "Almati, Bishkek, Dushanbe — Markaziy Osiyo.",
    "roadmap.4.tag": "12–18 oy",

    "team.kicker": "Jamoa",
    "team.title": "Mahsulot yetkazadigan operatorlar.",
    "team.subtitle":
      "Senior muhandislik, o‘sish va dizayn — g‘oyani trafikka aylantiradigan kombinatsiya.",
    "team.0.name": "Samar Saidov",
    "team.0.role": "CEO & Hammuassis",
    "team.0.bio":
      "Full-stack muhandis. Masshtablanuvchi tizimlar va tezkor ishga tushirish.",
    "team.1.name": "To‘rabek Yo‘ldoshev",
    "team.1.role": "CMO & Hammuassis",
    "team.1.bio":
      "Marketing + ko‘chmas mulk. O‘sish va talab strategiyasi.",
    "team.2.name": "Azizbek Xayrullayev",
    "team.2.role": "CTO",
    "team.2.bio": "Backend muhandis. Tizim arxitekturasi va API.",
    "team.3.name": "Murodjon Sotiboldiyev",
    "team.3.role": "Mahsulot dizayneri",
    "team.3.bio": "UI/UX va frontend. Chiroyli, tez interfeyslar.",

    "why.kicker": "Nega g‘alaba qozonamiz",
    "why.title": "Nega Klikly muqarrar.",
    "why.0.title": "Tajribali jamoa",
    "why.0.body": "Real mahsulot yetkazgan operatorlar.",
    "why.1.title": "Haqiqiy bozor og‘rig‘i",
    "why.1.body": "Ijarachilar, egalar va xizmatchilar tasdiqlagan talab.",
    "why.2.title": "Tezkor rivojlanish",
    "why.2.body": "MVP 90 kunda — birinchi kundan AI bilan.",
    "why.3.title": "AI-birinchi ustunlik",
    "why.3.body": "Raqobatchilar — e’lonlar. Biz — intellekt qatlami.",

    "chatbot.kicker": "Klikly bilan suhbat",
    "chatbot.title": "Istalgan savol bering. Soniyalarda javob oling.",
    "chatbot.subtitle":
      "Haqiqiy AI. O‘zbek, rus va ingliz tillarida ravon. Klikly mahsuloti, bozori va yo‘l xaritasiga o‘rgatilgan.",
    "chatbot.placeholder": "Kvartira, xizmat, narx, eskrow haqida so‘rang…",
    "chatbot.send": "Yuborish",
    "chatbot.greeting":
      "Salom — men Klikly AI’man. Kvartira topish, xizmat yollash, eskrow yoki ishga tushish rejalari haqida so‘rang.",
    "chatbot.q.0": "Chilonzor metrosi yaqinida $500 gacha 2 xonali toping",
    "chatbot.q.1": "Ishchi meni aldamasligiga qanday ishonch hosil qilasiz?",
    "chatbot.q.2": "Klikly e’lonlarni qanday tekshiradi?",
    "chatbot.q.3": "Biznes modelingiz qanday?",
    "chatbot.error.network": "Aloqa xatosi. Qayta urinib ko‘ring.",
    "chatbot.error.rate": "Juda ko‘p so‘rov — bir necha soniya kuting.",
    "chatbot.error.payment": "AI limit tugagan. Egasi balansni to‘ldirishi kerak.",
    "chatbot.error.generic": "Xatolik yuz berdi. Qayta urinib ko‘ring.",

    "demo.kicker": "Harakatda ko‘ring",
    "demo.title": "Kelajakni 200 soniyada tushuning.",
    "demo.subtitle":
      "Qidiruv, AI moslashuv, buyurtma, to‘lov, baho — bir oqimda, hech qanday ishqalanish.",
    "demo.cta": "Demo ko‘rish",

    "download.kicker": "Klikly’ni oling",
    "download.title": "Ikki ilova. Bitta ekotizim.",
    "download.subtitle":
      "Bozorning ikkala tomoni uchun — tajriba hech qachon uzilmaydi.",
    "download.users.title": "Klikly Foydalanuvchilar uchun",
    "download.users.body": "Uy toping. Ischi yollang. Xavfsiz to‘lang.",
    "download.users.cta": "Foydalanuvchi ilovasi",
    "download.workers.title": "Klikly Xizmatchilar uchun",
    "download.workers.body": "Ish toping. Obro‘ qozoning. Ko‘proq ishlang.",
    "download.workers.cta": "Ischi ilovasi",

    "footer.tagline": "Qayerda yashashing va qanday yashashing uchun Super ilova.",
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
    "nav.download": "Ранний доступ",
    "nav.signin": "Войти",

    "hero.badge": "Создано основателями. Для городов.",
    "hero.title1": "Операционная система для того,",
    "hero.title2": "где и как вы живёте.",
    "hero.subtitle":
      "Klikly заменяет десятки досок объявлений, брокеров и чат-группы единым ИИ-Супер-приложением — проверенные объявления, надёжные мастера, эскроу-платежи. За 30 секунд.",
    "hero.cta.demo": "Почувствовать будущее",
    "hero.cta.download": "Получить ранний доступ",
    "hero.trust": "Нам уже доверяют ранние пользователи в Ташкенте · Алматы · Бишкеке",
    "hero.stat1": "Проверенные объявления",
    "hero.stat2": "Отобранные специалисты",
    "hero.stat3": "Средний ИИ-подбор",

    "problem.kicker": "Что сломано",
    "problem.title": "Найти жильё или мастера сегодня — это средневековье.",
    "problem.subtitle":
      "10+ приложений. Фейковые объявления. Наличные. Ноль ответственности. Миллионы часов и миллиарды долларов сжигаются на рынке, который только притворяется рабочим.",
    "problem.scenario.title": "Обычный вторник в Ташкенте",
    "problem.scenario.body":
      "«Она 4 часа листала Telegram, позвонила по 11 номерам — две квартиры сданы на прошлой неделе, три не отвечают. В итоге через знакомого вызвала электрика — он опоздал на день, сломал плафон и потребовал наличные. Без рейтинга. Без возврата. Без управы.»",
    "problem.list.0.title": "10+ приложений только чтобы начать",
    "problem.list.0.body":
      "Доски, Telegram-каналы, агенты, ремонтные группы — каждый поиск выжигает часы.",
    "problem.list.1.title": "До 40% — фейк или устарело",
    "problem.list.1.body":
      "Объявления висят неделями после сдачи. Фото — украденные, цены — приманка.",
    "problem.list.2.title": "Нет ответственности у мастеров",
    "problem.list.2.body":
      "Найм — рулетка по сарафану. Без ID, рейтингов и страховки. Один промах — убыток ваш.",
    "problem.list.3.title": "Часы переговоров",
    "problem.list.3.body":
      "Ручной поиск цены, бесконечная переписка, никакой опоры на данные.",
    "problem.list.4.title": "Ноль персонализации",
    "problem.list.4.body":
      "Все видят один и тот же поток. Алгоритмы? Рекомендации? Не на этом рынке.",
    "problem.list.5.title": "Наличные, риски, без управы",
    "problem.list.5.body":
      "Нет эскроу. Нет гарантий. Если работа провалена — вы один. Система спроектирована для худшего актора.",

    "solution.kicker": "Что мы построили",
    "solution.title": "Одно приложение. Всё проверено. Работает на ИИ.",
    "solution.subtitle":
      "Klikly — не очередная доска. Это слой доверия, которого не было: поиск, подбор, бронь и оплата в одном умном потоке.",
    "solution.steps.0.title": "Скажите Klikly, что нужно",
    "solution.steps.0.body":
      "На любом языке: «2-комн. у метро до $600» или «электрик на сегодня». Никакой возни с фильтрами.",
    "solution.steps.1.title": "ИИ показывает проверенные варианты",
    "solution.steps.1.body":
      "Движок ранжирует объявления и мастеров по соответствию, цене, рейтингу и близости. Всё — заранее проверено.",
    "solution.steps.2.title": "Бронь, оплата, готово",
    "solution.steps.2.body":
      "Эскроу-платежи. Чат в приложении. Двусторонние оценки. От запроса до сделки — за минуты. Без звонков, посредников и риска.",
    "solution.feature.0": "Единый рынок недвижимости и услуг",
    "solution.feature.1": "Движок ИИ-рекомендаций",
    "solution.feature.2": "12-пунктовая проверка каждого объявления",
    "solution.feature.3": "Умные фильтры: бюджет, локация, рейтинг",
    "solution.feature.4": "Мгновенное бронирование с эскроу",
    "solution.feature.5": "Двусторонняя система отзывов",

    "trust.kicker": "Доверие как инженерия",
    "trust.title": "Чтобы вам больше не приходилось верить никому на слово.",
    "trust.subtitle":
      "Проверенные личности, эскроу-удержание средств и гарантия выше рынка — не на словах, а в архитектуре.",
    "trust.stats.0.value": "4.9★",
    "trust.stats.0.label": "Рейтинг мастеров",
    "trust.stats.0.note": "Среднее по пилотам",
    "trust.stats.1.value": "100%",
    "trust.stats.1.label": "Проверенные объявления",
    "trust.stats.1.note": "12 пунктов на каждое",
    "trust.stats.2.value": "$0",
    "trust.stats.2.label": "Списывается до завершения",
    "trust.stats.2.note": "Эскроу-платежи",
    "trust.stats.3.value": "<24ч",
    "trust.stats.3.label": "Решение спора",
    "trust.stats.3.note": "Гарантия Klikly",
    "trust.pillars.0.title": "Проверенные личности",
    "trust.pillars.0.body":
      "ID, документы собственности и live-селфи. Тот, кто пишет, — тот и приходит.",
    "trust.pillars.1.title": "12-пунктовый аудит объявлений",
    "trust.pillars.1.body":
      "Подлинность фото, поиск дублей, право собственности и проверка цены — до публикации.",
    "trust.pillars.2.title": "Эскроу на каждой сделке",
    "trust.pillars.2.body":
      "Деньги держит Klikly, пока обе стороны не подтвердят результат. Никакого нала, никакой беготни.",
    "trust.pillars.3.title": "Гарантия Klikly",
    "trust.pillars.3.body":
      "Если проверенная работа не дотянет до стандарта — вернём деньги и переоформим заказ за наш счёт.",
    "trust.pillars.4.title": "Двусторонняя репутация",
    "trust.pillars.4.body":
      "Оценивают обе стороны. Плохие акторы удаляются автоматически. Сеть очищается по мере роста.",
    "trust.pillars.5.title": "24/7 контроль человеком",
    "trust.pillars.5.body":
      "ИИ помечает риск в реальном времени. Обученные агенты подключаются к спорам — на вашем языке, за часы.",

    "business.kicker": "Как масштабируется",
    "business.title": "Маркетплейс-экономика, которая компаундится.",
    "business.subtitle":
      "Пять потоков выручки на лёгкой капиталом двусторонней сети. Каждый новый город ускоряет следующий.",
    "business.streams.0.label": "Комиссия с транзакций",
    "business.streams.0.value": "3–7%",
    "business.streams.0.desc": "С каждой брони и аренды.",
    "business.streams.1.label": "Премиум-объявления",
    "business.streams.1.value": "$5–$50",
    "business.streams.1.desc": "Для собственников и агентов.",
    "business.streams.2.label": "Подписка для мастеров",
    "business.streams.2.value": "$10/мес",
    "business.streams.2.desc": "Pro для проверенных специалистов.",
    "business.streams.3.label": "Спонсорские размещения",
    "business.streams.3.value": "CPM/CPC",
    "business.streams.3.desc": "Усиление брендов и партнёров.",
    "business.streams.4.label": "AI Premium",
    "business.streams.4.value": "$5/мес",
    "business.streams.4.desc": "Приоритетный подбор и аналитика.",
    "business.proj.title": "Траектория",
    "business.proj.y1": "1-й год · 10 000 активных пользователей в Ташкенте",
    "business.proj.y2": "2-й год · 50 000 пользователей в 3 городах",
    "business.proj.y3": "3-й год · ARPU $12 · маржа >70%",
    "business.proj.note":
      "Лёгкая капиталом, двусторонняя ликвидность. Чем плотнее город — тем выше маржа и ниже стоимость привлечения.",

    "ai.kicker": "ИИ-ядро",
    "ai.title": "Не функция. Вся система.",
    "ai.subtitle":
      "Четыре собственных ИИ-слоя превращают раздробленный запрос в одно решение — на любом языке.",
    "ai.modules.0.title": "Разговорный поиск",
    "ai.modules.0.body":
      "Узбекский, русский, английский. Понимает намерение, бюджет и срочность — не ключевые слова.",
    "ai.modules.1.title": "Движок рекомендаций",
    "ai.modules.1.body":
      "Ранжирует объявления и мастеров по поведению, локации, бюджету и образу жизни.",
    "ai.modules.2.title": "Модель справедливой цены",
    "ai.modules.2.body":
      "Реальное прогнозирование цены по сравнимым и сезонности. Хватит торговаться вслепую.",
    "ai.modules.3.title": "Слой предсказаний",
    "ai.modules.3.body":
      "Предугадывает повторные брони, окна обслуживания и рыночные возможности.",

    "roadmap.kicker": "Дорожная карта",
    "roadmap.title": "Сегодня Ташкент. Дальше — Центральная Азия.",
    "roadmap.0.title": "Идея",
    "roadmap.0.body": "Валидация рынка, команда, дизайн-система.",
    "roadmap.0.tag": "Сделано",
    "roadmap.1.title": "Прототип",
    "roadmap.1.body": "Основные потоки, ИИ-прототип, пилотные объявления.",
    "roadmap.1.tag": "Сейчас",
    "roadmap.2.title": "MVP",
    "roadmap.2.body": "Бета в Ташкенте — проверенные объявления и 1 000 мастеров.",
    "roadmap.2.tag": "3 месяца",
    "roadmap.3.title": "Публичный запуск",
    "roadmap.3.body": "Маркетинг, эскроу, платное привлечение.",
    "roadmap.3.tag": "6 месяцев",
    "roadmap.4.title": "Региональная экспансия",
    "roadmap.4.body": "Алматы, Бишкек, Душанбе — Центральная Азия.",
    "roadmap.4.tag": "12–18 месяцев",

    "team.kicker": "Команда",
    "team.title": "Операторы, которые поставляют.",
    "team.subtitle":
      "Сильная инженерия, рост и дизайн — редкая комбинация, превращающая видение в тягу.",
    "team.0.name": "Самар Саидов",
    "team.0.role": "CEO и сооснователь",
    "team.0.bio":
      "Full-stack инженер. Строит масштабируемые системы и быстро поставляет продукт.",
    "team.1.name": "Турабек Юлдашев",
    "team.1.role": "CMO и сооснователь",
    "team.1.bio":
      "Маркетинг + недвижимость. Отвечает за рост, бренд и спрос.",
    "team.2.name": "Азизбек Хайруллаев",
    "team.2.role": "CTO",
    "team.2.bio": "Backend-инженер. Архитектура систем и API.",
    "team.3.name": "Муроджон Сотиболдиев",
    "team.3.role": "Продуктовый дизайнер",
    "team.3.bio": "UI/UX и фронтенд. Красивые и быстрые интерфейсы.",

    "why.kicker": "Почему мы выигрываем",
    "why.title": "Почему Klikly неизбежен.",
    "why.0.title": "Сильная команда исполнения",
    "why.0.body": "Операторы, поставлявшие реальные продукты в масштабе.",
    "why.1.title": "Подтверждённая боль рынка",
    "why.1.body": "Спрос подтверждён арендаторами, владельцами и мастерами.",
    "why.2.title": "Скорость разработки",
    "why.2.body": "MVP за 90 дней — современный стек, ИИ с первого дня.",
    "why.3.title": "Преимущество ИИ",
    "why.3.body": "Конкуренты — доски. Мы — слой интеллекта.",

    "chatbot.kicker": "Поговорите с Klikly",
    "chatbot.title": "Спросите что угодно. Ответ — за секунды.",
    "chatbot.subtitle":
      "Настоящий ИИ. Свободно владеет узбекским, русским и английским. Обучен продукту, рынку и роадмапу Klikly.",
    "chatbot.placeholder": "Спросите про квартиры, услуги, цены, эскроу…",
    "chatbot.send": "Отправить",
    "chatbot.greeting":
      "Привет — я Klikly AI. Спросите, как найти квартиру, нанять мастера, как работает эскроу или планы запуска.",
    "chatbot.q.0": "Найди 2-комнатную у метро Чиланзар до $500",
    "chatbot.q.1": "Как вы гарантируете, что мастер не обманет?",
    "chatbot.q.2": "Как Klikly проверяет объявления?",
    "chatbot.q.3": "Какая у вас бизнес-модель?",
    "chatbot.error.network": "Проблема со связью. Попробуйте ещё раз.",
    "chatbot.error.rate": "Слишком много запросов — подождите пару секунд.",
    "chatbot.error.payment": "Лимит ИИ исчерпан. Владельцу нужно пополнить кредиты.",
    "chatbot.error.generic": "Что-то пошло не так. Попробуйте ещё раз.",

    "demo.kicker": "Смотрите в действии",
    "demo.title": "200 секунд, чтобы понять будущее.",
    "demo.subtitle":
      "Поиск, ИИ-подбор, бронь, оплата, оценка — один поток, ноль трения.",
    "demo.cta": "Смотреть демо",

    "download.kicker": "Получить Klikly",
    "download.title": "Два приложения. Одна экосистема.",
    "download.subtitle":
      "Под обе стороны рынка — чтобы опыт никогда не ломался.",
    "download.users.title": "Klikly для пользователей",
    "download.users.body": "Находите жильё. Нанимайте мастеров. Платите безопасно.",
    "download.users.cta": "Приложение для пользователей",
    "download.workers.title": "Klikly для мастеров",
    "download.workers.body": "Получайте заказы. Растите репутацию. Зарабатывайте больше.",
    "download.workers.cta": "Приложение для мастеров",

    "footer.tagline": "Супер-приложение для того, где и как вы живёте.",
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

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && ["en", "uz", "ru"].includes(saved)) {
      setLangState(saved);
    }
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

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
