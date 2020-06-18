var alma1 = [ {
    id:"1",
    marca: "leche <strong>la serenisima</strong> ",
    descripcion: "",
    precio: 70,
    cantidad:"",
    seccion:"",
    img:"images/limpi/l2.png"
},
{
    id:"2",
    marca: "leche <strong>la suipachense</strong> ",
    descripcion: "",
    cantidad:"",
    precio: 110,
    cantidad:"",
    seccion:"",
    img:"images/limpi/l3.webp" 
},
{
    id:"3",
    marca: "yogur <strong>ilolay</strong>",
    descripcion: "",
    precio: 120,
    cantidad:"",
    seccion:"",
    img:"images/limpi/le5.jpg"
},
{
    id:"4",
    marca: "leche <strong>armonia</strong> 200ml",
    descripcion: "",
    cantidad:"",
    precio: 310,
    cantidad:"",
    seccion:"",
    img:"images/limpi/le6.jpg" 
},
{
    id:"5",
    marca: "te <strong>taragui</strong> caja",
    descripcion: "jamon",
    precio: 120,
    cantidad:"",
    seccion:"",
    img:"images/alma/a4.jpg"
},
{
    id:"6",
    marca: "azucar <strong>ledesma</strong>",
    descripcion: "",
    cantidad:"",
    precio: 60,
    cantidad:"",
    seccion:"",
    img:"images/alma/a3.webp" 
},
{
    id:"7",
    marca: "yerba <strong>taragui</strong> ",
    descripcion: "",
    precio: 120,
    cantidad:"",
    seccion:"",
    img:"images/limpi/y1.jpeg"
},
{
    id:"8",
    marca: "matecocido <strong>taragui</strong>",
    descripcion: "",
    precio: 40,
    cantidad:"",
    seccion:"",
    img:"images/alma/a6.jpg"
},
{
    id:"9",
    marca: "te <strong>taragui</strong>",
    descripcion: "",
    precio: 60,
    cantidad:"",
    seccion:"",
    img:"images/alma/a4.jpg"
}
];

var higiene = [ {
    id:"1",
    marca: " <strong>shampoo</strong> plusbelle",
    descripcion: "",
    precio: 100,
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"2",
    marca: "jabon",
    descripcion: "",
    cantidad:"",
    precio: 35,
    seccion:"",
    proveedor:"" 
},
{
    id:"3",
    marca: "alcohol en gel",
    descripcion: "",
    cantidad:"",
    precio: 85,
    seccion:"",
    proveedor:"" 
},
{
    id:"4",
    marca: "barbijos",
    descripcion: "",
    cantidad:"",
    precio: 80,
    seccion:"",
    proveedor:"" 
}
];

var otros = [ {
    id:"1",
    marca: "pilas <strong>duracell</strong> ",
    descripcion: "",
    precio: 60,
    cantidad:"",
    seccion:"",
    img:"images/limpi/al1.webp"
},
{
    id:"2",
    marca: "<strong>poxi-ran</strong>",
    descripcion: "",
    cantidad:"",
    precio: 50,
    seccion:"",
    img:"images/limpi/al2.jpg" 
},
             {
    id:"3",
    marca: "<strong>la gotita</strong> ",
    descripcion: "",
    precio: 60,
    cantidad:"",
    seccion:"",
    img:"images/alma/a7.webp"
},
{
    id:"4",
    marca: "cartas <strong>casino</strong>",
    descripcion: "",
    cantidad:"",
    precio: "",
    seccion:"",
    img:"images/alma/a8.png" 
},
{
    id:"5",
    marca: "parches <strong>solumit</strong>",
    descripcion: "",
    cantidad:"",
    precio: 50,
    seccion:"",
    img:"images/limpi/al3.jpg" 
},
{
    id:"6",
    marca: "Pañales",
    descripcion: "",
    cantidad:"",
    precio: 50,
    cantidad:"",
    seccion:"",
    img:"images/alma/a9.png" 
},
{
    id:"7",
    marca: "velas2",
    descripcion: "",
    cantidad:"",
    precio: 40,
    cantidad:"",
    seccion:"",
    img:"" 
},
{
    id:"8",
    marca: "velas3",
    descripcion: "",
    cantidad:"",
    precio: 40,
    seccion:"",
    img:"" 
},
{
    id:"9",
    marca: "bombillas de mate",
    descripcion: "",
    cantidad:"",
    precio: 40,
    seccion:"",
    img:"" 
},
{
    id:"10",
    marca: "cepillo de dientes",
    descripcion: "",
    cantidad:"",
    precio: 40,
    seccion:"",
    img:"images/limpi/al4.jpg" 
},
{
    id:"11",
    marca: " <strong>actron</strong>",
    descripcion: "",
    precio: 20,
    cantidad:"",
    seccion:"",
    img:"images/alma/a2.png"
}
             
];
  
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
										$ ${two}
   </div>
   `
    }     


over2("#pa1", alma1[0].marca,alma1[0].precio,alma1[0].img);
over2("#pa2", alma1[1].marca,alma1[1].precio,alma1[1].img);
over2("#pa3", alma1[2].marca,alma1[2].precio,alma1[2].img);
over2("#pa4", alma1[3].marca,alma1[3].precio,alma1[3].img);

over2("#pa5", alma1[4].marca,alma1[4].precio,alma1[4].img);
over2("#pa6", alma1[5].marca,alma1[5].precio,alma1[5].img);
over2("#pa7", alma1[6].marca,alma1[6].precio,alma1[6].img);
over2("#pa8", alma1[7].marca,alma1[7].precio,alma1[7].img);


over2("#pa11", otros[0].marca,otros[0].precio,otros[0].img);
over2("#pa12", otros[1].marca,otros[1].precio,otros[1].img);
over2("#pa13", otros[2].marca,otros[2].precio,otros[2].img);
over2("#pa14", otros[3].marca,otros[3].precio,otros[3].img);

over2("#pa15", otros[4].marca,otros[4].precio,otros[4].img);
over2("#pa16", otros[5].marca,otros[5].precio,otros[5].img);
over2("#pa17", otros[9].marca,otros[9].precio,otros[9].img);
over2("#pa18", otros[10].marca,otros[10].precio,otros[10].img);

/*
over2("#pl9", desoM[0].marca,desoM[0].precio,desoM[0].img);
over2("#pl10", desoM[1].marca,desoM[1].precio,desoM[1].img);
over2("#pl11", desoM[2].marca,desoM[2].precio,desoM[2].img);
over2("#pl12", desoM[3].marca,desoM[3].precio,desoM[3].img);*/


  
  


 