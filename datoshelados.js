var heladosagua = [ {
    id:"1",
    marca: "Crock",
    descripcion: "",
    precio: 65,
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/hela/5.webp"
},
{
    id:"2",
    marca: "Bombom ice cool",
    descripcion: "",
    cantidad:"",
    precio: 40,
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/hela/4.webp" 
},
{
    id:"3",
    marca: "Granizado",
    descripcion: "",
    precio: 50,
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "img/2/hela4.jpg"
},
{
    id:"4",
    marca: "Carucha",
    descripcion: "",
    cantidad:"",
    precio:50,
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/hela/22.jpeg" 
},
{
    id:"5",
    marca: "Combinado ice cool",
    descripcion: "",
    cantidad:"",
    precio:30,
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/hela/3.jpeg" 
},
{
    id:"6",
    marca: "Cono conolu",
    descripcion: "",
    cantidad:"",
    precio:120,
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/hela/1.jpg" 
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
    img:"images/hela/c4.png" 
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
},
{
    id:"4",
    marca: "<ul><li>Americana - Tramontana</li><li>Granizado - Limon </li><li>Ananá - Dulce de leche bombón</li><li>Chocolate Marroc - Crema Oreo </li><li>Frutos del bosque - Frutilla a la crema</li></ul>",
    descripcion: "",
    cantidad:"",
    precio: 400,
    cantidad:"",
    seccion:"",
    img: "" 
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

over1("#ph5", tasty[0].marca,tasty[0].precio,tasty[0].img,"");
over1("#ph6", tasty[1].marca,tasty[1].precio,tasty[1].img,"");
over1("#ph7", tasty[2].marca,tasty[2].precio,tasty[2].img,"");

over2("#ph8", heladosagua[4].marca,heladosagua[4].precio,heladosagua[4].img);
over2("#ph9", heladosagua[5].marca,heladosagua[5].precio,heladosagua[5].img);
 
 
 var over3 = function(atrr,on  ) {
	 var contenido2 = document.querySelector(atrr)
     contenido2.innerHTML = ` <div class="gustostasty"> ${on} </div> `
    }  


over3("#ph12", tasty[3].marca );


 