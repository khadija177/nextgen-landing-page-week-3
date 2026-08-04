// ===============================
// Hamburger Menu
// ===============================

const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

hamburgerBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// ===============================
// Internship Form
// ===============================

const form = document.getElementById("applicationForm");
const successMessage = document.getElementById("successMessage");
const submissions = document.getElementById("submissions");

loadSubmissions();

form.addEventListener("submit", function(e){

    e.preventDefault();

    document.querySelectorAll(".error").forEach(error=>{
        error.textContent="";
    });

    let fullName=document.getElementById("fullName").value.trim();
    let email=document.getElementById("email").value.trim();
    let phone=document.getElementById("phone").value.trim();
    let domain=document.getElementById("domain").value;
    let university=document.getElementById("university").value.trim();
    let statement=document.getElementById("statement").value.trim();

    let valid=true;

    if(fullName===""){
        document.getElementById("nameError").textContent="Full Name is required";
        valid=false;
    }

    if(email===""){
        document.getElementById("emailError").textContent="Email is required";
        valid=false;
    }

    if(phone===""){
        document.getElementById("phoneError").textContent="Phone Number is required";
        valid=false;
    }

    if(domain===""){
        document.getElementById("domainError").textContent="Please select a domain";
        valid=false;
    }

    if(university===""){
        document.getElementById("universityError").textContent="University is required";
        valid=false;
    }

    if(statement===""){
        document.getElementById("statementError").textContent="Please write your statement";
        valid=false;
    }

    if(valid){

        const application={
            fullName,
            email,
            phone,
            domain,
            university,
            statement
        };

        let data=JSON.parse(localStorage.getItem("applications")) || [];

        data.push(application);

        localStorage.setItem("applications",JSON.stringify(data));

        successMessage.textContent="Application Submitted Successfully!";

        form.reset();
        

        loadSubmissions();
    }

});

function loadSubmissions(){

    submissions.innerHTML="";

    let data=JSON.parse(localStorage.getItem("applications")) || [];

    data.forEach(app=>{

        submissions.innerHTML+=`
        <div class="submission-card">
            <h4>${app.fullName}</h4>
            <p><strong>Email:</strong> ${app.email}</p>
            <p><strong>Phone:</strong> ${app.phone}</p>
            <p><strong>Domain:</strong> ${app.domain}</p>
            <p><strong>University:</strong> ${app.university}</p>
            <p>${app.statement}</p>
        </div>
        `;

    });

}
