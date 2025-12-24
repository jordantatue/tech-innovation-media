document.getElementById("subscribe-form").addEventListener("submit", async e => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const status = document.getElementById("status");

  const res = await fetch("https://TON_N8N_URL/webhook/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  });

  status.innerText = res.ok
    ? "✅ Inscription réussie"
    : "❌ Erreur lors de l’inscription";
});
