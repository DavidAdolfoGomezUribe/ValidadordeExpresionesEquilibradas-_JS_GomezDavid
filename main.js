console.log("ok")

var character = prompt("Hello, please enter your promp: ")

function limitbrackets(character){


    character = character.toString()

    let end = (character.length-1)

    console.log(character[0] + character[end])
    

   if (character[0] == "{" &&  character[end] ==  "}" ) {
    console.log("{ }" + "esta ordenado")
        
   } else{
    console.log("no esta ordenado")
   }

    console.log(character)

}


console.log(limitbrackets(character))
