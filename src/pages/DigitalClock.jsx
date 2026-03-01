import React, { useEffect, useState } from 'react'
import Container from '../components/container/Container'
import { Button } from '@/components/ui/button'
const DigitalClock = () => {
    const [time, setTime] = useState(new Date());
    const [is12HourFormat, setIs12HourFormat] = useState(true);
    useEffect(() => {
        const intervalid = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalid);
        }

    });
    function formatTime() {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        if (is12HourFormat) {
            const meridiem = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12;
            return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${meridiem}`;
        } else {
            return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
        }
    }
    function addZero(number) {
        return (number < 10 ? "0" : "") + number;
    }
    return (


        <div >
            <Container>
                <h1 className='text-[#45f3ff] font-Poppins text-3xl  xs:text-4xl sm:text-5xl flex items-center justify-center transition-all duration-300'> Digital Clock</h1>
                <div className='text-3xl  xs:text-4xl sm:text-5xl font-mono text-center  mt-4 sm:mt-8  text-[#ffffff]'>
                    <span >{formatTime()}</span>
                </div>
                <div className='flex flex-col sm:flex-row  gap-2 justify-center items-center mt-8'>
                    <Button onClick={() => setIs12HourFormat(true)} className="px-6 "> 12 Hour Format</Button>
                    <Button onClick={() => setIs12HourFormat(false)} className="px-6 "> 24 Hour Format</Button>
                </div>
            </Container>
        </div>
    )
}

export default DigitalClock