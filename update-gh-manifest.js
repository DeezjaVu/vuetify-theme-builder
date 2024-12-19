const fs = require("fs");
const path = require("path");

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = "vuetify-theme-builder";
const manifestPath = path.join(__dirname, "public", "manifest.json");

fs.readFile(manifestPath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading manifest file:", err);
    return;
  }

  const manifest = JSON.parse(data);
  if (isGitHubPages) {
    manifest.icons.forEach((icon) => {
      icon.src = `/${repoName}${icon.src}`;
    });
    manifest.start_url = `/${repoName}/`;
  }

  fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2), "utf8", (err) => {
    if (err) {
      console.error("Error writing manifest file:", err);
    } else {
      console.log("Manifest file updated successfully.");
    }
  });
});
