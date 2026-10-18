import type { Metadata } from "next";
import Link from "next/link";
import { Article, Callout, FaqList, faqLd } from "../_components/Article";
import { SITE_URL } from "../_components/site";

const path = "/voice-typing-mac";
const title = "Voice Typing on Mac: Dictate in Any App (2026 Guide)";
const description =
  "How to use voice typing on Mac: built-in Dictation vs FreeFlow, setup steps, voice commands and tips to write 3–4× faster than typing.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { type: "article", url: path, title, description },
  twitter: { card: "summary_large_image", title, description },
};

const faqs: [string, string][] = [
  [
    "How do I turn on voice typing on a Mac?",
    "For Apple's built-in option, open System Settings → Keyboard, turn on Dictation, then press the dictation shortcut in any text field. For voice typing with automatic clean-up, install a dictation app such as FreeFlow and hold the fn key while you speak.",
  ],
  [
    "What is the best free dictation app for Mac?",
    "Apple's built-in Dictation is free and good for short notes. For longer writing, FreeFlow is a free, open-source option that removes filler words, applies self-corrections, supports a custom dictionary and snippets, and lets you rewrite text by voice. It runs fully on-device.",
  ],
  [
    "Can I use speech to text on Mac offline?",
    "Yes. FreeFlow transcribes on your Mac and works offline after a one-time model download. Apple's Dictation also processes many languages on-device on Apple silicon Macs.",
  ],
  [
    "How fast is voice typing compared to typing?",
    "Most people type around 40 words per minute but speak at 130–160 words per minute, so dictation can be roughly 3–4 times faster for drafting text.",
  ],
  [
    "How do I add punctuation when dictating?",
    "With Apple Dictation you can say punctuation such as \"comma\" or \"period\", and newer macOS versions add some automatically. FreeFlow adds punctuation and capitals for you, and understands \"new line\" and \"new paragraph\".",
  ],
  [
    "Does voice typing work in every app on Mac?",
    "Both Apple Dictation and FreeFlow type into whatever text field is focused, so they work in Mail, Slack, Notion, VS Code, ChatGPT, Messages, browsers and most other apps.",
  ],
];

