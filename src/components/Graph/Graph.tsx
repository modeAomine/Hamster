import React, { useState, useEffect } from "react";
import { GraphProps } from "../../types/GraphProps";
import jetpack from '../../static/5817323514a02be461bfb28eadbb0899.png';
import schedule_bg3 from '../../static/schedule-bg3.svg';
import schedule_bg4 from '../../static/schedule-bg4.svg';
import './ui/Graph.css';

const Graph: React.FC<GraphProps> = ({ isLoading, multiplier }) => {
    const [isGameActive, setIsGameActive] = useState(false);
    const [debugMode, setDebugMode] = useState(false);

    useEffect(() => {
        if (!isLoading && !debugMode) {
            setIsGameActive(true);
        } else if (debugMode) {
            setIsGameActive(true);
        } else {
            setIsGameActive(false);
        }
    }, [isLoading, debugMode]);

    const toggleDebugMode = () => {
        setDebugMode((prev) => !prev);
    };

    return (
        <div className="graph">
            {/* <button onClick={toggleDebugMode} className="debug-toggle">
                {debugMode ? 'Disable Debug Mode' : 'Enable Debug Mode'}
            </button> */}
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
                    <img src="/assets/loading-icon.png" alt="Loading" />
                </div>
            )}
        </div>
    );
};

export default Graph;
