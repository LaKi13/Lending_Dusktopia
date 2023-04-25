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





// LINK NAVIGATION ==================================================================================
const home = document.querySelector(".home-content");
const factions = document.querySelector(".factions-content");
const roadmap = document.querySelector(".roadmap");
const leftLinks = document.querySelectorAll(".left-links");

// cursor navigation
const arrElems = [home, factions, roadmap];

for (let item of arrElems) {
    item.addEventListener("mouseover", function (e) {
        if (e.target == item && item == arrElems[0]) {
            colorLinkHome();
        } else if (e.target == item && item == arrElems[1]) {
            colorLinkFactions();
        } else if (e.target == item && item == arrElems[2]) {
            colorLinkRoadmap();
        }
    });
}

// click navigation
for (let elem of leftLinks) {
    elem.addEventListener("click", () => {
        if (elem.getAttribute("data-name") == "home") {
            home.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            colorLinkHome();
        } else if (elem.getAttribute("data-name") == "factions") {
            factions.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            colorLinkFactions()
        } else if (elem.getAttribute("data-name") == "roadmap") {
            roadmap.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            colorLinkRoadmap();
        }
    });
}

// change color links
function colorLinkHome() {
    for (let link of leftLinks) {
        link.style.color = "rgba(255, 255, 255, 0.7)";
        if (link.getAttribute("data-name") == "home") {
            link.style.color = "#fff";
        }
    }
}

function colorLinkFactions() {
    for (let link of leftLinks) {
        link.style.color = "rgba(255, 255, 255, 0.7)";
        if (link.getAttribute("data-name") == "factions") {
            link.style.color = "#fff";
        }
    }
}

function colorLinkRoadmap() {
    for (let link of leftLinks) {
        link.style.color = "rgba(255, 255, 255, 0.7)";
        if (link.getAttribute("data-name") == "roadmap") {
            link.style.color = "#fff";
        }
    }
}






// FACTIONS MENU ========================================================================================
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





// ROADMAP MENU ==========================================================================================
const markerBg = document.querySelectorAll(".marker-bg");
const treeBranch = document.querySelectorAll(".tree-branch");
const branchNumb = document.querySelectorAll(".branch-numb");
const branchTitle = document.querySelectorAll(".branch-title");
const branchDesc = document.querySelectorAll(".branch-description");

for (let i = 0; i < markerBg.length; i++) {
    if (markerBg[i].classList.contains("active") && treeBranch[i].classList.contains("active") &&
        branchNumb[i].classList.contains("active") && branchTitle[i].classList.contains("active") &&
        branchDesc[i].classList.contains("active")) {

        function activeElem(marker, tree, numb, title, desc) {
            marker = markerBg[i].classList.toggle("active");
            tree = treeBranch[i].classList.toggle("active");
            numb = branchNumb[i].classList.toggle("active");
            title = branchTitle[i].classList.toggle("active");
            desc = branchDesc[i].classList.toggle("active");
        }

        function delActiveElem(marker, tree, numb, title, desc) {
            marker = markerBg[i].classList.remove("active");
            tree = treeBranch[i].classList.remove("active");
            numb = branchNumb[i].classList.remove("active");
            title = branchTitle[i].classList.remove("active");
            desc = branchDesc[i].classList.remove("active");
        }
    }

    treeBranch[i].addEventListener("mouseenter", () => {
        activeElem();
    });

    treeBranch[i].addEventListener("mouseleave", () => {
        activeElem();
    });

    treeBranch[i].addEventListener("click", () => {
        markerBg[i].classList.add("active");
        treeBranch[i].classList.add("active");
        branchNumb[i].classList.add("active");
        branchTitle[i].classList.add("active");
        branchDesc[i].classList.add("active");

        delActiveElem();
    });
}
