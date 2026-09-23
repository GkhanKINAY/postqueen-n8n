# PostQueen n8n node

<a href="https://app.postqueen.ai/auth?utm_source=npm&utm_medium=readme&utm_campaign=n8n-nodes-postqueen&utm_content=npm-banner"><img src="https://raw.githubusercontent.com/GkhanKINAY/postqueen-n8n/main/.github/assets/banner-light.png" width="100%" alt="PostQueen n8n node. Schedule posts from n8n workflows: create posts, upload media and start AI video jobs."></a>

<p>
  <a href="https://www.npmjs.com/package/n8n-nodes-postqueen"><img src="https://img.shields.io/npm/v/n8n-nodes-postqueen?label=npm&color=CB3837&labelColor=15131C&logo=npm&logoColor=white" alt="npm version"></a>
  <a href="https://github.com/GkhanKINAY/postqueen-n8n/blob/main/LICENSE.md"><img src="https://img.shields.io/badge/license-MIT-2563EB?labelColor=15131C" alt="License: MIT"></a>
</p>

<a href="https://docs.postqueen.ai/agents/grok-bot"><img src="https://raw.githubusercontent.com/GkhanKINAY/postqueen-app/main/.github/assets/showcase/announce-light.png" width="100%" alt="New: Grok Bot is here. Connect Claude, ChatGPT, Grok Bot or any AI agent to your socials."></a>

<p><a href="https://app.postqueen.ai/auth?utm_source=npm&utm_medium=readme&utm_campaign=n8n-nodes-postqueen&utm_content=npm-button"><img src="https://raw.githubusercontent.com/GkhanKINAY/postqueen-app/main/.github/assets/showcase/btn-trial-light.png" width="351" alt="Start 7-day trial for $0"></a><a href="https://docs.postqueen.ai/agents/overview"><img src="https://raw.githubusercontent.com/GkhanKINAY/postqueen-app/main/.github/assets/showcase/btn-agent-light.png" width="325" alt="Connect your AI agent"></a></p>

<sub><b>$0 due today.</b> A card is required, and you pay nothing if you cancel within 7 days.</sub>

<a href="https://docs.postqueen.ai/agents/overview"><img src="https://raw.githubusercontent.com/GkhanKINAY/postqueen-app/main/.github/assets/showcase/works-light.png" width="100%" alt="Use the agent you already have: Claude, ChatGPT, Grok Bot (new), Grok, Perplexity, Muse (new), Claude Code, Codex, Cursor, Gemini CLI, VS Code, Devin Desktop, Zed, OpenClaw, Hermes, NanoClaw, Paperclip and any MCP app. Posts to 30+ networks."></a>

`n8n-nodes-postqueen` is an n8n community node for PostQueen: create, list and delete posts, upload media and start AI video jobs from any workflow.


