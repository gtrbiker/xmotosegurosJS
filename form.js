jQuery(()=>{})

$('.formulario').fadeIn(1500)


const cotizarSeguro=()=>{
    let nombreCliente = $('#validationCustom01').val()
    let apellidoCliente = $('#validationCustom02').val()
    let correoCliente = $('#validationCustom03').val()
    let telefonoCliente = $('#validationCustom04').val()
    let provinciaCliente = $('#validationCustom05').val()
    let marcaCliente = $('#validationCustom06').val()
    let anioCliente = $('#validationCustom07').val()
    let polizaCliente = $('#validationCustom08').val()



    localStorage.setItem('nombre', nombreCliente)
    localStorage.setItem('apellido', apellidoCliente)
    localStorage.setItem('email', correoCliente)
    localStorage.setItem('telefono', telefonoCliente)
    localStorage.setItem('provincia', provinciaCliente)
    localStorage.setItem('marca moto', marcaCliente)
    localStorage.setItem('año moto', anioCliente)
    localStorage.setItem('tipo de poliza', polizaCliente)



    let divResumen = $('#resumen')

      if(nombreCliente === '' ||
        apellidoCliente === '' ||
        provinciaCliente === '' ||
        marcaCliente === '' ||
        anioCliente === '' ||
        polizaCliente === ''){
            mostrarError("msj-error-cotizador","FALTAN COMPLETAR CAMPOS");
            return;
      }
      if(correoCliente === '') {
        mostrarError("msj-error-cotizador","FALTAN COMPLETAR CAMPOS");
            return;
      } else  if (!isEmail(correoCliente)) {
        mostrarError("msj-error-cotizador","EMAIL INVALIDO");
        return;
      
      }

      if(telefonoCliente === '') {
        mostrarError("msj-error-cotizador","FALTAN COMPLETAR CAMPOS");
            return;
      } else  if (telefonoCliente.length>10 ||telefonoCliente.length<10) {
        mostrarError("msj-error-cotizador","TELEFONO INVALIDO");
        return;
      } else  if (isNaN(telefonoCliente)) {
        mostrarError("msj-error-cotizador","TELEFONO INVALIDO");
        return;
      }

      

    
    let cotizacion={marcaCliente,
                    anioCliente,
                    polizaCliente};
    
    
    const cotizar=(cotizacion)=>{
                  
                  const{marcaCliente,
                        anioCliente,
                        polizaCliente}=cotizacion;

                  let resultado=1000;

                  const diferenciaAnio=diferencia(anioCliente);
                  resultado-=((diferenciaAnio*3)*resultado)/100;

                  resultado=calcularMarca(marcaCliente)*resultado;

                  const incrementoPlan=obtenerPlan(polizaCliente);
                  resultado= parseFloat(incrementoPlan*resultado).toFixed(2);
                  return resultado;
      
    }

    let cotizacionFinal=cotizar(cotizacion);

    divResumen.append(` <div class="card">
                          <div class="card-header">
                              Bienvenido ${nombreCliente}
                          </div>
                          <div class="card-body">
                              <h5 class="card-title">Este es el resumen de su cotizacion</h5>
                              <ul class="card-text">
                                  <li>Nombre: ${nombreCliente}</li>
                                  <li>Apellido: ${apellidoCliente}</li>
                                  <li>Correo Electronico: ${correoCliente}</li>
                                  <li>Telefono Celular: ${telefonoCliente}</li>
                                  <li>Provincia: ${provinciaCliente}</li>
                                  <li>Marca y modelo de su moto: ${marcaCliente}</li>
                                  <li>Año de su moto: ${anioCliente}</li>
                                  <li>Tipo de poliza ${polizaCliente}</li>
                              </ul>
                              <div class="card-body">
                                  <p>El precio de su seguro es: ${cotizacionFinal}</p>
                              </div>
                          </div>
                        </div>`)


                

}




const obtenerPlan=polizaCliente=>{
        switch(polizaCliente){
          case 'Bronze': incremento=1;break;
          case 'Silver': incremento=1.10;break;
          case 'Gold': incremento=1.20;break;
   
        }
        return incremento;
}


const calcularMarca=marcaCliente=>{
        let incremento;

        switch(marcaCliente){
          case 'Bajaj NS200': incremento=1.20; break;
          case 'Bajaj Boxer 150': incremento=1.10; break;
          case 'Corven Txr 250L': incremento=1.15; break;
          case 'Corven Mirage 110': incremento=1.05; break;
          case 'Honda Xr 250 Tornado': incremento=1.25; break;
          case 'Honda Cb 250 Twister': incremento=1.25; break;
          case 'Yamaha Fz 2.0': incremento=1.20; break;
          case 'Yamaha Xtz 250': incremento=1.25; break;

        }
        return incremento;
}


const diferencia=(anioCliente)=>{ return new Date().getFullYear()-anioCliente;}


const mostrarError=(elemento, mensaje)=>{
    divError=document.getElementById(elemento);
    divError.innerHTML=`<p class= "alerta-error alert-danger error">${mensaje}</p>`;
    setTimeout(()=>{divError.innerHTML=``;}, 5000);
}


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
















    
































































