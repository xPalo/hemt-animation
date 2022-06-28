const width = 640;
const height = 600;

const zdroj = drawSource(SVG()
    .addTo("#zdroj_napatia")
    .size(sourceW, "100%")
    .viewbox(0, 0, sourceW, sourceH));
const elektron = drawElektron(SVG()
    .addTo("#elektron")
    .size(elektronW, "100%")
    .viewbox(0, 0, elektronW, elektronH));

document.getElementById("col1").style.maxWidth = width;
document.getElementById("col2").style.maxWidth = width;

const myFont2 = {
    family: "Roboto",
    size: 25,
    fill: "white",
    weight: "bold",
}

// DRAW HEMT
const drawHemt = SVG()
    .addTo("#porovnanie_hemt")
    .size(width, "100%")
    .viewbox(0, 0, width, height)

const canvasHemt = drawHemt.group().flip('y', height / 2)

canvasHemt.rect(640, 60).move(0,0).fill("#c67cff");
canvasHemt.rect(640, 60).move(0,60).fill("#ffcb8d");
canvasHemt.rect(640, 30).move(0,120).fill("#fff536");
canvasHemt.rect(640, 160).move(0,150).fill("#c1eaff");

canvasHemt.polygon('0,0 180,0 150,30 0,30').move(0,310).fill("#44cbff");
canvasHemt.polygon('0,0 180,0 180,30 30,30').move(460,310).fill("#44cbff");

canvasHemt.rect(110, 40).move(0,340).fill("#24252A");
canvasHemt.rect(160, 40).move(240,390).fill("#24252A");
canvasHemt.rect(40, 120).move(300,310).fill("#24252A");
canvasHemt.rect(110, 40).move(530,340).fill("#24252A");

canvasHemt.text("HEMT")
    .move(248,550)
    .font({
        family: "Roboto",
        size: 50,
        fill: "#24252A",
        weight: "bold",
    })
    .flip("y");

// DRAW HEMT GRAPH
const drawHemtGraf = SVG()
    .addTo("#hemt_graf")
    .size(width, "100%")
    .viewbox(0, 0, width, height);

const canvasHemtGraf = drawHemtGraf.group().flip('y', height / 2);
canvasHemtGraf.line(0, 300, 640, 300).stroke({width:1, color: '#24252A', dasharray: '10,10' });
canvasHemtGraf.line(50, 600, 50, 0).stroke({width:1, color: '#24252A', dasharray: '10,10' });
canvasHemtGraf.line(250, 640, 250, 0)//.stroke({width:1, color: 'black', dasharray: '10,10' });
canvasHemtGraf.line(250, 600, 250, 0).stroke({width:1, color: '#24252A', dasharray: '10,10' });
canvasHemtGraf.line(300, 600, 300, 0).stroke({width:1, color: '#24252A', dasharray: '10,10' });
canvasHemtGraf.line(500, 600, 500, 0).stroke({width:1, color: '#24252A', dasharray: '10,10' });

canvasHemtGraf.path("M 640,200 L500,200 C495,200 480,230 470,230 L370,230 C350,230 300,200 300,140 " +
    "L300,90 C300,65 275,40 250,40 L100,40 C85,40 50,50 50,200 L50,550 L120,300 L250,300 L300, 400" +
    "L300,350 C300,375 325,530 350,530 L480,530 C490,530 490,510 500,510 L640,510")
    .fill('none')
    .stroke({width:5, color: '#24252A'});

canvasHemtGraf.transform({
    scale: 0.9,
    translateY: -25,
    translateX: -20,
    flip: "y"
})

const canvasHemtGrafPopis = drawHemtGraf.group().flip('y', height / 2);
canvasHemtGrafPopis.text("E").move(590,280).font({
    family: "Roboto",
    size: 30,
    fill: "#24252A",
    weight: "bold",
    style: "italic",
}).flip("y");

canvasHemtGrafPopis.text("F").move(608,265).font({
    family: "Roboto",
    size: 20,
    fill: "#24252A",
    weight: "bold",
}).flip("y");

canvasHemtGrafPopis.text("E").move(593,470).font({
    family: "Roboto",
    size: 30,
    fill: "#24252A",
    weight: "bold",
    style: "italic",
}).flip("y");

