const width = 600;
const height = 600;
const background = document.getElementById("obvod_schema");
let drawNOR;
let canvasNOR;
let drawNOT;
let canvasNOT;
const myRed = "#D0312D";
const myGreen = "#83B44B";
let currentColorA = "#24252A";
let currentColorB = "#24252A";
let currentColorC = "#24252A";
let valArray = [];
let captionsArray = [];
let active = false;
let captionsActive = false;

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

function switchColor()
{
    if (values.length > 0)
    {
        if (values[0] === "0")
        {
            currentColorA = myRed;
            valArray[0] = values[0];
        }
        else
        {
            currentColorA = myGreen
            valArray[0] = values[0];

        }

        if (values[1] === "0")
        {
            currentColorB = myRed;
            valArray[1] = values[1];

        }
        else
        {
            currentColorB = myGreen
            valArray[1] = values[1];

        }

        if (values[2] === "0")
        {
            currentColorC = myRed;
            valArray[2] = values[2];

        }
        else
        {
            currentColorC = myGreen
            valArray[2] = values[2];
        }

        if (values[3] === "0")
        {
            valArray[3] = values[3];

        }
        else
        {
            valArray[3] = values[3];
        }
        active = true;
    }
    else
    {
        currentColorA = "#24252A";
        currentColorB = "#24252A";
        currentColorC = "#24252A";
    }
}

function drawNorFunction()
{
    switchColor();
    background.innerHTML = "";
    drawNOR = SVG()
        .addTo("#obvod_schema")
        .size(width, "100%")
        .viewbox(0, 0, width, height)

    canvasNOR = drawNOR.group().flip('y', height / 2)
    //canvasNOR.polyline([[0,0], [600,0], [600,600], [0, 600], [0,0]]).fill("none").stroke({width:5, color: "#24252A"});

    canvasNOR.line(50,50, 550, 50).stroke({width:5, color: "#24252A"});
    canvasNOR.line(147.5,300, 500, 300).stroke({width:5, color: "#24252A"});
    canvasNOR.line(300,50, 300, 20).stroke({width:5, color: "#24252A"});
    canvasNOR.line(285,20, 315, 20).stroke({width:5, color: "#24252A"});

    canvasNOR.circle(20).center(150,50).fill('#24252A');
    canvasNOR.circle(20).center(300,50).fill('#24252A');
    canvasNOR.circle(20).center(450,50).fill('#24252A');

    canvasNOR.circle(20).center(300,300).fill('#24252A');
    canvasNOR.circle(20).center(450,300).fill('#24252A');
    canvasNOR.circle(20).center(210,300).fill('#24252A');

    canvasNOR.circle(20).center(510,300).fill('none').stroke({width:5, color: "#24252A"});
    canvasNOR.circle(20).center(300,540).fill('none').stroke({width:5, color: "#24252A"});

    canvasNOR.line(300,300, 300, 390).stroke({width:5, color: "#24252A"});
    canvasNOR.line(300,530, 300, 460).stroke({width:5, color: "#24252A"});
    canvasNOR.line(302.5,390, 250, 390).stroke({width:5, color: "#24252A"});
    canvasNOR.line(302.5,460, 250, 460).stroke({width:5, color: "#24252A"});
    canvasNOR.line(250,480, 250, 370).stroke({width:10, color: "#24252A"});
    canvasNOR.line(265,460, 265, 390).stroke({width:5, color: "#24252A"});
    canvasNOR.line(210,300, 210, 425).stroke({width:5, color: "#24252A"});
    canvasNOR.line(207.5,425, 250, 425).stroke({width:5, color: "#24252A"});

    canvasNOR.line(245,425, 235, 435).stroke({width:5, color: "#24252A"});
    canvasNOR.line(245,425, 235, 415).stroke({width:5, color: "#24252A"});

    const pathA = drawNOR.group().flip('y', height / 2).back();
    pathA.line(150,50, 150, 142.5).stroke({width:5, color: currentColorA});
    pathA.line(150,300, 150, 207.5).stroke({width:5, color: currentColorA});

    pathA.line(150,140, 120, 140).stroke({width:5, color: currentColorA});
    pathA.line(150,210, 120, 210).stroke({width:5, color: currentColorA});
    pathA.line(120,120, 120, 230).stroke({width:10, color: currentColorA});

    pathA.line(80,175, 120, 175).stroke({width:5, color: currentColorA});
    pathA.line(115,175, 105, 185).stroke({width:5, color: currentColorA});
    pathA.line(115,175, 105, 165).stroke({width:5, color: currentColorA});
    pathA.circle(20).center(70,175).fill('none').stroke({width:5, color: currentColorA});

    const pathB = drawNOR.group().flip('y', height / 2).back();
    pathB.line(300,50, 300, 142.5).stroke({width:5, color: currentColorB});
    pathB.line(300,300, 300, 207.5).stroke({width:5, color: currentColorB});

    pathB.line(300,140, 270, 140).stroke({width:5, color: currentColorB});
    pathB.line(300,210, 270, 210).stroke({width:5, color: currentColorB});
    pathB.line(270,120, 270, 230).stroke({width:10, color: currentColorB});

    pathB.line(230,175, 270, 175).stroke({width:5, color: currentColorB});
    pathB.line(265,175, 255, 185).stroke({width:5, color: currentColorB});
    pathB.line(265,175, 255, 165).stroke({width:5, color: currentColorB});
    pathB.circle(20).center(220,175).fill('none').stroke({width:5, color: currentColorB});

    const pathC = drawNOR.group().flip('y', height / 2).back();
    pathC.line(450,50, 450, 142.5).stroke({width:5, color: currentColorC});
    pathC.line(450,300, 450, 207.5).stroke({width:5, color: currentColorC});

    pathC.line(450,140, 420, 140).stroke({width:5, color: currentColorC});
    pathC.line(450,210, 420, 210).stroke({width:5, color: currentColorC});
    pathC.line(420,120, 420, 230).stroke({width:10, color: currentColorC});

    pathC.line(380,175, 420, 175).stroke({width:5, color: currentColorC});
    pathC.line(415,175, 405, 185).stroke({width:5, color: currentColorC});
    pathC.line(415,175, 405, 165).stroke({width:5, color: currentColorC});
    pathC.circle(20).center(370,175).fill('none').stroke({width:5, color: currentColorC});

    canvasNOR.text("U").move(290,565).font(myFont2).flip("y");
    canvasNOR.text("DD").move(310,550).font(myFont3).flip("y");
    canvasNOR.text("GND").move(325,13).font(myFont).flip("y");

    if (active)
    {
        canvasNOR.text("A = " + valArray[0]).move(35,205).font(myFont2).flip("y");
        canvasNOR.text("B = " + valArray[1]).move(185,205).font(myFont2).flip("y");
        canvasNOR.text("C = " + valArray[2]).move(335,205).font(myFont2).flip("y");
        canvasNOR.text("Y = " + valArray[3]).move(525,295).font(myFont2).flip("y");
    }
    else
    {
        canvasNOR.text("A").move(60,205).font(myFont2).flip("y");
        canvasNOR.text("B").move(210,205).font(myFont2).flip("y");
        canvasNOR.text("C").move(360,205).font(myFont2).flip("y");
        canvasNOR.text("Y").move(530,295).font(myFont2).flip("y");
    }

    if(captionsActive) {showCaptionsNOR()}
}

