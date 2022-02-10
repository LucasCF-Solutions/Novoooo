class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');

        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e =>{
             this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
    }

    camposSaoValidos(){
        let valid = true;
        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            console.log(campo);
            const label = campo.previousElementSibling.innerText;
            if(!campo.value){
                this.criaErro(campo, `Campo ${label} não pode estar em branco.`);
            }else{
                if(campo.classList.contains('cpf')){
                    console.log(campo.value);
                    if(!this.validaCpf(campo.value)) {
                        valid = false;
                        this.criaErro(campo, `Campo ${label} não é valido!`);
                    }else{
                        valid = true;
                    }
                }
            }      
        }
    }

    validaCpf(cpf){
        const NovoCpf = new ValidaCPF(cpf);
        
        if (!NovoCpf.valida()){
            return false;
        }
            return true;
    }
    
    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

}

const valida = new ValidaFormulario();