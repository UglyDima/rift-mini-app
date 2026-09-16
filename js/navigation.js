/* =========================
   PROFILE BUTTON
========================= */

document
    .getElementById("profileButton")
    .addEventListener(
        "click",
        function () {

            document
                .getElementById("homePage")
                .style.display = "none";

            document
                .getElementById("profilePage")
                .classList.add("active");
        }
    );


/* =========================
   PAGE NAVIGATION
========================= */

function openPage(pageName) {

    document
        .getElementById("homePage")
        .style.display = "none";


    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    const page =
        document.getElementById(
            pageName + "Page"
        );


    if (page) {
        page.classList.add("active");
    }
}


/* =========================
   HOME
========================= */

function goHome() {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    document
        .getElementById("homePage")
        .style.display = "block";
}
