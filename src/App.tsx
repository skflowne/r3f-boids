import { Canvas } from "@react-three/fiber"
import "./App.css"
import Box from "./Box"

function App() {
    return (
        <>
            <Canvas camera={{ position: [0, 0, 2] }}>
                <Box position={[-0.5, 0, 0]} scale={0.5} />
                <Box position={[0.5, 0, 0]} scale={0.5} />
            </Canvas>
        </>
    )
}

export default App
