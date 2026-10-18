const capaParticulas = document.querySelector('.particulas');
const adornos = ['♥', '♡', '✧', '❦'];
function crearParticula(extra = false) {
  const elemento = document.createElement('span');
  elemento.className = 'particula';
  elemento.textContent = extra ? '♥' : adornos[Math.floor(Math.random() * adornos.length)];
  elemento.style.left = `${Math.random() * 100}%`;
  elemento.style.fontSize = `${12 + Math.random() * 17}px`;
  elemento.style.animationDuration = `${7 + Math.random() * 12}s`;
  elemento.style.animationDelay = `${-Math.random() * 14}s`;
  if (extra) {
    elemento.style.color = '#e7a59b';
    elemento.style.animationDuration = `${3 + Math.random() * 3}s`;
  }
  capaParticulas.appendChild(elemento);
  if (extra) setTimeout(() => elemento.remove(), 6500);
}
for (let i = 0; i < 26; i++) crearParticula();

const modal = document.getElementById('modalCarta');
document.getElementById('abrirCarta').addEventListener('click', () => {
  modal.classList.add('abierta');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
});
function cerrar() {
  modal.classList.remove('abierta');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
document.getElementById('cerrarCarta').addEventListener('click', cerrar);
modal.addEventListener('click', (evento) => {
  if (evento.target === modal) cerrar();
});
document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape') cerrar();
});

const botonPerdon = document.getElementById('aceptarPerdon');
botonPerdon.addEventListener('click', () => {
  document.getElementById('respuesta').textContent =
    'Te amo, mi terremotito. Gracias por darme tu perdón ❤️';
  document.getElementById('respuesta').classList.add('visible');
  botonPerdon.textContent = 'Te amo muchísimo ❤️';
  botonPerdon.disabled = true;
  for (let i = 0; i < 22; i++) crearParticula(true);
});
