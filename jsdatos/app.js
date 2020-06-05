
firebase.initializeApp({
    apiKey: "AIzaSyDZqQ5xvIfbOuP0hkXfJ64r3awn7EXQMSM",
    authDomain: "lamellialmacenatr.firebaseapp.com",
      projectId: "lamellialmacenatr"
});
var db = firebase.firestore();
   
 
//Agregar documentos
function guardar(){
    var nombre = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('message').value;
    var entrega = document.getElementById('entrega').value;
    var pago = document.getElementById('pago').value;
    var fechahora = document.getElementById('date').value;

    db.collection("pedidoreya").add({
         correo: email,
       nombre: nombre,
          entrega: entrega,
       pago: pago,
        fechahora: fechahora,
         mensaje: mensaje
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        prompt("Enviado. pronto te responderemos...");
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
          document.getElementById('entrega').value = '';
        document.getElementById('pago').value = '';
        document.getElementById('date').value = '';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}
