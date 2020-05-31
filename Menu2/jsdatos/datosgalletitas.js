var datosDulces = [ {
    id:"",
    marca: "<strong>Don Satur</strong>",
    descripcion: "",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"",
    marca: "<strong>Pitusas</strong>",
    descripcion: "Limon-chocolate-vainilla-frutilla",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"" 
}, 
                    {
    id:"",
    marca: "Mantecadas",
    descripcion: "",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"",
    marca: "Pepitas",
    descripcion: "",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"",
    marca: "bananas con chocolate",
    descripcion: "",
    cantidad:"",
    precio: "$45",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"",
    marca: "<strong>coronitas</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"",
    marca: "pepas <strong>trio</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$45",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"",
    marca: "pepas <strong>pepin</strong>",
    descripcion: "membrillo-batata",
    cantidad:"",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:"" 
}
];
/*-----------------------------*/
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

var datosFacturas = [ {
    id:"",
    marca: "Mantecadas",
    descripcion: "",
    precio: "$40",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"",
    marca: "Pepitas",
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


over2("#p1", datosDulces[0].marca,datosDulces[0].precio,datosDulces[0].descripcion);
over2("#p2", datosDulces[1].marca,datosDulces[1].precio,datosDulces[1].descripcion);
over2("#p3", datosDulces[2].marca,datosDulces[2].precio,datosDulces[2].descripcion);
over2("#p4", datosDulces[3].marca,datosDulces[3].precio,datosDulces[3].descripcion);
over2("#p5", datosDulces[4].marca,datosDulces[4].precio,datosDulces[4].descripcion);
over2("#p6", datosDulces[5].marca,datosDulces[5].precio,datosDulces[5].descripcion);
over2("#p7", datosDulces[6].marca,datosDulces[6].precio,datosDulces[6].descripcion);
over2("#p8", datosDulces[7].marca,datosDulces[7].precio,datosDulces[7].descripcion);



 