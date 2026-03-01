import React, { useEffect, useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Container from '@/components/container/Container'
import alarm from '.././assets/sounds/alarm.mp3'
const Countdown = () => {
const [time, setTime] = useState(() => {
  const savedTime = localStorage.getItem("countdownTime")
  return savedTime ? Number(savedTime) : 0
})

const [running, setRunning] = useState(() => {
  const savedRunning = localStorage.getItem("countdownRunning")
  return savedRunning === "true"
})
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

  const timer = useRef(null)

  const format = (time) => {

    let mins = Math.floor((time % 3600) / 60)
    let secs = Math.floor(time % 60)


    mins = mins < 10 ? "0" + mins : mins
    secs = secs < 10 ? "0" + secs : secs

    return `${mins} : ${secs}`
  }
  const playAlarm = async () => {

    try {
      const audio = new Audio(alarm);
      await audio.play();
      alert(" Timer ended!");
    } catch (error) {
      console.error(error)
    }
  };

const handleStartPause = () => {
  if (!running && time === 0) {
    const m = parseInt(minutes || '0')
    const s = parseInt(seconds || '0')
    const total = m * 60 + s
    if (total <= 0) return
    setTime(total)
    localStorage.setItem("countdownTime", total.toString()) 
  }

  setRunning(prev => {
    const newRunning = !prev
    localStorage.setItem("countdownRunning", newRunning ? "true" : "false")
    return newRunning
  })
}

const handleReset = () => {
  clearInterval(timer.current)
  setRunning(false)
  setTime(0)
  setMinutes('')
  setSeconds('')

  localStorage.removeItem("countdownTime")
  localStorage.removeItem("countdownRunning")
}

useEffect(() => {
  if (!running) return

  timer.current = setInterval(() => {
    setTime(prev => {
      if (prev <= 1) {
      
        clearInterval(timer.current)
        localStorage.setItem("countdownRunning", "false")
          localStorage.removeItem("countdownTime") 
        playAlarm()
        setRunning(false) 
        return 0
      }

      const newTime = prev - 1
      localStorage.setItem("countdownTime", newTime.toString())
      return newTime
    })
  }, 1000)

  return () => clearInterval(timer.current)
}, [running])
  return (
    <Container>
      <div className='flex flex-col items-center justify-center '>
        <h1 className='text-[#45f3ff] font-Poppins text-3xl sm:text-5xl transition-all duration-300'>Countdown</h1>

        <h2 className='text-3xl text-secondary pt-8 pb-3'>
          {format(time)}
        </h2>

        <div className='flex min-w-[225.01px] sm:max-w-[220.01px] flex-row mt-7 gap-5'>
          <Input
            id="fieldgroup-minutes"
            type="number"
            placeholder="minutes"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
          />

          <h2 className='w-[0.5px] text-secondary flex justify-center items-end'>:</h2>

          <Input
            id="fieldgroup-seconds"
            type="number"
            placeholder="seconds"
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
          />
        </div>

        <div className='py-7 flex flex-row items-center justify-center gap-5'>
          <Button className="px-6" onClick={handleStartPause}>
            {running ? "Pause" : "Start"}
          </Button>

          <Button className="px-6" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default Countdown
