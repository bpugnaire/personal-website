# Personal Website

A modern, minimalist personal website built with [Eleventy](https://11ty.dev) featuring a pastel aesthetic.

## Features

- 🎨 Modern pastel design inspired by Anthropic
- 📝 Markdown-based blog posts
- 🚀 Fast static site generation
- 📱 Fully responsive design
- 🎯 Easy to maintain and customize
- 🔍 SEO friendly
- 📦 GitHub Pages ready

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone this repository
```bash
git clone <your-repo-url>
cd personal-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

Your site will be available at `http://localhost:8080`

## Usage

### Configuration

Edit `src/_data/site.js` to customize:
- Your name and tagline
- Social media links
- Site navigation
- Contact information

### Writing Blog Posts

Create a new markdown file in `src/blog/` with the following front matter:

```markdown
---
layout: post.njk
title: "Your Post Title"
date: 2024-01-15
tags:
  - post
  - your-tag
  - another-tag
description: "A brief description of your post"
---

Your content here...
```

### Adding Projects

Edit the projects page at `src/projects.njk` or create a data file at `src/_data/projects.js` to manage your projects dynamically.

### Customizing Styles

The main stylesheet is at `src/assets/css/style.css`. The CSS uses CSS custom properties (variables) for easy theming:

- Colors are defined at the top of the file
- Typography scales are configurable
- Spacing system is consistent throughout

### Adding Your Resume

Place your resume PDF in `src/assets/files/resume.pdf`

## Build & Deploy

### Build for Production

```bash
npm run build
```

This creates a `_site` folder with your static site.

### Deploy to GitHub Pages

1. Create a new repository named `yourusername.github.io`
2. Add the GitHub Actions workflow (see below)
3. Push your code to GitHub
4. Enable GitHub Pages in repository settings

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./_site
```

## Project Structure

```
personal-website/
├── src/
│   ├── _data/              # Site configuration and data
│   ├── _includes/          # Layout templates
│   ├── assets/             # Static assets
│   │   ├── css/
│   │   ├── js/
│   │   ├── images/
│   │   └── files/
│   ├── blog/               # Blog posts
│   ├── index.njk           # Home page
│   ├── about.njk           # About page
│   ├── projects.njk        # Projects page
│   └── resume.njk          # Resume page
├── .eleventy.js            # Eleventy configuration
├── package.json
└── README.md
```

## Customization Tips

1. **Colors**: Edit CSS variables in `style.css` to change the color scheme
2. **Fonts**: Update `--font-family` in CSS or add custom fonts
3. **Layout**: Modify templates in `src/_includes/`
4. **Content**: Add your personal information throughout the site

## Technologies Used

- [Eleventy](https://11ty.dev) - Static site generator
- [Nunjucks](https://mozilla.github.io/nunjucks/) - Template engine
- [Markdown-it](https://github.com/markdown-it/markdown-it) - Markdown parser
- Vanilla CSS and JavaScript (no frameworks!)

## License

MIT License - feel free to use this template for your own website!

## Support

If you have questions or run into issues, feel free to open an issue on GitHub.

---

Built with ❤️ using Eleventy
