# Fix Nested Folder Issue

If your GitHub repo shows a `personal-website/` folder instead of the files at root, here's how to fix it:

## The Problem
You likely committed from the parent directory instead of from inside personal-website/

## The Fix

### Step 1: Check what you pushed
Go to: https://github.com/bpugnaire/personal-website

If you see a `personal-website/` folder at the root, continue with the fix below.

### Step 2: Reset and Re-push Correctly

```bash
# Move to your personal-website directory
cd /Users/bpugnaire/Dev/github/personal-website

# Remove the current git setup
rm -rf .git

# Re-initialize git
git init

# Add all files (you're now INSIDE personal-website, so it adds the right files)
git add .

# Commit
git commit -m "Initial commit: Personal website with gradient buttons"

# Add remote
git remote add origin git@github.com:bpugnaire/personal-website.git

# Force push to overwrite the incorrect structure
git branch -M main
git push -f origin main
```

### Step 3: Verify
Go back to https://github.com/bpugnaire/personal-website and verify you now see:
- `.eleventy.js`
- `.github/`
- `src/`
- `package.json`
- etc.

At the ROOT level (not inside a folder).

## Alternative: If It's Already Correct

If your repo already shows files at the root (not nested), then you're good! 

Just need to enable GitHub Pages:

1. Go to: https://github.com/bpugnaire/personal-website/settings/pages
2. Under "Build and deployment"
   - Source: Select **GitHub Actions**
3. Push any change to trigger deployment:
   ```bash
   cd /Users/bpugnaire/Dev/github/personal-website
   git commit --allow-empty -m "Trigger deployment"
   git push
   ```

4. Watch the deployment at: https://github.com/bpugnaire/personal-website/actions

Your site will be live at: **https://bpugnaire.github.io/personal-website/**

## Update Site URL

After deployment, update your site config:

Edit `src/_data/site.js`:
```javascript
url: "https://bpugnaire.github.io/personal-website",
```

Then commit and push:
```bash
git add src/_data/site.js
git commit -m "Update site URL"
git push
```

---

Which structure do you see on GitHub? Let me know and I'll help further!
