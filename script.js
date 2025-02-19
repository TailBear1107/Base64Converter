document.getElementById("inputb64").addEventListener("keyup",function(event){
    event.preventDefault();
    if (event.key === "Enter" && document.getElementById("inputb64").value != "") {
    document.getElementById("decode_button").click();
    }
})
//增加一個EventListener，偵測Enter鍵是否被按下，若被按下則代為執行點擊按鈕

var el = document.getElementById("decode_button");
el.onclick = function proc(){

    var inputElement = document.getElementById('inputb64');
    var input = inputElement.value;
    //讀取ID為"input"的輸入格所傳回之訊息

    var result = atob(input);
    document.getElementById("outputd").textContent = result;
}
//當收到按鈕被按下之訊息後，執行主運算

document.getElementById("inputb64e").addEventListener("keyup",function(event){
    event.preventDefault();
    if (event.key === "Enter" && document.getElementById("inputb64e").value != "") {
    document.getElementById("encode_button").click();
    }
})
//增加一個EventListener，偵測Enter鍵是否被按下，若被按下則代為執行點擊按鈕

var el1 = document.getElementById("encode_button");
el1.onclick = function proc(){

    var inputElement = document.getElementById('inputb64e');
    var input = inputElement.value;
    //讀取ID為"input"的輸入格所傳回之訊息

    var result = btoa(input);
    document.getElementById("outpute").textContent = result;
}
//當收到按鈕被按下之訊息後，執行主運算
