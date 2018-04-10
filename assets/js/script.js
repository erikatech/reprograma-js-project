let resultado = ["teste"];

//resultado que guarda todos os valores
let resultadoFinal = ["jhkj"];

const results = [];

let currentPage = 1;

//Guardando a resposta num array e direcionando para a proxima pagina.
let result = function(resultado){
    if(resultado === "true"){
        return "Acertou";
    } else if (resultado ==="false") { 
        return "errou";
    }

}

const guardar = function (answer) {
    const result = { id: currentPage };
    const img = document.getElementsByTagName('img');
    const isMansplanning = img[0].src.includes("sim");
    result.isCorrect = answer === isMansplanning;
    results.push(result);
    currentPage++;
};

const getResults = function(){
    console.log(results);
}
