var ciga1 = [ {
    id:"1",
    marca: "<strong>Phillip Morris</strong> 10",
    descripcion: "",
    precio: 100,
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"2",
    marca: "<strong>Phillip Morris</strong> 20",
    descripcion: "",
    cantidad:"",
    precio: 170,
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"3",
    marca: "<strong>Phillip Morris</strong> sabores",
    descripcion: "menta - uva",
    precio: 175,
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"4",
    marca: "<strong>Malboro</strong> 10",
    descripcion: "",
    cantidad:"",
    precio: 100,
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"5",
    marca: "<strong>Malboro</strong> 20",
    descripcion: "puede variar el precio",
    cantidad:"",
    precio: 185,
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"6",
    marca: "<strong>Malboro</strong> sabores",
    descripcion: "menta - uva",
    precio: 190,
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"7",
    marca: "<strong>chesterfield</strong> 10",
    descripcion: "",
    cantidad:"",
    precio: 95,
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"8",
    marca: "<strong>chesterfield</strong> 20",
    descripcion: "puede variar el precio",
    cantidad:"",
    precio: 155,
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"9",
    marca: "<strong>chesterfield</strong> sabores",
    descripcion: "menta - uva",
    precio: 120,
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"10",
    marca: "<strong>red point</strong> 10",
    descripcion: "",
    cantidad:"",
    precio: 310,
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"11",
    marca: "<strong>red point</strong> 20",
    descripcion: "puede variar el precio",
    cantidad:"",
    precio: 135,
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"12",
    marca: "<strong>red point</strong> sabores",
    descripcion: "menta - uva",
    precio: 120,
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"13",
    marca: "<strong>lucky</strong> de 10",
    descripcion: "",
    cantidad:"",
    precio: 100,
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"14",
    marca: "<strong>lucky</strong> de 20",
    descripcion: "puede variar el precio",
    cantidad:"",
    precio: 190,
    cantidad:"",
    seccion:"",
    proveedor:"" 
},
{
    id:"15",
    marca: "<strong>lucky</strong> sabores",
    descripcion: "menta - uva",
    precio: 120,
    cantidad:"",
    seccion:"",
    proveedor:""
},
{
    id:"16",
    marca: "<strong>master</strong> de 20",
    descripcion: "menta - uva",
    precio: 120,
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/ciga/c7.jpg" 
},
{
    id:"17",
    marca: "<strong>benson</strong> de 20",
    descripcion: "",
    cantidad:"",
    precio: 220,
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/ciga/c9.png"  
},             
{
    id:"18",
    marca: "<strong>L&M</strong> de 20",
    descripcion: "",
    cantidad:"",
    precio: 310,
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/ciga/c6.jpg"  
},
{
    id:"19",
    marca: "<strong>Virginia</strong> de 20",
    descripcion: "",
    cantidad:"",
    precio: 220,
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/ciga/c9.png"  
},             
{
    id:"18",
    marca: "<strong>Parliament</strong> de 20",
    descripcion: "",
    cantidad:"",
    precio: 220,
    cantidad:"",
    seccion:"",
    proveedor:"",
    img: "images/ciga/c6.jpg"  
}
             
];
 
/*--------------------------------*/
var cigarros = [ {
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
over2("#p7", ciga1[6].marca,ciga1[6].precio,ciga1[6].descripcion);
over2("#p8", ciga1[7].marca,ciga1[7].precio,ciga1[7].descripcion);

over2("#p9", ciga1[8].marca,ciga1[8].precio,ciga1[8].descripcion);
over2("#p10", ciga1[9].marca,ciga1[9].precio,ciga1[9].descripcion);
over2("#p11", ciga1[10].marca,ciga1[10].precio,ciga1[10].descripcion);
over2("#p12", ciga1[11].marca,ciga1[11].precio,ciga1[11].descripcion);
over2("#p13", ciga1[12].marca,ciga1[12].precio,ciga1[12].descripcion);
over2("#p14", ciga1[13].marca,ciga1[13].precio,ciga1[13].descripcion);

over2("#p15", ciga1[14].marca,ciga1[14].precio,ciga1[14].descripcion);
over2("#p16", ciga1[15].marca,ciga1[15].precio,ciga1[15].descripcion);
over2("#p17", ciga1[16].marca,ciga1[16].precio,ciga1[16].descripcion);
over2("#p18", ciga1[17].marca,ciga1[17].precio,ciga1[17].descripcion);

over2("#p19", ciga1[18].marca,ciga1[18].precio,ciga1[18].descripcion);
over2("#p20", ciga1[19].marca,ciga1[19].precio,ciga1[19].descripcion);




 