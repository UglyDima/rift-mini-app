/* =========================
   DUEL BUTTON
========================= */

document
    .getElementById("duelButton")
    .addEventListener(
        "click",
        function () {

            this.textContent =
                "Поиск соперника...";

            setTimeout(() => {

                this.textContent =
                    "Играть →";

                alert(
                    "DUEL пока находится в разработке."
                );

            }, 700);
        }
    );
