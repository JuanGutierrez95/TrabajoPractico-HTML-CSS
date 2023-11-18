document.addEventListener("DOMContentLoaded", function () {
  const selectSeguro = document.getElementById("tipodeseguro");
  const precioSeguro = document.getElementById("precioSeguro");

  // Función para actualizar el precio del seguro
  function actualizarPrecio() {
    const opcionSeleccionada = selectSeguro.options[selectSeguro.selectedIndex];
    const precio = opcionSeleccionada.getAttribute("data-precio");
    precioSeguro.textContent = `Precio del Seguro: $${precio}`;
  }

  // Evento de cambio en el select
  selectSeguro.addEventListener("change", actualizarPrecio);

  // Mostrar el precio inicial al cargar la página
  actualizarPrecio();
});
