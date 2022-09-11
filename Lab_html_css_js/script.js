function compute(msg)
{
    /* Calculation of interest and conversion of years in the future */
    var amount = document.getElementById("Amount").value;
    if (amount == "") {
        alert("Name must be filled out");
        return false;
      } else {
          if (amount <= 0) {
              alert("Enter a positive number");
              return false;
          }
      }

    var rate = document.getElementById("Rate").value;
    var years = document.getElementById("Years").value;

    var interest = amount * years * (rate/100);

    var year = new Date().getFullYear() + parseInt(years);

    /*
    document.getElementById("result").innerHTML="If you deposit "+amount+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
    */
    if (msg != undefined) {
        var msg = "If you deposit "+amount+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
        document.getElementById("boxTxt").innerHTML = msg;
        document.getElementById("boxBack").classList.add("show");
    } else {
            document.getElementById("boxBack").classList.remove("show");
        }
}

function updateRate()
{
    /* Obtaining the value of the range for presentation */
    var rateValue = document.getElementById("Rate").value;
    document.getElementById("rate_value").innerText = rateValue;
}

