export default function DarkMaskOverlay() {
  return (
      <div
        className="absolute w-full bottom-30 inset-0 bg-amber-600 pointer-events-none z-10"
        style={{
          clipPath:
            "polygon(48% 54%, 100% 54%, 99% 71%, 50% 100%, 0 76%, 0 54%)",
        }}
      ></div>
  );
}
