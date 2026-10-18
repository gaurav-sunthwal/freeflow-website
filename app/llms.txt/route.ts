import { SITE_URL } from "../_components/site";

/** llms.txt: a plain-text summary for AI assistants and AI search engines. */
const body = `# FreeFlow

> FreeFlow is a free, open-source (MIT) voice typing app for Mac. Hold the fn key, speak in any app, and release: clean, punctuated text is typed at your cursor. Speech-to-text runs on-device (Whisper Turbo or Apple SpeechAnalyzer), audio is never uploaded, and no account or subscription is needed. It is a free alternative to Wispr Flow for Mac.

Key facts:
- Price: free forever, no word limits, no paid tier
- License: MIT, source at https://github.com/gaurav-sunthwal/freeflow
- Platform: Mac with Apple silicon (M1 or newer), macOS 26 or later
- Privacy: on-device transcription and AI clean-up, no telemetry, works offline after a one-time model download
- Features: push-to-talk and hands-free dictation, filler-word removal, automatic punctuation, self-corrections ("actually no", "scratch that"), personal dictionary, snippets, Command Mode (rewrite selected text by voice), per-app styles, history and insights, 25 languages, bring-your-own local model (whisper.cpp, Ollama, LM Studio), automatic updates
- Install: curl -fsSL https://raw.githubusercontent.com/gaurav-sunthwal/freeflow/main/install.sh | bash

## Pages

- [Home](${SITE_URL}/): overview, demos, features and FAQ
- [Free Wispr Flow alternative](${SITE_URL}/wispr-flow-alternative): FreeFlow vs Wispr Flow comparison
- [Voice typing on Mac](${SITE_URL}/voice-typing-mac): guide to dictation on macOS, built-in Dictation vs FreeFlow
- [Install guide](${SITE_URL}/install): requirements, install, updates, uninstall, troubleshooting
- [Privacy](${SITE_URL}/privacy): exactly what data the app and website handle

## Source

- [GitHub repository](https://github.com/gaurav-sunthwal/freeflow)
`;

export function GET() {
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
