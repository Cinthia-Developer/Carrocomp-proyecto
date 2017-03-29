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
        var html= '<option>' + ciudades[i].name + '</option>' 
        
        lista.append(html); 
    }
}
//---- Dibujo de opciones ----
function createVehiculos(){
    var lista = $(".carros");
    for(var i in vehiculos){
        var html= 
        '<li>' +
        '<input type="checkbox">' +
        '<img src="' + vehiculos[i].srcImg + '" width="50px;" class="img-responsive" alt=""><p>' +        vehiculos[i].name + '<br><small>' + vehiculos[i].max + '</small></p></li>'
        
        lista.append(html); 
    }
} 
//-- Funcion para obtener el valor de origen:
function validateOrigen(){
    var origen = $(".origen").val();
    if(origen != 0)
        return true;
}
//-- Funcion para obtener el valor de destino:
function validateDestino(){
    var destino = $(".destino").val();
    if(destino != 0)
        return true;
}
//--Funcion para validar el boton:
function validToo(){
    if (validateOrigen()==true && validateDestino()==true){
        onClickInicio();
    }
}
$(".submit").click(validToo);
//-----------------------------
function onClickInicio(){
    $("#info").show();
}



