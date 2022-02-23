var machsosty = {
    description: "<b>Machsosty</b> is a platformer i'm making in <b>Love2D (a popular lua framework for creating games)</b><br> The idea came from one day, when I was doing maths homework. Does anyone remember that old flash game where you have to jump across a gridded copy with pencil drawings? Anyway, it's inspired by that (mostly). Machsosty contains most of the letters in Maths and Copy. That's all I have so far. More info is coming soon!",
    image: "Machsosty.png",
    developer: "Me! ToastersUnited",
    genre: "Platformer" 
}



function info(game, name) {
    document.write('<!DOCTYPE html> <html> <head>     <link href="infostyle.css" rel="stylesheet" type="text/css" /></head><body><div class="image"><img src="'+game.image+'" class="image"></div><div class="information">' + game.description + ' <br><b>Developer: </b><i>' + game.developer +'</i><br><b>genre: </b>'+ game.genre +'</div></body></html>')
}