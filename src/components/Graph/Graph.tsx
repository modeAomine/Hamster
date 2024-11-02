import React, { useState, useEffect } from "react";
import { GraphProps } from "../../types/GraphProps";
import jetpack from '../../static/5817323514a02be461bfb28eadbb0899.png';
import schedule_bg3 from '../../static/schedule-bg3.svg';
import schedule_bg4 from '../../static/schedule-bg4.svg';
import loading from '../../static/laoding.svg'
import './ui/Graph.css';

const Graph: React.FC<GraphProps> = ({ isLoading, multiplier }) => {
    const [isGameActive, setIsGameActive] = useState(false);
    const [progress, setProgress] = useState(0);
    const [debugMode, setDebugMode] = useState(false);

    useEffect(() => {
        if (!isLoading && !debugMode) {
            setIsGameActive(true);
        } else if (debugMode) {
            setIsGameActive(false);
        } else {
            setIsGameActive(false);
            setProgress(0);
        }
    }, [isLoading, debugMode]);

    useEffect(() => {
        if (!isGameActive) {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        return prev;
                    }
                    return prev + 10;
                });
            }, 500);
        }
    }, [isGameActive]);

    const toggleDebugMode = () => {
        setDebugMode((prev) => !prev);
    }; 

    return (
        <div className="graph">
            {isGameActive ? (
                <>
                    <img src={schedule_bg3} alt="X-axis" className="axis x-axis" />
                    <img src={schedule_bg4} alt="Y-axis" className="axis y-axis" />
                    <div className="clouds"></div>
                    <div className="jetpack" style={{ transform: `translateX(${multiplier * 10}%)` }}>
                        <img src={jetpack} alt="Jetpack character" />
                    </div>
                    <div className="multiplier">
                        x {multiplier.toFixed(2)}
                    </div>
                </>
            ) : (
                <div className="loading">
                    <div className="loading-icon">
                        <div className="loading-circle">
                            <img src={loading} alt="Jetpack character" className="rotating-image" />
                        </div>
                    </div>
                    <div className="loading-text">ОЖИДАНИЕ СЛЕДУЮЩЕГО РАУНДА</div>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Graph;
