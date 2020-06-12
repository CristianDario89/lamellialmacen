var datosDulces = [ {
    id:"1",
    marca: "<strong>Don Satur</strong>",
    descripcion: "",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/galle/g2.jpg"
},
{
    id:"2",
    marca: "<strong>Pitusas</strong>",
    descripcion: "Mouse-Limon-chocolate-vainilla-frutilla",
    cantidad:"",
    precio: "$45",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/galle/gad11.jpg"
    
}, 
{
    id:"3",
    marca: "Mantecadas",
    descripcion: "",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/galle/mante.jpg"
},
{
    id:"4",
    marca: "Pepitas",
    descripcion: "",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/galle/pepi.jpg" 
},
{
    id:"5",
    marca: "<strong>celosas</strong> bananas con chocolate 230g",
    descripcion: "",
    cantidad:"",
    precio: "$55",
    cantidad:"",
    seccion:"",
    proveedor:"" ,
    img: "images/galle/gg1.webp"
},
{
    id:"6",
    marca: "<strong>coronitas</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/galle/gad4.jpg" 
},
{
    id:"7",
    marca: "pepas <strong>trio</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$45",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/galle/gad6.jpg" 
},
{
    id:"8",
    marca: "pepas <strong>pepin</strong>",
    descripcion: "membrillo-batata",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/galle/gad5.jpg"
},
{
    id:"9",
    marca: "surtidas <strong>bagley</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$100",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/galle/gd1.jpg" 
}
];
/*-----------------------------*/
var datosSaladas = [ {
    id:"1",
    marca: "<strong>Don Satur</strong>",
    descripcion: "",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/galle/g3.jpg" 
},
{
    id:"2",
    marca: "<strong>media tarde</strong>  x 3",
    descripcion: "$28 c/u",
    precio: "$73",
    cantidad:"",
    seccion:"",
    img:"images/galle/g4.webp"
}, 
{
    id:"3",
    marca: "<strong>Jorgito</strong> Bizcochitos",
    descripcion: "",
    precio: "$50",
    cantidad:"",
    seccion:"",
    img:"images/galle/gd2.png"
},
{
    id:"4",
    marca: "<strong>criollitas</strong> x 3",
    descripcion: "$35 c/u",
    cantidad:"",
    precio: "$90",
    cantidad:"",
    seccion:"",
    img:"images/galle/g5.webp" 
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
    img: "images/galle/gad6.jpg" 
}
]  

var snacks = [ {
    id:"1",
    marca: "<strong>lays</strong>",
    descripcion: "doritos / cheetos / 3d",
    precio: "$60",
    cantidad:"",
    seccion:"",
    proveedor:"",
    img:"images/galle/snack1.jpg"
},
{
    id:"2",
    marca: "<strong>saladix</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    img:"images/galle/g8.jpg" 
},
{
    id:"3",
    marca: "<strong>Kranchitos</strong> papas",
    descripcion: "",
    cantidad:"",
    precio: "$55",
    cantidad:"",
    seccion:"",
    img:"images/galle/sn2.webp" 
},
{
    id:"4",
    marca: "<strong>twistos</strong> chico",
    descripcion: "",
    cantidad:"",
    precio: "$55",
    cantidad:"",
    seccion:"",
    img:"images/galle/g6.jpg" 
},
{
    id:"5",
    marca: "<strong>rex</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    img:"" 
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



over1("#p8", datosDulces[0].marca,datosDulces[0].precio,datosDulces[0].img);
over1("#p3", datosDulces[2].marca,datosDulces[2].precio,datosDulces[2].img);
over1("#p4", datosDulces[3].marca,datosDulces[3].precio,datosDulces[3].img); 
over1("#p5", datosDulces[4].marca,datosDulces[4].precio,datosDulces[4].img);

over1("#p6", datosDulces[5].marca,datosDulces[5].precio,datosDulces[5].img);
over1("#p7", datosDulces[6].marca,datosDulces[6].precio,datosDulces[6].img);
over1("#p1", datosDulces[8].marca,datosDulces[8].precio,datosDulces[8].img);

/*-------------------------------------------*/

over1("#ps1", datosSaladas[0].marca,datosSaladas[0].precio,datosSaladas[0].img);
over1("#ps2", datosSaladas[1].marca,datosSaladas[1].precio,datosSaladas[1].img);
over1("#ps3", datosSaladas[2].marca,datosSaladas[2].precio,datosSaladas[2].img);
over1("#ps4", datosSaladas[3].marca,datosSaladas[3].precio,datosSaladas[3].img);
/*-------

over1("#p9", snacks[0].marca,snacks[0].precio,snacks[0].img);
over1("#p11", snacks[2].marca,snacks[2].precio,snacks[2].img);
-*/
over1("#p10", snacks[1].marca,snacks[1].precio,snacks[1].img);
over1("#p12", snacks[3].marca,snacks[3].precio,snacks[3].img);  

 var over2 = function(atrr,on,tw, thre,four) {
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
										${tw}
									</div>
   `
    }  

over2("#p9", snacks[0].marca,snacks[0].precio,snacks[0].img,"cheetos - 3d - doritos");
over2("#p11", snacks[2].marca,snacks[2].precio,snacks[2].img,"ketchup/cheedar <strong> $ 60</strong>"); 

over2("#ps2", datosSaladas[1].marca,datosSaladas[1].precio,datosSaladas[1].img, "media tarde Sandwich <strong> $ 83</strong>");

over2("#p2", datosDulces[1].marca,datosDulces[1].precio,datosDulces[1].img,"Mouse - Limon - chocolate - vainilla - frutilla");