canvasHemtGrafPopis.text("C").move(610,455).font({
    family: "Roboto",
    size: 20,
    fill: "#24252A",
    weight: "bold",
}).flip("y");

canvasHemtGrafPopis.text("E").move(593,192).font({
    family: "Roboto",
    size: 30,
    fill: "#24252A",
    weight: "bold",
    style: "italic",
}).flip("y");

canvasHemtGrafPopis.text("V").move(612,178).font({
    family: "Roboto",
    size: 20,
    fill: "#24252A",
    weight: "bold",
}).flip("y");

canvasHemtGrafPopis.text("Kov").move(0,5).font({
    family: "Roboto",
    size: 25,
    fill: "#24252A",
    weight: "bold",
}).flip("y");

canvasHemtGrafPopis.text("n+ AlGaAs").move(80,5).font({
    family: "Roboto",
    size: 25,
    fill: "#24252A",
    weight: "bold",
}).flip("y");

canvasHemtGrafPopis.text("AlGaAs").move(216,5).font({
    family: "Roboto",
    size: 25,
    fill: "#24252A",
    weight: "bold",
}).flip("y");

canvasHemtGrafPopis.text("pGaAs").move(340,5).font({
    family: "Roboto",
    size: 25,
    fill: "#24252A",
    weight: "bold",
}).flip("y");

canvasHemtGrafPopis.text("SiGaAs").move(500,5).font({
    family: "Roboto",
    size: 25,
    fill: "#24252A",
    weight: "bold",
}).flip("y");

canvasHemtGrafPopis.text("Energetický pásmový diagram HEMT").move(70,580).font({
    family: "Roboto",
    size: 30,
    fill: "#24252A",
    weight: "bold",
}).flip("y");

// DRAW MESFET GRAPH
const drawMesfetGraf = SVG()
    .addTo("#mesfet_graf")
    .size(width, "100%")
    .viewbox(0, 0, width, height)

const canvasMesfetGraf = drawMesfetGraf.group().flip('y', height / 2);
canvasMesfetGraf.line(0, 300, 640, 300).stroke({width:1, color: '#24252A', dasharray: '10,10' });
canvasMesfetGraf.line(50, 640, 50, 0)//.stroke({width:1, color: '#24252A', dasharray: '10,10' });
canvasMesfetGraf.line(50, 600, 50, 0).stroke({width:1, color: '#24252A', dasharray: '10,10' });
canvasMesfetGraf.line(100, 600, 100, 0).stroke({width:1, color: '#24252A', dasharray: '10,10' });
canvasMesfetGraf.line(280, 600, 280, 0).stroke({width:1, color: '#24252A', dasharray: '10,10' });

canvasMesfetGraf.path("M640,150 L380,150 C330,150 330,50 280,50 L100,50 C70,50 50,200 50,230 " +
    "L50, 580 C50, 550 75,380 100, 380 L280,380 C330,380 330,480 380,480 L640,480")
    .fill('none')
    .stroke({width:5, color: '#24252A'});

canvasMesfetGraf.transform({
    scale: 0.9,
    translateY: -25,
    translateX: -20,
    flip: "y"
})

const canvasMesfetGrafPopis = drawMesfetGraf.group().flip('y', height / 2);

canvasMesfetGrafPopis.text("E").move(590,280).font({
    family: "Roboto",
    size: 30,
    fill: "#24252A",
    weight: "bold",
    style: "italic",
}).flip("y");

canvasMesfetGrafPopis.text("F").move(608,265).font({
    family: "Roboto",
    size: 20,
    fill: "#24252A",
    weight: "bold",
}).flip("y");

canvasMesfetGrafPopis.text("E").move(593,445).font({
    family: "Roboto",
    size: 30,
    fill: "#24252A",
    weight: "bold",
    style: "italic",
}).flip("y");

canvasMesfetGrafPopis.text("C").move(610,430).font({
    family: "Roboto",
    size: 20,
    fill: "#24252A",
    weight: "bold",
}).flip("y");

canvasMesfetGrafPopis.text("E").move(593,145).font({
    family: "Roboto",
    size: 30,
    fill: "#24252A",
    weight: "bold",
    style: "italic",
}).flip("y");

