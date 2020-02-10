/*///////////////////////////////////////////////////////////////////////////////
					.....:::::GENETIC ALGORITHMS:::::.....

#CREATE BY: JONATHAN RYAN DA SILVA (RBIOZ)
#DATE: 01/02/2020 - 09/02/2020

*///////////////////////////////////////////////////////////////////////////////

// Variaveis

const population_size = 10
const individual_size = 3
const parents = 2
const mutation_probability = 0.2
const min = 0;
const max = 255;

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
function individual(){
	ind = []
	for(var i  = 0; i < individual_size; i++){
		ind[i] = randint(min,max);
	}
	return ind;
}

//Populacao
function create_population(){
	var pop = [];
	for(var i = 0; i < population_size; i++){
		//console.log(individual(0,255))
		pop.push(individual());
	}
	return pop;
}

//Calculo de Fitness
function fitness(ind){
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
	var pop_organize = [] //Scored Organizado
	var selected //Individuos Selecionados;

	//Ranquear Individuos
	for(var i in population){
		var j = [Number((fitness(population[i])).toFixed(2)),population[i]]
		scored.push(j)
	}

	//Organizar conforme Score
	for(var i in scored.sort()){
		pop_organize.push(scored[i][1])
	}

	//Selecionar Parents(Pais)
	scored = pop_organize
	selected = scored.slice(Object.keys(scored).length-parents)
	
	//Variavel de retorno
	var new_population = []

	//Criar populacao Vazia
	for(var p in population){
		new_population.push([0,0,0])
	}

	//Crossover no material Genetico
	for(var i = 0; i < population.length; i++){

		var point = randint(1, individual_size - 1)
		var parent = sample(selected,2)

		for(var j = 0;j < individual_size; j++){

			if(j < point){
				new_population[i][j] = parent[0][j]
			}	 
			else{
				new_population[i][j] = parent[1][j]
			}
		}	
	}
	return new_population;
}

//Funcao de Mutacao 
function mutation(population){
	
	//Populacao Vazia
	var new_population = [];

	for(var p in population){
		new_population.push([0,0,0])
	}
	for(var x in population){
		for(var y in population[x]){
			if(Math.random() < mutation_probability){
				new_population[x][y] = randint(0,255)
			}
			else{
				new_population[x][y] = population[x][y]
			}
		}
	}
	return new_population
}



population = create_population()
console.log("População Inicial: ")
console.log(population)

for(var i = 0; i <= 100; i++){
	population = selection_and_crossover(population)
	population = mutation(population)
}

console.log("População Final: ")
console.log(population)
