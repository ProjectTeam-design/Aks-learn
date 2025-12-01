let currentUser = null;
let currentRole = null;

let announcements = JSON.parse(localStorage.getItem("announcements")) || [];

function login() {
    const username = document.getElementById("username").value.trim();
    const role = document.getElementById("role").value;

    if (username === "") {
        alert("Please enter your username!");
        return;
    }

    currentUser = username;
    currentRole = role;

    document.getElementById("login-form").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("welcome-msg").innerText = `Welcome, ${currentUser}!`;

    if (role === "teacher") {
        document.getElementById("teacher-panel").style.display = "block";
        document.getElementById("student-panel").style.display = "none";
    } else {
        document.getElementById("teacher-panel").style.display = "none";
        document.getElementById("student-panel").style.display = "block";
    }

    updateAnnouncements();
}

function logout() {
    currentUser = null;
    currentRole = null;
    document.getElementById("login-form").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
}

function postAnnouncement() {
    const text = document.getElementById("announcement").value.trim();
    if (text === "") return;

    announcements.push({ user: currentUser, text: text });
    localStorage.setItem("announcements", JSON.stringify(announcements));

    document.getElementById("announcement").value = "";
    updateAnnouncements();
}

function updateAnnouncements() {
    const teacherList = document.getElementById("announcements-list");
    const studentList = document.getElementById("student-announcements");

    teacherList.innerHTML = "";
    studentList.innerHTML = "";

    announcements.forEach(a => {
        const liTeacher = document.createElement("li");
        liTeacher.innerText = `${a.user}: ${a.text}`;
        teacherList.appendChild(liTeacher);

        const liStudent = document.createElement("li");
        liStudent.innerText = `${a.user}: ${a.text}`;
        studentList.appendChild(liStudent);
    });
}
