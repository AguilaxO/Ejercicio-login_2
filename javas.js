const iconoMostrarContraseña = document.querySelector('#mostrarContraseña');
const inputContraseña = document.querySelector('#contraseña');

iconoMostrarContraseña.addEventListener("click", function() {
  this.classList.toggle("fa-eye");
  const type = inputContraseña.getAttribute("type") === "password" ? "text" : "password";
  inputContraseña.setAttribute("type", type);
});

