function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Espera uma data');
    }
    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}
try{
 
console.log(retornaHora(new Date()));
console.log(retornaHora(11)); 
console.log("Tudo Certo");  
} catch(e){
    console.log(e);
}finally{
    console.log("ainda rodou isso");
}