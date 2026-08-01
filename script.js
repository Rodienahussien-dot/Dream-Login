const string = document.getElementById("string");
const loginBox = document.getElementById("loginBox");

let lampOn = false;

// تشغيل المصباح عند الضغط على الخيط
string.addEventListener("click", () => {

    if (!lampOn) {

        document.body.classList.add("light");

        loginBox.classList.add("show");

        string.style.transform = "translateY(12px)";

        setTimeout(() => {
            string.style.transform = "translateY(0)";
        }, 200);

        lampOn = true;
    }

});

// تسجيل الدخول

function login() {

    const username = document
        .getElementById("username")
        .value
        .trim();

    const password = document
        .getElementById("password")
        .value
        .trim();

    const error = document.getElementById("error");

    if (
        username === "Rodien adel" &&
        password === "2422006"
    ) {

        window.location.href = "dream.html";

    } else {

        error.innerHTML = "❌ Incorrect Username or Password";

    }

}