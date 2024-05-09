import { Roboto_Condensed } from "next/font/google";

const robotoCond = Roboto_Condensed({ subsets: ["latin"] });

export default function Services() {
  return (
    <section
      id="services"
      className="section-container h-[600px]"
      style={{
        backgroundImage: "url('/images/table.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="content-container">
        <h2
          className={`text-7xl font-medium text-neutral-100 ${robotoCond.className}`}
        >
          SERVIÇOS
        </h2>

        <div className="flex w-full justify-between">
          <p className="text-2xl text-neutral-100">Corte Masculino</p>
          <p className="text-2xl text-neutral-100">R$ 35</p>
        </div>
        <hr className="mx-auto my-4 w-full border-t-2 border-neutral-600" />
        
        <div className="flex w-full justify-between">
          <p className="text-2xl text-neutral-100">Barba e Bigode</p>
          <p className="text-2xl text-neutral-100">R$ 15</p>
        </div>
        <hr className="mx-auto my-4 w-full border-t-2 border-neutral-600" />

        <div className="flex w-full justify-between">
          <p className="text-2xl text-neutral-100">Corte Masculino + Barba e Bigode</p>
          <p className="text-2xl text-neutral-100">R$ 45</p>
        </div>
        <hr className="mx-auto my-4 w-full border-t-2 border-neutral-600" />

        <div className="flex w-full justify-between">
          <p className="text-2xl text-neutral-100">Corte Infantil</p>
          <p className="text-2xl text-neutral-100">R$ 25</p>
        </div>
        <hr className="mx-auto my-4 w-full border-t-2 border-neutral-600" />

        <div className="flex w-full justify-between">
          <p className="text-2xl text-neutral-100">Outros Serviços</p>
          <div className="cursor-pointer underline text-2xl text-neutral-100" >Clique Aqui</div>
        </div>
        <hr className="mx-auto my-4 w-full border-t-2 border-neutral-600" />
        
      </div>
    </section>
  );
}
