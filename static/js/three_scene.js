import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

class GlobeScene {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        // Scene setup
        this.scene = new THREE.Scene();
        
        // Camera
        this.camera = new THREE.PerspectiveCamera(60, this.container.clientWidth / this.container.clientHeight, 0.1, 100);
        this.camera.position.z = 6;

        // Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        this.scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(10, 10, 5);
        this.scene.add(dirLight);

        const pointLight1 = new THREE.PointLight(0xE0AAFF, 0.4);
        pointLight1.position.set(-5, -5, -5);
        this.scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0x9D4EDD, 0.3);
        pointLight2.position.set(5, 5, 10);
        this.scene.add(pointLight2);

        // Materials setup
        const knotMaterial = new THREE.MeshStandardMaterial({
            color: 0x7B2CBF,
            roughness: 0.2,
            metalness: 0.9,
            emissive: 0x4a1080,
            emissiveIntensity: 0.3
        });

        // The central animated sphere (torus knot proxy)
        const knotGeometry = new THREE.TorusKnotGeometry(1, 0.35, 128, 32, 2, 3);
        this.knot = new THREE.Mesh(knotGeometry, knotMaterial);
        this.knot.scale.set(2.2, 2.2, 2.2);
        
        // The outer glowing orb
        const glowGeometry = new THREE.SphereGeometry(1, 32, 32);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: 0x7B2CBF,
            transparent: true,
            opacity: 0.04
        });
        this.glow = new THREE.Mesh(glowGeometry, glowMaterial);
        this.glow.scale.set(3.5, 3.5, 3.5);

        // Group to float
        this.group = new THREE.Group();
        this.group.add(this.knot);
        this.group.add(this.glow);
        this.scene.add(this.group);

        // Resize handler
        window.addEventListener('resize', this.onWindowResize.bind(this));

        // Start animation loop
        this.clock = new THREE.Clock();
        this.animate();
    }

    onWindowResize() {
        if (!this.container || !this.camera || !this.renderer) return;
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));

        const t = this.clock.getElapsedTime();

        // Rotate knot
        if (this.knot) {
            this.knot.rotation.x = t * 0.15;
            this.knot.rotation.y = t * 0.2;
        }

        // Pulse glow
        if (this.glow) {
            const scale = 3.5 * (1 + Math.sin(t * 0.8) * 0.1);
            this.glow.scale.set(scale, scale, scale);
        }

        // Float entire group
        if (this.group) {
            this.group.position.y = Math.sin(t * 1.5) * 0.2;
        }

        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    new GlobeScene('canvas-container');
});
