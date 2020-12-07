var bt5 =  function () {
    var scene, camera, renderer;
    var fragments = [];
    var ADD = 0.02;
    const dt = 0.02;
    
    // fragment mat & move
    class Fragment {
        constructor(position, velocity, g) {
            this.velocity = velocity;
            this.velocity.multiplyScalar(dt);
   
            var material = new THREE.MeshPhongMaterial({
                            side: THREE.DoubleSide,
                            color: 0xffffff,
                            emissive: 0x9d0a00,
                            emissiveIntensity: 0.8,
                            shininess: 200,
                            specular: 0xfafafa,
                            vertexColors: true
                            });
            
            this.shape = new THREE.Mesh(g, material);
            this.shape.position.copy(position);
        }
        
        move() {
            this.shape.position.add(this.velocity);
            this.shape.rotation.x += ADD;
        }
    };
    
    var createTriangle = function(p1, p2, p3) {
        var geometry = new THREE.Geometry();
        geometry.vertices.push(p1, p2, p3);
        geometry.faces.push( new THREE.Face3(0, 1, 2));
        geometry.computeFaceNormals();
        geometry.computeVertexNormals();
        return geometry;
    };
    
    // create fragment
    var createGeometry = function() {
        var p1 = new THREE.Vector3(0, 1, 0);
        var p2 = new THREE.Vector3(1, 0, 1);
        var p3 = new THREE.Vector3(-1, 0, 1);
        var p4 = new THREE.Vector3(-1, 0, -1);
        var p5 = new THREE.Vector3(1, 0, -1);
        var p6 = new THREE.Vector3(0, -1, 0);
        
        // Push fragment 
        fragments.push(new Fragment(new THREE.Vector3(0, 0, 0), 
                    new THREE.Vector3(0, 0, 6), createTriangle(p4, p3, p6)));
        fragments.push(new Fragment(new THREE.Vector3(0, 0, 0),
                    new THREE.Vector3(-2, 4, 0), createTriangle(p4, p2, p1)));
        fragments.push(new Fragment(new THREE.Vector3(0, 0, 0), 
                    new THREE.Vector3(0, 5, -4), createTriangle(p1, p5, p6)));
        fragments.push(new Fragment(new THREE.Vector3(0, 0, 0), 
                    new THREE.Vector3(2, 3, 0), createTriangle(p3, p4, p1)));
        fragments.push(new Fragment(new THREE.Vector3(0, 0, 0), 
                    new THREE.Vector3(0, -5, 3), createTriangle(p1, p2, p6)));
        fragments.push(new Fragment(new THREE.Vector3(0, 0, 0), 
                    new THREE.Vector3(-4, -3, 0), createTriangle(p1, p4, p2)));
        fragments.push(new Fragment(new THREE.Vector3(0, 0, 0), 
                    new THREE.Vector3(0, -4, -4), createTriangle(p5, p6, p2)));
        fragments.push(new Fragment(new THREE.Vector3(0, 0, 0), 
                    new THREE.Vector3(3, -3, 0), createTriangle(p1, p3, p4)));
        
        fragments.forEach(f => scene.add(f.shape));  
    };
    
    // initiallize scene, camera, objects and renderer
    var init = function() {
        // create the scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);
        
        // create an locate the camera
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 20;
        // Light source
        var directionalLightUp = new THREE.DirectionalLight( 0xffffff);
        scene.add(directionalLightUp);
        
        createGeometry();
        // create the renderer   
        renderer = new THREE.WebGLRenderer();   
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        document.body.appendChild(renderer.domElement);
        
    };
   
    
    // main animation loop - calls 50-60 times per second.
    var mainLoop = function() { 
        fragments.forEach(f => f.move());
         
        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    };
    
    ///////////////////////////////////////////////
    init();
    mainLoop();
    
} 
   


       