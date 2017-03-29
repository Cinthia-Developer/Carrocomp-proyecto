//---- Función Init ----
function init(){
    initMap();
    createOptions();
    createVehiculos();
}
//---- Función del mapa ----
function initMap() {
    var map;
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -33.43784391048617, lng: -70.65047959999998},
        zoom: 10
  });
}
//---- Dibujo de opciones ----
function createOptions(){
    var ciudades = get_regiones();
    var lista = $("select");
    for(var i in ciudades){
        var html= '<option value="' + ciudades[i].distance + '">' + ciudades[i].name +  '</option>'
         
        lista.append(html); 
    }
}
//---- Dibujo de opciones ----
function createVehiculos(){
    var lista = $(".carros");
    for(var i in vehiculos){
        var html= 
        '<li>' +
        '<input  class="checkbox" type="checkbox">' +
        '<img src="' + vehiculos[i].srcImg + '" width="50px;" class="img-responsive" alt=""><p>' +        vehiculos[i].name + '<br><small>Máximo ' + vehiculos[i].max + ' Pasajeros</small></p><span class="consumo">' + vehiculos[i].consumo + '</li>'
        
        lista.append(html); 
    }
} 
//-- Funcion para obtener el valor de origen:
function validateOrigen(){
    var origen = $(".origen").val();
    if(origen != 0)
        console.log(origen);
        return true;
}
//-- Funcion para obtener el valor de destino:
function validateDestino(){
    var destino = $(".destino").val();
    if(destino != 0)
        console.log(destino);
        return true;
}
//--Funcion para validar el boton:
function validToo(){
    if (validateOrigen()==true && validateDestino()==true){
        onClickInicio();
    }
}
$(".submit").click(validToo);
//-------- Para hacer y el siguiente cuadro ------
function onClickInicio(){
    $("#info").show();
}
//------ Función para hacer click en las opciones ----
$("ul").click(function click(){
    console.log("Se hizo click");
    var consumoTotal = $(".consumo").text();
    return consumoTotal;
});
//------ Resultado Final ----
function calculo(){
    var origen = $(".origen").val();
    var destino = $(".destino").val();
    var distancia = origen - destino;
    return distancia;
}

