const rows = document.getElementsByTagName("tr");
const containerTabulka = document.getElementById("obvod_tabulka");
const norBtn = document.getElementById("norBtn");
const notBtn = document.getElementById("notBtn");
const captionsBtn = document.getElementById("captionsBtn");
const nadpisBtn = document.getElementById("nadpis");
let currentHradlo = "nor";
let values = [];
const backdrop = document.getElementById("backdrop");

if(!localStorage.getItem("menu_tooltip_IO"))
{
    localStorage.setItem("menu_tooltip_IO", "seen");

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
    }, 4500);

    setTimeout(function() {
        tooltip.hide();
    }, 8000);
}

if(!localStorage.getItem("obvod_hradlo"))
{
    localStorage.setItem("obvod_hradlo", "" + currentHradlo);
}
else
{
    currentHradlo = String(localStorage.getItem("obvod_hradlo"));
}

switch (currentHradlo)
{
    case "nor":
        drawNorTable();
        drawNorFunction();
        break;
    case "not":
        drawNotTable();
        drawNotFunction();
        break;
}

function reDraw()
{
    switch (currentHradlo)
    {
        case "nor":
            drawNorFunction();
            break;
        case "not":
            drawNotFunction();
            break;
    }
}

function switchCaptions()
{
    if (getButtonActive(captionsBtn))
    {
        deactivateButton(captionsBtn);
        captionsActive = false;
        hideCaptions();
    }
    else
    {
        activateButton(captionsBtn);
        captionsActive = true;
        reDraw();
    }
}

function resetTable()
{
    Array.from(rows).forEach(row => row.setAttribute("class", ""));
    values = [];
    active = false;
    reDraw();
}

function rowPressed(e)
{
    Array.from(rows).forEach(row => row.setAttribute("class", ""));
    rows[e.rowIndex].setAttribute("class", "table-warning");
    const str = String(e.innerText || e.textContent);

    values = [];
    for (let i = 0; i < str.length; i++)
    {
        if ((str[i] === "0") || (str[i] === "1"))
        {
            values.push(str[i]);
        }
    }
    reDraw();
}

