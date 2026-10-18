import type { Metadata } from "next";
import Link from "next/link";
import { Article, Callout, FaqList, faqLd } from "../_components/Article";
import { FACTS_CHECKED, GITHUB, SITE_URL } from "../_components/site";
import * as I from "../_components/icons";

const path = "/wispr-flow-alternative";
const title = "Free Wispr Flow Alternative for Mac — Open Source";
const description =
  "FreeFlow is a free, open-source Wispr Flow alternative for Mac: hold-to-talk dictation in any app, no word cap, no subscription, fully on-device.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { type: "article", url: path, title: "FreeFlow vs Wispr Flow — the free, open-source alternative", description },
  twitter: { card: "summary_large_image", title: "FreeFlow vs Wispr Flow — the free, open-source alternative", description },
};

type Cell = string | boolean;
const rows: [string, Cell, Cell][] = [
  ["Price", "Free forever", "Free plan, or Pro at $12/mo (annual) / $15/mo (monthly)"],
  ["Free plan word limit", "Unlimited", "2,000 words per week on desktop"],
  ["Where speech is transcribed", "On your Mac", "In the cloud (Wispr's servers)"],
  ["Works offline", true, false],
  ["Open source", "Yes, MIT license", false],
  ["Account required", false, true],
  ["Hold-to-talk in any app", true, true],
  ["Hands-free mode", true, true],
  ["Filler word removal & auto punctuation", true, true],
  ["Self-corrections (“actually no…”)", true, true],
  ["Personal dictionary", true, true],
  ["Snippets", true, true],
  ["Rewrite selected text by voice", "Command Mode", true],
  ["Per-app tone / styles", true, true],
  ["Bring your own local AI model", "Ollama, LM Studio, whisper.cpp", false],
  ["Languages", "25", "100+"],
  ["Platforms", "Mac (Apple silicon, macOS 26+)", "Mac, Windows, iPhone, Android"],
  ["Meeting notetaker", false, true],
  ["Team admin, SSO, shared dictionary", false, "Paid plans"],
];

const faqs: [string, string][] = [
  [
    "Is there a free version of Wispr Flow?",
    "Wispr Flow has a free plan limited to 2,000 words per week on desktop. If you want unlimited dictation without paying, FreeFlow is a free, open-source alternative for Mac with no word limit.",
  ],
  [
    "Is there an open-source Wispr Flow alternative?",
    "Yes. FreeFlow is MIT-licensed and the full source code is on GitHub. It offers hold-to-talk dictation in every Mac app, filler-word removal, self-corrections, a dictionary, snippets and voice editing (Command Mode).",
  ],
  [
    "Does Wispr Flow send my voice to the cloud?",
    "According to Wispr's privacy page, transcription always happens in the cloud, with audio sent to their servers over TLS and deleted after transcription unless cloud storage is turned on. FreeFlow instead transcribes on your Mac, so audio never leaves the device.",
  ],
  [
    "Can I use FreeFlow on Windows or iPhone?",
    "Not yet. FreeFlow is a native Mac app for Apple silicon running macOS 26 or later. If you need Windows, iPhone or Android, Wispr Flow supports those platforms.",
  ],
  [
    "How do I switch from Wispr Flow to FreeFlow?",
    "Install FreeFlow with one Terminal command, grant microphone and accessibility permissions, then re-add your custom words in the Dictionary tab and your saved phrases in Snippets. FreeFlow uses the fn key by default, the same as Wispr Flow, so the habit carries over. Quit Wispr Flow first so the two don't fight over the key.",
  ],
  [
    "Is FreeFlow affiliated with Wispr?",
    "No. FreeFlow is an independent open-source project. Wispr Flow is a product of Wispr and is mentioned here only for comparison.",
  ],
];

function Mark({ v }: { v: Cell }) {
  if (v === true) return <I.Check className="text-green" aria-label="Yes" />;
  if (v === false) return <I.X className="text-faint" aria-label="No" />;
  return <>{v}</>;
}

