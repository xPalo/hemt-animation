const backgroundDiv = document.getElementById("struktura_hemt_container");
const width = 1000;
const height = 600;

const detailWidth = 600;
const detailHeight = 600;

const zdroj = drawSource(SVG()
    .addTo("#zdroj_napatia")
    .size(sourceW, "100%")
    .viewbox(0, 0, sourceW, sourceH));
const elektron = drawElektron(SVG()
    .addTo("#elektron")
    .size(elektronW, "100%")
    .viewbox(0, 0, elektronW, elektronH));

const myFont2 = {
    family: "Roboto",
    size: 25,
    fill: "white",
    weight: "bold",
}

let sources = [];
let captionsArray = [];

let drawDETAIL;
let canvasBase;
let canvasU1;
let canvasU2;
let canvasU3;
let activeU;

let drawHEMT;
let canvasHemt;
function drawStruktura()
{
    backgroundDiv.innerHTML = "";

    drawHEMT = SVG()
        .addTo(backgroundDiv)
        .size(width, "100%")
        .viewbox(0, 0, width, height);
    canvasHemt = drawHEMT.group().flip('y', height / 2);
    canvasHemt.opacity(0);

    canvasHemt.rect(640, 60).move(0,0).fill("#c67cff");
    canvasHemt.rect(640, 60).move(0,60).fill("#ffcb8d");
    canvasHemt.rect(640, 30).move(0,120).fill("#fff536");
    canvasHemt.rect(640, 160).move(0,150).fill("#c1eaff");

    canvasHemt.polygon("0,0 180,0 150,30 0,30").move(0,310).fill("#44cbff");
    canvasHemt.polygon("0,0 180,0 180,30 30,30").move(460,310).fill("#44cbff");

    canvasHemt.rect(110, 40).move(0,340).fill("#24252A");
    canvasHemt.rect(160, 40).move(240,390).fill("#24252A");
    canvasHemt.rect(40, 120).move(300,310).fill("#24252A");
    canvasHemt.rect(110, 40).move(530,340).fill("#24252A");

    canvasHemt.path("M 750,340 L950,340 L750,310 L750,150 " +
        "L850,120 L775,120 C800,120 920,105 920,85 " +
        "L920,65 C920,60 900,60 900,60 L900,0")
        .fill('none')
        .stroke({width:5, color: '#24252A'});

    canvasHemt.line(0, 340, 1000, 340).stroke({width:0.3, color: '#24252A', dasharray: '5,5' });
    canvasHemt.line(0, 310, 1000, 310).stroke({width:0.3, color: '#24252A', dasharray: '5,5' });
    canvasHemt.line(0, 150, 1000, 150).stroke({width:0.3, color: '#24252A', dasharray: '5,5' });
    canvasHemt.line(0, 120, 1000, 120).stroke({width:0.3, color: '#24252A', dasharray: '5,5' });
    canvasHemt.line(0, 60, 1000, 60).stroke({width:0.3, color: '#24252A', dasharray: '5,5' });

    canvasHemt.line(750, 360, 750, 50).stroke({width:1, color: '#24252A', dasharray: '12,8' });

    canvasHemt.text("E").move(915,15).font({
        family: "Roboto",
        size: 30,
        fill: "#24252A",
        weight: "bold",
        style: "italic",
    }).flip("y");

    canvasHemt.text("C").move(930,0).font({
        family: "Roboto",
        size: 20,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");

    canvasHemt.text("AlGaAs/GaAs").move(170,550).font({
            family: "Roboto",
            size: 50,
            fill: "#24252A",
            weight: "bold",
    }).flip("y");

    canvasHemt.animate(1000).opacity(1);
}

let sourceHemt1;
let sourceHemt2;
function drawSources()
{
    sources = [];

    sourceHemt1 = drawHEMT.group().flip('y', height / 2);
    sourceHemt1.opacity(0);
    sourceHemt1.rect(100, 100).move(0,500).fill("none").stroke({width:5, color: "#24252A"}).x(5);
    sourceHemt1.rect(50, 20).move(7,578).fill("blue");
    sourceHemt1.rect(50, 20).move(54,578).fill("red").back();

    sourceHemt1.line(20,540, 90, 540).stroke({width:5, color: "#24252A"});
    sourceHemt1.line(20,535, 20, 545).stroke({width:5, color: "#24252A"});
    sourceHemt1.line(90,535, 90, 545).stroke({width:5, color: "#24252A"});
    sourceHemt1.line(55,540, 90, 575).stroke({width:5, color: "#24252A"});
    sourceHemt1.text("0").move(50,555).font(myFont).flip("y");
    sourceHemt1.text("U").move(50,510).font(myFont).flip("y");
    sourceHemt1.circle(10).center(85, 510).fill("#24252A");
    sourceHemt1.polyline([[85,510], [85,480], [320,480], [320, 430]]).fill("none").stroke({width:5, color: "#24252A"});
    sourceHemt1.circle(10).center(30, 510).fill("#24252A");
    sourceHemt1.line(30, 510, 30, 480).stroke({width:5, color: "#24252A"});
    sourceHemt1.line(20, 480, 40, 480).stroke({width:5, color: "#24252A"});

    sourceHemt2 = drawHEMT.group().flip('y', height / 2);
    sourceHemt2.opacity(0);
    sourceHemt2.rect(100, 100).move(0,500).fill("none").stroke({width:5, color: "#24252A"}).x(5);
    sourceHemt2.rect(50, 20).move(7,578).fill("blue");
    sourceHemt2.rect(50, 20).move(54,578).fill("red").back();

    sourceHemt2.line(20,540, 90, 540).stroke({width:5, color: "#24252A"});
    sourceHemt2.line(20,535, 20, 545).stroke({width:5, color: "#24252A"});
    sourceHemt2.line(90,535, 90, 545).stroke({width:5, color: "#24252A"});
    sourceHemt2.line(55,540, 90, 575).stroke({width:5, color: "#24252A"});
    sourceHemt2.text("0").move(50,555).font(myFont).flip("y");
    sourceHemt2.text("U").move(50,510).font(myFont).flip("y");
    sourceHemt2.circle(10).center(85, 510).fill("#24252A");
    sourceHemt2.circle(10).center(30, 510).fill("#24252A");
    sourceHemt2.move(538, 500);
    sourceHemt2.line(618,510, 618, 350).fill("none").stroke({width:5, color: "#24252A"});
    sourceHemt2.polyline([[563,510], [563,450], [55,450], [55, 380]]).fill("none").stroke({width:5, color: "#24252A"});

    sources.push(sourceHemt1, sourceHemt2);
    sourceHemt1.animate(500).opacity(1);
    sourceHemt2.animate(500).opacity(1);
}

let electronArray = [];
let runnerArray = [];
let electronCount;
function launchAnimation()
{
    drawSources();
    electronCount = 15;
    runnerArray = [];
    electronArray = [];

    for (let i = 0; i < electronCount; i++)
    {
        const electron = drawHEMT.group().flip('y', height / 2);
        electron.clear();
        electron.circle(30).fill("#333399");
        electron.circle(20).fill("#fff").move(5,5);
        electron.line(8,15, 22,15).stroke({ color: "#000", width: 5});
        electron.move(25,340);
        electronArray.push(electron);
    }

    const pathHemt1 = canvasHemt.path("M 25,340 L 25,105 L 585,105 L 585,340").fill('none');
    const lengthHemtPath1 = pathHemt1.length();
    for (let j = 0; j < electronArray.length; j++)
    {
        runnerArray[j] = electronArray[j].animate({
            duration: 3000,
            delay: (j * 200),
            when: "relative",
        }).during(function(pos)
        {
            const eased_pos = SVG.easing['-'](pos);
            const m = pathHemt1.matrixify();
            const p = new SVG.Point(pathHemt1.pointAt(eased_pos * lengthHemtPath1)).transform(m);
            electronArray[j].move(p.x, p.y);
        }).loop();
    }
}

function drawCaptions()
{
    captionsArray = [];

    captionsArray.push(
        canvasHemt.text("QV")
            .move(733,112)
            .font(myFont)
            .flip("y"));

    captionsArray.push(
        canvasHemt.text("SiGaAs")
            .move(540,20)
            .font(myFont)
            .flip("y"));

    captionsArray.push(canvasHemt.text("pGaAs")
        .move(547,80)
        .font(myFont)
        .flip("y"));

    captionsArray.push(canvasHemt.text("AlGaAs")
        .move(538,126)
        .font(myFont)
        .flip("y"));

    captionsArray.push(canvasHemt.text("n+ AlGaAs")
        .move(505,220)
        .font(myFont)
        .flip("y"));

    captionsArray.push(canvasHemt.text("n+ GaAs")
        .move(527,316)
        .font(myFont)
        .flip("y"));

    captionsArray.push(canvasHemt.text("Drain")
        .move(555,350)
        .font(myFont2)
        .flip("y"));

    captionsArray.push(canvasHemt.text("Gate")
        .move(295,400)
        .font(myFont2)
        .flip("y"));

    captionsArray.push(canvasHemt.text("Source")
        .move(15,350)
        .font(myFont2)
        .flip("y"));

    captionsArray.push(canvasHemt.text("Energetický\npásmový diagram").move(750,390).font({
        family: "Roboto",
        size: 30,
        fill: "#24252A",
        weight: "bold",
    }).flip("y"));
    /*
        captionsHemtArray.push(canvasHemt1.text("Spodná hranica\nvodivostného pásma").move(680,6).font({
            family: "Roboto",
            size: 20,
            fill: "#24252A",
            weight: "bold",
        }).flip("y"));

     */
}

function playAnimation()
{
    runnerArray.forEach(c => c.timeline().play());
}
function pauseAnimation()
{
    runnerArray.forEach(c => c.timeline().pause());
}

function hideCaptions() {captionsArray.forEach(c => c.clear());}
function stopAnimation()
{
    sources.forEach(c => c.animate(200).opacity(0));
    sources.forEach(c => c.hide());
    runnerArray.forEach(c => c.unschedule());
    electronArray.forEach(c => c.hide());

    runnerArray = [];
    electronArray = [];
    sources = [];
}

function drawDetail()
{
    backgroundDiv.innerHTML = "";

    drawDETAIL = SVG()
        .addTo("#struktura_hemt_container")
        .size(detailWidth, "100%")
        .viewbox(0, 0, detailWidth, detailHeight);

    canvasBase = drawDETAIL.group().flip('y', detailHeight / 2);
    canvasBase.opacity(0);

    canvasBase.path("M 300,125 L 300,300 L 368,300 C340,300 300,170 300,125").fill("red");
    canvasBase.line(0, 300, 600, 300).stroke({width:2.5, color: '#24252A', dasharray: '10,4' });
    canvasBase.line(300, 580, 300, 20).stroke({width:4, color: '#24252A'});
    canvasBase.path("M 50,350 C 240,350 280,400 300,580 ").fill("none").stroke({width:4, color: '#24252A'});
    canvasBase.path("M 50,350 C 240,350 280,400 300,580 ").fill("none").stroke({width:4, color: '#24252A'}).flip('y', detailHeight / 2).flip('x', detailHeight / 2).y(255);
    canvasBase.animate(1000).opacity(0.2);

    // DRAW U1
        canvasU1 = drawDETAIL.group().flip('y', detailHeight / 2);
        canvasU1.opacity(0);
        activeU = canvasU1;

        canvasU1.path("M 300,125 L 300,300 L 368,300 C340,300 300,170 300,125").fill("red");
        canvasU1.line(0, 300, 600, 300).stroke({width:2.5, color: '#24252A', dasharray: '10,4' });
        canvasU1.line(300, 580, 300, 20).stroke({width:4, color: '#24252A'});
        canvasU1.path("M 50,350 C 240,350 280,400 300,580 ").fill("none").stroke({width:4, color: '#24252A'});
        canvasU1.path("M 50,350 C 240,350 280,400 300,580 ").fill("none").stroke({width:4, color: '#24252A'}).flip('y', detailHeight / 2).flip('x', detailHeight / 2).y(255);

        canvasU1.line(50, 578, 300, 578).stroke({width:2.5, color: '#24252A', dasharray: '10,4' });
        canvasU1.line(70, 370, 70, 420).stroke({width:3, color: '#24252A'});
        canvasU1.polyline([[60, 380], [70, 370], [80, 380]]).fill("none").stroke({width:3, color: '#24252A'});

        canvasU1.line(70, 560, 70, 510).stroke({width:3, color: '#24252A'});
        canvasU1.polyline([[60, 550], [70, 560], [80, 550]]).fill("none").stroke({width:3, color: '#24252A'});

        canvasU1.text("\u03C6").center(60,472).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
            style: "italic",
        }).flip("y");

        canvasU1.text("B0").center(77,453).font({
            family: "Roboto",
            size: 18,
            fill: "#24252A",
            weight: "bold",
        }).flip("y");

        canvasU1.text("E").center(17,353).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
            style: "italic",
        }).flip("y");

        canvasU1.text("C").center(30,340).font({
            family: "Roboto",
            size: 18,
            fill: "#24252A",
            weight: "bold",
        }).flip("y");

        canvasU1.text("E").center(17,247).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
            style: "italic",
        }).flip("y");

        canvasU1.text("F").center(30,234).font({
            family: "Roboto",
            size: 18,
            fill: "#24252A",
            weight: "bold",
        }).flip("y");

        canvasU1.text("E").center(567,353).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
            style: "italic",
        }).flip("y");

        canvasU1.text("C").center(580,340).font({
            family: "Roboto",
            size: 18,
            fill: "#24252A",
            weight: "bold",
        }).flip("y");

        canvasU1.text("E").center(567,247).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
            style: "italic",
        }).flip("y");

        canvasU1.text("F").center(580,234).font({
            family: "Roboto",
            size: 18,
            fill: "#24252A",
            weight: "bold",
        }).flip("y");

        canvasU1.text("E").center(150,150).font({
            family: "Roboto",
            size: 30,
            fill: "#24252A",
            weight: "bold",
            style: "italic",
        }).flip("y");

        canvasU1.text("g1").center(170,137).font({
            family: "Roboto",
            size: 20,
            fill: "#24252A",
            weight: "bold",
        }).flip("y");

        canvasU1.text("E").center(440,150).font({
            family: "Roboto",
            size: 30,
            fill: "#24252A",
            weight: "bold",
            style: "italic",
        }).flip("y");

        canvasU1.text("g2").center(460,137).font({
            family: "Roboto",
            size: 20,
            fill: "#24252A",
            weight: "bold",
        }).flip("y");

    // DRAW U2
        canvasU2 = drawDETAIL.group().flip('y', detailHeight / 2);
        canvasU2.opacity(0);
        canvasU2.path("M 300,105 L 300,300 L 368,300 C340,290 300,200 300,105").fill("red").y(45).x(302);
        canvasU2.line(0, 330, 300, 330).stroke({width:2.5, color: '#24252A', dasharray: '10,4' });
        canvasU2.line(300, 240, 600, 240).stroke({width:2.5, color: '#24252A', dasharray: '10,4' });
        canvasU2.line(300, 590, 300, 20).stroke({width:4, color: '#24252A'});
        canvasU2.path("M 50,375 C 220,375 280,420 300,590 ").fill("none").stroke({width:4, color: '#24252A'});
        canvasU2.path("M 50,350 C 240,350 280,400 300,580 ").fill("none").stroke({width:4, color: '#24252A'}).flip('y', detailHeight / 2).flip('x', detailHeight / 2).y(320);

        canvasU2.line(50, 588, 300, 588).stroke({width:2.5, color: '#24252A', dasharray: '10,4' });
        canvasU2.line(70, 390, 70, 440).stroke({width:3, color: '#24252A'});
        canvasU2.polyline([[60, 400], [70, 390], [80, 400]]).fill("none").stroke({width:3, color: '#24252A'});

        canvasU2.line(70, 575, 70, 525).stroke({width:3, color: '#24252A'});
        canvasU2.polyline([[60, 565], [70, 575], [80, 565]]).fill("none").stroke({width:3, color: '#24252A'});

        canvasU2.text("\u03C6").center(60,490).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
            style: "italic",
        }).flip("y");

        canvasU2.text("B0").center(77,471).font({
            family: "Roboto",
            size: 18,
            fill: "#24252A",
            weight: "bold",
        }).flip("y");

        canvasU2.text("E").center(17,380).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
            style: "italic",
        }).flip("y");

        canvasU2.text("C").center(30,367).font({
            family: "Roboto",
            size: 18,
            fill: "#24252A",
            weight: "bold",
        }).flip("y");

        canvasU2.text("E").center(17,274).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
            style: "italic",
        }).flip("y");

        canvasU2.text("F").center(30,261).font({
            family: "Roboto",
            size: 18,
            fill: "#24252A",
            weight: "bold",
        }).flip("y");

        canvasU2.text("E").center(567,283).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
            style: "italic",
        }).flip("y");

        canvasU2.text("C").center(580,270).font({
            family: "Roboto",
            size: 18,
            fill: "#24252A",
            weight: "bold",
        }).flip("y");

        canvasU2.text("E").center(567,187).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
            style: "italic",
        }).flip("y");

        canvasU2.text("F").center(580,174).font({
            family: "Roboto",
            size: 18,
            fill: "#24252A",
            weight: "bold",
        }).flip("y");

        canvasU2.text("E").center(150,150).font({
            family: "Roboto",
            size: 30,
            fill: "#24252A",
            weight: "bold",
            style: "italic",
        }).flip("y");

        canvasU2.text("g1").center(170,137).font({
            family: "Roboto",
            size: 20,
            fill: "#24252A",
            weight: "bold",
        }).flip("y");

        canvasU2.text("E").center(440,150).font({
            family: "Roboto",
            size: 30,
            fill: "#24252A",
            weight: "bold",
            style: "italic",
        }).flip("y");

        canvasU2.text("g2").center(460,137).font({
            family: "Roboto",
            size: 20,
            fill: "#24252A",
            weight: "bold",
        }).flip("y");

    // DRAW U3
        canvasU3 = drawDETAIL.group().flip('y', detailHeight / 2);
        canvasU3.opacity(0)
        canvasU3.path("M 300,105 L 300,300 L 368,300 C340,290 300,200 300,105").fill("red").y(135).x(302);
        canvasU3.line(0, 280, 300, 280).stroke({width:2.5, color: '#24252A', dasharray: '10,4' });
        canvasU3.line(300, 330, 600, 330).stroke({width:2.5, color: '#24252A', dasharray: '10,4' });
        canvasU3.line(300, 480, 300, 120).stroke({width:4, color: '#24252A'});
        canvasU3.path("M 50,330 C 250,330 280,350 300,480 ").fill("none").stroke({width:4, color: '#24252A'});
        canvasU3.path("M 50,350 C 240,350 280,400 300,580 ").fill("none").stroke({width:4, color: '#24252A'}).flip('y', detailHeight / 2).flip('x', detailHeight / 2).y(230);

        canvasU3.line(50, 478, 300, 478).stroke({width:2.5, color: '#24252A', dasharray: '10,4' });
        canvasU3.line(70, 340, 70, 370).stroke({width:3, color: '#24252A'});
        canvasU3.polyline([[60, 350], [70, 340], [80, 350]]).fill("none").stroke({width:3, color: '#24252A'});

        canvasU3.line(70, 440, 70, 470).stroke({width:3, color: '#24252A'});
        canvasU3.polyline([[60, 460], [70, 470], [80, 460]]).fill("none").stroke({width:3, color: '#24252A'});

        canvasU3.text("\u03C6").center(60,415).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
            style: "italic",
        }).flip("y");

        canvasU3.text("B0").center(77,396).font({
            family: "Roboto",
            size: 18,
            fill: "#24252A",
            weight: "bold",
        }).flip("y");

        canvasU3.text("E").center(17,330).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
            style: "italic",
        }).flip("y");

        canvasU3.text("C").center(30,317).font({
            family: "Roboto",
            size: 18,
            fill: "#24252A",
            weight: "bold",
        }).flip("y");

        canvasU3.text("E").center(17,224).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
            style: "italic",
        }).flip("y");

        canvasU3.text("F").center(30,211).font({
            family: "Roboto",
            size: 18,
            fill: "#24252A",
            weight: "bold",
        }).flip("y");

        canvasU3.text("E").center(567,373).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
            style: "italic",
        }).flip("y");

        canvasU3.text("C").center(580,360).font({
            family: "Roboto",
            size: 18,
            fill: "#24252A",
            weight: "bold",
        }).flip("y");

        canvasU3.text("E").center(567,277).font({
            family: "Roboto",
            size: 25,
            fill: "#24252A",
            weight: "bold",
            style: "italic",
        }).flip("y");

        canvasU3.text("F").center(580,264).font({
            family: "Roboto",
            size: 18,
            fill: "#24252A",
            weight: "bold",
        }).flip("y");

        canvasU3.text("E").center(150,150).font({
            family: "Roboto",
            size: 30,
            fill: "#24252A",
            weight: "bold",
            style: "italic",
        }).flip("y");

        canvasU3.text("g1").center(170,137).font({
            family: "Roboto",
            size: 20,
            fill: "#24252A",
            weight: "bold",
        }).flip("y");

        canvasU3.text("E").center(440,150).font({
            family: "Roboto",
            size: 30,
            fill: "#24252A",
            weight: "bold",
            style: "italic",
        }).flip("y");

        canvasU3.text("g2").center(460,137).font({
            family: "Roboto",
            size: 20,
            fill: "#24252A",
            weight: "bold",
        }).flip("y");

    activeU = canvasU2;
    changeU(1);
}

function changeU(U)
{
    if (U === 1)
    {
        if (activeU !== canvasU1)
        {
            nadpis.innerHTML = `U<sub>GS</sub> = 0`;

            activeU.animate(500, 0, "now").opacity(0);
            canvasU1.animate(1000, 0, "after").opacity(1);
            activeU = canvasU1;
        }
    }
    if (U === 2)
    {
        if (activeU !== canvasU2)
        {
            nadpis.innerHTML = `U<sub>GS</sub> > 0`;

            activeU.animate(500, 0, "now").opacity(0);
            canvasU2.animate(1000, 0, "after").opacity(1);
            activeU = canvasU2;
        }
    }
    if (U === 3)
    {
        if (activeU !== canvasU3)
        {
            nadpis.innerHTML = `U<sub>GS</sub> < 0`;

            activeU.animate(500, 0, "now").opacity(0);
            canvasU3.animate(1000, 0, "after").opacity(1);
            activeU = canvasU3;
        }
    }
}