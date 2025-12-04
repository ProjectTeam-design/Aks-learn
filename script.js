// الصفحات
const welcomeScreen = document.getElementById("welcomeScreen");
const selectScreen  = document.getElementById("selectScreen");
const createScreen  = document.getElementById("createScreen");

// أزرار الصفحة 1
const teacherBtn = document.getElementById("teacherBtn");
const studentBtn = document.getElementById("studentBtn");
const goCreate   = document.getElementById("goCreate");
const message    = document.getElementById("message");

// أزرار الصفحة 2
const submitLevel = document.getElementById("submitLevel");
const goCreate2   = document.getElementById("goCreate2");
const roleSelect  = document.getElementById("roleSelect");
const levelSelect = document.getElementById("levelSelect");

// أزرار الصفحة 3
const createBtn   = document.getElementById("createBtn");
const backWelcome = document.getElementById("backWelcome");
const createMsg   = document.getElementById("createMsg");

// دالة تعرض صفحة واحدة فقط
function showScreen(screen) {
  welcomeScreen.style.display = "none";
  selectScreen.style.display  = "none";
  createScreen.style.display  = "none";

  screen.style.display = "flex";
}

// نبدأ بصفحة 1
showScreen(welcomeScreen);

// من صفحة 1 → صفحة 2
teacherBtn.addEventListener("click", () => showScreen(selectScreen));
studentBtn.addEventListener("click", () => showScreen(selectScreen));

// من صفحة 1 أو 2 → صفحة 3
goCreate.addEventListener("click", () => showScreen(createScreen));
goCreate2.addEventListener("click", () => showScreen(createScreen));

// من صفحة 3 → صفحة 1
backWelcome.addEventListener("click", () => showScreen(welcomeScreen));

// زر Submit في صفحة 2: يقرأ الدور والمستوى
submitLevel.addEventListener("click", () => {
  const role  = roleSelect.value;
  const level = levelSelect.value;
  message.textContent = `Selected: ${role} - ${level}.`;
  showScreen(welcomeScreen); // مؤقتاً نرجع لواجهة الترحيب
});

// زر Create Account (تجريب فقط)
createBtn.addEventListener("click", () => {
  createMsg.textContent = "Account created (demo). You can now login.";
});

