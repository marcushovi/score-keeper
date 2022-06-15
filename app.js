const p1 = {
    score: 0,
    button: document.querySelector( "#p1Button" ),
    display: p1Display = document.querySelector( "#p1Display" )
};

const p2 = {
    score: 0,
    button: document.querySelector( "#p2Button" ),
    display: p1Display = document.querySelector( "#p2Display" )
};


const resetButton = document.querySelector( "#reset" );
const winnigScoreSelect = document.querySelector( "#playto" );


let winnigScore = 5;
let isGameOver = false;


function updateScores( player, opponent ) {
    if ( !isGameOver ) {

        player.score += 1;

        if ( player.score === winnigScore ) {

            isGameOver = true;

            player.display.classList.add( "has-text-success" );
            opponent.display.classList.add( "has-text-danger" );

            player.button.disabled = true;
            opponent.button.disabled = true;
        }

        player.display.textContent = player.score;
    }
}

function reset() {

    isGameOver = false;

    for ( let p of [ p1, p2 ] ) {
        p.score = 0;

        p.display.textContent = 0;

        p.display.classList.remove( "has-text-success", "has-text-danger" );

        p.button.disabled = false;
    }


}


p1.button.addEventListener( 'click', function ( e ) {
    updateScores( p1, p2 );
} );

p2.button.addEventListener( 'click', function ( e ) {
    updateScores( p2, p1 );
} );

winnigScoreSelect.addEventListener( 'change', function ( e ) {
    winnigScore = parseInt( this.value );
    reset();
} )

resetButton.addEventListener( 'click', reset );

