/* =========================
   PROFILE DATA
========================= */

const savedNickname =
    localStorage.getItem("rift_nickname");

const savedAvatar =
    localStorage.getItem("rift_avatar");


/* =========================
   ELEMENTS
========================= */

const onboarding =
    document.getElementById("onboarding");

const nicknameInput =
    document.getElementById("nicknameInput");

const avatarInput =
    document.getElementById("avatarInput");

const avatarPreview =
    document.getElementById("avatarPreview");

const avatarPickerText =
    document.getElementById("avatarPickerText");

const nicknameError =
    document.getElementById("nicknameError");

const continueButton =
    document.getElementById("continueButton");

const homeNickname =
    document.getElementById("homeNickname");

const welcomeName =
    document.getElementById("welcomeName");

const profileNickname =
    document.getElementById("profileNickname");

const homeAvatar =
    document.getElementById("homeAvatar");

const profileAvatar =
    document.getElementById("profileAvatar");

const topAvatar =
    document.getElementById("topAvatar");

const topAvatarPlaceholder =
    document.getElementById("topAvatarPlaceholder");


/* =========================
   AVATAR UPLOAD
========================= */

avatarInput.addEventListener(
    "change",
    function () {

        const file = this.files[0];

        if (!file) {
            return;
        }

        const reader =
            new FileReader();

        reader.onload =
            function (event) {

                avatarPreview.src =
                    event.target.result;

                avatarPreview.style.display =
                    "block";

                avatarPickerText.style.display =
                    "none";
            };

        reader.readAsDataURL(file);
    }
);


/* =========================
   CREATE PROFILE
========================= */

continueButton.addEventListener(
    "click",
    function () {

        const nickname =
            nicknameInput.value.trim();


        if (
            nickname.length < 2 ||
            nickname.length > 20
        ) {

            nicknameError.style.display =
                "block";

            return;
        }


        nicknameError.style.display =
            "none";


        localStorage.setItem(
            "rift_nickname",
            nickname
        );


        if (
            avatarPreview.src &&
            avatarPreview.src !==
            window.location.href
        ) {

            localStorage.setItem(
                "rift_avatar",
                avatarPreview.src
            );
        }


        loadProfile();

        onboarding.style.display =
            "none";
    }
);


/* =========================
   LOAD PROFILE
========================= */

function loadProfile() {

    const nickname =
        localStorage.getItem(
            "rift_nickname"
        ) || "Player";


    const avatar =
        localStorage.getItem(
            "rift_avatar"
        );


    homeNickname.textContent =
        nickname;

    welcomeName.textContent =
        nickname;

    profileNickname.textContent =
        nickname;


    if (avatar) {

        homeAvatar.src =
            avatar;

        profileAvatar.src =
            avatar;

        topAvatar.src =
            avatar;


        homeAvatar.style.display =
            "block";

        profileAvatar.style.display =
            "block";

        topAvatar.style.display =
            "block";


        topAvatarPlaceholder.style.display =
            "none";
    }
}


/* =========================
   EDIT PROFILE
========================= */

document
    .getElementById("editProfileButton")
    .addEventListener(
        "click",
        function () {

            onboarding.style.display =
                "flex";


            nicknameInput.value =
                localStorage.getItem(
                    "rift_nickname"
                ) || "";


            const avatar =
                localStorage.getItem(
                    "rift_avatar"
                );


            if (avatar) {

                avatarPreview.src =
                    avatar;

                avatarPreview.style.display =
                    "block";

                avatarPickerText.style.display =
                    "none";
            }
        }
    );


/* =========================
   FIRST LAUNCH
========================= */

if (savedNickname) {

    loadProfile();

    onboarding.style.display =
        "none";

} else {

    onboarding.style.display =
        "flex";
}
