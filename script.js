const btnSubmit = document.getElementById("btnSubmit");
let guests = JSON.parse(localStorage.getItem('guests')) || [];

function submitForm() {
    if (validateForm()) {
        let $name = document.getElementById("firstname").value;
        let $email = document.getElementById("email").value;
        let $attend; //Have to declare it here, let uses block scope

        if (document.getElementById("yes").checked) {
            $attend = "Yes";
        } else {
            $attend = "No";
        }
            
        guests.push({name: $name,
                    email: $email,
                    attend: $attend,
                    food: checkbox()
                });
            localStorage.setItem('guests', JSON.stringify(guests));
            displayCards();
        }
    }

function displayCards(){
    const container = document.getElementById("container");
    container.innerHTML = '';
    guests.forEach((guest) => {
        let HTMLString = `
        <section>
        <div class="info-card">
            <div >Name: ${guest.name}</div>
            <div >Email: ${guest.email}</div>
            <div >Attendance: ${guest.attend}</div>
            <div >Food: ${guest.food}</div>
        </div>
        </section>
        `;
        container.insertAdjacentHTML('beforeend', HTMLString);
    })
    document.RSVP_Form.reset();
}

btnSubmit.addEventListener('click', submitForm);
// Display items when the page loads
window.addEventListener('load', displayCards);

function validateForm() {
    if (document.RSVP_Form.first_name.value == "") {
        alert("Please provide your name!");
        document.RSVP_Form.first_name.focus();
        return false;
    }
    if (document.RSVP_Form.email.value == "") {
        alert("Please provide your Email!");
        document.RSVP_Form.email.focus();
        return false;
    }
    return true;
}

function checkbox() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let selectedValues = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedValues.push(checkbox.value);
        }
    });
    let resultString = selectedValues.join(', ');
    if (resultString != '') {
        return resultString;
    } else {
        return '-'
    }
}