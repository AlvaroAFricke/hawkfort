// Importa EmailJS desde el paquete instalado
import emailjs from '@emailjs/browser';

// Inicializa EmailJS con tu clave pública
emailjs.init("kSZcewJQOopIOWIvD");

// Obtiene el formulario por su ID
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(form);
    
    emailjs
      .sendForm("service_k4blygv", "template_ng1cy4u", form)
      .then(
        function () {
          alert("Correo enviado exitosamente!");
        },
        function (error) {
          alert("Hubo un error: " + error.text);
        }
      );
  });
} else {
  console.error("Formulario no encontrado.");
}
