

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");

    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", () => {
            sidebar.classList.toggle("active");
        });
    }



    const patientsCount = document.getElementById("patientsCount");
    const doctorsCount = document.getElementById("doctorsCount");
    const appointmentsCount = document.getElementById("appointmentsCount");
    const diagnosisCount = document.getElementById("diagnosisCount");


    

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


    

    const notificationButton =
        document.querySelector(".icon-button");

    if (notificationButton) {

        notificationButton.addEventListener("click", () => {

            alert("لا توجد إشعارات جديدة حاليًا.");

        });

    }


    

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
