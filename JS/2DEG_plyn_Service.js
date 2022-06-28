const height = 700;
const width = 640;
const backgroundDiv = document.getElementById("2deg_plyn_container");
const nadpisElement = document.getElementById("nadpis");
let electronArray = [];
let runnerArray = [];
let pathArray = [];
const atomWidth = 34;
const electronWidth = 12;

// LEGENDA:
// Source
const zdroj = drawSource(SVG()
    .addTo("#zdroj_napatia")
    .size(sourceW, "100%")
    .viewbox(0, 0, sourceW, sourceH));

// Atom
const drawAtom = SVG()
    .addTo("#atom_legenda")
    .size(50, "100%")
    .viewbox(0, 0, 50, 50);
const gradient = drawAtom.gradient('radial', function(add) {
    add.stop(0, 'red')
    add.stop(1, '#24252A')});
drawAtom.rect(atomWidth,atomWidth).center(25,25).radius(100).fill(gradient);

// Elektron
const drawE = SVG()
    .addTo("#elektron_legenda")
    .size(50, "100%")
    .viewbox(0, 0, 50, 50);
const gradient2 = drawE.gradient('radial', function(add) {
    add.stop(0, 'blue')
    add.stop(1, '#24252A')});
drawE.rect(electronWidth,electronWidth).center(25,25).radius(100).fill(gradient2);

// Polovodic
const drawPolovodic = SVG()
    .addTo("#polovodic_legenda")
    .size(50, "100%")
    .viewbox(0, 0, 50, 50)
    .rect(50,50)
    .fill("#2A9DF4")
    .center(50/2,50/2);

// Polovodic2
const drawPolovodic2 = SVG()
    .addTo("#polovodic2_legenda")
    .size(50, "100%")
    .viewbox(0, 0, 50, 50)
    .rect(50,50)
    .fill("#5DB42E")
    .center(50/2,50/2);

// Polovodic3
const drawPolovodic3 = SVG()
    .addTo("#polovodic3_legenda")
    .size(50, "100%")
    .viewbox(0, 0, 50, 50)
    .rect(50,50)
    .fill("#FFDF00")
    .center(50/2,50/2);

// Elektroda
const drawElektroda = SVG()
    .addTo("#elektroda_legenda")
    .size(50, "100%")
    .viewbox(0, 0, 50, 50)
    .rect(50,50)
    .fill("#48494B")
    .center(50/2,50/2);

