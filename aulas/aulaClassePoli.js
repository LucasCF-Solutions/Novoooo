class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if (this.ligado) {
            console.log(this.nome + ' já está ligado!');
            return;
        }    
        console.log(this.nome + ' foi ligado!');
        this.ligado = true;
    }

    desligar(){
        if (this.ligado) {
            console.log(this.nome + ' foi desligado!');
            this.ligado = false;
            return;
        }    
        console.log(this.nome + ' já está desligado!');
    }

}

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}
const d1 = new DispositivoEletronico('radio');
d1.ligar();
d1.ligar();
d1.desligar();
d1.desligar();
const celular = new Smartphone('Motorola', 'preto', 'moto G7 plus');
celular.ligar();
celular.ligar();
celular.desligar();
celular.desligar();
