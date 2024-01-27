import { MeshProps, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh } from "three"

export default function Box(props: MeshProps) {
    const mesh = useRef<Mesh>(null!)

    useFrame((_, delta) => {
        if (mesh.current) mesh.current.rotation.y += 1 * delta
    })
    return (
        <mesh ref={mesh} {...props}>
            <boxGeometry />
            <meshBasicMaterial color={0x00ff00} wireframe />
        </mesh>
    )
}
