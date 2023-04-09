function init() {
	const stats = initStats();

	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
	const renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0x000000));
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMap.enabled = true;

	const planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
	const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
	const plane = new THREE.Mesh(planGeometry, planeMaterial);
	plane.receiveShadow = true;

	plane.rotation.x = -0.5 * Math.PI;
	plane.position.x = 15;
	plane.position.y = 0;
	plane.position.z = 0;

	scene.add(plane);

	const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
	const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
	const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
	cube.castShadow = true;

	cube.position.x = -4;
	cube.position.y = 3;
	cube.position.z = 0;
	scene.add(cube);

}