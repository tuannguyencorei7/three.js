
var bt2 = function () {
    var scene, camera, renderer, cube, sphere;


    var createGeometry = function () {
        var material = new THREE.MeshDepthMaterial();

        var geometry = new THREE.BoxGeometry(3, 2, 4);
        cube = new THREE.Mesh(geometry, material);
        cube.position.z = -10;
        cube.position.x = -5;
        cube.castShadow = true;

        geometry = new THREE.SphereGeometry(3, 30, 30);
        sphere = new THREE.Mesh(geometry, material);
        sphere.position.z = 10;
        sphere.position.x = 5;

        scene.add(cube);
        scene.add(sphere);
    };

    // set up the environment - 
    // initiallize scene, camera, objects and renderer
    var init = function () {
        // create the scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);

        // create an locate the camera
        camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 20;

        createGeometry();

        // create the renderer   
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

    };

    var ADD = 0.2;
    // main animation loop - calls 50-60 times per second.
    var mainLoop = function () {
        cube.position.z += ADD;
        sphere.position.z -= ADD;

        if (cube.position.z >= 20 || cube.position.z <= -16)
            ADD *= -1;

        if (sphere.position.z >= 10 || sphere.position.z <= 30)
            ADD *= +1;
        renderer.render(scene, camera);

        requestAnimationFrame(mainLoop);
    };

    ///////////////////////////////////////////////
    init();
    mainLoop();

}
