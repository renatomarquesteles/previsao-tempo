const oReq = new XMLHttpRequest();
var previsao;

oReq.onreadystatechange = function () {
    if(oReq.readyState == 4) {
        if(oReq.status == 200) {
            previsao = JSON.parse(oReq.response);   // transforma a string para objeto
            document.getElementById('mensagem').innerHTML = previsao.mensagem;
            document.getElementById('graus').innerHTML = `Temperatura: ${previsao.graus}ºC`;
        }
        else if (oReq.status == 404) {
            console.log('Error 404: File not found.');
        }
        if(previsao.graus > 28){
            document.getElementById("icone").innerHTML = "<img src='sol.png'>"
        }
        else if(previsao.graus >= 20){
            document.getElementById("icone").innerHTML = "<img src='sol-nuvem.png'>"
        }
        else {
            document.getElementById("icone").innerHTML = "<img src='chuva.png'>"
        }
    }
}
oReq.open("GET", "https://demo8966219.mockable.io/previsao/hoje", true);
oReq.send();