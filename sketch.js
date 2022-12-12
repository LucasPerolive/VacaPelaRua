function setup() {
  createCanvas(500, 400);
  somdatrilha.loop();
}

function draw() {
  background(imgEstrada);
  mostraAtor();
  mcarro();
  movimento();
  velocidade();
  mAtor();
  pontos();
  bateu();
  incluiPlacar();
}
