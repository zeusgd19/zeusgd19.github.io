const $botones = document.getElementsByTagName("button");
const $textArea = document.getElementById("pantalla");

$textArea.style.color = "red"
$textArea.value = "0"
for(let i = 0; i < $botones.length; i++){
    $botones[i].addEventListener("click", controlar)
}


function controlar(e){
    switch(e.target.innerText){
        case "C":
            $textArea.value = "0"
            break;
        case "=":
            $textArea.value = eval($textArea.value)
            break;
        default:
            if($textArea.value == "0"){
                $textArea.value = ""
            }
            $textArea.value += e.target.innerText
            break;
    }
}
