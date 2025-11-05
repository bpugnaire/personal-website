# Deployment Guide 🚀

Your site is ready to deploy! You have a GitHub Actions workflow configured that will automatically build and deploy your site when you push to GitHub.

## Current Situation

- Your `personal-website` folder is inside `/Users/bpugnaire/Dev/github/`
- The parent folder is a git repository
- You have a GitHub Actions workflow (`.github/workflows/deploy.yml`) ready

## Option 1: Create Separate Repository (RECOMMENDED)

This is the cleanest approach for a personal website:

### Step 1: Create GitHub Repository
```bash
# Go to https://github.com/new
# Create a new repository named "personal-website" or "bpugnaire.github.io"
# Do NOT initialize with README, .gitignore, or license
```

### Step 2: Initialize and Push
```bash
cd /Users/bpugnaire/Dev/github/personal-website

# Initialize git
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Personal website with gradient buttons"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/personal-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. Your site will deploy automatically!

### Step 4: Access Your Site
- If repo is `personal-website`: `https://YOUR_USERNAME.github.io/personal-website/`
```

---

## Quick Deploy

Here's a complete script to deploy as a separate repo:

```bash
cd /Users/bpugnaire/Dev/github/personal-website

# Initialize git
git init
git add .
git commit -m "Initial commit: Personal website with gradient buttons"

# You'll need to create the repo on GitHub first, then:
# git remote add origin https://github.com/YOUR_USERNAME/personal-website.git
# git branch -M main
# git push -u origin main
```

---

## Updating Your Site (After Initial Deploy)

Every time you make changes:

```bash
cd /Users/bpugnaire/Dev/github/personal-website

# Check what changed
git status

# Add your changes
git add .

# Commit with a message
git commit -m "Update button styles"

# Push to GitHub (triggers automatic deployment)
git push
```

GitHub Actions will automatically:
1. Build your Eleventy site
2. Deploy to GitHub Pages
3. Your site updates in 1-2 minutes!

---

## Important: Update Base URL

If using Option 1 with a subdirectory URL, update your site config:

Edit `src/_data/site.js`:
```javascript
url: "https://YOUR_USERNAME.github.io/personal-website",
```

If using `YOUR_USERNAME.github.io` repo:
```javascript
url: "https://YOUR_USERNAME.github.io",
```

---

## Verify Deployment

After pushing:
1. Go to your GitHub repository
2. Click **Actions** tab
3. Watch the deployment workflow run
4. Once complete, visit your site URL!

---

## What I Recommend

**Go with Option 1** (separate repository):
- ✅ Clean, focused repository
- ✅ Easy to share and showcase
- ✅ Simpler GitHub Pages setup
- ✅ Better for a portfolio website

You can name it `bpugnaire.github.io` for a clean URL without subdirectory!

---

Need help with any of these steps? Just ask! 🚀
