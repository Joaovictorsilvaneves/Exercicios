function Tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length !=0){
      let n = Number(num.value)
      tab.innerHTML = ''  
      let c = 1;  
    /*for( c = 1; c <=10; c++){
        let item = document.createElement('option')
        item.text = `${n} X ${c} = ${n * c}`
        tab.appendChild(item)
    }*/

    while(c <= 10){
        let item = document.createElement('option')
        item.text = `${n} X ${c} = ${n * c}`
        tab.appendChild(item)
        c++
    }
}else{
    window.alert("[ERRO] INSIRA UM NÚMERO")
}
}