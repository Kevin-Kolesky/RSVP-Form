const outName = document.getElementById("outName");
const outEmail = document.getElementById("outEmail");
const outAttend = document.getElementById("outAttend");
const outFood = document.getElementById("outFood");
const btnSubmit = document.getElementById("btnSubmit");

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

       //localStorage.clear();
        let entries = parseInt(localStorage.getItem('entries'));
        let arrEntries = JSON.parse(localStorage.getItem('arrEntries'));
       
        console.log(entries);
        console.log(arrEntries);
        if (entries && arrEntries){ 
            entries++;
            localStorage.setItem('entries', entries);
            entries = localStorage.getItem('entries');

            arrEntries.push({
                username: $name.value ,
                email: $email.value,
                attend:  $Attend.value ,
                checkbox: checkbox()
                });
            localStorage.setItem('arrEntries', JSON.stringify(arrEntries));
            arrEntries = JSON.parse(localStorage.getItem('arrEntries'));
        }else{
            let entries = 1;
            localStorage.setItem('entries', entries);

            let arrEntries = [{
                username: $name.value ,
                email: $email.value,
                attend:  $Attend.value ,
                checkbox: checkbox()
                }
            ];
            localStorage.setItem('arrEntries', JSON.stringify(arrEntries));   
        }
        
        for (i=0; i<entries; i++){
            let HTMLString = `
            <section>
            <div class="info-card">
                <div >Name: ${arrEntries[i].username}</div>
                <div >Email: ${arrEntries[i].email}</div>
                <div >Attendance: ${arrEntries[i].attend}</div>
                <div >Food: ${arrEntries[i].checkbox}</div>
            </div>
            </section>
            `; 
            const body = document.querySelector('#container');
            body.insertAdjacentHTML('beforeend', HTMLString);
            document.RSVP_Form.reset();
        }
    }
}
    btnSubmit.addEventListener('click',submitForm);
