const width = 1000;
const height = 600;
let drawHemtArray = [];
let captionsHemtArray = [];
let runnerHemtArray = [];
let sourcesHemtArray = [];
const backgroundDiv = document.getElementById("vyvoj_struktur_container");

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

// HEMT 1
let drawHemt1, canvasHemt1;
function drawHemt1Function()
{
    backgroundDiv.innerHTML = "";

    drawHemt1 = SVG()
        .addTo("#vyvoj_struktur_container")
        .size(width, "100%")
        .viewbox(0, 0, width, height)
    canvasHemt1 = drawHemt1.group().flip('y', height / 2)

    canvasHemt1.rect(640, 60).move(0,0).fill("#c67cff");
    canvasHemt1.rect(640, 60).move(0,60).fill("#ffcb8d");
    canvasHemt1.rect(640, 30).move(0,120).fill("#fff536");
    canvasHemt1.rect(640, 160).move(0,150).fill("#c1eaff");

    canvasHemt1.polygon("0,0 180,0 150,30 0,30").move(0,310).fill("#44cbff");
    canvasHemt1.polygon("0,0 180,0 180,30 30,30").move(460,310).fill("#44cbff");

    canvasHemt1.rect(110, 40).move(0,340).fill("#24252A");
    canvasHemt1.rect(160, 40).move(240,390).fill("#24252A");
    canvasHemt1.rect(40, 120).move(300,310).fill("#24252A");
    canvasHemt1.rect(110, 40).move(530,340).fill("#24252A");

    canvasHemt1.path("M 750,340 L950,340 L750,310 " +
        "L750,150 L850,120 L775,120 C800,120 920,105" +
        " 920,85 L920,65 C920,60 900,60 900,60 L900,0")
        .fill('none')
        .stroke({width:5, color: '#24252A'});

    canvasHemt1.line(0, 340, 1000, 340).stroke({width:0.3, color: '#24252A', dasharray: '5,5' });
    canvasHemt1.line(0, 310, 1000, 310).stroke({width:0.3, color: '#24252A', dasharray: '5,5' });
    canvasHemt1.line(0, 150, 1000, 150).stroke({width:0.3, color: '#24252A', dasharray: '5,5' });
    canvasHemt1.line(0, 120, 1000, 120).stroke({width:0.3, color: '#24252A', dasharray: '5,5' });
    canvasHemt1.line(0, 60, 1000, 60).stroke({width:0.3, color: '#24252A', dasharray: '5,5' });

    canvasHemt1.line(750, 360, 750, 50).stroke({width:1, color: '#24252A', dasharray: '12,8' });

    canvasHemt1.text("E")
        .move(915,15)
        .font({
        family: "Roboto",
        size: 30,
        fill: "#24252A",
        weight: "bold",
        style: "italic",
    }).flip("y");

    canvasHemt1.text("C")
        .move(930,0)
        .font({
        family: "Roboto",
        size: 20,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");

    canvasHemt1.text("AlGaAs/GaAs")
        .move(170,550)
        .font({
            family: "Roboto",
            size: 50,
            fill: "#24252A",
            weight: "bold",
        }).flip("y");
}

let sourceHemt1_1, sourceHemt1_2;
function showSourceHemt1()
{
    sourcesHemtArray = [];

    sourceHemt1_1 = drawHemt1.group().flip('y', height / 2);
    sourceHemt1_1.rect(100, 100).move(0,500).fill("none").stroke({width:5, color: "#24252A"}).x(5);
    sourceHemt1_1.rect(50, 20).move(7,578).fill("blue");
    sourceHemt1_1.rect(50, 20).move(54,578).fill("red").back();

    sourceHemt1_1.line(20,540, 90, 540).stroke({width:5, color: "#24252A"});
    sourceHemt1_1.line(20,535, 20, 545).stroke({width:5, color: "#24252A"});
    sourceHemt1_1.line(90,535, 90, 545).stroke({width:5, color: "#24252A"});
    sourceHemt1_1.line(55,540, 90, 575).stroke({width:5, color: "#24252A"});
    sourceHemt1_1.text("0").move(50,555).font(myFont).flip("y");
    sourceHemt1_1.text("U").move(50,510).font(myFont).flip("y");
    sourceHemt1_1.circle(10).center(85, 510).fill("#24252A");
    sourceHemt1_1.polyline([[85,510], [85,480], [320,480], [320, 430]]).fill("none").stroke({width:5, color: "#24252A"});
    sourceHemt1_1.circle(10).center(30, 510).fill("#24252A");
    sourceHemt1_1.line(30, 510, 30, 480).stroke({width:5, color: "#24252A"});
    sourceHemt1_1.line(20, 480, 40, 480).stroke({width:5, color: "#24252A"});

    sourceHemt1_2 = drawHemt1.group().flip('y', height / 2);
    sourceHemt1_2.rect(100, 100).move(0,500).fill("none").stroke({width:5, color: "#24252A"}).x(5);
    sourceHemt1_2.rect(50, 20).move(7,578).fill("blue");
    sourceHemt1_2.rect(50, 20).move(54,578).fill("red").back();

    sourceHemt1_2.line(20,540, 90, 540).stroke({width:5, color: "#24252A"});
    sourceHemt1_2.line(20,535, 20, 545).stroke({width:5, color: "#24252A"});
    sourceHemt1_2.line(90,535, 90, 545).stroke({width:5, color: "#24252A"});
    sourceHemt1_2.line(55,540, 90, 575).stroke({width:5, color: "#24252A"});
    sourceHemt1_2.text("0").move(50,555).font(myFont).flip("y");
    sourceHemt1_2.text("U").move(50,510).font(myFont).flip("y");
    sourceHemt1_2.circle(10).center(85, 510).fill("#24252A");
    sourceHemt1_2.circle(10).center(30, 510).fill("#24252A");
    sourceHemt1_2.move(538, 500);
    sourceHemt1_2.line(618,510, 618, 350).fill("none").stroke({width:5, color: "#24252A"});
    sourceHemt1_2.polyline([[563,510], [563,450], [55,450], [55, 380]]).fill("none").stroke({width:5, color: "#24252A"});

    sourcesHemtArray.push(sourceHemt1_1, sourceHemt1_2);
}

let electronArrayHemt1 = [];
let electronCountHemt1;
function launchHemt1Animation()
{
    showSourceHemt1();
    electronCountHemt1 = 15;

    let pathHemt1 = canvasHemt1.path("M 25,340 L 25,105 L 585,105 L 585,340");
    pathHemt1.fill('none')//.stroke({width:1, color: '#ccc', dasharray: '10,10' });
    let lengthHemtPath1 = pathHemt1.length();

    runnerHemtArray = [];
    electronArrayHemt1 = [];

    for (let i = 0; i < electronCountHemt1; i++)
    {
        let electron = drawHemt1.group().flip('y', height / 2);
        electron.clear();
        electron.circle(30).fill("#333399");
        electron.circle(20).fill("white").move(5,5);
        electron.line(8,15, 22,15).stroke({ color: "black", width: 5});
        electron.move(25,340);
        electronArrayHemt1.push(electron);
    }

    for (let j = 0; j < electronCountHemt1; j++)
    {
        runnerHemtArray[j] = electronArrayHemt1[j].animate({
            duration: 3000,
            delay: (j * 200),
            when: "relative",
        }).during(function(pos)
        {
            // '<>' : ease in and out
            // '>' : ease out
            // '<' : ease in
            // '-' : linear
            let eased_pos = SVG.easing['-'](pos);
            let m = pathHemt1.matrixify()
            let p = new SVG.Point(pathHemt1.pointAt(eased_pos * lengthHemtPath1)).transform(m)
            electronArrayHemt1[j].move(p.x, p.y)
        }).loop();
    }
}

function hemt1Captions()
{
    captionsHemtArray = [];

    captionsHemtArray.push(
        canvasHemt1.text("QV")
            .move(733,112)
            .font(myFont)
            .flip("y"));

    captionsHemtArray.push(
        canvasHemt1.text("SiGaAs")
            .move(540,20)
            .font(myFont)
            .flip("y"));

    captionsHemtArray.push(canvasHemt1.text("pGaAs")
        .move(547,80)
        .font(myFont)
        .flip("y"));

    captionsHemtArray.push(canvasHemt1.text("AlGaAs")
        .move(538,126)
        .font(myFont)
        .flip("y"));

    captionsHemtArray.push(canvasHemt1.text("n+ AlGaAs")
        .move(505,220)
        .font(myFont)
        .flip("y"));

    captionsHemtArray.push(canvasHemt1.text("n+ GaAs")
        .move(527,316)
        .font(myFont)
        .flip("y"));

    captionsHemtArray.push(canvasHemt1.text("Drain")
        .move(555,350)
        .font(myFont2)
        .flip("y"));

    captionsHemtArray.push(canvasHemt1.text("Gate")
        .move(295,400)
        .font(myFont2)
        .flip("y"));

    captionsHemtArray.push(canvasHemt1.text("Source")
        .move(15,350)
        .font(myFont2)
        .flip("y"));

    captionsHemtArray.push(canvasHemt1.text("Energetický\npásmový diagram").move(750,390).font({
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

// DRAW HEMT 2
let drawHemt2, canvasHemt2;
function drawHemt2Function()
{
    backgroundDiv.innerHTML = "";

    drawHemt2 = SVG()
        .addTo("#vyvoj_struktur_container")
        .size(width, "100%")
        .viewbox(0, 0, width, height)
    canvasHemt2 = drawHemt2.group().flip('y', height / 2)

    canvasHemt2.rect(640, 50).move(0,0).fill("#c67cff");
    canvasHemt2.rect(640, 50).move(0,50).fill("#fff536");
    canvasHemt2.rect(640, 130).move(0,100).fill("#c1eaff");
    canvasHemt2.rect(640, 30).move(0,230).fill("#fff536");
    canvasHemt2.rect(640, 50).move(0,260).fill("#fff536");

    canvasHemt2.polygon("0,0 180,0 150,30 0,30").move(0,310).fill("#44cbff");
    canvasHemt2.polygon("0,0 180,0 180,30 30,30").move(460,310).fill("#44cbff");

    canvasHemt2.rect(110, 40).move(0,340).fill("#24252A");
    canvasHemt2.rect(160, 40).move(240,390).fill("#24252A");
    canvasHemt2.rect(40, 120).move(300,310).fill("#24252A");
    canvasHemt2.rect(110, 40).move(530,340).fill("#24252A");

    canvasHemt2.path("M 750,310 L995,310 L910,260 L950,230 L680,230 C720,230 780,160 780,100 L995,100 L995,50")
        .fill('none')
        .stroke({width:5, color: '#24252A'});

    canvasHemt2.path("M750,250 C750,220 830,230 830,200 C830,170 750,180 750,150")
        .fill('none')
        .stroke({width:5, color: 'red'});

    canvasHemt2.line(0, 310, 1000, 310).stroke({width:0.3, color: '#24252A', dasharray: '5,5' });
    canvasHemt2.line(0, 260, 1000, 260).stroke({width:0.3, color: '#24252A', dasharray: '5,5' });
    canvasHemt2.line(0, 230, 1000, 230).stroke({width:0.3, color: '#24252A', dasharray: '5,5' });
    canvasHemt2.line(0, 100, 1000, 100).stroke({width:0.3, color: '#24252A', dasharray: '5,5' });
    canvasHemt2.line(0, 50, 1000, 50).stroke({width:0.3, color: '#24252A', dasharray: '5,5' });

    canvasHemt2.line(750, 360, 750, 0).stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasHemt2.line(860, 360, 860, 0).stroke({width:1, color: '#24252A', dasharray: '12,8' });

    canvasHemt2.text("E").move(950,70).font({
        family: "Roboto",
        size: 30,
        fill: "#24252A",
        weight: "bold",
        style: "italic",
    }).flip("y");

    canvasHemt2.text("C").move(965,55).font({
        family: "Roboto",
        size: 20,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");

    canvasHemt2.text("InGaAs/InAlAs")
        .move(155,550)
        .font({
            family: "Roboto",
            size: 50,
            fill: "#24252A",
            weight: "bold",
        })
        .flip("y");
}

function showSourceHemt2()
{
    sourcesHemtArray = [];

    sourceHemt1_1 = drawHemt2.group().flip('y', height / 2);
    sourceHemt1_1.rect(100, 100).move(0,500).fill("none").stroke({width:5, color: "#24252A"}).x(5);
    sourceHemt1_1.rect(50, 20).move(7,578).fill("blue");
    sourceHemt1_1.rect(50, 20).move(54,578).fill("red").back();

    sourceHemt1_1.line(20,540, 90, 540).stroke({width:5, color: "#24252A"});
    sourceHemt1_1.line(20,535, 20, 545).stroke({width:5, color: "#24252A"});
    sourceHemt1_1.line(90,535, 90, 545).stroke({width:5, color: "#24252A"});
    sourceHemt1_1.line(55,540, 90, 575).stroke({width:5, color: "#24252A"});
    sourceHemt1_1.text("0").move(50,555).font(myFont).flip("y");
    sourceHemt1_1.text("U").move(50,510).font(myFont).flip("y");
    sourceHemt1_1.circle(10).center(85, 510).fill("#24252A");
    sourceHemt1_1.polyline([[85,510], [85,480], [320,480], [320, 430]]).fill("none").stroke({width:5, color: "#24252A"});
    sourceHemt1_1.circle(10).center(30, 510).fill("#24252A");
    sourceHemt1_1.line(30, 510, 30, 480).stroke({width:5, color: "#24252A"});
    sourceHemt1_1.line(20, 480, 40, 480).stroke({width:5, color: "#24252A"});

    sourceHemt1_2 = drawHemt2.group().flip('y', height / 2);
    sourceHemt1_2.rect(100, 100).move(0,500).fill("none").stroke({width:5, color: "#24252A"}).x(5);
    sourceHemt1_2.rect(50, 20).move(7,578).fill("blue");
    sourceHemt1_2.rect(50, 20).move(54,578).fill("red").back();

    sourceHemt1_2.line(20,540, 90, 540).stroke({width:5, color: "#24252A"});
    sourceHemt1_2.line(20,535, 20, 545).stroke({width:5, color: "#24252A"});
    sourceHemt1_2.line(90,535, 90, 545).stroke({width:5, color: "#24252A"});
    sourceHemt1_2.line(55,540, 90, 575).stroke({width:5, color: "#24252A"});
    sourceHemt1_2.text("0").move(50,555).font(myFont).flip("y");
    sourceHemt1_2.text("U").move(50,510).font(myFont).flip("y");
    sourceHemt1_2.circle(10).center(85, 510).fill("#24252A");
    sourceHemt1_2.circle(10).center(30, 510).fill("#24252A");
    sourceHemt1_2.move(538, 500);
    sourceHemt1_2.line(618,510, 618, 350).fill("none").stroke({width:5, color: "#24252A"});
    sourceHemt1_2.polyline([[563,510], [563,450], [55,450], [55, 380]]).fill("none").stroke({width:5, color: "#24252A"});

    sourcesHemtArray.push(sourceHemt1_1, sourceHemt1_2);
}

function launchHemt2Animation()
{
    showSourceHemt2();
    electronCountHemt1 = 10;

    let pathHemt1 = canvasHemt2.path("M55,340 L55,230 L585,230 L 585,340");
    pathHemt1.fill('none')//.stroke({width:1, color: 'red', dasharray: '10,10' });
    let lengthHemtPath1 = pathHemt1.length();

    runnerHemtArray = [];
    electronArrayHemt1 = [];

    for (let i = 0; i < electronCountHemt1; i++)
    {
        let electron = drawHemt2.group().flip('y', height / 2);
        electron.clear();
        electron.circle(30).fill("#333399");
        electron.circle(20).fill("white").move(5,5);
        electron.line(8,15, 22,15).stroke({ color: "black", width: 5});
        electron.move(40,340);
        electronArrayHemt1.push(electron);
    }

    for (let j = 0; j < electronCountHemt1; j++)
    {
        runnerHemtArray[j] = electronArrayHemt1[j].animate({
            duration: 2500,
            delay: (j * 250),
            when: "relative",
        }).during(function(pos)
        {
            // '<>' : ease in and out
            // '>' : ease out
            // '<' : ease in
            // '-' : linear
            let eased_pos = SVG.easing['-'](pos);
            let m = pathHemt1.matrixify()
            let p = new SVG.Point(pathHemt1.pointAt(eased_pos * lengthHemtPath1)).transform(m)
            electronArrayHemt1[j].center(p.x, p.y)
        }).loop();
    }
}

function hemt2Captions()
{
    captionsHemtArray = [];

    captionsHemtArray.push(
        canvasHemt2.text("QV")
            .move(643,223)
            .font(myFont)
            .flip("y"));

    captionsHemtArray.push(
        canvasHemt2.text("Koncentrácia voľných\nnosičov náboja v 2DEG")
            .move(840,182)
            .font({
                family: "Roboto",
                size: 15,
                fill: "red",
                weight: "bold",
            })
            .flip("y"));

    captionsHemtArray.push(
        canvasHemt2.text("InP")
            .move(590,15)
            .font(myFont)
            .flip("y"));

    captionsHemtArray.push(canvasHemt2.text("InAlAs")
        .move(552,68)
        .font(myFont)
        .flip("y"));

    captionsHemtArray.push(canvasHemt2.text("InGaAs")
        .move(543,155)
        .font(myFont)
        .flip("y"));

    captionsHemtArray.push(canvasHemt2.text("InAlAs")
        .move(550,237)
        .font(myFont)
        .flip("y"));

    captionsHemtArray.push(canvasHemt2.text("InAlAs")
        .move(550,276)
        .font(myFont)
        .flip("y"));

    captionsHemtArray.push(canvasHemt2.text("n- InAlAs")
        .move(522,317)
        .font(myFont)
        .flip("y"));

    captionsHemtArray.push(canvasHemt2.text("Drain")
        .move(555,350)
        .font(myFont2)
        .flip("y"));

    captionsHemtArray.push(canvasHemt2.text("Gate")
        .move(295,400)
        .font(myFont2)
        .flip("y"));

    captionsHemtArray.push(canvasHemt2.text("Source")
        .move(15,350)
        .font(myFont2)
        .flip("y"));

    captionsHemtArray.push(canvasHemt2.text("Energetický\npásmový diagram").move(750,390).font({
        family: "Roboto",
        size: 30,
        fill: "#24252A",
        weight: "bold",
    }).flip("y"));
/*
    captionsHemtArray.push(canvasHemt2.text("Spodná hranica\nvodivostného pásma").move(760,28).font({
        family: "Roboto",
        size: 20,
        fill: "#24252A",
        weight: "bold",
    }).flip("y"));

 */
}

// DRAW HEMT 3
let drawHemt3, canvasHemt3;
function drawHemt3Function()
{
    backgroundDiv.innerHTML = "";

    drawHemt3 = SVG()
        .addTo("#vyvoj_struktur_container")
        .size(width, "100%")
        .viewbox(0, 0, width, height)
    canvasHemt3 = drawHemt3.group().flip('y', height / 2)

    canvasHemt3.rect(640, 70).move(0,0).fill("#c67cff");
    canvasHemt3.rect(640, 70).move(0,70).fill("#ffcb8d");
    canvasHemt3.rect(640, 155).move(0,140).fill("#c1eaff");
    canvasHemt3.rect(640, 40).move(0,295).fill("#fff536");

    canvasHemt3.rect(110, 40).move(0,335).fill("#24252A");
    canvasHemt3.rect(160, 40).move(240,390).fill("#24252A");
    canvasHemt3.rect(40, 80).move(300,335).fill("#24252A");
    canvasHemt3.rect(110, 40).move(530,335).fill("#24252A");

    canvasHemt3.path("M800,335 L990,335 L880,295 L700,295 C840,295 840,150 840,30")
        .fill('none')
        .stroke({width:5, color: '#24252A'});

    canvasHemt3.path("M800,310 C800,280 880,295 880,265 C880,235 800,250 800,220")
        .fill('none')
        .stroke({width:5, color: 'red'});

    canvasHemt3.line(0, 335, 1000, 335).stroke({width:0.3, color: '#24252A', dasharray: '5,5' });
    canvasHemt3.line(0, 295, 1000, 295).stroke({width:0.3, color: '#24252A', dasharray: '5,5' });
    canvasHemt3.line(0, 140, 1000, 140).stroke({width:0.3, color: '#24252A', dasharray: '5,5' });
    canvasHemt3.line(0,70, 1000,70).stroke({width:0.3, color: '#24252A', dasharray: '5,5' });

    canvasHemt3.line(800, 360, 800, 50).stroke({width:1, color: '#24252A', dasharray: '12,8' });

    canvasHemt3.text("E").move(850,25).font({
        family: "Roboto",
        size: 30,
        fill: "#24252A",
        weight: "bold",
        style: "italic",
    }).flip("y");

    canvasHemt3.text("C").move(865,10).font({
        family: "Roboto",
        size: 20,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");

    canvasHemt3.text("AlGaN/GaN")
        .move(190,550)
        .font({
            family: "Roboto",
            size: 50,
            fill: "#24252A",
            weight: "bold",
        })
        .flip("y");
}

function showSourceHemt3()
{
    sourcesHemtArray = [];

    sourceHemt1_1 = drawHemt3.group().flip('y', height / 2);
    sourceHemt1_1.rect(100, 100).move(0,500).fill("none").stroke({width:5, color: "#24252A"}).x(5);
    sourceHemt1_1.rect(50, 20).move(7,578).fill("blue");
    sourceHemt1_1.rect(50, 20).move(54,578).fill("red").back();

    sourceHemt1_1.line(20,540, 90, 540).stroke({width:5, color: "#24252A"});
    sourceHemt1_1.line(20,535, 20, 545).stroke({width:5, color: "#24252A"});
    sourceHemt1_1.line(90,535, 90, 545).stroke({width:5, color: "#24252A"});
    sourceHemt1_1.line(55,540, 90, 575).stroke({width:5, color: "#24252A"});
    sourceHemt1_1.text("0").move(50,555).font(myFont).flip("y");
    sourceHemt1_1.text("U").move(50,510).font(myFont).flip("y");
    sourceHemt1_1.circle(10).center(85, 510).fill("#24252A");
    sourceHemt1_1.polyline([[85,510], [85,480], [320,480], [320, 430]]).fill("none").stroke({width:5, color: "#24252A"});
    sourceHemt1_1.circle(10).center(30, 510).fill("#24252A");
    sourceHemt1_1.line(30, 510, 30, 480).stroke({width:5, color: "#24252A"});
    sourceHemt1_1.line(20, 480, 40, 480).stroke({width:5, color: "#24252A"});

    sourceHemt1_2 = drawHemt3.group().flip('y', height / 2);
    sourceHemt1_2.rect(100, 100).move(0,500).fill("none").stroke({width:5, color: "#24252A"}).x(5);
    sourceHemt1_2.rect(50, 20).move(7,578).fill("blue");
    sourceHemt1_2.rect(50, 20).move(54,578).fill("red").back();

    sourceHemt1_2.line(20,540, 90, 540).stroke({width:5, color: "#24252A"});
    sourceHemt1_2.line(20,535, 20, 545).stroke({width:5, color: "#24252A"});
    sourceHemt1_2.line(90,535, 90, 545).stroke({width:5, color: "#24252A"});
    sourceHemt1_2.line(55,540, 90, 575).stroke({width:5, color: "#24252A"});
    sourceHemt1_2.text("0").move(50,555).font(myFont).flip("y");
    sourceHemt1_2.text("U").move(50,510).font(myFont).flip("y");
    sourceHemt1_2.circle(10).center(85, 510).fill("#24252A");
    sourceHemt1_2.circle(10).center(30, 510).fill("#24252A");
    sourceHemt1_2.move(538, 500);
    sourceHemt1_2.line(618,510, 618, 350).fill("none").stroke({width:5, color: "#24252A"});
    sourceHemt1_2.polyline([[563,510], [563,450], [55,450], [55, 360]]).fill("none").stroke({width:5, color: "#24252A"});

    sourcesHemtArray.push(sourceHemt1_1, sourceHemt1_2);
}

function launchHemt3Animation()
{
    showSourceHemt3();
    electronCountHemt1 = 10;

    let pathHemt1 = canvasHemt3.path("M55,340 L55,295 L585,295 L 585,340");
    pathHemt1.fill('none')//.stroke({width:1, color: 'red', dasharray: '10,10' });
    let lengthHemtPath1 = pathHemt1.length();

    runnerHemtArray = [];
    electronArrayHemt1 = [];

    for (let i = 0; i < electronCountHemt1; i++)
    {
        let electron = drawHemt3.group().flip('y', height / 2);
        electron.clear();
        electron.circle(30).fill("#333399");
        electron.circle(20).fill("white").move(5,5);
        electron.line(8,15, 22,15).stroke({ color: "black", width: 5});
        electron.move(40,340);
        electronArrayHemt1.push(electron);
    }

    for (let j = 0; j < electronCountHemt1; j++)
    {
        runnerHemtArray[j] = electronArrayHemt1[j].animate({
            duration: 2500,
            delay: (j * 250),
            when: "relative",
        }).during(function(pos)
        {
            // '<>' : ease in and out
            // '>' : ease out
            // '<' : ease in
            // '-' : linear
            let eased_pos = SVG.easing['-'](pos);
            let m = pathHemt1.matrixify()
            let p = new SVG.Point(pathHemt1.pointAt(eased_pos * lengthHemtPath1)).transform(m)
            electronArrayHemt1[j].center(p.x, p.y)
        }).loop();
    }
}

function hemt3Captions()
{
    captionsHemtArray = [];

    captionsHemtArray.push(
        canvasHemt3.text("QV")
            .move(655,287)
            .font(myFont)
            .flip("y"));

    captionsHemtArray.push(
        canvasHemt3.text("Koncentrácia\nvoľných nosičov\nnáboja v 2DEG")
            .move(887,235)
            .font({
                family: "Roboto",
                size: 15,
                fill: "red",
                weight: "bold",
            })
            .flip("y"));

    captionsHemtArray.push(
        canvasHemt3.text("SiC")
            .move(590,25)
            .font(myFont)
            .flip("y"));

    captionsHemtArray.push(canvasHemt3.text("GaN")
        .move(580,95)
        .font(myFont)
        .flip("y"));

    captionsHemtArray.push(canvasHemt3.text("GaN")
        .move(580,210)
        .font(myFont)
        .flip("y"));

    captionsHemtArray.push(canvasHemt3.text("AlGaN")
        .move(553,307)
        .font(myFont)
        .flip("y"));

    captionsHemtArray.push(canvasHemt3.text("Drain")
        .move(555,345)
        .font(myFont2)
        .flip("y"));

    captionsHemtArray.push(canvasHemt3.text("Gate")
        .move(295,400)
        .font(myFont2)
        .flip("y"));

    captionsHemtArray.push(canvasHemt3.text("Source")
        .move(15,345)
        .font(myFont2)
        .flip("y"));

    captionsHemtArray.push(canvasHemt3.text("Energetický\npásmový diagram").move(750,390).font({
        family: "Roboto",
        size: 30,
        fill: "#24252A",
        weight: "bold",
    }).flip("y"));
/*
    captionsHemtArray.push(canvasHemt3.text("Spodná hranica\nvodivostného pásma").move(650,10).font({
        family: "Roboto",
        size: 20,
        fill: "#24252A",
        weight: "bold",
    }).flip("y"));

 */
}

// DRAW HEMT 4
let drawHemt4, canvasHemt4;
function drawHemt4Function()
{
    backgroundDiv.innerHTML = "";

    drawHemt4 = SVG()
        .addTo("#vyvoj_struktur_container")
        .size(width, "100%")
        .viewbox(0, 0, width, height)
    canvasHemt4 = drawHemt4.group().flip('y', height / 2)

    // canvasHemt4.rect(640, 60).move(0,0).fill("blue");
    // canvasHemt4.rect(640, 60).move(0,60).fill("#ffcb8d");
    // canvasHemt4.rect(640, 30).move(0,120).fill("#fff536");
    // canvasHemt4.rect(640, 160).move(0,150).fill("#c1eaff");
    //
    // canvasHemt4.polygon("0,0 180,0 150,30 0,30").move(0,310).fill("#44cbff");
    // canvasHemt4.polygon("0,0 180,0 180,30 30,30").move(460,310).fill("#44cbff");
    //
    // canvasHemt4.rect(110, 40).move(0,340).fill("#24252A");
    // canvasHemt4.rect(160, 40).move(240,390).fill("#24252A");
    // canvasHemt4.rect(40, 120).move(300,310).fill("#24252A");
    // canvasHemt4.rect(110, 40).move(530,340).fill("#24252A");

    // canvasHemt4.text("InAlGaN/GaN")
    //     .move(170,550)
    //     .font({
    //         family: "Roboto",
    //         size: 50,
    //         fill: "#24252A",
    //         weight: "bold",
    //     }).flip("y");

    canvasHemt4.text("Pripravujeme.")
        .center(width/2 - 100,height/2)
        .font({
            family: "Roboto",
            size: 50,
            fill: "#24252A",
            weight: "bold",
        }).flip("y");
}

function hemt4Captions()
{
    captionsHemtArray = [];

    // captionsHemtArray.push(
    //     canvasHemt4.text("0")
    //         .move(0,0)
    //         .font(myFont)
    //         .flip("y"));
}

drawHemtArray.push(drawHemt1, drawHemt2, drawHemt3, drawHemt4);
function clearCaptions() {captionsHemtArray.forEach(c => c.clear());}
function pauseHemtAnimations() {runnerHemtArray.forEach(r => r.timeline().pause());}
function playHemtAnimations() {runnerHemtArray.forEach(r => r.timeline().play());}

function stopHemtAnimations()
{
    runnerHemtArray.forEach(r => r.unschedule());
    electronArrayHemt1.forEach(r => r.hide());
    sourcesHemtArray.forEach(r => r.hide());

    runnerHemtArray = [];
    electronArrayHemt1 = [];
    sourcesHemtArray = [];
    drawHemtArray = [];
}