
let buttonsArray = [];
const hemt1Button = document.getElementById("hemt1");
const hemt2Button = document.getElementById("hemt2");
const hemt3Button = document.getElementById("hemt3");
const hemt4Button = document.getElementById("hemt4");
const sourceButton = document.getElementById("vyvoj_struktur_napatieBtn");
const pauseButton = document.getElementById("vyvoj_struktur_pauseBtn");
const captionsButton = document.getElementById("vyvoj_struktur_captionsBtn");
const backdrop = document.getElementById("backdrop");
let captionsActive = true;
let sourceActive = false;

if(!localStorage.getItem("menu_tooltip_VS"))
{
    localStorage.setItem("menu_tooltip_VS", "seen");

    const menu_element = document.getElementById("menu_element");
    const tooltip = new bootstrap.Tooltip(menu_element, {
        boundary: document.body,
        placement: "left",
        animation: true,
        title: "Ovládacie prvky nájdeš tu!",
        trigger: "manual",
        offset: [0,20],
    })

    setTimeout(function() {
        tooltip.show();
    }, 1500);

    setTimeout(function() {
        tooltip.hide();
    }, 5000);
}

buttonsArray.push(hemt1Button, hemt2Button, hemt3Button, hemt4Button, sourceButton, pauseButton, captionsButton);



if(!localStorage.getItem("captions_active"))
{
    localStorage.setItem("captions_active", "" + captionsActive);
}
else
{
    const value = localStorage.getItem("captions_active");
    captionsActive = String(value).toLowerCase() === "true";
}

if(!localStorage.getItem("source_active"))
{
    localStorage.setItem("source_active", "" + sourceActive);
}
else
{
    const value = localStorage.getItem("source_active");
    sourceActive = String(value).toLowerCase() === "true";
}

let currentHemt = 1; // Predvolená hodnota

if(!localStorage.getItem("current_hemt"))
{
    localStorage.setItem("current_hemt", "" + currentHemt);
}
else
{
    currentHemt = parseInt(localStorage.getItem("current_hemt"));
}

switch (currentHemt)
{
    case 1:
        switchToHemt1();
        break;
    case 2:
        switchToHemt2();
        break;
    case 3:
        switchToHemt3();
        break;
    case 4:
        switchToHemt4();
        break;
    default:
        switchToHemt1();
        break;
}

function deactivateButtons()
{
    stopHemtAnimations();
    buttonsArray.forEach(b => deactivateButton(b));
}

function switchToHemt1()
{
    deactivateButtons();
    activateButton(hemt1Button);
    currentHemt = 1;
    localStorage.setItem("current_hemt", "" + currentHemt);
    drawHemt1Function();
    if (captionsActive){toggleCaptions();}
    if (sourceActive){toggleNapatieFunction();}
}

function switchToHemt2()
{
    deactivateButtons();
    activateButton(hemt2Button);
    currentHemt = 2;
    localStorage.setItem("current_hemt", "" + currentHemt);
    drawHemt2Function();
    if (captionsActive){toggleCaptions();}
    if (sourceActive){toggleNapatieFunction();}
}

function switchToHemt3()
{
    deactivateButtons();
    activateButton(hemt3Button);
    currentHemt = 3;
    localStorage.setItem("current_hemt", "" + currentHemt);
    drawHemt3Function();
    if (captionsActive){toggleCaptions();}
    if (sourceActive){toggleNapatieFunction();}
}

function switchToHemt4()
{
    deactivateButtons();
    activateButton(hemt4Button);
    currentHemt = 4;
    localStorage.setItem("current_hemt", "" + currentHemt);
    drawHemt4Function();
    if (captionsActive){toggleCaptions();}
    if (sourceActive){toggleNapatieFunction();}
}

function toggleCaptions()
{
    if(getButtonActive(captionsButton))
    {
        deactivateButton(captionsButton);
        captionsActive = false;
        clearCaptions();
    }
    else
    {
        activateButton(captionsButton);
        switch (currentHemt)
        {
            case 1:
                hemt1Captions();
                break;
            case 2:
                hemt2Captions();
                break;
            case 3:
                hemt3Captions();
                break;
            case 4:
                hemt4Captions();
                break;
        }
        captionsActive = true;
    }
    localStorage.setItem("captions_active", "" + captionsActive);
}

function toggleNapatieFunction()
{
    if (getButtonActive(sourceButton))
    {
        deactivateButton(sourceButton);
        deactivateButton(pauseButton);
        sourceActive = false;
        stopHemtAnimations();
    }
    else
    {
        activateButton(sourceButton);
        switch (currentHemt)
        {
            case 1:
                launchHemt1Animation();
                break;
            case 2:
                launchHemt2Animation();
                break;
            case 3:
                launchHemt3Animation();
                break;
            case 4:
                hemt4Captions();
                break;
        }
        sourceActive = true;
    }
    localStorage.setItem("source_active", "" + sourceActive);
}

function playPauseFunction()
{
    if (getButtonActive(sourceButton))
    {
        if (!getButtonActive(pauseButton))
        {
            activateButton(pauseButton);
            pauseHemtAnimations();
        }
        else
        {
            deactivateButton(pauseButton);
            playHemtAnimations();
        }
    }
}

function showModal ()
{
    if ((!getButtonActive(pauseButton)) && (getButtonActive(sourceButton)))
    {
        pauseHemtAnimations();
    }
    backdrop.style.display = "block";
}

function hideModal ()
{
    if ((!getButtonActive(pauseButton)) && (getButtonActive(sourceButton)))
    {
        playHemtAnimations();
    }
    backdrop.style.display = "none";
}