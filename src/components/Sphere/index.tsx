import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
const Sphere = () => {
  const mountRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const scene = new THREE.Scene(  )
    const camera = new THREE.PerspectiveCamera(73, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true})
    camera.position.z = 2
    //const loader = new RGBELoader()
    const loader = new THREE.TextureLoader()
    let sphere: THREE.Mesh | undefined
    let cloudSphere: THREE.Mesh | undefined

    loader.load('/earth_daymap.jpg', function (texture) {
      const geometry = new THREE.SphereGeometry(1, 120, 120)
      const material = new THREE.MeshStandardMaterial({  
        roughness: 0.5,
        metalness: 0.5,
        map: texture,
        color: 0xa95eff,
      })

      sphere = new THREE.Mesh(geometry, material)
      sphere.castShadow = true
      sphere.rotateZ(0.8)
      scene.add(sphere)
    })
    

    new RGBELoader().load('/pure_sky.hdr', function (cloudTexture) {
      const cloudGeometry = new THREE.SphereGeometry(1.01, 120, 120) // slightly larger than the earth sphere
      const cloudMaterial = new THREE.MeshStandardMaterial({
        map: cloudTexture,
        roughness: 0.7,
        metalness: 0.5,
        color: 0xddd0ff,
        //emissive: 0xffffff,
        //color: 0xa95eff,
        transparent: true,
        opacity: 0.4, // adjust as needed
      })
    
      cloudSphere = new THREE.Mesh(cloudGeometry, cloudMaterial)
      scene.add(cloudSphere)
    })
    // const light = new THREE.PointLight(0xffffff, 200, 100)
    // light.position.set(0, 1, 0)
    // light.castShadow = true
    // scene.add(light)
    // ...

    const light = new THREE.DirectionalLight(0xffffff, 5) // white light
    light.position.set(0, 0.002, 0) // position the light above the scene
    scene.add(light)




      
    const animate = function () {
      requestAnimationFrame(animate)
      if (sphere) {
        //sphere.rotation.y += 0.001
        sphere.rotation.x += 0.001
        //sphere.rotation.z += 0.001
        
      }
      if (cloudSphere) {
        cloudSphere.rotation.x -= 0.0015 // adjust speed as needed
      }
      renderer.render(scene, camera)
     
    }

    renderer.setSize(window.innerWidth, window.innerHeight)


    mountRef?.current?.appendChild(renderer.domElement )

    const currentRef = mountRef?.current

    function resize() {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }


    // const onWheel = (event) => {
    //   event.preventDefault()
  
    //   // calculate zoom factor
    //   const zoomFactor = 1.1
    //   const direction = (event.deltaY < 0) ? 1 : -1
  
    //   // adjust camera's FOV and update projection matrix
    //   camera.fov = camera.fov * (direction > 0 ? 1 / zoomFactor : zoomFactor)
    //   camera.updateProjectionMatrix()
    // }

    //window.addEventListener('wheel', onWheel, { passive: false })

    window.addEventListener('resize', () => {
      resize()
    })
    animate()

    return () => {
      window.removeEventListener('resize', () => {
        resize()
      })
      //window.removeEventListener('wheel', onWheel)
      currentRef?.removeChild(renderer.domElement)
    }
      
    
  },[])
  return (
    // @ts-expect-error Description of why the ts-expect-error is necessary
    <div className='absolute left-0 w-full' ref={mountRef} />
  )
}

export default Sphere