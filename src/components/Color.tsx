import type { FunctionComponent } from "react";

interface ColorProps {
  hex?: `#${string}`;
  bordered?: boolean;
}

export const Color: FunctionComponent<ColorProps> = ({ hex, bordered }) => {
  return (
    <div
      style={{ background: hex }}
      className={`h-8 w-8 rounded-full${bordered ? " border border-black" : ""}`}
    />
  );
};
