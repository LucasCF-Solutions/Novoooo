function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new ReferenceError("x e y de soma devem ser numeros.");
    }
    return x+y;
}
try{
    console.log(soma(10, 15));
    console.log(soma(10,'cd'));
    console.log(soma(3,1));
    try{
        console.log(soma(15,30));
    }catch(e){
        console.log('Error2:' +e);
    }finally{
        console.log("finally!");
    }
}catch(error){
    console.log("ERRO: " +error);
}