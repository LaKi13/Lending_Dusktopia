// "ALERT" ELEMENTS =========================================================================
window.onload = (aC, aT, aBB, count) => {
    aC = document.querySelector(".alert-circle");
    aT = document.querySelector(".alert-title");
    aBB = document.querySelector(".alert-btn_block");
    count = 0;

    while (count < 500) {
        aC.style.width = count + "px";
        aC.style.height = count + "px";
        count++;
    }

    if (count === 500) {
        aT.style.opacity = "1";
        aBB.style.opacity = "1";
    }
}

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

window.onresize = dropDownList;






// SOUND ACCOMPANIMENT OF BUTTONS =======================================================================
const mainSound = document.querySelectorAll(".main-sound");
const soundLink = document.querySelectorAll(".sound-link");
const icon = document.querySelectorAll(".icon");
const arr = [mainSound, soundLink, icon];
const audio = new Audio();

// sound on functions
function noise() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j].onmouseenter = () => {
                if (arr[i] == mainSound) {
                    soundPlay(audio, "audio/off.mp3");
                } else if (arr[i] == soundLink || arr[i] == icon) {
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





// SMOOTH LINK NAVIGATION ===============================================================================
const header = document.querySelector("header");
const factions = document.querySelector(".factions");
const roadmap = document.querySelector(".roadmap");
const leftLinks = document.querySelectorAll(".left-links");

for (let elem of leftLinks) {
    elem.addEventListener("click", () => {
        if (elem.getAttribute("data-name") == "home") {
            header.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        } else if (elem.getAttribute("data-name") == "factions") {
            factions.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        } else if (elem.getAttribute("data-name") == "roadmap") {
            roadmap.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
}





// FACTIONS MANU ========================================================================================
const linkArea = document.querySelectorAll(".link-area");
const factionName = document.querySelectorAll(".faction-name");
for (let item of factionName) {
    item.addEventListener("click", () => {
        for (let elem of linkArea) {
            if (elem.classList.contains("active")) {
                elem.classList.remove("active");
            }

            item.parentElement.classList.add("active");
        }
    });
}