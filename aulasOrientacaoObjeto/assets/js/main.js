function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
 Produto.prototype.desconto = function(valor){
    this.preco -= valor;
 }
 Produto.prototype.aumento = function(valor){
    this.preco += valor;
 }

 function Camisa(nome, preco, cor){
     Produto.call(this, nome, preco);
     this.cor = cor;
 }
 Camisa.prototype = Object.create(Produto.prototype);
const camiseta = new Camisa('regata', 39.90, 'preta');
console.log( camiseta);
camiseta.aumento(20);
console.log( camiseta);