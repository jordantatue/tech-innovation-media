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

    // Supprimer le front-matter YAML si présent
    const cleanMd = md.replace(/^---[\s\S]*?---/, "").trim();

    // Markdown → HTML
    container.innerHTML = marked.parse(cleanMd);

  } catch (e) {
    container.innerText = "Erreur de chargement de l’article.";
  }
}

loadArticle();
