let first1 = document.getElementsByClassName("value1")[0];
let second2 = document.getElementsByClassName("value2")[0]; 
let activityLog = document.querySelector(".activity-log"); 

if (!activityLog) {
    console.error("Activity Log container not found!");
}

let i1 = parseInt(first1.textContent);
let i2 = parseInt(second2.textContent);


let buttons = document.getElementsByClassName("btn-all");
Array.from(buttons).forEach(button => {
    button.addEventListener("click", (event) => {
        if (i1 > 0) {
            i1--;
            i2++;

       
            first1.textContent = i1;
            second2.textContent = i2;

      
            let taskTitle = event.target.closest(".px-6").querySelector("h2").textContent.trim();

            let currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    
            let logEntry = document.createElement("p");
            logEntry.textContent = ` You have completed the Task ${taskTitle} at ${currentTime}`;
            logEntry.classList.add("text-gray-700", "p-1");

            activityLog.appendChild(logEntry);
        }
    });
});


function clearLog() {
    activityLog.innerHTML = ""; 
}
