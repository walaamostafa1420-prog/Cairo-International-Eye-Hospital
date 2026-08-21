// =========================
// DASHBOARD JAVASCRIPT
// =========================

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // MOBILE SIDEBAR
    // =========================

    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");

    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", () => {
            sidebar.classList.toggle("active");
        });
    }


    // =========================
    // DASHBOARD STATISTICS
    // =========================

    const patientsCount = document.getElementById("patientsCount");
    const doctorsCount = document.getElementById("doctorsCount");
    const appointmentsCount = document.getElementById("appointmentsCount");
    const diagnosisCount = document.getElementById("diagnosisCount");


    // بيانات مؤقتة للواجهة
    // بعد ما الـ Backend يجهز API
    // هنستبدلها بالبيانات الحقيقية

    const dashboardData = {
        patients: 1250,
        doctors: 48,
        appointments: 32,
        diagnosis: 186
    };


    if (patientsCount) {
        patientsCount.textContent = dashboardData.patients;
    }

    if (doctorsCount) {
        doctorsCount.textContent = dashboardData.doctors;
    }

    if (appointmentsCount) {
        appointmentsCount.textContent = dashboardData.appointments;
    }

    if (diagnosisCount) {
        diagnosisCount.textContent = dashboardData.diagnosis;
    }


    // =========================
    // CLOSE SIDEBAR
    // WHEN CLICKING OUTSIDE
    // =========================

    document.addEventListener("click", (event) => {

        if (!sidebar || !menuToggle) {
            return;
        }

        const clickedInsideSidebar =
            sidebar.contains(event.target);

        const clickedMenuButton =
            menuToggle.contains(event.target);

        if (
            !clickedInsideSidebar &&
            !clickedMenuButton &&
            window.innerWidth <= 1000
        ) {
            sidebar.classList.remove("active");
        }

    });


    // =========================
    // NOTIFICATION BUTTON
    // =========================

    const notificationButton =
        document.querySelector(".icon-button");

    if (notificationButton) {

        notificationButton.addEventListener("click", () => {

            alert("لا توجد إشعارات جديدة حاليًا.");

        });

    }


    // =========================
    // ACTIVE MENU
    // =========================

    const menuItems =
        document.querySelectorAll(".menu-item");

    menuItems.forEach((item) => {

        item.addEventListener("click", () => {

            menuItems.forEach((menu) => {
                menu.classList.remove("active");
            });

            item.classList.add("active");

        });

    });


});