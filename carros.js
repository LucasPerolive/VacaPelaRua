let ycarros = [45, 150, 215, 320, 90, 270];
let xcarros = [500, 500, 500, 500, 500, 500];
let vcarros = [2.9, 3.3, 4, 3.6, 4.3, 3.1];
let altc = 50;
let comprc = 35;

//mostra o carro
function mcarro(){
  for (let i = 0; i < imgC.length; i+=1)
    image(imgC[i], xcarros[i], ycarros[i], altc, comprc);
}

//faz o carro1 se mover
function movimento(){
  for (let i = 0; i < imgC.length; i+=1)
    xcarros[i] -= vcarros[i];
 
}

function velocidade(){
  for (let i = 0; i < imgC.length; i+=1)
    if(final(xcarros[i])){
    xcarros[i] = 600;
    }
}

function final (xcarros) {
  return xcarros < -50;
}