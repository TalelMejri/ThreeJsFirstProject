const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "blue" });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(100, aspect.width / aspect.height, 1, 2000);
camera.position.z = 3;
scene.add(camera);

const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);

// const clock = new THREE.Clock();

const animate = () => {
    // const elapsedTime = clock.getElapsedTime();
    mesh.rotation.x += 0.1;
    mesh.rotation.y += 0.1;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();
