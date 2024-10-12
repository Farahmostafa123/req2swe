document.getElementById("userform").onsubmit = function() { 
    
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;

    console.log("fname: " + fname);
    console.log("lname: " + lname);
    console.log("email: " + email);
    console.log("age: " + age);

    alert("Form Done! Name: " + fname + ", lname: " + lname + ", email: " + email + ", age: " + age);
};
