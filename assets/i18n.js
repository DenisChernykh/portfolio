(() => {
  const supportedLanguages = ["ru", "en", "de"];
  const storageKey = "portfolio-language";

  const shared = {
    ru: {
      "languageSwitcher.label": "Язык сайта",
      "languageSwitcher.ru": "Русский",
      "languageSwitcher.en": "Английский",
      "languageSwitcher.de": "Немецкий"
    },
    en: {
      "languageSwitcher.label": "Site language",
      "languageSwitcher.ru": "Russian",
      "languageSwitcher.en": "English",
      "languageSwitcher.de": "German"
    },
    de: {
      "languageSwitcher.label": "Seitensprache",
      "languageSwitcher.ru": "Russisch",
      "languageSwitcher.en": "Englisch",
      "languageSwitcher.de": "Deutsch"
    }
  };

  const translations = {
    home: {
      ru: {
        "meta.title": "Денис Черных — Frontend, AI и автоматизация",
        "meta.description": "Frontend-разработка, AI-усиление и автоматизация для малого бизнеса: страницы, интерфейсы, Telegram mini apps и рабочие инструменты.",
        "home.skipLink": "К содержанию",
        "home.nav.aria": "Основная навигация",
        "home.nav.brandAria": "На первый экран",
        "home.nav.sectionsAria": "Разделы сайта",
        "home.nav.services": "Услуги",
        "home.nav.process": "Процесс",
        "home.nav.workflow": "AI workflow",
        "home.nav.contact": "Контакты",
        "home.nav.cta": "Написать",
        "home.brand.name": "Денис Черных",
        "home.brand.role": "Frontend / AI / Automation",
        "home.hero.aria": "Интро",
        "home.hero.imageAlt": "Абстрактная AI workflow сцена с темной рабочей поверхностью, световыми узлами и связями",
        "home.hero.title": "Frontend, AI и автоматизация в одном рабочем контуре",
        "home.hero.lead": "Запускаю страницы, интерфейсы и автоматизацию, где дизайн, код, контент и AI-инструменты работают как одна система.",
        "home.hero.actionsAria": "Основные действия",
        "home.hero.signalAria": "Фокус работы",
        "home.hero.signal1": "Собираю интерфейсы, которые выглядят живыми, а не просто сверстанными.",
        "home.hero.signal2": "Подключаю AI там, где он сокращает путь от идеи до рабочей версии.",
        "home.hero.signal3": "Довожу сценарии до понятного состояния: структура, адаптив, формы, состояния.",
        "home.hero.scroll": "Scroll",
        "home.actions.email": "Написать на почту",
        "home.services.kicker": "Services",
        "home.services.title": "Запускаю страницы, интерфейсы и автоматизацию без лишнего шума",
        "home.services.lead": "Можно прийти с макетом, старой страницей, списком правок или сырой идеей. Я помогу собрать понятный рабочий результат.",
        "home.services.item1.title": "Верстка и запуск",
        "home.services.item1.text": "Соберу лендинг, страницу или экран по макету, аккуратно перенесу сетку, типографику, адаптив и интерактивные состояния.",
        "home.services.item2.title": "AI-усиление",
        "home.services.item2.text": "Использую AI как рабочий ускоритель: для прототипов, вариантов структуры, проверки кода, контента и связок между сервисами.",
        "home.services.item3.title": "Автоматизация процессов",
        "home.services.item3.text": "Связываю формы, контент, CMS, таблицы, Telegram mini apps и API, чтобы убрать ручной перенос и повторяющиеся действия.",
        "home.services.item4.title": "Polish интерфейсов",
        "home.services.item4.text": "Исправляю визуальные баги, пустые состояния, hover-эффекты, ошибки форм и мобильные поломки, которые портят ощущение качества.",
        "home.process.kicker": "Process",
        "home.process.title": "Как пойдет работа",
        "home.process.lead": "Без тяжелого ТЗ на старте. Сначала быстро отделяем важное от лишнего, затем собираем версию, которую можно показать и проверить.",
        "home.process.step1.title": "Разбираю задачу",
        "home.process.step1.text": "Понимаю, что есть сейчас, где ломается сценарий, что нужно пользователю и какой минимальный результат даст пользу.",
        "home.process.step2.title": "Проектирую рабочий контур",
        "home.process.step2.text": "Выстраиваю блоки, состояния, данные и связи между frontend, AI, CMS, API или Telegram, если они нужны задаче.",
        "home.process.step3.title": "Собираю и проверяю",
        "home.process.step3.text": "Верстаю, добавляю поведение, проверяю адаптив, CTA, формы, пустые состояния и детали, которые делают интерфейс уверенным.",
        "home.workflow.kicker": "AI workflow",
        "home.workflow.title": "AI не заменяет смысл задачи, а ускоряет рабочий контур",
        "home.workflow.text1": "Я использую AI-инструменты как часть процесса: быстрее исследовать варианты, собрать прототип, проверить код и найти короткий путь между идеей и рабочей версией.",
        "home.workflow.text2": "Поэтому результат не выглядит как случайная генерация. Сначала сценарий и интерфейс, затем AI там, где он реально экономит время.",
        "home.workflow.mapAria": "Схема AI workflow",
        "home.workflow.map1": "идея → структура",
        "home.workflow.map2": "макет → frontend",
        "home.workflow.map3": "форма → данные → действие",
        "home.workflow.point1": "AI помогает быстрее найти варианты, но финальное решение остается человеческим и продуктовым.",
        "home.workflow.point2": "Frontend, контент, CMS, API и Telegram можно собрать в один понятный сценарий.",
        "home.about.kicker": "About",
        "home.about.title": "Обо мне",
        "home.about.text1": "Я frontend-разработчик, который любит, когда интерфейс не только аккуратно сверстан, но и помогает человеку быстрее сделать нужное действие.",
        "home.about.text2": "Беру задачи по лендингам, интерфейсам, формам, адаптиву, Telegram mini apps и доработке существующих страниц. Внимательно отношусь к типографике, состояниям, отступам, скорости и тому, как сценарий ощущается в реальном использовании.",
        "home.about.proof1.title": "Фокус на результате",
        "home.about.proof1.text": "Не добавляю эффект ради эффекта: каждый блок должен объяснять, доказывать или вести к действию.",
        "home.about.proof2.title": "Аккуратная реализация",
        "home.about.proof2.text": "Проверяю адаптив, hover, ошибки, пустые состояния и мелкие места, где сайт обычно начинает выглядеть дешево.",
        "home.about.proof3.title": "Шире классического frontend",
        "home.about.proof3.text": "Могу связать интерфейс с контентом, AI-инструментами, таблицами, CMS, Telegram и простыми автоматизациями.",
        "home.contact.kicker": "Contact",
        "home.contact.title": "Выбери удобный способ связи, и я помогу превратить задачу в понятный следующий шаг",
        "home.contact.lead": "Достаточно коротко описать, что есть сейчас, что неудобно и какой результат хочется получить. Дальше предложу реалистичный маршрут.",
        "home.contact.channelsAria": "Контактные каналы",
        "home.footer.copyright": "© 2026 Денис Черных · Frontend / AI / Automation",
        "home.footer.privacy": "Политика конфиденциальности",
        "home.footer.note": "Информация на сайте носит справочный характер и не является публичной офертой."
      },
      en: {
        "meta.title": "Denis Chernykh — Frontend, AI and automation",
        "meta.description": "Frontend development, AI support and automation for small businesses: pages, interfaces, Telegram mini apps and practical tools.",
        "home.skipLink": "Skip to content",
        "home.nav.aria": "Main navigation",
        "home.nav.brandAria": "Go to the first screen",
        "home.nav.sectionsAria": "Site sections",
        "home.nav.services": "Services",
        "home.nav.process": "Process",
        "home.nav.workflow": "AI workflow",
        "home.nav.contact": "Contact",
        "home.nav.cta": "Write",
        "home.brand.name": "Denis Chernykh",
        "home.brand.role": "Frontend / AI / Automation",
        "home.hero.aria": "Intro",
        "home.hero.imageAlt": "Abstract AI workflow scene with a dark work surface, light nodes and connections",
        "home.hero.title": "Frontend, AI and automation in one working system",
        "home.hero.lead": "I launch pages, interfaces and automation where design, code, content and AI tools work as one system.",
        "home.hero.actionsAria": "Primary actions",
        "home.hero.signalAria": "Work focus",
        "home.hero.signal1": "I build interfaces that feel alive, not merely laid out.",
        "home.hero.signal2": "I add AI where it shortens the path from idea to working version.",
        "home.hero.signal3": "I bring flows into a clear state: structure, responsive layout, forms and states.",
        "home.hero.scroll": "Scroll",
        "home.actions.email": "Email me",
        "home.services.kicker": "Services",
        "home.services.title": "I launch pages, interfaces and automation without unnecessary noise",
        "home.services.lead": "Bring a design, an old page, a list of fixes or a raw idea. I will help turn it into a clear working result.",
        "home.services.item1.title": "Layout and launch",
        "home.services.item1.text": "I build a landing page, page or screen from a design, carefully carrying over the grid, typography, responsive behavior and interactive states.",
        "home.services.item2.title": "AI enhancement",
        "home.services.item2.text": "I use AI as a working accelerator: for prototypes, structure options, code checks, content and connections between services.",
        "home.services.item3.title": "Process automation",
        "home.services.item3.text": "I connect forms, content, CMS, spreadsheets, Telegram mini apps and APIs to remove manual copying and repetitive work.",
        "home.services.item4.title": "Interface polish",
        "home.services.item4.text": "I fix visual bugs, empty states, hover effects, form errors and mobile breaks that make a product feel unfinished.",
        "home.process.kicker": "Process",
        "home.process.title": "How the work will go",
        "home.process.lead": "No heavy specification at the start. First we separate what matters from what does not, then build a version you can show and test.",
        "home.process.step1.title": "I unpack the task",
        "home.process.step1.text": "I understand what exists now, where the flow breaks, what the user needs and which minimum result will be useful.",
        "home.process.step2.title": "I design the working system",
        "home.process.step2.text": "I arrange blocks, states, data and links between frontend, AI, CMS, API or Telegram when the task needs them.",
        "home.process.step3.title": "I build and check",
        "home.process.step3.text": "I code the interface, add behavior, check responsiveness, CTAs, forms, empty states and details that make it feel solid.",
        "home.workflow.kicker": "AI workflow",
        "home.workflow.title": "AI does not replace the meaning of the task, it speeds up the work",
        "home.workflow.text1": "I use AI tools as part of the process: to explore options faster, assemble a prototype, check code and find a shorter path from idea to working version.",
        "home.workflow.text2": "So the result does not feel randomly generated. First come the user flow and interface, then AI where it actually saves time.",
        "home.workflow.mapAria": "AI workflow diagram",
        "home.workflow.map1": "idea → structure",
        "home.workflow.map2": "design → frontend",
        "home.workflow.map3": "form → data → action",
        "home.workflow.point1": "AI helps find options faster, but the final decision stays human and product-minded.",
        "home.workflow.point2": "Frontend, content, CMS, API and Telegram can be connected into one clear scenario.",
        "home.about.kicker": "About",
        "home.about.title": "About me",
        "home.about.text1": "I am a frontend developer who likes interfaces that are not only neatly built, but also help people complete the action faster.",
        "home.about.text2": "I take on landing pages, interfaces, forms, responsive layouts, Telegram mini apps and improvements to existing pages. I care about typography, states, spacing, speed and how the flow feels in real use.",
        "home.about.proof1.title": "Focus on outcomes",
        "home.about.proof1.text": "I do not add effects for their own sake: every block should explain, prove or lead to action.",
        "home.about.proof2.title": "Careful implementation",
        "home.about.proof2.text": "I check responsive behavior, hover states, errors, empty states and the small places where a site usually starts to feel cheap.",
        "home.about.proof3.title": "Beyond classic frontend",
        "home.about.proof3.text": "I can connect the interface with content, AI tools, spreadsheets, CMS, Telegram and simple automation.",
        "home.contact.kicker": "Contact",
        "home.contact.title": "Choose a convenient way to reach me, and I will help turn the task into a clear next step",
        "home.contact.lead": "A short description is enough: what exists now, what is inconvenient and what result you want. Then I will suggest a realistic route.",
        "home.contact.channelsAria": "Contact channels",
        "home.footer.copyright": "© 2026 Denis Chernykh · Frontend / AI / Automation",
        "home.footer.privacy": "Privacy policy",
        "home.footer.note": "The information on this site is for reference only and is not a public offer."
      },
      de: {
        "meta.title": "Denis Chernykh — Frontend, KI und Automatisierung",
        "meta.description": "Frontend-Entwicklung, KI-Unterstützung und Automatisierung für kleine Unternehmen: Seiten, Oberflächen, Telegram Mini Apps und praktische Werkzeuge.",
        "home.skipLink": "Zum Inhalt springen",
        "home.nav.aria": "Hauptnavigation",
        "home.nav.brandAria": "Zum ersten Bildschirm",
        "home.nav.sectionsAria": "Website-Bereiche",
        "home.nav.services": "Leistungen",
        "home.nav.process": "Ablauf",
        "home.nav.workflow": "KI-Workflow",
        "home.nav.contact": "Kontakt",
        "home.nav.cta": "Kontakt",
        "home.brand.name": "Denis Chernykh",
        "home.brand.role": "Frontend / KI / Automatisierung",
        "home.hero.aria": "Intro",
        "home.hero.imageAlt": "Abstrakte KI-Workflow-Szene mit dunkler Arbeitsfläche, leuchtenden Knoten und Verbindungen",
        "home.hero.title": "Frontend, KI und Automatisierung in einem Arbeitsfluss",
        "home.hero.lead": "Ich baue Seiten, Oberflächen und Automatisierung, in denen Design, Code, Content und KI-Tools als ein System arbeiten.",
        "home.hero.actionsAria": "Hauptaktionen",
        "home.hero.signalAria": "Arbeitsschwerpunkt",
        "home.hero.signal1": "Ich baue Oberflächen, die lebendig wirken und nicht nur sauber gesetzt sind.",
        "home.hero.signal2": "Ich nutze KI dort, wo sie den Weg von der Idee zur funktionierenden Version verkürzt.",
        "home.hero.signal3": "Ich bringe Abläufe in einen klaren Zustand: Struktur, Responsive Layout, Formulare und Zustände.",
        "home.hero.scroll": "Scroll",
        "home.actions.email": "E-Mail schreiben",
        "home.services.kicker": "Leistungen",
        "home.services.title": "Ich starte Seiten, Oberflächen und Automatisierung ohne unnötiges Rauschen",
        "home.services.lead": "Sie können mit einem Design, einer alten Seite, einer Liste von Korrekturen oder einer rohen Idee kommen. Ich helfe, daraus ein klares Arbeitsergebnis zu machen.",
        "home.services.item1.title": "Layout und Launch",
        "home.services.item1.text": "Ich baue Landingpages, Seiten oder Screens nach Design und übertrage Raster, Typografie, responsive Logik und interaktive Zustände sorgfältig.",
        "home.services.item2.title": "KI-Unterstützung",
        "home.services.item2.text": "Ich nutze KI als Beschleuniger: für Prototypen, Strukturvarianten, Codeprüfung, Content und Verbindungen zwischen Services.",
        "home.services.item3.title": "Prozessautomatisierung",
        "home.services.item3.text": "Ich verbinde Formulare, Content, CMS, Tabellen, Telegram Mini Apps und APIs, damit manuelles Kopieren und Wiederholungen wegfallen.",
        "home.services.item4.title": "Interface-Polish",
        "home.services.item4.text": "Ich behebe visuelle Fehler, leere Zustände, Hover-Effekte, Formularfehler und mobile Brüche, die ein Produkt unfertig wirken lassen.",
        "home.process.kicker": "Ablauf",
        "home.process.title": "So läuft die Arbeit",
        "home.process.lead": "Ohne schweres Lastenheft am Anfang. Zuerst trennen wir Wichtiges von Unwichtigem, dann bauen wir eine Version, die man zeigen und prüfen kann.",
        "home.process.step1.title": "Ich kläre die Aufgabe",
        "home.process.step1.text": "Ich verstehe, was es bereits gibt, wo der Ablauf bricht, was Nutzer brauchen und welches minimale Ergebnis Nutzen bringt.",
        "home.process.step2.title": "Ich entwerfe den Arbeitsfluss",
        "home.process.step2.text": "Ich ordne Blöcke, Zustände, Daten und Verbindungen zwischen Frontend, KI, CMS, API oder Telegram, wenn die Aufgabe sie braucht.",
        "home.process.step3.title": "Ich baue und prüfe",
        "home.process.step3.text": "Ich entwickle die Oberfläche, ergänze Verhalten und prüfe Responsive Layout, CTAs, Formulare, leere Zustände und Details, die Sicherheit geben.",
        "home.workflow.kicker": "KI-Workflow",
        "home.workflow.title": "KI ersetzt nicht den Sinn der Aufgabe, sie beschleunigt den Arbeitsfluss",
        "home.workflow.text1": "Ich nutze KI-Tools als Teil des Prozesses: schneller Varianten prüfen, Prototypen bauen, Code kontrollieren und den kurzen Weg von der Idee zur funktionierenden Version finden.",
        "home.workflow.text2": "Darum wirkt das Ergebnis nicht wie zufällige Generierung. Zuerst kommen Ablauf und Interface, dann KI dort, wo sie wirklich Zeit spart.",
        "home.workflow.mapAria": "Diagramm des KI-Workflows",
        "home.workflow.map1": "Idee → Struktur",
        "home.workflow.map2": "Design → Frontend",
        "home.workflow.map3": "Formular → Daten → Aktion",
        "home.workflow.point1": "KI hilft, schneller Optionen zu finden, aber die finale Entscheidung bleibt menschlich und produktorientiert.",
        "home.workflow.point2": "Frontend, Content, CMS, API und Telegram lassen sich zu einem klaren Szenario verbinden.",
        "home.about.kicker": "Über mich",
        "home.about.title": "Über mich",
        "home.about.text1": "Ich bin Frontend-Entwickler und mag Oberflächen, die nicht nur sauber umgesetzt sind, sondern Menschen schneller zur richtigen Aktion bringen.",
        "home.about.text2": "Ich übernehme Landingpages, Interfaces, Formulare, responsive Layouts, Telegram Mini Apps und Verbesserungen bestehender Seiten. Ich achte auf Typografie, Zustände, Abstände, Geschwindigkeit und darauf, wie sich der Ablauf in echter Nutzung anfühlt.",
        "home.about.proof1.title": "Fokus auf Ergebnis",
        "home.about.proof1.text": "Ich füge keinen Effekt um des Effekts willen hinzu: Jeder Block soll erklären, belegen oder zur Handlung führen.",
        "home.about.proof2.title": "Sorgfältige Umsetzung",
        "home.about.proof2.text": "Ich prüfe Responsive Layout, Hover, Fehler, leere Zustände und die kleinen Stellen, an denen eine Seite schnell billig wirkt.",
        "home.about.proof3.title": "Mehr als klassisches Frontend",
        "home.about.proof3.text": "Ich kann Oberflächen mit Content, KI-Tools, Tabellen, CMS, Telegram und einfacher Automatisierung verbinden.",
        "home.contact.kicker": "Kontakt",
        "home.contact.title": "Wählen Sie einen passenden Kontaktweg, und ich mache aus der Aufgabe einen klaren nächsten Schritt",
        "home.contact.lead": "Eine kurze Beschreibung reicht: Was gibt es jetzt, was ist unbequem und welches Ergebnis wünschen Sie sich? Danach schlage ich einen realistischen Weg vor.",
        "home.contact.channelsAria": "Kontaktkanäle",
        "home.footer.copyright": "© 2026 Denis Chernykh · Frontend / KI / Automatisierung",
        "home.footer.privacy": "Datenschutzerklärung",
        "home.footer.note": "Die Informationen auf dieser Website dienen nur der Orientierung und stellen kein öffentliches Angebot dar."
      }
    },
    privacy: {
      ru: {
        "meta.title": "Политика конфиденциальности — Денис Черных",
        "meta.description": "Политика конфиденциальности сайта Дениса Черных: какие данные обрабатываются при посещении сайта и обращении через Email, Telegram или WhatsApp.",
        "privacy.nav.aria": "Навигация по юридическим страницам",
        "privacy.brand.name": "Денис Черных",
        "privacy.nav.back": "Вернуться на сайт",
        "privacy.eyebrow": "Privacy Policy",
        "privacy.title": "Политика конфиденциальности",
        "privacy.lead": "Эта страница объясняет, какие данные могут обрабатываться при посещении сайта и обращении через Email, Telegram или WhatsApp.",
        "privacy.section1.title": "1. Оператор данных",
        "privacy.section1.text": "Оператор: Денис Черных. Для вопросов по обработке персональных данных можно написать на email:",
        "privacy.section2.title": "2. Какие данные обрабатываются",
        "privacy.section2.item1": "технические данные посещения сайта, которые может обрабатывать GitHub Pages для работы и защиты сервиса: IP-адрес, дата и время запроса, user agent, запрошенная страница;",
        "privacy.section2.item2": "данные, которые вы сами отправляете при обращении: имя или ник, email, номер телефона, аккаунт в мессенджере, содержание сообщения и приложенные материалы;",
        "privacy.section2.item3": "данные переписки в Email, Telegram или WhatsApp после перехода по внешним ссылкам с сайта.",
        "privacy.section3.title": "3. Цели обработки",
        "privacy.section3.item1": "ответ на обращение и обсуждение проекта;",
        "privacy.section3.item2": "подготовка предложения, оценка задачи и дальнейшее взаимодействие по проекту;",
        "privacy.section3.item3": "обеспечение доступности, безопасности и корректной работы сайта.",
        "privacy.section4.title": "4. Правовые основания",
        "privacy.section4.text": "Данные обрабатываются на основании вашего обращения, необходимости ответить на запрос и подготовить возможный договор, а также законного интереса в поддержании безопасности сайта. Если отдельное действие требует согласия, оно запрашивается отдельно.",
        "privacy.section5.title": "5. Сторонние сервисы",
        "privacy.section5.text": "Сайт размещен на GitHub Pages. При переходе в Telegram, WhatsApp или при отправке email данные обрабатываются соответствующими сервисами по их правилам. Шрифты и иконки подключены локально, внешние Google Fonts и CDN для иконок на сайте не используются.",
        "privacy.section6.title": "6. Cookies и аналитика",
        "privacy.section6.text": "На сайте не используются cookies, рекламные пиксели, формы сбора заявок и встроенная аналитика. Браузерное localStorage может использоваться только для сохранения выбранного языка интерфейса.",
        "privacy.section7.title": "7. Срок хранения",
        "privacy.section7.text": "Переписка и материалы по обращению хранятся столько, сколько нужно для ответа, обсуждения проекта, исполнения договоренностей и защиты законных интересов. По запросу данные могут быть удалены, если нет обязанности или разумной необходимости хранить их дольше.",
        "privacy.section8.title": "8. Ваши права",
        "privacy.section8.text": "Вы можете запросить доступ к своим данным, уточнение, удаление, ограничение обработки или отзыв согласия, если обработка основана на согласии. Для этого напишите на",
        "privacy.section9.title": "9. Обновления",
        "privacy.section9.text": "Политика может обновляться при изменении сайта, контактных каналов, сервисов или правовых требований. Актуальная версия опубликована на этой странице. Дата обновления: 03.06.2026.",
        "privacy.footer.copyright": "© 2026 Денис Черных",
        "privacy.footer.home": "На главную"
      },
      en: {
        "meta.title": "Privacy Policy — Denis Chernykh",
        "meta.description": "Privacy policy for Denis Chernykh's website: what data may be processed when visiting the site and contacting via Email, Telegram or WhatsApp.",
        "privacy.nav.aria": "Legal page navigation",
        "privacy.brand.name": "Denis Chernykh",
        "privacy.nav.back": "Back to site",
        "privacy.eyebrow": "Privacy Policy",
        "privacy.title": "Privacy Policy",
        "privacy.lead": "This page explains what data may be processed when you visit the site and contact me via Email, Telegram or WhatsApp.",
        "privacy.section1.title": "1. Data controller",
        "privacy.section1.text": "Data controller: Denis Chernykh. For questions about personal data processing, email:",
        "privacy.section2.title": "2. What data is processed",
        "privacy.section2.item1": "technical visit data that GitHub Pages may process to operate and protect the service: IP address, request date and time, user agent and requested page;",
        "privacy.section2.item2": "data you send yourself when contacting me: name or nickname, email, phone number, messenger account, message content and attached materials;",
        "privacy.section2.item3": "correspondence data in Email, Telegram or WhatsApp after following external links from the site.",
        "privacy.section3.title": "3. Purposes of processing",
        "privacy.section3.item1": "replying to your request and discussing a project;",
        "privacy.section3.item2": "preparing an offer, estimating the task and further project communication;",
        "privacy.section3.item3": "keeping the site available, secure and working correctly.",
        "privacy.section4.title": "4. Legal bases",
        "privacy.section4.text": "Data is processed based on your request, the need to reply and prepare a possible agreement, and the legitimate interest in keeping the site secure. If a specific action requires consent, it will be requested separately.",
        "privacy.section5.title": "5. Third-party services",
        "privacy.section5.text": "The site is hosted on GitHub Pages. When you open Telegram, WhatsApp or send an email, data is processed by those services under their own rules. Fonts and icons are loaded locally; external Google Fonts and icon CDNs are not used on the site.",
        "privacy.section6.title": "6. Cookies and analytics",
        "privacy.section6.text": "The site does not use cookies, advertising pixels, lead capture forms or built-in analytics. Browser localStorage may be used only to remember the selected interface language.",
        "privacy.section7.title": "7. Retention period",
        "privacy.section7.text": "Correspondence and materials related to your request are kept as long as needed to reply, discuss the project, fulfill agreements and protect legitimate interests. Upon request, data may be deleted unless there is an obligation or reasonable need to keep it longer.",
        "privacy.section8.title": "8. Your rights",
        "privacy.section8.text": "You may request access to your data, correction, deletion, restriction of processing or withdrawal of consent where processing is based on consent. To do this, write to",
        "privacy.section9.title": "9. Updates",
        "privacy.section9.text": "This policy may be updated when the site, contact channels, services or legal requirements change. The current version is published on this page. Last updated: 03.06.2026.",
        "privacy.footer.copyright": "© 2026 Denis Chernykh",
        "privacy.footer.home": "Home"
      },
      de: {
        "meta.title": "Datenschutzerklärung — Denis Chernykh",
        "meta.description": "Datenschutzerklärung der Website von Denis Chernykh: Welche Daten beim Besuch der Website und bei Kontakt über E-Mail, Telegram oder WhatsApp verarbeitet werden können.",
        "privacy.nav.aria": "Navigation für rechtliche Seiten",
        "privacy.brand.name": "Denis Chernykh",
        "privacy.nav.back": "Zur Website",
        "privacy.eyebrow": "Datenschutz",
        "privacy.title": "Datenschutzerklärung",
        "privacy.lead": "Diese Seite erklärt, welche Daten beim Besuch der Website und bei der Kontaktaufnahme über E-Mail, Telegram oder WhatsApp verarbeitet werden können.",
        "privacy.section1.title": "1. Verantwortlicher",
        "privacy.section1.text": "Verantwortlicher: Denis Chernykh. Fragen zur Verarbeitung personenbezogener Daten senden Sie per E-Mail an:",
        "privacy.section2.title": "2. Welche Daten verarbeitet werden",
        "privacy.section2.item1": "technische Besuchsdaten, die GitHub Pages für Betrieb und Schutz des Dienstes verarbeiten kann: IP-Adresse, Datum und Uhrzeit der Anfrage, User Agent und angeforderte Seite;",
        "privacy.section2.item2": "Daten, die Sie bei der Kontaktaufnahme selbst senden: Name oder Nickname, E-Mail, Telefonnummer, Messenger-Konto, Inhalt der Nachricht und angehängte Materialien;",
        "privacy.section2.item3": "Korrespondenzdaten in E-Mail, Telegram oder WhatsApp nach dem Öffnen externer Links von der Website.",
        "privacy.section3.title": "3. Zwecke der Verarbeitung",
        "privacy.section3.item1": "Beantwortung Ihrer Anfrage und Besprechung des Projekts;",
        "privacy.section3.item2": "Vorbereitung eines Angebots, Einschätzung der Aufgabe und weitere Projektkommunikation;",
        "privacy.section3.item3": "Sicherstellung von Verfügbarkeit, Sicherheit und korrekter Funktion der Website.",
        "privacy.section4.title": "4. Rechtsgrundlagen",
        "privacy.section4.text": "Daten werden auf Grundlage Ihrer Anfrage, der Notwendigkeit einer Antwort und der Vorbereitung eines möglichen Vertrags sowie des berechtigten Interesses an der Sicherheit der Website verarbeitet. Wenn eine bestimmte Handlung eine Einwilligung erfordert, wird sie separat angefragt.",
        "privacy.section5.title": "5. Drittanbieter",
        "privacy.section5.text": "Die Website wird auf GitHub Pages gehostet. Beim Öffnen von Telegram, WhatsApp oder beim Senden einer E-Mail werden Daten von den jeweiligen Diensten nach deren Regeln verarbeitet. Schriften und Icons werden lokal geladen; externe Google Fonts und Icon-CDNs werden auf der Website nicht verwendet.",
        "privacy.section6.title": "6. Cookies und Analyse",
        "privacy.section6.text": "Die Website verwendet keine Cookies, Werbepixel, Anfrageformulare oder eingebaute Analyse. Browser-localStorage kann nur verwendet werden, um die gewählte Sprache der Oberfläche zu speichern.",
        "privacy.section7.title": "7. Speicherdauer",
        "privacy.section7.text": "Korrespondenz und Materialien zu Ihrer Anfrage werden so lange gespeichert, wie es für Antwort, Projektbesprechung, Erfüllung von Vereinbarungen und Schutz berechtigter Interessen nötig ist. Auf Anfrage können Daten gelöscht werden, sofern keine Pflicht oder vernünftige Notwendigkeit zur längeren Speicherung besteht.",
        "privacy.section8.title": "8. Ihre Rechte",
        "privacy.section8.text": "Sie können Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerruf einer Einwilligung verlangen, wenn die Verarbeitung auf Einwilligung beruht. Schreiben Sie dafür an",
        "privacy.section9.title": "9. Aktualisierungen",
        "privacy.section9.text": "Diese Datenschutzerklärung kann aktualisiert werden, wenn sich Website, Kontaktkanäle, Dienste oder rechtliche Anforderungen ändern. Die aktuelle Version ist auf dieser Seite veröffentlicht. Aktualisierungsdatum: 03.06.2026.",
        "privacy.footer.copyright": "© 2026 Denis Chernykh",
        "privacy.footer.home": "Startseite"
      }
    }
  };

  const normalizeLanguage = (value) => {
    if (!value) {
      return "";
    }

    const language = String(value).trim().toLowerCase().split("-")[0];
    return supportedLanguages.includes(language) ? language : "";
  };

  const readStoredLanguage = () => {
    try {
      return normalizeLanguage(window.localStorage.getItem(storageKey));
    } catch {
      return "";
    }
  };

  const writeStoredLanguage = (language) => {
    try {
      window.localStorage.setItem(storageKey, language);
    } catch {
      // Language switching still works without persistent storage.
    }
  };

  const detectBrowserLanguage = () => {
    const languages = Array.isArray(navigator.languages) && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];

    for (const language of languages) {
      const normalized = normalizeLanguage(language);
      if (normalized) {
        return normalized;
      }
    }

    return "";
  };

  const getInitialLanguage = () => {
    const params = new URLSearchParams(window.location.search);
    return normalizeLanguage(params.get("lang")) || readStoredLanguage() || detectBrowserLanguage() || "ru";
  };

  const getCurrentPage = () => document.documentElement.dataset.page || "home";

  const getDictionary = (language) => {
    const page = getCurrentPage();
    return {
      ...(shared[language] || shared.ru),
      ...(translations[page]?.[language] || translations[page]?.ru || {})
    };
  };

  const setMetaDescription = (description) => {
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) {
      meta.setAttribute("content", description);
    }
  };

  const updateLanguageAwareLinks = (language) => {
    document.querySelectorAll("[data-language-aware]").forEach((link) => {
      const originalHref = link.dataset.originalHref || link.getAttribute("href") || "";
      link.dataset.originalHref = originalHref;

      const [withoutHash, hash = ""] = originalHref.split("#");
      const [path] = withoutHash.split("?");
      link.setAttribute("href", `${path}?lang=${language}${hash ? `#${hash}` : ""}`);
    });
  };

  const updateUrlLanguage = (language) => {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  };

  const applyLanguage = (language, options = {}) => {
    const nextLanguage = normalizeLanguage(language) || "ru";
    const dictionary = getDictionary(nextLanguage);

    document.documentElement.lang = nextLanguage;
    document.documentElement.dataset.language = nextLanguage;

    if (dictionary["meta.title"]) {
      document.title = dictionary["meta.title"];
    }

    setMetaDescription(dictionary["meta.description"]);

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (key && dictionary[key]) {
        node.textContent = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
      const rules = node.dataset.i18nAttr.split(";");
      for (const rule of rules) {
        const [attribute, key] = rule.split(":");
        if (attribute && key && dictionary[key]) {
          node.setAttribute(attribute, dictionary[key]);
        }
      }
    });

    document.querySelectorAll("[data-i18n-lang]").forEach((button) => {
      const isActive = button.dataset.i18nLang === nextLanguage;
      button.setAttribute("aria-pressed", String(isActive));
    });

    updateLanguageAwareLinks(nextLanguage);

    if (options.persist !== false) {
      writeStoredLanguage(nextLanguage);
    }

    if (options.updateUrl) {
      updateUrlLanguage(nextLanguage);
    }
  };

  document.querySelectorAll("[data-i18n-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.i18nLang, { updateUrl: true });
    });
  });

  applyLanguage(getInitialLanguage(), { persist: false });

  window.portfolioI18n = {
    applyLanguage,
    supportedLanguages
  };
})();
