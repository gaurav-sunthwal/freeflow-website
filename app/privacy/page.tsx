import type { Metadata } from "next";
import { Article, Callout } from "../_components/Article";
import { GITHUB } from "../_components/site";

const path = "/privacy";
const title = "Privacy Policy — Your Voice Stays on Your Mac";
const description =
  "How FreeFlow handles your data: on-device speech-to-text, audio never uploaded or saved, no telemetry. The optional account only backs up stats.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { type: "article", url: path, title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function Page() {
  return (
    <Article
      path={path}
      crumb="Privacy"
      eyebrow="Privacy"
      updated="2026-10-19"
      title={
        <>
          Your voice <span className="serif text-accent-ink">stays on your Mac.</span>
        </>
      }
      intro={<p>FreeFlow is built so there&apos;s very little to say here. This page explains exactly what the app and this website do with your data.</p>}
    >
      <Callout title="In short">
        <ul className="!mb-0">
          <li>Speech recognition and AI clean-up run on your Mac.</li>
          <li>Audio is never uploaded or saved.</li>
          <li>No analytics, telemetry, ads or tracking.</li>
          <li>No account needed. The optional account only backs up stats and settings, never what you say.</li>
        </ul>
      </Callout>

      <h2 id="app">The FreeFlow app</h2>
      <h3>Your voice and text</h3>
      <p>
        When you hold the hotkey, FreeFlow records from your microphone into memory and transcribes it on-device with Whisper Turbo or Apple&apos;s
        SpeechAnalyzer. Self-corrections and Command Mode use Apple&apos;s on-device Foundation Models. The audio is discarded once the text is ready.
      </p>
      <p>
        Your dictation history is stored only on your Mac, at <code>~/Library/Application Support/FreeFlow/history.json</code>. You can delete it at any
        time, or remove everything with the uninstaller&apos;s <code>--purge</code> option.
      </p>

      <h3>Network access</h3>
      <p>The app connects to the internet only to:</p>
      <ul>
        <li>download speech models once: Whisper Turbo from Hugging Face&apos;s whisper.cpp repository, or Apple&apos;s language assets from Apple</li>
        <li>check GitHub for updates a few times a day (you can turn this off in Settings → Updates)</li>
        <li>back up your stats, if and only if you sign in to the optional account</li>
      </ul>
      <p>
        If you point FreeFlow at your own Whisper server or an OpenAI-compatible AI endpoint in Settings, your audio or text goes to the server you chose.
        That&apos;s off by default.
      </p>

      <h3>Clipboard</h3>
      <p>
        To type into other apps, FreeFlow briefly places the text on the clipboard and pastes it. It saves your clipboard first and restores it right
        after.
      </p>

      <h2 id="account">The optional account</h2>
      <p>You never need an account to use FreeFlow. If you create one to back up your progress, we store:</p>
      <ul>
        <li>your name and email address</li>
        <li>your password as a salted scrypt hash (we never store the password itself)</li>
        <li>
          aggregate stats: total words, dictation count and time, daily word counts, filler-word counts and your daily goal
        </li>
        <li>settings: whether filler removal is on, and your dictionary and snippets</li>
      </ul>
      <p>
        <strong>We never receive your dictated text or audio.</strong> You can delete your account and all of its data from the Account screen in FreeFlow at any
        time. Deletion is immediate and permanent.
      </p>

      <h2 id="website">This website</h2>
      <p>
        This site sets no cookies and runs no analytics or tracking scripts. Like any website, our hosting provider may keep standard server logs (such as
        IP address and browser type) for security and reliability.
      </p>

      <h2 id="open-source">Verify it yourself</h2>
      <p>
        FreeFlow is open source, so every claim on this page can be checked in the{" "}
        <a href={GITHUB} target="_blank" rel="noopener">
          source code on GitHub
        </a>
        . Questions or concerns? Please{" "}
        <a href={`${GITHUB}/issues`} target="_blank" rel="noopener">
          open an issue
        </a>
        .
      </p>
    </Article>
  );
}
