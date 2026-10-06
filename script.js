const requestedVersion = new URLSearchParams(window.location.search).get("version") || "1";
const version = window.brandPresentations?.[requestedVersion] ? requestedVersion : "1";
const c = window.brandPresentations?.[version] || window.brandContent;
document.body.dataset.version = version;
const $ = (id) => document.getElementById(id);
document.title = `${c.name} — ${c.presentationLabel} | Brand Presentation`;
$("presentationLabel").textContent = c.presentationLabel;
document.querySelectorAll("[data-version]").forEach((link) => link.classList.toggle("is-active", link.dataset.version === version));
$("brandName").textContent = c.name;
if ($("nativeName")) {
  $("nativeName").textContent = c.nativeName;
  $("nativeName").hidden = true;
}
$("tagline").textContent = c.tagline;
$("intro").textContent = c.intro;
$("positioning").textContent = c.positioning;
$("conceptTitle").textContent = c.conceptTitle;
$("concept").textContent = c.concept;
if (c.conceptLabel) document.querySelector(".story .eyebrow").textContent = c.conceptLabel;

if (c.designIdea) {
  const storyGrid = document.querySelector(".story-grid");
  const block = document.createElement("div");
  block.className = "design-idea-block";
  block.innerHTML = `<p class="eyebrow">${c.designIdea.label}</p><h3>${c.designIdea.title}</h3><p>${c.designIdea.text}</p>`;
  storyGrid.insertAdjacentElement("afterend", block);
}

$("typeNames").textContent = `${c.typography.display} + ${c.typography.body}`;
$("typeNote").textContent = c.typography.note;
$("referenceTypes").textContent = `${c.typography.display} / ${c.typography.body}`;
if (c.typography.title) {
  const typeSection = document.querySelector(".type-section");
  typeSection.querySelector(".eyebrow").textContent = "TYPOGRAPHY";
  typeSection.querySelector(".type-card").outerHTML = `<div class="brand-type-layout"><h2>${c.typography.title}</h2><div class="brand-type-grid"><article><h3>GEORGIA</h3><p class="brand-type-sample georgia-specimen">Aa Bb Cc</p><p><strong>${c.typography.georgiaLead}</strong></p><p>${c.typography.georgiaDescription}</p></article><article><h3>GOTHAM</h3><p class="brand-type-sample gotham-specimen">Aa Bb Cc</p><p><strong>${c.typography.gothamLead}</strong></p><p>${c.typography.gothamDescription}</p></article></div><div class="brand-type-pairing"><h3>THE PAIRING</h3><p>${c.typography.note}</p></div></div>`;
  const typeStyles = document.createElement("style");
  typeStyles.textContent = ".brand-type-layout>h2{font-size:clamp(2rem,4vw,3.45rem);line-height:1.12;margin-bottom:3rem}.brand-type-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4rem}.brand-type-layout h3{font-family:inherit;font-weight:400;font-size:1rem;letter-spacing:.08em}.brand-type-layout p{font-size:1rem;line-height:1.65}.brand-type-layout .brand-type-sample{font-size:clamp(2rem,4vw,4rem);line-height:1.2;margin:2rem 0}.brand-type-layout .georgia-specimen{font-family:'La Luna Georgia',Georgia,serif}.brand-type-layout .gotham-specimen{font-family:'La Luna Gotham',Arial,sans-serif;font-weight:300}.brand-type-pairing{margin-top:3rem;padding-top:2rem;border-top:1px solid var(--line);max-width:48rem}@media(max-width:720px){.brand-type-grid{grid-template-columns:1fr;gap:2rem}}";
  document.head.appendChild(typeStyles);
}

