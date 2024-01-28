
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  colorMode(HSB, 50);
  background(255);
  rectMode(CENTER);
  strokeWeight(10);


  let drumMap = map(drum, 0, 100, 5, 30);
  let lineLength = 300;
  let lineStart = 100;
  let lineEnd = lineStart + lineLength;

  stroke(drumMap, 80, 80);
  for(let i = 1; i <= drumMap; i++){
    let lineStep = i*20
    line(lineStart, lineStep, lineEnd, lineStep);
  }
   
 // let ballSize = 60;
 //let bassWidth = map(bass, 0, 100, 0+ballSize/2, width);

 // fill(200, 0, 0);
 // ellipse(bassWidth, height/2, ballSize);
}