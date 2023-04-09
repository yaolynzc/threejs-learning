function init() {
	// 创建创景
	const scene = new THREE.Scene();

	// 创建相机
	const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

	// 创建渲染器
	const renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(new THREE.Color(0x000000));
	renderer.setSize(window.innerWidth, window.innerHeight);

	// 添加坐标轴
	const axes = new THREE.AxesHelper(20);
	scene.add(axes);


	// 创建平面
	const planeGeometry = new THREE.PlaneGeometry(60, 20);
	const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xAAAAAA });
	const plane = new THREE.Mesh(planeGeometry, planeMaterial);

	// 设置平面的旋转角度和位置
	plane.rotation.x = -0.5 * Math.PI;
	plane.position.set(15, 0, 0);
	// 添加平面到场景
	scene.add(plane);

	// 创建立方体
	const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
	const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
	const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
	// 设置立方体的位置
	cube.position.set(-4, 3, 0);
	// 添加立方体到场景
	scene.add(cube);

	// 创建球体
	const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
	const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x7777ff, wireframe: true });
	const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
	// 设置球体的位置
	sphere.position.set(20, 4, 2);
	// 添加球体到场景
	scene.add(sphere);

	// 设置相机的位置
	camera.position.set(-30, 40, 30);
	camera.lookAt(scene.position);

	// 添加到页面
	document.getElementById('webgl-output').appendChild(renderer.domElement);

	// 渲染
	renderer.render(scene, camera);

}