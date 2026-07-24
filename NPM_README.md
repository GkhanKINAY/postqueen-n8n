<p align="center">
  <a href="https://postqueen.ai">
    <img src="https://raw.githubusercontent.com/GkhanKINAY/postqueen-n8n/main/.github/assets/header.svg" width="840" alt="PostQueen: the queen of your posts, your AI social media assistant" />
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/n8n-nodes-postqueen"><img src="https://img.shields.io/npm/v/n8n-nodes-postqueen?color=e0189e" alt="Version on npm"></a>
  <a href="https://www.npmjs.com/package/n8n-nodes-postqueen"><img src="https://img.shields.io/npm/dm/n8n-nodes-postqueen?color=7c3aed" alt="Downloads on npm"></a>
  <a href="https://docs.n8n.io/integrations/community-nodes/"><img src="https://img.shields.io/badge/n8n-community%20node-ff6d5a" alt="n8n community node"></a>
  <a href="https://github.com/GkhanKINAY/postqueen-n8n/blob/main/LICENSE.md"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT"></a>
</p>

# n8n-nodes-postqueen

An [n8n](https://n8n.io) community node for [PostQueen](https://postqueen.ai), the AI social media
assistant. Drop it into a workflow to schedule, draft or publish posts to X/Twitter, LinkedIn,
Instagram, Facebook, TikTok, YouTube, Reddit, Bluesky, Mastodon, Discord and 30+ more networks —
plus upload media and generate videos with AI, no code required.

## Installation

### n8n UI (recommended)

1. Open **Settings → Community Nodes**.
2. Click **Install**.
3. Enter `n8n-nodes-postqueen` as the npm package name.
4. Click **Install**.

![n8n Community Nodes install modal with n8n-nodes-postqueen entered as the npm package name](https://raw.githubusercontent.com/GkhanKINAY/postqueen-n8n/main/community-node.png)

### npm (manual, non-Docker)

Go to your n8n installation folder (usually `~/.n8n`). If there is no `custom` folder, create one
with a `package.json`, then install the package:

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

Then mount that folder into the container and point n8n at it:

```bash
docker run -d --name n8n \
  -v ~/n8n-custom-nodes:/home/node/n8n-custom-nodes \
  -e N8N_CUSTOM_EXTENSIONS="/home/node/n8n-custom-nodes" \
  -p 5678:5678 n8nio/n8n
```

## Credentials

The node authenticates with a **PostQueen API** credential:

| Field | Description |
| --- | --- |
| **API Key** | Your PostQueen Public API key. Grab it at [app.postqueen.ai/settings](https://app.postqueen.ai/settings) (Developers → Public API → Reveal). |
| **Host** | Base URL of the PostQueen API. Defaults to `https://api.postqueen.ai` (cloud). |

Create a new **PostQueen API** credential in n8n, paste your API key, and (if self-hosting) set the
host. n8n validates it against a live endpoint when you save.

> **Self-hosting note:** point **Host** at your own instance's API base URL. It must end with
> `/api`, for example `https://yourdomain.com/api`.

### Cloud or self-host — both work

| | ☁️ PostQueen Cloud | 🐳 Self-hosted PostQueen |
| --- | --- | --- |
| **Host** | `https://api.postqueen.ai` (the default) | `https://yourdomain.com/api` — must end with `/api` |
| **API Key** | [app.postqueen.ai/settings](https://app.postqueen.ai/settings) → Developers → Public API | same screen on your own instance |
| **Get started** | [postqueen.ai](https://postqueen.ai) — free for 7 days | [docker compose](https://github.com/GkhanKINAY/postqueen-docker-compose) |

## Operations

| Operation | Description |
| --- | --- |
| **Create Post** | Schedule, draft or immediately publish a post to one or more channels. |
| **Delete Post** | Delete a post by its ID. |
| **Generate Video** | Generate a video with AI. |
| **Get Channels** | List your connected channels (integrations). |
| **Get Posts** | List posts within a start/end date range, optionally filtered by customer. |
| **Upload File** | Upload an image or video from a binary property. |
| **Video Function** | Run a video helper function, such as loading available voices. |

**Create Post** takes the post type (`draft`, `schedule` or `now`), the content, the channels to
publish to, and optional per-platform settings.

**Generate Video** takes a **Video Type** (for example `image-text-slides` or `veo3`), an **Output
Format** (`vertical` or `horizontal`), and optional **Custom Parameters** (key/value pairs such as
`prompt`, `voice` or `images`).

## Example workflows

Every PostQueen step below is a real operation of this node; any n8n trigger can start the flow.

**Grow a YouTube channel while you sleep** — a daily Schedule Trigger runs **Generate Video**
(`veo3` or `image-text-slides`, with your prompt and optionally a voice from **Video Function** →
`loadVoices`), then **Create Post** queues the finished video to your channel:

![n8n workflow: schedule trigger, PostQueen Generate Video, PostQueen Create Post to YouTube](https://raw.githubusercontent.com/GkhanKINAY/postqueen-n8n/main/.github/assets/flow-youtube.svg)

**One clip → TikTok, Reels and Shorts** — a new video file in Drive/Dropbox/S3 triggers
**Upload File**, and **Create Post** schedules the same clip to TikTok, Instagram and YouTube in one
go. Upload media first and pass the returned URL into the post — TikTok, Instagram and YouTube only
accept media from trusted domains:

![n8n workflow: a new video file, PostQueen Upload File, PostQueen Create Post to TikTok, Reels and Shorts](https://raw.githubusercontent.com/GkhanKINAY/postqueen-n8n/main/.github/assets/flow-clips.svg)

**Launch-day announcement blast** — a form submission or a new sheet row kicks off a multi-channel
announcement: **Get Channels** finds your accounts, **Create Post** does the rest:

![n8n workflow: a new sheet row, PostQueen Get Channels, PostQueen Create Post to every channel](https://raw.githubusercontent.com/GkhanKINAY/postqueen-n8n/main/.github/assets/flow-launch.svg)

## Compatibility

Requires n8n running on Node.js **>= 20.15**. Built against `n8nNodesApiVersion: 1`.

## Resources

| | |
| --- | --- |
| PostQueen documentation | [docs.postqueen.ai](https://docs.postqueen.ai) |
| REST API reference | [api.postqueen.ai/docs](https://api.postqueen.ai/docs) |
| n8n community nodes guide | [docs.n8n.io](https://docs.n8n.io/integrations/community-nodes/) |
| Source, examples and issues | [github.com/GkhanKINAY/postqueen-n8n](https://github.com/GkhanKINAY/postqueen-n8n) |
| CLI | [`postqueen`](https://www.npmjs.com/package/postqueen) |
| NodeJS SDK | [`@postqueen/node`](https://www.npmjs.com/package/@postqueen/node) |

## License

[MIT](https://github.com/GkhanKINAY/postqueen-n8n/blob/main/LICENSE.md). This node is a fork of the
[Postiz](https://github.com/gitroomhq/postiz-app) community node — thanks to Nevo David and the
Postiz contributors for the foundation this builds on.
