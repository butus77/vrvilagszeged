import Header from "./Header";


export default function Home() {
  return (
    <section className="bg-[#0e0e0f] min-h-screen flex flex-col items-center justify-between p-4 ">
      {/* Fejlec */}
      <Header />
      {/* Tovabbi tartalom*/}
      <div>
        <h2 className="text-white">Lépj be a Hyper-Realitás világába</h2>

        <p className="text-white">A szabadmozgásos VR élmény</p>
        <p className="text-white">
          Ahol nincsenek kábelek, nincsenek határok - csak Te, a valósághű
          fizikai interakciók és egy teljesen új világ
        </p>
      </div>
    </section>
  );
}
