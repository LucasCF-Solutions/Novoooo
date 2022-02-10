function ValidaCpf(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable:true,
        configurable: false,
        get function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });

}
ValidaCpf.prototype.valida = function () {
    console.log(this.cpfLimpo);
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.lenght !== 11) return false;
    return true;
};
const cpf = new ValidaCpf('042.197.700-03');
console.log(cpf.valida());