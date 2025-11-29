    function narcissistic(value) {
    const arrayValue = String(value).split('');
    const tamanhoArray = (arrayValue.length);
    let numero = 0;
        for (let y = tamanhoArray - 1; y >= 0; y--) {
        //console.log(arrayValue[y]);
    let digito = parseInt(arrayValue[y]);
    numero = numero + (digito ** tamanhoArray);
    }
    if(numero===value){
        return true;
    }
    else{
        return false;
    }
    }