const logoSection = document.querySelector(".logo-system");
if (c.logoSystem) {
  const logoGroup = (group) => `<div class="logo-group"><div class="logo-group-copy"><h2>${group.title}</h2>${group.subtitle ? `<p style="margin-bottom:1rem"><strong>${group.subtitle}</strong></p>` : ""}<p>${group.description}</p></div><div class="logo-grid">${group.marks.map((mark) => `<figure class="logo-card"><div class="logo-art"><img src="${mark.file}" alt="La Luna ${mark.name}" /></div></figure>`).join("")}</div></div>`;
  $("logoSystem").innerHTML = Object.values(c.logoSystem).filter(Boolean).map(logoGroup).join("");
  logoSection.hidden = false;
}

const toast = document.querySelector(".toast");
const swatchMarkup = (color) => `<div class="swatch" style="--swatch:${color.hex}"><span class="colour"></span><span class="swatch-detail"><b>${color.name}</b><span>${color.hex}</span><small>${color.usage}</small></span></div>`;
const paletteIntro = document.querySelector(".palette .section-heading p");
if (paletteIntro) paletteIntro.remove();
$("swatches").innerHTML = c.colors.map(swatchMarkup).join("");
if (c.colourLanguage) {
  const palette = document.querySelector(".palette");
  palette.querySelector(".eyebrow").textContent = "COLOUR LANGUAGE";
  palette.querySelector(".section-heading h2").textContent = c.colourLanguage.title;
  const paletteGroup = (key, title) => `<div class="palette-language-group"><div class="palette-language-copy"><h3>${title}</h3><p>${c.colourLanguage[key]}</p></div><div class="swatches">${c.colors.filter(color => color.group === key).map(swatchMarkup).join("")}</div></div>`;
  $("swatches").className = "palette-language-groups";
  $("swatches").innerHTML = paletteGroup("primary", "PRIMARY PALETTE") + paletteGroup("secondary", "SECONDARY PALETTE");
  const paletteStyle = document.createElement("style");
  paletteStyle.textContent = ".palette-language-group{margin-top:3rem}.palette-language-copy h3{font-family:inherit;font-size:1rem;letter-spacing:.08em;font-weight:400;margin-bottom:1rem}.palette-language-copy p{max-width:38rem;font-size:1rem;line-height:1.6;margin-bottom:1.75rem}.palette-language-group .swatches{grid-template-columns:repeat(3,minmax(0,1fr))}@media(max-width:720px){.palette-language-group .swatches{grid-template-columns:1fr}}";
  document.head.appendChild(paletteStyle);
}
$("referenceSwatches").innerHTML = c.colors.map(swatchMarkup).join("");
$("applicationGrid").innerHTML = c.applications.map((a, index) => `<article class="application-card card-${index + 1}"><img src="${a.image}" alt="La Luna ${a.title} mockup" /><div class="application-copy"><h3>${a.title}</h3><p>${a.description}</p></div></article>`).join("");
$("lifestyleGrid").innerHTML = c.lifestyle.map((item, index) => `<article class="lifestyle-card lifestyle-${index + 1}"><img src="${item.image}" alt="La Luna lifestyle: ${item.title}" /><div><span>0${index + 1}</span><h3>${item.title}</h3><p>${item.description}</p></div></article>`).join("");
$("downloadList").innerHTML = c.downloads.filter(d => d.file && d.file !== "#").map((d) => `<a class="download" href="${d.file}" download><span><b>${d.label}</b><small>${d.note}</small></span><span>Download PDF</span></a>`).join("");
const reference = document.querySelector(".reference");
document.querySelector(".reference-toggle").addEventListener("click", () => { reference.classList.add("open"); reference.setAttribute("aria-hidden", "false"); });
document.querySelector(".close-reference").addEventListener("click", () => { reference.classList.remove("open"); reference.setAttribute("aria-hidden", "true"); });

if (version === "3") {
 const s=document.createElement("style"); s.textContent=`body[data-version="3"] .lifestyle-card img{object-position:center center} body[data-version="3"] .lifestyle-1 img{object-position:center 52%} body[data-version="3"] .lifestyle-2 img{object-position:center 58%} body[data-version="3"] .lifestyle-3 img{object-position:center center} body[data-version="3"] .lifestyle-4 img{object-position:center center}`; document.head.appendChild(s);
}
