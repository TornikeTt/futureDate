let submit = document.querySelector("#submit");


submit.addEventListener("click", (e) => {
    e.preventDefault();
    let form = document.querySelector("form");
    let main = document.querySelector("main");
    main.style.display = "flex";
    form.style.display = "none";

    time()
})


function time() {
    let main = document.querySelector("main");
    let seconds = document.querySelector(".Seconds p");
    let minutes = document.querySelector(".Minute p");
    let hours = document.querySelector(".Hours p");
    let days = document.querySelector(".Day p");
    let txt = document.querySelector("h1");
    

    setInterval(() => {
        let User_Input_Date = document.querySelector("#date").value;
        let User_input_date_Time = new Date(User_Input_Date);
        let present = new Date();
        
        let milliseconds = User_input_date_Time.getTime() - present.getTime();      
        let totalSeconds = Math.floor(milliseconds / 1000);
        let totalMinutes = Math.floor(totalSeconds / 60);
        let totalHours = Math.floor(totalMinutes / 60);

        if( isNaN(User_input_date_Time.getTime()) == true ){
            main.style.display = "none";
            txt.style.display = 'block';
            txt.innerHTML = "Invalid Date";
        }else{
            seconds.innerHTML = Math.floor(totalSeconds % 60);
            seconds.innerHTML = seconds.innerHTML >= 10 ? seconds.innerHTML : "0" + seconds.innerHTML;

            minutes.innerHTML = Math.floor(totalMinutes % 60);
            minutes.innerHTML = minutes.innerHTML >= 10 ? minutes.innerHTML : "0" + minutes.innerHTML;

            hours.innerHTML = Math.floor(totalHours % 24);
            hours.innerHTML = hours.innerHTML >= 10 ? hours.innerHTML : "0" + hours.innerHTML;

            days.innerHTML = Math.floor(totalHours / 24); 
            days.innerHTML = days.innerHTML >= 10 ? days.innerHTML : "0" + days.innerHTML;
        }   
    }, 1000)
    
}
  


    





