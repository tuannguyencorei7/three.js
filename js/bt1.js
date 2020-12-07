var bt1 = function () {
    let scene, camera, renderer;

    let createGeometry = function () {
        let geo = new THREE.TorusGeometry(5, 2, 10, 12);
        let mat = new THREE.MeshNormalMaterial();

        torus = new THREE.Mesh(geo, mat);
        scene.add(torus);
    };

    // initiallize scene, camera, objects and renderer
    let init = function () {
        // create the scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);
        // create an locate the camera
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 20;
        createGeometry();
        // create the renderer   
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
    };

    let ADD = 0.02;
    let mainLoop = function () {
        torus.rotation.x += ADD;
        torus.rotation.x += ADD;

        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    };

    ///////////////////////////////////////////////
    init();
    mainLoop();
}
