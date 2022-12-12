let ponto = 0;


function pontos(){
  if(yAtor < 10){
    yAtor = 366;
    ponto+= 1;
    somdocoin.play();
  }
}


function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(ponto, 170, 26);
}