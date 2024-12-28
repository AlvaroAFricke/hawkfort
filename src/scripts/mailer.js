import emailjs from '@emailjs/browser';

// Inicializa EmailJS con tu clave pública
emailjs.init("kSZcewJQOopIOWIvD");

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

const formData = new FormData(this);
    console.log(Object.fromEntries(formData.entries()));

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
