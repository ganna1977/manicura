const formCita = document.getElementById("form-cita");

if (formCita) {
  formCita.addEventListener("submit", function (event) {
    event.preventDefault(); // para que no recargue la página

    const datos = new FormData(formCita);
    const nombre = datos.get("nombre");
    const servicio = datos.get("servicio");
    const fecha = datos.get("fecha");
    const hora = datos.get("hora");

    alert(
      `Gracias, ${nombre}. \nHas pedido una cita para ${servicio} el día ${fecha} a las ${hora}. \nTe contactaré para confirmarla.`
    );

    formCita.reset();
  });
}
