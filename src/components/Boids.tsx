import { useFrame, useLoader } from "@react-three/fiber"
import { useEffect, useState } from "react"
import { Mesh, Scene, Vector3 } from "three"
import { GLTFLoader } from "three/examples/jsm/Addons.js"
import { randomInt } from "../utils/math"

export interface BoidsProps {
    scene: Scene
    count: number
}

const Boids = ({ scene, count }: BoidsProps) => {
    const model = useLoader(GLTFLoader, "/low-poly/scene.gltf")

    const direction = new Vector3(0, 0, 1)
    const speed = 1

    const [meshes, setMeshes] = useState<Mesh[]>([])
    const [directions, setDirections] = useState<Vector3[]>([])

    useEffect(() => {
        setMeshes(
            new Array(count).fill(0).map((_) => {
                const mesh = new Mesh()
                mesh.add(model.scene.clone())
                return mesh
            })
        )
    }, [model, count])

    useEffect(() => {
        scene.clear()

        let dirs: Vector3[] = []
        for (let i = 0; i < meshes.length; i++) {
            const mesh = meshes[i]
            mesh.position.set(randomInt(-10, 10), 0, randomInt(-10, 10))
            scene.add(mesh)
            dirs.push(new Vector3(randomInt(-1, 1), randomInt(-1, 1), randomInt(-1, 1)).normalize())
        }
        setDirections(dirs)
    }, [meshes])

    useFrame((_, delta) => {
        if (!meshes?.length) return
        meshes.forEach((mesh, i) => {
            mesh.lookAt(mesh.position.clone().addScaledVector(directions[i], 10))
            mesh.position.addScaledVector(directions[i], speed * delta)
        })
    })

    return null
}

export default Boids
