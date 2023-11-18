document.addEventListener("DOMContentLoaded", function () {
  const selectSeguro = document.getElementById("tipodeseguro");
  const precioSeguro = document.getElementById("precioSeguro");

  
  function actualizarPrecio() {
    const opcionSeleccionada = selectSeguro.options[selectSeguro.selectedIndex];
    const precio = opcionSeleccionada.getAttribute("data-precio");
    precioSeguro.textContent = `Precio del Seguro: $${precio}`;
  }

  
  selectSeguro.addEventListener("change", actualizarPrecio);

  // Mostrar el precio inicial al cargar la página
  actualizarPrecio();
});
