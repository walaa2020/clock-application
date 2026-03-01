import React, { useEffect, useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import Container from '@/components/container/Container'
import alarm from '.././assets/sounds/alarm.mp3'

const AlarmSystem = () => {
  const [alarmTime, setAlarmTime] = useState(() => localStorage.getItem("alarm") || "")
  const [isSet, setIsSet] = useState(() => localStorage.getItem("alarmIsSet") === "true")
  const [duration, setDuration] = useState(() => Number(localStorage.getItem("alarmDuration")) || 0)
  const [message, setMessage] = useState(() => {
    const savedAlarm = localStorage.getItem("alarm")
    const savedIsSet = localStorage.getItem("alarmIsSet")
    return savedAlarm && savedIsSet === "true" ? `⏰ Alarm is set at ${savedAlarm}` : ""
  })
  const audioRef = useRef(null)
  const [time, setTime] = useState(new Date())

  const addZero = (num) => (num < 10 ? "0" : "") + num
  const formatTime = () => {
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const meridiem = hours >= 12 ? "PM" : "AM"
    const formattedHour = hours % 12 || 12
    return `${addZero(formattedHour)}:${addZero(minutes)}:${addZero(seconds)} ${meridiem}`
  }
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect (() => {
    if (!isSet || !alarmTime) return

    const interval = setInterval(() => {
      const currentTime = new Date().toTimeString().slice(0, 5)
      if (currentTime === alarmTime) {
  if (audioRef.current) {
    audioRef.current.loop = true
    audioRef.current.play()
  }

  setMessage("⏰ Alarm! Time reached!")
  setIsSet(false)

  alert("⏰ Alarm! Time reached!")  

  if (audioRef.current) {
    audioRef.current.pause()
    audioRef.current.loop = false
    audioRef.current.currentTime = 0
  }

  localStorage.removeItem("alarm")
  localStorage.removeItem("alarmIsSet")
  localStorage.removeItem("alarmDuration")
}

        clearInterval(interval)
      }
    , 1000)

    return () => clearInterval(interval)
  }, [isSet, alarmTime, duration])

  const handleSetAlarm = () => {
    if (!alarmTime) return
    setIsSet(true)
    localStorage.setItem("alarm", alarmTime)
    localStorage.setItem("alarmIsSet", "true")
    localStorage.setItem("alarmDuration", duration.toString())
    setMessage(`⏰ Alarm is set at ${alarmTime}`)
  }

  const handleReset = () => {
    setIsSet(false)
    setAlarmTime("")
    setDuration(0)
    setMessage("")
    localStorage.removeItem("alarm")
    localStorage.removeItem("alarmIsSet")
    localStorage.removeItem("alarmDuration")

    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  return (
    <Container>
      <div className='flex flex-col items-center justify-center gap-6'>
        <h1 className='text-[#45f3ff] font-Poppins text-3xl xs:text-4xl sm:text-5xl transition-all duration-300'>
          Alarm
        </h1>
        <div className='text-3xl  xs:text-4xl sm:text-5xl font-mono text-center  mt-4  text-[#ffffff]'>
          <span >{formatTime()}</span>
        </div>
        <Input
          type="time"
          value={alarmTime}
          onChange={(e) => setAlarmTime(e.target.value)}
          className="max-w-[200.01px] text-[#ffffff] time-input "
        />

        <Select onValueChange={(value) => setDuration(Number(value))} value={duration.toString()}  >
          <SelectTrigger className="w-[180.01px] text-[#ffffff]" >
            <SelectValue placeholder="duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="0">Select duration</SelectItem>
              <SelectItem value="1">1 minute</SelectItem>
              <SelectItem value="2">2 minutes</SelectItem>
              <SelectItem value="3">3 minutes</SelectItem>
              <SelectItem value="4">4 minutes</SelectItem>
              <SelectItem value="5">5 minutes</SelectItem>
              <SelectItem value="10">10 minutes</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className='flex gap-4'>
          <Button className="px-6" onClick={handleSetAlarm}>
            Set Alarm
          </Button>

          <Button className="px-6" variant="destructive" onClick={handleReset}>
            Cancel
          </Button>
        </div>

        {isSet && (
          <div className='text-xl font-semibold text-green-400'>
            {message}
          </div>
        )}

        <audio ref={audioRef} src={alarm} preload="auto" />
      </div>
    </Container>
  )
}

export default AlarmSystem