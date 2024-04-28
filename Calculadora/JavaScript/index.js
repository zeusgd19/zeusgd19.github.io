const $botones = document.getElementsByTagName("button");
const $textArea = document.getElementById("pantalla");

$textArea.style.color = "red"
$textArea.value = "0"
for(let i = 0; i < $botones.length; i++){
    $botones[i].addEventListener("click", controlar)
}

let pressed = false
function controlar(e){
    switch(e.target.innerText){
        case "C":
            $textArea.value = "0"
            break;
        case "=":
            $textArea.value = eval($textArea.value)
            pressed = true
            break;
        default:
            if($textArea.value == "0" || pressed && e.target.innerText != "+"
                && e.target.innerText != "-"
                && e.target.innerText != "*"
                && e.target.innerText != "/"){
                $textArea.value = ""
            }
            $textArea.value += e.target.innerText
            pressed = false
            break;
    }
}
