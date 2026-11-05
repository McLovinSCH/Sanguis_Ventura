// Estática de televisión (ruido animado)
(function(){
  const c=document.getElementById('static'),x=c.getContext('2d');
  c.width=160;c.height=90;
  function draw(){
    const d=x.createImageData(c.width,c.height);
    for(let i=0;i<d.data.length;i+=4){const v=Math.random()*255;d.data[i]=d.data[i+1]=d.data[i+2]=v;d.data[i+3]=255}
    x.putImageData(d,0,0);
  }
  setInterval(draw,90);draw();
})();

// Aparición al hacer scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Lightbox de capturas
const lb=document.getElementById('lightbox'),lbImg=lb.querySelector('img');
document.querySelectorAll('.shot').forEach(s=>s.addEventListener('click',()=>{
  if(!s.querySelector('img'))return;      // ignora placeholders sin imagen
  lbImg.src=s.dataset.full||s.querySelector('img').src;lb.classList.add('open');
}));
lb.addEventListener('click',()=>lb.classList.remove('open'));
document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('open')});
