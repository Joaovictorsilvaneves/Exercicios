function Carregar(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = 11
    //var hora = data.getHours()
    msg.innerHTML = ` Agora são ${hora} horas.`
    if(hora >= 6 && hora < 12){
        imagem.src = "imagens//fotoManha.png"
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        imagem.src = "imagens//fotoTarde.png"
        document.body.style.background = '#b9846f'
    }else{
        imagem.src = "imagens//fotoNoite.png"
        document.body.style.background = '#515154'
    }
}