function showCaptionsNOR()
{
    captionsArray.push(
        canvasNOR.text("D-HEMT")
            .move(210,490)
            .font(myFont3)
            .flip("y"));
    captionsArray.push(
        canvasNOR.text("E-HEMT")
            .move(65,90)
            .font(myFont3)
            .flip("y"));
    captionsArray.push(
        canvasNOR.text("E-HEMT")
            .move(215,90)
            .font(myFont3)
            .flip("y"));
    captionsArray.push(
        canvasNOR.text("E-HEMT")
            .move(365,90)
            .font(myFont3)
            .flip("y"));
}

function drawNotFunction()
{
    switchColor();
    background.innerHTML = "";
    drawNOT = SVG()
        .addTo("#obvod_schema")
        .size(width, "100%")
        .viewbox(0, 0, width, height)

    canvasNOT = drawNOT.group().flip('y', height / 2)
    //canvasNOT.polyline([[0,0], [600,0], [600,600], [0, 600], [0,0]]).fill("none").stroke({width:5, color: "#24252A"});

    const pathUp = drawNOT.group().flip('y', height / 2).back();
    pathUp.line(100,550, 500, 550).stroke({width:5, color: currentColorB});
    pathUp.circle(20).center(400,550).fill(currentColorB);
    pathUp.circle(20).center(200,550).fill(currentColorB);
    pathUp.circle(20).center(200,300).fill(currentColorB);
    pathUp.circle(20).center(400,300).fill(currentColorB);
    pathUp.circle(20).center(500,300).fill('none').stroke({width:5, color: currentColorB});

    pathUp.line(400,300, 490, 300).stroke({width:5, color: currentColorB});
    pathUp.line(400,297.5, 400, 390).stroke({width:5, color: currentColorB});
    pathUp.line(400,550, 400, 460).stroke({width:5, color: currentColorB});
    pathUp.line(402.5,390, 370, 390).stroke({width:5, color: currentColorB});
    pathUp.line(402.5,460, 370, 460).stroke({width:5, color: currentColorB});
    pathUp.line(370,370, 370, 480).stroke({width:10, color: currentColorB});

    pathUp.line(200,550, 200, 460).stroke({width:5, color: currentColorB});
    pathUp.line(200,300, 200, 390).stroke({width:5, color: currentColorB});
    pathUp.line(202.5,390, 150, 390).stroke({width:5, color: currentColorB});
    pathUp.line(202.5,460, 150, 460).stroke({width:5, color: currentColorB});
    pathUp.line(170,390, 170, 460).stroke({width:5, color: currentColorB});
    pathUp.line(150,370, 150, 480).stroke({width:10, color: currentColorB});

    pathUp.polyline([[202.5,300], [100,300], [100,425], [150, 425]]).fill("none").stroke({width:5, color: currentColorB});
    pathUp.line(145,425, 135, 435).stroke({width:5, color: currentColorB});
    pathUp.line(145,425, 135, 415).stroke({width:5, color: currentColorB});
    pathUp.polyline([[200,300], [300,300], [300,425], [370, 425]]).fill("none").stroke({width:5, color: currentColorB});
    pathUp.line(365,425, 355, 435).stroke({width:5, color: currentColorB});
    pathUp.line(365,425, 355, 415).stroke({width:5, color: currentColorB});

    const pathDown = drawNOT.group().flip('y', height / 2).back();
    pathDown.polyline([[200,300], [200,240], [170,240], [170, 170], [200, 170], [200, 110], [400, 110], [400, 170], [370, 170], [370, 240], [400, 240], [400, 300]]).fill("none").stroke({width:5, color: currentColorA});
    pathDown.line(300,110, 300, 70).stroke({width:5, color: currentColorA});
    pathDown.line(280,70, 320, 70).stroke({width:5, color: currentColorA});
    pathDown.line(170,260, 170, 150).stroke({width:10, color: currentColorA});
    pathDown.line(370,260, 370, 150).stroke({width:10, color: currentColorA});

    pathDown.line(110,205, 370, 205).stroke({width:5, color: currentColorA});
    pathDown.line(165,205, 155, 215).stroke({width:5, color: currentColorA});
    pathDown.line(165,205, 155, 195).stroke({width:5, color: currentColorA});
    pathDown.line(365,205, 355, 215).stroke({width:5, color: currentColorA});
    pathDown.line(365,205, 355, 195).stroke({width:5, color: currentColorA});
    pathDown.circle(20).center(100,205).fill('none').stroke({width:5, color: currentColorA});
    pathDown.circle(20).center(300,110).fill(currentColorA);

    canvasNOT.text("U").move(510,545).font(myFont2).flip("y");
    canvasNOT.text("DD").move(530,530).font(myFont3).flip("y");
    canvasNOT.text("GND").move(275,40).font(myFont).flip("y");

    if (active)
    {
        canvasNOT.text("A = " + valArray[0]).move(65,230).font(myFont2).flip("y");
        canvasNOT.text("Y = " + valArray[1]).move(525,295).font(myFont2).flip("y");
    }
    else
    {
        canvasNOT.text("A").move(90,230).font(myFont2).flip("y");
        canvasNOT.text("Y").move(525,295).font(myFont2).flip("y");
    }

    if(captionsActive) {showCaptionsNOT()}
}

function showCaptionsNOT()
{
    captionsArray.push(
        canvasNOT.text("D-HEMT")
            .move(110,490)
            .font(myFont3)
            .flip("y"));
    captionsArray.push(
        canvasNOT.text("E-HEMT")
            .move(115,125)
            .font(myFont3)
            .flip("y"));
    captionsArray.push(
        canvasNOT.text("E-HEMT")
            .move(315,125)
            .font(myFont3)
            .flip("y"));
    captionsArray.push(
        canvasNOT.text("E-HEMT")
            .move(315,490)
            .font(myFont3)
            .flip("y"));
}

function hideCaptions()
{
    captionsArray.forEach(c => c.clear());
    captionsArray = [];
}