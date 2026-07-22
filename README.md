<p align="center">
  <a href="https://postqueen.ai">
    <img src=".github/assets/header.svg" width="840" alt="PostQueen n8n node" />
  </a>
</p>

<h3 align="center">🆕&nbsp; NEW: the PostQueen <a href="https://postqueen.ai/agent">Agent CLI</a> + <a href="https://postqueen.ai/mcp">MCP server</a>: plug Claude&nbsp;Code, ChatGPT, Cursor, OpenClaw, Hermes or Codex straight into your channels.</h3>

<br/>

<div align="center">
  <h2>The queen of your posts 👑</h2>
  <p>
    Bring the queen of your posts into your n8n flows.<br/>
    She writes, designs and schedules across <strong>30+ networks</strong>, you just approve.
  </p>
  <p><em>An open-source alternative to Buffer, Hootsuite, Sprout Social and Later.</em></p>
</div>

<br/>

<p align="center">
  <a href="https://postqueen.ai">Website</a> &nbsp;·&nbsp;
  <a href="https://postqueen.ai/pricing">Pricing</a> &nbsp;·&nbsp;
  <a href="https://app.postqueen.ai/auth">Start free</a> &nbsp;·&nbsp;
  <a href="https://docs.postqueen.ai">Docs</a> &nbsp;·&nbsp;
  <a href="https://api.postqueen.ai/docs">API Reference</a> &nbsp;·&nbsp;
  <a href="https://www.npmjs.com/package/n8n-nodes-postqueen">npm</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/n8n-nodes-postqueen"><img src="https://img.shields.io/npm/v/n8n-nodes-postqueen?color=e0189e" alt="Version on npm"></a>
  <a href="https://www.npmjs.com/package/n8n-nodes-postqueen"><img src="https://img.shields.io/npm/dm/n8n-nodes-postqueen?color=7c3aed" alt="Downloads on npm"></a>
  <a href="https://github.com/GkhanKINAY/postqueen-n8n/blob/main/LICENSE.md"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT"></a>
  <a href="https://docs.n8n.io/integrations/community-nodes/"><img src="https://img.shields.io/badge/n8n-community%20node-ff6d5a" alt="n8n community node"></a>
</p>

<p align="center">
  <a href="https://postqueen.ai"><img src=".github/assets/cta-cloud.svg" height="46" alt="Start free for 7 days" /></a>
</p>

<br/>

<p align="center">
  <img src=".github/assets/channels.svg" width="780" alt="Supported social networks" />
</p>

<p align="center">
  <a href="https://docs.postqueen.ai"><strong>Explore the docs »</strong></a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="https://postqueen.ai/pricing"><strong>Start a 7-day free trial »</strong></a>
</p>

<br/>

---

## 📖 What is this?

