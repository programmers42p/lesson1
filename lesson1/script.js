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

function numberinfo(n1){
    if(num0 > 0){
      console.log("Число больше нуля")
    } else if (num0 < 0){
      console.log("Число меньше нуля")
    }else{
       console.log("0")
    }
    if (num0 % 2 ==0){
       console.log("Чётное")

    }else{
       console.log("Нечётное")
    }
}
console.log(numberinfo(num0))