![The n8n Community Nodes install dialog with n8n-nodes-postqueen entered as the npm package name](https://raw.githubusercontent.com/GkhanKINAY/postqueen-n8n/main/community-node.png)

## What it does

- **Create Post** schedules a post, saves it as a draft or publishes it now, on one or more channels in a single call.
- **Get Posts**, **Get Channels** and **Delete Post** read and tidy your calendar.
- **Upload File** sends a file from the workflow to PostQueen and returns the path to use in a post.
- **Generate Video** and **Video Function** start a video with one of the app's video types and run its helpers, such as listing voices.

[PostQueen](https://postqueen.ai) is a social media scheduler with an AI copilot that posts to 30+ networks. The node calls the PostQueen public API, so everything it creates shows up on the same calendar as the app.


<img src="https://raw.githubusercontent.com/GkhanKINAY/postqueen-n8n/main/.github/assets/n8n-recipes-light.png" width="100%" alt="Six workflows to start from: blog to every network, announce every new video, a content calendar in a sheet, a video every week, drafts your team approves, and never an empty week.">

## Quick start

1. In n8n, open **Settings > Community Nodes**, choose **Install**, enter `n8n-nodes-postqueen` and install it.
2. Create a **PostQueen API** credential. Paste your API key: in PostQueen, open Connections > API Keys to copy it. Only workspace admins can see the key, and each workspace has one.
3. Keep **Host** at `https://api.postqueen.ai`. If you run PostQueen yourself, set it to your instance's API address, ending in `/api`, such as `https://postqueen.example.com/api`.
4. Add the PostQueen node to a workflow and pick an operation.

n8n checks the credential against the API when you save it. The node needs n8n on Node.js 20.15 or newer. No PostQueen account yet? [Start a 7-day trial, $0 due today](https://app.postqueen.ai/auth?utm_source=npm&utm_medium=readme&utm_campaign=n8n-nodes-postqueen&utm_content=quick-start).

**Without the Community Nodes screen.** Install the package into n8n's custom folder, then restart n8n:

```bash
mkdir -p ~/.n8n/custom && cd ~/.n8n/custom
npm init -y
npm install n8n-nodes-postqueen
```

In Docker, install it into a folder on the host, mount that folder into the container and set `N8N_CUSTOM_EXTENSIONS` to its path inside the container.

## Operations

| Operation | What it does |
| --- | --- |
| Create Post | Create a post with type **Draft**, **Schedule** or **Now**, for one or more channels. The type defaults to **Now**, so pick Draft while you test. |
| Delete Post | Delete a post by its ID |
| Generate Video | Make a video and return the finished file. **Video Type** is `image-text-slides` (narrated slides, with the Custom Parameters `prompt` and `voice`) or `seedance` (Seedance 2.0 with audio, with `prompt` and `images`: up to three uploaded files as `[{"id":"...","path":"https://..."}]`, or `[]` for text to video). **Output Format** is vertical or horizontal |
| Get Channels | List your connected channels and their IDs |
| Get Posts | List posts between two dates, with an optional customer filter |
| Upload File | Upload an image or video from a binary property |
| Video Function | Run a helper of a video type, such as `loadVoices` on `image-text-slides` for the voice IDs. **Additional Parameters** are sent to the helper as its `params` |

Video generation uses the AI video credits of your plan. Each network may also need settings of its own on Create Post; the [public API docs](https://docs.postqueen.ai/public-api/introduction) list them per network.

### Workflow ideas

The six workflows at the top, step by step:

- **Blog to every network:** an RSS Feed Trigger watches your blog, an AI Agent writes a caption for each network, and Create Post schedules it for tomorrow.
- **Announce every new video:** an RSS Feed Trigger on your YouTube channel's feed spots a new upload, an AI Agent writes the post, and Create Post sends the link to X, LinkedIn and Threads.
- **A content calendar in a sheet:** a Google Sheets trigger fires on a new row. Upload File sends the row's image to PostQueen, and Create Post schedules the text for the row's date.
- **A video every week:** a Schedule Trigger runs every Monday, Generate Video makes narrated image slides from a prompt, and Create Post posts the video to TikTok, Instagram Reels and YouTube Shorts.
- **Drafts your team approves:** a Webhook or form sends the text, Create Post saves it with type Draft, and a Slack message asks the team to check it on the calendar.
- **Never an empty week:** a Schedule Trigger runs every Friday, Get Posts reads the next seven days, and an If node sends a Slack message when the week is empty.

## Privacy and security

- Channels connect through each network's official OAuth sign-in where the network offers one.
- Some networks, such as Bluesky, Lemmy, WordPress and Nostr, need an app password, an account password or a key that you paste in.
- PostQueen stores these credentials so it can post for you, and replaces them when you remove the channel.
- n8n keeps your PostQueen API key in its own credential store. The key gives full access to the workspace.
- Read the [privacy policy](https://postqueen.ai/privacy-policy), or [delete your account](https://postqueen.ai/delete-my-account).

**No PostQueen account yet?** The node posts through PostQueen Cloud: start a trial, copy the key from Connections > API Keys, and your workflows can post.

<a href="https://app.postqueen.ai/auth?utm_source=npm&utm_medium=readme&utm_campaign=n8n-nodes-postqueen&utm_content=npm-closing-band"><img src="https://raw.githubusercontent.com/GkhanKINAY/postqueen-app/main/.github/assets/showcase/cta-light.png" width="100%" alt="Ready when you are: hand your next post to your agent. Start 7-day trial for $0. $0 due today, cancel in one click."></a>

## Links

| | |
| --- | --- |
| Docs | [n8n guide](https://docs.postqueen.ai/automation/n8n) · [public API](https://docs.postqueen.ai/public-api/introduction) |
| API reference | [api.postqueen.ai/docs](https://api.postqueen.ai/docs) |
| npm | [`n8n-nodes-postqueen`](https://www.npmjs.com/package/n8n-nodes-postqueen) |
| Repositories | [app](https://github.com/GkhanKINAY/postqueen-app) · [CLI and skill](https://github.com/GkhanKINAY/postqueen-agent) · [n8n node](https://github.com/GkhanKINAY/postqueen-n8n) · [docs](https://github.com/GkhanKINAY/postqueen-docs) · [Docker Compose](https://github.com/GkhanKINAY/postqueen-docker-compose) · [Helm chart](https://github.com/GkhanKINAY/postqueen-helmchart) |
| Help | support@postqueen.ai · [GitHub issues](https://github.com/GkhanKINAY/postqueen-n8n/issues) |

## License

This node is open source under the [MIT license](https://github.com/GkhanKINAY/postqueen-n8n/blob/main/LICENSE.md). PostQueen started as a fork of [Postiz](https://github.com/gitroomhq/postiz-app) by Nevo David, and this node started from [postiz-n8n](https://github.com/gitroomhq/postiz-n8n).
