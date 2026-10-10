const sample=document.querySelector('#sample');
document.querySelector('#sample-open').addEventListener('click',()=>sample.showModal());
document.querySelector('#sample-close').addEventListener('click',()=>sample.close());
sample.addEventListener('click',e=>{if(e.target===sample){const r=sample.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)sample.close();}});
const url=window.SALES_CONFIG?.checkoutUrl;
if(url){try{const u=new URL(url);if(u.protocol==='https:'&&u.hostname==='pay.hotmart.com'){u.searchParams.set('checkoutMode','10');const params=new URLSearchParams(window.location.search);['utm_source','utm_medium','utm_campaign','utm_content','utm_term','fbclid'].forEach(key=>{const value=params.get(key);if(value)u.searchParams.set(key,value);});document.querySelectorAll('.checkout').forEach(a=>{a.href=u.href;a.hidden=false;});document.querySelectorAll('.availability').forEach(p=>p.hidden=true);}}catch(e){console.warn('Checkout não configurado.');}}
