
// vocal, drum, bass, and other are volumes ranging from 0 to 100

circleSize = 5

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  colorMode(RGB, 60);
  background(0);
  rectMode(CENTER);
  strokeWeight(10);
  noFill();



  if(counter > 15){
    fill(0);
    ellipse(width/2, height/2, circleSize)

    circleSize = circleSize + 10
  }
  
  c1 = color(0); // black
  c2 = color(156, 25, 25); // red
  
  let gradientMap = map(bass, 0, 100, 0, 2); 

  for(let y=0; y<height; y++){
    n = map(y,0,height,0,gradientMap);
    let newc = lerpColor(c1,c2,n); // new colour gradient 
    stroke(newc);
    line(0,y,width, y); // drawing the gradient (line the width of the screen)
  }

  //let drumMap = map(drum, 0, 100, 5, 30);

  //let lineLength = 300;
  //let lineStart = 100;
  //let lineEnd = lineStart + lineLength;


  //stroke(drumMap, 80, 80);
  //for(let iii = 1; iii <= drumMap; iii++){
   // let lineStep = iii*20
    //(lineStart, lineStep, lineEnd, lineStep);
  //}

  let bassMap = map(vocal, 0, 100, 10, 130);
  //stroke(bassMap, 80, 80);
  stroke(0); // black

  for (let ii = -1; ii <= 12; ii++){ // bass map circles y-coord
    let yStep = ii*50;

    for (let i = 1; i <= 18; i++){ // bass map circles x-coord
      ellipse(50*i, yStep, bassMap);
    }
  }


  stroke(255); // white
  noFill(); 
  strokeWeight(other/50); // stroke weight increases with # of circles
  let otherMap = map(other, 0, 100, 0, 50); // other map

  for(let o = 1; o <= otherMap; o++){
    let oGap = o*20; // gap size between circles
    ellipse(width/2, height/2, oGap);
  }
}