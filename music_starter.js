
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun1 = true;
let firstRun2 = true;

let EyeLid; 
let Eye = [];

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  let textHeight = height/11*6; // height of intro lyrics
  let bassMovement = bass/5 // movement of objects with bass in scene 2 & 3

  let ellipseX = 780 // X location of scene 3 details
  let ellipseY = 150 // Y location of scene 3 details
  let ellipseSpace = 15 // space (width) between bars around scene 3 ellipse

  colorMode(RGB, 60);
  background(0);
  rectMode(CENTER);
  strokeWeight(10);
  noFill();

// OPENING SCENE
if(counter < 12){
let vocalIntro = map(vocal, 0, 100, 5, 170);

  stroke(vocalIntro, 80, 80);
  for(let l = 1; l <= 47; l++){
   let ellipseStep = 20*l // space between lines
    ellipse(ellipseStep, height/2, .2, vocalIntro);
  }}


// OPENING TEXT
textSize(100); 
textAlign(CENTER);
strokeWeight(2);
stroke(255); // white
fill(0); // black

if(counter < 1 ){
text('have', width/5, textHeight); // "HAVE"
}

if(counter > 1 && counter < 2){
text('you', width/5*2, textHeight); // "YOU"
}

if(counter > 2 && counter < 3){
text('got', width/5*3, textHeight); // "GOT"
}

if(counter > 3 && counter < 5){
text('your', width/5*4, textHeight); // "YOUR"
}

if(counter > 10 && counter < 10.8){
fill(171, 3, 3); // red
text('shinigami', width/2, textHeight); // "SHINIGAMI"
}

if(counter > 10.8 && counter < 11.3){
stroke(255); // white
text('eyes', width/2, textHeight); // "EYES"
}

if(counter > 11.3 && counter < 11.8){
text('on?', width/2, textHeight); // "ON?"
}
  

if(counter > 12 && counter < 14){ // transition into eye
 let vocalIntro = map(bass, 0, 100, 0, 50);
 strokeWeight(10);
 stroke(vocalIntro, 80, 80);
  for(let l = 1; l <= 47; l++){
   let ellipseStep = 20*l // space between lines
    ellipse(ellipseStep, height/2, 1, vocalIntro) // shorter lines
}}

// SCENE 1.5; EYELID STILL
if(counter > 14 && counter < 18){
if(firstRun1){
  rectMode(CENTER);
  EyeLid = loadImage('Eye_0.png');

 firstRun1 = false
}

image(EyeLid, width/2, height/2);
}

