function TratarErro() {
    
    throw console.log("Deu erro aqui!!!")

}

function GritarNome(obj) {

    try{

        console.log(obj.name.toUpperCase() + "!!!")

    } catch(e) {

        TratarErro()
        
    }

}

const obj = { nome: "Pedro"}

GritarNome(obj)