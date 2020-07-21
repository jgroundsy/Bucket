var localStorage = window.localStorage;

function createAccount(){
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    gender = getGender();
    orient = document.getElementById("orientation").options[document.getElementById("orientation").selectedIndex].value;
    age = getAge(document.getElementById("dob").value);
    password = document.getElementById("password").value; //dont worry, this is local

    if(fname <= 0 || lname <= 0 || email <=0 || password <= 0 || (gender != "male" && gender != "female") || Number.isNaN(age)){
        alert("You must enter values for ALL of the fields!");
    }else{
        localStorage.setItem('fname', fname);
        localStorage.setItem('lname', lname);
        localStorage.setItem('email', email);
        localStorage.setItem('gender', gender);
        localStorage.setItem('orient', orient);
        localStorage.setItem('age', age);
        localStorage.setItem('password', password);
        window.location.href="confirmation.html";
    }
}

function loadLogin(){
    if(localStorage.getItem('email') == "null"){
        alert("You have not created a demo account! Please register an account to continue.");
        window.location.href="register.html";
    }else{
        // do nothing
    }
}

function loadLogout(){
    localStorage.setItem('loggedIn', "false");
}

function loadAccount(){
    if (localStorage.getItem('email') == document.getElementById("email").value && localStorage.getItem('password') == document.getElementById("password").value){
        localStorage.setItem('loggedIn', "true");
        window.location.href="profile.html";
    }else{
        localStorage.setItem('loggedIn', "false");
        alert("Username/password is incorrect.");
    }
}

function displayProfile(){
    if(localStorage.getItem('loggedIn') == "true"){
        document.getElementById("name").innerHTML = (localStorage.getItem('fname') + " " + localStorage.getItem('lname') + ", " + localStorage.getItem('age'));

        alert("You can now begin Sweeping™! Please hover/click your profile image in the top right of the screen.")
    }else{
        alert("You must first login in order to view your profile");
        window.location.href="login.html";
    }
}

function displayConfirmation(){
    name = localStorage.getItem('fname');
    document.getElementById("title").innerHTML = ("Thank you for registering, " + name + "!");
}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var years = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        years--;
    }
    return years;
}

function getGender(){
    var radiobtn = document.getElementsByName('gender');

    for (var i=0, length=radiobtn.length; i<length; i++){
        if (radiobtn[i].checked){
            return radiobtn[i].value;
            break;
        }
    }
}

