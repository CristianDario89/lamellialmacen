var ciga1 = [ {
    id:"",
    marca: "<strong>Phillip Morris</strong> de 10",
    descripcion: "",
    precio: "$70",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"",
    marca: "<strong>Phillip Morris</strong>de 20",
    descripcion: "",
    cantidad:"",
    precio: "$110",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"",
    marca: "<strong>Phillip Morris</strong> sabores",
    descripcion: "menta - uva",
    precio: "$120",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"",
    marca: "<strong>Malboro</strong> de 10",
    descripcion: "",
    cantidad:"",
    precio: "$310",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"",
    marca: "<strong>Malboro</strong>de 20",
    descripcion: "puede variar el precio",
    cantidad:"",
    precio: "$310",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"",
    marca: "<strong>Malboro</strong> sabores",
    descripcion: "menta - uva",
    precio: "$120",
    cantidad:"",
    seccion:"",
    proveedor:""
},
             
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


over2("#p1", ciga1[0].marca,ciga1[0].precio,ciga1[0].descripcion);
over2("#p2", ciga1[1].marca,ciga1[1].precio,ciga1[1].descripcion);
over2("#p3", ciga1[2].marca,ciga1[2].precio,ciga1[2].descripcion);
over2("#p4", ciga1[3].marca,ciga1[3].precio,ciga1[3].descripcion);
over2("#p5", ciga1[4].marca,ciga1[4].precio,ciga1[4].descripcion);
over2("#p6", ciga1[5].marca,ciga1[5].precio,ciga1[5].descripcion);




 