async function loadArticle() {
  const params = new URLSearchParams(window.location.search);
  const file = params.get("file");

  const container = document.getElementById("article-content");

  if (!file) {
    container.innerText = "Article introuvable.";
    return;
  }

  try {
    const res = await fetch(`content/posts/${file}`);
    const md = await res.text();

    const html = md
      .replace(/^# (.*$)/gim, "<h1>$1</h1>")
      .replace(/^## (.*$)/gim, "<h2>$1</h2>")
      .replace(/^### (.*$)/gim, "<h3>$1</h3>")
      .replace(/\n/g, "<br>");

    container.innerHTML = html;
  } catch {
    container.innerText = "Erreur de chargement de l’article.";
  }
}

loadArticle();
