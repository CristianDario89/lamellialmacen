var alfajores = [ {
    id:"",
    marca: "alfajor <strong>milka</strong>",
    descripcion: "dulce de leche - Mousse",
    precio: "$70",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"",
    marca: "<strong>coffler </strong>block",
    descripcion: "",
    cantidad:"",
    precio: "$70",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"",
    marca: "<strong>aguila </strong>minitorta",
    descripcion: "",
    precio: "$60",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"",
    marca: "alfajor <strong>tri-shot</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$70",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"",
    marca: "alfajor <strong>bon-o-bon</strong>",
    descripcion: "blanco - negro",
    cantidad:"",
    precio: "$60",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
                 {
    id:"",
    marca: "alfajor <strong>bon-o-bon</strong>",
    descripcion: "triple",
    cantidad:"",
    precio: "60",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"",
    marca: "alfajor <strong>jorgelin</strong>",
    descripcion: "blanco - negro",
    cantidad:"",
    precio: "$50",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"",
    marca: "alfajor <strong>pepitos</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$50",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"",
    marca: "alfajor <strong>tifu</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$70",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"",
    marca: "<strong>guaymallen</strong>",
    descripcion: "simple chocolate - dulce de leche",
    cantidad:"",
    precio: "$30",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"",
    marca: "alfajor <strong>jorgito</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"" 
}
];
/*----------------------------*/
var chocolates = [ {
    id:"",
    marca: "<strong>milka </strong> dulce de leche",
    descripcion: "",
    precio: "$70",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"",
    marca: "<strong>milka leger </strong> combinado",
    descripcion: "",
    cantidad:"",
    precio: "$70",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"",
    marca: "<strong>milka leger </strong> almendras",
    descripcion: "",
    precio: "$60",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"",
    marca: "<strong>milka leger </strong> leche",
    descripcion: "",
    cantidad:"",
    precio: "$70",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"",
    marca: "<strong>milka </strong> bis",
    descripcion: "",
    cantidad:"",
    precio: "$60",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
                 {
    id:"",
    marca: "<strong>milka </strong> oreo",
    descripcion: "",
    cantidad:"",
    precio: "$310",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"",
    marca: "<strong>milka </strong> blanco - negro",
    descripcion: "",
    cantidad:"",
    precio: "$50",
    cantidad:"",
    seccion:"",
    proveedor:"" 
}
];
/*--------------------------*/
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
      <span class="clearfix">
                        <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">${one}</a>
                        <span style="left: 166px; right: 44px;" class="menu-line"></span>
            <span class="menu-price">${two}</span>
            </span>
            <span class="menu-subtitle">${three}</span>
   `
    }     


over2("#p1", alfajores[0].marca,alfajores[0].precio,alfajores[0].descripcion);
over2("#p2", alfajores[1].marca,alfajores[1].precio,alfajores[1].descripcion);
over2("#p3", alfajores[2].marca,alfajores[2].precio,alfajores[2].descripcion);
over2("#p4", alfajores[3].marca,alfajores[3].precio,alfajores[3].descripcion);
over2("#p5", alfajores[4].marca,alfajores[4].precio,alfajores[4].descripcion);
over2("#p6", alfajores[5].marca,alfajores[5].precio,alfajores[5].descripcion);
over2("#p7", alfajores[6].marca,alfajores[6].precio,alfajores[6].descripcion);
over2("#p8", alfajores[7].marca,alfajores[7].precio,alfajores[7].descripcion);
over2("#p9", alfajores[8].marca,alfajores[8].precio,alfajores[8].descripcion);
over2("#p10", alfajores[9].marca,alfajores[9].precio,alfajores[9].descripcion);


over2("#p11", chocolates[0].marca,chocolates[0].precio,chocolates[0].descripcion);
over2("#p22", chocolates[1].marca,chocolates[1].precio,chocolates[1].descripcion);
over2("#p33", chocolates[2].marca,chocolates[2].precio,chocolates[2].descripcion);
over2("#p44", chocolates[3].marca,chocolates[3].precio,chocolates[3].descripcion);
over2("#p55", chocolates[4].marca,chocolates[4].precio,chocolates[4].descripcion);
over2("#p66", chocolates[5].marca,chocolates[5].precio,chocolates[5].descripcion);
over2("#p77", chocolates[6].marca,chocolates[6].precio,chocolates[6].descripcion);





 