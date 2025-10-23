const VENTANA_ESTRENO_DIAS = 120;  
let PELICULAS = []; 

// Función: calcular días entre dos fechas
function diasEntre(hoy, fecha) {
  return (hoy - fecha) / (1000 * 60 * 60 * 24);
}

// ¿Está en estreno?
function estaEnEstreno(peli) {
  const hoy = new Date();
  const f = new Date(peli.estreno);
  return diasEntre(hoy, f) <= VENTANA_ESTRENO_DIAS;
}

// Precio actual (estreno o normal)
function precioActual(peli) {
  return estaEnEstreno(peli) ? peli.precios.estreno : peli.precios.normal;
}

// Calcula total: precioActual * días
function calcularTotal(idsSeleccionados, dias) {
  let total = 0;
  idsSeleccionados.forEach(id => {
    const peli = PELICULAS.find(p => p.id == id);
    if (peli) total += precioActual(peli) * dias;
  });
  return total;
}

$(function () {
  // Cargar JSON de películas
  $.getJSON("../data/peliculas.json", function (data) {
    PELICULAS = data;

    // llenar select con títulos
    const $sel = $("#peliculas");
    PELICULAS.forEach(p => {
      const precio = precioActual(p).toFixed(2);
      $sel.append(new Option(`${p.titulo} ($${precio}/día)`, p.id));
    });

    // recalcular total cuando cambian selección o días
    $("#peliculas, #dias").on("change input", actualizarTotal);
    actualizarTotal();
  });

  // Cuando envías el formulario
  $("#form-renta").on("submit", function (e) {
    e.preventDefault();

    const cliente = $("#cliente").val().trim();
    const correo  = $("#correo").val().trim();
    const pago    = $("#pago").val();
    const dias    = parseInt($("#dias").val(), 10);
    const idsSel  = $("#peliculas").val() || [];

    const $lista = $("#m-lista").empty();
    let total = 0;

    idsSel.forEach(id => {
      const peli = PELICULAS.find(p => p.id == id);
      if (!peli) return;
      const unit = precioActual(peli);
      const sub  = unit * dias;
      total += sub;

      $lista.append(`
        <li class="list-group-item d-flex justify-content-between">
          <span>${peli.titulo}</span>
          <span>$${unit.toFixed(2)} × ${dias} día(s) = <strong>$${sub.toFixed(2)}</strong></span>
        </li>
      `);
    });

    // Rellenar modal
    $("#m-cliente").text(cliente);
    $("#m-correo").text(correo);
    $("#m-pago").text(pago || "—");
    $("#m-dias").text(dias);
    $("#m-total").text(`$${total.toFixed(2)}`);

    // Mostrar modal
    const modal = new bootstrap.Modal(document.getElementById("resumenModal"));
    modal.show();
  });
});

// Actualiza total en el formulario
function actualizarTotal() {
  const idsSel = $("#peliculas").val() || [];
  const dias   = parseInt($("#dias").val(), 10) || 1;
  const total  = calcularTotal(idsSel, dias);
  $("#total").text(`$${total.toFixed(2)}`);
}

