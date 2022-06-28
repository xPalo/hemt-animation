const sourceW = 110;
const sourceH = 110;

const elektronW = 50;
const elektronH = 50;

const myFont = {
    family: "Roboto",
    size: 25,
    fill: "#24252A",
    weight: "bold",
}

function drawSource(e)
{
    const source = e.group().flip('y', sourceH / 2);
    source.rect(100, 100).move(0,5).fill("none").stroke({width:5, color: "#24252A"}).x(5);
    source.rect(50, 20).move(7,85).fill("blue").back();
    source.rect(50, 20).move(54,85).fill("red").back();
    source.line(20,40, 90, 40).stroke({width:5, color: "#24252A"});
    source.line(20,35, 20, 45).stroke({width:5, color: "#24252A"});
    source.line(90,35, 90, 45).stroke({width:5, color: "#24252A"});
    source.line(55,40, 90, 75).stroke({width:5, color: "#24252A"});
    source.text("0").move(50,52).font(myFont).flip('y', sourceH / 2);
    source.text("U").move(50,97).font(myFont).flip('y', sourceH / 2);
    source.circle(10).center(85, 15).fill("#24252A");
    source.circle(10).center(30, 15).fill("#24252A");
    return source;
}

function drawElektron (e)
{
    const elektron = e.group().flip('y', elektronH / 2)
    elektron.circle(50).fill("#333399");
    elektron.circle(34).fill("white").center(25,25);
    elektron.line(12,25, 38,25).stroke({ color: "black", width: 9});
    return elektron;
}

function getButtonActive(button)
{
    return button.getAttribute("class").includes("active");
}

function activateButton(button)
{
    button.setAttribute("class", "nav-link text-white active");
}

function deactivateButton(button)
{
    button.setAttribute("class", "nav-link text-white");
}