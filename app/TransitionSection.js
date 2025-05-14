import DarkMaskOverlay from "./DarkMaskOverlay";



export default function TransitionSection() {
  return (
    <div className="relative -z-10">
    <div
      className="absolute  left-0 bg-[#EAF4EC] w-full"
      style={{
        height: "213px",
        clipPath:
          "polygon(50% 60%, 100% 25%, 100% 75%, 50% 75%, 0% 75%, 0% 25%)",
      }}
    ></div></div>
  );
}
