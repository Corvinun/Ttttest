fetch( 'C:\Users\Public\OneDrive\Документы\JS cource\htdocs\data.json' )
.then( response => response.jason() )
.then( cells => fill( cells ) )
.catch( err => console.log( err ) )

