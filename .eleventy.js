module.exports = function(eleventyConfig) {
  // Copy assets folder to output
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Copy favicons
  eleventyConfig.addPassthroughCopy("src/favicon.svg");
  eleventyConfig.addPassthroughCopy("src/favicon-simple.svg");
  
  // Copy CNAME file if it exists (for custom domain)
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // Markdown configuration - simplified for now
  // The default markdown-it configuration works fine
  // If you want to customize later, install markdown-it and markdown-it-anchor:
  // npm install markdown-it markdown-it-anchor
  // Then uncomment the lines below:
  
  /*
  const markdownIt = require("markdown-it");
  const markdownItAnchor = require("markdown-it-anchor");
  const markdownLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.headerLink()
  });
  eleventyConfig.setLibrary("md", markdownLib);
  */

  // Add date filter for blog posts
  eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Add excerpt filter for blog previews
  eleventyConfig.addFilter("excerpt", post => {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    return content.substr(0, 200) + "...";
  });

  // Create blog posts collection
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  // Watch for CSS changes
  eleventyConfig.addWatchTarget("src/assets/css/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