export default function Page() {
  return (
    <Article
      path={path}
      crumb="Wispr Flow alternative"
      eyebrow="Comparison"
      updated="2026-10-19"
      title={
        <>
          The free, open-source <span className="serif text-accent-ink">Wispr Flow alternative</span> for Mac
        </>
      }
      intro={
        <p>
          Like Wispr Flow, FreeFlow lets you hold a key, speak in any app and get clean, punctuated text. The differences: FreeFlow is free with no word cap,
          it&apos;s open source, and your voice is transcribed on your Mac instead of in the cloud.
        </p>
      }
      structuredData={[
        {
          "@type": "WebPage",
          "@id": `${SITE_URL}${path}`,
          name: title,
          description,
          about: [{ "@id": `${SITE_URL}/#software` }, { "@type": "SoftwareApplication", name: "Wispr Flow", url: "https://wisprflow.ai" }],
          dateModified: "2026-10-19",
        },
        faqLd(faqs),
      ]}
    >
      <Callout title="The short answer">
        <p className="!mb-0">
          If you dictate on a Mac and want <strong>unlimited, private, free</strong> voice typing, use FreeFlow. If you need Windows or mobile apps, 100+
          languages, a meeting notetaker or team admin tools, Wispr Flow is the better fit.
        </p>
      </Callout>

      <h2 id="comparison">FreeFlow vs Wispr Flow at a glance</h2>
      <div className="not-prose -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <div className="min-w-[620px] overflow-hidden rounded-2xl border border-line bg-card">
          <table>
            <thead>
              <tr>
                <th className="w-[36%]">Feature</th>
                <th className="bg-accent-soft">FreeFlow</th>
                <th>Wispr Flow</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, ff, wf]) => (
                <tr key={label}>
                  <td className="font-medium text-fg">{label}</td>
                  <td className="bg-accent-soft font-medium text-fg">
                    <Mark v={ff} />
                  </td>
                  <td>
                    <Mark v={wf} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="mt-3 text-sm text-faint">
        Wispr Flow details from its public{" "}
        <a href="https://wisprflow.ai/pricing" rel="nofollow noopener" target="_blank">
          pricing
        </a>{" "}
        and{" "}
        <a href="https://wisprflow.ai/privacy" rel="nofollow noopener" target="_blank">
          privacy
        </a>{" "}
        pages, checked {FACTS_CHECKED}. Prices and features change, so check there for the latest.
      </p>

      <h2 id="why-switch">Why people look for a Wispr Flow alternative</h2>
      <h3>1. The free plan runs out</h3>
      <p>
        Wispr Flow&apos;s free plan covers 2,000 words a week on desktop. If you dictate emails, messages and AI prompts all day, you can hit that by Tuesday.
        After that it&apos;s $12–15 a month. FreeFlow has no plans and no limits: every feature is free for everyone.
      </p>
      <h3>2. Your voice goes to the cloud</h3>
      <p>
        Wispr states that transcription &ldquo;always happens in the cloud.&rdquo; That&apos;s fine for many people, but not for anyone dictating client work,
        health details or code under NDA. FreeFlow runs speech recognition on your Mac with Whisper Turbo or Apple&apos;s SpeechAnalyzer. Audio is never
        uploaded or saved, and AI clean-up uses Apple&apos;s on-device models.
      </p>
      <h3>3. It needs an internet connection</h3>
      <p>Cloud transcription means no dictation on a plane, on bad hotel Wi-Fi or behind a strict firewall. FreeFlow works fully offline after a one-time model download.</p>
      <h3>4. You can&apos;t see the code</h3>
      <p>
        FreeFlow is <a href={GITHUB}>open source on GitHub</a> under the MIT license. You can check exactly what it does with your voice, change it, or build
        it yourself. In fact, the installer builds it from source on your Mac.
      </p>

      <h2 id="what-you-keep">What you keep when you switch</h2>
      <p>FreeFlow was built to feel familiar if you&apos;ve used Wispr Flow:</p>
      <ul>
        <li>
          <strong>Hold fn to talk</strong> in any text field, or double-tap for hands-free. You can also use Right Option, Command or Control.
        </li>
        <li>
          <strong>Clean text automatically.</strong> Filler words removed, punctuation and capitals added, &ldquo;new line&rdquo; and &ldquo;new
          paragraph&rdquo; obeyed.
        </li>
        <li>
          <strong>Self-corrections.</strong> &ldquo;Meet Tuesday, actually no, Wednesday&rdquo; becomes &ldquo;Meet Wednesday.&rdquo;
        </li>
        <li>
          <strong>Dictionary and snippets</strong> for names, jargon and text you type often.
        </li>
        <li>
          <strong>Command Mode.</strong> Select text, hold Control + fn and say &ldquo;make this more formal&rdquo; or &ldquo;translate to Hindi.&rdquo;
        </li>
        <li>
          <strong>Styles</strong> that match the tone of the app you&apos;re in: email, chat, docs or code.
        </li>
        <li>
          <strong>Insights</strong>: words dictated, words per minute, daily goals and streaks.
        </li>
      </ul>

      <h2 id="when-wispr">When Wispr Flow is the better choice</h2>
      <p>To be fair to Wispr Flow, it&apos;s the right pick if you:</p>
      <ul>
        <li>Use Windows, an iPhone or Android</li>
        <li>Dictate in languages beyond FreeFlow&apos;s 25</li>
        <li>Want an AI meeting notetaker in the same app</li>
        <li>Need team billing, SSO, HIPAA agreements or admin controls</li>
        <li>Want your dictation history synced across devices</li>
      </ul>

      <h2 id="switch">How to switch in two minutes</h2>
      <ol>
        <li>Quit Wispr Flow so both apps don&apos;t listen to the fn key.</li>
        <li>
          Open Terminal and run the one-line installer from the <Link href="/install">install guide</Link>.
        </li>
        <li>Grant Microphone, Accessibility and Speech Recognition in the Setup window.</li>
        <li>Re-add your custom words in Dictionary and your saved phrases in Snippets.</li>
        <li>Click into any text box, hold fn and speak.</li>
      </ol>

      <h2 id="faq">Frequently asked questions</h2>
      <FaqList items={faqs} />

      <p className="mt-10 text-sm text-faint">
        Wispr Flow is a product of Wispr. FreeFlow is an independent open-source project and is not affiliated with, endorsed by or sponsored by Wispr.
      </p>
    </Article>
  );
}
