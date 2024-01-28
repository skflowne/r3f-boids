import { Canvas } from "@react-three/fiber"
import "./App.css"
import { Suspense } from "react"
import { OrbitControls, Stats } from "@react-three/drei"
import Model from "./components/Model"

function App() {
    return (
        <>
            <Canvas camera={{ position: [0, 0, -10] }}>
                <Stats />
                <Suspense fallback={null}>
                    <ambientLight intensity={1} />
                    <OrbitControls />
                    <Model path="/raven/scene.gltf" meshProps={{ position: [-45, 0, 0], scale: 0.02 }} />
                    <Model path="/death-row/scene.gltf" meshProps={{ position: [45, 0, 0], scale: 1 }} />
                    <Model path="/low-poly/scene.gltf" meshProps={{ position: [0, 0, 0], scale: 1 }} />
                    <axesHelper args={[10]} />
                </Suspense>
            </Canvas>
        </>
    )
}

export default App
