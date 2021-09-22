import * as THREE from "three";
import fragment from "./shader/fragment.glsl";
import vertex from "./shader/vertex.glsl";
// import * as dat from "dat.gui";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Sketch {
    constructor(selector) {
        this.scene = new THREE.Scene();
        

        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.width, this.height);

        this.container = document.getElementById("container");
        this.container.appendChild(this.renderer.domElement);

        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.camera.position.set(0, 0, 2);
        this.controls.update();
        this.time = 0;

        this.paused = false;
        this.materials = []
        this.meshes = []

        this.settings();
        this.setupResize();

        this.addObjects();
        this.resize();
        this.render();
        this.handleImages()
    }

    handleImages() {
        let images = [...document.querySelectorAll('img')]
        images.forEach((im, i) => {
            let mat = this.material.clone()
            this.materials.push(mat)
            mat.wireframe = false
            mat.uniforms.texture1.value = new THREE.Texture(im)
            mat.uniforms.texture1.value.needsUpdate = true
            let geo = new THREE.PlaneBufferGeometry(1.7, 1, 20, 20)
            let mesh = new THREE.Mesh(geo, mat)
            mesh.position.y = -(i*1.2)
            mesh.rotation.y = -0.5;
            this.meshes.push(mesh)
            this.scene.add(mesh)
        })
    }

    settings() {
        let that = this;
        this.settings = {
            progress: 0,
            angle: 0.25
        };
        // this.gui = new dat.GUI();
        // // this.gui.add(this.settings, "progress", -1, 2, 0.01);
        // this.gui.add(this.settings, "progress", 0, 1, 0.01);
        // this.gui.add(this.settings, "angle", 0, 3.1415, 0.01);
    }

    setupResize() {
        window.addEventListener("resize", this.resize.bind(this));
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;

        this.imageAspect = 853 / 1288;
        let a1, a2;
        if (this.height / this.width > this.imageAspect) {
            a1 = (this.width / this.height) * this.imageAspect
            a2 = 1
        }
        else {
            a1 = 1;
            a2 = (this.width / this.height) / this.imageAspect
        }

        this.material.uniforms.resolution.value.x = this.width;
        this.material.uniforms.resolution.value.y = this.height;
        this.material.uniforms.resolution.value.z = a1;
        this.material.uniforms.resolution.value.w = a2;
        this.camera.updateProjectionMatrix();
    }

    addObjects() {
        let that = this;
        this.geometry = new THREE.PlaneBufferGeometry(1, 1, 1, 1);
        this.material = new THREE.ShaderMaterial({
            extensions: {
                derivatives: "#extension GL_OES_standard_derivatives : enable"
            },
            side: THREE.DoubleSide,
            uniforms: {
                time: { type: "f", value: 0 },
                resolution: { type: "v4", value: new THREE.Vector4() },
                texture1: {type: 't', value: null},
                uvRate1: {
                    value: new THREE.Vector2(1, 1)
                }
            },
            vertexShader: vertex,
            fragmentShader: fragment
        });
        // this.plane = new THREE.Mesh(this.geometry, this.material)
        // this.scene.add(this.plane)
    }

    createMesh(o) {
        let material = this.material.clone();
        let texture = new THREE.Texture(o.image);
        texture.needsUpdate = true;
        // image cover
        let imageAspect = o.iHeight / o.iWidth;
        let a1;
        let a2;
        if (o.height / o.width > imageAspect) {
            a1 = (o.width / o.height) * imageAspect;
            a2 = 1;
        } else {
            a1 = 1;
            a2 = o.height / o.width / imageAspect;
        }
        texture.minFilter = THREE.LinearFilter;
        material.uniforms.resolution.value.x = o.width;
        material.uniforms.resolution.value.y = o.height;
        material.uniforms.resolution.value.z = a1;
        material.uniforms.resolution.value.w = a2;
        material.uniforms.progress.value = 0;
        material.uniforms.angle.value = 0.3;

        material.uniforms.texture1.value = texture;
        material.uniforms.texture1.value.needsUpdate = true;

        let mesh = new THREE.Mesh(this.geometry, material);

        mesh.scale.set(o.width, o.height, o.width / 2);

        return mesh;
    }

    stop() {
        this.paused = true;
    }

    play() {
        this.paused = false;
        this.render();
    }

    render() {
        if (this.paused) return;
        this.time += 0.05;
        // this.material.uniforms.time.value = this.time
        this.controls.update();
        this.material.uniforms.time.value = this.time
        if (this.materials){
            this.materials.forEach(m => {
                m.uniforms.time.value = this.time
            })
        }
        requestAnimationFrame(this.render.bind(this))
        this.renderer.render(this.scene, this.camera);
    }
}