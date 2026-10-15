// Chhota helper: id se element dhundo
const $ = (id) => document.getElementById(id);

// ----- 1. Gemstones (naam, benefit, CSS class) -----
const gems = [
  ["Yellow Sapphire", "Attracts Wealth and Improves Prosperity", "gem-yellow"],
  ["Blue Sapphire", "Brings Success and Improves Focus", "gem-blue"],
  ["Emerald", "Improves Communication and Supports Learning", "gem-green"],
  ["Ruby", "Increases Confidence and Enhances Leadership", "gem-red"],
  ["Red Coral", "Increases Courage and Improves Strength", "gem-coral"],
  ["Pearl", "Reduces Stress and Brings Emotional Balance", "gem-pearl"],
  ["Cat's Eye", "Provides Protection and Removes Negative Energy", "gem-olive"],
  ["Hessonite", "Removes Confusion and Supports Career Growth", "gem-garnet"]
];

$("gems").innerHTML = gems.map((g) => `
  <div class="col-6 col-md-3 col-xl">
    <a href="#" class="text-decoration-none text-dark">
      <div class="gem ${g[2]}"></div>
      <div class="gem-name">${g[0]}</div>
      <div class="gem-sub">${g[1]}</div>
    </a>
  </div>`).join("");

// ----- 2. Jewellery categories -----
const cats = [
  ["Earrings", "2 products", "💎"],
  ["Bracelets", "1 product", "📿"],
  ["Rings", "2126 products", "💍"],
  ["Pendant", "1535 products", "🔱"]
];

$("cats").innerHTML = cats.map((c) => `
  <div class="col-6 col-lg-3">
    <a href="#" class="text-decoration-none text-dark">
      <div class="cat-img">${c[2]}</div>
      <div class="serif fs-4 mt-2">${c[0]}</div>
      <small class="text-muted">${c[1]}</small>
    </a>
  </div>`).join("");

// ----- 3. Zodiac (English, Hindi, symbol) -----
const zodiac = [
  ["Aries", "मेष", "♈"], ["Taurus", "वृषभ", "♉"], ["Gemini", "मिथुन", "♊"],
  ["Cancer", "कर्क", "♋"], ["Leo", "सिंह", "♌"], ["Virgo", "कन्या", "♍"],
  ["Libra", "तुला", "♎"], ["Scorpio", "वृश्चिक", "♏"], ["Sagittarius", "धनु", "♐"],
  ["Capricorn", "मकर", "♑"], ["Aquarius", "कुंभ", "♒"], ["Pisces", "मीन", "♓"]
];

$("zodiac").innerHTML = zodiac.map((z) => `
  <div class="col-6 col-md-4 col-xl-2">
    <a href="#" class="z-card">
      <div class="z-ic">${z[2]}</div>
      <div class="text-center flex-grow-1"><b>${z[0]}</b><span>${z[1]}</span></div>
    </a>
  </div>`).join("");

// ----- 4. Finest gemstones (naam, SKU, CSS class, price) -----
const finest = [
  ["Burma Ruby - 9.28 Carat Rare Quality", "BR-7519", "s-ruby", "Rs. 99,999"],
  ["Alexandrite - 3.58 Carat Rare Quality", "ALX-0016", "s-alx1", "Rs. 24,000"],
  ["Alexandrite - 3.38 Carat Rare Quality", "ALX-0017", "s-alx2", "Rs. 24,000"],
  ["Alexandrite - 3.00 Carat Rare Quality", "ALX-0023", "s-alx3", "Rs. 28,000"]
];

$("finest").innerHTML = finest.map((s) => `
  <div class="col-6 col-lg-3 stone">
    <a href="#" class="text-decoration-none text-dark">
      <div class="stone-img"><div class="stone-gem ${s[2]}"></div></div>
      <h6>${s[0]}</h6>
      <small class="text-muted">SKU: ${s[1]}</small>
      <div class="fw-medium">${s[3]}</div>
    </a>
  </div>`).join("");