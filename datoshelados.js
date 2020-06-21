var heladosagua = [ {
    id:"",
    marca: "de agua",
    descripcion: "",
    precio: "$20",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "img/2/hela2.png"
},
{
    id:"",
    marca: "Bon-o-bom y crema",
    descripcion: "",
    cantidad:"",
    precio: "$60",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "img/2/hela1.png" 
},
{
    id:"",
    marca: "Bon-o-bom vainilla",
    descripcion: "",
    precio: "$60",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "img/2/hela4.jpg"
},
{
    id:"",
    marca: "Tacitas",
    descripcion: "",
    cantidad:"",
    precio: "$90",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "img/2/hedagua1.jpg" 
}
];
 
var tasty = [ {
    id:"1",
    marca: "El cuarto - <strong>1/4</strong>",
    descripcion: "",
    precio: 120,
    cantidad:"",
    seccion:"",
    img:"img/2/hela6.png"
},
{
    id:"2",
    marca: "El medio - <strong>1/2</strong>",
    descripcion: "",
    cantidad:"",
    precio: 200,
    cantidad:"",
    seccion:"",
    img:"img/2/helatasty1.jpeg" 
},
{
    id:"3",
    marca: "El kilo - <strong>1K</strong>",
    descripcion: "",
    cantidad:"",
    precio: 400,
    cantidad:"",
    seccion:"",
    img: "img/2/helatasty1.jpeg" 
}
];
 
/*--------------------------------*/
var galletitas = [ {
    id:"",
    secciones:["budines","facturas","dulces","saladas"],
    descripcion: "",
    proveedores:["budines","facturas","dulces","saladas"]   
} 
] 

/*--------------------------------*/
var proveedores = [ {
    id:"",
    nombre:"",
    telefono: "",
    direccion:"",
    productos:["budines","facturas","dulces","saladas"]   
} 
] 
/*-------------Card Overlay---------*/
var over2 = function(atr,one,two, three) {
	    var contenido = document.querySelector(atr)
	        contenido.innerHTML = `
       <div class="fh5co-food-desc " >
										<figure>
											<img src="${three}" class="img-responsive" alt="Free HTML5 Templates by FREEHTML5.co">
										</figure>
										<div>
											<h3>${one}</h3>
											
										</div>
									</div>
									<div class="fh5co-food-pricing">
										${two}
   </div>
   `
    }     

 var over1 = function(atrr,on,tw, thre,four) {
	    var contenido2 = document.querySelector(atrr)
	        contenido2.innerHTML = `
    <div class="fh5co-food-desc " >
										<figure>
											<img src="${thre}" class="img-responsive" alt="Free HTML5 Templates by FREEHTML5.co">
										</figure>
										<div>
											<h3>${on}</h3>
											<p>${four}</p>
										</div>
									</div>
									<div class="fh5co-food-pricing">
								     $ ${tw}
									</div>
   `
    }  


over2("#ph1", heladosagua[0].marca,heladosagua[0].precio,heladosagua[0].img);
over2("#ph2", heladosagua[1].marca,heladosagua[1].precio,heladosagua[1].img);
over2("#ph3", heladosagua[2].marca,heladosagua[2].precio,heladosagua[2].img);
over2("#ph4", heladosagua[3].marca,heladosagua[3].precio,heladosagua[3].img);

over1("#ph5", tasty[0].marca,tasty[0].precio,tasty[0].img,"Americana - Tramontana - Granizado - Limon - Ananá");
over1("#ph6", tasty[1].marca,tasty[1].precio,tasty[1].img,"Dulce de leche bombón - Dulce de leche granizado - Chocolate Ferrero - Chocolate Marroc");
over1("#ph7", tasty[2].marca,tasty[2].precio,tasty[2].img,"Crema Oreo - Frutos del bosque - Frutilla a la crema - Menta granizado");
 


 