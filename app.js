/*

.....:::::GENETIC ALGORITHMS:::::.....

#CREATE BY: JONATHAN RYAN DA SILVA (RBIOZ)
#DATE: 01/02/2020 - 09/02/2020


*/

// Variaveis

const population_size = 10
const parents = 2
const mutation_probability = 0.5
const individual_size = 3

//------------------------------------------------------------------------------
function randint(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function sample(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}
//-------------------------------------------------------------------------------

//Individuo
function individual(ind_size,min, max){
	ind = []
	for(var i  = 0; i < ind_size; i++){
		ind[i] = randint(min,max);
	}
	return ind;
}

//Populacao
function population(size,ind_size,min, max){
	var pop = [];
	for(var i = 0; i < size; i++){
		//console.log(individual(0,255))
		pop.push(individual(ind_size,min, max));
	}
	return pop;
}

//Calculo de Fitness
function fitness(ind,max){

	//console.log(ind)
	var fit_points = 100;
	var size= ind.length; 
	var fit = 0;

	for(var i = 0; i < size; i++){
		fit += ((ind[i]*1)/max)*(fit_points/size)
	}
	return Number((fit_points-fit).toFixed(2));
}

//Selecao e Crossover
function selection_and_crossover(population){
	var scored = [] //População com Scored
	var pop_gen = [] //Scored Organizado
	var selected //Individuos Selecionados;

	//Ranquear Individuos
	for(var i in population){
		var j = [Number((fitness(population[i],255)).toFixed(2)),population[i]]
		scored.push(j)
	}

	//Organizar conforme Score
	for(var i in scored.sort()){
		pop_gen.push(scored[i][1])
	}

	//Selecionar Parents(Pais)
	scored = pop_gen
	selected = scored.slice(Object.keys(scored).length-parents)
	
	//Variavel de retorno
	var k = []

	//Criar populacao Vazia
	for(var p in population){
		k.push([0,0,0])
	}

	//Crossover no material Genetico
	for(var i = 0; i < population.length; i++){

		var point = randint(1, individual_size - 1)
		var parent = sample(selected,2)
		console.log(parent)

		for(var j = 0;j < individual_size; j++){

			if(j < point){
				k[i][j] = parent[0][j]
			}	 
			else{
				k[i][j] = parent[1][j]
			}
		}	
	}
	return k;
}




console.log(selection_and_crossover(population(10,individual_size,0,255)))
