import React from 'react';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import '../Particles/background.css'

const Background = () => {
        const particlesInit = useCallback(async (engine) => {
            await loadFull(engine);
        }, []);
    
        const particlesLoaded = useCallback(async (container) => {
        }, []);

        const particleColors = ["#FFF", "#ff4d5a", "#FFF"];
    
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
                                    mode: "repulse",
                                },
                            },
                            modes: {
                                push: {
                                    distance: 400,
                                    line_linked: {
                                        opacity: 0.7
                                    }
                                },
                                repulse: {
                                    distance: 120,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            number: {
                                density: {
                                    enable: true,
                                    area: 1000,
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
                                speed: 0.8,
                                direction: "none",
                                random: false,
                                straight: false,
                            },
                            links: {
                                enable: true,
                                color: "#ffffff",
                                distance: 150,
                                opacity: 0.7,
                                width: 0.08,
                            },
                        },
                        detectRetina: true,
                    }}
                />

        )
    }
    
export default Background;