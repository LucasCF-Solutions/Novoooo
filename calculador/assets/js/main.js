function criaCalculadora(){
    return{
        display: document.querySelector('.display'),

        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },
        
        cliqueBotoes(){
            document.addEventListener('click', function(e){
                const el = e.target;
                if (el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clr')){
                    this.btnClearDisplay();
                }  
                if (el.classList.contains('btn-del')){
                    this.btnBackspace();
                } 
                if (el.classList.contains('btn-eq')){
                    this.realizaConta();
                }   
            }.bind(this));
        },
        btnParaDisplay(valor){
            this.display.value+=valor;
        },
        btnClearDisplay(){
            this.display.value='';
        },
        btnBackspace(){
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta(){
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta){
                    alert("conta invalida");
                    return;
                }
                this.display.value = String(conta);
            }catch(e){
                alert("conta invalida");
                return;
            } 
        },

        pressionaEnter(){
            document.addEventListener('keypress', e => {
                if (e.key == 'Enter'){
                    this.realizaConta();
                }
               
                if (Number(e.key) !== Number('k')){
                    this.btnParaDisplay(e.key);
                }
                
            })
        }
        
        
    };
}
const calculador = criaCalculadora();
calculador.inicia();