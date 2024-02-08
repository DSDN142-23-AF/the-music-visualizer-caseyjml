
// vocal, drum, bass, and other are volumes ranging from 0 to 100

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
stroke(255);

if(counter < 1 ){
text('have', width/2, height/3); // "HAVE"
}

if(counter > 1 && counter < 2){
text('you', width/2, height/3); // "YOU"
}

if(counter > 2 && counter < 3){
text('got', width/2, height/3); // "GOT"
}

if(counter > 3 && counter < 5){
text('your', width/2, height/3); // "YOUR"
}

if(counter > 10 && counter < 10.8){
stroke(171, 3, 3); // red
text('shinigami', width/2, height/3); // "SHINIGAMI"
}

if(counter > 10.8 && counter < 11.3){
stroke(255); // white
text('eyes', width/2, height/3); // "EYES"
}

if(counter > 11.3 && counter < 11.8){
text('on?', width/2, height/3); // "ON?"
}
  

if(counter > 12){ // transition into eye
 let vocalIntro = map(drum, 0, 100, 0, 50);
 strokeWeight(10);
 stroke(vocalIntro, 80, 80);
  for(let l = 1; l <= 47; l++){
   let ellipseStep = 20*l // space between lines
    ellipse(ellipseStep, height/2, 1, vocalIntro) // shorter lines
}}

// SCENE 2
  if(counter > 30){
  
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
  stroke(0); // black

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