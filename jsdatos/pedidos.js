
firebase.initializeApp({
   apiKey: "AIzaSyCsWEtRzkkoA-mcGW8oBBTbBPYFn5tU_Ts",
 authDomain: "pedidosonlinemelli.firebaseapp.com",
      projectId: "pedidosonlinemelli"
});
var db = firebase.firestore();
   
 
//Agregar documentos
function guardar(){
    var nombre = document.getElementById('name').value;
    var dire = document.getElementById('dire').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('message').value;
    var entrega = document.getElementById('entrega').value;
    var pago = document.getElementById('pago').value;
    
    db.collection("pedidos").add({
         celular: email,
       nombre: nombre,
         dire: dire,
          entrega: entrega,
       pago: pago, 
         mensaje: mensaje
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        prompt("GRACIAS por comprar online, le responderemos para confirmar que su pedido ya ha sido armado para su entrega...");
        document.getElementById('name').value = '';
        document.getElementById('dire').value = '';
     
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
          document.getElementById('entrega').value = '';
        document.getElementById('pago').value = ''; 
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}
