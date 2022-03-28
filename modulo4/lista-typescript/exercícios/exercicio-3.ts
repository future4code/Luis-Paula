enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const getMovies = (name:string, date:number, movieType:GENERO, score?:number) =>{
    return console.log({
        nome: name,
        data: date,
        genero: movieType,
    })
}

getMovies('Nosferatu', 1921, GENERO.TERROR)