const outName = document.getElementById("outName");
const outEmail = document.getElementById("outEmail");
const outAttend = document.getElementById("outAttend");
const outFood = document.getElementById("outFood");

function validateForm() {
    if( document.RSVP_Form.first_name.value == "" ) {
        alert( "Please provide your name!" );
        document.RSVP_Form.first_name.focus() ;
        return false;
     }
     if( document.RSVP_Form.email.value == "" ) {
        alert( "Please provide your Email!" );
        document.RSVP_Form.email.focus() ;
        return false;
     }  
    return true ;
 }

function checkbox(){
    let checkboxes = document.querySelectorAll('input[type="checkbox"]'); 
    let selectedValues = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedValues.push(checkbox.value); 
            } 
        });
    let resultString = selectedValues.join(', ');
    if (resultString != ''){
        return resultString;
    }else{
        return '-'
    }
    
}

    function submitForm(){
        if (validateForm()){
        card.classList.remove("hidden");
        var $name = document.getElementById("firstname");
        var $email = document.getElementById("email");

        if (document.getElementById("yes").checked){
            var $Attend = document.getElementById("yes");
        } else
        {
            var $Attend = document.getElementById("no");
        }
         
        outName.innerHTML = "Name:" + $name.value;
        outEmail.innerHTML = "Email:" + $email.value;
        outAttend.innerHTML = "Attendance:" + $Attend.value;
        outFood.innerHTML = "Food: "+ checkbox();
        }
    }
    
    btnSubmit.addEventListener('click',submitForm);

/*
var $Food;

function getFood(){
    $Food = " ";
    var $Food1 = document.getElementById("vegan");
    var $Food2 = document.getElementById("glutenFree");
    var $Food3 = document.getElementById("vegitarian");
    
    if ($Food1.checked){
        if ($Food = " "){
            $Food = $Food1.value;
        }else
            $Food = $Food + ', ' + $Food1.value;
        }

        if ($Food2.checked){
            if ($Food = " "){
                $Food = $Food2.value;
            }else
            $Food = $Food + ', ' + $Food2.value;
        }
        
        if ($Food3.checked){
            if ($Food = " "){
                $Food = $Food3.value;
            }else
            $Food = $Food + ', ' + $Food3.value;
            }
            console.log("Food = " + $Food);
        return $Food;


        if ($Food != " "){
            outFood.innerHTML = "Food: " + getFood();
        }else
            outFood.innerHTML = "Food: -";    
        }
*/