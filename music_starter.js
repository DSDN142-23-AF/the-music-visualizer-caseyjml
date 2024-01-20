
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(200);
   
  let ballSize = 60;
  let bassWidth = map(bass, 0, 100, 0+ballSize/2, width);

  fill(200, 0, 0);
  ellipse(bassWidth, height/2, ballSize);
}