This is an [n8n community node](https://docs.n8n.io/integrations/community-nodes/) for [PostQueen](https://postqueen.ai), the open-source, AI-native social media scheduler. It lets you schedule and manage posts across **30+ social networks** directly from your n8n workflows. For example: load news from Reddit, turn it into a video with AI, then publish it to all your channels.

PostQueen covers X, LinkedIn, Bluesky, Instagram, Facebook, TikTok, YouTube, Pinterest, Dribbble, Telegram, Discord, Slack, Threads, Lemmy, Reddit, Mastodon, Farcaster, Nostr, Tumblr, Moltbook, VK, and more. Run it in the cloud with a **[7-day free trial](https://postqueen.ai/pricing)**, or [self-host](https://docs.postqueen.ai/introduction) the whole stack for free.

---

## 👑 Everything PostQueen does for you

<p align="center">
  <img src=".github/assets/features.svg" width="820" alt="PostQueen features: scheduling, AI assistant, AI design, AI video, auto actions, teamwork, analytics, marketplace" />
</p>

- 📅 **Scheduling.** Plan every channel on one visual calendar; drag to reschedule, click to edit.
- 🤖 **AI Assistant.** Generate hooks, captions and threads in your voice, shaped per platform.
- 🎨 **AI Design.** A built-in, Canva-like editor plus AI image generation for post visuals.
- 🎬 **AI Video.** Turn a photo and a script into a short vertical video for Reels, Shorts and TikTok.
- ⚡ **Auto Actions (Plugs).** Auto repost, like and comment when a post hits a milestone.
- 👥 **Teamwork.** Roles, comments, approvals and multi-brand workspaces for your whole team.
- 📈 **Analytics.** Track post and audience performance on the major networks.
- 🛒 **Marketplace.** Buy or exchange posts with other members.

---

## 🤝 Works with your AI

Prefer plain English to nodes? Alongside this n8n node, PostQueen ships an **[Agent CLI](https://postqueen.ai/agent)** and a hosted **[MCP server](https://postqueen.ai/mcp)**, so you can drive it from whatever AI you already talk to. Just ask:

> *"Write a launch post about our new feature, generate a matching image, and schedule it for Friday at 9am on X, LinkedIn and Instagram."*

Your assistant writes it, designs it, and drops it into your **PostQueen queue**, where you review and approve before anything goes live. Every agent below connects over the same CLI and MCP server:

- **[Claude Code](https://postqueen.ai/claude-code):** tell it in plain English and it drives the CLI or MCP to draft and queue your posts.
- **[ChatGPT](https://postqueen.ai/chatgpt):** draft in ChatGPT, then let PostQueen fan the result out to every channel.
- **[Cursor](https://postqueen.ai/cursor):** manage your channels from the editor you build in, over the CLI or MCP.
- **[OpenClaw](https://postqueen.ai/openclaw):** message it from WhatsApp, Telegram, Slack or Discord and it queues posts tailored per platform.
- **[Hermes](https://postqueen.ai/hermes-agent):** hand your posting pipeline to an agent that plans multi-step tasks end to end.
- **[Codex](https://postqueen.ai/codex):** one prompt in, a scheduled week out.

Not on the list? PostQueen's CLI and MCP server are model-agnostic, so **any MCP client or command-running agent works**: Gemini CLI, Aider, Cline, Warp, Windsurf, or your own.

---

## 📦 Installation

### n8n UI (recommended)

1. Open **Settings → Community Nodes**.
2. Click **Install**.
3. Enter `n8n-nodes-postqueen` as the npm package name.
4. Click **Install**.

### npm (manual, non-Docker)

Go to your n8n installation folder (usually `~/.n8n`). If there is no `custom` folder, create one with a `package.json`, then install the package:

```bash
mkdir -p ~/.n8n/custom
cd ~/.n8n/custom
npm init -y
npm install n8n-nodes-postqueen
```

### Docker

Create a folder on your host machine for custom nodes and install the package there:

```bash
mkdir -p ~/n8n-custom-nodes
cd ~/n8n-custom-nodes
npm init -y
npm install n8n-nodes-postqueen
```

Then mount that folder into the container (host path to `/home/node/n8n-custom-nodes`) and point n8n at it:

```bash
docker run -d --name n8n \
  -v ~/n8n-custom-nodes:/home/node/n8n-custom-nodes \
  -e N8N_CUSTOM_EXTENSIONS="/home/node/n8n-custom-nodes" \
  -p 5678:5678 n8nio/n8n
```

Requires n8n running on Node.js **>=20.15**.

---

## 🔑 Credentials

The node authenticates with a **PostQueen API** credential that has two fields:

| Field | Description |
| --- | --- |
| **API Key** | Your PostQueen Public API key. Grab it at **[app.postqueen.ai/settings](https://app.postqueen.ai/settings)** (Developers → Public API → Reveal). |
| **Host** | Base URL of the PostQueen API. Defaults to `https://api.postqueen.ai` (cloud). |

To add the credential in n8n, create a new **PostQueen API** credential, paste your API key, and (if self-hosting) set the host. n8n validates it against a live test endpoint when you save.

> **Self-hosting note:** point **Host** at your own instance's API base URL. It must end with `/api`, for example `https://yourdomain.com/api`.

---

## 🧩 Operations

The PostQueen node exposes 7 operations:

| Operation | Description |
| --- | --- |
| **Create Post** | Schedule, draft, or immediately publish a post to one or more channels. |
| **Delete Post** | Delete a post by its ID. |
| **Generate Video** | Generate a video with AI (see parameters below). |
| **Get Channels** | List your connected channels (integrations). |
| **Get Posts** | List posts within a start/end date range, optionally filtered by customer. |
| **Upload File** | Upload a file (image or video) from a binary property. |
| **Video Function** | Run a video helper function, such as loading available voices. |

**Generate Video** takes a **Video Type** (for example `image-text-slides` or `veo3`), an **Output Format** (`vertical` or `horizontal`), and optional **Custom Parameters** (key/value pairs such as `prompt`, `voice`, or `images`).

---

## 🚀 Usage example

A minimal "post to all channels now" flow:

1. **Get Channels**: retrieve the IDs of your connected channels.
2. **Create Post**: set **Type** to `Now`, add a post entry per channel using those IDs, and write your content.

Run it, and PostQueen publishes across every selected network at once. Prefer raw HTTP or another language? See the [API reference](https://api.postqueen.ai/docs), the [`postqueen` CLI](https://www.npmjs.com/package/postqueen), or the [`@postqueen/node` SDK](https://www.npmjs.com/package/@postqueen/node).

---

## ❤️ Community & Support

We would love to hear from you, whether you hit a bug, have an idea, or just want to say hi:

- 🐛 **Found a bug or have a feature idea?** [Open an issue](https://github.com/GkhanKINAY/postqueen-n8n/issues).
- 💌 **Need a hand?** Email **support@postqueen.ai**.
- 📚 **Getting started?** The [docs](https://docs.postqueen.ai) walk you through everything.

If this node saves you time, a ⭐ on the repo genuinely helps other people find it.

---

## License

This node package is released under the [MIT license](LICENSE.md).

This node is a fork of the [Postiz](https://github.com/gitroomhq/postiz-app) community node. Thanks to Nevo David and the Postiz contributors for the foundation this builds on.