function drawNorTable()
{
    deactivateButton(notBtn);
    activateButton(norBtn);
    nadpisBtn.innerHTML = "Hradlo NOR";

    currentHradlo = "nor";
    localStorage.setItem("obvod_hradlo", "" + currentHradlo);

    containerTabulka.innerHTML = `<table id="norTable" class="table table-hover table-bordered text-center caption-top">
                            <caption>Pravdivostná tabuľka NOR</caption>
                            <caption>A + B + C = <span style="text-decoration: overline">Y</span></caption>
                            <thead  class="table-info">
                                <tr>
                                    <th scope="col" class="h3 p-1"><b>A</b></th>
                                    <th scope="col" class="h3 p-1"><b>B</b></th>
                                    <th scope="col" class="h3 p-1"><b>C</b></th>
                                    <th scope="col" class="h3 p-1"><b>Y</b></th>
                                </tr>
                            </thead>
                            <tbody id="tooltip_element">
                                <tr onclick="rowPressed(this)">
                                    <td class="py-2 h4"><p class="m-auto">0</p></td>
                                    <td class="py-2 h4"><p class="m-auto">0</p></td>
                                    <td class="py-2 h4"><p class="m-auto">0</p></td>
                                    <td class="py-2 h4"><p class="m-auto"><b>1</b></p></td>
                                </tr>
                                <tr onclick="rowPressed(this)">
                                    <td class="py-2 h4"><p class="m-auto">0</p></td>
                                    <td class="py-2 h4"><p class="m-auto">0</p></td>
                                    <td class="py-2 h4"><p class="m-auto">1</p></td>
                                    <td class="py-2 h4"><p class="m-auto"><b>0</b></p></td>
                                </tr>
                                <tr onclick="rowPressed(this)">
                                    <td class="py-2 h4"><p class="m-auto">0</p></td>
                                    <td class="py-2 h4"><p class="m-auto">1</p></td>
                                    <td class="py-2 h4"><p class="m-auto">0</p></td>
                                    <td class="py-2 h4"><p class="m-auto"><b>0</b></p></td>
                                </tr>
                                <tr onclick="rowPressed(this)">
                                    <td class="py-2 h4"><p class="m-auto">0</p></td>
                                    <td class="py-2 h4"><p class="m-auto">1</p></td>
                                    <td class="py-2 h4"><p class="m-auto">1</p></td>
                                    <td class="py-2 h4"><p class="m-auto"><b>0</b></p></td>
                                </tr>
                                <tr onclick="rowPressed(this)">
                                    <td class="py-2 h4"><p class="m-auto">1</p></td>
                                    <td class="py-2 h4"><p class="m-auto">0</p></td>
                                    <td class="py-2 h4"><p class="m-auto">0</p></td>
                                    <td class="py-2 h4"><p class="m-auto"><b>0</b></p></td>
                                </tr>
                                <tr onclick="rowPressed(this)">
                                    <td class="py-2 h4"><p class="m-auto">1</p></td>
                                    <td class="py-2 h4"><p class="m-auto">0</p></td>
                                    <td class="py-2 h4"><p class="m-auto">1</p></td>
                                    <td class="py-2 h4"><p class="m-auto"><b>0</b></p></td>
                                </tr>
                                <tr onclick="rowPressed(this)">
                                    <td class="py-2 h4"><p class="m-auto">1</p></td>
                                    <td class="py-2 h4"><p class="m-auto">1</p></td>
                                    <td class="py-2 h4"><p class="m-auto">0</p></td>
                                    <td class="py-2 h4"><p class="m-auto"><b>0</b></p></td>
                                </tr>
                                <tr onclick="rowPressed(this)">
                                    <td class="py-2 h4"><p class="m-auto">1</p></td>
                                    <td class="py-2 h4"><p class="m-auto">1</p></td>
                                    <td class="py-2 h4"><p class="m-auto">1</p></td>
                                    <td class="py-2 h4"><p class="m-auto"><b>0</b></p></td>
                                </tr>
                            </tbody>
                        </table>`;

    const tooltip_element = document.getElementById("tooltip_element");
    const tooltip = new bootstrap.Tooltip(tooltip_element, {
        boundary: document.body,
        placement: "bottom",
        animation: true,
        title: "Zvoľ možnosť",
        trigger: "manual",
        offset: [0,5],
    })

    setTimeout(function() {
        tooltip.show();
    }, 1500);

    setTimeout(function() {
        tooltip.hide();
    }, 5000);

    values = [];
    active = false;
    reDraw();
}

function drawNotTable()
{
    activateButton(notBtn);
    deactivateButton(norBtn);
    nadpisBtn.innerHTML = "Hradlo NOT";

    currentHradlo = "not";
    localStorage.setItem("obvod_hradlo", "" + currentHradlo);

    containerTabulka.innerHTML = `<table id="notTable" class="table table-hover table-bordered text-center caption-top">
                            <caption>Pravdivostná tabuľka NOT</caption>
                            <caption>A = <span style="text-decoration: overline">Y</span></caption>
                            <thead  class="table-info">
                                <tr>
                                    <th scope="col" class="h3 p-1"><b>A</b></th>
                                    <th scope="col" class="h3 p-1"><b>Y</b></th>
                                </tr>
                            </thead>
                            <tbody id="tooltip_element">
                                <tr onclick="rowPressed(this)">
                                    <td class="py-2 h4"><p class="m-auto">0</p></td>
                                    <td class="py-2 h4"><p class="m-auto"><b>1</b></p></td>
                                </tr>
                                <tr id="tooltip_element" onclick="rowPressed(this)">
                                    <td class="py-2 h4"><p class="m-auto">1</p></td>
                                    <td class="py-2 h4"><p class="m-auto"><b>0</b></p></td>
                                </tr>
                            </tbody>
                        </table>`;

    const tooltip_element = document.getElementById("tooltip_element");
    const tooltip = new bootstrap.Tooltip(tooltip_element, {
        boundary: document.body,
        placement: "bottom",
        animation: true,
        title: "Zvoľ možnosť",
        trigger: "manual",
        offset: [0,5],
    })

    setTimeout(function() {
        tooltip.show();
    }, 1500);

    setTimeout(function() {
        tooltip.hide();
    }, 5000);

    values = [];
    active = false;
    reDraw();
}

function showModal () {backdrop.style.display = "block";}
function hideModal () {backdrop.style.display = "none";}