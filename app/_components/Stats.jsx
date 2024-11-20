import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const AnimatedCounter = ({ target, suffix = '', isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000; // Total animation time in ms
        const steps = 60; // Number of steps in animation
        const increment = target / steps;

        const timer = setInterval(() => {
            setCount((prevCount) => {
                const nextCount = prevCount + increment;
                return nextCount >= target ? target : nextCount;
            });
        }, duration / steps);

        return () => clearInterval(timer);
    }, [target, isVisible]);

    const formattedCount = new Intl.NumberFormat('en-US', {
        notation: 'compact',
        maximumFractionDigits: 1
    }).format(count);

    return (
        <div className="text-5xl font-bold text-red-600">
            {formattedCount}{suffix}
        </div>
    );
};

const TEDxStatsPage = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const stats = [
        { value: 100000, label: 'Social Reach', suffix: '+' },
        { value: 12.1, label: 'Views', suffix: 'M+' },
        { value: 15000, label: 'Attendees', suffix: '' },
        { value: 100, label: 'Speakers', suffix: '+' }
    ];

    return (
        <div className="min-h-screen bg-black flex flex-col lg:flex-row justify-center items-center p-6">
            <div className='flex flex-col'>
                <Image src={"/tedx/logo.svg"} height={500} width={500} alt='Logo' />
                <div className="text-center mb-12">
                    <h1 className="text-6xl font-extrabold text-white mb-4">Years of Impact</h1>
                    <p className="text-xl text-gray-600">Our Journey in Numbers</p>
                </div>
            </div>
            
            <div 
                ref={ref}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl"
            >
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            delay: index * 0.2,
                            duration: 0.5
                        }}
                        className="text-center p-6 rounded-lg shadow-md"
                    >
                        <AnimatedCounter
                            target={stat.value}
                            suffix={stat.suffix}
                            isVisible={isInView}
                        />
                        <div className="text-lg text-white mt-2">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TEDxStatsPage;