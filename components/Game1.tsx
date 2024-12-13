"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const Game1 = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#ffffff");
    scene.fog = new THREE.Fog(0xffffff, 1, 25);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const controls = new OrbitControls(camera, renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const light = new THREE.DirectionalLight(0xffffff, 0.4);
    light.position.set(10, 20, 20);
    light.castShadow = true;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 50;
    scene.add(light);

    // Game Objects
    class Box extends THREE.Mesh {
      width: number;
      height: number;
      depth: number;
      velocity: { x: number; y: number; z: number };
      gravity: number;
      zAcceleration: boolean;

      constructor({
        width,
        height,
        depth,
        color,
        velocity = { x: 0, y: 0, z: 0 },
        position = { x: 0, y: 0, z: 0 },
        zAcceleration = false,
      }: {
        width: number;
        height: number;
        depth: number;
        color: string;
        velocity?: { x: number; y: number; z: number };
        position?: { x: number; y: number; z: number };
        zAcceleration?: boolean;
      }) {
        super(
          new THREE.BoxGeometry(width, height, depth),
          new THREE.MeshPhysicalMaterial({
            color,
            roughness: 0.7,
            metalness: 0,
            clearcoat: 0.3,
            clearcoatRoughness: 0.5,
          })
        );
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.velocity = velocity;
        this.gravity = -0.02;
        this.zAcceleration = zAcceleration;

        this.position.set(position.x, position.y, position.z);
      }

      update(ground: Box) {
        this.position.x += this.velocity.x;
        this.position.z += this.velocity.z;

        if (this.zAcceleration) this.velocity.z += 0.001;

        this.velocity.y += this.gravity;
        this.position.y += this.velocity.y;

        // Ground collision
        if (this.position.y - this.height / 2 < ground.position.y + ground.height / 2) {
          this.velocity.y *= -0.8;
          this.position.y = ground.position.y + ground.height / 2 + this.height / 2;
        }
      }
    }

    const ground = new Box({
      width: 5,
      height: 0.5,
      depth: 50,
      color: "#ffffff",
      position: { x: 0, y: -2, z: 0 },
    });
    ground.receiveShadow = true;
    scene.add(ground);

    const player = new Box({
      width: 1,
      height: 1,
      depth: 1,
      color: "#ff0000",
      velocity: { x: 0, y: -0.1, z: 0 },
    });
    player.castShadow = true;
    scene.add(player);

    const enemies: Box[] = [];
    let spawnRate = 30;

    const animate = () => {
      player.update(ground);
      enemies.forEach((enemy) => enemy.update(ground));
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "500px" }} />;
};

export default Game1;
