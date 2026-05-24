document.addEventListener("DOMContentLoaded", function () {
  console.log("ページが読み込まれました");
  const video1 = document.getElementById('hoverVideo');
  const video2 = document.getElementById('chinaVideo');
  const video3 = document.getElementById('heroVideo');
  const video4= document.getElementById('yoVideo');
  const video5 = document.getElementById('chiVideo');
  const video6 = document.getElementById('niVideo');
  
 video1.onmouseenter = () => video1.play();
 video2.onmouseenter = () => video2.play();
video3.onmouseenter = () => video3.play();
video4.onmouseenter = () => video4.play();
 video5.onmouseenter = () => video5.play();
video6.onmouseenter = () => video6.play();

 const btn1 = document.querySelector('.btn1');
const img1 = document.querySelector('.img1');
 const btn2 = document.querySelector('.btn2');
const img2= document.querySelector('.img2');
 const btn3 = document.querySelector('.btn3');
const img3 = document.querySelector('.img3');
 const btn4 = document.querySelector('.btn4');
const img4 = document.querySelector('.img4');
 const btn5 = document.querySelector('.btn5');
const img5 = document.querySelector('.img5');
 const btn6 = document.querySelector('.btn6');
const img6 = document.querySelector('.img6');
const btn7 = document.querySelector('.btn7');
const img7 = document.querySelector('.img7');
 const btn8 = document.querySelector('.btn8');
const img8 = document.querySelector('.img8');
 const btn9 = document.querySelector('.btn9');
const img9 = document.querySelector('.img9');
btn1.onclick = () => {
  img1.hidden = !img1.hidden;
}
 btn2.onclick = () => {
  img2.hidden = !img2.hidden;
}
btn3.onclick = () => {
  img3.hidden = !img3.hidden;
}
btn4.onclick = () => {
  img4.hidden = !img4.hidden;
}
btn5.onclick = () => {
  img5.hidden = !img5.hidden;
}
btn6.onclick = () => {
  img6.hidden = !img6.hidden;
}
btn7.onclick = () => {
  img7.hidden = !img7.hidden;
}
btn8.onclick = () => {
  img8.hidden = !img8.hidden;
}
btn9.onclick = () => {
  img9.hidden = !img9.hidden;
}

});


