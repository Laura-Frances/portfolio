import React from 'react';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import '../Particles/background.css'

const Background = () => {
        const particlesInit = useCallback(async (engine) => {
            console.log(engine);
            await loadFull(engine);
        }, []);
    
        const particlesLoaded = useCallback(async (container) => {
            await console.log(container);
        }, []);

        const particleColors = ["#6A9955", "#B5CEA8", "#9CDCFE", "#CE9178", "#C586C0"];
    
        return (
                <Particles
                    id="tsparticles-home"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                   
                        fpsLimit: 50,
                        interactivity: {
                            detectsOn: "window",
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "bubble",
                                },
                            },
                            modes: {
                                push: {
                                    quantity: 5,
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            number: {
                                density: {
                                    enable: true,
                                    area: 900,
                                },
                                value: 100,
                            },
                            color: {
                                value: particleColors,
                            },
                            shape: {
                                type: "circle",
                            },
                            opacity: {
                                value: 1,
                            },
                            size: {
                                value: {
                                    min: 0,
                                    max: 2,
                                },
                            },
                            move: {
                                enable: true,
                                speed: 0.5,
                                direction: "none",
                                random: false,
                                straight: false,
                            },
                            links: {
                                enable: true,
                                color: "#ffffff",
                                distance: 150,
                                opacity: 0.3,
                                width: 0.1,
                            },
                        },
                        detectRetina: true,
                    }}
                />
           
        )
    }
    
export default Background;