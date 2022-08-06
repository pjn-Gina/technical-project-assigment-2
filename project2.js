let userData = document.getElementById("container");
let button = document.getElementsByClassName("button-submit");

 let userBmiValue= "";
 let userStatus = "";
 
 
 let dataObject = new FormData(userData);
   let formValue = Object.fromEntries(dataObject);
 
   userName = formValue.bmi;
   userComment = formValue.hasil;
   
   function calculate(){
    let name = document.getElementById("inputName").value;
    let weight = document.getElementById("inputWeight").value;
    let height = document.getElementById("inputHeight").value;

    var resultData = parseFloat(weight) /(parseFloat(height)/100)**2;

    if(!isNaN(resultData)){
        document.getElementById("user-name").innerHTML=name
        document.getElementById("result-data").innerHTML = resultData.toFixed(2);
        if(resultData < 18.5){
            document.getElementById("categori").innerHTML = "Underweight";
        }
        else if((resultData >= 18.5) && (resultData<= 24.9)){
            document.getElementById("categori").innerHTML = "Normal";
        }
        else if((resultData >= 25) && (resultData <= 29.5)){
            document.getElementById("categori").innerHTML = "Overweight";
        }
        else if(resultData > 30){
            document.getElementById("categori").innerHTML = "Obesity";
        }
        else if (resultData = 0){
            document.getElementById("categori").innerHTML = "Data Not Valid";
        }
        else{
            document.getElementById("categori").innerHTML = "Data Not Valid"
        }
    }

   }

