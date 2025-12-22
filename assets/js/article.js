async function loadArticle() {
  const params = new URLSearchParams(window.location.search);
  const file = params.get("file");

  if (!file) {
    document.getElementById("article-content").innerText = "Article introuvable.";
    return;
  }

  const res = await fetch(`content/posts/${file}`);
  const md = await res.text();

  // conversion Markdown → HTML simple
  const html = md
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/\n$/gim, "<br>");

  document.getElementById("article-content").innerHTML = html;
}

loadArticle();
