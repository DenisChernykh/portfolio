import { readFile } from "node:fs/promises";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const privacy = await readFile(new URL("../privacy.html", import.meta.url), "utf8");
const favicon = await readFile(new URL("../assets/favicon.svg", import.meta.url), "utf8");
const i18n = await readFile(new URL("../assets/i18n.js", import.meta.url), "utf8");

const requiredText = [
  "Frontend, AI и автоматизация в одном рабочем контуре",
  "Запускаю страницы, интерфейсы и автоматизацию",
  "Собираю интерфейсы, которые выглядят живыми",
  "Верстка и запуск",
  "AI-усиление",
  "Автоматизация процессов",
  "Polish интерфейсов",
  "Как пойдет работа",
  "Разбираю задачу",
  "Проектирую рабочий контур",
  "Собираю и проверяю",
  "AI workflow",
  "Обо мне",
  "Выбери удобный способ связи",
  "Политика конфиденциальности",
  "не является публичной офертой",
  "Email",
  "WhatsApp",
  "Telegram"
];

for (const text of requiredText) {
  if (!html.includes(text)) {
    throw new Error(`Missing required text: ${text}`);
  }
}

const telegramLinks = [...html.matchAll(/href="https:\/\/t\.me\/[^"]+"/g)];
if (telegramLinks.length < 2) {
  throw new Error(`Expected at least 2 Telegram links, found ${telegramLinks.length}`);
}

for (const link of telegramLinks) {
  if (link[0] !== 'href="https://t.me/ChDenis"') {
    throw new Error(`Unexpected Telegram link: ${link[0]}`);
  }
}

const mailLinks = [...html.matchAll(/href="mailto:[^"]+"/g)];
if (mailLinks.length < 2) {
  throw new Error(`Expected at least 2 email links, found ${mailLinks.length}`);
}

for (const link of mailLinks) {
  if (link[0] !== 'href="mailto:chernykh.d.o@yandex.com"') {
    throw new Error(`Unexpected email link: ${link[0]}`);
  }
}

const whatsappLinks = [...html.matchAll(/href="https:\/\/wa\.me\/[^"]+"/g)];
if (whatsappLinks.length < 2) {
  throw new Error(`Expected at least 2 WhatsApp links, found ${whatsappLinks.length}`);
}

for (const link of whatsappLinks) {
  if (link[0] !== 'href="https://wa.me/79501971004"') {
    throw new Error(`Unexpected WhatsApp link: ${link[0]}`);
  }
}

if (html.includes("denischernykh")) {
  throw new Error("Old Telegram username should be replaced");
}

for (const anchor of ["#services", "#process", "#workflow", "#contact"]) {
  if (!html.includes(`href="${anchor}"`)) {
    throw new Error(`Missing navigation anchor: ${anchor}`);
  }
}

if (!html.includes('href="privacy.html"')) {
  throw new Error("Missing privacy policy link");
}

for (const page of [
  { name: "home", content: html },
  { name: "privacy", content: privacy }
]) {
  for (const snippet of [
    'data-page=',
    'class="language-switcher"',
    'data-i18n-lang="ru"',
    'data-i18n-lang="en"',
    'data-i18n-lang="de"',
    'data-i18n="languageSwitcher.label"',
    'src="assets/i18n.js"'
  ]) {
    if (!page.content.includes(snippet)) {
      throw new Error(`Missing i18n snippet on ${page.name} page: ${snippet}`);
    }
  }
}

for (const snippet of [
  "const supportedLanguages = [\"ru\", \"en\", \"de\"]",
  "portfolio-language",
  "navigator.languages",
  "URLSearchParams",
  "applyLanguage",
  "document.documentElement.lang",
  "document.title",
  "meta[name=\"description\"]"
]) {
  if (!i18n.includes(snippet)) {
    throw new Error(`Missing i18n implementation snippet: ${snippet}`);
  }
}

for (const lang of ["ru", "en", "de"]) {
  for (const page of ["home", "privacy"]) {
    if (!i18n.includes(`${page}: {`) || !i18n.includes(`${lang}: {`)) {
      throw new Error(`Missing ${lang} translations for ${page}`);
    }
  }
}

const requiredSnippets = [
  "@font-face",
  'url("assets/fonts/Manrope-wght.ttf")',
  'url("assets/fonts/Unbounded-wght.ttf")',
  "Unbounded",
  "Manrope",
  'src="assets/ai-workflow-hero.png"',
  'rel="icon"',
  'href="assets/favicon.svg"',
  'src="assets/vendor/lucide.min.js"',
  'alt="Абстрактная AI workflow сцена',
  "@keyframes heroReveal",
  "prefers-reduced-motion",
  "IntersectionObserver",
  "data-reveal"
];

for (const snippet of requiredSnippets) {
  if (!html.includes(snippet)) {
    throw new Error(`Missing required implementation snippet: ${snippet}`);
  }
}

for (const blockedSnippet of ["fonts.googleapis.com", "fonts.gstatic.com", "unpkg.com"]) {
  if (html.includes(blockedSnippet)) {
    throw new Error(`External browser dependency should be local: ${blockedSnippet}`);
  }

  if (privacy.includes(blockedSnippet)) {
    throw new Error(`External browser dependency should be local in privacy page: ${blockedSnippet}`);
  }
}

for (const text of [
  "Политика конфиденциальности",
  "Оператор: Денис Черных",
  "GitHub Pages",
  "Telegram",
  "WhatsApp",
  "cookies",
  "Дата обновления: 03.06.2026"
]) {
  if (!privacy.includes(text)) {
    throw new Error(`Missing privacy page text: ${text}`);
  }
}

for (const assetPath of [
  "../assets/fonts/Manrope-wght.ttf",
  "../assets/fonts/Unbounded-wght.ttf",
  "../assets/fonts/OFL-Manrope.txt",
  "../assets/fonts/OFL-Unbounded.txt",
  "../assets/vendor/lucide.min.js",
  "../assets/vendor/LICENSE-lucide.txt"
]) {
  await readFile(new URL(assetPath, import.meta.url));
}

for (const snippet of ['viewBox="0 0 64 64"', "DC", "#d8ff3e", "<title>"]) {
  if (!favicon.includes(snippet)) {
    throw new Error(`Missing required favicon snippet: ${snippet}`);
  }
}

if ((html.match(/class="service-item"/g) || []).length !== 4) {
  throw new Error("Expected exactly 4 service items");
}

if ((html.match(/class="process-step"/g) || []).length !== 3) {
  throw new Error("Expected exactly 3 process steps");
}

if (html.includes("С чем я могу помочь")) {
  throw new Error("Old services heading should be replaced");
}

console.log("portfolio project content check passed");
