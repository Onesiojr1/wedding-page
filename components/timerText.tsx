interface TimerTextProps {
  time: number;
  label: string;
}

export default function TimerText(props: TimerTextProps) {
  return (
    <div className="flex min-w-28 flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
      <span className="text-3xl font-semibold tabular-nums tracking-tight text-white sm:text-4xl">
        {props.time}
      </span>
      <span className="mt-1 text-xs font-medium uppercase tracking-wide text-white/70">
        {props.label}
      </span>
    </div>
  );
}
