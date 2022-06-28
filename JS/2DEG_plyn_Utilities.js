const U1Button = document.getElementById("U1");
const U2Button = document.getElementById("U2");
const U3Button = document.getElementById("U3");
const UButtons = [U1Button, U2Button, U3Button];
const pauseButton = document.getElementById("vyvoj_struktur_pauseBtn");
const backdrop = document.getElementById("backdrop");
let switched = false;

switchToInitialState();
if(!localStorage.getItem("menu_tooltip_2DEG"))
{
    localStorage.setItem("menu_tooltip_2DEG", "seen");

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

function switchToInitialState()
{
    deactivateButton(pauseButton);
    drawInitialState();
}

function switchToU1()
{
    if (getButtonActive(U1Button))
    {
        deactivateButton(U1Button);
        switchToInitialState();
    }
    else
    {
        deactivateButtons();
        activateButton(U1Button);
        deactivateButton(pauseButton);
        drawU1();
    }
}

function switchToU2()
{
    if (getButtonActive(U2Button))
    {
        deactivateButton(U2Button);
        switchToInitialState();
    }
    else
    {
        deactivateButtons();
        activateButton(U2Button);
        deactivateButton(pauseButton);
        drawU2();
    }
}

function switchToU3()
{
    if (getButtonActive(U3Button))
    {
        deactivateButton(U3Button);
        switchToInitialState();
    }
    else
    {
        deactivateButtons();
        activateButton(U3Button);
        deactivateButton(pauseButton);
        drawU3();
    }
}

function playPauseAnimation()
{
    if (getButtonActive(pauseButton))
    {
        deactivateButton(pauseButton);
        playAnimation();
    }
    else
    {
        activateButton(pauseButton);
        pauseAnimation();
    }
}

function deactivateButtons() {UButtons.forEach(b => deactivateButton(b))}
function showModal ()
{
    backdrop.style.display = "block";
    if (!getButtonActive(pauseButton))
    {
        playPauseAnimation();
        switched = true;
    }
}
function hideModal ()
{
    backdrop.style.display = "none";
    if (switched)
    {
        playPauseAnimation();
        switched = false;
    }
}