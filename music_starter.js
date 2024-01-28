
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  colorMode(HSB, 100);
  background(255);
  rectMode(CENTER);
  strokeWeight(9);
  stroke(drum, 80, 80);

  let drumMap = map(drum, 0, 100, 5, 70);
  let lineLength = 300;
  let lineStart = 100;
  let lineEnd = lineStart + lineLength;

  for(let i = 10; i <= drumMap; i++){
    let lineStep = i*15
    line(lineStart, lineStep, lineEnd, lineStep);
  }
   
 // let ballSize = 60;
 //let bassWidth = map(bass, 0, 100, 0+ballSize/2, width);

 // fill(200, 0, 0);
 // ellipse(bassWidth, height/2, ballSize);
}