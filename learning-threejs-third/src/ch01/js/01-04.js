function init() {
	// 三维动画状态
	const stats = initStats();

	// 创建创景
	const scene = new THREE.Scene();
	// 创建相机
	const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
	// 创建渲染器
	const renderer = new THREE.WebGLRenderer();

	// 设置渲染器的背景颜色和大小
	renderer.setClearColor(new THREE.Color(0x000000));
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMap.enabled = true;


	// 创建平面
	const planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
	const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
	const plane = new THREE.Mesh(planeGeometry, planeMaterial);
	// 设置平面的旋转角度和位置
	plane.rotation.x = -0.5 * Math.PI;
	plane.position.x = 15;
	plane.position.y = 0;
	plane.position.z = 0;
	// 添加平面到场景
	scene.add(plane);

	// 创建立方体
	const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
	const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
	const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
	cube.castShadow = true;
	// 设置立方体的位置
	cube.position.x = -4;
	cube.position.y = 4;
	cube.position.z = 0;
	// 添加立方体到场景
	scene.add(cube);

	// 创建球体
	const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
	const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x7777ff });
	const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
	// 设置球体的位置
	sphere.position.x = 20;
	sphere.position.y = 0;
	sphere.position.z = 2;
	sphere.castShadow = true;
	// 添加立方体、球体和平面到场景
	scene.add(sphere);


	//  设置相机的位置
	camera.position.x = -30;
	camera.position.y = 40;
	camera.position.z = 30;
	camera.lookAt(scene.position);

	// 添加光源
	const ambienLight = new THREE.AmbientLight(0x353535);
	scene.add(ambienLight);

	// 添加光源
	const spotLight = new THREE.SpotLight(0xffffff);
	spotLight.position.set(-10, 20, -5);
	spotLight.castShadow = true;
	scene.add(spotLight);

	// 添加到页面
	document.getElementById('webgl-output').appendChild(renderer.domElement);

	let step = 0;
	renderScene();

	function renderScene() {
		stats.update();

		// 旋转立方体
		cube.rotation.x += 0.02;
		cube.rotation.y += 0.02;
		cube.rotation.z += 0.02;

		// 旋转球体
		step += 0.04;
		sphere.position.x = 20 + (10 * (Math.cos(step)));
		sphere.position.y = 2 + (10 * Math.abs(Math.sin(step)));

		// 渲染动画
		requestAnimationFrame(renderScene);
		renderer.render(scene, camera);
	}
}
