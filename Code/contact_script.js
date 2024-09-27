function validate(){
    let first_name = document.getElementById("first_name");
    let last_name = document.getElementById("last_name");
    let email = document.getElementById("email_address");
    let phone = document.getElementById("phone_number");
    let inquiry = document.getElementById("inquiry");
    console.log(first_name.value)
    console.log(last_name.value)
    console.log(email.value)
    console.log(phone.value)
    

    if(first_name.value == "" || last_name.value =="" || email.value == "" || phone.value == "" || inquiry.value == ""){
        alert("All fields must be filled.")
        return false
    } else if (first_name.value.length < 3 || last_name.value.length < 3){
        alert("First/last name must be at least 3 characters long.")
        return false
    } else if (!isAlpha(first_name.value) || !isAlpha(last_name.value)){
        alert("Name must only contain alphabets.")
        return false
    } else if (!isNum(phone.value) || parseFloat(phone.value) <= 0 || phone.value.length < 10){
        alert("Enter a valid phone number.")
        return false
    } else if (!email.value.endsWith("@gmail.com")){
        alert("email must end with @gmail.com")
        return false
    }
    return true
}

function isAlphaNum(element){
    for(let i=0; i<element.length; i++){
        if(element[i] >= 'a' && element[i]<='z'){
            continue 
        } else if (element[i] >= 'A' && element[i] <= 'Z'){
            continue
        } else if (element[i] >= '0' && element[i] <= '9'){
            continue
        } else {
            return false
        }
    }
    return true
}

function isAlpha(element){
    for(let i=0; i<element.length; i++){
        if(element[i] >= 'a' && element[i]<='z'){
            continue 
        } else if (element[i] >= 'A' && element[i] <= 'Z'){
            continue
        } else {
            return false;
        }
    }
    return true;
}

function isNum(element){
    for(let i=0; i<element.length; i++){
        if (element[i] >= '0' && element[i] <= '9'){
            continue
        } else {
            return false
        }
    }
    return true;
}

let output = document.getElementById('output');
const formToReset = document.getElementById('contact_form');
formToReset.addEventListener('submit', (e) => {
    e.preventDefault();
    formToReset.reset();
});