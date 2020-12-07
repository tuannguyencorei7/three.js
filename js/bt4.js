
var bt4 = function () {
    var scene, camera, renderer;
    var createGeometry = function () {
        //create texture material
        var Standardmaterial = new THREE.MeshStandardMaterial({ color: 0x7fc5f9, side: THREE.DoubleSide, emissive: 0x25673d, emissiveIntensity: 0.5, metalness: 1, roughness: 1 });
        var LambertMaterial = new THREE.MeshLambertMaterial({ color: 0x7fc5f9, side: THREE.DoubleSide, emissive: 0x25673d, emissiveIntensity: 0.5});
        var PhongMaterial = new THREE.MeshPhongMaterial({ color: 0x7fc5f9, side: THREE.DoubleSide, emissive: 0x25673d, emissiveIntensity: 0.5, shininess: 300, specular: 0xffffff });

        //create Box shape
        var BoxGeometry = new THREE.BoxGeometry(3, 3, 3);

        StandardBox = new THREE.Mesh(BoxGeometry, Standardmaterial);
        StandardBox.position.x = -15;
        StandardBox.position.y = 7;

        LambertBox = new THREE.Mesh(BoxGeometry, LambertMaterial);
        LambertBox.position.x = -15;
        LambertBox.position.y = 0;

        PhongBox = new THREE.Mesh(BoxGeometry, PhongMaterial);
        PhongBox.position.x = -15;
        PhongBox.position.y = -7;

        //create Sphere shape
        var SphereGeometry = new THREE.SphereGeometry(3, 30, 30);
        StandardSphere = new THREE.Mesh(SphereGeometry, Standardmaterial);
        StandardSphere.position.x = 0;
        StandardSphere.position.y = 7;

        LambertSphere = new THREE.Mesh(SphereGeometry, LambertMaterial);
        LambertSphere.position.x = 0;
        LambertSphere.position.y = 0;

        PhongSphere = new THREE.Mesh(SphereGeometry, PhongMaterial);
        PhongSphere.position.x = 0;
        PhongSphere.position.y = -7;

        //Cone Sphere shape
        var ConeGeometry = new THREE.ConeGeometry(3, 4, 20, 1);

        StandardCone = new THREE.Mesh(ConeGeometry, Standardmaterial);
        StandardCone.position.x = 15;
        StandardCone.position.y = 7;

        LambertCone = new THREE.Mesh(ConeGeometry, LambertMaterial);
        LambertCone.position.x = 15;
        LambertCone.position.y = 0;

        PhongCone = new THREE.Mesh(ConeGeometry, PhongMaterial);
        PhongCone.position.x = 15;
        PhongCone.position.y = -7;


        // add obj to scene
        scene.add(StandardBox);
        scene.add(LambertBox);
        scene.add(PhongBox);

        scene.add(StandardSphere);
        scene.add(LambertSphere);
        scene.add(PhongSphere);

        scene.add(StandardCone);
        scene.add(LambertCone);
        scene.add(PhongCone);
    };

    // initiallize scene, camera, objects and renderer
    var init = function () {
        // create the scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);
        // create an locate the camera
        camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 20;

        // light source
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        scene.add(directionalLight);

        createGeometry();
        // create the renderer   
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
    };

    var ADD = 0.02;
    // main animation loop - calls 50-60 times per second.
    var mainLoop = function () {
        StandardBox.rotation.x += ADD;
        StandardBox.rotation.y += ADD;
        LambertBox.rotation.x += ADD;
        LambertBox.rotation.y += ADD;
        PhongBox.rotation.x += ADD;
        PhongBox.rotation.x += ADD;

        StandardSphere.rotation.x += ADD;
        StandardSphere.rotation.y += ADD;
        LambertSphere.rotation.x += ADD;
        LambertSphere.rotation.y += ADD;
        PhongSphere.rotation.x += ADD;
        PhongSphere.rotation.y += ADD;

        StandardCone.rotation.x += ADD;
        StandardCone.rotation.y += ADD;
        LambertCone.rotation.x += ADD;
        LambertCone.rotation.y += ADD;
        PhongCone.rotation.x += ADD;
        PhongCone.rotation.y += ADD;
        


        // render scene & camera
        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    };

    ///////////////////////////////////////////////
    init();
    mainLoop();

}
