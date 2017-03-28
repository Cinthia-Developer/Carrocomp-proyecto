//---- Función Init ----
function init(){
    initMap();
    createOptions();
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
//-- Funcion para validar el email (nombre@gmail.com):
function validateOrigen(){
    var origen = $(".origen").val();
    if(origen != 0)
        return true;
}
//-- Funcion para validar el email (nombre@gmail.com):
function validateDestino(){
    var destino = $(".destino").val();
    if(destino != 0)
        return true;
}
//--Funcion para validar el boton:
function validToo(){
    if (validateOrigen()==true && validateDestino()==true){
        alert("todo esta bien");
    }
}
$(".submit").click(validToo);


