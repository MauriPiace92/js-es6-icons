const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const colors = [
    'blue',
    'orange',
    'purple'
];

// TEMPLATE:
/*
<div class="section-icon">
            
    <i class="fas fa-cat"></i>
    
	<div class="icon-name">
    	Nome icona
    </div>

</div>
*/

// Milestone 1
// Partendo dalla seguente struttura dati , 
// mostriamo in pagina tutte le icone disponibili come da layout.
const iconContainer = $('#section-icon');
const coloredArray= colorIcons (icons,colors);
printIcons (coloredArray,iconContainer);


// Milestone 2
// Coloriamo le icone per tipo

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone


// ------------------- FUNCTION ----------------
function printIcons (iconArr, container){
	console.log(iconArr);

	iconArr.forEach((element) => {

		const {name, prefix, family, color} = element;

		const bigName = name.toUpperCase();
		

		const printIcon=`

		<div id="single-icon" class="single-icon" >
			<i  class="${family} ${prefix}${name}" style= "color:${color};"></i>
			<div class="icon-name">
				${bigName}
			</div>
		</div>
		`;

		container.append(printIcon);	
	});

}


// Creare un array di icone colorarle,partendo dal nostro array prinipale 
// 
// serve: il nostro array principale e i colori:

function colorIcons(originalArray, colorArray){

	const iconType = getIconType (originalArray); 

	// creare un nuovo array dal principale con i colori con map()

	const orignialColored = originalArray.map((element)=>{

		const copiedArray = {
			...element

		};

		const iconTypeIndex = iconType.indexOf(copiedArray.type);

		if(iconTypeIndex != -1){

		 	copiedArray.color= colorArray[iconTypeIndex];

		}

		return copiedArray;	 
	});
	
	return orignialColored;
}

// crea array con tipi di icone
function getIconType(arr){

	const typeArray=[];

	arr.forEach((element ) =>  {
		const elType=element.type;

		if(typeArray.includes(elType)== false){
			typeArray.push(elType);
		}

	});

	return typeArray;

}