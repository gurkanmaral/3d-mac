import {useEffect, useRef} from 'react'

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
       if(videoRef.current) {
           videoRef.current.playbackRate = 0.8
       }
    },[])
    return (
        <section id="hero">
            <h1>
                Macbook Pro
            </h1>
            <img
            src="/title.png"
            alt="macbook"
            />
            <video
                ref={videoRef}
                src={"/videos/hero.mp4"} autoPlay={true} muted playsInline />

            <button>
                Buy
            </button>
            <p>
                From $1599 or $133/mo for 12 months
            </p>
        </section>
    )
}
export default Hero
