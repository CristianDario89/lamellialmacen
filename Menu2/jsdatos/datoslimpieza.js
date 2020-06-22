var articulos = [ {
    id:"1",
    marca: "<strong>ayudin</strong> lavandina",
    descripcion: "",
    precio: "$60",
    cantidad:"",
    seccion:"",
    img:"images/limpi/l1.jpg"
},
{
    id:"2",
    marca: "<strong>ala</strong> detergente",
    descripcion: "",
    cantidad:"",
    precio: "$75",
    cantidad:"",
    seccion:"",
    img:"images/limpi/ll1.jpg" 
},
{
    id:"3",
    marca: "<strong>raid</strong> matacucarachas",
    descripcion: "",
    precio: "$300",
    cantidad:"",
    seccion:"",
    img:""
},
{
    id:"4",
    marca: "desodorante de ambiente",
    descripcion: "",
    cantidad:"",
    precio: "$10",
    cantidad:"",
    seccion:"",
    img:"images/limpi/ll3.webp" 
},
{
    id:"5",
    marca: "<strong>musmy</strong> detergente",
    descripcion: "",
    cantidad:"",
    precio: "$60",
    cantidad:"",
    seccion:"",
    img:"" 
},
 {
    id:"6",
    marca: "<strong>magistral</strong> detergente",
    descripcion: "",
    cantidad:"",
    precio: "$100",
    cantidad:"",
    seccion:"",
    img:"" 
},
 {
    id:"7",
    marca: "<strong>lisoform</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$200",
    cantidad:"",
    seccion:"",
    img:"" 
},
{
    id:"8",
    marca: "<strong>raid</strong> matacucarachas y mosquitos",
    descripcion: "",
    precio: "$280",
    cantidad:"",
    seccion:"",
    img:""
},
{
    id:"9",
    marca: "<strong>duplex</strong> lavandina",
    descripcion: "",
    precio: "$58",
    cantidad:"",
    seccion:"",
    img:"images/limpi/l1.jpg"
},
 {
    id:"6",
    marca: "<strong>econ</strong> detergente",
    descripcion: "",
    cantidad:"",
    precio: 60,
    cantidad:"",
    seccion:"",
    img:"" 
}
];

var higiene = [ {
    id:"1",
    marca: " <strong>shampoo</strong> plusbelle",
    descripcion: "",
    precio: "",
    cantidad:"$100",
    seccion:"",
    img:""
},
{
    id:"2",
    marca: "jabon",
    descripcion: "",
    cantidad:"",
    precio: "$35",
    cantidad:"",
    seccion:"",
    img:"" 
},
{
    id:"3",
    marca: "alcohol en gel",
    descripcion: "",
    cantidad:"",
    precio: "$85",
    cantidad:"",
    seccion:"",
    img:"" 
},
{
    id:"4",
    marca: "barbijos",
    descripcion: "",
    cantidad:"",
    precio: "$80",
    cantidad:"",
    seccion:"",
    img:"" 
},
{
    id:"5",
    marca: "Jabon en polvo <strong>Vanish</strong>",
    descripcion: "",
    cantidad:"",
    precio: "$80",
    cantidad:"",
    seccion:"",
    img:"" 
}
];

var desoH = [ {
    id:"1",
    marca: "<strong>axe</strong> ",
    descripcion: "",
    precio: "",
    cantidad:"",
    seccion:"",
    img:""
},
{
    id:"2",
    marca: "<strong>rexona</strong>",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    img:"" 
},
             {
    id:"3",
    marca: "<strong>Kevin</strong> ",
    descripcion: "",
    precio: "",
    cantidad:"",
    seccion:"",
    img:""
},
{
    id:"4",
    marca: "<strong>patric</strong>",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    img:"" 
}
             
];

var desoM = [ {
    id:"",
    marca: "<strong>axe</strong> ",
    descripcion: "",
    precio: "",
    cantidad:"",
    seccion:"",
    img:""
},
{
    id:"",
    marca: "<strong>rexona</strong>",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    img:"" 
},
             {
    id:"",
    marca: "<strong>Kevin</strong> ",
    descripcion: "",
    precio: "",
    cantidad:"",
    seccion:"",
    img:""
},
{
    id:"",
    marca: "<strong>patric</strong>",
    descripcion: "",
    cantidad:"",
    precio: "",
    cantidad:"",
    seccion:"",
    img:"" 
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

 
over2("#p1", articulos[0].marca,articulos[0].precio,articulos[0].descripcion);
over2("#p2", articulos[1].marca,articulos[1].precio,articulos[1].descripcion);
over2("#p3", articulos[2].marca,articulos[2].precio,articulos[2].descripcion);
over2("#p4", articulos[3].marca,articulos[3].precio,articulos[3].descripcion);
over2("#p5", articulos[4].marca,articulos[4].precio,articulos[4].descripcion);
over2("#p6", articulos[5].marca,articulos[5].precio,articulos[5].descripcion);
over2("#p7", articulos[6].marca,articulos[6].precio,articulos[6].descripcion);
over2("#p8", articulos[7].marca,articulos[7].precio,articulos[7].descripcion);

over2("#ph6", higiene[0].marca,higiene[0].precio,higiene[0].descripcion);
over2("#ph7", higiene[1].marca,higiene[1].precio,higiene[1].descripcion);
over2("#ph8", higiene[2].marca,higiene[2].precio,higiene[2].descripcion);
over2("#ph9", higiene[3].marca,higiene[3].precio,higiene[3].descripcion);
over2("#ph10", higiene[4].marca,higiene[4].precio,higiene[4].descripcion);

over2("#pd1", desoH[0].marca,desoH[0].precio,desoH[0].descripcion);
over2("#pd2", desoH[1].marca,desoH[1].precio,desoH[1].descripcion);
over2("#pd3", desoH[2].marca,desoH[2].precio,desoH[2].descripcion);
over2("#pd4", desoH[3].marca,desoH[3].precio,desoH[3].descripcion);
