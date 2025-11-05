# Switch to Clean URL Guide

Follow these steps to switch from:
`https://bpugnaire.github.io/personal-website/` 
to 
`https://bpugnaire.github.io/`

## Step 1: Rename Repository on GitHub

1. Go to: **https://github.com/bpugnaire/personal-website/settings**

2. Scroll down to "Repository name"

3. Change `personal-website` to `bpugnaire.github.io`

4. Click **"Rename"** button

⚠️ GitHub will automatically redirect the old URL to the new one, so no links will break!

## Step 2: Update Your Local Git Remote

```bash
cd /Users/bpugnaire/Dev/github/personal-website

# Update the remote URL
git remote set-url origin git@github.com:bpugnaire/bpugnaire.github.io.git

# Verify it worked
git remote -v
```

## Step 3: Wait for Deployment

The rename will automatically trigger a new deployment. Wait 1-2 minutes, then visit:

🌐 **https://bpugnaire.github.io/**

All navigation should work now!

## Step 4: Optional - Rename Local Folder

If you want to rename your local folder too:

```bash
cd /Users/bpugnaire/Dev/github
mv personal-website bpugnaire.github.io
cd bpugnaire.github.io
```

---

## Why This Fixes the 404s

The issue was that your site was deployed to `/personal-website/` but all links were pointing to `/`. 

By renaming to `bpugnaire.github.io`, GitHub Pages will deploy to the root (`/`), so all links will work correctly!

---

## After Rename

Your new URLs will be:
- Home: `https://bpugnaire.github.io/`
- About: `https://bpugnaire.github.io/about/`
- Projects: `https://bpugnaire.github.io/projects/`
- Blog: `https://bpugnaire.github.io/blog/`

Much cleaner! 🎉

---

Ready to do the rename? Start with Step 1 above!