function drawInitialState()
{
    runnerArray.forEach(c => c.unschedule());
    runnerArray = [];
    electronArray = [];
    pathArray = [];
    backgroundDiv.innerHTML = "";
    nadpisElement.innerHTML = "Polovodič bez pripojeného napätia";
    //nadpisElement.innerHTML = "";

    const InitialState = SVG()
        .addTo(backgroundDiv)
        .size(width, "100%")
        .viewbox(0, 0, width, (height-100))
    const canvasInitialState = InitialState.group().flip('y', (height-100) / 2);

    //canvasInitialState.polyline([[0,0], [width,0], [width,(height-100)], [0, (height-100)], [0,0]]).fill("none").stroke({width:5, color: "#24252A"});
    canvasInitialState.polyline([[40,20], [440,20], [440,420], [40, 420], [40,17.5]]).fill("#2A9DF4").stroke({width:1, color: "#24252A"});
    canvasInitialState.polyline([[40,420], [180,560], [580,560], [440, 420], [40,420]]).fill("#2A9DF4").stroke({width:1, color: "#24252A"});
    canvasInitialState.polyline([[440,20], [580,160], [580,560], [440, 420], [440,20]]).fill("#2A9DF4").stroke({width:1, color: "#24252A"});

    canvasInitialState.polyline([[120,20], [120,420], [260,560]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasInitialState.polyline([[200,20], [200,420], [340,560]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasInitialState.polyline([[280,20], [280,420], [420,560]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasInitialState.polyline([[360,20], [360,420], [500,560]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });

    canvasInitialState.polyline([[40,100], [440,100], [580,240]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasInitialState.polyline([[40,180], [440,180], [580,320]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasInitialState.polyline([[40,260], [440,260], [580,400]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasInitialState.polyline([[40,340], [440,340], [580,480]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });

    canvasInitialState.polyline([[86.5,466.50], [486.5,466.50], [486.5,66.50]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasInitialState.polyline([[133,513], [533,513], [533,113]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });

    let gradient = canvasInitialState.gradient('radial', function(add) {
        add.stop(0, 'red')
        add.stop(1, '#24252A')
    });

    let x = 40, y = 20;
    for (let i = 0; i < 6; i++)
    {
        for (let j = 0; j < 6; j++)
        {
            canvasInitialState.rect(atomWidth,atomWidth).center(x + (i*80),y+ (j*80)).radius(100).fill(gradient);
        }
    }

    x = 86.5;
    y = 466.5;
    for (let i = 0; i < 6; i++)
    {
        for (let j = 0; j < 3; j++)
        {
            canvasInitialState.rect(atomWidth,atomWidth).center(x + (i*80) + (j*46.5),y+ (j*46.5)).radius(100).fill(gradient);
        }
    }

    x = 486.5;
    y = 66.5;
    for (let i = 0; i < 6; i++)
    {
        for (let j = 0; j < 3; j++)
        {
            canvasInitialState.rect(atomWidth,atomWidth).center(x + (j*46.5),y + (j*46.5)).radius(100).fill(gradient);
        }
        y += 80;
    }
}

function drawU1()
{
    runnerArray.forEach(c => c.unschedule());
    runnerArray = [];
    electronArray = [];
    pathArray = [];
    backgroundDiv.innerHTML = "";
    nadpisElement.innerHTML = "Pohyb elektrónov v polovodiči bez pripojeného napätia";

    const stateU1 = SVG()
        .addTo(backgroundDiv)
        .size(width, "100%")
        .viewbox(0, 0, width, height)
    const canvasU1 = stateU1.group().flip('y', height / 2);

    // Source
    canvasU1.group()//.flip('y', sourceH / 2);
    canvasU1.rect(100, 100).move(0,5).fill("none").stroke({width:5, color: "#24252A"}).x(5);
    canvasU1.rect(50, 20).move(7,85).fill("blue").back();
    canvasU1.rect(50, 20).move(54,85).fill("red").back();
    canvasU1.line(20,40, 90, 40).stroke({width:5, color: "#24252A"});
    canvasU1.line(20,35, 20, 45).stroke({width:5, color: "#24252A"});
    canvasU1.line(90,35, 90, 45).stroke({width:5, color: "#24252A"});
    //canvasU1.line(55,40, 90, 75).stroke({width:5, color: "#24252A"});
    canvasU1.text("0").move(50,38).font(myFont).flip('y', sourceH / 2);
    canvasU1.text("U").move(50,82).font(myFont).flip('y', sourceH / 2);
    canvasU1.circle(10).center(85, 15).fill("#24252A");
    canvasU1.circle(10).center(30, 15).fill("#24252A");
    canvasU1.center(320,645)

    //canvasU1.polyline([[0,0], [width,0], [width,height], [0, height], [0,0]]).fill("none").stroke({width:5, color: "#24252A"});
    canvasU1.polyline([[180,160], [180,560], [580,560], [580, 160], [180, 160]]).fill("#2A9DF4").stroke({width:1, color: "#24252A"}); // Back wall
    canvasU1.polyline([[40,420], [180,560], [180,160], [40, 20]]).fill("#0D6EFD").stroke({width:1, color: "#24252A"}); // Left wall
    canvasU1.polyline([[40,20], [180,160], [580,160], [440, 20], [40,20]]).fill("#2A9DF4").stroke({width:1, color: "#24252A"}); // Bottom wall
    canvasU1.polyline([[40,20], [440,20], [440,420], [40, 420], [40,17.5]]).fill("none").stroke({width:1, color: "#24252A"}); // Front wall

    // Electron movement animation
    const path1 = canvasU1.path("M55,100 L480,250 L260,560 Z").fill('none')//.stroke({width: 3, color: 'red'});
    const path2 = canvasU1.path("M220,510 L500,350 L285,20 L50,340 Z").fill('none')//.stroke({width: 3, color: 'red'});
    const path3 = canvasU1.path("M110,180 L450,220 L40,260 L550,380 L125,510 Z").fill('none')//.stroke({width: 3, color: 'red'});
    const path4 = canvasU1.path("M440,20 L200,275 L350,320 L450,320 Z").fill('none')//.stroke({width: 3, color: 'red'});
    const path5 = canvasU1.path("M120,340 L450,275 L200,20 L120,180 L420,560 L520,460 Z").fill('none')//.stroke({width: 3, color: 'red'});
    const path6 = canvasU1.path("M450,275 L570,440 L440,560 L40,180 L120,20 Z").fill('none')//.stroke({width: 3, color: 'red'});
    const path7 = canvasU1.path("M50,260 L350,60 L520,260 L380,450 Z").fill('none')//.stroke({width: 3, color: 'red'});
    const path8 = canvasU1.path("M290,560 L580,240 L500,90 L110,490 Z").fill('none')//.stroke({width: 3, color: 'red'});
    const path9 = canvasU1.path("M500,90 L340,490 L180,70 L40,420 Z").fill('none')//.stroke({width: 3, color: 'red'});
    const path10 = canvasU1.path("M520,265 L320,180 L100,265 L320,340 Z").fill('none')//.stroke({width: 3, color: 'red'});
    const path11 = canvasU1.path("M340,480 L220,230 L340,100 L430,330 Z").fill('none')//.stroke({width: 3, color: 'red'});
    const path12 = canvasU1.path("M320,510 L550,220 L140,180 Z").fill('none')//.stroke({width: 3, color: 'yellow'});
    pathArray.push(path1, path2,  path3, path4, path5, path6, path7, path8, path9, path10, path11, path12);

    let electronGradient = canvasU1.gradient('radial', function(add) {
        add.stop(0, 'blue')
        add.stop(1, '#24252A')
    });

    // MAKE ELECTRONS AND PUSH THEM TO ONE ARRAY

    for (let j = 0; j < pathArray.length; j++)
    {
        //console.log("Path Lenght = " + pathArray[j].length());
        let electron = canvasU1.group();
        electron.rect(electronWidth,electronWidth).center(40, 20).radius(100).fill(electronGradient);
        electronArray.push(electron);

        runnerArray.push(electron.animate({
            duration: (3500*(pathArray[j].length()*0.0005) - Math.random() * 800 - 200),
            delay: (Math.random() * 1000),
            when: "now",
        }).during(function(pos)
        {
            // '<>' : ease in and out
            // '>' : ease out
            // '<' : ease in
            // '-' : linear
            let eased_pos = SVG.easing['-'](pos);
            let m = pathArray[j].matrixify()
            let p = new SVG.Point(pathArray[j].pointAt(eased_pos * pathArray[j].length())).transform(m)
            electron.center(p.x, p.y)
        }).loop());
    }

    // Wall grid
    canvasU1.polyline([[40,20], [40, 420], [180,560]]).fill("none").stroke({width:5, color: "#24252A"});
    canvasU1.polyline([[120,20], [120,420], [260,560]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasU1.polyline([[200,20], [200,420], [340,560]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasU1.polyline([[280,20], [280,420], [420,560]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasU1.polyline([[360,20], [360,420], [500,560]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });

    canvasU1.polyline([[40,100], [440,100], [580,240]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasU1.polyline([[40,180], [440,180], [580,320]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasU1.polyline([[40,260], [440,260], [580,400]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasU1.polyline([[40,340], [440,340], [580,480]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });

    canvasU1.polyline([[86.5,466.50], [486.5,466.50], [486.5,66.50]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasU1.polyline([[133,513], [533,513], [533,113]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });

    // Atoms
    let gradient = canvasU1.gradient('radial', function(add) {
        add.stop(0, 'red')
        add.stop(1, '#24252A')
    });

    let x = 40, y = 20;
    for (let i = 0; i < 6; i++)
    {
        for (let j = 0; j < 6; j++)
        {
            canvasU1.rect(atomWidth,atomWidth).center(x + (i*80),y+ (j*80)).radius(100).fill(gradient);
        }
    }

    x = 86.5;
    y = 466.5;
    for (let i = 0; i < 6; i++)
    {
        for (let j = 0; j < 3; j++)
        {
            canvasU1.rect(atomWidth,atomWidth).center(x + (i*80) + (j*46.5),y+ (j*46.5)).radius(100).fill(gradient);
        }
    }

    x = 486.5;
    y = 66.5;
    for (let i = 0; i < 6; i++)
    {
        for (let j = 0; j < 3; j++)
        {
            canvasU1.rect(atomWidth,atomWidth).center(x + (j*46.5),y + (j*46.5)).radius(100).fill(gradient);
        }
        y += 80;
    }

    // Right outter wall
    canvasU1.polyline([[440,20], [580,160], [580,560], [440, 420], [440,20]]).fill("#48494B").front();
    canvasU1.polyline([[440,20], [440, 420], [580,560]]).fill("none").stroke({width:5, color: "#24252A"}).front();
    // Source wiring
    canvasU1.polyline([[295,605], [295, 585], [15,585], [15,290], [50,290]]).fill("none").stroke({width:5, color: "#24252A"}).back();
    canvasU1.polyline([[350,605], [350, 585], [620,585], [620,290], [510,290]]).fill("none").stroke({width:5, color: "#24252A"}).front();
    // Minus sign
    canvasU1.line(15, 605, 35, 605).fill("none").stroke({width:6, color: "#24252A"});
    // Plus sign
    canvasU1.line(600, 605, 620, 605).fill("none").stroke({width:6, color: "#24252A"});
    canvasU1.line(610, 595, 610, 615).fill("none").stroke({width:6, color: "#24252A"});
}

function drawU2()
{
    runnerArray.forEach(c => c.unschedule());
    runnerArray = [];
    electronArray = [];
    pathArray = [];
    backgroundDiv.innerHTML = "";
    nadpisElement.innerHTML = "Pohyb elektrónov v polovodiči s pripojeným napätím";

    const stateU2 = SVG()
        .addTo(backgroundDiv)
        .size(width, "100%")
        .viewbox(0, 0, width, height)
    const canvasU2 = stateU2.group().flip('y', height / 2);

    // Source
    canvasU2.group()//.flip('y', sourceH / 2);
    canvasU2.rect(100, 100).move(0,5).fill("none").stroke({width:5, color: "#24252A"}).x(5);
    canvasU2.rect(50, 20).move(7,85).fill("blue").back();
    canvasU2.rect(50, 20).move(54,85).fill("red").back();
    canvasU2.line(20,40, 90, 40).stroke({width:5, color: "#24252A"});
    canvasU2.line(20,35, 20, 45).stroke({width:5, color: "#24252A"});
    canvasU2.line(90,35, 90, 45).stroke({width:5, color: "#24252A"});
    canvasU2.line(55,40, 90, 75).stroke({width:5, color: "#24252A"});
    canvasU2.text("0").move(50,38).font(myFont).flip('y', sourceH / 2);
    canvasU2.text("U").move(50,82).font(myFont).flip('y', sourceH / 2);
    canvasU2.circle(10).center(85, 15).fill("#24252A");
    canvasU2.circle(10).center(30, 15).fill("#24252A");
    canvasU2.center(320,645)

    //canvasU2.polyline([[0,0], [width,0], [width,height], [0, height], [0,0]]).fill("none").stroke({width:5, color: "#24252A"});
    canvasU2.polyline([[180,160], [180,560], [580,560], [580, 160], [180, 160]]).fill("#2A9DF4").stroke({width:1, color: "#24252A"}); // Back wall
    canvasU2.polyline([[40,420], [180,560], [180,160], [40, 20]]).fill("#0D6EFD").stroke({width:1, color: "#24252A"}); // Left wall
    canvasU2.polyline([[40,20], [180,160], [580,160], [440, 20], [40,20]]).fill("#2A9DF4").stroke({width:1, color: "#24252A"}); // Bottom wall
    canvasU2.polyline([[40,20], [440,20], [440,420], [40, 420], [40,17.5]]).fill("none").stroke({width:1, color: "#24252A"}); // Front wall

    // Electron movement animation
    const path1 = canvasU2.path("M 55,100 C 200,0 420,50 460,75").fill('none')//.stroke({width: 3, color: 'red'});
    const path2 = canvasU2.path("M 50,180 C 200,50 450,100 460,100").fill('none')//.stroke({width: 3, color: 'red'});
    const path3 = canvasU2.path("M 115,170 C 200,200 350,220 450,220").fill('none')//.stroke({width: 3, color: 'red'});
    const path4 = canvasU2.path("M 115,170 C 200,275 350,320 450,320").fill('none')//.stroke({width: 3, color: 'red'});
    const path5 = canvasU2.path("M 120,340 C 200,350 350,350 450,275").fill('none')//.stroke({width: 3, color: 'red'});
    const path6 = canvasU2.path("M 120,420 C 250,410 380,350 450,275").fill('none')//.stroke({width: 3, color: 'red'});
    const path7 = canvasU2.path("M 50,260 C 150,280 410,200 450,150").fill('none')//.stroke({width: 3, color: 'red'});
    const path8 = canvasU2.path("M 50,340 C 150,280 350,300 480,400").fill('none')//.stroke({width: 3, color: 'red'});
    const path9 = canvasU2.path("M 160,460 C 220,520 350,560 535,525").fill('none')//.stroke({width: 3, color: 'red'});
    const path10 = canvasU2.path("M 50,420 C 200,480 350,500 535,465").fill('none')//.stroke({width: 3, color: 'red'});
    const path11 = canvasU2.path("M 140,510 C 230,450 470,400 535,420").fill('none')//.stroke({width: 3, color: 'red'});
    const path12 = canvasU2.path("M 50,340 C 200,450 535,430 535,420").fill('none')//.stroke({width: 3, color: 'red'});
    const path13 = canvasU2.path("M 50,20 C 100,100 370,180 470,170").fill('none')//.stroke({width: 3, color: 'red'});
    pathArray.push(path1, path2,  path3, path4, path5, path6, path7, path8, path9, path10, path11, path12, path13,);

    let electronGradient = canvasU2.gradient('radial', function(add) {
        add.stop(0, 'blue')
        add.stop(1, '#24252A')
    });

    // MAKE ELECTRONS AND PUSH THEM TO ONE ARRAY
    for (let j = 0; j < pathArray.length; j++)
    {
        for (let i = 0; i < 10; i++)
        {
            let electron = canvasU2.group();
            electron.rect(electronWidth,electronWidth).center(40, 20).radius(100).fill(electronGradient);
            electronArray.push(electron);

            runnerArray.push(electron.animate({
                duration: 3500,
                delay: (i * 350),
                when: "now",
            }).during(function(pos)
            {
                // '<>' : ease in and out
                // '>' : ease out
                // '<' : ease in
                // '-' : linear
                let eased_pos = SVG.easing['>'](pos);
                let m = pathArray[j].matrixify()
                let p = new SVG.Point(pathArray[j].pointAt(eased_pos * pathArray[j].length())).transform(m)
                electron.center(p.x, p.y)
            }).loop());
        }
    }

    // Wall grid
    canvasU2.polyline([[40,20], [40, 420], [180,560]]).fill("none").stroke({width:5, color: "#24252A"});
    canvasU2.polyline([[120,20], [120,420], [260,560]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasU2.polyline([[200,20], [200,420], [340,560]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasU2.polyline([[280,20], [280,420], [420,560]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasU2.polyline([[360,20], [360,420], [500,560]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });

    canvasU2.polyline([[40,100], [440,100], [580,240]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasU2.polyline([[40,180], [440,180], [580,320]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasU2.polyline([[40,260], [440,260], [580,400]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasU2.polyline([[40,340], [440,340], [580,480]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });

    canvasU2.polyline([[86.5,466.50], [486.5,466.50], [486.5,66.50]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasU2.polyline([[133,513], [533,513], [533,113]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });

    // Atoms
    let gradient = canvasU2.gradient('radial', function(add) {
        add.stop(0, 'red')
        add.stop(1, '#24252A')
    });

    let x = 40, y = 20;
    for (let i = 0; i < 6; i++)
    {
        for (let j = 0; j < 6; j++)
        {
            canvasU2.rect(atomWidth,atomWidth).center(x + (i*80),y+ (j*80)).radius(100).fill(gradient);
        }
    }

    x = 86.5;
    y = 466.5;
    for (let i = 0; i < 6; i++)
    {
        for (let j = 0; j < 3; j++)
        {
            canvasU2.rect(atomWidth,atomWidth).center(x + (i*80) + (j*46.5),y+ (j*46.5)).radius(100).fill(gradient);
        }
    }

    x = 486.5;
    y = 66.5;
    for (let i = 0; i < 6; i++)
    {
        for (let j = 0; j < 3; j++)
        {
            canvasU2.rect(atomWidth,atomWidth).center(x + (j*46.5),y + (j*46.5)).radius(100).fill(gradient);
        }
        y += 80;
    }

    // Right outter wall
    canvasU2.polyline([[440,20], [580,160], [580,560], [440, 420], [440,20]]).fill("#48494B").front();
    canvasU2.polyline([[440,20], [440, 420], [580,560]]).fill("none").stroke({width:5, color: "#24252A"}).front();
    // Source wiring
    canvasU2.polyline([[295,605], [295, 585], [15,585], [15,290], [50,290]]).fill("none").stroke({width:5, color: "#24252A"}).back();
    canvasU2.polyline([[350,605], [350, 585], [620,585], [620,290], [510,290]]).fill("none").stroke({width:5, color: "#24252A"}).front();
    // Minus sign
    canvasU2.line(15, 605, 35, 605).fill("none").stroke({width:6, color: "#24252A"});
    // Plus sign
    canvasU2.line(600, 605, 620, 605).fill("none").stroke({width:6, color: "#24252A"});
    canvasU2.line(610, 595, 610, 615).fill("none").stroke({width:6, color: "#24252A"});
}

function drawU3()
{
    runnerArray.forEach(c => c.unschedule());
    runnerArray = [];
    electronArray = [];
    pathArray = [];
    backgroundDiv.innerHTML = "";
    nadpisElement.innerHTML = "Pohyb elektrónov na rozhraní polovodičov s rozdielnou šírkou zakázaného pásma";

    const stateU3 = SVG()
        .addTo(backgroundDiv)
        .size(width, "100%")
        .viewbox(0, 0, width, height)
    const canvasU3 = stateU3.group().flip('y', height / 2);

    // Source
    canvasU3.group()//.flip('y', sourceH / 2);
    canvasU3.rect(100, 100).move(0,5).fill("none").stroke({width:5, color: "#24252A"}).x(5);
    canvasU3.rect(50, 20).move(7,85).fill("blue").back();
    canvasU3.rect(50, 20).move(54,85).fill("red").back();
    canvasU3.line(20,40, 90, 40).stroke({width:5, color: "#24252A"});
    canvasU3.line(20,35, 20, 45).stroke({width:5, color: "#24252A"});
    canvasU3.line(90,35, 90, 45).stroke({width:5, color: "#24252A"});
    canvasU3.line(55,40, 90, 75).stroke({width:5, color: "#24252A"});
    canvasU3.text("0").move(50,38).font(myFont).flip('y', sourceH / 2);
    canvasU3.text("U").move(50,82).font(myFont).flip('y', sourceH / 2);
    canvasU3.circle(10).center(85, 15).fill("#24252A");
    canvasU3.circle(10).center(30, 15).fill("#24252A");
    canvasU3.center(320,645)

    // Yellow
    // light: "#FFDF00"
    // dark:  "#FFBF00"

    // Green
    // light:   "#A1D044"
    // medium:  "#5DB42E"
    // dark:    "#205D26"
    //canvasU3.polyline([[0,0], [width,0], [width,height], [0, height], [0,0]]).fill("none").stroke({width:5, color: "#24252A"});
    canvasU3.polyline([[40,420], [110,490], [110,90], [40, 20]]).fill("#205D26"); // Left front wall
    canvasU3.polyline([[40,20], [180,160], [580,160], [440, 20], [40,20]]).fill("#A1D044").stroke({width:1, color: "#24252A"}); // Bottom wall
    canvasU3.polyline([[180,160], [180,560], [580,560], [580, 160]]).fill("#FFDF00").stroke({width:1, color: "#24252A"}); // Back wall
    canvasU3.polyline([[110,490], [180,560], [180,160], [110, 90]]).fill("#FFBF00"); // Left rear wall
    canvasU3.polyline([[110,90], [110,490], [510,490], [510, 90], [110,90]]).fill("#5DB42E").stroke({width:0.5, color: "#24252A"}); // Inner wall
    canvasU3.polyline([[40,20], [440,20], [440,420], [40, 420], [40,17.5]]).fill("none").stroke({width:1, color: "#24252A"});

    // Electron movement animation
    let electronGradient = canvasU3.gradient('radial', function(add) {
        add.stop(0, 'blue')
        add.stop(1, '#24252A')
    });

    // MAKE ELECTRONS AND PUSH THEM TO ONE ARRAY
    for (let j = 0; j < 12; j++)
    {
        for (let i = 0; i < 10; i++)
        {
            let offsetY = 0;
            if (i%2 === 0)
            {
                offsetY = 20;
            }
            let electron = canvasU3.group();
            electron.rect(electronWidth,electronWidth).center(80 + offsetY, 110 + (i*40)).radius(100).fill(electronGradient);
            electronArray.push(electron);

            runnerArray.push(electron.animate({
                duration: 5000,
                delay: (j * 412),
                when: "now",
            }).ease('-').center(520 + offsetY, 110 + (i*40)).loop());
        }
    }
    canvasU3.polyline([[40,420], [110,490], [110,90], [40, 20]]).fill("#205D26"); // Left front wall to cover electrons

    //
    canvasU3.polyline([[40,20], [40, 420], [180,560]]).fill("none").stroke({width:5, color: "#24252A"});
    canvasU3.polyline([[110,490], [510, 490]]).fill("none").stroke({width:5, color: "#24252A"});

    // Wall grid
    canvasU3.polyline([[120,20], [120,420], [260,560]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasU3.polyline([[200,20], [200,420], [340,560]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasU3.polyline([[280,20], [280,420], [420,560]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasU3.polyline([[360,20], [360,420], [500,560]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });

    canvasU3.polyline([[40,100], [440,100], [580,240]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasU3.polyline([[40,180], [440,180], [580,320]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasU3.polyline([[40,260], [440,260], [580,400]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasU3.polyline([[40,340], [440,340], [580,480]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });

    canvasU3.polyline([[86.5,466.50], [486.5,466.50], [486.5,66.50]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });
    canvasU3.polyline([[133,513], [533,513], [533,113]]).fill("none").stroke({width:1, color: '#24252A', dasharray: '12,8' });

    // Atoms
    let atomGradient = canvasU3.gradient('radial', function(add) {
        add.stop(0, 'red')
        add.stop(1, '#24252A')
    });

    let x = 40, y = 20;
    for (let i = 0; i < 6; i++)
    {
        for (let j = 0; j < 6; j++)
        {
            canvasU3.rect(atomWidth,atomWidth).center(x + (i*80),y+ (j*80)).radius(100).fill(atomGradient);
        }
    }

    x = 86.5;
    y = 466.5;
    for (let i = 0; i < 6; i++)
    {
        for (let j = 0; j < 3; j++)
        {
            canvasU3.rect(atomWidth,atomWidth).center(x + (i*80) + (j*46.5),y+ (j*46.5)).radius(100).fill(atomGradient);
        }
    }

    x = 486.5;
    y = 66.5;
    for (let i = 0; i < 6; i++)
    {
        for (let j = 0; j < 3; j++)
        {
            canvasU3.rect(atomWidth,atomWidth).center(x + (j*46.5),y + (j*46.5)).radius(100).fill(atomGradient);
        }
        y += 80;
    }

    // Right outter wall
    canvasU3.polyline([[440,20], [580,160], [580,560], [440, 420], [440,20]]).fill("#48494B");
    canvasU3.polyline([[440,20], [440, 420], [580,560]]).fill("none").stroke({width:5, color: "#24252A"});
    // Source wiring
    canvasU3.polyline([[295,605], [295, 585], [15,585], [15,290], [50,290]]).fill("none").stroke({width:5, color: "#24252A"}).back();
    canvasU3.polyline([[350,605], [350, 585], [620,585], [620,290], [510,290]]).fill("none").stroke({width:5, color: "#24252A"}).front();
    // Minus sign
    canvasU3.line(15, 605, 35, 605).fill("none").stroke({width:6, color: "#24252A"});
    // Plus sign
    canvasU3.line(600, 605, 620, 605).fill("none").stroke({width:6, color: "#24252A"});
    canvasU3.line(610, 595, 610, 615).fill("none").stroke({width:6, color: "#24252A"});
}

function playAnimation() {runnerArray.forEach(c => c.timeline().play());}
function pauseAnimation() {runnerArray.forEach(c => c.timeline().pause());}