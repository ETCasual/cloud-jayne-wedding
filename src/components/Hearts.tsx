import { type FunctionComponent } from "react";
import { IoHeart } from "react-icons/io5";

export const Hearts: FunctionComponent<{
  pulsate?: boolean;
  vertical?: boolean;
  className?: string;
}> = ({ pulsate, vertical, className }) => {
  return (
    <div
      className={`flex ${vertical ? "flex-col" : "flex-row"} items-center justify-end gap-3${className ? ` ${className}` : ""}`}
    >
      <div
        className={`${pulsate ? "animate-pulsate " : ""}h-5 w-5 rounded-full bg-[#b07751] p-1`}
      >
        <IoHeart className="h-full w-full text-white" />
      </div>
      <div
        className={`${pulsate ? "animate-pulsate " : ""}h-5 w-5 rounded-full bg-[#b07751] p-1`}
      >
        <IoHeart className="h-full w-full text-white" />
      </div>
      <div
        className={`${pulsate ? "animate-pulsate " : ""}h-5 w-5 rounded-full bg-[#b07751] p-1`}
      >
        <IoHeart className="h-full w-full text-white" />
      </div>
    </div>
  );
};
