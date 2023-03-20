// Obtener los elementos HTML que necesitamos
const form = document.getElementById('registroForm');
const nombreInput = document.getElementById('nombre2');
const descripcionInput = document.getElementById('descripcion');
const mensajeDiv = document.getElementById('mensaje');
const editarTareaBtn = document.getElementById('editarTarea');

// Agregar un event listener al botón de añadir tarea
editarTareaBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevenir que se recargue la página al enviar el formulario

  // Obtener los valores de los inputs de nombre y descripción
  const nombre = nombreInput.value;
  const descripcion = descripcionInput.value;

  // Crear un nuevo elemento <p> para mostrar el mensaje
  const mensaje = document.createElement('p');
  mensaje.innerText = `Se ha acutualizado la tarea ahora su nombre es "${nombre}" y su descripcion es "${descripcion}"`;

  // Agregar el mensaje al div correspondiente y resetear el formulario
  mensajeDiv.appendChild(mensaje);
  form.reset();
});