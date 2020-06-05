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

var heladostasty = [ {
    id:"",
    marca: "1/4",
    descripcion: "",
    precio: "$20",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "img/2/hela6.png"
},
{
    id:"",
    marca: "1/2",
    descripcion: "",
    cantidad:"",
    precio: "$60",
    cantidad:"",
    seccion:"",
    proveedor:"" ,
    img: "img/2/helatasty1.jpeg"
},
{
    id:"",
    marca: "1kg",
    descripcion: "",
    precio: "$60",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "img/2/hela6.png"
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
    img: "img/2/helatasty1.jpeg" 
}
];

/*-----------------------*/
var datosFacturas = [ {
    id:"",
    marca: " ",
    descripcion: "",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"",
    marca: " ",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:"" 
}
];

var datosDulces = [ {
    id:"",
    marca: " ",
    descripcion: "",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"",
    marca: " ",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:"" 
}
];

var datosSaladas = [ {
    id:"",
    marca: " ",
    descripcion: "",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"",
    marca: " ",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:"" 
}
]  
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


over2("#ph1", heladosagua[0].marca,heladosagua[0].precio,heladosagua[0].img);
over2("#ph2", heladosagua[1].marca,heladosagua[1].precio,heladosagua[1].img);
over2("#ph3", heladosagua[2].marca,heladosagua[2].precio,heladosagua[2].img);
over2("#ph4", heladosagua[3].marca,heladosagua[3].precio,heladosagua[3].img);

over2("#ph5", heladostasty[0].marca,heladostasty[0].precio,heladostasty[0].img);
over2("#ph6", heladostasty[1].marca,heladostasty[1].precio,heladostasty[1].img);
over2("#ph7", heladostasty[2].marca,heladostasty[2].precio,heladostasty[2].img);
over2("#ph8", heladostasty[3].marca,heladostasty[3].precio,heladostasty[3].img);



 