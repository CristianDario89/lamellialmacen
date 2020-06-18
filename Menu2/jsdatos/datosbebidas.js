var cervezas = [ {
    id:"1",
    marca: " <strong>Shneider</strong> lata",
    descripcion: "",
    precio: 55,
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"2",
    marca: "<strong>Shneider</strong> 3/4",
    descripcion: "",
    cantidad:"",
    precio: 110,
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
id:"3",
    marca: " <strong>heineken</strong> lata",
    descripcion: "",
    precio: 90,
    cantidad:"",
    seccion:"",
    proveedor:""
}, 
{
id:"4",
    marca: " <strong>heineken</strong> 720ml",
    descripcion: "",
    precio: 140,
    cantidad:"",
    seccion:"",
    proveedor:""
},                
{
    id:"5",
    marca: "<strong>brahama</strong> lata",
    descripcion: "",
    precio: 70,
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"6",
    marca: "<strong>brahama</strong> 720ml",
    descripcion: "",
    cantidad:"",
    precio: 110,
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"7",
    marca: "<strong>Quilmes</strong> lata ",
    descripcion: " ",
    cantidad:"",
    precio: 70,
    cantidad:"",
    seccion:"",
    proveedor:"" ,
    img: "images/bebi/b4.jpg"  
},
{
    id:"8",
    marca: "<strong>Quilmes</strong>  720ml",
    descripcion: "botella 520ml",
    cantidad:"",
    precio: 110,
    cantidad:"",
    seccion:"",
    proveedor:""  ,
    img: "images/bebi/cer1.jpg" 
}               
];


var vinos = [{
    id:"1",
    marca: "<strong>Michel torino</strong> 720ml",
    descripcion: "",
    precio: 75,
    cantidad:"",
    seccion:"",
    img:"images/bebi/vinos1.jpg"
},
{
    id:"2",
    marca: "<strong>Estancia mendoza</strong> 800ml",
    descripcion: "",
    cantidad:"",
    precio: 120,
    cantidad:"",
    seccion:"",
    img:"images/bebi/vinos2.jpg"
},
{
    id:"3",
    marca: "<strong>Federico de alvear</strong> extra dulce 1L",
    descripcion: "",
    precio: 185,
    cantidad:"",
    seccion:"",
    img:"images/bebi/vinos3.jpg"
},
{
    id:"4",
    marca: "<strong>Termidor tinto</strong>",
    descripcion: "",
    precio: 75,
    cantidad:"",
    seccion:"",
    img:"images/bebi/vinos3.jpg"
}
];


var jugos = [ {
    id:"1",
    marca: "Fresh",
    descripcion: "",
    precio: 50,
    cantidad:"",
    seccion:"",
    img:"images/bebi/b9.webp"
},
{
    id:"2",
    marca: "Baggio",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    img:"images/bebi/b8.jpg" 
},
{
    id:"3",
    marca: "tang",
    descripcion: "",
    cantidad:"",
    precio: 20,
    cantidad:"",
    seccion:"",
    img:"images/bebi/bb1.jpg" 
},
{
    id:"4",
    marca: "clight",
    descripcion: "",
    cantidad:"",
    precio: 20,
    cantidad:"",
    seccion:"",
    img:"images/bebi/cer3.jpg" 
},
{
    id:"5",
    marca: "<strong> Coca-cola</strong>",
    descripcion: "",
    cantidad:"",
    precio: 120,
    cantidad:"",
    seccion:"",
    img:"images/bebi/b3.png" 
},
{
    id:"6",
    marca: "<strong> Manaos</strong>",
    descripcion: "",
    cantidad:"",
    precio: 55,
    cantidad:"",
    seccion:"",
    img:"images/bebi/gase1.jpg" 
},
{
    id:"7",
    marca: "<strong>lata coca mini</strong>",
    descripcion: "",
    cantidad:"",
    precio:45,
    cantidad:"",
    seccion:"",
    img:"images/bebi/bg1.jpg" 
},
{
    id:"8",
    marca: "<strong> 7up</strong> 2 1/4",
    descripcion: "",
    cantidad:"",
    precio: 140,
    cantidad:"",
    seccion:"",
    img:"images/bebi/b2.jpg" 
}
];

var otrasbeb = [ {
    id:"1",
    marca: "chandon",
    descripcion: "",
    precio: "$170",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"2",
    marca: "Federico de Alvear",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"3",
    marca: "<strong>dr.lemon</strong> vodka lata",
    descripcion: "",
    cantidad:"",
    precio: "$60",
    cantidad:"",
    seccion:"",
    proveedor:"" ,
    img: " "  
},
{
    id:"4",
    marca: "<strong>dr.lemon</strong> vodka 510ml",
    descripcion: "",
    cantidad:"",
    precio: "$60",
    cantidad:"",
    seccion:"",
    proveedor:"" ,
    img: " "  
},
{
    id:"5",
    marca: "<strong>fernet</fernet>",
    descripcion: "chico $150",
    precio: "$240",
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"6",
    marca: "<strong>gancia</strong> chico",
    descripcion: "",
    cantidad:"",
    precio: "$60",
    cantidad:"",
    seccion:"",
    proveedor:"" ,
    img: " "  
},
{
    id:"7",
    marca: "<strong>gancia</strong> grande",
    descripcion: "",
    cantidad:"",
    precio: "$160",
    cantidad:"",
    seccion:"",
    proveedor:"" ,
    img: " "  
},
{
    id:"8",
    marca: "<strong>frizze</strong> ",
    descripcion: "",
    cantidad:"",
    precio: "$160",
    cantidad:"",
    seccion:"",
    proveedor:"" ,
    img: " "  
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
            <span class="menu-price">$ ${two}</span>
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
/*over2("#p8", cervezas[7].marca,cervezas[7].precio,cervezas[7].descripcion);
over2("#p9", cervezas[8].marca,cervezas[8].precio,cervezas[8].descripcion);*/
 
over2("#p11", vinos[0].marca,vinos[0].precio,vinos[0].descripcion);
over2("#p22", vinos[1].marca,vinos[1].precio,vinos[1].descripcion);
over2("#p33", vinos[2].marca,vinos[2].precio,vinos[2].descripcion);
over2("#p44", vinos[3].marca,vinos[3].precio,vinos[3].descripcion);


over2("#pj1", jugos[0].marca,jugos[0].precio,jugos[0].descripcion);
over2("#pj2", jugos[1].marca,jugos[1].precio,jugos[1].descripcion);
over2("#pj3", jugos[2].marca,jugos[2].precio,jugos[2].descripcion);
over2("#pj4", jugos[3].marca,jugos[3].precio,jugos[3].descripcion);

over2("#pj5", jugos[4].marca,jugos[4].precio,jugos[4].descripcion);
over2("#pj6", jugos[5].marca,jugos[5].precio,jugos[5].descripcion);
over2("#pj7", jugos[6].marca,jugos[6].precio,jugos[6].descripcion);
over2("#pj8", jugos[7].marca,jugos[7].precio,jugos[7].descripcion);
over2("#pj9", jugos[8].marca,jugos[8].precio,jugos[8].descripcion);
 

 