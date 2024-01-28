import { Canvas } from "@react-three/fiber"
import "./App.css"
import { Suspense, useMemo } from "react"
import { CameraControls, FirstPersonControls, FlyControls, OrbitControls, Stats } from "@react-three/drei"
import { Scene } from "three"
import Boids from "./components/Boids"

function App() {
    const scene = useMemo(() => new Scene(), [])

    return (
        <>
            <Canvas scene={scene} camera={{ position: [0, 0, -10], fov: 60 }}>
                <Stats />
                <Suspense fallback={null}>
                    <ambientLight intensity={1} />
                    <Boids scene={scene} count={10} />
                    <CameraControls />

                    <axesHelper args={[10]} />
                </Suspense>
            </Canvas>
        </>
    )
}

export default App
