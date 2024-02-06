
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  colorMode(HSB, 60);
  background(0);
  rectMode(CENTER);
  strokeWeight(10);
  noFill();


  let drumMap = map(drum, 0, 100, 5, 30);

  let lineLength = 300;
  let lineStart = 100;
  let lineEnd = lineStart + lineLength;


  stroke(drumMap, 80, 80);
  for(let iii = 1; iii <= drumMap; iii++){
    let lineStep = iii*20
    line(lineStart, lineStep, lineEnd, lineStep);
  }
   
  
  let bassMap = map(bass, 0, 100, 10, 100);
  stroke(bassMap, 80, 80);
  
  for (let ii = 1; ii <= 10; ii++){ // bass map circles y-coord
    let yStep = ii*50;

    for (let i = 1; i <= 18; i++){ // bass map circles x-coord
      ellipse(50*i, yStep, bassMap);
    }
  }
 // let ballSize = 60;
 //let bassWidth = map(bass, 0, 100, 0+ballSize/2, width);

 // fill(200, 0, 0);
 // ellipse(bassWidth, height/2, ballSize);
}