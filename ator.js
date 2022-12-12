//variáveis do Ator
let xAtor = 150;
let yAtor = 366;

let colisao = false;

//mostra o ator
function mostraAtor(){
  image(imgAtor, xAtor, yAtor, 30, 30);
}

//faz com que o ator se mova
function mAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 4;
    }
  if (yAtor < 366 ){
    if (keyIsDown(DOWN_ARROW)){
      yAtor += 4;
    }
  }
  if (xAtor < 465 ){
    if (keyIsDown(RIGHT_ARROW)){
      xAtor += 4;
    }
  }
  if (xAtor > 7){
    if (keyIsDown(LEFT_ARROW)){
      xAtor -= 4;
    }
  }
}

function bateu(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imgC.length; i++){
    colisao = collideRectCircle(xcarros[i] - 15, ycarros[i] - 15, comprc, altc, xAtor, yAtor, 15)
    if (colisao){
      colidiu();
    }
  }
}

function colidiu(){
  yAtor = 366;
  xAtor = 150;
  ponto = 0;
  somdobater.play();
}