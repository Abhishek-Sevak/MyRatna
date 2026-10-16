const $ = (id) => document.getElementById(id);
const IMG = "images/";

// ----- 1. Gemstones (naam, benefit, image) -----
const gems = [
  ["Yellow Sapphire", "Attracts Wealth and Improves Prosperity", "gem-yellow"],
  ["Blue Sapphire", "Brings Success and Improves Focus", "gem-blue"],
  ["Emerald", "Improves Communication and Supports Learning", "gem-emerald"],
  ["Ruby", "Increases Confidence and Enhances Leadership", "gem-ruby"],
  ["Red Coral", "Increases Courage and Improves Strength", "gem-coral"],
  ["Pearl", "Reduces Stress and Brings Emotional Balance", "gem-pearl"],
  ["Cat's Eye", "Provides Protection and Removes Negative Energy", "gem-catseye"],
  ["Hessonite", "Removes Confusion and Supports Career Growth", "gem-hessonite"]
];
$("gems").innerHTML = gems.map((g) => `
  <div class="col-6 col-md-3 col-xl reveal">
    <a href="#" class="gem-card text-decoration-none text-dark d-block">
      <img src="${IMG + g[2]}.svg" class="gem-img" alt="${g[0]}">
      <div class="gem-name">${g[0]}</div>
      <div class="gem-sub">${g[1]}</div>
    </a>
  </div>`).join("");

// ----- 2. Jewellery categories -----
const cats = [
  ["Earrings", "2 products", "cat-earrings"],
  ["Bracelets", "1 product", "cat-bracelet"],
  ["Rings", "2126 products", "cat-ring"],
  ["Pendant", "1535 products", "cat-pendant"]
];
$("cats").innerHTML = cats.map((c) => `
  <div class="col-6 col-lg-3 reveal">
    <a href="#" class="img-card text-decoration-none text-dark d-block">
      <div class="img-wrap"><img src="${IMG + c[2]}.svg" alt="${c[0]}"></div>
      <div class="cat-name fs-4 mt-2">${c[0]}</div>
      <small class="text-muted">${c[1]}</small>
    </a>
  </div>`).join("");

// ----- 3. Zodiac -----
const zodiac = [
  ["Aries", "मेष", "♈"], ["Taurus", "वृषभ", "♉"], ["Gemini", "मिथुन", "♊"],
  ["Cancer", "कर्क", "♋"], ["Leo", "सिंह", "♌"], ["Virgo", "कन्या", "♍"],
  ["Libra", "तुला", "♎"], ["Scorpio", "वृश्चिक", "♏"], ["Sagittarius", "धनु", "♐"],
  ["Capricorn", "मकर", "♑"], ["Aquarius", "कुंभ", "♒"], ["Pisces", "मीन", "♓"]
];
$("zodiac").innerHTML = zodiac.map((z) => `
  <div class="col-6 col-md-4 col-xl-2 reveal">
    <a href="#" class="z-card">
      <div class="z-ic">${z[2]}</div>
      <div class="text-center flex-grow-1"><b>${z[0]}</b><span>${z[1]}</span></div>
    </a>
  </div>`).join("");

// ----- 4. Finest gemstones -----
const finest = [
  ["Burma Ruby - 9.28 Carat Rare Quality", "BR-7519", "stone-ruby", "Rs. 99,999"],
  ["Alexandrite - 3.58 Carat Rare Quality", "ALX-0016", "stone-alx1", "Rs. 24,000"],
  ["Alexandrite - 3.38 Carat Rare Quality", "ALX-0017", "stone-alx2", "Rs. 24,000"],
  ["Alexandrite - 3.00 Carat Rare Quality", "ALX-0023", "stone-alx3", "Rs. 28,000"]
];
$("finest").innerHTML = finest.map((s) => `
  <div class="col-6 col-lg-3 stone img-card reveal">
    <div class="img-wrap">
      <button class="heart" aria-label="Wishlist"><i class="bi bi-heart"></i></button>
      <img src="${IMG + s[2]}.svg" alt="${s[0]}">
      <button class="add-cart">ADD TO CART</button>
    </div>
    <h6>${s[0]}</h6>
    <small class="text-muted">SKU: ${s[1]}</small>
    <div class="fw-medium">${s[3]}</div>
  </div>`).join("");

// ----- 5. Why choose us -----
const feats = [
  ["bi-patch-check", "Certified Gems", "Lab tested and certified"],
  ["bi-truck", "Free Shipping", "Across India"],
  ["bi-arrow-repeat", "7 Day Returns", "Easy return policy"],
  ["bi-shield-lock", "Secure Payments", "100% safe checkout"]
];
$("features").innerHTML = feats.map((f) => `
  <div class="col-6 col-md-3 feat reveal">
    <i class="bi ${f[0]}"></i><h6>${f[1]}</h6><p>${f[2]}</p>
  </div>`).join("");

// ----- 6. Wishlist heart toggle -----
document.addEventListener("click", (e) => {
  const h = e.target.closest(".heart");
  if (!h) return;
  h.classList.toggle("on");
  h.firstElementChild.className = h.classList.contains("on") ? "bi bi-heart-fill" : "bi bi-heart";
});

// ----- 7. Scroll reveal animation -----
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("show"); io.unobserve(en.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// ----- 8. Header shadow on scroll -----
const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 20));