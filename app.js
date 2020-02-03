

// Variaveis

const pop_size = 10
const parents = 2
const mutation_probability = 0.5

function randint(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
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
	scored = []
	pop_gen = []
	var selected
	//console.log(population)
	for(var i in population){
		//console.log(fitness(population[i],255))
		var j = [Number((fitness(population[i],255)).toFixed(2)),population[i]]
		scored.push(j)
	}

	for(var i in scored.sort()){
		pop_gen.push(scored[i][1])
	}
	
	scored = pop_gen
	selected = scored[]

}



//console.log(population(pop_size))
//console.log(fitness(individual(0,255),255))
console.log(selection_and_crossover(population(5)))
