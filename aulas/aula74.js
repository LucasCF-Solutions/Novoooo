function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
 Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco*(percentual/100));
 }
 Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco*(percentual/100));
 }
 const p1 = new Produto('camisa', 59.90);
 console.log(p1);
 p1.desconto(15);
 console.log(p1);
 p1.aumento(15);
 console.log(p1);
 
 const p2 ={
     nome: 'Caneca',
     preco: 30.30
 }
 Object.setPrototypeOf(p2, Produto.prototype);
 console.log(p2);
 p2.desconto(15);
 console.log(p2);
 p2.aumento(15);
 console.log(p2);
 
 