canvasMesfetGrafPopis.text("V").move(610,130).font({
    family: "Roboto",
    size: 20,
    fill: "#24252A",
    weight: "bold",
}).flip("y");

canvasMesfetGrafPopis.text("Kov").move(0,5).font({
    family: "Roboto",
    size: 25,
    fill: "#24252A",
    weight: "bold",
}).flip("y");

canvasMesfetGrafPopis.text("nGaAs").move(140,5).font({
    family: "Roboto",
    size: 25,
    fill: "#24252A",
    weight: "bold",
}).flip("y");

canvasMesfetGrafPopis.text("SiGaAs").move(370,5).font({
    family: "Roboto",
    size: 25,
    fill: "#24252A",
    weight: "bold",
}).flip("y");

canvasMesfetGrafPopis.text("Energetický pásmový diagram MESFET").move(70,580).font({
    family: "Roboto",
    size: 30,
    fill: "#24252A",
    weight: "bold",
}).flip("y");

// DRAW MESFET
const drawMesfet = SVG()
    .addTo("#porovnanie_mesfet")
    .size(width, "100%")
    .viewbox(0, 0, width, height);

const canvasMesfet = drawMesfet.group().flip('y', height / 2);

canvasMesfet.rect(640, 80).move(0,0).fill("#c67cff");
canvasMesfet.rect(640, 160).move(0,80).fill("#c1eaff");
canvasMesfet.rect(340, 80).move(150,160).fill("#00e25d");
canvasMesfet.rect(120, 180).move(0,60).fill("#44cbff");
canvasMesfet.rect(120, 180).move(520,60).fill("#44cbff");

canvasMesfet.rect(100, 40).move(10,240).fill("#24252A");
canvasMesfet.rect(160, 40).move(240,240).fill("#24252A");
canvasMesfet.rect(100, 40).move(530,240).fill("#24252A");

canvasMesfet.text("MESFET")
    .move(225,550)
    .font({
        family: "Roboto",
        size: 50,
        fill: "#24252A",
        weight: "bold",
    })
    .flip("y");

