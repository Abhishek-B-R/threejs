import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import Lucario from "../components/Lucario";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import Target from "../components/Target";
import HeroCamera from "../components/HeroCamera";

export default function Hero() {
    // const x = useControls({
    //     "scale": {
    //         value: 0.08,
    //         min: 0,
    //         max: 10
    //     },
    //     "positionX": {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     "positionY": {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     "positionZ": {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     "rotationX": {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     "rotationY": {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     "rotationZ": {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     }
    // })
    const isMobile = useMediaQuery({maxWidth: 768});
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="text-2xl font-generalsans font-medium text-center">Hi, I am Abhishek <span className="waving-hand">👋</span></p>
                <p className="text-3xl text-gray-400 font-bold text-center">Building Products and Brands</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                {/* <Leva/> */}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0,0,30]}/>
                        <HeroCamera isMobile={isMobile} >
                            <Lucario 
                                // scale={0.08}
                                scale={isMobile?5:6}
                                position={[1,-4.5,1.3]} 
                                rotation={[3.4,3.5,3.1]} 
                            />
                        </HeroCamera>
                        <group>
                            <Target position={[isMobile?-4:-9,isMobile?-1.3:1,0]} rotation={[0,1,0]} scale={isMobile?0.75:1.5 }/>
                        </group>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
};
