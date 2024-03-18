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
        var $name = document.getElementById("firstname");
        var $email = document.getElementById("email");

        if (document.getElementById("yes").checked){
            var $Attend = document.getElementById("yes");
        } else
        {
            var $Attend = document.getElementById("no");
        }

        const HTMLString = `
        <section>
            <div class="info-card">
                <div >Name: ${$name.value}</div>
                <div >Email: ${$email.value}</div>
                <div >Attendance: ${$Attend.value}</div>
                <div >Food: ${checkbox()}</div>
            </div>
        </section>
        `;
        const body = document.querySelector('#body');
        body.insertAdjacentHTML('beforeend', HTMLString);
        document.RSVP_Form.reset();
    }
}
    btnSubmit.addEventListener('click',submitForm);
