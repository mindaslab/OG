var index = 0;
var grid = [];

/*
 * This the place where intial screen is shoed
 * for the user to see and memorize.
 */
show_grid = function(){
	index = 0;
	//Initialize grid
	grid = make_grid();
	$('#grid img').hide(); // hide grid view
	$('#u').hide(); // hide up button
	$('#d').hide(); //hide down buton
	$('#r').show(); // show right button
	grid_images = $('#grid img'); // load into variable to reduce computing in loop below
	var i = 0;
	// assign grid images
	while(i <= 8){
		grid_images[i].src = 'images/'+grid[i]+'.png';
		i++;
	}
	$('#grid img').show(); // show grid
}

/*
 * Return either Up or down
 */ 
random_val = function(){
	x = (Math.random() > 0.5) ? "u" : "d";
	return x;
}

/*
 * This function loads the up (u) or down(d)
 * values into the grid array
 */
make_grid = function(){
	var i = 0;
	array =[]
	do{
		array[i] = random_val();
		i++;
	}while( i<9 );
	return array;
}

/*
 * Starts the game
 */
start_game = function(){
	index = 0;
	$('#grid img').hide(); // hide all grid images
	$('#u').show();
	$('#d').show();
	$('#r').hide();
	
}

end_game = function(){
	index = -1; //indicates game is lost
	$('#u').hide();
	$('#d').hide();
	$('#r').show();
}

reset_game = function(){
	show_grid();
}

you_win = function(){
	alert(':-)');
	$('#u').hide();
	$('#d').hide();
	$('#r').show();
	index = -1; // to reset game when #r is clicked again 
	
}

check_click = function(clicked){
	if(grid[index] == clicked){
		$('#i'+index).show();
		index++;
		if(index == 9) you_win();
	}else{
		end_game();
	}
}

$(document).ready(function(){
		show_grid();
		//start_game();
		
		$('#r').click(function(){
			if(index == -1){
				reset_game();
			}else{
				start_game();
			}
		});
		
		$('#u').click(function(){
				check_click("u");
			}
		);
		
		$('#d').click(function(){
				check_click("d");
			}
		);
	}
);
