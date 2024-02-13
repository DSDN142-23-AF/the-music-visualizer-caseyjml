
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun1 = true;
let firstRun2 = true;

let EyeLid;
let Eye = [];

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
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
    ellipse(ellipseStep, height/2, 1, vocalIntro)
  }}


// OPENING TEXT
textSize(100); 
textAlign(CENTER);
strokeWeight(2);
stroke(255); // white
fill(0); // black

if(counter < 1 ){
text('have', width/5, height/11*6); // "HAVE"
}

if(counter > 1 && counter < 2){
text('you', width/5*2, height/11*6); // "YOU"
}

if(counter > 2 && counter < 3){
text('got', width/5*3, height/11*6); // "GOT"
}

if(counter > 3 && counter < 5){
text('your', width/5*4, height/11*6); // "YOUR"
}

if(counter > 10 && counter < 10.8){
fill(171, 3, 3); // red
text('shinigami', width/2, height/11*6); // "SHINIGAMI"
}

if(counter > 10.8 && counter < 11.3){
stroke(255); // white
text('eyes', width/2, height/11*6); // "EYES"
}

if(counter > 11.3 && counter < 11.8){
text('on?', width/2, height/11*6); // "ON?"
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

// SCENE 2; EYE MOVING
if(counter > 18 && counter < 80){
if (firstRun2){
  rectMode(CENTER);
  Eye.push(loadImage('Eye_0.png'));
  Eye.push(loadImage('Eye_1.png'));
  Eye.push(loadImage('Eye_2.png'));

  firstRun2 = false
}

let EyeVocalMap = int(map(vocal, 0, 100, 0, 3));
console.log(EyeVocalMap);

push();
scale(0.5);
image(Eye[EyeVocalMap], width/2, height/2);
pop();
}

// SCENE 3
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