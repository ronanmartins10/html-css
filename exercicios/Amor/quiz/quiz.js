// Música romântica
const musicaBtn = document.getElementById('musicaBtn');
const musica = document.getElementById('musica');
musicaBtn.addEventListener('click', () => {
  musica.play();
  musicaBtn.textContent = "uma musica que me lembra você 🎵";
  musicaBtn.disabled = true;
});

// Quiz interativo
const perguntas = [
  {id: 'p1', correta: 0},
  {id: 'p2', correta: 2},
  {id: 'p3', correta: 2},
  {id: 'p4', correta: 0},
  {id: 'p5', correta: 1},
  {id: 'p6', correta: 2},
  {id: 'p7', correta: 2},
];
let atual = 0;

perguntas.forEach((p, idx) => {
  const div = document.getElementById(p.id);
  const botoes = div.querySelectorAll('button');
  botoes.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      if(i === p.correta) {
        div.classList.add('oculto');
        if(idx + 1 < perguntas.length) {
          document.getElementById(perguntas[idx+1].id).classList.remove('oculto');
        } else {
          document.getElementById('resultadoQuiz').classList.remove('oculto');
        }
      } else {
        btn.style.background = "#bbb";
        btn.textContent = "Tente de novo!";
        setTimeout(() => {
          btn.style.background = "#e75480";
          btn.textContent = btn.textContent.replace("Tente de novo!", ["A) No Shopping", "B) No parque", "C) Em uma pizzaria", "A) Seu Cabelo", "B) Seu bundão", "C) Seu jeito", "A) Iracema", "B) Trem das 11", "C) Convite de Casamento", "A) No carro", "B) No shopping" , "C) Na sua casa" , "A) Um vestido", "B) Um buquê de flores", "C) Uma papete" , "A) Um gato", "B) Uma Cobra", "C) Um Shih Tzu" , "A)  Na igreja e um festão depois", "B) Na praia numa terça feira", "C) No papel e uma viagem pro exterior" ][idx*3+ i])
        }, 900);
      }
    })
    });
  });


// Surpresa final
document.getElementById('surpresaBtn').addEventListener('click', () => {
  document.getElementById('resultadoQuiz').classList.add('oculto');
  document.getElementById('surpresa').classList.remove('oculto');
});

// Chuva de corações
const canvas = document.getElementById('chuvaCoracoes');
const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}
window.addEventListener('resize', resize);

const coracoes = [];
for(let i=0; i<30; i++) {
  coracoes.push({
    x: Math.random()*width,
    y: Math.random()*-height,
    size: 20 + Math.random()*30,
    speed: 1 + Math.random()*2,
    opacity: 0.7 + Math.random()*0.3
  });
}

function drawHeart(x, y, size, opacity) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size/100, size/100);
  ctx.globalAlpha = opacity;
  ctx.beginPath();
  ctx.moveTo(50, 30);
  ctx.bezierCurveTo(50, 15, 90, 15, 90, 37);
  ctx.bezierCurveTo(90, 60, 50, 75, 50, 95);
  ctx.bezierCurveTo(50, 75, 10, 60, 10, 37);
  ctx.bezierCurveTo(10, 15, 50, 15, 50, 30);
  ctx.fillStyle = "#e75480";
  ctx.fill();
  ctx.restore();
}

function animar() {
  ctx.clearRect(0, 0, width, height);
  for(let c of coracoes) {
    drawHeart(c.x, c.y, c.size, c.opacity);
    c.y += c.speed;
    if(c.y > height + 50) {
      c.y = -50;
      c.x = Math.random()*width;
    }
  }
  requestAnimationFrame(animar);
}
animar();


