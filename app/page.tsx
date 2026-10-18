import Image from "next/image";
import type { ReactNode } from "react";
import { Nav } from "./_components/Nav";
import { Reveal } from "./_components/Reveal";
import { HeroDemo } from "./_components/HeroDemo";
import { CleanupDemo } from "./_components/CleanupDemo";
import { SpeedRace } from "./_components/SpeedRace";
import { CommandDemo } from "./_components/CommandDemo";
import { StylesDemo } from "./_components/StylesDemo";
import { InsightsMock } from "./_components/InsightsMock";
import { CopyCommand } from "./_components/CopyCommand";
import { FlowBar } from "./_components/FlowBar";
import { Footer } from "./_components/Footer";
import Link from "next/link";
import { AUTHOR, GITHUB, INSTALL_CMD, SITE_URL, UNINSTALL_CMD, VERSION, jsonLd } from "./_components/site";
import * as I from "./_components/icons";

/* ───────────────────────── helpers ───────────────────────── */

function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`px-4 py-20 sm:px-6 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Heading({ eyebrow, title, sub, center = true }: { eyebrow?: string; title: ReactNode; sub?: ReactNode; center?: boolean }) {
  return (
    <Reveal className={`mb-12 sm:mb-16 ${center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}`}>
      {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
      <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-6xl">{title}</h2>
      {sub && <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">{sub}</p>}
    </Reveal>
  );
}

function GithubButton({ label = "Star on GitHub" }: { label?: string }) {
  return (
    <a
      href={GITHUB}
      target="_blank"
      rel="noopener"
      className="inline-flex h-12 items-center gap-2 rounded-full border border-line-strong bg-card px-6 text-[15px] font-medium transition hover:-translate-y-0.5 hover:shadow-[var(--shadow)]"
    >
      <I.Github width={18} height={18} /> {label}
    </a>
  );
}

function DownloadButton({ label = "Get FreeFlow — it's free" }: { label?: string }) {
  return (
    <a
      href="#download"
      className="inline-flex h-12 items-center gap-2 rounded-full bg-fg px-6 text-[15px] font-medium text-bg shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)] transition hover:-translate-y-0.5 hover:opacity-90"
    >
      <I.Apple width={18} height={18} /> {label}
    </a>
  );
}

/* ───────────────────────── content ───────────────────────── */

const apps = ["Slack", "Gmail", "Notion", "VS Code", "Cursor", "ChatGPT", "Claude", "Messages", "WhatsApp", "Linear", "Figma", "Google Docs", "Pages", "Outlook", "Terminal", "Discord", "Obsidian", "Xcode", "Safari", "Arc"];

const features: { icon: ReactNode; title: string; body: ReactNode; className?: string; extra?: ReactNode }[] = [
  {
    icon: <I.Mic />,
    title: "Push-to-talk",
    body: (
      <>
        Hold <span className="kbd">fn</span> anywhere, speak, release. Prefer another key? Use Right <span className="kbd">⌥</span>{" "}
        <span className="kbd">⌘</span> or <span className="kbd">⌃</span>.
      </>
    ),
  },
  {
    icon: <I.Hand />,
    title: "Hands-free mode",
    body: (
      <>
        Double-tap <span className="kbd">fn</span> to keep listening for long thoughts. Tap again to finish, <span className="kbd">esc</span> to cancel.
      </>
    ),
  },
  {
    icon: <I.Undo />,
    title: "Self-corrections",
    body: "“Tuesday — actually no, Wednesday” becomes “Wednesday.” Also understands “scratch that” and “I mean…”.",
  },
  {
    icon: <I.Sparkle />,
    title: "Clean text, automatically",
    body: "Filler words removed, punctuation and capitals added, “new line” and “new paragraph” obeyed.",
  },
  {
    icon: <I.Book />,
    title: "Personal dictionary",
    body: "Teach it names, brands and jargon. Words it mishears get auto-fixed every time.",
  },
  {
    icon: <I.Bolt />,
    title: "Snippets",
    body: "Say “my calendar link” or “my address” and the full text is typed for you.",
  },
  {
    icon: <I.Wand />,
    title: "Command Mode",
    body: (
      <>
        Select text, hold <span className="kbd">⌃</span> + <span className="kbd">fn</span>, say “make this formal” or “translate to Hindi”. Nothing selected? It writes new text.
      </>
    ),
  },
  {
    icon: <I.Layers />,
    title: "Styles per app",
    body: "Optional AI mode that adapts tone to where you're typing: email, chat, code or docs.",
  },
  {
    icon: <I.Chart />,
    title: "History & insights",
    body: "Searchable history, words dictated, words per minute, daily goal and day streak.",
  },
  {
    icon: <I.Globe />,
    title: "25 languages",
    body: "English, Hindi, Spanish, French, German, Japanese, Chinese, Tamil, Telugu, Bengali, Marathi and more.",
  },
  {
    icon: <I.Cpu />,
    title: "Choose your engine",
    body: "Whisper Turbo for best accuracy, Apple's engine for speed, or your own Whisper server. Bring a local LLM via Ollama or LM Studio.",
  },
  {
    icon: <I.Refresh />,
    title: "Updates itself",
    body: "Checks GitHub for new releases, builds them in the background and restarts when you're not dictating.",
  },
];

const languages = [
  "English", "हिन्दी", "Español", "Français", "Deutsch", "日本語", "中文", "தமிழ்", "తెలుగు", "বাংলা", "मराठी", "Português",
  "Italiano", "한국어", "Русский", "Nederlands", "Türkçe", "Polski", "Svenska", "ગુજરાતી", "ಕನ್ನಡ", "മലയാളം", "Tiếng Việt", "Bahasa", "العربية",
];

const compare: [string, string | boolean, string | boolean, string | boolean][] = [
  ["Price", "Free forever", "Monthly subscription", "Free"],
  ["Open source", true, false, false],
  ["Audio stays on your Mac", true, "Usually sent to the cloud", "Depends on language"],
  ["Removes filler words", true, true, false],
  ["Understands self-corrections", true, true, false],
  ["Command Mode (rewrite by voice)", true, true, false],
  ["Snippets & personal dictionary", true, true, false],
  ["Bring your own local model", true, false, false],
  ["Account required", "No", "Yes", "No"],
  ["Telemetry", "None", "Varies", "Varies"],
];

/** Plain-text answers so the same copy feeds both the page and the FAQPage structured data. */
const faqs: [string, string][] = [
  ["Is FreeFlow really free?", "Yes. Free forever, with no trial, no paid tier, no word limits and no ads. It's MIT-licensed open source, so you can read, change and share the code."],
  [
    "Is FreeFlow a free alternative to Wispr Flow?",
    "Yes. FreeFlow covers the same everyday dictation workflow on Mac: hold a key, speak in any app, and get clean text with filler words removed, self-corrections applied, a personal dictionary, snippets and voice commands. The difference is that FreeFlow is free with no weekly word cap, open source, and transcribes on your Mac instead of in the cloud.",
  ],
  [
    "Does it work in every app?",
    "Anywhere you can type: Slack, Gmail, Notion, VS Code, Cursor, ChatGPT, Messages, Terminal and more. FreeFlow types into the focused text field and restores your clipboard afterwards. No plugins needed.",
  ],
  [
    "Is my voice data private?",
    "Speech-to-text runs on your Mac. Audio is never uploaded or saved. AI corrections use Apple's on-device models. There's no analytics or telemetry, and the only network access is a one-time model download and update checks on GitHub.",
  ],
  [
    "Does FreeFlow work offline?",
    "Yes. After the one-time speech model download, dictation, clean-up and Command Mode all run without an internet connection.",
  ],
  [
    "Do I need an account?",
    "No. An optional account exists only if you want to back up your stats (word counts, streaks, goals) and settings such as your dictionary and snippets. Your dictated text and audio are never sent.",
  ],
  [
    "How is this different from built-in Mac dictation?",
    "FreeFlow cleans up as you speak: it drops filler words, applies your self-corrections, uses your dictionary and snippets, and can rewrite selected text by voice with Command Mode. It also works with one key in every app.",
  ],
  [
    "Which Macs are supported?",
    "A Mac with Apple silicon (M1 or newer) running macOS 26 or later. Turn on Apple Intelligence for self-corrections and Command Mode. Everything else works without it.",
  ],
  ["Does it support my language or accent?", "FreeFlow supports 25 languages, including English, Hindi, Spanish, French, German, Japanese, Chinese, Tamil, Telugu, Bengali and Marathi. The Whisper Turbo engine handles accents well, and you can add names and terms to your dictionary."],
  [
    "Can I use my own AI model?",
    "Yes. In Settings, point FreeFlow at a local whisper.cpp server for speech-to-text, or any OpenAI-compatible endpoint such as Ollama or LM Studio for clean-up.",
  ],
  ["Do I need a special microphone?", "No. Your Mac's built-in mic works great. You can pick any other mic in Settings."],
  [
    "How do I uninstall it?",
    "Run the uninstall command from the install page. It keeps your history and settings unless you add --purge, which deletes everything.",
  ],
];

/** Structured data for the product itself plus the FAQ on this page. */
const pageLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: "FreeFlow",
      alternateName: "FreeFlow voice typing",
      description:
        "Free, open-source voice typing app for Mac. Hold a key, speak in any app and get clean, punctuated text. On-device speech-to-text with filler-word removal, self-corrections, Command Mode, dictionary and snippets.",
      url: SITE_URL,
      image: `${SITE_URL}/opengraph-image`,
      applicationCategory: "UtilitiesApplication",
      applicationSubCategory: "Speech recognition / dictation",
      operatingSystem: "macOS 26 or later (Apple silicon)",
      softwareVersion: VERSION,
      downloadUrl: `${SITE_URL}/install`,
      installUrl: `${SITE_URL}/install`,
      license: "https://opensource.org/licenses/MIT",
      isAccessibleForFree: true,
      inLanguage: "en",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
      featureList: [
        "Push-to-talk dictation in any Mac app",
        "Hands-free mode",
        "Filler word removal and automatic punctuation",
        "Self-corrections (\"actually no\", \"scratch that\")",
        "Command Mode: rewrite selected text by voice",
        "Personal dictionary and snippets",
        "Per-app writing styles",
        "History, words-per-minute and streak insights",
        "25 languages",
        "On-device Whisper Turbo or Apple SpeechAnalyzer",
        "Bring your own local LLM (Ollama, LM Studio)",
        "Automatic updates",
      ],
      author: { "@type": "Person", name: AUTHOR.name, url: AUTHOR.url },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareSourceCode",
      name: "FreeFlow source code",
      codeRepository: GITHUB,
      programmingLanguage: "Swift",
      license: "https://opensource.org/licenses/MIT",
      targetProduct: { "@id": `${SITE_URL}/#software` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
  ],
};

