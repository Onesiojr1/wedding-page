"use client";

import { useEffect, useState } from "react";
import TimerText from "./timerText";

export default function Timer() {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("09/04/2026 20:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  if(partyTime) {
    return (
      <h3 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Espero que tenha sido divertido!!!
      </h3>
    )
  }

  return (
    <div className="flex flex-wrap justify-center gap-6">
      <TimerText time={days} label="Dias" />
      <TimerText time={hours} label="Horas" />
      <TimerText time={minutes} label="Minutos" />
      <TimerText time={seconds} label="Segundos" />
    </div>
  )
}
