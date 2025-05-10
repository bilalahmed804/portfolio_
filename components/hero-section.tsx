"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene
    scene.background = new THREE.Color("#f8fafc")

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    cameraRef.current = camera
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    })
    rendererRef.current = renderer
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.5

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: new THREE.Color("#334155"),
      transparent: true,
      opacity: 0.8,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Create a sphere
    const geometry = new THREE.IcosahedronGeometry(1.5, 2)
    const material = new THREE.MeshBasicMaterial({
      color: "#1e293b",
      wireframe: true,
    })
    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      particlesMesh.rotation.x += 0.0005
      particlesMesh.rotation.y += 0.0005

      sphere.rotation.y += 0.002

      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return

      const width = window.innerWidth
      const height = window.innerHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()

      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)

      if (rendererRef.current) {
        rendererRef.current.dispose()
      }
    }
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-4">Assalamu Alaikum 👋</h1>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-800 mb-6">
            I'm <span className="text-slate-700">Bilal Ahmed</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 mb-8">A passionate frontend developer from Pakistan</p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="https://www.linkedin.com/in/bilal-ahmed-823897201/" target="_blank">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white border-slate-200 hover:bg-slate-100"
              >
                <Linkedin className="h-5 w-5 text-slate-700" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://github.com/bilalahmed804" target="_blank">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white border-slate-200 hover:bg-slate-100"
              >
                <Github className="h-5 w-5 text-slate-700" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="mailto:bilalahmed804@gmail.com">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white border-slate-200 hover:bg-slate-100"
              >
                <Mail className="h-5 w-5 text-slate-700" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
            <Link href="tel:03199244031">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white border-slate-200 hover:bg-slate-100"
              >
                <Phone className="h-5 w-5 text-slate-700" />
                <span className="sr-only">Phone</span>
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-slate-800 hover:bg-slate-700">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" className="border-slate-300">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-slate-700"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  )
}
