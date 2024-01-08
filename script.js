const num = document.getElementById("num");
const dec = document.getElementById("decBtn");
const reset = document.getElementById("resetBtn");
const inc = document.getElementById("incBtn");

let count = 0;

inc.onclick = function(){
  count++;
  num.textContent = count;
}

reset.onclick = function(){
  count = 0;
  num.textContent = count;
}

dec.onclick = function(){
  count--;
  num.textContent = count;
}
