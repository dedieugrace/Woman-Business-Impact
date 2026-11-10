/* ===== CONFIGURATION (à renseigner) ===== */
const CONFIG = {
  TALLY_FORM_URL: "https://tally.so/r/laqp6B", 
  WHATSAPP_CONTACT_URL: "https://wa.me/237682245921"   
};

/* Menu mobile */
const burger = document.getElementById("burger"), nav = document.getElementById("nav");
const closeMenu = () => { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); burger.setAttribute("aria-label", "Ouvrir le menu"); };
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));

/* Header : se masque en descendant, réapparaît en remontant */
const hdr = document.getElementById("hdr"); let last = 0;
addEventListener("scroll", () => {
  const y = scrollY;
  hdr.classList.toggle("hide", y > last && y > 200 && !nav.classList.contains("open"));
  last = y;
}, { passive: true });

/* Formulaire Tally */
if (CONFIG.TALLY_FORM_URL) {
  const box = document.getElementById("tally-box");
  const f = document.createElement("iframe");
  f.src = CONFIG.TALLY_FORM_URL.replace("/r/", "/embed/") + (CONFIG.TALLY_FORM_URL.includes("?") ? "&" : "?") + "alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";
  f.title = "Formulaire d'inscription Woman Business Impact"; f.loading = "lazy";
  box.replaceChildren(f);
  const s = document.createElement("script"); s.src = "https://tally.so/widgets/embed.js"; s.async = true;
  s.onload = () => window.Tally && Tally.loadEmbeds(); document.body.appendChild(s);
}

/* Lien WhatsApp : affiché seulement s'il est configuré */
if (CONFIG.WHATSAPP_CONTACT_URL) {
  document.getElementById("wa").href = CONFIG.WHATSAPP_CONTACT_URL;
  document.getElementById("after").hidden = false;
}