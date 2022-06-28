const backdrop = document.getElementById("backdrop");
const vystupBtn = document.getElementById("vystupBtn");
const prevodBtn = document.getElementById("prevodBtn");
const captionsBtn = document.getElementById("captionsBtn");
let current_charakteristika = "vystup";
let VAcaptionsActive = false;
const ugs_value = document.getElementById("ugs_value");
const uds_value = document.getElementById("uds_value");
const ugsValues = ["1V","0.5V","0V","-0.5V","-1V","-1.5V","-2V","-2.5V"];
const udsValues = ["1","1","2","3"];
const vystup_controls = [];
vystup_controls.push(document.getElementById("VC1"));
vystup_controls.push(document.getElementById("VC2"));
vystup_controls.push(document.getElementById("VC3"));

if(!localStorage.getItem("current_charakteristika"))
{
    localStorage.setItem("current_charakteristika", "" + current_charakteristika);
}
else
{
    current_charakteristika = localStorage.getItem("current_charakteristika");
}

if(!localStorage.getItem("VAcaptionsActive"))
{
    localStorage.setItem("VAcaptionsActive", "" + VAcaptionsActive);
}
else
{
    VAcaptionsActive = localStorage.getItem("VAcaptionsActive").toLowerCase() === "true";
    if (VAcaptionsActive) {activateButton(captionsBtn);}
}

if(!localStorage.getItem("menu_tooltip_VA"))
{
    localStorage.setItem("menu_tooltip_VA", "seen");

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

drawVAtop();
current_charakteristika === "vystup" ? switchToVystup():switchToPrevod();

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

function switchToVystup()
{
    vystup_controls.forEach(e => e.style.display = "list-item");

    deactivateButton(prevodBtn);
    activateButton(vystupBtn);

    current_charakteristika = "vystup";
    localStorage.setItem("current_charakteristika", "" + current_charakteristika);
    drawVystup();
}

function switchToPrevod()
{
    vystup_controls.forEach(e => e.style.display = "none");

    activateButton(prevodBtn);
    deactivateButton(vystupBtn);

    current_charakteristika = "prevod";
    localStorage.setItem("current_charakteristika", "" + current_charakteristika);
    drawPrevod();
}

function toggleCaptions()
{
    if (getButtonActive(captionsBtn))
    {
        deactivateButton(captionsBtn);
        hideCaptions();
        VAcaptionsActive = false;
    }
    else
    {
        activateButton(captionsBtn);
        current_charakteristika === "vystup" ? showCaptionsVystup():showCaptionsPrevod();
        VAcaptionsActive = true;
    }
    localStorage.setItem("VAcaptionsActive", "" + VAcaptionsActive);
}

function ugs_up()
{
    if (gx === 0)
    {
        gx = 1;
        gy = 1;
    }
    else
    {
        if (gy !== 7)
        {
            gy++;
        }
    }
    colorOrder.fill(0);
    colorOrder[gy] = 1;

    ugs_value.innerHTML = ugsValues[gy];
    drawVystup();
}

function ugs_down()
{
    if (gy !== 0)
    {
        gy--;
    }
    if (gy === 0)
    {
        gx = 0;
    }
    colorOrder.fill(0);
    colorOrder[gy] = 1;

    ugs_value.innerHTML = ugsValues[gy];
    uds_value.innerHTML = udsValues[gx];
    drawVystup();
}

function uds_up()
{
    if ((gx >= 1) && (gx !== 3) && (gy > 0))
    {
        gx++;
    }
    uds_value.innerHTML = udsValues[gx];
    drawVystup();
}

function uds_down()
{
    if (gx > 1)
    {
        gx--;
    }
    uds_value.innerHTML = udsValues[gx];
    drawVystup();
}

function showModal () {backdrop.style.display = "block";}
function hideModal () {backdrop.style.display = "none";}