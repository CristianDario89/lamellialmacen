var cervezas = [ {
    id:"1",
    marca: " <strong>Shneider</strong> lata",
    descripcion: "",
    precio: "$70",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"2",
    marca: "<strong>Shneider</strong> 3/4",
    descripcion: "",
    cantidad:"",
    precio: "$110",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
id:"3",
    marca: " <strong>heineken</strong> lata",
    descripcion: "",
    precio: "$70",
    cantidad:"",
    seccion:"",
    proveedor:""
}, 
{
id:"4",
    marca: " <strong>heineken</strong> 720ml",
    descripcion: "",
    precio: "$70",
    cantidad:"",
    seccion:"",
    proveedor:""
},                
{
    id:"5",
    marca: "<strong>brahama</strong> lata",
    descripcion: "",
    precio: "$80",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"6",
    marca: "<strong>brahama</strong> 720ml",
    descripcion: "",
    cantidad:"",
    precio: "$110",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"7",
    marca: "<strong>dr.lemon</strong> vodka lata ",
    descripcion: " ",
    cantidad:"",
    precio: "$310",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"8",
    marca: "<strong>dr.lemon</strong> vodka",
    descripcion: "botella 520ml",
    cantidad:"",
    precio: "$110",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"9",
    marca: "<strong>dr.lemon</strong> vodka lata",
    descripcion: "",
    cantidad:"",
    precio: "$60",
    cantidad:"",
    seccion:"",
    proveedor:"" 
}
];

var vinos = [ {
    id:"1",
    marca: "<strong>Michel torino</strong> 720ml",
    descripcion: "",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"2",
    marca: "<strong>Estancia mendoza</strong> 800ml",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
             {
    id:"3",
    marca: "<strong>Federico de alvear</strong> 1L",
    descripcion: "",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:""
}
];

var datosDulces = [ {
    id:"",
    marca: "Federico de alvear 1L",
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


over2("#p1", cervezas[0].marca,cervezas[0].precio,cervezas[0].descripcion);
over2("#p2", cervezas[1].marca,cervezas[1].precio,cervezas[1].descripcion);
over2("#p3", cervezas[2].marca,cervezas[2].precio,cervezas[2].descripcion);
over2("#p4", cervezas[3].marca,cervezas[3].precio,cervezas[3].descripcion);
over2("#p5", cervezas[4].marca,cervezas[4].precio,cervezas[4].descripcion);
over2("#p6", cervezas[5].marca,cervezas[5].precio,cervezas[5].descripcion);
over2("#p7", cervezas[6].marca,cervezas[6].precio,cervezas[6].descripcion);
over2("#p8", cervezas[7].marca,cervezas[7].precio,cervezas[7].descripcion);
over2("#p9", cervezas[8].marca,cervezas[8].precio,cervezas[8].descripcion);
 
over2("#p11", vinos[0].marca,vinos[0].precio,vinos[0].descripcion);
over2("#p22", vinos[1].marca,vinos[1].precio,vinos[1].descripcion);
over2("#p33", vinos[2].marca,vinos[2].precio,vinos[2].descripcion);



 