// SCENE 2; EYE MOVING -- BLUE
if(counter > 18 && counter < 80){
  
  // border
  let borderSize = 30
  line(borderSize, borderSize, width-borderSize, borderSize); // top border
  line(borderSize, borderSize, borderSize, height-borderSize); // left border
  line(borderSize, height-borderSize, width-borderSize, height-borderSize); // bottom border
  line(width-borderSize, height-borderSize, width-borderSize, borderSize); // right border

  line(width/3*2+10, borderSize, width/3*2+10, height/2); 
  line(width/3*2+10, height/2, width/7*5+10, height/2+30); // diagonal border



  // eye
if (firstRun2){
  rectMode(CENTER);
  Eye.push(loadImage('Eye_0.png'));
  Eye.push(loadImage('Eye_1.png'));
  Eye.push(loadImage('Eye_2.png')); // Loads individual images for eye animation

  firstRun2 = false
}

let EyeVocalMap = int(map(vocal, 0, 100, 0, 3)); // int vocal map for eye animation

push();
scale(0.5); // Size of eye 
image(Eye[EyeVocalMap], width/2 + bass/5, height/2); // Eye animated with vocal map
pop();

strokeWeight(10);
  let drumMap = map(drum, 0, 100, 5, 30); // drum map 
  let lineLength = 200 + bassMovement; // line moves along x with bass
  let lineStart = 15 + bassMovement;
  let lineEnd = lineStart + lineLength;

  stroke(drumMap, 80, 80); // stroke colour (based on drum map)

  for(let l = 1; l <= drumMap; l++){ // LINES MOVING ON LEFT WITH DRUM MAP
    let lineStep = l*20
    line(lineStart, lineStep, lineEnd, lineStep);
  }


// Note: BELOW LINES OF CODE ARE FOR DETAILS ON THE RIGHT SIDE OF THE SCREEN! 

strokeWeight(other/50); // for thinner details

let largeBarMap = map(bass, 0, 100, 10, 50); // bass map for longer bars
let smallBarMap = map(bass, 0, 100, 5, 10); // bass map for circular thin bars

for(let o = 1; o <= smallBarMap; o++){
  let oGap = o*20; // gap size between circular bars
  noFill();
  ellipse(ellipseX+bassMovement, ellipseY, oGap);
}

push();
stroke(0); // black (to create negative space (outline) around the larger bars)
strokeWeight(4);
fill(drumMap, 80, 80); // drumMap fill colour

beginShape(); // bar at top of ellipse
vertex(ellipseX-ellipseSpace+bassMovement, ellipseY);
vertex(ellipseX-ellipseSpace+bassMovement, ellipseY-65-largeBarMap);
quadraticVertex(ellipseX+bassMovement, ellipseY-75-largeBarMap, ellipseX+ellipseSpace+bassMovement, ellipseY-65-largeBarMap);
vertex(ellipseX+ellipseSpace+bassMovement, ellipseY);
endShape(CLOSE);

beginShape(); // bar at bottom of ellipse
vertex(ellipseX-ellipseSpace+bassMovement, ellipseY);
vertex(ellipseX-ellipseSpace+bassMovement, ellipseY+100+largeBarMap);
quadraticVertex(ellipseX+bassMovement, ellipseY+110+largeBarMap, ellipseX+ellipseSpace+bassMovement, ellipseY+100+largeBarMap);
vertex(ellipseX+ellipseSpace+bassMovement, ellipseY);
endShape(CLOSE);

beginShape(); // bar at left of ellipse
vertex(ellipseX+bassMovement, ellipseY-ellipseSpace);
vertex(ellipseX+bassMovement-50-largeBarMap, ellipseY-ellipseSpace);
quadraticVertex(ellipseX+bassMovement-60-largeBarMap, ellipseY, ellipseX-50-largeBarMap+bassMovement, ellipseY+ellipseSpace);
vertex(ellipseX+bassMovement, ellipseY+ellipseSpace);
endShape(CLOSE);

beginShape(); // bar at right of ellipse
vertex(ellipseX+bassMovement, ellipseY-ellipseSpace);
vertex(ellipseX+bassMovement+90+largeBarMap, ellipseY-ellipseSpace);
quadraticVertex(ellipseX+bassMovement+100+largeBarMap, ellipseY, ellipseX+90+largeBarMap+bassMovement, ellipseY+ellipseSpace);
vertex(ellipseX+bassMovement, ellipseY+ellipseSpace);
endShape(CLOSE);
pop();

strokeWeight(3);

push();
fill(0); // black
ellipse(ellipseX+bassMovement, ellipseY, 130, 130); // black circle
pop(); // pops back to colour based on drumMap + no fill :)

ellipse(ellipseX+bassMovement, ellipseY, 120, 120); // blue circle

}

// SCENE 3; EYE MOVING -- RED

// SCENE 4
  if(counter > 80){
  
  c1 = color(0); // black
  c2 = color(156, 25, 25); // red
  
  let gradientMap = map(bass, 0, 100, 0, 2); 

  for(let y=0; y<height; y++){
    n = map(y,0,height,0,gradientMap);
    let newc = lerpColor(c1,c2,n); // new colour gradient 
    stroke(newc);
    line(0,y,width, y); // drawing the gradient (line the width of the screen)
  }


  let bassMap = map(vocal, 0, 100, 10, 130);
  //stroke(bassMap, 80, 80);
  stroke(0, 0, 0, 100); // black

  for (let ii = -1; ii <= 12; ii++){ // bass map geo pattern y-coord
    let yStep = ii*50;

    for (let i = 1; i <= 18; i++){ // bass map geo pattern x-coord
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
}