var datosDulces = [ {
    id:"",
    marca: "<strong>Don Satur</strong>",
    descripcion: "",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "../images/galle/g2.jpg"
},
{
    id:"",
    marca: "<strong>Pitusas</strong>",
    descripcion: "Limon-chocolate-vainilla-frutilla",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "../images/galle/gad11.jpg"
    
}, 
{
    id:"",
    marca: "Mantecadas",
    descripcion: "",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "../images/galle/mante.jpg"
},
{
    id:"",
    marca: "Pepitas",
    descripcion: "",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "../images/galle/pepi.jpg" 
},
{
    id:"",
    marca: "bananas con chocolate",
    descripcion: "",
    cantidad:"",
    precio: "$45",
    cantidad:"",
    seccion:"",
    proveedor:"" ,
    img: "../images/gad4.jpg"
},
{
    id:"",
    marca: "<strong>coronitas</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "../images/galle/gad4.jpg" 
},
{
    id:"",
    marca: "pepas <strong>trio</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$45",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "../images/galle/gad6.jpg" 
},
{
    id:"",
    marca: "pepas <strong>pepin</strong>",
    descripcion: "membrillo-batata",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "../images/galle/gad5.jpg"
}
];
/*-----------------------------*/
var datosSaladas = [ {
    id:"",
    marca: "<strong>Don Satur</strong>",
    descripcion: "",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "../images/galle/gad6.jpg" 
},
{
    id:"",
    marca: "<strong>Jorgito</strong>Bizcochitos ",
    descripcion: "",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"" ,
    img: "../images/galle/gad6.jpg" 
},
{
    id:"",
    marca: "<strong>Criollitas</strong> ",
    descripcion: "",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"" ,
    img: "../images/galle/gas1.jpg" 
}
]  

var snacks = [ {
    id:"1",
    marca: "<strong>lays</strong>",
    descripcion: "",
    precio: "$60",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img:"../images/galle/snack1.jpg"
},
{
    id:"2",
    marca: "<strong>cheetos</strong> ",
    descripcion: "",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    img:"../images/galle/snack2.jpg" 
},
{
    id:"3",
    marca: "<strong>doritos</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    img:"../images/galle/snack3.jpg" 
},
{
    id:"4",
    marca: "<strong>3d</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    img:"../images/galle/snack4.jpg" 
},
{
    id:"5",
    marca: "<strong>saladix</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"6",
    marca: "<strong>rex</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"" 
}
];

var datosBudines = [ {
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
/*---------------------------------------*/
var over1 = function(atrr,on,tw, thre) {
	    var contenido2 = document.querySelector(atrr)
	        contenido2.innerHTML = `
    <div class="fh5co-food-desc " >
										<figure>
											<img src="${thre}" class="img-responsive" alt="Free HTML5 Templates by FREEHTML5.co">
										</figure>
										<div>
											<h3>${on}</h3>
											
										</div>
									</div>
									<div class="fh5co-food-pricing">
										${tw}
									</div>
   `
    }  



over1("#p1", datosDulces[0].marca,datosDulces[0].precio,datosDulces[0].img);
over1("#p2", datosDulces[1].marca,datosDulces[1].precio,datosDulces[1].img);
over1("#p3", datosDulces[2].marca,datosDulces[2].precio,datosDulces[2].img);
over1("#p4", datosDulces[3].marca,datosDulces[3].precio,datosDulces[3].img); 
over1("#p5", datosDulces[4].marca,datosDulces[4].precio,datosDulces[4].img);

over1("#p6", datosDulces[5].marca,datosDulces[5].precio,datosDulces[5].img);
over1("#p7", datosDulces[6].marca,datosDulces[6].precio,datosDulces[6].img);
over1("#p8", datosDulces[7].marca,datosDulces[7].precio,datosDulces[7].img);

/*-------------------------------------------*/

over1("#ps1", datosSaladas[0].marca,datosSaladas[0].precio,datosSaladas[0].img);
over1("#ps2", datosSaladas[1].marca,datosSaladas[1].precio,datosSaladas[1].img);
over1("#ps3", datosSaladas[2].marca,datosSaladas[2].precio,datosSaladas[2].img);
/*--------*/

over1("#p9", snacks[0].marca,snacks[0].precio,snacks[0].img);
over1("#p10", snacks[1].marca,snacks[1].precio,snacks[1].img);
over1("#p11", snacks[2].marca,snacks[2].precio,snacks[2].img);
over1("#p12", snacks[3].marca,snacks[3].precio,snacks[3].img);  

 


 