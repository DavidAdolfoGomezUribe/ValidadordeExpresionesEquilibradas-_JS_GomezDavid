console.log("ok")

var character = prompt("Hello, please enter your promp: ")

function limitbrackets(character){


    character = character.toString()

    let end = (character.length-1)

    
    

    console.log(character[0] + character[end])
    

    if (character[0] == "(" &&  character[end] ==  ")" ) {
       
       console.log(" ({[]}) " + "it´s equilibrated")
       return true
        
    } else if (character[0] == "{" &&  character[end] ==  "}" ){
    
        console.log(" ({[]}) " + "it´s equilibrated")
        return true

    }else if (character[0] == "[" &&  character[end] ==  "]" ){
    
        console.log(" ({[]}) " + "it´s equilibrated")
        return true

    } else if (character.includes("(") &&  character.includes(")") ){
    
        console.log(" ({[]}) " + "it´s equilibrated")
        return true

    } else if (character.includes("{") &&  character.includes("}") ){
    
        console.log(" ({[]}) " + "it´s equilibrated")
        return true

    } else if (character.includes("[") &&  character.includes("]") ){
    
        console.log(" ({[]}) " + "it´s equilibrated")
        return true
  
    
    } else if (character.includes("({[") &&  character.includes("]})") ){
    
        console.log(" ({[]}) " + "it´s equilibrated")
        return true
  
    
    }

    
    else{
        console.log("it´s not equilibrated")
        return false

   }
}


console.log(limitbrackets(character))
