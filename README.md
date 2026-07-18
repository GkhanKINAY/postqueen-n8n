# Introduction

> Fork of [n8n-nodes-postiz](https://github.com/gitroomhq/postiz-n8n) (MIT) by Nevo David / Gitroom, rebranded for [PostQueen](https://postqueen.ai). Published on npm as `n8n-nodes-postqueen`. The credential's Host field can point to any self-hosted PostQueen-compatible instance.

[PostQueen](https://postqueen.ai) is a powerful social media scheduling tool that allows you to manage your social media accounts efficiently.

You can use n8n to automate your workflow and post to multiple social media platforms at once.

You can [self-host](https://docs.postqueen.ai/introduction) PostQueen or use our [cloud version](https://app.postqueen.ai).
For example: Load news from Reddit >> Make it a video with AI >> Post it to your social media accounts.

PostQueen supports: X, LinkedIn, BlueSky, Instagram, Facebook, TikTok, YouTube, Pinterest, Dribbble, Telegram, Discord, Slack, Threads, Lemmy, Reddit, Mastodon, Warpcast, Nostr and VK.

See the [PostQueen API documentation](https://docs.postqueen.ai/public-api) to learn how to use PostQueen with n8n.

---

> Note
> If you are self-hosting PostQueen on port 5000 (reverse proxy),
> Your host must end with /api for example:
> http://yourdomain.com/api

Alternatively, you can use the SDK with curl, check the [PostQueen API documentation](https://docs.postqueen.ai/public-api) for more information.

---

## Installation (quick installation)

- Click on settings
- Click on Community Nodes
- Click on Install
- Add "n8n-nodes-postqueen" to "npm Package Name"
- Click on Install

![community-node.png](community-node.png)

---

## Installation (non-docker - manual installation)
Go to your n8n installation usually located at `~/.n8n`.
Check if you have the `custom` folder, if not create it and create a new package.json file inside.
```bash
mkdir -p ~/.n8n/custom
npm init -y
```

Then install the PostQueen node package:
```
npm install n8n-nodes-postqueen
```

## For docker users (manual installation)
Create a new folder on your host machine, for example `~/n8n-custom-nodes`, and create a new package.json file inside:
```bash
mkdir -p ~/n8n-custom-nodes
npm init -y
```

install the PostQueen node package:
```bash
npm install n8n-nodes-postqueen
```

When you run the n8n docker container, mount the custom nodes folder to the container:
Add the following environment variable to your docker run command:
```
N8N_CUSTOM_EXTENSIONS="~/n8n-custom-nodes"
```
