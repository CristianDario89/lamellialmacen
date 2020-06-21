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

var tasty = [ {
    id:"1",
    marca: "El cuarto",
    descripcion: "",
    precio: 120,
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"2",
    marca: "El medio",
    descripcion: "",
    cantidad:"",
    precio: 200,
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"3",
    marca: "El kilo",
    descripcion: "",
    cantidad:"",
    precio: 400,
    cantidad:"",
    seccion:"",
    proveedor:"" 
}
];

var gustosTasty = [ {
    id:"1",
    marca: "Americana",
    descripcion: "",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"2",
    marca: "Dulce de leche bombon",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"3",
    marca: "Dulce de leche granizado",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"4",
    marca: "Tramontana",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"5",
    marca: "Chocolate",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"6",
    marca: "Chocolate Ferrero",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"7",
    marca: "Chocolate Marroc",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"8",
    marca: "Crema oreo",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:"" 
}  ,
{
    id:"9",
    marca: "Frutos del bosque",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"10",
    marca: "Frutilla a la crema",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"11",
    marca: "Banana split",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:"" 
} ,
{
    id:"12",
    marca: "Granizado",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:"" 
} ,
{
    id:"13",
    marca: "Limón",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"14",
    marca: "Ananá",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:"" 
} ,
{
    id:"15",
    marca: "Menta granizado",
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



 