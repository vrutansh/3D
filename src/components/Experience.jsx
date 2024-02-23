import React from 'react'
import { OrbitControls } from '@react-three/drei'
function Experience() {
    
  return (
    <>
      <OrbitControls/>
     <mesh>
        <boxGeometry/>
        <meshNormalMaterial/>
     </mesh>
    </>
  )
}

export default Experience