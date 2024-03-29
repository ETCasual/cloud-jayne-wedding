import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const FlipClock = () => {
  return (
    <FlipClockCountdown
      to={1714899600000}
      labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
      labelStyle={{
        fontSize: 12,
        fontWeight: 500,
        textTransform: "uppercase",
        color: "#b88867",
      }}
      digitBlockStyle={{ width: 30, height: 40, fontSize: 30 }}
      dividerStyle={{ color: "white", height: 1 }}
      separatorStyle={{ color: "pink", size: "6px" }}
      duration={0.3}
    />
  );
};

export default FlipClock;
