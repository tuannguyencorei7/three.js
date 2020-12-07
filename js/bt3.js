
var bt3 = function () {
    var createGeometry = function () {
        const cylinderGeometry = new THREE.CylinderGeometry(5, 5, 20, 32);
        const sphereGeometry = new THREE.SphereGeometry(3, 30, 30);

        //________________ Line ________________
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });

        cylinderLine = new THREE.Line(cylinderGeometry, lineMaterial);
        cylinderLine.position.z = -20;
        cylinderLine.position.x = -30;

        sphereLine = new THREE.Line(sphereGeometry, lineMaterial);
        sphereLine.position.z = -10;
        sphereLine.position.x = -15;

        scene.add(cylinderLine);
        scene.add(sphereLine);

        //________________ Dashed ________________
        const lineDashedMaterial = new THREE.LineDashedMaterial({ color: 0xffffff, linewidth: 2, dashSize: 1, gapSize: 1 });

        cylinderLineDashed = new THREE.Line(cylinderGeometry, lineDashedMaterial);
        cylinderLineDashed.position.z = -20;
        cylinderLineDashed.position.x = -5;
        cylinderLineDashed.computeLineDistances();

        sphereLineDashed = new THREE.Line(sphereGeometry, lineDashedMaterial);
        sphereLineDashed.position.z = -10;
        sphereLineDashed.position.x = 5;
        sphereLineDashed.computeLineDistances();

        scene.add(cylinderLineDashed);
        scene.add(sphereLineDashed);

        //________________ Point ________________
        const pointsMaterial = new THREE.PointsMaterial({ color: 0xffffff });

        cylinderPoints = new THREE.Points(cylinderGeometry, pointsMaterial);
        cylinderPoints.position.z = -20;
        cylinderPoints.position.x = 20;

        spherePoints = new THREE.Points(sphereGeometry, pointsMaterial);
        spherePoints.position.z = -10;
        spherePoints.position.x = 25;

        scene.add(cylinderPoints);
        scene.add(spherePoints);
    };


    // initiallize scene, camera, objects and renderer
    var init = function () {
        // create the scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);
        // create an locate the camera
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 15;
        createGeometry();
        // create the renderer   
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
    };

    var ADD = 0.02;
    // main animation loop - calls 50-60 times per second.
    var mainLoop = function () {
        // _____________ line basic __________
        cylinderLine.rotation.x += ADD;
        sphereLine.rotation.x += ADD;

        cylinderLine.rotation.y += ADD;
        sphereLine.rotation.y += ADD;

        // _____________ line dashed __________
        cylinderLineDashed.rotation.x += ADD;
        sphereLineDashed.rotation.x += ADD;

        cylinderLineDashed.rotation.y += ADD;
        sphereLineDashed.rotation.y += ADD;

        // _____________ line poi  nt __________
        cylinderPoints.rotation.x += ADD;
        spherePoints.rotation.x += ADD;

        cylinderPoints.rotation.y += ADD;
        spherePoints.rotation.y += ADD;

        // render scene & camera
        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    };

    ///////////////////////////////////////////////
    init();
    mainLoop();
}  
