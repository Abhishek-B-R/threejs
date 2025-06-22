import Globe from "react-globe.gl";

export default function About() {
    return (
        <div className="min-h-screen w-full">
            <div className="max-w-40">
                <Globe 
                    height={500} 
                    width={500}
                    backgroundColor="rgba(0,0,0,0)"
                    backgroundImageOpacity={0.1}
                    showAtmosphere
                    showGraticules
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.jpg"
                    objectRotation={[2,0,0]}
                />
            </div>
        </div>
    )
};
