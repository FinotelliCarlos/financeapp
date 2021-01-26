const Modal = {
    open(){
        // Abrir Modal
        // Adicionar class active ao modal
        document.querySelector('.modal-overlay')
        .classList.add('active')

    },
    close(){
        // Fechar Modal
        // Remover classe active do modal
        document.querySelector('.modal-overlay')
        .classList.remove('active')
    }
}