/* ───────────────────────── page ───────────────────────── */

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(pageLd)} />
      {/* Announcement */}
      <a
        href="#updates"
        className="group flex items-center justify-center gap-2 bg-ink px-4 py-2.5 text-center text-[13px] text-ink-fg/80 transition hover:text-ink-fg"
      >
        <span className="rounded-full bg-[#8f80ff]/25 px-2 py-0.5 text-[11px] font-semibold text-[#c9c1ff]">New</span>
        <span>
          FreeFlow {VERSION} now updates itself. <span className="hidden sm:inline">Always free, always open source.</span>
        </span>
        <I.Arrow width={14} height={14} className="transition group-hover:translate-x-0.5" />
      </a>

      <Nav />

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24">
          <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener"
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-card/80 py-1.5 pl-1.5 pr-4 text-sm text-muted shadow-sm backdrop-blur transition hover:text-fg"
              >
                <span className="rounded-full bg-green-soft px-2.5 py-0.5 text-xs font-semibold text-green">100% free</span>
                Open source · MIT licensed
                <I.Arrow width={14} height={14} />
              </a>
              <h1 className="text-balance text-[3.4rem] font-semibold leading-[0.95] tracking-[-0.045em] sm:text-[6.5rem]">
                <span className="mb-5 block text-sm font-semibold uppercase tracking-[0.14em] text-muted sm:text-base">
                  Free voice typing for Mac
                </span>
                Don&apos;t type, <span className="serif text-accent-ink">just speak.</span>
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
                Hold a key, talk in any app, let go. FreeFlow turns your voice into clean, punctuated writing, right where your cursor is.{" "}
                <span className="text-fg">No account. No subscription. No cloud.</span>
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <DownloadButton />
                <GithubButton />
              </div>
              <p className="mt-5 text-sm text-faint">For Mac with Apple silicon · macOS 26+</p>
            </div>

            <Reveal delay={150} className="mt-16 sm:mt-20">
              <HeroDemo />
            </Reveal>
          </div>
        </section>

        {/* ── Trust strip + apps marquee ── */}
        <section className="border-y border-line bg-bg-2/50 py-10">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6">
            {[
              [<I.Heart key="h" />, "Free forever", "No trial, no paywall"],
              [<I.Code key="c" />, "Open source", "MIT license on GitHub"],
              [<I.Lock key="l" />, "Private by design", "Runs fully on your Mac"],
              [<I.Bolt key="b" />, "~4× faster", "than typing"],
            ].map(([icon, t, s]) => (
              <div key={t as string} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-card text-accent-ink ring-1 ring-line">{icon}</span>
                <div>
                  <div className="text-sm font-semibold">{t}</div>
                  <div className="text-xs text-muted">{s}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center text-xs font-medium uppercase tracking-[0.14em] text-faint">Works in every app you already use</div>
          <div className="relative mt-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
            <div className="marquee flex w-max gap-3">
              {[...apps, ...apps].map((a, n) => (
                <span key={n} className="rounded-full border border-line bg-card px-4 py-2 text-sm font-medium text-muted" aria-hidden={n >= apps.length}>
                  {a}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Speed ── */}
        <Section>
          <Heading
            eyebrow="Speed"
            title={
              <>
                4× faster <span className="serif text-accent-ink">than typing.</span>
              </>
            }
            sub="Most people type around 40 words a minute but speak at 150 or more. FreeFlow lets you write at the speed you think."
          />
          <Reveal>
            <SpeedRace />
          </Reveal>
        </Section>

        {/* ── Cleanup demo ── */}
        <Section id="demo" className="bg-bg-2/50">
          <Heading
            eyebrow="Speak naturally"
            title={
              <>
                Ramble freely. <span className="serif text-accent-ink">Read it polished.</span>
              </>
            }
            sub="Pause, restart, change your mind mid-sentence. FreeFlow keeps what you meant and drops the rest."
          />
          <Reveal>
            <CleanupDemo />
          </Reveal>
        </Section>

        {/* ── How it works ── */}
        <Section id="how">
          <Heading
            eyebrow="How it works"
            title={
              <>
                Three steps. <span className="serif text-accent-ink">Zero learning curve.</span>
              </>
            }
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Hold fn",
                d: "Click into any text box, in any app, and hold the fn key (or a hotkey you choose).",
                v: <span className="kbd !h-14 !min-w-20 !rounded-2xl !border-b-4 !text-lg">fn</span>,
              },
              {
                n: "02",
                t: "Speak",
                d: "Talk like you normally would. The Flow bar shows a live preview as you go.",
                v: <FlowBar state="listening" label="Listening…" />,
              },
              {
                n: "03",
                t: "Let go",
                d: "Clean, punctuated text appears at your cursor. Your clipboard is left untouched.",
                v: (
                  <span className="rounded-xl bg-bg px-4 py-2.5 text-sm ring-1 ring-line">
                    Sounds good, see you at 3.<span className="caret" />
                  </span>
                ),
              },
            ].map((s, n) => (
              <Reveal key={s.n} delay={n * 100}>
                <div className="card flex h-full flex-col p-7">
                  <div className="flex h-28 items-center justify-center rounded-2xl bg-bg-2 ring-1 ring-line">{s.v}</div>
                  <div className="mt-6 font-mono text-xs text-accent-ink">{s.n}</div>
                  <h3 className="mt-1 text-xl font-semibold tracking-tight">{s.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ── Features grid ── */}
        <Section id="features" className="bg-bg-2/50">
          <Heading
            eyebrow="Everything included"
            title={
              <>
                All the features. <span className="serif text-accent-ink">None of the bills.</span>
              </>
            }
            sub="Every feature you'd expect from a paid dictation app, free for everyone. No “Pro” plan, no word limits."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, n) => (
              <Reveal key={f.title} delay={(n % 3) * 80}>
                <div className="card group h-full p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-ink transition group-hover:scale-105">{f.icon}</span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{f.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ── Command Mode + Styles ── */}
        <Section>
          <Heading
            eyebrow="AI that stays on your Mac"
            title={
              <>
                Edit by voice. <span className="serif text-accent-ink">Sound like you.</span>
              </>
            }
            sub="Rewrite selected text by just asking, and let FreeFlow match the tone of the app you're in. Powered by Apple's on-device models, or your own local LLM."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="mb-4">
                <h3 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
                  <I.Wand className="text-amber" /> Command Mode
                </h3>
                <p className="mt-1 text-[15px] text-muted">Select text, say what to change. Try it:</p>
              </div>
              <CommandDemo />
            </Reveal>
            <Reveal delay={120}>
              <div className="mb-4">
                <h3 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
                  <I.Layers className="text-accent-ink" /> Styles
                </h3>
                <p className="mt-1 text-[15px] text-muted">Same words, the right tone for each app:</p>
              </div>
              <StylesDemo />
            </Reveal>
          </div>
        </Section>

        {/* ── Insights ── */}
        <Section className="bg-bg-2/50">
          <div className="grid items-center gap-12 lg:grid-cols-2 [&>*]:min-w-0">
            <div>
              <Heading
                center={false}
                eyebrow="Insights"
                title={
                  <>
                    Watch your words <span className="serif text-accent-ink">add up.</span>
                  </>
                }
                sub="A private dashboard of how you dictate: words per minute, daily goals, streaks, your most active hours, and which filler words you say most."
              />
              <Reveal>
                <ul className="space-y-3 text-[15px]">
                  {["Searchable history of every dictation", "Activity heatmap and day streaks", "Set a daily word goal", "Click a filler word to always remove it"].map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-soft text-green">
                        <I.Check width={14} height={14} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <InsightsMock />
            </Reveal>
          </div>
        </Section>

        {/* ── Languages ── */}
        <Section>
          <Heading
            eyebrow="Multilingual"
            title={
              <>
                Speak in <span className="serif text-accent-ink">your language.</span>
              </>
            }
            sub="25 languages, including Hindi, Tamil, Telugu, Bengali and Marathi. Command Mode can even translate as you go."
          />
          <Reveal>
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2.5">
              {languages.map((l) => (
                <span key={l} className="rounded-full border border-line bg-card px-4 py-2 text-[15px] shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:text-accent-ink">
                  {l}
                </span>
              ))}
            </div>
          </Reveal>
        </Section>

        {/* ── Privacy ── */}
        <section id="privacy" className="px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-ink px-6 py-16 text-ink-fg sm:px-14 sm:py-20">
            <Reveal className="mx-auto max-w-3xl text-center">
              <div className="eyebrow mb-4 !text-[#a99dff]">Privacy</div>
              <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-6xl">
                Your voice <span className="serif text-[#a99dff]">stays on your Mac.</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/60">
                Every step happens on your device. No audio is uploaded or saved. No analytics. No telemetry. Not even an account.
              </p>
            </Reveal>

            {/* Pipeline */}
            <Reveal delay={100} className="mt-14">
              <div className="relative rounded-3xl border border-dashed border-white/20 p-5 sm:p-8">
                <span className="absolute -top-3 left-6 rounded-full bg-ink px-3 text-xs font-semibold uppercase tracking-wider text-white/50">Your Mac</span>
                <div className="grid gap-3 md:grid-cols-5">
                  {[
                    ["Hold fn", "Hotkey starts recording"],
                    ["Microphone", "Audio stays in memory"],
                    ["Speech-to-text", "Whisper Turbo or Apple, on-device"],
                    ["Clean-up", "Rules + on-device AI only when needed"],
                    ["Typed in", "Pasted at cursor, clipboard restored"],
                  ].map(([t, d], n) => (
                    <div key={t} className="relative rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10">
                      <div className="font-mono text-[11px] text-[#a99dff]">0{n + 1}</div>
                      <div className="mt-1 font-semibold">{t}</div>
                      <div className="mt-1 text-sm text-white/55">{d}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-3 text-sm text-white/50">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
                  <path d="M7 18h10.5a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.6 9.1 4.5 4.5 0 0 0 7 18Z" />
                  <path d="M3 3l18 18" stroke="#f06b7c" />
                </svg>
                Nothing goes to the cloud.
              </div>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {[
                ["No audio uploaded", "Speech recognition runs locally. Recordings are discarded the moment text is ready."],
                ["No tracking", "Zero analytics or telemetry. The only network calls are a one-time model download and update checks. Optional stats backup is off by default."],
                ["Read every line", "It's open source, so you don't have to take our word for it. Audit the code yourself."],
              ].map(([t, d], n) => (
                <Reveal key={t} delay={n * 80}>
                  <div className="flex gap-3">
                    <I.Lock className="mt-0.5 shrink-0 text-[#3ccf7c]" />
                    <div>
                      <div className="font-semibold">{t}</div>
                      <p className="mt-1 text-sm leading-relaxed text-white/55">{d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Comparison ── */}
        <Section className="!pt-4">
          <Heading
            eyebrow="Compare"
            title={
              <>
                Why pay for <span className="serif text-accent-ink">your own voice?</span>
              </>
            }
          />
          <Reveal>
            <div className="card overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-[15px]">
                <thead>
                  <tr className="border-b border-line">
                    <th className="p-5 font-medium text-muted" />
                    <th className="bg-accent-soft p-5">
                      <span className="flex items-center gap-2 font-semibold">
                        <Image src="/icon.png" alt="" width={22} height={22} className="rounded-md" /> FreeFlow
                      </span>
                    </th>
                    <th className="p-5 font-medium text-muted">Paid cloud dictation apps</th>
                    <th className="p-5 font-medium text-muted">Built-in dictation</th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map(([row, ...cols]) => (
                    <tr key={row} className="border-b border-line last:border-0">
                      <td className="p-5 font-medium">{row}</td>
                      {cols.map((c, n) => (
                        <td key={n} className={`p-5 ${n === 0 ? "bg-accent-soft font-medium" : "text-muted"}`}>
                          {c === true ? (
                            <I.Check className="text-green" />
                          ) : c === false ? (
                            <I.X className="text-faint" />
                          ) : (
                            c
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-center text-[15px] text-muted">
              Looking for a free Wispr Flow alternative?{" "}
              <Link href="/wispr-flow-alternative" className="font-medium text-accent-ink underline-offset-4 hover:underline">
                See the full FreeFlow vs Wispr Flow comparison →
              </Link>
            </p>
          </Reveal>
        </Section>

        {/* ── Open source ── */}
        <Section id="open-source" className="bg-bg-2/50">
          <div className="grid items-center gap-12 lg:grid-cols-2 [&>*]:min-w-0">
            <div>
              <Heading
                center={false}
                eyebrow="Open source"
                title={
                  <>
                    Built in the open. <span className="serif text-accent-ink">Owned by everyone.</span>
                  </>
                }
                sub="FreeFlow is MIT-licensed. Read the code, open an issue, suggest a feature, or send a pull request. Fork it and make it yours."
              />
              <Reveal className="flex flex-wrap gap-3">
                <GithubButton label="View source on GitHub" />
                <a
                  href={`${GITHUB}/issues`}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex h-12 items-center gap-2 rounded-full px-5 text-[15px] font-medium text-muted transition hover:text-fg"
                >
                  Report an issue <I.Arrow width={16} height={16} />
                </a>
              </Reveal>
              <Reveal className="mt-10 flex flex-wrap gap-2">
                {["Swift", "SwiftUI", "whisper.cpp", "Apple SpeechAnalyzer", "Foundation Models", "Metal"].map((t) => (
                  <span key={t} className="rounded-lg bg-card px-3 py-1.5 font-mono text-xs text-muted ring-1 ring-line">
                    {t}
                  </span>
                ))}
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="overflow-hidden rounded-[22px] bg-ink text-ink-fg shadow-[var(--shadow-lg)] ring-1 ring-white/10">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                  <span className="ml-3 font-mono text-xs text-white/40">freeflow — zsh</span>
                </div>
                <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-6 text-white/75 [scrollbar-width:none]">
                  <span className="text-white/35"># the whole pipeline, on your Mac</span>
                  {"\n"}hold fn ──► CGEventTap ──► AVAudioEngine
                  {"\n"}        ──► <span className="text-[#a99dff]">SpeechAnalyzer / Whisper</span>
                  {"\n"}        ──► rules: fillers, &quot;scratch that&quot;,
                  {"\n"}            snippets, dictionary
                  {"\n"}        ──► <span className="text-[#f2a446]">on-device LLM</span> (only if needed)
                  {"\n"}        ──► <span className="text-[#3ccf7c]">⌘V into the focused app</span>
                  {"\n\n"}<span className="text-white/35"># try the text pipeline yourself</span>
                  {"\n"}<span className="text-[#8f80ff]">$</span> FreeFlow --process &quot;Send it to John, I mean Sarah.&quot;
                  {"\n"}<span className="text-[#3ccf7c]">Send it to Sarah.</span>
                </pre>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* ── Download ── */}
        <Section id="download">
          <Heading
            eyebrow="Download"
            title={
              <>
                Install in <span className="serif text-accent-ink">one line.</span>
              </>
            }
            sub="Open Terminal, paste this and press Return. It builds FreeFlow on your Mac, installs it to Applications and opens it."
          />
          <Reveal className="mx-auto max-w-3xl">
            <CopyCommand command={INSTALL_CMD} />
            <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
              {["Apple silicon (M1 or newer)", "macOS 26 or later", "Free Apple developer tools (installer helps)"].map((r) => (
                <span key={r} className="flex items-center gap-1.5">
                  <I.Check width={15} height={15} className="text-green" /> {r}
                </span>
              ))}
            </div>
            <p className="mt-4 text-center text-sm text-muted">
              Step-by-step help and troubleshooting:{" "}
              <Link href="/install" className="font-medium text-accent-ink underline-offset-4 hover:underline">
                full install guide
              </Link>
            </p>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-3">
            {[
              ["Grant permissions", "Allow Microphone, Accessibility and Speech Recognition in the Setup window."],
              [
                "Free up the fn key",
                <>
                  In System Settings → Keyboard, set <b className="font-medium text-fg">“Press 🌐 key to”</b> to <b className="font-medium text-fg">Do Nothing</b>.
                </>,
              ],
              [
                "Start talking",
                <>
                  Click any text box, hold <span className="kbd">fn</span>, speak and let go. That&apos;s it.
                </>,
              ],
            ].map(([t, d], n) => (
              <Reveal key={t as string} delay={n * 80}>
                <div className="card h-full p-6">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-fg text-sm font-semibold text-bg">{n + 1}</span>
                  <h3 className="mt-4 font-semibold">{t}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-10 max-w-5xl">
            <div id="updates" className="grid gap-4 md:grid-cols-2 [&>*]:min-w-0">
              <div className="rounded-2xl border border-line p-6">
                <div className="flex items-center gap-2 font-semibold">
                  <I.Refresh width={18} height={18} className="text-accent-ink" /> Automatic updates
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  FreeFlow checks GitHub for new releases a few times a day, builds them in the background and restarts when you&apos;re not dictating.
                  Your history, settings and permissions are kept.
                </p>
              </div>
              <div className="rounded-2xl border border-line p-6">
                <div className="flex items-center gap-2 font-semibold">
                  <I.Terminal width={18} height={18} className="text-muted" /> Uninstall anytime
                </div>
                <p className="mt-2 mb-3 text-[15px] text-muted">Removes the app and keeps your data. Add --purge to delete everything.</p>
                <CopyCommand command={UNINSTALL_CMD} compact />
              </div>
            </div>
          </Reveal>
        </Section>

        {/* ── FAQ ── */}
        <Section id="faq" className="bg-bg-2/50">
          <Heading
            eyebrow="FAQ"
            title={
              <>
                Good <span className="serif text-accent-ink">questions.</span>
              </>
            }
          />
          <Reveal className="mx-auto max-w-3xl">
            <div className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-card">
              {faqs.map(([q, a]) => (
                <details key={q} className="group">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 text-[17px] font-medium transition hover:bg-fg/[0.02]">
                    {q}
                    <I.Plus className="faq-icon shrink-0 text-muted transition-transform duration-300" />
                  </summary>
                  <div className="px-6 pb-6 text-[15px] leading-relaxed text-muted">{a}</div>
                </details>
              ))}
            </div>
          </Reveal>
        </Section>

        {/* ── Final CTA ── */}
        <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-36">
          <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />
          <div className="glow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2" />
          <Reveal className="mx-auto max-w-3xl text-center">
            <Image src="/icon.png" alt="FreeFlow" width={88} height={88} className="mx-auto rounded-[22px] shadow-[var(--shadow-lg)]" />
            <h2 className="mt-10 text-balance text-5xl font-semibold leading-[1] tracking-[-0.04em] sm:text-7xl">
              You have a way with words. <span className="serif text-accent-ink">Now just say them.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted">Free forever. Open source. Private by design. Get started in under a minute.</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <DownloadButton label="Get FreeFlow free" />
              <GithubButton />
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
