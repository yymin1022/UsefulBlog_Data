const fs = require('fs');
const path = require('path');

const CATEGORIES = ['blog', 'project', 'solving', 'about'];
const DATA_DIR = __dirname;

const posts = {
  blog: [],
  project: [],
  solving: [],
  about: []
};

function parseFrontMatter(content) {
  if (!content.startsWith('---')) return null;
  const parts = content.split('---');
  if (parts.length < 3) return null;
  
  const yamlText = parts[1];
  const metadata = {};
  
  const lines = yamlText.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const colonIdx = trimmed.indexOf(':');
    if (colonIdx === -1) continue;
    
    const key = trimmed.slice(0, colonIdx).trim();
    const valStr = trimmed.slice(colonIdx + 1).trim();
    
    try {
      metadata[key] = JSON.parse(valStr);
    } catch (e) {
      metadata[key] = valStr;
    }
  }
  return metadata;
}

for (const cat of CATEGORIES) {
  const catDir = path.join(DATA_DIR, cat);
  if (!fs.existsSync(catDir)) continue;
  
  const dirs = fs.readdirSync(catDir).filter(f => {
    return fs.statSync(path.join(catDir, f)).isDirectory() && f !== '.git' && f !== '.github';
  });
  
  for (const postFolder of dirs) {
    const postPath = path.join(catDir, postFolder, 'post.md');
    if (!fs.existsSync(postPath)) continue;
    
    const content = fs.readFileSync(postPath, 'utf8');
    const meta = parseFrontMatter(content);
    if (!meta) continue;
    
    posts[cat].push({
      postID: cat === 'about' ? postFolder : (meta.postID || postFolder),
      postTitle: meta.title || '',
      postDate: meta.date || '',
      postTag: meta.tag || [],
      postIsPinned: meta.isPinned === true,
      postURL: meta.url || postFolder
    });
  }
  
  // Sort posts: pins first, then date/title descending
  posts[cat].sort((a, b) => {
    if (a.postIsPinned !== b.postIsPinned) {
      return a.postIsPinned ? -1 : 1;
    }
    
    // Try parsing dates for blog/project
    const dateA = new Date(a.postDate);
    const dateB = new Date(b.postDate);
    if (!isNaN(dateA) && !isNaN(dateB)) {
      return dateB - dateA;
    }
    
    // For solving posts, dates might be "BOJ 1000". Sort programmatically if we can extract number.
    // e.g., if date string starts with "BOJ", we can extract the number:
    const numA = parseInt(a.postDate.replace(/[^0-9]/g, ''), 10);
    const numB = parseInt(b.postDate.replace(/[^0-9]/g, ''), 10);
    if (!isNaN(numA) && !isNaN(numB)) {
      return numB - numA;
    }
    
    return b.postDate.localeCompare(a.postDate);
  });
}

fs.writeFileSync(path.join(DATA_DIR, 'posts.json'), JSON.stringify(posts, null, 2), 'utf8');
console.log(`Successfully generated posts.json with ${posts.blog.length} blogs, ${posts.project.length} projects, ${posts.solving.length} solving, and ${posts.about.length} about pages.`);
