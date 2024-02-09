/* eslint-disable @next/next/no-img-element */

import { type FunctionComponent } from "react";

interface ScheduleTagProps {
  pic: string;
  time: string;
  start?: boolean;
  title: string;
}

export const ScheduleTag: FunctionComponent<ScheduleTagProps> = ({
  pic,
  time,
  title,
  start,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center ${start ? "self-start" : "self-end"} -mt-6`}
    >
      <img
        src={`/assets/images/${pic}.webp`}
        className="h-24 w-24 object-cover"
        alt={title}
      />
      <div className="flex flex-col items-center justify-center gap-0.5 text-sm">
        <p className="text-center font-lora uppercase tracking-wider">{time}</p>
        <p className="text-center font-lora uppercase tracking-widest">
          {title}
        </p>
      </div>
    </div>
  );
};