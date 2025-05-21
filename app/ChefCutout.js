export default function ChefCutout() {
  return (
    <div
      className="
        absolute 
        top-1/3 
        left-4       /* mobilon 1rem-re a bal széltől */
        md:left-8    /* közepes képernyőn 2rem */
        lg:left-16   /* nagy képernyőn 4rem */
        transform -translate-y-1/2  /* függőlegesen középre igazít */
        sm:transform sm:translate-y-10
        lg:transform lg:translate-y-1
        w-20         /* mobilon 7rem széles (~110px) */
        md:w-30      /* ≥768px-en 9rem */
        aspect-[97.94/130]  /* az eredeti arányt tartja */
        z-1
        hidden sm:block /* only from sm-up */
      "
      style={{
        backgroundImage: "url('/images/CookdUp Chef_Fail.svg')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}

