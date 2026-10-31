const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const toast = (message) => { const el=$("#toast"); el.textContent=message; el.classList.add("show"); setTimeout(()=>el.classList.remove("show"),2600); };

$("#themeBtn").addEventListener("click",()=>{document.body.classList.toggle("light"); localStorage.setItem("void-theme",document.body.classList.contains("light")?"light":"dark");});
if(localStorage.getItem("void-theme")==="light") document.body.classList.add("light");

$("#menuBtn").addEventListener("click",()=>$(".desktop-nav").classList.toggle("open"));

const translations = {
  id:{navDiscover:"Jelajahi",navNews:"Berita",navMarket:"Pasar Akun",heroText:"Temukan game, jelajahi rilisan terbaru, dan dapatkan informasi gaming dengan bantuan AI.",searchPlaceholder:"Cari game, genre, atau platform...",searchButton:"Cari",trendingTitle:"Game Trending",viewAll:"Lihat semua ↗",aiText:"Tanyakan informasi game, mekanik gameplay, platform, atau berita terbaru.",aiPrompt:"Tanyakan sesuatu tentang game...",tryAi:"Coba demo AI ↗",newsTitle:"Artikel Terbaru"},
  en:{navDiscover:"Discover",navNews:"News",navMarket:"Account Market",heroText:"Discover games, explore new releases, and get gaming information powered by AI.",searchPlaceholder:"Search games, genres, or platforms...",searchButton:"Search",trendingTitle:"Trending Games",viewAll:"View all ↗",aiText:"Ask about games, gameplay mechanics, platforms, or the latest news.",aiPrompt:"Ask something about a game...",tryAi:"Try AI demo ↗",newsTitle:"Latest Articles"}
};
let lang="id";
$("#langBtn").addEventListener("click",()=>{lang=lang==="id"?"en":"id";document.documentElement.lang=lang;$$("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key])el.textContent=translations[lang][key];});$$("[data-placeholder]").forEach(el=>el.placeholder=translations[lang][el.dataset.placeholder]);});

function searchGames(){
  const q=$("#searchInput").value.trim().toLowerCase(); let visible=0;
  $$(".game-card").forEach(card=>{const match=(card.dataset.name+" "+card.dataset.tags).toLowerCase().includes(q);card.classList.toggle("hidden",!match);if(match)visible++;});
  $("#emptyState").classList.toggle("hidden",visible!==0);
}
$("#searchBtn").addEventListener("click",searchGames);
$("#searchInput").addEventListener("input",searchGames);
$("#searchInput").addEventListener("keydown",e=>{if(e.key==="Enter")searchGames();});

$$(".filter").forEach(btn=>btn.addEventListener("click",()=>{
  $$(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");
  const filter=btn.dataset.filter;let visible=0;
  $$(".game-card").forEach(card=>{const match=filter==="All"||card.dataset.tags.split(" ").includes(filter);card.classList.toggle("hidden",!match);if(match)visible++;});
  $("#emptyState").classList.toggle("hidden",visible!==0);
}));

$("#demoAsk").addEventListener("click",()=>toast("Demo UI saja — AI asli akan dihubungkan pada tahap backend."));
