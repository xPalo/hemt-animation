const VA_top_element = document.getElementById("VA_top");
const VA_bottom_element = document.getElementById("VA_bottom");
const myRed = "#D0312D";
const myGreen = "#83B44B";
const myDefault = "#24252A";
const VAcaptions = [];
let gx = 0, gy = 0;
let colorOrder = [1, 0, 0, 0, 0, 0, 0, 0];

const width = 600;
const height = 400;

const width3 = 50;
const height3 = 50;

const width4 = 800;
const height4 = 500;

const myFont2 = {
    family: "Roboto",
    size: 30,
    fill: "#24252A",
    weight: "bold",
}

const myFont3 = {
    family: "Roboto",
    size: 20,
    fill: "#24252A",
    weight: "bold",
}

const zdroj = drawSource(SVG()
    .addTo("#zdroj_napatia")
    .size(sourceW, "100%")
    .viewbox(0, 0, sourceW, sourceH));
const drawPinch = SVG()
    .addTo("#pinch_off")
    .size(width3, height3)
    .viewbox(0, 0, width3, height3)
const canvasPinch = drawPinch.group().flip('y', height3 / 2)
canvasPinch.circle(50).fill(myRed);

// VA TOP
let drawTop, canvasTop;
function drawVAtop()
{
    VA_top_element.innerHTML = "";

    drawTop = SVG()
        .addTo("#VA_top")
        .size(width, "100%")
        .viewbox(0, 0, width, height)
    canvasTop = drawTop.group().flip('y', height / 2)

    //canvasTop.path("M 0,0 L 600,0 L 600,400 L0,400 Z").fill('none').stroke({width:5, color: '#24252A'});

    canvasTop.rect(100, 100).move(20,285).fill("none").stroke({width:5, color: "#24252A"});
    canvasTop.rect(50, 20).move(22,365).fill("blue").back();
    canvasTop.rect(50, 20).move(69,365).fill("red").back();
    canvasTop.line(35,320, 105, 320).stroke({width:5, color: "#24252A"});
    canvasTop.line(35,315, 35, 325).stroke({width:5, color: "#24252A"});
    canvasTop.line(105,315, 105, 325).stroke({width:5, color: "#24252A"});
    canvasTop.line(70,320, 105, 355).stroke({width:5, color: "#24252A"});
    canvasTop.text("0").move(65,335).font(myFont).flip('y');

    canvasTop.text("U").move(55,296).font({
        family: "Roboto",
        size: 23,
        fill: "#24252A",
        weight: "bold",
        style: "italic"
    }).flip("y");
    canvasTop.text("GS").move(69,286).font({
        family: "Roboto",
        size: 16,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");

    canvasTop.circle(10).center(100, 295).fill("#24252A");
    canvasTop.circle(10).center(45, 295).fill("#24252A");

    canvasTop.rect(100, 100).move(480,285).fill("none").stroke({width:5, color: "#24252A"});
    canvasTop.rect(50, 20).move(482,365).fill("blue").back();
    canvasTop.rect(50, 20).move(529,365).fill("red").back();
    canvasTop.line(495,320, 565, 320).stroke({width:5, color: "#24252A"});
    canvasTop.line(495,315, 495, 325).stroke({width:5, color: "#24252A"});
    canvasTop.line(565,315, 565, 325).stroke({width:5, color: "#24252A"});
    canvasTop.line(530,320, 565, 355).stroke({width:5, color: "#24252A"});
    canvasTop.text("0").move(525,335).font(myFont).flip('y');

    canvasTop.text("U").move(515,296).font({
        family: "Roboto",
        size: 23,
        fill: "#24252A",
        weight: "bold",
        style: "italic"
    }).flip("y");
    canvasTop.text("DS").move(529,286).font({
        family: "Roboto",
        size: 16,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");

    canvasTop.circle(10).center(560, 295).fill("#24252A");
    canvasTop.circle(10).center(505, 295).fill("#24252A");

    canvasTop.polyline([[45,295], [45,80], [560,80], [560, 295]]).fill("none").stroke({width:5, color: "#24252A"});
    canvasTop.line(200,110, 200, 200).stroke({width:10, color: "#24252A"});
    canvasTop.line(200,130, 242.5, 130).stroke({width:5, color: "#24252A"});
    canvasTop.line(200,180, 242.5, 180).stroke({width:5, color: "#24252A"});

    canvasTop.line(240,180, 240, 232.5).stroke({width:5, color: "#24252A"});
    canvasTop.line(240,230, 290, 230).stroke({width:5, color: "#24252A"});

    canvasTop.line(240,130, 240, 50).stroke({width:5, color: "#24252A"});
    canvasTop.line(225,50, 255, 50).stroke({width:5, color: "#24252A"});

    canvasTop.rect(120, 50).move(290,207.5).fill("none").stroke({width:5, color: "#24252A"});
    canvasTop.line(410,232.5, 505, 232.5).stroke({width:5, color: "#24252A"});
    canvasTop.line(505,230, 505, 295).stroke({width:5, color: "#24252A"});

    canvasTop.circle(15).center(240,80).fill("#24252A");
    canvasTop.line(100,295, 100, 155).stroke({width:5, color: "#24252A"});
    canvasTop.line(97.5,155, 200, 155).stroke({width:5, color: "#24252A"});

    canvasTop.line(195,155, 185, 165).stroke({width:5, color: "#24252A"});
    canvasTop.line(195,155, 185, 145).stroke({width:5, color: "#24252A"});

    canvasTop.text("GND").move(215,25).font(myFont).flip("y");
    canvasTop.text("G").move(140,170).font(myFont2).flip("y");
    canvasTop.text("D").move(250,200).font(myFont2).flip("y");
    canvasTop.text("S").move(250,100).font(myFont2).flip("y");
    canvasTop.text("R").move(335,227).font({
        family: "Roboto",
        size: 30,
        fill: "#24252A",
        weight: "bold",
        style: "italic"
    }).flip("y");
    canvasTop.text("D").move(353,215).font(myFont3).flip("y");
}

// VA TOP
let drawBottom, canvasBottom;
function drawVystup()
{
    let colors = [];
    for (let i = 0; i < colorOrder.length; i++)
    {
        colorOrder[i] === 1 ? colors[i] = myGreen : colors[i] = myDefault;
    }

    VA_bottom_element.innerHTML = "";

    drawBottom = SVG()
        .addTo("#VA_bottom")
        .size(width4, "100%")
        .viewbox(0, 0, width4, height4)
    canvasBottom = drawBottom.group().flip('y', height4 / 2)
    //canvasBottom.path("M 0,0 L 800,0 L 800,500 L0,500 Z").fill('none').stroke({width:5, color: '#24252A'});
    canvasBottom.path("M 100,50 L 100,435 L 400,435  C 350,250 300,75 100,50").fill(myRed).opacity(0.5);

    canvasBottom.line(100,20, 100, 455).stroke({width:5, color: "#24252A"});
    canvasBottom.line(70,50, 640, 50).stroke({width:5, color: "#24252A", linecap: "pointy"});
    canvasBottom.polyline([[90,440], [100,455], [110,440]]).fill("none").stroke({width:5, color: "#24252A"});
    canvasBottom.polyline([[625,60], [640,50], [625,40]]).fill("none").stroke({width:5, color: "#24252A"});

    canvasBottom.text("1V").move(655,45).font({
        family: "Roboto",
        size: 20,
        fill: colors[0],
        weight: "bold",
    }).flip("y");
    canvasBottom.text("0.5V").move(655,97).font({
        family: "Roboto",
        size: 20,
        fill: colors[1],
        weight: "bold",
    }).flip("y");
    canvasBottom.text("0V").move(655,149).font({
        family: "Roboto",
        size: 20,
        fill: colors[2],
        weight: "bold",
    }).flip("y");
    canvasBottom.text("-0.5V").move(655,201).font({
        family: "Roboto",
        size: 20,
        fill: colors[3],
        weight: "bold",
    }).flip("y");
    canvasBottom.text("-1V").move(655,253).font({
        family: "Roboto",
        size: 20,
        fill: colors[4],
        weight: "bold",
    }).flip("y");
    canvasBottom.text("-1.5V").move(655,305).font({
        family: "Roboto",
        size: 20,
        fill: colors[5],
        weight: "bold",
    }).flip("y");
    canvasBottom.text("-2V").move(655,357).font({
        family: "Roboto",
        size: 20,
        fill: colors[6],
        weight: "bold",
    }).flip("y");
    canvasBottom.text("-2.5V").move(655,409).font({
        family: "Roboto",
        size: 20,
        fill: colors[7],
        weight: "bold",
    }).flip("y");

    canvasBottom.path("M 100,50 C 140,125 140,105 635,105").fill('none').stroke({width:4, color: '#24252A', linecap: "round"});
    canvasBottom.path("M 100,50 C 175,170 140,157 635,157").fill('none').stroke({width:4, color: '#24252A', linecap: "round"});
    canvasBottom.path("M 100,50 C 215,220 180,210 635,209").fill('none').stroke({width:4, color: '#24252A', linecap: "round"});
    canvasBottom.path("M 100,50 C 270,277 180,270 635,261").fill('none').stroke({width:4, color: '#24252A', linecap: "round"});
    canvasBottom.path("M 100,50 C 305,330 195,320 635,313").fill('none').stroke({width:4, color: '#24252A', linecap: "round"});
    canvasBottom.path("M 100,50 C 350,395 205,374 635,365").fill('none').stroke({width:4, color: '#24252A', linecap: "round"});
    canvasBottom.path("M 100,50 C 380,440 220,428 635,417").fill('none').stroke({width:4, color: '#24252A', linecap: "round"});

    canvasBottom.circle(15).fill("#D0312D").center(239,107);
    canvasBottom.circle(15).fill("#D0312D").center(287,156);
    canvasBottom.circle(15).fill("#D0312D").center(319,206);
    canvasBottom.circle(15).fill("#D0312D").center(344,262);
    canvasBottom.circle(15).fill("#D0312D").center(364,313);
    canvasBottom.circle(15).fill("#D0312D").center(380,367);
    canvasBottom.circle(15).fill("#D0312D").center(395,417);

    const greenCoordinates = [[[100,50],[100,50],[100,50],[100,50],[100,50],[100,50],[100,50]],
                [[100,50],[160,102],[192,145],[235,193],[268,248],[305,302],[330,358],[350,408]],
                [[100,50],[239,107],[287,156],[319,206],[344,262],[364,313],[380,367],[395,417]],
                [[100,50],[465,105],[480,158],[490,209],[500,264],[505,315],[510,368],[515,420]]];

    canvasBottom.circle(15).fill("#83B44B").center(greenCoordinates[gx][gy][0], greenCoordinates[gx][gy][1]);

    canvasBottom.text("Výstupná VA charakteristika").move(215,460).font({
        family: "Roboto",
        size: 28,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");
    canvasBottom.text("I").move(13,375).font({
        family: "Roboto",
        size: 25,
        fill: "#24252A",
        weight: "bold",
        style: "italic"
    }).flip("y");
    canvasBottom.text("D").move(20,365).font({
        family: "Roboto",
        size: 18,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");
    canvasBottom.text("[mA]").move(40,373).font({
        family: "Roboto",
        size: 22,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");

    canvasBottom.text("U").move(520,15).font({
        family: "Roboto",
        size: 25,
        fill: "#24252A",
        weight: "bold",
        style: "italic"
    }).flip("y");
    canvasBottom.text("DS").move(535,5).font({
        family: "Roboto",
        size: 18,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");
    canvasBottom.text("[V]").move(565,15).font({
        family: "Roboto",
        size: 22,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");

    canvasBottom.text("U").move(655,455).font({
        family: "Roboto",
        size: 25,
        fill: "#24252A",
        weight: "bold",
        style: "italic"
    }).flip("y");
    canvasBottom.text("GS").move(670,445).font({
        family: "Roboto",
        size: 18,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");

    if (VAcaptionsActive) {showCaptionsVystup();}
}

function drawPrevod()
{
    VA_bottom_element.innerHTML = "";

    drawBottom = SVG()
        .addTo("#VA_bottom")
        .size(width4, "100%")
        .viewbox(0, 0, width4, height4)
    canvasBottom = drawBottom.group().flip('y', height4 / 2)
    //canvasBottom.path("M 0,0 L 800,0 L 800,500 L0,500 Z").fill('none').stroke({width:5, color: '#24252A'});

    canvasBottom.line(100,40, 100, 455).stroke({width:5, color: "#24252A"});
    canvasBottom.line(70,70, 740, 70).stroke({width:5, color: "#24252A", linecap: "pointy"});
    canvasBottom.polyline([[90,440], [100,455], [110,440]]).fill("none").stroke({width:5, color: "#24252A"});
    canvasBottom.polyline([[725,80], [740,70], [725,60]]).fill("none").stroke({width:5, color: "#24252A"});

    canvasBottom.text("1V").move(720,115).font(myFont3).flip("y");
    canvasBottom.text("2V").move(720,170).font(myFont3).flip("y");
    canvasBottom.text("3V").move(720,225).font(myFont3).flip("y");
    canvasBottom.text("4V").move(720,280).font(myFont3).flip("y");
    canvasBottom.text("5V").move(720,335).font(myFont3).flip("y");
    canvasBottom.text("6V").move(720,390).font(myFont3).flip("y");

    canvasBottom.path("M 100,70 C 230,70 400,122 710,122").fill('none').stroke({width:4, color: '#24252A', linecap: "round"});
    canvasBottom.path("M 100,70 C 300,70 450,177 710,177").fill('none').stroke({width:4, color: '#24252A', linecap: "round"});
    canvasBottom.path("M 100,70 C 360,70 500,232 710,232").fill('none').stroke({width:4, color: '#24252A', linecap: "round"});
    canvasBottom.path("M 100,70 C 380,70 600,260 710,287").fill('none').stroke({width:4, color: '#24252A', linecap: "round"});
    canvasBottom.path("M 100,70 C 430,70 665,320 710,342").fill('none').stroke({width:4, color: '#24252A', linecap: "round"});
    canvasBottom.path("M 100,70 C 480,70 710,397 710,397").fill('none').stroke({width:4, color: '#24252A', linecap: "round"});

    canvasBottom.text("Prevodová VA charakteristika").move(215,440).font({
        family: "Roboto",
        size: 28,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");

    canvasBottom.text("I").move(13,375).font({
        family: "Roboto",
        size: 25,
        fill: "#24252A",
        weight: "bold",
        style: "italic"
    }).flip("y");
    canvasBottom.text("D").move(20,365).font({
        family: "Roboto",
        size: 18,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");
    canvasBottom.text("[mA]").move(40,373).font({
        family: "Roboto",
        size: 22,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");

    canvasBottom.text("U").move(620,35).font({
        family: "Roboto",
        size: 25,
        fill: "#24252A",
        weight: "bold",
        style: "italic"
    }).flip("y");
    canvasBottom.text("GS").move(635,25).font({
        family: "Roboto",
        size: 18,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");
    canvasBottom.text("[V]").move(665,35).font({
        family: "Roboto",
        size: 22,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");

    canvasBottom.text("U").move(710,440).font({
        family: "Roboto",
        size: 25,
        fill: "#24252A",
        weight: "bold",
        style: "italic"
    }).flip("y");
    canvasBottom.text("DS").move(725,430).font({
        family: "Roboto",
        size: 18,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");

    if (VAcaptionsActive) {showCaptionsPrevod();}
}

function showCaptionsVystup()
{
    VAcaptions.push(
        canvasBottom.text("Lineárna\noblasť").move(123,260).font({
            family: "Roboto",
            size: 22,
            fill: myRed,
            weight: "bold",
        }).flip("y"),
        canvasBottom.text("Saturačná oblasť").move(410,280).font({
            family: "Roboto",
            size: 22,
            fill: myRed,
            weight: "bold",
        }).flip("y"),
        canvasBottom.text("Oblasť\nlavínového\nprierazu").move(712,232).font({
            family: "Roboto",
            size: 18,
            fill: myRed,
            weight: "bold",
        }).flip("y"),
        canvasBottom.text("I").move(123,365).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
            style: "italic"
        }).flip("y"),
        canvasBottom.text("D").move(130,355).font({
            family: "Roboto",
            size: 18,
            fill: "#24252A",
            weight: "bold",
        }).flip("y"),
        canvasBottom.text("= f(").move(145,365).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
        }).flip("y"),
        canvasBottom.text("U").move(185,365).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
            style: "italic"
        }).flip("y"),
        canvasBottom.text("DS").move(200,355).font({
            family: "Roboto",
            size: 18,
            fill: "#24252A",
            weight: "bold",
        }).flip("y"),
        canvasBottom.text(")").move(225,365).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
        }).flip("y"),

        canvasBottom.text("U").move(123,400).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
            style: "italic"
        }).flip("y"),
        canvasBottom.text("GS").move(138,390).font({
            family: "Roboto",
            size: 18,
            fill: "#24252A",
            weight: "bold",
        }).flip("y"),
        canvasBottom.text("= konštanta").move(165,400).font({
            family: "Roboto",
            size: 24,
            fill: "#24252A",
            weight: "bold",
        }).flip("y"),
    )
}

function showCaptionsPrevod()
{
    VAcaptions.push(
        canvasBottom.text("I").move(213,325).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
            style: "italic"
        }).flip("y"),
        canvasBottom.text("D").move(220,315).font({
            family: "Roboto",
            size: 18,
            fill: "#24252A",
            weight: "bold",
        }).flip("y"),
        canvasBottom.text("= f(").move(235,325).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
        }).flip("y"),
        canvasBottom.text("U").move(275,325).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
            style: "italic"
        }).flip("y"),
        canvasBottom.text("GS").move(290,315).font({
            family: "Roboto",
            size: 18,
            fill: "#24252A",
            weight: "bold",
        }).flip("y"),
        canvasBottom.text(")").move(315,325).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
        }).flip("y"),

        canvasBottom.text("U").move(213,270).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
            style: "italic"
        }).flip("y"),
        canvasBottom.text("DS").move(228,260).font({
            family: "Roboto",
            size: 18,
            fill: "#24252A",
            weight: "bold",
        }).flip("y"),
        canvasBottom.text("= konštanta").move(255,270).font({
            family: "Roboto",
            size: 24,
            fill: "#24252A",
            weight: "bold",
        }).flip("y"),
    )
}

function hideCaptions() {VAcaptions.forEach(c => c.clear());}