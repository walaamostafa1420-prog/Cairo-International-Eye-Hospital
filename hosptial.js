function changeLanguage(language) {

    document.documentElement.lang = language;

    document.documentElement.dir =
        language === "en" ? "ltr" : "rtl";

    document.querySelectorAll("[data-i18n]").forEach(function (element) {

        const key = element.getAttribute("data-i18n");

        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }

    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (element) {

        const key = element.getAttribute("data-i18n-alt");

        if (translations[language][key]) {
            element.alt = translations[language][key];
        }

    });

    localStorage.setItem("language", language);

    const overlay =
        document.getElementById("languageOverlay");

    if (overlay) {
        overlay.classList.add("hidden");
    }
}


document.addEventListener("DOMContentLoaded", function () {

    // تشغيل اللغة المحفوظة
    const savedLanguage =
        localStorage.getItem("language") || "ar";

    changeLanguage(savedLanguage);


    // فتح وإغلاق قائمة الموبايل
    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");


    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("active");

        });

    }
    function toggleMenu() {

    const navMenu = document.getElementById("navMenu");

    if (navMenu) {
        navMenu.classList.toggle("active");
    }

}

});