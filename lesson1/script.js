let num0 = prompt();
let num1 = prompt();

let origin = num0;
function sqrnum(n0, n1){
  for(i = 1; i < num1; i++){
    num0 *= origin;
  }
  return num0;
}
alert(sqrnum(num0,num1));
