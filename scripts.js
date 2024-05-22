//CONTACTO
document.addEventListener("DOMContentLoader", function () {
    const form = document.querySelector(".formulario");
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const submitButton = document.querySelector(".botone");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Validación de campos
        let isValid = true;

        if (nameInput.value.trim() === "") {
          isValid = false;
          displayError(nameInput, "Por favor ingresa tu nombre.");
        } else {
          removeError(nameInput);
        }

        if (phoneInput.value.trim() === "") {
          isValid = false;
          displayError(phoneInput, "Por favor ingresa tu teléfono.");
        } else {
          removeError(phoneInput);
        }

        if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value.trim())) {
          isValid = false;
          displayError(emailInput, "Por favor ingresa un correo electrónico válido.");
        } else {
          removeError(emailInput);
        }

        if (messageInput.value.trim() === "") {
          isValid = false;
          displayError(messageInput, "Por favor ingresa tu mensaje.");
        } else {
          removeError(messageInput);
        }

        // Si todos los campos son válidos, puedes enviar el formulario o realizar otras acciones
        if (isValid) {
          // Aquí puedes realizar acciones adicionales, como enviar el formulario o mostrar un mensaje de éxito
          alert("¡Formulario enviado con éxito!");
        }
      });

      function displayError(input, message) {
        const errorDiv = input.nextElementSibling;
        if (errorDiv && errorDiv.classList.contains("error")) {
          errorDiv.textContent = message;
        } else {
          const errorDiv = document.createElement("div");
          errorDiv.className = "error";
          errorDiv.textContent = message;
          input.parentNode.insertBefore(errorDiv, input.nextElementSibling);
        }
      }

      function removeError(input) {
        const errorDiv = input.nextElementSibling;
        if (errorDiv && errorDiv.classList.contains("error")) {
          errorDiv.remove();
        }
      }

      function isValidEmail(email) {
        // Esta función verifica si el formato del correo electrónico es válido
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
    });
