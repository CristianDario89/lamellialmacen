//configuración personal de Firebase
firebase.initializeApp({
    apiKey: "AIzaSyC3e1YZXQ8wDOSpMY710jEHAQdI4i2KZZI",
    authDomain: "serviciosyaform.firebaseapp.com",
    projectId: "serviciosyaform"
});
  
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

//Agregar documentos
function guardar(){
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
    var entrega = document.getElementById('entrega').value;
    var pago = document.getElementById('pago').value;
    var fechahora = document.getElementById('fechahora').value;

    db.collection("users").add({
         correo: email,
       msj: mensaje,
        nombre: nombre,
          entrega: entrega,
       pago: pago,
        fechahora: fechahora
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        prompt("Enviado. pronto te responderemos...");
        document.getElementById('nombre').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensaje').value = '';
          document.getElementById('entrega').value = '';
        document.getElementById('pago').value = '';
        document.getElementById('fechahora').value = '';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}
