function rolldice() {
	var randomNumber1 = Math.floor(Math.random()*6)+1;
	var randomNumber2 = Math.floor(Math.random()*6)+1;
	var rndmImg2='dice'+randomNumber2+'.png';
	var rndmImg= 'dice'+randomNumber1+'.png';
	document.querySelectorAll('img')[0].setAttribute('src','images/'+rndmImg);
	document.querySelectorAll('img')[1].setAttribute('src','images/'+rndmImg2);
	if (randomNumber1>randomNumber2) {
		document.querySelector('h1').innerHTML ='Player 1 wins';
	}
	else if(randomNumber1==randomNumber2){
	document.querySelector('h1').innerHTML = 'draw';
	}
	else{
		document.querySelector('h1').innerHTML = 'player 2 wins';
	}// bdy...
}











