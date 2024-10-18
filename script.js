
convert()
function convert(){

    var num = parseFloat(document.getElementById("input").value)
    var select1 = document.getElementById("select1").value
    var select2 = document.getElementById("select2").value

    let result = ""



    var pop = document.getElementById("res")



    if(select1 === select2){
        result = num
    }

    else if(select1 === "USD"){
        if(select2 === "PKR"){
            result = num * 280
        }
        else if(select2 === "EUR"){
            result = num * 0.90
        }
        else if(select2 === "GBP"){
            result = num * 0.75
        }
        else if(select2 === "AUD"){
            result = num * 1.35
        }
        else if (select2 === "CAD"){
            result = num * 1.28
        }
        else if(select2 === "jpy"){
            result = num * 110
        }
        else if(select2 === "INR"){
            result = num * 82
        }
    }



    else if(select1 === "PKR"){
        if(select2 === "USD"){
            result = num / 280
        }
        else if(select2 === "EUR"){
            result = num / 310
        }
        else if(select2 === "GBP"){
            result = num / 375
        }
        else if(select2 === "AUD"){
            result = num / 208
        }
        else if (select2 === "CAD"){
            result = num / 225
        }
        else if(select2 === "jpy"){
            result = num / 2.5
        }
        else if(select2 === "INR"){
            result = num * 3.5
        }
    }


    else if(select1 === "EUR"){
        if(select2 === "PKR"){
            result = num * 310
        }
        else if(select2 === "USD"){
            result = num / 0.90
        }
        else if(select2 === "GBP"){
            result = num * 0.83
        }
        else if (select2 === "AUD"){
            result = num * 1.50
        }
        else if(select2 === "CAD"){
            result = num * 1.42
        }
        else if(select2 === "JPY"){
            result = num * 1.22
        }
        else if(select2 === "INR"){
            result = num * 91
        }
    }



    else if(select1 === "GBP"){
        if(select2 === "PKR"){
            result = num / 0.75
        }
        else if(select2 === "USD"){
            result = num / 0.75
        }
        else if(select2 === "EUR"){
            result = num / 0.83
        }
        else if (select2 === "AUD"){
            result = num * 1.80
        }
        else if(select2 === "CAD"){
            result = num * 1.70
        }
        else if(select2 === "JPY"){
            result = num * 150
        }
        else if(select2 === "INR"){
            result = num * 110
        }
    }




    
    else if(select1 === "AUD"){
        if(select2 === "PKR"){
            result = num * 208
        }
        else if(select2 === "USD"){
            result = num / 1.35
        }
        else if(select2 === "EUR"){
            result = num / 1.50
        }
        else if (select2 === "GBP"){
            result = num / 1.80
        }
        else if(select2 === "CAD"){
            result = num * 0.95
        }
        else if(select2 === "JPY"){
            result = num * 83
        }
        else if(select2 === "INR"){
            result = num * 61
        }
    }




    
    else if(select1 === "CAD"){
        if(select2 === "PKR"){
            result = num * 225
        }
        else if(select2 === "USD"){
            result = num / 1.28
        }
        else if(select2 === "EUR"){
            result = num / 1.42
        }
        else if (select2 === "AUD"){
            result = num / 0.95
        }
        else if(select2 === "GBP"){
            result = num / 1.70
        }
        else if(select2 === "JPY"){
            result = num * 87
        }
        else if(select2 === "INR"){
            result = num * 64
        }
    }




    
    else if(select1 === "JPY"){
        if(select2 === "PKR"){
            result = num * 2.55
        }
        else if(select2 === "USD"){
            result = num / 110
        }
        else if(select2 === "EUR"){
            result = num / 122
        }
        else if (select2 === "AUD"){
            result = num * 83
        }
        else if(select2 === "CAD"){
            result = num / 87
        }
        else if(select2 === "GBP"){
            result = num / 150
        }
        else if(select2 === "INR"){
            result = num * 0.74
        }
    }



    else if(select1 === "INR"){
        if(select2 === "PKR"){
            result = num * 3.5
        }
        else if(select2 === "USD"){
            result = num / 82
        }
        else if(select2 === "EUR"){
            result = num / 91
        }
        else if (select2 === "AUD"){
            result = num / 61
        }
        else if(select2 === "CAD"){
            result = num / 64
        }
        else if(select2 === "GBP"){
            result = num / 110
        }
        else if(select2 === "JPY"){
            result = num / 0.74
        }
    }

   
    if (!isNaN(result) && num !== '') {
        pop.innerHTML = num + " " + select1 + " = " + result.toFixed(2) + " " + select2;
        pop.style.display = "block"; // Show the result
    }     
}

var btn = document.querySelector("button");
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {  // Check if the Enter key is pressed
        btn.click();               // Simulate a button click
    }
});


var img = document.querySelector("img");
var num = document.getElementById("input")
var agha1 = document.querySelector("p");

img.addEventListener("click",function(){
    num.value = ""
    agha1.innerHTML = ""
})
