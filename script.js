console.log ("Zapas store lista")
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.2
};
const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

const miboton = document.getElementById("boton-enviar")
miboton.addEventListener('click', (e)=>{
  e.preventDefault()
  alert("El formulario se envio correctamente")
})
let contador = 0;

document.querySelectorAll('.agregar-carrito').forEach(boton => {
  boton.addEventListener('click', () => {
    contador++;
    document.getElementById('contador-carrito').innerText = contador;
    alert('Producto agregado al carrito 🛒');
  });
});