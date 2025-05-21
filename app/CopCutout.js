export default function CopCutout() {
  return (
    <div
      className="
        absolute 
        top-1/4 
        right-1        /* 1rem from right on mobile */
        sm:right-6     /* 1.5rem from right on ≥640px */
        md:right-8     /* 2rem from right on ≥768px */
        lg:right-9    /* 2.25rem from right on ≥1024px */
        transform -translate-y-1/2
        w-[100px]      /* base width */
        md:w-[120px]   /* ≥768px */
        lg:w-[140px]   /* ≥1024px */
        aspect-[123.6/189]  /* preserves original ratio */
        z-1
        hidden sm:block /* only from sm-up */
      "
      style={{
        backgroundImage: "url('/images/CopsVsRobbers_Cutouts_Cop_01 1.svg')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}

  