let sourceHemt1, sourceHemt2, sourceMesfet1, sourceMesfet2;
function showSource()
{
    sourceHemt1 = drawHemt.group().flip('y', height / 2);
    sourceHemt1.rect(100, 100).move(0,500).fill("none").stroke({width:5, color: "#24252A"}).x(5);
    sourceHemt1.rect(50, 20).move(7,578).fill("blue");
    sourceHemt1.rect(50, 20).move(54,578).fill("red").back();

    sourceHemt1.line(20,540, 90, 540).stroke({width:5, color: "#24252A"});
    sourceHemt1.line(20,535, 20, 545).stroke({width:5, color: "#24252A"});
    sourceHemt1.line(90,535, 90, 545).stroke({width:5, color: "#24252A"});
    sourceHemt1.line(55,540, 90, 575).stroke({width:5, color: "#24252A"});
    sourceHemt1.text("0").move(50,555).font({
        family: "Roboto",
        size: 25,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");
    sourceHemt1.text("U").move(50,510).font({
        family: "Roboto",
        size: 25,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");
    sourceHemt1.circle(10).center(85, 510).fill("#24252A");
    sourceHemt1.polyline([[85,510], [85,480], [320,480], [320, 430]]).fill("none").stroke({width:5, color: "#24252A"});
    sourceHemt1.circle(10).center(30, 510).fill("#24252A");
    sourceHemt1.line(30, 510, 30, 480).stroke({width:5, color: "#24252A"});
    sourceHemt1.line(20, 480, 40, 480).stroke({width:5, color: "#24252A"});

    sourceHemt2 = drawHemt.group().flip('y', height / 2);
    sourceHemt2.rect(100, 100).move(0,500).fill("none").stroke({width:5, color: "#24252A"}).x(5);
    sourceHemt2.rect(50, 20).move(7,578).fill("blue");
    sourceHemt2.rect(50, 20).move(54,578).fill("red").back();

    sourceHemt2.line(20,540, 90, 540).stroke({width:5, color: "#24252A"});
    sourceHemt2.line(20,535, 20, 545).stroke({width:5, color: "#24252A"});
    sourceHemt2.line(90,535, 90, 545).stroke({width:5, color: "#24252A"});
    sourceHemt2.line(55,540, 90, 575).stroke({width:5, color: "#24252A"});
    sourceHemt2.text("0").move(50,555).font({
        family: "Roboto",
        size: 25,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");
    sourceHemt2.text("U").move(50,510).font({
        family: "Roboto",
        size: 25,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");
    sourceHemt2.circle(10).center(85, 510).fill("#24252A");
    sourceHemt2.circle(10).center(30, 510).fill("#24252A");
    sourceHemt2.move(538, 500);
    sourceHemt2.line(618,510, 618, 350).fill("none").stroke({width:5, color: "#24252A"});
    sourceHemt2.polyline([[563,510], [563,450], [55,450], [55, 380]]).fill("none").stroke({width:5, color: "#24252A"});

    sourceMesfet1 = drawMesfet.group().flip('y', height / 2);
    sourceMesfet1.rect(100, 100).move(0,500).fill("none").stroke({width:5, color: "#24252A"}).x(5);
    sourceMesfet1.rect(50, 20).move(7,578).fill("blue");
    sourceMesfet1.rect(50, 20).move(54,578).fill("red").back();

    sourceMesfet1.line(20,540, 90, 540).stroke({width:5, color: "#24252A"});
    sourceMesfet1.line(20,535, 20, 545).stroke({width:5, color: "#24252A"});
    sourceMesfet1.line(90,535, 90, 545).stroke({width:5, color: "#24252A"});
    sourceMesfet1.line(55,540, 90, 575).stroke({width:5, color: "#24252A"});
    sourceMesfet1.text("0").move(50,555).font({
        family: "Roboto",
        size: 25,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");
    sourceMesfet1.text("U").move(50,510).font({
        family: "Roboto",
        size: 25,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");
    sourceMesfet1.circle(10).center(85, 510).fill("#24252A");
    sourceMesfet1.polyline([[85,510], [85,480], [320,480], [320, 330]]).fill("none").stroke({width:5, color: "#24252A"});
    sourceMesfet1.circle(10).center(30, 510).fill("#24252A");
    sourceMesfet1.line(30, 510, 30, 480).stroke({width:5, color: "#24252A"});
    sourceMesfet1.line(20, 480, 40, 480).stroke({width:5, color: "#24252A"});
    sourceMesfet1.move(7,240);
    sourceMesfet1.back();


    sourceMesfet2 = drawMesfet.group().flip('y', height / 2);
    sourceMesfet2.rect(100, 100).move(0,500).fill("none").stroke({width:5, color: "#24252A"}).x(5);
    sourceMesfet2.rect(50, 20).move(7,578).fill("blue");
    sourceMesfet2.rect(50, 20).move(54,578).fill("red").back();

    sourceMesfet2.line(20,540, 90, 540).stroke({width:5, color: "#24252A"});
    sourceMesfet2.line(20,535, 20, 545).stroke({width:5, color: "#24252A"});
    sourceMesfet2.line(90,535, 90, 545).stroke({width:5, color: "#24252A"});
    sourceMesfet2.line(55,540, 90, 575).stroke({width:5, color: "#24252A"});
    sourceMesfet2.text("0").move(50,555).font({
        family: "Roboto",
        size: 25,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");
    sourceMesfet2.text("U").move(50,510).font({
        family: "Roboto",
        size: 25,
        fill: "#24252A",
        weight: "bold",
    }).flip("y");
    sourceMesfet2.circle(10).center(85, 510).fill("#24252A");
    sourceMesfet2.circle(10).center(30, 510).fill("#24252A");
    sourceMesfet2.move(538, 500);
    sourceMesfet2.line(618,510, 618, 350).fill("none").stroke({width:5, color: "#24252A"});
    sourceMesfet2.polyline([[563,510], [563,450], [55,450], [55, 350]]).fill("none").stroke({width:5, color: "#24252A"});
    sourceMesfet2.move(50,260);

}
function hideSource()
{
    sourceHemt1.hide();
    sourceHemt2.hide();
    sourceMesfet1.hide();
    sourceMesfet2.hide();
}

// DEFINE ARRAY TO BE FILLED WITH ELECTRONS
// AND NUMBER OF ELECTRONS
let electronArrayHemt = [];
let electronCountHemt = 15;

// MAKE PATHS FOR ELECTRONS
let pathHemt = canvasHemt.path("M 25,340 L 25,105 L 585,105 L 585,340");
pathHemt.fill('none')//.stroke({width:1, color: '#ccc', dasharray: '10,10' });
let lengthHemtPath = pathHemt.length();

let runnerHemt = [];
function launchHemtAnimation()
{
    runnerHemt = [];
    electronArrayHemt = [];
    // MAKE ELECTRONS AND PUSH THEM TO ONE ARRAY
    for (let i = 0; i < electronCountHemt; i++)
    {
        let electron = drawHemt.group().flip('y', height / 2);
        electron.clear();
        electron.circle(30).fill("#333399");
        electron.circle(20).fill("white").move(5,5);
        electron.line(8,15, 22,15).stroke({ color: "black", width: 5});
        electron.move(25,340);
        electronArrayHemt.push(electron);
    }

    // ANIMATE EACH ELECTRON FROM ARRAY TO FOLLOW PATH
    // WITH DIFFERENT DELAY (OFFSET)
    for (let j = 0; j < electronCountHemt; j++)
    {
        runnerHemt[j] = electronArrayHemt[j].animate({
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
            let m = pathHemt.matrixify()
            let p = new SVG.Point(pathHemt.pointAt(eased_pos * lengthHemtPath)).transform(m)
            electronArrayHemt[j].move(p.x, p.y)
        }).loop();
    }
}

let electronArrayMesfet1 = [];
let electronArrayMesfet2 = [];
let electronCountMesfet1 = 12;
let electronCountMesfet2 = 9;

let pathMesfet1 = canvasMesfet.path("M20,240 C40,40 580,40 585,240");
pathMesfet1.fill("none")//.stroke({width:1, color: '#ccc'});
let lengthMesfetPath1 = pathMesfet1.length();

let pathMesfet2 = canvasMesfet.path("M65,240 C85,85 555,85 545,240");
pathMesfet2.fill("none")//.stroke({width:1, color: '#ccc'});
let lengthMesfetPath2 = pathMesfet2.length();

let runnerMesfet1 = [];
let runnerMesfet2 = [];
function launchMesfetAnimation()
{
    // LOWER PATH
    runnerMesfet1 = [];
    electronArrayMesfet1 = [];
    // MAKE ELECTRONS AND PUSH THEM TO ONE ARRAY
    for (let i = 0; i < electronCountMesfet1; i++)
    {
        let electron = drawMesfet.group().flip('y', height / 2);
        electron.clear();
        electron.circle(30).fill("#333399");
        electron.circle(20).fill("white").move(5,5);
        electron.line(8,15, 22,15).stroke({ color: "black", width: 5});
        electron.move(25,240);
        electronArrayMesfet1.push(electron);
    }

    // ANIMATE EACH ELECTRON FROM ARRAY TO FOLLOW PATH
    // WITH DIFFERENT DELAY (OFFSET)
    for (let j = 0; j < electronCountMesfet1; j++)
    {
        runnerMesfet1[j] = electronArrayMesfet1[j].animate({
            duration: 3000,
            delay: (j * 250),
            when: 'now',
        }).during(function(pos)
        {
            // '<>' : ease in and out
            // '>' : ease out
            // '<' : ease in
            // '-' : linear
            let eased_pos = SVG.easing['<>'](pos);
            let m = pathMesfet1.matrixify()
            let p = new SVG.Point(pathMesfet1.pointAt(eased_pos * lengthMesfetPath1)).transform(m)
            electronArrayMesfet1[j].move(p.x, p.y)
        }).loop();
    }


    // UPPER PATH
    runnerMesfet2 = [];
    electronArrayMesfet2 = [];
    // MAKE ELECTRONS AND PUSH THEM TO ONE ARRAY
    for (let i = 0; i < electronCountMesfet2; i++)
    {
        let electron = drawMesfet.group().flip('y', height / 2);
        electron.clear();
        electron.circle(30).fill("#333399");
        electron.circle(20).fill("white").move(5,5);
        electron.line(8,15, 22,15).stroke({ color: "black", width: 5});
        electron.move(55,240);
        electronArrayMesfet2.push(electron);
    }

    // ANIMATE EACH ELECTRON FROM ARRAY TO FOLLOW PATH
    // WITH DIFFERENT DELAY (OFFSET)
    for (let j = 0; j < electronCountMesfet2; j++)
    {
        runnerMesfet2[j] = electronArrayMesfet2[j].animate({
            duration: 2700,
            delay: (j * 300),
            when: 'now',
        }).during(function(pos)
        {
            // '<>' : ease in and out
            // '>' : ease out
            // '<' : ease in
            // '-' : linear
            let eased_pos = SVG.easing['<>'](pos);
            let m = pathMesfet2.matrixify()
            let p = new SVG.Point(pathMesfet2.pointAt(eased_pos * lengthMesfetPath2)).transform(m)
            electronArrayMesfet2[j].move(p.x, p.y)
        }).loop();
    }
}

// MATERIALS NAMES
let captionsArray = [];

function showCaptions()
{
    captionsArray = [];

    // HEMT
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

    // MESFET
    captionsArray.push(canvasMesfet.text("SiGaAs")
        .move(280,20)
        .font(myFont)
        .flip("y"));

    captionsArray.push(canvasMesfet.text("nGaAs")
        .move(285,110)
        .font(myFont)
        .flip("y"));

    captionsArray.push(canvasMesfet.text("Oblasť priestorového náboja")
        .move(160,190)
        .font(myFont)
        .flip("y"));

    captionsArray.push(canvasMesfet.text("n+")
        .move(560,140)
        .font(myFont)
        .flip("y"));

    captionsArray.push(canvasMesfet.text("n+")
        .move(40,140)
        .font(myFont)
        .flip("y"));

    captionsArray.push(canvasMesfet.text("Drain")
        .move(550,250)
        .font(myFont2)
        .flip("y"));

    captionsArray.push(canvasMesfet.text("Gate")
        .move(295,250)
        .font(myFont2)
        .flip("y"));

    captionsArray.push(canvasMesfet.text("Source")
        .move(20,250)
        .font(myFont2)
        .flip("y"));

    captionsArray.push(canvasHemtGraf.text("2DEG")
        .move(320,365)
        .font(myFont)
        .flip("y"));
/*
    captionsArray.push(canvasHemtGraf.text("Fermiho hladina")
        .move(440,310)
        .font(myFont)
        .flip("y"));
    captionsArray.push(canvasHemtGraf.text("Spodná hranica\nvodivostného pásma")
        .move(440,445)
        .font(myFont)
        .flip("y"));
    captionsArray.push(canvasHemtGraf.text("Vrchná hranica\nvodivostného pásma")
        .move(440,140)
        .font(myFont)
        .flip("y"));
    captionsArray.push(canvasMesfetGraf.text("Fermiho hladina")
        .move(410,310)
        .font(myFont)
        .flip("y"));
    captionsArray.push(canvasMesfetGraf.text("Spodná hranica\nvodivostného pásma")
        .move(410,500)
        .font(myFont)
        .flip("y"));
    captionsArray.push(canvasMesfetGraf.text("Vrchná hranica\nvodivostného pásma")
        .move(410,85)
        .font(myFont)
        .flip("y"));
 */
}

function hideCaptions() {captionsArray.forEach(c => c.clear());}
function pauseAnimations()
{
    runnerHemt.forEach(c => c.timeline().pause());
    runnerMesfet1.forEach(c => c.timeline().pause());
    runnerMesfet2.forEach(c => c.timeline().pause());
}

function playAnimations()
{
    runnerHemt.forEach(c => c.timeline().play());
    runnerMesfet1.forEach(c => c.timeline().play());
    runnerMesfet2.forEach(c => c.timeline().play());
}

function stopAnimations()
{
    runnerHemt.forEach(c => c.unschedule());
    runnerMesfet1.forEach(c => c.unschedule());
    runnerMesfet2.forEach(c => c.unschedule());

    electronArrayHemt.forEach(c => c.hide());
    electronArrayMesfet1.forEach(c => c.hide());
    electronArrayMesfet2.forEach(c => c.hide());
}