const btnAll = document.getElementsByClassName("btn-all")


for (const element of btnAll) {
    element.addEventListener('click',(event)=>{
        alert("Board updated Successfully!")

        if (btnAll.length===1) {
            alert("Congrats! You have completed all the current task")
        }
        event.target.classList.remove("btn-all")
        event.target.setAttribute('disabled','')
    }
    
)}