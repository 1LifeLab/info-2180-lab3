window.onload = () => {
    let currentPlayer = "X"
    let moves = [];
    gridPieces = document.querySelectorAll('#board div');
            gridPieces.forEach((gridPiece, i) => {
                gridPiece.classList.add("square");

               var b = gridPiece.onclick = function (){
                    
                    
                    if (currentPlayer == "X"){
                        gridPiece.innerHTML= currentPlayer;
                         let c = b[i]
                        // i = gridPiece.indexOf()
                        console.log( 'Square' + c + 'clicked' )
                        currentPlayer = "O"
                        console.log(currentPlayer)
                        
                    } else {
                        gridPiece.innerHTML= currentPlayer;
                        currentPlayer = "X"
                        console.log(currentPlayer)
                        console.log(currentPlayer)
                       
                    }
                   
                
            }

            });  

            const Newgame = () => {
                
                    document
                    .querySelectorAll("#board div")
                    .forEach((e) => e.parentNode.removeChild(e));
                };

        
            
        
        
        
        }
    

            
           