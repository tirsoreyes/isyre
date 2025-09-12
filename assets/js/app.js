
function $(sel,root=document){return root.querySelector(sel)}
function el(tag,cls){const e=document.createElement(tag); if(cls) e.className=cls; return e}

function setActiveNav(id){
  const links = document.querySelectorAll('.nav-links a')
  links.forEach(a=>{ if(a.dataset.id===id){ a.classList.add('active') } })
}

async function loadJSON(path){ const res = await fetch(path); return await res.json() }

function mountHeader(activeId){
  const logo = 'assets/img/logo.png'
  const container = $('.header-slot')
  container.innerHTML = `
    <div class="container">
      <nav>
        <a href="index.html" class="logo">
          <img src="${logo}" alt="ISyRE logo" onerror="this.style.display='none'">
          <span class="brand">ISyRE</span>
        </a>
        <div class="nav-links">
          <a data-id="soluciones" href="soluciones.html">Soluciones</a>
          <a data-id="proyectos" href="proyectos.html">Proyectos</a>
          <a data-id="galeria" href="galeria.html">Galería</a>
          <a data-id="faq" href="faq.html">FAQs</a>
          <a data-id="contacto" href="contacto.html">Contacto</a>
        </div>
      </nav>
    </div>`
  setActiveNav(activeId)
}

async function mountFooter(){
  const site = await loadJSON('data/site.json')
  const year = new Date().getFullYear()
  const foot = $('.footer-slot')
  foot.innerHTML = `
    <div class="container foot">
      <div>
        <div class="brand" style="margin-bottom:8px">ISyRE</div>
        <p class="tiny">Redes administradas, hotspot con fichas, enlaces Ubiquiti, MikroTik, WiFi/cableado. Instalamos en toda la República Mexicana.</p>
        <p class="tiny">© ${year} ISyRE. <a href="aviso.html">Aviso de Privacidad</a> • <a href="terminos.html">Términos del Servicio</a></p>
      </div>
      <div>
        <div class="tiny">Redes sociales</div>
        <div style="display:flex;gap:10px;margin-top:6px" id="socials"></div>
      </div>
      <div>
        <div class="tiny">Atención</div>
        <div class="tiny">Soporte WhatsApp: 8:00–18:00 h • Emergencias fuera de horario</div>
      </div>
    </div>`
  const socials = $('#socials')
  site.socials.forEach(s=>{const a=el('a','pill'); a.href=s.href; a.target='_blank'; a.textContent=s.label; socials.appendChild(a)})
  const fab = $('#fab')
  if (site.floating_whatsapp) { fab.classList.add('show'); fab.href = 'https://wa.me/'+site.whatsapp }
}

// Builders
async function buildServices(){
  const svc = await loadJSON('data/services.json')
  const wrap = $('#svc')
  svc.items.forEach(s=>{
    const card = el('div','card pad')
    const h = el('h3'); h.textContent = s.title; card.appendChild(h)
    const p = el('p'); p.className='muted'; p.textContent = s.desc; card.appendChild(p)
    const ul = el('ul'); ul.className='list'
    s.bullets.forEach(b=>{const li=el('li'); li.textContent=b; ul.appendChild(li) })
    card.appendChild(ul)
    const a = el('a','btn'); a.href='contacto.html'; a.textContent=s.cta; a.style.marginTop='10px'; card.appendChild(a)
    wrap.appendChild(card)
  })
}

async function buildProjects(){
  const proj = await loadJSON('data/projects.json')
  const wrap = $('#projects')
  proj.items.forEach(p=>{
    const card = el('div','card')
    const img = el('img'); img.src=p.image; img.alt=p.title; card.appendChild(img)
    const box = el('div','pad'); const h=el('h3'); h.textContent=p.title; box.appendChild(h)
    const d=el('p'); d.className='muted'; d.textContent=p.desc; box.appendChild(d)
    card.appendChild(box); wrap.appendChild(card)
  })
}

async function buildGallery(){
  const gal = await loadJSON('data/gallery.json')
  const pwrap = $('#photos')
  gal.photos.forEach(ph=>{
    const fig = el('figure'); const img = el('img'); img.src=ph.url; img.alt=ph.title; fig.appendChild(img)
    const cap = el('figcaption'); cap.innerHTML = `<strong>${ph.title}</strong><br>${ph.caption}`; fig.appendChild(cap)
    pwrap.appendChild(fig)
  })
  const vwrap = $('#videos')
  gal.videos.forEach(v=>{
    const card = el('div','card pad')
    const h = el('h4'); h.textContent=v.title; card.appendChild(h)
    const box = el('div'); box.style.aspectRatio='16/9'; box.style.border='1px solid rgba(255,255,255,.08)'; box.style.borderRadius='12px'; box.style.overflow='hidden'; box.style.background='#0b1426'
    box.innerHTML = `<iframe width="100%" height="100%" src="${v.youtube}" title="${v.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    card.appendChild(box)
    const p = el('p'); p.className='muted'; p.textContent=v.caption; card.appendChild(p)
    vwrap.appendChild(card)
  })
}

async function buildFaqs(){
  const f = await loadJSON('data/faqs.json')
  const wrap = $('#faqs')
  f.items.forEach(item=>{
    const det = el('details'); const sum = el('summary'); sum.textContent=item.q; det.appendChild(sum)
    const div = el('div'); div.textContent=item.a; det.appendChild(div); wrap.appendChild(det)
  })
}

async function fillContact(){
  const site = await loadJSON('data/site.json')
  $('#tel').textContent = site.phone
  $('#mail').textContent = site.email
  const wa = $('#wa'); if(wa) wa.href = 'https://wa.me/'+site.whatsapp
}

document.addEventListener('DOMContentLoaded', ()=>{
  // Footer mount on every page
  mountFooter()

  // Modal para topología mínima (index.html)
  const topologiaImg = document.getElementById('topologia-img');
  const modalTopologia = document.getElementById('modal-topologia');
  if(topologiaImg && modalTopologia){
    topologiaImg.addEventListener('click', ()=>{
      modalTopologia.style.display = 'flex';
    });
    modalTopologia.addEventListener('click', ()=>{
      modalTopologia.style.display = 'none';
    });
  }
})
