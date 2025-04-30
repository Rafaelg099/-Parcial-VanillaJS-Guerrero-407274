document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");
    
    if (contactForm) {
      contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const message = document.getElementById("message").value;
        
        // Reemplaza este correo con tu dirección de email personal
        const tuCorreoPersonal = "andresguerrero.e099@gmail.com";
        
        // Para hacer una demostración sin configurar EmailJS
        if (!window.emailjs || !emailjs.send) {
          simulateEmailSending(message, tuCorreoPersonal);
          return;
        }
        
        // Código real de EmailJS
        sendEmailViaEmailJS(message, tuCorreoPersonal);
      });
    }
    
    function sendEmailViaEmailJS(message, targetEmail) {
      formStatus.textContent = "Enviando mensaje...";
      formStatus.className = "form-status sending";
      
      // Estos valores son temporales, debes reemplazarlos con los tuyos
      emailjs.send("service_bw3o9ub", "service_bw3o9ub", {
        message: message,
        to_email: targetEmail
      }).then(
        function(response) {
          console.log("SUCCESS", response);
          formStatus.textContent = "¡Mensaje enviado con éxito!";
          formStatus.className = "form-status success";
          contactForm.reset();
        },
        function(error) {
          console.log("FAILED", error);
          formStatus.textContent = "Error al enviar el mensaje. Inténtalo nuevamente.";
          formStatus.className = "form-status error";
        }
      );
    }
    
    // Función de demostración que simula el envío del email
    function simulateEmailSending(message, targetEmail) {
      formStatus.textContent = "Enviando mensaje...";
      formStatus.className = "form-status sending";
      
      // Simulamos una espera de red
      setTimeout(function() {
        console.log("Mensaje simulado enviado a:", targetEmail);
        console.log("Contenido:", message);
        
        formStatus.textContent = "¡Mensaje enviado con éxito!";
        formStatus.className = "form-status success";
        contactForm.reset();
      }, 1500);
    }
  });