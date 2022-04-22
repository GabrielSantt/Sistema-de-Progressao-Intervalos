function contar(){
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res =  window.document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length==0){
        res.innerHTML = '<h1> Impossivel Contar </h1>'
       // window.alert('[ERRO] Confira os campos!')
    }else{
        res.innerHTML= 'Contando: <br> '
        let i=Number(ini.value)
        let f=Number(fim.value)
        let p=Number(passo.value)
        if(p<=0){
            alert('Passo Inválido! Considerando o valor 1')
            p=1
        }

         if(i <f){ //Contagem Crescente
            for(let c=i; c<=f; c+=p) {
                res.innerHTML += ` ${ c} \u{1F449}`
            }
            res.innerHTML+= '\u{1F3C1}'
         } else{ //Contagem Regressiva
            for(let c=i; c>=f; c-=p) {
                res.innerHTML += ` ${ c} \u{1F449}`
            }
            res.innerHTML+= '\u{1F3C1}'
         }
        
    }
}