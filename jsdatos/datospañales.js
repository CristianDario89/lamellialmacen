var datosBudines = [ {
    id:"",
    marca: "lele",
    descripcion: "",
    precio: "$70",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"",
    marca: "Budin de chocolate",
    descripcion: "",
    cantidad:"",
    precio: "$110",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"",
    marca: "keke",
    descripcion: "",
    precio: "$120",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"",
    marca: "Bud. Vainilla",
    descripcion: "",
    cantidad:"",
    precio: "$310",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"",
    marca: "Budin de vainilla <strong>ofofo</strong>",
    descripcion: "puede variar el precio",
    cantidad:"",
    precio: "$310",
    cantidad:"",
    seccion:"",
    proveedor:"" 
}
];

var aceesorios = [ {
    id:"1",
    marca: "mamadera",
    descripcion: "",
    precio: "$50",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"2",
    marca: "chupete",
    descripcion: "",
    cantidad:"",
    precio: "%",
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
      <span class="clearfix">
                        <a class="menu-title" href="#" data-meal-img="assets/img/restaurant/rib.jpg">${one}</a>
                        <span style="left: 166px; right: 44px;" class="menu-line"></span>
            <span class="menu-price">${two}</span>
            </span>
            <span class="menu-subtitle">${three}</span>
   `
    }     


over2("#p1", datosBudines[0].marca,datosBudines[0].precio,datosBudines[0].descripcion);
over2("#p2", datosBudines[1].marca,datosBudines[1].precio,datosBudines[1].descripcion);
over2("#p3", datosBudines[2].marca,datosBudines[2].precio,datosBudines[2].descripcion);
over2("#p4", datosBudines[3].marca,datosBudines[3].precio,datosBudines[3].descripcion);

over2("#p5", datosBudines[4].marca,datosBudines[4].precio,datosBudines[4].descripcion);



 