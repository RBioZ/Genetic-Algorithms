

// Variaveis

const pop_size = 10
const parents = 2
const mutation_probability = 0.5
const ind_size = 3

//Funcao de numeros aleatorios
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


function individual(min, max){
	var ind = {'r':0,'g':0,'b':0};
	for(var i in ind){
		ind[i] = randint(min,max);
	}
	return ind;
}

function population(size){
	var j = {};
	for(var i = 0; i < size; i++){
		//console.log(individual(0,255))
		j[i] = individual(0,255);
	}
	return j;
}

function fitness(ind,max){

	var fit_points = 100;
	var size= Object.keys(ind).length; 
	var fit = 0;

	for(var i in ind){
		//console.log(ind[i]+" : "+(ind[i]*100)/max)
		//console.log(((ind[i]*1)/max)*(fit_points/size)+"\n")
		fit += ((ind[i]*1)/max)*(fit_points/size)
	}
	return fit_points-fit;
}

function selection_and_crossover(population){
	var scored = [] //População com Scored
	var pop_gen = [] //Scored Organizado
	var selected;

	//Medir Fitness
	for(var i in population){
		var j = [Number((fitness(population[i],255)).toFixed(2)),population[i]]
		scored.push(j)
	}

	//Organizar Maior-Menor
	for(var i in scored.sort()){
		pop_gen.push(scored[i][1])
	}
	
	scored = pop_gen
	selected = scored.slice(Object.keys(scored).length-parents)
/*
	for(var i = 0; i < Object.keys(population).length; i++){
		point = randint(1, ind_size - 1)
		parent = sample(selected,2)

		for(var j = 0;j < ind_size; j++){
			if(i >= point){
				population[i][j] = parent[0][j]
			}	
			else{
				population[i][j] = parent[1][j]
			}
		}	
	}

*/
	return population;
	
}

//console.log(population(pop_size))
//console.log(fitness(individual(0,255),255))

console.log(selection_and_crossover(population(5)))
