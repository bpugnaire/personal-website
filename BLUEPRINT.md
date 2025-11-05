# Personal Website Blueprint & Setup Guide

## 🎯 Project Overview

You now have a fully functional personal website built with Eleventy! This is a modern, minimalist site with a pastel aesthetic inspired by Anthropic's design language.

## ✅ What's Been Set Up

### Core Structure
- ✅ Eleventy static site generator configured
- ✅ Markdown-based blog system
- ✅ Nunjucks templating engine
- ✅ Pastel color scheme with CSS variables
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ GitHub Actions workflow for deployment

### Pages Created
- ✅ Home page with hero section
- ✅ About page
- ✅ Projects page
- ✅ Blog listing page
- ✅ Resume page
- ✅ Sample blog post

### Features Included
- ✅ Navigation header (sticky)
- ✅ Mobile-responsive menu
- ✅ Footer with social links
- ✅ Blog post templates
- ✅ Project cards
- ✅ Smooth scrolling
- ✅ Card hover animations

## 🚀 Next Steps - Getting Started

### 1. Test the Site Locally

Run the development server:
```bash
cd /Users/bpugnaire/Dev/github/personal-website
npm start
```

Visit: http://localhost:8080

### 2. Customize Site Configuration

Edit `src/_data/site.js`:
- Replace "Your Name" with your actual name
- Update tagline and description
- Add your GitHub and LinkedIn URLs
- Add your email address

### 3. Personalize Content

**Home Page** (`src/index.njk`):
- Update the hero description
- Customize the introduction text

**About Page** (`src/about.njk`):
- Write your bio (2-3 paragraphs)
- Update skills/technologies list
- Add your profile photo to `src/assets/images/profile.jpg`

**Projects Page** (`src/projects.njk`):
- Add your real projects
- Include screenshots in `src/assets/images/projects/`
- Update project descriptions, tech stacks, and links

**Resume Page** (`src/resume.njk`):
- Add your resume PDF to `src/assets/files/resume.pdf`

### 4. Write Your First Blog Post

Create a new file: `src/blog/YYYY-MM-DD-your-post-title.md`

Example:
```markdown
---
layout: post.njk
title: "My First Real Post"
date: 2024-10-26
tags:
  - post
  - web-development
description: "A description for SEO and previews"
---

# Your Content Here

Write your blog post in Markdown...
```

Delete or modify the sample post at `src/blog/2024-01-15-welcome.md`

### 5. Customize Colors (Optional)

Edit `src/assets/css/style.css` - look for the `:root` section:

```css
:root {
  --color-primary: #F4A5A5;      /* Change these! */
  --color-secondary: #A8D8EA;
  --color-accent: #D4A5D4;
  /* ... more colors */
}
```

