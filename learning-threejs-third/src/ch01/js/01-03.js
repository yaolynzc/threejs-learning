function init() {
	// 创建创景
	const scene = new THREE.Scene();

	// 创建相机
	const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

	// 创建渲染器
	const renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(new THREE.Color(0x000000));
	renderer.setSize(window.innerWidth, window.innerHeight);

	createTree(scene);

	// 创建立方体
	const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
	const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000, wireframe: false });
	const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
	cube.castShadow = true;

	// 设置立方体的位置
	cube.position.x = -4;
	cube.position.y = 2;
	cube.position.z = 0;

	// 创建球体
	const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
	const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x7777ff, wireframe: false });
	const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

	// 设置球体的位置
	sphere.position.x = 20;
	sphere.position.y = 4;
	sphere.position.z = 2;
	sphere.castShadow = true;

	// 创建平面
	const planeGeometry = new THREE.PlaneGeometry(60, 20);
	const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xAAAAAA });
	const plane = new THREE.Mesh(planeGeometry, planeMaterial);

	// 设置平面的旋转角度和位置
	plane.rotation.x = -0.5 * Math.PI;
	plane.position.set(15, 0, 0);
	plane.receiveShadow = true;

	// 添加立方体、球体和平面到场景
	scene.add(cube);
	scene.add(sphere);
	scene.add(plane);

	//  设置相机的位置
	camera.position.x = -30;
	camera.position.y = 40;
	camera.position.z = 30;
	camera.lookAt(scene.position);

	// 添加光源
	const spotLight = new THREE.SpotLight(0xffffff);
	spotLight.position.set(-40, 40, -15);
	spotLight.castShadow = true;
	spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
	spotLight.shadow.camera.far = 130;
	spotLight.shadow.camera.near = 40;
	scene.add(spotLight);

	const ambienLight = new THREE.AmbientLight(0x353535);
	scene.add(ambienLight);

	// 添加到页面
	document.getElementById('webgl-output').appendChild(renderer.domElement);

	// 渲染
	renderer.render(scene, camera);
}

// 创建一棵树
function createTree(scene) {
	const trunk = new THREE.CubeGeometry(1, 8, 1);
	const leaves = new THREE.SphereGeometry(4);

	const trunkMesh = new THREE.Mesh(trunk, new THREE.MeshLambertMaterial({ color: 0x8b4513 }));
	const leavesMesh = new THREE.Mesh(leaves, new THREE.MeshLambertMaterial({ color: 0x00ff00 }));

	// 设置位置
	trunkMesh.position.set(-10, 4, 0);
	leavesMesh.position.set(-10, 12, 0);

	trunkMesh.castShadow = true;
	trunkMesh.receiveShadow = true;
	leavesMesh.castShadow = true;
	leavesMesh.receiveShadow = true;

	scene.add(trunkMesh);
	scene.add(leavesMesh);

}