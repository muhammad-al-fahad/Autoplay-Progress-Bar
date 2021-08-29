var x = 0;
        setInterval(()=>{
            if(x == 65){
                return;
            }
             x += 1;
             document.getElementById("numeric").innerHTML = x + "%";         
        },30)