const datos_p = [{
    "id": 1,
    "nombre_cliente_venta": "Sebastian ",
    "apellido_cliente_venta": "Castaño",
    "fecha_venta": '07/09/2023',
    "precio_total": "500.000$"


}, {
    "id": 2,
    "nombre_cliente_venta": "Sebastian ",
    "apellido_cliente_venta": "Castaño",
    "fecha_venta": '07/09/2023',
    "precio_total": "500.000$"
}, {
    "id": 3,
    "nombre_cliente_venta": "Sebastian ",
    "apellido_cliente_venta": "Castaño",
    "fecha_venta": '07/09/2023',
    "precio_total": "500.000$"
}, {
    "id": 4,
    "nombre_cliente_venta": "Sebastian ",
    "apellido_cliente_venta": "Castaño",
    "fecha_venta": '07/09/2023',
    "precio_total": "500.000$"
}, {
    "id": 5,
    "nombre_cliente_venta": "Sebastian ",
    "apellido_cliente_venta": "Castaño",
    "fecha_venta": '07/09/2023',
    "precio_total": "500.000$"
}, {
    "id": 6,
    "nombre_cliente_venta": "Sebastian ",
    "apellido_cliente_venta": "Castaño",
    "fecha_venta": '07/09/2023',
    "precio_total": "500.000$"
}, {
    "id": 7,
    "nombre_cliente_venta": "Sebastian ",
    "apellido_cliente_venta": "Castaño",
    "fecha_venta": '07/09/2023',
    "precio_total": "500.000$"
}, {
    "id": 8,
    "nombre_cliente_venta": "Sebastian ",
    "apellido_cliente_venta": "Castaño",
    "fecha_venta": '07/09/2023',
    "precio_total": "500.000$"
}, {
    "id": 9,
    "nombre_cliente_venta": "Sebastian ",
    "apellido_cliente_venta": "Castaño",
    "fecha_venta": '07/09/2023',
    "precio_total": "500.000$"
}, {
    "id": 10,
    "nombre_cliente_venta": "Sebastian ",
    "apellido_cliente_venta": "Castaño",
    "fecha_venta": '07/09/2023',
    "precio_total": "500.000$"
}]

const table_p = document.getElementById('tblP');
const pagination_p = document.getElementById('pagination_p');
const prevPageButton_p = document.getElementById('prevPage_p');
const nextPageButton_p = document.getElementById('nextPage_p');
const currentPageSpan_p = document.getElementById('currentPage_p');
let pagina_principal_p = 1;
const itemsPerPage_p = 5; // Cambia esto para ajustar la cantidad de filas por página

function showdatos_p(page) {
    const startIndex = (page - 1) * itemsPerPage_p;
    const endIndex = startIndex + itemsPerPage_p;
    const paginateddatos_p = datos_p.slice(startIndex, endIndex);

    table_p.tBodies[0].innerHTML = '';

    for (const item of paginateddatos_p) {
        const row = table_p.tBodies[0].insertRow();
        row.insertCell(0).textContent = item.id;
        row.insertCell(1).textContent = item.nombre_cliente_venta;
        row.insertCell(2).textContent = item.apellido_cliente_venta;
        row.insertCell(3).textContent = item.fecha_venta;
        row.insertCell(4).textContent = item.precio_total;
      


        const opcionesCell = row.insertCell(5);
        opcionesCell.className = 'Opciones';

        opcionesCell.innerHTML = `
          <td class="Opciones">
            <div>
                <a href="detalle_ventas"><img src="../images/eye-svgrepo-com.svg" alt="icon"
                    class="opc_eyes"></a>
            </div>
            <div>
                <a href="editar_ventas"><img src="../images/editar.png" alt="icon" class="opc_edit"></a>
            </div>
            <div>
                <img src="../images/borrar.png" alt="icon"
                    class="opc_delete" onclick="mostrarAlerta()">
            </div>
          </td>
            `;
    }


    pagina_principal_p = page;
    currentPageSpan_p.textContent = pagina_principal_p;
    prevPageButton_p.disabled = pagina_principal_p === 1;
    nextPageButton_p.disabled = pagina_principal_p === Math.ceil(datos_p.length / itemsPerPage_p);
}

prevPageButton_p.addEventListener('click', () => {
    if (pagina_principal_p > 1) {
        showdatos_p(pagina_principal_p - 1);
    }
});

nextPageButton_p.addEventListener('click', () => {
    if (pagina_principal_p < Math.ceil(datos_p.length / itemsPerPage_p)) {
        showdatos_p(pagina_principal_p + 1);
    }
});

showdatos_p(pagina_principal_p); // Mostrar la primera página al cargar la página

