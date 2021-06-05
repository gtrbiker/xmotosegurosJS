jQuery(()=>{})

$('.banner').fadeIn(1000)
$('#about').fadeIn(1500)


const tabla= document.querySelector("#table");

function cargarTabla(){
    let info;
    fetch("./db/polizas.json")
    .then(resp => resp.json())
    .then(data => {info = data.map (e =>{
        return `<thead class="thead-light">
                  <tr>
                    <th scope="col">Tipo de poliza</th>
                    <th scope="col">Cobertura</th>
                    <th scope="col">Monto de Responsabilidad civil</th>
                    <th scope="col">Franquicia</th>
                    <th scope="col">Cobertura contra incendio</th>
                    <th scope="col">Servicio de asistencia y remolque</th>
                    <th scope="col">Usos aceptados</th>   
                  </tr>
                </thead>
                
                <tr>
                  <td>${e.Poliza}</td>
                  <td>${e.Cobertura}</td>
                  <td>${e.Monto_RC}</td>
                  <td>${e.Franquicia}</td>
                  <td>${e.Cobertura_contra_incendio}</td>
                  <td>${e.Servicio_de_asistencia_y_remolque}</td>
                  <td>${e.Usos_aceptados}</td>
                </tr>`;
    }).join('');

    tabla.innerHTML = info;
  })
}

cargarTabla();