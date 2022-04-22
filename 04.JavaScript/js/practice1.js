
function changeColor(){
    var div1 = document.getElementById("div1");
    var selectColor = document.getElementById("selectColor");

    console.log(selectColor);
    console.log(div1);

    div1.style.backgroundColor = selectColor.value;
    div1.innerHTML += '색상 변경 성공';
}

