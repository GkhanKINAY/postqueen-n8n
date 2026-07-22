<p align="center">
  <a href="https://postqueen.ai">
    <img src="https://postqueen.ai/icon.svg" width="76" alt="PostQueen" />
  </a>
</p>

<h1 align="center">PostQueen node for n8n</h1>

<p align="center">
  <strong>Automate social media scheduling with PostQueen inside your n8n workflows.</strong><br />
  Create posts, fetch channels, upload media, and generate AI videos across 30+ networks — no code required.
</p>

<p align="center">
  <a href="https://postqueen.ai">Website</a> ·
  <a href="https://app.postqueen.ai">Live App</a> ·
  <a href="https://api.postqueen.ai/docs">API Reference</a> ·
  <a href="https://docs.postqueen.ai">Docs</a> ·
  <a href="https://www.npmjs.com/package/n8n-nodes-postqueen">npm</a> ·
  <a href="https://www.npmjs.com/package/postqueen">CLI</a> ·
  <a href="https://www.npmjs.com/package/@postqueen/node">SDK</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/n8n-nodes-postqueen"><img src="https://img.shields.io/npm/v/n8n-nodes-postqueen?color=e0189e" alt="Version on npm"></a>
  <a href="https://www.npmjs.com/package/n8n-nodes-postqueen"><img src="https://img.shields.io/npm/dm/n8n-nodes-postqueen?color=7c3aed" alt="Downloads on npm"></a>
  <a href="https://github.com/GkhanKINAY/postqueen-n8n/blob/main/LICENSE.md"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT"></a>
  <a href="https://docs.n8n.io/integrations/community-nodes/"><img src="https://img.shields.io/badge/n8n-community%20node-ff6d5a" alt="n8n community node"></a>
</p>

---

This is an [n8n community node](https://docs.n8n.io/integrations/community-nodes/) for [PostQueen](https://postqueen.ai), the open-source, AI-native social media scheduler. It lets you schedule and manage posts across 30+ social networks directly from your n8n workflows — for example: *load news from Reddit → turn it into a video with AI → publish it to all your channels.*

PostQueen supports X, LinkedIn, Bluesky, Instagram, Facebook, TikTok, YouTube, Pinterest, Dribbble, Telegram, Discord, Slack, Threads, Lemmy, Reddit, Mastodon, Farcaster, Nostr, VK, and more. Use it in the [cloud](https://app.postqueen.ai) or [self-host](https://github.com/GkhanKINAY/postqueen-docker-compose) the whole stack.

> This node is a fork of the [Postiz](https://github.com/gitroomhq/postiz-app) community node. Thanks to Nevo David and the Postiz contributors for the foundation this builds on.

## Installation

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

Then mount that folder into the container and point n8n at it with an environment variable:

```
N8N_CUSTOM_EXTENSIONS="/home/node/n8n-custom-nodes"
```

Requires n8n running on Node.js **>=20.15**.

## Credentials

The node authenticates with a **PostQueen API** credential that has two fields:

| Field | Description |
| --- | --- |
| **API Key** | Your PostQueen Public API key. Get it in the app under **Settings → Developers → Public API**. |
| **Host** | Base URL of the PostQueen API. Defaults to `https://api.postqueen.ai` (cloud). |

To add the credential in n8n, create a new **PostQueen API** credential, paste your API key, and (if self-hosting) set the host. n8n validates it against a live test endpoint when you save.

> **Self-hosting note:** point **Host** at your own instance's API base URL. It must end with `/api` — for example `https://yourdomain.com/api`.

## Operations

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

**Generate Video** takes a **Video Type** (e.g. `image-text-slides`, `veo3`), an **Output Format** (`vertical` or `horizontal`), and optional **Custom Parameters** (key/value pairs such as `prompt`, `voice`, or `images`).

## Usage example

A minimal "post to all channels now" flow:

1. **Get Channels** — retrieve the IDs of your connected channels.
2. **Create Post** — set **Type** to `Now`, add a post entry per channel using those IDs, and write your content.

Run it, and PostQueen publishes across every selected network at once. Prefer raw HTTP or another language? See the [API reference](https://api.postqueen.ai/docs), the [`postqueen` CLI](https://www.npmjs.com/package/postqueen), or the [`@postqueen/node` SDK](https://www.npmjs.com/package/@postqueen/node).

## License

This node package is released under the [MIT license](LICENSE.md).
