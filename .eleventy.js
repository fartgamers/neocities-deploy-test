const { DateTime } = require("luxon");
const markdownLib = require('markdown-it')({html: true});
const mdAttrs = require('markdown-it-attrs');

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("js");

  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.amendLibrary("md", (markdownLib) => markdownLib.use(mdAttrs));

  eleventyConfig.addPairedShortcode("markdown", (content, inline = null) => {
    return inline
      ? markdownLib.renderInline(content)
      : markdownLib.render(content);
  });

  eleventyConfig.setLibrary("md", markdownLib);

  // date filter
  eleventyConfig.addFilter("date", (dateObj, format = "MMMM d, yyyy") => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format);
  });

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
};