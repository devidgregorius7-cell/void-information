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


// New Games 2026 status filters
$$('[data-release-filter]').forEach(button=>button.addEventListener('click',()=>{
  $$('[data-release-filter]').forEach(item=>item.classList.remove('active'));
  button.classList.add('active');
  const status=button.dataset.releaseFilter;
  $$('.release-card').forEach(card=>card.classList.toggle('hidden',status!=='all'&&card.dataset.releaseStatus!==status));
}));


// Void AI chatbot interface preview (no AI service connected yet)
const chatForm = document.querySelector('#voidChatForm');
const chatInput = document.querySelector('#voidChatInput');
const chatMessages = document.querySelector('#chatMessages');
function addChatBubble(role, title, message, note='') {
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${role}`;
  const heading = document.createElement('b'); heading.textContent = title;
  const body = document.createElement('p'); body.textContent = message;
  bubble.append(heading, body);
  if (note) { const small = document.createElement('small'); small.textContent = note; bubble.append(small); }
  chatMessages.append(bubble); chatMessages.scrollTop = chatMessages.scrollHeight;
}
if (chatForm && chatInput && chatMessages) {
  chatForm.addEventListener('submit', (event) => {
    event.preventDefault(); const question = chatInput.value.trim(); if (!question) return;
    addChatBubble('user', 'Lo', question); chatInput.value = '';
    addChatBubble('assistant', 'Void AI', 'Makasih pertanyaannya! Chatbot ini masih dalam tahap pemasangan. Koneksi ke layanan AI belum aktif, jadi pesanmu belum diproses.');
  });
  document.querySelectorAll('.chat-suggestion').forEach(button => button.addEventListener('click', () => { chatInput.value = button.textContent; chatInput.focus(); }));
}
