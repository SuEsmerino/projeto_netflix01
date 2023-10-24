// variáveis para a API
const API_KEY = 'api_key=b4b5f9d98442f11bbdd50a5adf70f1d1';
const BASE_URL = 'https://api.themoviedb.org/3/';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const language = 'language=pt-BR';


async function obterFilmes(parametro){
    console.log(parametro)

    try{
        let data=[]

        for(let i=1; i<4; i++){
            //'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1
            let resposta = await fetch(`${BASE_URL}movie/${parametro}?${API_KEY}&${language}&page=${i}`)

            let dados = await resposta.json()
            console.log(await dados)
            data.push(...dados.results)
        }

        data.forEach(filme => idFilmes.push( filme.id));
        return data

    }catch{
        console.log('erro')
    }

}

//função para testar as funções de consumo da api
async function imprimirNoConsole(){

    let filmesBemAvaliados = obterFilmes('top_rated')
    console.log(await filmesBemAvaliados)
}

imprimirNoConsole()

async function obterSeries(params){
    try {
        let data = [];
        for (let i = 1; i < 4; i++){
            let response = await fetch(`${BASE_URL}tv/${params}?${API_KEY}&${language}&page=${i}`)
            response = await response.json();
            data.push(...response.results);
            
        }
        data.forEach(serie => idSeries.push( serie.id));
        return data
       
        
    } catch (e) {
        throw new Error (e.message)
    }
}


async function obterUmFilm(id){

    try{
        let resposta = await fetch(`${BASE_URL}movie/${parametro}?${API_KEY}&${language}`)
        let data = await resposta.json()

    }catch(e){
        throw new Error (e.message)
    }
}

let home = document.getElementById("home")

async function obterUmaSerie(id){
    try{

        let resposta = await fetch(`${BASE_URL}tv/${parametro}?${API_KEY}&${language}`)
        let data = await resposta.json()

    }catch(e){
        throw new Error (e.message)
    }
}

async function posterPrincipalAleatorio(){
    let numRandomico = Math.floor(Match.rondom()*120)
    let filmeOuSerie = Math.floor(Match.rondom()*10)%2==0

    let element = ''

    if(filmeOuSerie){
        element = await obterFilmes(idFilmes[numRandomico])
        home.innerHTML = `
        <div class="poster-container">
        <div class="poster-infos">
                <h4>Filme</h4>
                <h1>${element.title}</h1>
                <p>${element.overview}</p>
            </div>
        </div>
        <img src=${IMG_URL + element.backdrop_path} alt="${element.title} poster" />

        `
        return;

    }else{
        element = await obterSeries(idSeries[numRandomico])
        home.innerHTML = `
        <div class="poster-container">
        <div class="poster-infos">
                <h4>Série</h4>
                <h1>${element.title}</h1>
                <p>${element.overview}</p>
            </div>
        </div>
        <img src=${IMG_URL + element.backdrop_path} alt="${element.title} poster" />

        `
        return;
    }
}


async function montarCarrosel(parametro, serie=false){

    let lista = serie? await obterSeries(parametro) : await obterFilmes(parametro)

    for(let item of lista){

        document.querySelector(`.${parametro} carrossel`)


    }
}











async function imprmirNoConsole(){
    let teste = []

    console.log(await teste.json())
}

imprmirNoConsole()

console.log(idFilmes)


console.log(idFilmes)