Try these color palette tools:
- [Coolors.co](https://coolors.co)
- [Adobe Color](https://color.adobe.com)

### 6. Add Images

Place images in:
- `src/assets/images/` - General images
- `src/assets/images/projects/` - Project screenshots
- `src/assets/images/profile.jpg` - Your profile photo

Use in markdown:
```markdown
![Alt text](/assets/images/your-image.jpg)
```

## 🌐 Deploying to GitHub Pages

### Option 1: Using your-username.github.io (Recommended)

1. **Create a new GitHub repository** named `yourusername.github.io`
   - Example: If your username is `bpugnaire`, create `bpugnaire.github.io`
   - This will make your site available at `https://bpugnaire.github.io`

2. **Initialize Git and push**:
```bash
cd /Users/bpugnaire/Dev/github/personal-website
git init
git add .
git commit -m "Initial commit: Personal website"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - The workflow will run automatically on push

4. **Wait for deployment**:
   - Check the "Actions" tab to see the build progress
   - Once complete, visit `https://yourusername.github.io`

### Option 2: Using a custom repository name

If you use a different repo name (e.g., `personal-site`):
- Site will be at: `https://yourusername.github.io/personal-site/`
- Update `src/_data/site.js` to include the base path
- Update links to include the base path

### Custom Domain (Optional)

To use your own domain (e.g., `yourname.com`):

1. Add a `CNAME` file to `src/`:
```
yourname.com
```

2. Configure DNS with your domain provider:
   - Add A records pointing to GitHub's IPs
   - Or add a CNAME record pointing to `yourusername.github.io`

3. Enable custom domain in GitHub Pages settings

## 📝 Content Strategy

### Blog Post Ideas
- Technical tutorials you wish existed
- Project retrospectives (what you learned)
- Technology explorations
- Career experiences
- Problem-solving stories
- Book/course reviews

### Best Practices
- Write for your future self
- Include code examples and screenshots
- Use descriptive titles
- Add relevant tags
- Keep posts focused on one topic
- Proofread before publishing

### Posting Frequency
- Start with 1 post per month
- Quality > Quantity
- Consistency matters more than frequency

## 🎨 Design Customization Ideas

### Easy Changes
- Adjust spacing (change CSS variables)
- Swap color scheme
- Change fonts (update `--font-family`)
- Add your own icons
- Customize button styles

### Advanced Changes
- Add dark mode toggle
- Include animated illustrations
- Add a contact form
- Implement blog search
- Add reading time estimates
- Include table of contents for long posts

## 🛠 Maintenance Tips

### Regular Updates
- Keep dependencies updated: `npm update`
- Review and update your resume quarterly
- Add new projects as you complete them
- Archive old blog posts if needed

### Adding New Features

**Want to add a contact form?**
- Use [Formspree](https://formspree.io) or [Netlify Forms]
- Add form HTML to your pages

**Want analytics?**
- Add [Google Analytics](https://analytics.google.com)
- Or use [Plausible](https://plausible.io) for privacy-friendly analytics
- Include tracking script in `base.njk` layout

**Want comments on blog posts?**
- Add [Giscus](https://giscus.app) (GitHub Discussions)
- Or [utterances](https://utteranc.es) (GitHub Issues)

### Performance Tips
- Optimize images before uploading (use TinyPNG or Squoosh)
- Keep total page size under 1MB
- Use lazy loading for images below the fold
- Minimize custom fonts

## 📚 Resources & Learning

### Eleventy Resources
- [Official Docs](https://11ty.dev/docs/)
- [Starter Projects](https://11ty.dev/docs/starter/)
- [Eleventy Community](https://11ty.dev/docs/community/)

### Design Inspiration
- [Awwwards](https://awwwards.com)
- [Dribbble](https://dribbble.com)
- [Behance](https://behance.net)

### Writing Resources
- [Hemingway Editor](https://hemingwayapp.com) - Improve readability
- [Grammarly](https://grammarly.com) - Catch mistakes
- [Markdown Guide](https://markdownguide.org)

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### CSS Not Updating
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Clear browser cache
- Check if file is in correct directory

### Images Not Showing
- Verify image path (should start with `/assets/`)
- Check file exists in `src/assets/images/`
- Ensure correct file extension

### GitHub Pages Not Updating
- Check Actions tab for build errors
- Verify GitHub Pages is enabled in settings
- May take 1-2 minutes to update after successful build

## 🎯 Project Checklist

Before launching publicly:

- [ ] Replace all placeholder text
- [ ] Add your real information to `site.js`
- [ ] Upload profile photo
- [ ] Add at least 2-3 projects
- [ ] Write at least 1 blog post
- [ ] Upload resume PDF
- [ ] Update social media links
- [ ] Test on mobile devices
- [ ] Proofread all content
- [ ] Check all links work
- [ ] Optimize images
- [ ] Test site accessibility
- [ ] Share with friends for feedback

## 📞 Getting Help

If you need help:
1. Check this blueprint document
2. Review the README.md
3. Check Eleventy documentation
4. Search GitHub issues
5. Ask in Eleventy Discord community

---

## Summary

You have a fully functional, modern personal website ready to customize and deploy! 

**Your immediate action items:**
1. Run `npm start` to see it locally
2. Update `src/_data/site.js` with your info
3. Start customizing content
4. Deploy to GitHub Pages

Good luck with your website! 🚀
