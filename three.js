const myCanvas = document.getElementById("myCanvas");

const init = () =>{

    const scene = new THREE.Scene();

    //camera///////////////////////////////////////////////////////////////////////////////////
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100000);
    camera.position.set(0,3000,3300);
    camera.lookAt(new THREE.Vector3(0,0,0))
    //////////////////////////////////////////////////////////////////////////////////////////////

    const control = new THREE.OrbitControls(camera, myCanvas);

    const sunGeometry = new THREE.SphereGeometry(100,32,50);
    const sunMaterial = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load("./sun.jpg"),
        side: THREE.DoubleSide,
    });

    const mercuryGeometry = new THREE.SphereGeometry(6,32,50);
    const mercuryMaterial = new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load("./mercury.jpg"),
        side: THREE.DoubleSide,
    });

    const venusGeometry = new THREE.SphereGeometry(12,32,50);
    const venusMaterial = new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load("./venus_atmosphere.jpg"),
        side: THREE.DoubleSide,
    });

    const earthGeometry = new THREE.SphereGeometry(12,32,50);

    const earthMaterial = new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load("./earth.jpg"),
        side: THREE.DoubleSide,
    });

    const moonGeometry = new THREE.SphereGeometry(4,32,50);

    const moonMaterial = new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load("./moon.jpg"),
        side: THREE.DoubleSide,
    });

    const marsGeometry = new THREE.SphereGeometry(6,32,50);
    const marsMaterial = new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load("./mars.jpg"),
        side: THREE.DoubleSide,
    });

    const jupiterGeometry = new THREE.SphereGeometry(24,32,50);
    const jupiterMaterial = new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load("./jupiter.jpg"),
    side: THREE.DoubleSide,
    });

    const satrunGeometry = new THREE.SphereGeometry(16,32,50);
    const satrunMaterial = new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load("./saturn.jpg"),
        side: THREE.DoubleSide,
    });

    const Ring = new THREE.TorusGeometry(32,4,2,1000);
    const satrunRingMaterial = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load("./2k_saturn_ring.png"),
        side: THREE.DoubleSide,
    });

    const uranusGeometry = new THREE.SphereGeometry(12,32,50);
    const uranusMaterial = new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load("./uranus.jpg"),
        side: THREE.DoubleSide,
    });

    const neptuneGeometry = new THREE.SphereGeometry(12,32,50);
    const neptuneMaterial = new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load("./neptune.jpg"),
        side: THREE.DoubleSide,
    })

    const backGroundGeometry = new THREE.SphereGeometry(10000,32,50);
    const backGroundMaterial = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load("./2k_stars_milky_way.jpg"),
        side: THREE.DoubleSide,
    })
    
    const mercury = new THREE.Mesh(mercuryGeometry,mercuryMaterial);
    const venus = new THREE.Mesh(venusGeometry,venusMaterial);
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    const moon = new THREE.Mesh(moonGeometry,moonMaterial);
    const mars = new THREE.Mesh(marsGeometry, marsMaterial);
    const jupiter = new THREE.Mesh(jupiterGeometry,jupiterMaterial);
    const sun = new THREE.Mesh(sunGeometry,sunMaterial);
    const saturn = new THREE.Mesh(satrunGeometry,satrunMaterial);
    const saturnRing = new THREE.Mesh(Ring,satrunRingMaterial);
    const uranus = new THREE.Mesh(uranusGeometry,uranusMaterial);
    const neptune = new THREE.Mesh(neptuneGeometry,neptuneMaterial);
    const backGround = new THREE.Mesh(backGroundGeometry,backGroundMaterial);

    //shadow////////////////////////////////////////////////////////////////////////////////
    earth.castShadow = true;
    earth.recieveShadow = true;
    moon.castShadow = true;
    moon.recieveShadow = true;
    saturn.castShadow = true;
    saturn.recieveShadow = true;
    ///////////////////////////////////////////////////////////////////////////////////

    scene.add(mercury);
    scene.add(venus);
    scene.add(earth);
    scene.add(moon);
    scene.add(mars);
    scene.add(jupiter);
    scene.add(sun);
    scene.add(saturn);
    scene.add(saturnRing);
    scene.add(uranus);
    scene.add(neptune);
    scene.add(backGround);
    scene.background = new THREE.TextureLoader().load("./2k_stars_milky_way.jpg");

    //light//////////////////////////////////////////////////////////////////////////////
    const sunLight = new THREE.PointLight(0xffffff, 3, 0);
    sunLight.position.set(0,0,0);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1000; 
    sunLight.shadow.mapSize.height = 1000; 
    sunLight.shadow.camera.near = 0.5; 
    sunLight.shadow.camera.far = 500;
    scene.add(sunLight);

    const ambient = new THREE.AmbientLight(0x222222);
    scene.add(ambient);

    
    // const shadowHelper = new THREE.CameraHelper(sunLight.shadow.camera);
    // scene.add(shadowHelper);
    
    ///////////////////////////////////////////////////////////////////////////////////
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#myCanvas"),
        antialias: true,
    })

    let radius = 30;
    let radian = 0;
    const tick = () =>{

        sun.rotation.y += 0.009;

        mercury.position.x = radius*Math.cos(radian/0.25)*4;
        mercury.position.z = radius*Math.sin(radian/0.25)*4;
        mercury.rotation.y += 0.035; 

        venus.position.x = radius*Math.cos(radian/0.6)*6;
        venus.position.z = radius*Math.sin(radian/0.6)*6;
        venus.rotation.y += 0.03;

        earth.position.x = radius*Math.cos(radian)*8;
        earth.position.z = radius*Math.sin(radian)*8;
        earth.rotation.y += 0.02;

        moon.position.x = radius*Math.cos(radian*5)/2 + earth.position.x;
        moon.position.z = radius*Math.sin(radian*5)/2 + earth.position.z;
        moon.rotation.y += 0.01;

        mars.position.x = radius*Math.cos(radian/1.8)*12;
        mars.position.z = radius*Math.sin(radian/1.8)*12;
        mars.rotation.y += 0.02;

        jupiter.position.x = radius*Math.cos(radian/11)*25;
        jupiter.position.z = radius*Math.sin(radian/11)*25;
        jupiter.rotation.y += 0.04;

        saturn.position.x = radius*Math.cos(radian/29)*45;
        saturn.position.z = radius*Math.sin(radian/29)*45;

        saturnRing.position.x = radius*Math.cos(radian/29)*45;
        saturnRing.position.z = radius*Math.sin(radian/29)*45;
        saturnRing.rotation.x = 70;

        uranus.position.x = radius*Math.cos(radian/84)*65;
        uranus.position.z = radius*Math.sin(radian/84)*65;
        uranus.rotation.y += 0.01;

        neptune.position.x = radius*Math.cos(radian/164)*85;
        neptune.position.z = radius*Math.sin(radian/164)*85;
        neptune.rotation.y += 0.01;

        radian -= 0.0035

        renderer.render(scene, camera);
        requestAnimationFrame(tick);
    }
    tick();

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;renderer.shadowMap.type = THREE.PCFSoftShadowMap;
} 

window.addEventListener("load",init);