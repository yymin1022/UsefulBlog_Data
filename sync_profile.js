const fs = require('fs');
const path = require('path');

const PROFILE_README_URL = 'https://raw.githubusercontent.com/yymin1022/yymin1022/main/README.md';
const TARGET_PATH = path.join(__dirname, 'about', 'Useful', 'post.md');

const FRONTMATTER = `---
title: "Useful한 IT블로그"
date: "Hello, World!"
tag: []
isPinned: true
url: "Useful"
---

`;

async function syncProfile() {
  try {
    const res = await fetch(PROFILE_README_URL);
    if (!res.ok) {
      throw new Error(`Failed to fetch profile README: ${res.status} ${res.statusText}`);
    }
    const readmeContent = await res.text();
    const newPostContent = FRONTMATTER + readmeContent.trim() + '\n';

    let currentContent = '';
    if (fs.existsSync(TARGET_PATH)) {
      currentContent = fs.readFileSync(TARGET_PATH, 'utf8');
    }

    if (currentContent === newPostContent) {
      console.log('No changes in profile README. Skipping update.');
      return;
    }

    fs.mkdirSync(path.dirname(TARGET_PATH), { recursive: true });
    fs.writeFileSync(TARGET_PATH, newPostContent, 'utf8');
    console.log('Successfully updated about/Useful/post.md from GitHub profile.');
  } catch (err) {
    console.error('Error syncing profile README:', err);
    process.exit(1);
  }
}

syncProfile();
