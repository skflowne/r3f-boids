import { MeshProps, useLoader } from "@react-three/fiber"
import { useEffect } from "react"
import { PerspectiveCamera } from "three"
import { GLTFLoader } from "three/examples/jsm/Addons.js"

export default function Model({ path, meshProps }: { path: string; meshProps?: MeshProps }) {
    const model = useLoader(GLTFLoader, path)

    useEffect(() => {
        if (!model) return
        console.log("model loaded", model.scene)
        const camera = model.scene.getObjectByName("PerspectiveCamera") as PerspectiveCamera
        if (camera) {
            console.log("Camera position:", camera.position.toArray())
            console.log("Camera fov:", camera.fov)
        }
    }, [model])

    return (
        <mesh {...meshProps}>
            <primitive object={model.scene} />
        </mesh>
    )
}
