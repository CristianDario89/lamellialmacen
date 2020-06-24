var alma1 = [ {
    id:"1",
    marca: "leche <strong>la serenisima</strong> ",
    descripcion: "",
    precio: 70,
    cantidad:"",
    seccion:"",
    img:"images/limpi/l2.png"
},
{
    id:"2",
    marca: "leche <strong>la suipachense</strong> ",
    descripcion: "",
    cantidad:"",
    precio: 110,
    cantidad:"",
    seccion:"",
    img:"images/limpi/l3.webp" 
},
{
    id:"3",
    marca: "yogur <strong>ilolay</strong>",
    descripcion: "",
    precio: 120,
    cantidad:"",
    seccion:"",
    img:"images/limpi/le5.jpg"
},
{
    id:"4",
    marca: "leche <strong>armonia</strong> 200ml",
    descripcion: "",
    cantidad:"",
    precio: 310,
    cantidad:"",
    seccion:"",
    img:"images/limpi/le6.jpg" 
},
{
    id:"5",
    marca: "te <strong>taragui</strong> caja",
    descripcion: "",
    precio: 120,
    cantidad:"",
    seccion:"",
    img:"images/alma/a4.jpg"
},
{
    id:"6",
    marca: "azucar <strong>ledesma</strong>",
    descripcion: "",
    cantidad:"",
    precio: 60,
    cantidad:"",
    seccion:"",
    img:"images/alma/a3.webp" 
},
{
    id:"7",
    marca: "yerba <strong>taragui</strong> ",
    descripcion: "",
    precio: 120,
    cantidad:"",
    seccion:"",
    img:"images/limpi/y1.jpeg"
},
{
    id:"8",
    marca: "matecocido <strong>taragui</strong>",
    descripcion: "",
    precio: 40,
    cantidad:"",
    seccion:"",
    img:"images/alma/a6.jpg"
},
{
    id:"9",
    marca: "Aceite<strong> cañuelas</strong>",
    descripcion: "",
    precio: 60,
    cantidad:"",
    seccion:"",
    img:"images/alma/aa1.webp"
},
{
    id:"10",
    marca: "fideos <strong>S&P</strong>",
    descripcion: "",
    cantidad:"",
    precio: 60,
    cantidad:"",
    seccion:"",
    img:"images/alma/aa4.png" 
},
{
    id:"11",
    marca: "Pure de tomates <strong>de la huerta</strong> ",
    descripcion: "",
    precio: 120,
    cantidad:"",
    seccion:"",
    img:"images/alma/aa2.jpg"
},
{
    id:"12",
    marca: "Purre de papas <strong>maggi</strong>",
    descripcion: "",
    precio: 40,
    cantidad:"",
    seccion:"",
    img:"images/alma/aa5.png"
},
{
    id:"13",
    marca: "te <strong>taragui</strong>",
    descripcion: "",
    precio: 60,
    cantidad:"",
    seccion:"",
    img:"images/alma/a4.jpg"
}
];


var otros = [ {
    id:"1",
    marca: "pilas <strong>duracell</strong> ",
    descripcion: "",
    precio: 60,
    cantidad:"",
    seccion:"",
    img:"images/limpi/al1.webp"
},
{
    id:"2",
    marca: "<strong>poxi-ran</strong>",
    descripcion: "",
    cantidad:"",
    precio: 50,
    seccion:"",
    img:"images/limpi/al2.jpg" 
},
             {
    id:"3",
    marca: "<strong>la gotita</strong> ",
    descripcion: "",
    precio: 60,
    cantidad:"",
    seccion:"",
    img:"images/alma/a7.webp"
},
{
    id:"4",
    marca: "cartas <strong>casino</strong>",
    descripcion: "",
    cantidad:"",
    precio: "",
    seccion:"",
    img:"images/alma/a8.png" 
},
{
    id:"5",
    marca: "parches <strong>solumit</strong>",
    descripcion: "",
    cantidad:"",
    precio: 50,
    seccion:"",
    img:"images/limpi/al3.jpg" 
},
{
    id:"6",
    marca: "Pañales",
    descripcion: "",
    cantidad:"",
    precio: 50,
    cantidad:"",
    seccion:"",
    img:"images/alma/a9.png" 
},
{
    id:"7",
    marca: "velas2",
    descripcion: "",
    cantidad:"",
    precio: 40,
    cantidad:"",
    seccion:"",
    img:"" 
},
{
    id:"8",
    marca: "velas3",
    descripcion: "",
    cantidad:"",
    precio: 40,
    seccion:"",
    img:"" 
},
{
    id:"9",
    marca: "bombillas de mate",
    descripcion: "",
    cantidad:"",
    precio: 40,
    seccion:"",
    img:"" 
},
{
    id:"10",
    marca: "cepillo de dientes",
    descripcion: "",
    cantidad:"",
    precio: 40,
    seccion:"",
    img:"images/limpi/al4.jpg" 
},
{
    id:"11",
    marca: " <strong>actron</strong>",
    descripcion: "",
    precio: 20,
    cantidad:"",
    seccion:"",
    img:"images/alma/a2.png"
}
             
];
  
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
 
 

over2("#p1", alma1[0].marca,alma1[0].precio,alma1[0].descripcion);
over2("#p2", alma1[1].marca,alma1[1].precio,alma1[1].descripcion);
over2("#p3", alma1[2].marca,alma1[2].precio,alma1[2].descripcion);
over2("#p4", alma1[3].marca,alma1[3].precio,alma1[3].descripcion);

over2("#p5", alma1[4].marca,alma1[4].precio,alma1[4].descripcion);
over2("#p6", alma1[5].marca,alma1[5].precio,alma1[5].descripcion);
over2("#p7", alma1[6].marca,alma1[6].precio,alma1[6].descripcion);
over2("#p8", alma1[7].marca,alma1[7].precio,alma1[7].descripcion);


over2("#p11", alma1[8].marca,alma1[8].precio,alma1[8].descripcion);
over2("#p12", alma1[9].marca,alma1[9].precio,alma1[9].descripcion);
over2("#p13", alma1[10].marca,alma1[10].precio,alma1[10].descripcion);
over2("#p14", alma1[11].marca,alma1[11].precio,alma1[11].descripcion);
 over2("#p9", alma1[12].marca,alma1[12].precio,alma1[12].descripcion);
  

over2("#p15", otros[0].marca,otros[0].precio,otros[0].descripcion);
over2("#p16", otros[1].marca,otros[1].precio,otros[1].descripcion);
over2("#p17", otros[2].marca,otros[2].precio,otros[2].descripcion);
over2("#p18", otros[3].marca,otros[3].precio,otros[3].descripcion);
 over2("#p19", otros[4].marca,otros[4].precio,otros[4].descripcion);

over2("#p20", otros[5].marca,otros[5].precio,otros[5].descripcion);
over2("#p21", otros[6].marca,otros[6].precio,otros[6].descripcion);
over2("#p22", otros[7].marca,otros[7].precio,otros[7].descripcion);
over2("#p23", otros[8].marca,otros[8].precio,otros[8].descripcion);
 over2("#p24", otros[9].marca,otros[9].precio,otros[9].descripcion); 


  
  


 