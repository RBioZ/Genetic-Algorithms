

// Variaveis

const pop_size = 10
const parents = 2
const mutation_probability = 0.5
const ind_size = 3

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

<<<<<<< HEAD
function individual(ind_size,min, max){
	ind = []
	for(var i  = 0; i < ind_size; i++){
		ind[i] = randint(min,max);
=======

function individual(size,min, max){
	var ind = [];
	for(var i = 0; i < size; i++){
		ind.push(randint(min,max));
>>>>>>> 832d355aa254de9bcecb1dfbacb131c9717da083
	}
	return ind;
}

<<<<<<< HEAD
function population(size,ind_size,min, max){
	var pop = [];
	for(var i = 0; i < size; i++){
		//console.log(individual(0,255))
		pop.push(individual(ind_size,min, max));
=======
function population(pop,size,min,max){
	var j = [];
	for(var i = 0; i < pop; i++){
		//console.log(individual(0,255))
		j.push(individual(size,min,max));
>>>>>>> 832d355aa254de9bcecb1dfbacb131c9717da083
	}
	return pop;
}

//Calculo de Fitness
function fitness(ind,max){

	console.log(ind)
	var fit_points = 100;
	var size= ind.length; 
	var fit = 0;

	for(var i = 0; i < size; i++){
		fit += ((ind[i]*1)/max)*(fit_points/size)
	}
	return Number((fit_points-fit).toFixed(2));
}

function selection_and_crossover(population){
	var scored = [] //População com Scored
	var pop_gen = [] //Scored Organizado
	var selected //Individuos Selecionados;

	console.log("1- Population")
	console.log(population)

	//Medir Fitness
	for(var i in population){
		var j = [Number((fitness(population[i],255)).toFixed(2)),population[i]]
		scored.push(j)
	}
	console.log('2- Scored')
	console.log(scored)

	console.log(scored)

	//console.log(scored)

	//Organizar Maior-Menor
	for(var i in scored.sort()){
		pop_gen.push(scored[i][1])
	}
	
	console.log('3 - Organization')
	console.log(pop_gen)

	scored = pop_gen
	selected = scored.slice(Object.keys(scored).length-parents)

<<<<<<< HEAD
	console.log('4 - Selected (Parents)')
	console.log(selected)

=======
>>>>>>> 832d355aa254de9bcecb1dfbacb131c9717da083
	for(var i = 0; i < Object.keys(population).length; i++){


		point = randint(1, ind_size - 1)
		parent = sample(selected,2)
		
<<<<<<< HEAD
		console.log('5 - Point and Parents')
		console.log(point)
		console.log(parent)
		
		for(var j = 0;j < ind_size; j++){
			if(j >= point){
				//console.log(population[i][j])
				//console.log(parent[0][j])
				console.log('j: '+j+' Point: '+point)
=======
		//console.log(population[i])
//		console.log(point)
		//console.log(parent)
		//console.log('------------------------------------------------')
		
		for(var j in escopo){
			if(escopo[j] >= point){
>>>>>>> 832d355aa254de9bcecb1dfbacb131c9717da083
				population[i][j] = parent[0][j]
				console.log(parent[0])
			}	 
			else{
				//console.log(population[i][j])
				//console.log(parent[1][j])
				console.log('j: '+j+' Point: '+point)
				population[i][j] = parent[1][j]
<<<<<<< HEAD
				console.log(parent[1])
			}
		}	
	}

=======
			}		
		}		
	}


>>>>>>> 832d355aa254de9bcecb1dfbacb131c9717da083
	return population;
	
}


<<<<<<< HEAD
console.log(selection_and_crossover(population(5,3,0,255)))
=======
console.log(selection_and_crossover(population(5,3,0,255)))
>>>>>>> 832d355aa254de9bcecb1dfbacb131c9717da083
