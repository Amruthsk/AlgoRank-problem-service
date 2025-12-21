const { marked } = require("marked");
const sanitizeHtmlLibrary = require("sanitize-html");
const TurndownService = require("turndown");

const turndownService = new TurndownService();

function sanitizeMarkdownContent(markdownContent) {
  //1. Convert markdown to html
  const convertedHtml = marked.parse(markdownContent);

  console.log("Converted HTML:", convertedHtml);

  //2. Sanitize html
  const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat([
      "img",
      "iframe",
    ]),
    allowedAttributes: sanitizeHtmlLibrary.defaults.allowedAttributes,
  });

  console.log("Sanitized HTML:", sanitizedHtml);

  //3. Convert the sanitized html back to markdown
  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

  console.log("Sanitized Markdown:", sanitizedMarkdown);

  return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;
