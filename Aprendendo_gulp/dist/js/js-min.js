let table=document.getElementById("table"),btn=document.querySelectorAll("button")[0];window.onload=(()=>{table.style.display="none"}),MostraTable=(()=>{"none"==table.style.display?(table.style.display="unset",btn.innerText="Esconder"):(table.style.display="none",btn.innerText="Mostra")});