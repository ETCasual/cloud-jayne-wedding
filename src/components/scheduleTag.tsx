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
      className={`flex flex-col items-center justify-center gap-3 ${start ? "self-start" : "self-end"} -mt-12 first:mt-0`}
    >
      <img
        src={`/assets/images/${pic}.png`}
        className="h-20 w-20 animate-[wiggle-sm_4s_ease-in-out_infinite] object-cover"
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
