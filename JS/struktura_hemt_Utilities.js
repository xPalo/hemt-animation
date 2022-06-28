const strukturaButton = document.getElementById("strukturaButton");
const detailButton = document.getElementById("detailButton");
const SH_button1 = document.getElementById("SH_button1");
const SH_button2 = document.getElementById("SH_button2");
const SH_button3 = document.getElementById("SH_button3");
const captionsButton = document.getElementById("SH_button3");
const sourceButton = document.getElementById("SH_button1");
const pauseButton = document.getElementById("SH_button2");
const nadpis = document.getElementById("nadpis");
let SH_last = "struktura";
let ugs = "0";
let captionsActive = true;
let paused = false;

if(!localStorage.getItem("SH_last"))
{
    localStorage.setItem("SH_last", "" + SH_last);
}
else
{
    const value = localStorage.getItem("SH_last");
    SH_last = String(value).toLowerCase();
}

switch (SH_last)
{
    case "struktura":
        switchToStruktura();
        break;
    case "detail":
        switchToDetail();
        break;
}

if(!localStorage.getItem("menu_tooltip_SH"))
{
    localStorage.setItem("menu_tooltip_SH", "seen");

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

function switchToStruktura()
{
    if (!getButtonActive(strukturaButton))
    {
        activateButton(strukturaButton);
        deactivateButton(detailButton);
        SH_last = "struktura";
        localStorage.setItem("SH_last", "" + SH_last);

        deactivateButton(SH_button1);
        deactivateButton(SH_button2);
        activateButton(SH_button3);
        captionsActive = true;

        SH_button1.innerHTML = `<svg class="bi" width="16" height="16"></svg>
                                Zdroj napätia`
        SH_button2.innerHTML = `<svg class="bi" width="16" height="16"></svg>
                                Pozastaviť`
        SH_button3.innerHTML = `<svg class="bi" width="16" height="16"></svg>
                                Popis`
    }
    nadpis.innerHTML = "";
    stopAnimation();
    drawStruktura();
    drawCaptions();
}

function switchToDetail()
{
    if (!getButtonActive(detailButton))
    {
        deactivateButton(strukturaButton);
        activateButton(detailButton);
        SH_last = "detail";
        localStorage.setItem("SH_last", "" + SH_last);

        activateButton(SH_button1);
        deactivateButton(SH_button2);
        deactivateButton(SH_button3);
        ugs = 0;

        SH_button1.innerHTML = `<svg class="bi" width="16" height="16"></svg>
                                U<sub>GS</sub> = 0`
        SH_button2.innerHTML = `<svg class="bi" width="16" height="16"></svg>
                                U<sub>GS</sub> > 0`
        SH_button3.innerHTML = `<svg class="bi" width="16" height="16"></svg>
                                U<sub>GS</sub> < 0`
    }
    drawDetail();
}

function showModal ()
{
    if (SH_last === "struktura")
    {
        if (!getButtonActive(pauseButton))
        {
            SH_button2Handler();
            paused = true;
        }
        document.getElementById("backdrop2").style.display = "block";
    }
    else
    {
        document.getElementById("backdrop").style.display = "block";
    }
}
function hideModal ()
{
    if (SH_last === "struktura")
    {
        if (paused)
        {
            SH_button2Handler();
            paused = false;
        }
        document.getElementById("backdrop2").style.display = "none";
    }
    else
    {
        document.getElementById("backdrop").style.display = "none";
    }
}

function SH_button1Handler()
{
    if (getButtonActive(strukturaButton))
    {
        if (!getButtonActive(sourceButton))
        {
            launchAnimation();
            activateButton(sourceButton);
        }
        else
        {
            stopAnimation();
            deactivateButton(sourceButton);
        }
    }
    else
    {
        deactivateButton(SH_button2);
        deactivateButton(SH_button3);

        activateButton(SH_button1);
        changeU(1);
    }
}

function SH_button2Handler()
{
    if (getButtonActive(strukturaButton))
    {
        if ((!getButtonActive(pauseButton)) && (getButtonActive(sourceButton)))
        {
            pauseAnimation();
            activateButton(pauseButton);
        }
        else
        {
            playAnimation();
            deactivateButton(pauseButton);
        }
    }
    else
    {
        deactivateButton(SH_button1);
        deactivateButton(SH_button3);

        activateButton(SH_button2);
        changeU(2);
    }
}

function SH_button3Handler()
{
    if (getButtonActive(strukturaButton))
    {
        if (!getButtonActive(captionsButton))
        {
            drawCaptions();
            activateButton(captionsButton);
        }
        else
        {
            hideCaptions();
            deactivateButton(captionsButton);
        }
    }
    else
    {
        deactivateButton(SH_button2);
        deactivateButton(SH_button1);

        activateButton(SH_button3);
        changeU(3);
    }
}