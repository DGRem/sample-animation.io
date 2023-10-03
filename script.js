const fadingImage = document.getElementById("female-image");
const fromLeft = document.getElementById("tag-line");
const scaleOut = document.getElementById("tag-line")
const fromRight = document.getElementById("head-tag")
const fadingText = document.getElementById("text-info")
const buttonIn = document.getElementById("learn-more")
const logoIn = document.getElementById("kodego-logo")
const replayIn = document.getElementById("btn-replay")


const fadeIn = () => {
    fadingImage.style.opacity = 1;
};

const fadeOut = () => {
    fadingImage.style.opacity = 0;
};

const slideLeft = () => {
    fromLeft.style.transform = "translateX(0)";
};

const shrinkDown = () => {
    scaleOut.style.transform = "scale(0.001";
};

const shrinkOut =() => {
    scaleOut.style.transform = "scale(0)";
};

const slideRight = () => {
    fromRight.style.transform = "translateX(0)";
};

const textIn = () => {
    fadingText.style.opacity = 1;
};

const btnIn = () => {
    buttonIn.style.opacity = 1;
};

const slideLogo = () => {
    logoIn.style.transform = "translateX(0)";
};

const fadeReplay = () => {
    replayIn.style.opacity = 1;
};

const replayAnimation = () => {
    location.reload();
};

fadeIn();

setTimeout(fadeIn, 2000);

setTimeout(fadeOut, 2000);

setTimeout(slideLeft, 500);

setTimeout(shrinkDown, 2000);

setTimeout(shrinkOut, 3000);

setTimeout(slideRight, 2000);

setTimeout(textIn, 2500);

setTimeout(btnIn, 3000);

setTimeout(slideLogo, 3500);

setTimeout(fadeReplay, 4000);

replayIn.addEventListener("click", replayAnimation);