var prompt = require('prompt-sync')();
function view (counter){return("counter: "+ counter +"\n (+)  (-)\n (q) to exit.")}


function update (msg,counter){
    if (msg ==="+"){
        return counter+=1;
    }

    else if (msg ==="-"){
        return counter-=1;
    }

    else if (msg==="q"){
        return counter;
    }

    else{
        console.log("the input that you type was wrong, please write again");
        return counter;
    }
    
}


function app (counter){
    while(true){
        console.clear();
        const showScreen = view(counter);
        console.log(showScreen);
        var msg = prompt("");
        counter=update(msg,counter);
        if (msg === "q"){
            break;
        }

    }
}

console.log("hola");
app(0);