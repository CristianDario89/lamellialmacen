
firebase.initializeApp({
  apiKey: "AIzaSyDrUL3fv-BnVi2XcnOFq9kuH6K8bQRWiYM",
  authDomain: "pedidosdale-6cf2f.firebaseapp.com",
  projectId: "pedidosdale-6cf2f"
});
var db = firebase.firestore();
   
 
//Agregar documentos
function guardar(){
     var dire = document.getElementById('dire').value;
    var email = document.getElementById('email').value;
    
      var entrega = document.getElementById('entrega').value;
    var pago = document.getElementById('pago').value;
    
    db.collection("pedidosdale-6cf2f").add({
         celular: email,
          direccion: dire,
          entrega: entrega,
       pago: pago 
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        prompt("GRACIAS por comprar online, le responderemos para pedir captura de pantalla de sus productos");
          document.getElementById('dire').value = '';
     
        document.getElementById('email').value = ''; 
          document.getElementById('entrega').value = '';
        document.getElementById('pago').value = ''; 
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}
