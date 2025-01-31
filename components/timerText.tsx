interface TimerTextProps {
  time: number;
  label: string;
}

export default function TimerText(props: TimerTextProps) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-bold text-5xl text-white">{props.time}</span>
      <span className="font-semibold text-2xl text-white">{props.label}</span>
    </div>
  );
}
