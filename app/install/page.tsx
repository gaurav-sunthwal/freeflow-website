import type { Metadata } from "next";
import Link from "next/link";
import { Article, Callout } from "../_components/Article";
import { CopyCommand } from "../_components/CopyCommand";
import { GITHUB, INSTALL_CMD, SITE_URL, UNINSTALL_CMD } from "../_components/site";

const path = "/install";
const title = "Install FreeFlow: Free Voice Typing for Mac";
const description =
  "Install FreeFlow, the free open-source voice typing app for Mac, with one Terminal command. Setup, updates, uninstall and troubleshooting.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Free & Open Source` },
  description,
  alternates: { canonical: path },
  openGraph: { type: "article", url: path, title, description },
  twitter: { card: "summary_large_image", title, description },
};

const steps: [string, string][] = [
  ["Open Terminal", "Press Command + Space, type Terminal and press Return."],
  ["Run the installer", `Paste the install command and press Return: ${INSTALL_CMD}`],
  ["Grant permissions", "When FreeFlow opens, allow Microphone, Accessibility and Speech Recognition in the Setup window."],
  ["Free up the fn key", "In System Settings → Keyboard, set “Press 🌐 key to” to Do Nothing."],
  ["Start dictating", "Click into any text field, hold fn, speak, and let go."],
];

const troubleshooting: [string, string][] = [
  [
    "Holding fn does nothing",
    "Open the menu-bar icon → Setup & Permissions. If Accessibility is already on, remove FreeFlow from System Settings → Privacy & Security → Accessibility, add it again and relaunch.",
  ],
  ["The emoji picker pops up", "Set System Settings → Keyboard → “Press 🌐 key to” → Do Nothing, or choose another hotkey in FreeFlow Settings."],
  ["Permissions reset after updating", "This happens once when moving from a version older than 1.1.0. After that, permissions are kept across updates."],
  ["“Developer tools are too old”", "Update Xcode or the Command Line Tools to version 26 or later through Software Update."],
  ["Corrections or Command Mode don't work", "Turn on Apple Intelligence in System Settings → Apple Intelligence & Siri."],
];

export default function Page() {
  return (
    <Article
      path={path}
      crumb="Install"
      eyebrow="Install guide"
      updated="2026-10-19"
      title={
        <>
          Install FreeFlow <span className="serif text-accent-ink">in one line.</span>
        </>
      }
      intro={<p>The installer downloads the source, builds FreeFlow on your Mac, moves it to Applications and opens it. It takes a minute or two.</p>}
      structuredData={[
        {
          "@type": "HowTo",
          name: "How to install FreeFlow on a Mac",
          description,
          totalTime: "PT3M",
          estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
          tool: [{ "@type": "HowToTool", name: "Terminal" }],
          step: steps.map(([name, text], i) => ({ "@type": "HowToStep", position: i + 1, name, text, url: `${SITE_URL}${path}#step-${i + 1}` })),
        },
      ]}
    >
      <Callout title="Requirements">
        <ul className="!mb-0">
          <li>A Mac with Apple silicon (M1 or newer)</li>
          <li>macOS 26 or later</li>
          <li>Apple&apos;s free developer tools. If they&apos;re missing, the installer opens the install window for you. Run it again when that finishes.</li>
          <li>Optional: Apple Intelligence turned on, for self-corrections and Command Mode</li>
        </ul>
      </Callout>

      <h2 id="install">Install with one command</h2>
      <p>Open Terminal, paste this and press Return:</p>
      <div className="not-prose my-5">
        <CopyCommand command={INSTALL_CMD} />
      </div>
      <p>
        Prefer to look first? The script is{" "}
        <a href={`${GITHUB}/blob/main/install.sh`} target="_blank" rel="noopener">
          install.sh on GitHub
        </a>
        . The temporary download is deleted when it finishes.
      </p>

      <h3>Or install from a clone</h3>
      <div className="not-prose my-4">
        <CopyCommand command={`git clone ${GITHUB}.git && cd freeflow && ./install.sh`} compact />
      </div>
      <p>Once it&apos;s installed you can delete the folder. The app in Applications is self-contained.</p>

      <h2 id="first-launch">First launch</h2>
      <ol>
        {steps.slice(2).map(([name, text], i) => (
          <li key={name} id={`step-${i + 3}`}>
            <strong>{name}.</strong> {text}
          </li>
        ))}
      </ol>
      <p>
        Optional: turn on <strong>Launch FreeFlow at login</strong> in FreeFlow → Settings. New to dictation? Read{" "}
        <Link href="/voice-typing-mac">our voice typing tips</Link>.
      </p>

      <h2 id="updates">Updates</h2>
      <p>
        FreeFlow updates itself. A few times a day it checks GitHub for a new release, builds it in the background, waits until you aren&apos;t dictating,
        then restarts as the new version. Your history, settings and permissions are kept.
      </p>
      <ul>
        <li>
          Check right away: menu-bar icon → <strong>Check for Updates…</strong>
        </li>
        <li>
          Turn auto-updates off: FreeFlow → <strong>Settings → Updates</strong>
        </li>
        <li>Versions older than 1.1.0 don&apos;t have the updater yet. Run the install command once more to get it.</li>
      </ul>

      <h2 id="uninstall">Uninstall</h2>
      <div className="not-prose my-4">
        <CopyCommand command={UNINSTALL_CMD} compact />
      </div>
      <p>
        This removes the app but keeps your history and settings. To delete everything, including history, dictionary, snippets, settings and permissions,
        add <code>--purge</code>:
      </p>
      <div className="not-prose my-4">
        <CopyCommand command={`${UNINSTALL_CMD} -s -- --purge`} compact />
      </div>

      <h2 id="troubleshooting">Troubleshooting</h2>
      <div className="not-prose overflow-hidden rounded-2xl border border-line bg-card">
        <table>
          <thead>
            <tr>
              <th className="w-[35%]">Problem</th>
              <th>Fix</th>
            </tr>
          </thead>
          <tbody>
            {troubleshooting.map(([p, f]) => (
              <tr key={p}>
                <td className="font-medium text-fg">{p}</td>
                <td>{f}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6">
        Still stuck?{" "}
        <a href={`${GITHUB}/issues`} target="_blank" rel="noopener">
          Open an issue on GitHub
        </a>
        .
      </p>
    </Article>
  );
}
