// BURGER LINES MENU and DROP-DOWN LIST =====================================================
const burgerMenuLines = document.querySelector(".burger-menu_lines");
const burgerMenuElems = document.querySelector(".burger-menu_elems");

burgerMenuLines.onclick = () => {
    burgerMenuLines.classList.toggle("active");

    // sound effect
    soundPlay(audio, "audio/push.mp3");

    // убираем кликабельность курсора на время появления/исчезания списка
    const cursorNone = setTimeout(() => {
        burgerMenuLines.style.pointerEvents = "none";
    });
    setTimeout(() => {
        clearTimeout(cursorNone);
        burgerMenuLines.style.pointerEvents = "auto";
    }, 1000);

    dropDownList();
}

// FUNCTION DROP-DOWN LIST
function dropDownList() {
    if (burgerMenuLines.classList.contains("active") && window.innerWidth <= 799) {

        const visibleElems = setTimeout(() => {
            burgerMenuElems.style.display = "block";
        });
        setTimeout(() => {
            clearInterval(visibleElems);
            burgerMenuElems.style.opacity = "1";
        }, 100);

    } else if (!burgerMenuLines.classList.contains("active") || window.innerWidth > 799) {

        const hideElems = setTimeout(() => {
            burgerMenuElems.style.opacity = "0";
        });
        setTimeout(() => {
            clearInterval(hideElems);
            burgerMenuElems.style.display = "none";
        }, 1000);
    }
}




// CHANGE MAIN IMG and DROP-DOWN LIST=========================================================
const mainImg = document.querySelector(".main-img");

window.onresize = changeMainImg;

function changeMainImg() {
    if (window.innerWidth <= 799) {
        mainImg.src = "images/main-img_mobile.jpg";
    } else if (window.innerWidth > 799) {
        mainImg.src = "images/main-img.jpg";
    }

    dropDownList();
}

changeMainImg();




// SOUND ACCOMPANIMENT OF BUTTONS
const whitePaper = document.querySelectorAll(".whitepaper");
const leftLinks = document.querySelectorAll(".left-links");
const icon = document.querySelectorAll(".icon");
const arr = [whitePaper, leftLinks, icon];
const audio = new Audio();

// alert window
function alertElem(body, alt, altBtn) {
    body = document.querySelector("body");
    body.style.overflow = "hidden";
    alt = document.querySelector(".alert");
    altBtn = document.querySelectorAll(".alert-btn");

    function alertNone() {
        setTimeout(function () {
            alt.style.opacity = "0";
            alt.style.transform = "scale(2)";
        });
        setTimeout(() => {
            alt.style.display = "none";
            body.style.overflow = "auto";
        }, 500);
    }

    for (let item of altBtn) {
        item.addEventListener("click", () => {
            if (item.classList.contains("alert-yes")) {
                noise();
                alertNone();
            } else if (item.classList.contains("alert-no")) {
                alertNone();
            }
        });
    }
}

alertElem();

// sound on functions
function noise() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j].onmouseenter = () => {
                if (arr[i] == whitePaper) {
                    soundPlay(audio, "audio/off.mp3");
                } else if (arr[i] == leftLinks || arr[i] == icon) {
                    soundPlay(audio, "audio/on.mp3");
                }
            }

            arr[i][j].onclick = () => {
                soundPlay(audio, "audio/push.mp3");
            }
        }
    }
}

function soundPlay(audio, sound) {
    audio.src = sound;
    const playing = audio.play();

    if (playing !== undefined) {
        playing.then(() => {
            playing;
        }).catch(() => {
            playing;
        })
    }
}