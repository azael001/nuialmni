import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function XrAza() {

    const gltf = useLoader(GLTFLoader, '/model.gltf')
    return <primitive object={gltf.scene} />
}

export default XrAza;
