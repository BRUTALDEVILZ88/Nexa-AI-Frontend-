import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        "Chat With Your OWN AI",
        1000,
        "Built With GEMINI ",
        2000,
        "Your Own Customized NEXA-Ai ",
        1500,
      ]}
      speed={50}
      style={{
        fontSize: "clamp(24px, 5vw, 60px)", // ✅ Responsive font
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
        textAlign: "center", // ✅ Center text on smaller screens
        lineHeight: "1.2",
        wordBreak: "break-word",
        whiteSpace: "normal",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;
