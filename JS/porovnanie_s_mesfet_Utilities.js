const btnNapatie = document.getElementById("napatie");
const btnCaptions = document.getElementById("captionsBtn");
const btnPause = document.getElementById("pauseBtn");
const backdrop = document.getElementById("backdrop");
let captionsActive = false;
let sourceActive = false;

if(!localStorage.getItem("menu_tooltip_PSM"))
{
    localStorage.setItem("menu_tooltip_PSM", "seen");

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

if(!localStorage.getItem("porovnanie_captions_active"))
{
    localStorage.setItem("porovnanie_captions_active", "" + captionsActive);
}
else
{
    const value = localStorage.getItem("porovnanie_captions_active");
    captionsActive = String(value).toLowerCase() === "true";
}

if(!localStorage.getItem("porovnanie_source_active"))
{
    localStorage.setItem("porovnanie_source_active", "" + sourceActive);
}
else
{
    const value = localStorage.getItem("porovnanie_source_active");
    sourceActive = String(value).toLowerCase() === "true";
}

if(captionsActive){toggleCaptions()}
if(sourceActive){toggleNapatie()}

function toggleNapatie()
{
    if (getButtonActive(btnNapatie))
    {
        deactivateButton(btnNapatie);
        deactivateButton(btnPause);
        stopAnimations();
        hideSource();
        sourceActive = false;
    }
    else
    {
        activateButton(btnNapatie);
        showSource();
        launchHemtAnimation();
        launchMesfetAnimation();
        sourceActive = true;
    }
    localStorage.setItem("porovnanie_source_active", "" + sourceActive);
}

function toggleCaptions()
{
    if (getButtonActive(btnCaptions))
    {
        deactivateButton(btnCaptions);
        hideCaptions();
        captionsActive = false;
    }
    else
    {
        activateButton(btnCaptions);
        showCaptions();
        captionsActive = true;
    }
    localStorage.setItem("porovnanie_captions_active", "" + captionsActive);
}

function playPauseAnimations()
{
    if (getButtonActive(btnNapatie))
    {
        if (getButtonActive(btnPause))
        {
            deactivateButton(btnPause);
            playAnimations();
        }
        else
        {
            activateButton(btnPause);
            pauseAnimations();
        }
    }
}

function showModal ()
{
    if ((!getButtonActive(btnPause)) && (getButtonActive(btnNapatie)))
    {
        pauseAnimations();
    }
    backdrop.style.display = "block";
}

function hideModal ()
{
    if ((!getButtonActive(btnPause)) && (getButtonActive(btnNapatie)))
    {
        playAnimations();
    }
    backdrop.style.display = "none";
}