export default function Page() {
  return (
    <Article
      path={path}
      crumb="Voice typing on Mac"
      eyebrow="Guide"
      updated="2026-10-19"
      title={
        <>
          Voice typing on Mac: <span className="serif text-accent-ink">dictate in any app</span>
        </>
      }
      intro={
        <p>
          You can speak three to four times faster than you type. This guide covers the two ways to use speech-to-text on a Mac, how to set each up, and
          the habits that make dictation feel natural.
        </p>
      }
      structuredData={[
        {
          "@type": "Article",
          headline: title,
          description,
          datePublished: "2026-10-19",
          dateModified: "2026-10-19",
          mainEntityOfPage: `${SITE_URL}${path}`,
          image: `${SITE_URL}${path}/opengraph-image`,
          author: { "@id": `${SITE_URL}/#organization` },
          publisher: { "@id": `${SITE_URL}/#organization` },
        },
        faqLd(faqs),
      ]}
    >
      <Callout title="Quick answer">
        <p className="!mb-0">
          For quick notes, turn on Apple&apos;s built-in <strong>Dictation</strong> in System Settings → Keyboard. For writing emails, messages and AI
          prompts all day, use a dedicated app like <Link href="/">FreeFlow</Link>: hold <code>fn</code>, speak, and clean, punctuated text appears in any
          app. It&apos;s free and works offline.
        </p>
      </Callout>

      <h2 id="built-in">Option 1: Apple&apos;s built-in Dictation</h2>
      <p>Every Mac includes Dictation. To turn it on:</p>
      <ol>
        <li>Open <strong>System Settings → Keyboard</strong>.</li>
        <li>
          Under <strong>Dictation</strong>, switch it on and pick your language.
        </li>
        <li>Choose a shortcut, such as pressing the microphone key or Control twice.</li>
        <li>Click into a text field, press the shortcut and start talking. Press it again to stop.</li>
      </ol>
      <p>
        <strong>Good for:</strong> short replies, search boxes and quick notes. <strong>Limits:</strong> it types exactly what you say, including
        &ldquo;um&rdquo;, &ldquo;uh&rdquo; and false starts, it doesn&apos;t learn custom snippets, and it can&apos;t rewrite text you&apos;ve already written.
      </p>

      <h2 id="freeflow">Option 2: FreeFlow, free voice typing with clean-up</h2>
      <p>
        <Link href="/">FreeFlow</Link> is a free, open-source Mac app built for people who dictate a lot. Instead of a literal transcript, it gives you the
        text you meant:
      </p>
      <ul>
        <li>
          <strong>Hold-to-talk anywhere.</strong> Hold <code>fn</code>, speak, release. Double-tap for hands-free.
        </li>
        <li>
          <strong>Clean output.</strong> Filler words are removed and punctuation is added automatically.
        </li>
        <li>
          <strong>Self-corrections.</strong> Say &ldquo;actually no&rdquo;, &ldquo;scratch that&rdquo; or &ldquo;I mean&rdquo; and only the correction is kept.
        </li>
        <li>
          <strong>Dictionary and snippets.</strong> Teach it names and jargon. Say &ldquo;my calendar link&rdquo; and the full URL is typed.
        </li>
        <li>
          <strong>Command Mode.</strong> Select text and say &ldquo;make this shorter&rdquo; or &ldquo;turn this into bullets&rdquo;.
        </li>
        <li>
          <strong>Private.</strong> Speech recognition and AI clean-up run on your Mac. Nothing is uploaded.
        </li>
      </ul>
      <p>
        Setup takes about a minute. See the <Link href="/install">install guide</Link>.
      </p>

      <h2 id="compare">Built-in Dictation vs FreeFlow</h2>
      <div className="not-prose overflow-x-auto">
        <div className="min-w-[520px] overflow-hidden rounded-2xl border border-line bg-card">
          <table>
            <thead>
              <tr>
                <th />
                <th>Apple Dictation</th>
                <th className="bg-accent-soft">FreeFlow</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Price", "Free", "Free"],
                ["Works in any app", "Yes", "Yes"],
                ["Removes filler words", "No", "Yes"],
                ["Understands self-corrections", "No", "Yes"],
                ["Custom dictionary & snippets", "No", "Yes"],
                ["Rewrite text by voice", "No", "Yes (Command Mode)"],
                ["Per-app writing style", "No", "Yes"],
                ["Stats & history", "No", "Yes"],
                ["Open source", "No", "Yes (MIT)"],
              ].map(([k, a, b]) => (
                <tr key={k}>
                  <td className="font-medium text-fg">{k}</td>
                  <td>{a}</td>
                  <td className="bg-accent-soft font-medium text-fg">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h2 id="commands">Useful voice commands</h2>
      <p>These work in FreeFlow while you dictate:</p>
      <ul>
        <li>
          <strong>&ldquo;new line&rdquo;</strong> and <strong>&ldquo;new paragraph&rdquo;</strong> to format as you go
        </li>
        <li>
          <strong>&ldquo;scratch that&rdquo;</strong> to drop what you just said
        </li>
        <li>
          <strong>&ldquo;actually no…&rdquo;</strong> or <strong>&ldquo;I mean…&rdquo;</strong> to replace the last detail
        </li>
        <li>
          Your own <strong>snippet triggers</strong>, like &ldquo;my address&rdquo; or &ldquo;my calendar link&rdquo;
        </li>
        <li>
          In Command Mode: <strong>&ldquo;make this more formal&rdquo;</strong>, <strong>&ldquo;translate to Spanish&rdquo;</strong>,{" "}
          <strong>&ldquo;fix the grammar&rdquo;</strong>
        </li>
      </ul>

      <h2 id="tips">7 tips to dictate faster and more accurately</h2>
      <ol>
        <li>
          <strong>Think in sentences, not words.</strong> Say a whole thought, then pause. Accuracy improves with context.
        </li>
        <li>
          <strong>Don&apos;t slow down.</strong> Speak at a natural pace. Over-enunciating often makes recognition worse.
        </li>
        <li>
          <strong>Don&apos;t fix as you go.</strong> Let self-corrections handle mistakes, then edit once at the end.
        </li>
        <li>
          <strong>Teach it your words.</strong> Add names, product terms and acronyms to the dictionary once.
        </li>
        <li>
          <strong>Save repeat text as snippets.</strong> Email sign-offs, links and addresses are perfect candidates.
        </li>
        <li>
          <strong>Use a decent mic in noisy rooms.</strong> The built-in Mac mic is fine in quiet spaces. AirPods or a headset help in cafés.
        </li>
        <li>
          <strong>Start with low-stakes text.</strong> Chat messages and AI prompts are the easiest place to build the habit.
        </li>
      </ol>

      <h2 id="faq">Frequently asked questions</h2>
      <FaqList items={faqs} />
    </Article>
  );
}
