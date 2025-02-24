'use client';

import { useEffect, useState } from 'react';

const SmallNavbar = () => {
    const [textWidth, setTextWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    
    useEffect(() => {
        const textElement = document.getElementById('scrolling-text');
        const containerElement = document.getElementById('scrolling-container');
        if (textElement && containerElement) {
            setTextWidth(textElement.scrollWidth);
            setContainerWidth(containerElement.clientWidth);
        }
    }, []);

    return (
        <div id="scrolling-container" className="w-full overflow-hidden bg-black py-1 ">
            <div className="whitespace-nowrap flex text-white text-sm font-medium" 
                 style={{ animation: `scrollText ${textWidth / 20}s linear infinite` }}>
                
                <p id="scrolling-text" className="inline-block px-4 mr-20">
                    Delivery time may vary depending on circumstances.
                </p>
                <p className="inline-block px-4 mr-12">
                    Any other external factors outside of our control.
                </p>
                <p className="inline-block px-4">
                    Please check our website for real-time updates.
                </p>
            </div>
            
            <style>
                {`
                @keyframes scrollText {
                    from { transform: translateX(100%); }
                    to { transform: translateX(-100%); }
                }
                `}
            </style>
        </div>
    );
};

export default SmallNavbar;
