const loginForm = document.querySelector(".login-form");
const Validate_Uname = document.querySelector(".Validate_Uname");
const Validate_Pass = document.querySelector(".Validate_Pass");
const hdlLogin = e => {
    e.preventDefault();
    let allInput = loginForm.elements
    const usernameInput = document.querySelector("#username");
    const validateUsername = usernameInput.value.trim();
    if (
        validateUsername.length > 3 &&
        !/^\d/.test(validateUsername) &&
        !/\s/.test(validateUsername)
    ) {
        Validate_Uname.textContent = "";
        usernameInput.style.borderColor = "initial";
    } else {
        usernameInput.style.borderColor = "red";
        Validate_Uname.textContent = 'Username ความยาวต้องมากกว่า 3 ตัวอักษร'
        Validate_Uname.style.color = 'red'
        return;
    }
    // Validate password
    const passwordInput = document.querySelector("#password");
    const validatePassword = passwordInput.value.trim();
    if (validatePassword.length > 4 && /\d/.test(validatePassword) && /[a-zA-Z]/.test(validatePassword)) {
        Validate_Pass.textContent = "";
        passwordInput.style.borderColor = "initial";
    } else {
        passwordInput.style.borderColor = "red";
        Validate_Pass.textContent = 'Password ความยาวต้องมากกว่า 4 ตัวอักษร และ ต้องมีทั้งตัวเลขและตัวอักษร'
        Validate_Pass.style.color = 'red'
        return;
    }
    // Validate select
    const selectInput = document.querySelector("#role");
    if (selectInput.value !== "") {
        selectInput.style.borderColor = "initial";
    } else {
        selectInput.style.borderColor = "red";
        return;
    }
    if (validateLogin(validateUsername, validatePassword)) {
        alert('Login successful');
        window.location.href = "https://www.example.com";
    } else {
        alert(`ข้อมูลที่คุณป้อนมาได้แก่\nUsername : ${validateUsername}\nPassword : ${validatePassword}\nRole : ${selectInput.value}`);
        window.location.href = "https://www.example.com";
    }
};

function validateLogin(username, password) {
    const users = [
        { username: 'andy', password: 'a1234' },
        { username: 'bobby', password: 'a2345' },
        { username: 'candy', password: 'a3456' }
    ];
    return users.some(user => user.username === username && user.password === password);
}
loginForm.addEventListener('submit', hdlLogin);