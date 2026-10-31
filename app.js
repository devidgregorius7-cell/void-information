const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const toast = (message) => { const el=$("#toast"); if(!el)return; el.textContent=message; el.classList.add("show"); setTimeout(()=>el.classList.remove("show"),2600); };

// Independent page navigation (no anchor scrolling)
function showPage(name){
  const target=$(`[data-view="${name}"]`);
  if(!target)return;
  $$(".page-view").forEach(page=>page.classList.toggle("active",page===target));
  $$(".side-link").forEach(link=>link.classList.toggle("active",link.dataset.page===name));
  document.body.classList.remove("sidebar-open");
  history.replaceState(null,"",`#${name}`);
  window.scrollTo({top:0,behavior:"instant"});
}
$$(".side-link").forEach(link=>link.addEventListener("click",e=>{e.preventDefault();showPage(link.dataset.page);}));
$$("[data-go]").forEach(button=>button.addEventListener("click",()=>showPage(button.dataset.go)));
const initial=location.hash.slice(1);
if(initial && $(`[data-view="${initial}"]`)) showPage(initial);

$("#menuBtn")?.addEventListener("click",()=>document.body.classList.add("sidebar-open"));
$("#sidebarClose")?.addEventListener("click",()=>document.body.classList.remove("sidebar-open"));
$("#sidebarOverlay")?.addEventListener("click",()=>document.body.classList.remove("sidebar-open"));
$("#collapseBtn")?.addEventListener("click",()=>document.body.classList.toggle("sidebar-collapsed"));

$("#themeBtn")?.addEventListener("click",()=>{document.body.classList.toggle("light");localStorage.setItem("void-theme",document.body.classList.contains("light")?"light":"dark");});
if(localStorage.getItem("void-theme")==="light")document.body.classList.add("light");
let lang="id";
$("#langBtn")?.addEventListener("click",()=>{lang=lang==="id"?"en":"id";document.documentElement.lang=lang;toast(lang==="en"?"Language preview: English selected.":"Bahasa Indonesia dipilih.");});
$("#loginBtn")?.addEventListener("click",()=>toast("Login belum aktif. Sistem akun menunggu backend."));
$("#registerBtn")?.addEventListener("click",()=>toast("Register belum aktif. Sistem akun menunggu backend."));

function searchGames(){const q=$("#searchInput")?.value.trim().toLowerCase()||"";let visible=0;$$('.game-card').forEach(card=>{const match=(card.dataset.name+" "+card.dataset.tags).toLowerCase().includes(q);card.classList.toggle("hidden",!match);if(match)visible++;});$("#emptyState")?.classList.toggle("hidden",visible!==0);}
$("#searchBtn")?.addEventListener("click",searchGames);
$("#searchInput")?.addEventListener("input",searchGames);
$("#searchInput")?.addEventListener("keydown",e=>{if(e.key==="Enter")searchGames();});
$$('.filter').forEach(btn=>btn.addEventListener('click',()=>{$$('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;let n=0;$$('.game-card').forEach(card=>{const ok=f==='All'||card.dataset.tags.split(' ').includes(f);card.classList.toggle('hidden',!ok);if(ok)n++;});$('#emptyState')?.classList.toggle('hidden',n!==0);}));
$$('[data-release-filter]').forEach(button=>button.addEventListener('click',()=>{$$('[data-release-filter]').forEach(item=>item.classList.remove('active'));button.classList.add('active');const status=button.dataset.releaseFilter;$$('.release-card').forEach(card=>card.classList.toggle('hidden',status!=='all'&&card.dataset.releaseStatus!==status));}));

// Void AI is still a visual prototype until a secure backend is connected.
const chatForm=$("#voidChatForm"),chatInput=$("#voidChatInput"),chatMessages=$("#chatMessages");
function addChatBubble(role,title,message,note=''){const bubble=document.createElement('div');bubble.className=`chat-bubble ${role}`;const heading=document.createElement('b');heading.textContent=title;const body=document.createElement('p');body.textContent=message;bubble.append(heading,body);if(note){const small=document.createElement('small');small.textContent=note;bubble.append(small);}chatMessages.append(bubble);chatMessages.scrollTop=chatMessages.scrollHeight;}
if(chatForm&&chatInput&&chatMessages)chatForm.addEventListener('submit',e=>{e.preventDefault();const q=chatInput.value.trim();if(!q)return;addChatBubble('user','Lo',q);chatInput.value='';addChatBubble('assistant','Void AI','Chatbot ini masih tahap preview. Pesan belum diproses karena layanan AI belum terhubung.');});
$$('.chat-suggestion').forEach(button=>button.addEventListener('click',()=>{if(chatInput){chatInput.value=button.textContent;chatInput.focus();}}));

const qrisMap={"5000":"assets/qris-5000.png","10000":"assets/qris-10000.png","17000":"assets/qris-17000.png","25000":"assets/qris-25000.png","38000":"assets/qris-38000.png"};$$('[data-qris]').forEach(button=>button.addEventListener('click',()=>{const amount=button.dataset.qris;if(!qrisMap[amount]){toast('QR untuk nominal ini belum tersedia.');return;}const box=$('#qrisDisplay');$('#qrisImage').src=qrisMap[amount];$('#qrisTitle').textContent='QRIS DANA';$('#qrisAmount').textContent='Nominal: Rp'+Number(amount).toLocaleString('id-ID');box.classList.remove('hidden');box.scrollIntoView({behavior:'smooth',block:'center'});}));$('#closeQris')?.addEventListener('click',()=>$('#qrisDisplay')?.classList.add('hidden'));
