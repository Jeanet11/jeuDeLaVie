// reessaye de coder le jeu de la vie !!!

var row = 10;
var col = 10;

var tab = [];

var nbFourmi  = 10;
var couleur = '';

//virtual representation of the game
function tableau(row, col) {


	for (var i = 0; i < row; i++) {
// pour remplir un tableau 2D  array(nb col).fill(donnée)
		tab.push(Array(col).fill(0));
		}
		console.log(tab);

//creer le tableau avec des id pour chaque case crée par concatenation de l'id ligne et id colonne
	for (var i = 0; i < row; i++) {
		$('#table').append('<tr id=' + i + '></tr>');

		for (var j = 0; j < col; j++) {
			$('#'+ i).append('<td id=' + i + j +'></td>');
		};
	};
}
// generer un nombre en random
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

// afficher des fourmis en random
function placementFourmi (nb,couleur) {

	// for(var i = 0; i<=nbFourmi;i++) 
	var i = 0;
	while( i<nb)	{

		var x = getRandomIntInclusive(0, row);
		var y = getRandomIntInclusive(0, row);

		if (tab[x][y] === 0) {
			tab[x][y] = couleur;
			$('#'+x+y).text(couleur);
			i++;
		}

	}
}


tableau(row,col);
placementFourmi(10,"R");
placementFourmi(10,"N");
