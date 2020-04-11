let table = document.getElementById('table')
let btn = document.querySelectorAll('button')[0]

window.onload = () => {
    table.style.display = 'none'
}
MostraTable = () =>{
   if(table.style.display == 'none'){

        table.style.display = 'unset'
        btn.innerText = 'Esconder'

   }else{
    table.style.display = 'none'
    btn.innerText = 'Mostra'


   }

}