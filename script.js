let text_inpt = document.getElementById('text-input')
let text_inpt_button = document.getElementById('text-input-button')

let text_output = document.getElementById('text-output')

const randomMessages = ["Infelizmente não sei responder 🤔", " Acho que sim", " Acho que não", " Hum..", " Não", " Sim", " Talvez", " Preciso aprender mais 😰 suas palavras me deixou perdinho", " Quem sabe um dia eu possa te reponder 🤡"]

const PreMessages = ['oi', 'ola', 'tchau', 'olá', 'hi', 'hello']

text_inpt.addEventListener('keydown', function(event){
    let x = event.keyCode || event.which;

    if(x === 13){
        if(text_inpt.value === ''){
            return
        } else if(text_inpt.value != ''){
            var msg = text_inpt.value
        eventMsg(msg)
        text_inpt.value = ''
        }

    } else{
        return
    }

})

text_inpt_button.addEventListener('click', () => {
    eventMsg(text_inpt.value)
    text_inpt.value = ''
})
 
function eventMsg(msg){

    //Mensagem Author

    setTimeout(() => {    
        text_output.innerHTML += `
        <div class="message-sended">
            <div class="message-sended-user">
                <img src="src/key.jpg" alt="user">
                <span>Kei Shirogane</span>
            </div>
            <div class="message-sended-text">
                <p>${msg}</p>
            </div>
        </div>`
       }, 300);

    //Mensagem Client

    var randomMsg = parseInt(randomMessages.length * Math.random())
    
    setTimeout(() => {    
        text_output.innerHTML += `
        <div class="message-sended">
            <div class="message-sended-user">
                <img src="src/sabio.jpg" alt="sábio">
                <span>Sábio</span>
            </div>
            <div class="message-sended-text">
                <p>${randomMessages[randomMsg]}</p>
            </div>
        </div>`
        }, 3000);

}
