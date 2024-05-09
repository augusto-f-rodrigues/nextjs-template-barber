import { Roboto_Condensed } from "next/font/google";
import Image from "next/image";

const robotoCond = Roboto_Condensed({subsets: ["latin"]});

export default function About() {
  return (
    <section id="about" className="section-container bg-neutral-100 h-[900px]">
      <div className="content-container relative">
        <h2 className={`absolute right-[11rem] top-20 text-7xl font-medium text-neutral-100 ${robotoCond.className}`}>
          QUEM <span className="font-medium text-neutral-600">SOMOS</span>
        </h2>
        <div className="flex">
          <Image
            src={"/images/owner.webp"}
            alt="dono da empresa"
            width={500}
            height={800}
            className="shadow-2xl"
          />
          <div className="ml-16 mt-24 flex flex-col gap-y-11">
            <p className="text-neutral-800">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              ipsa qui excepturi.
            </p>
            <p className="text-neutral-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. ea sunt
              enim?
            </p>
            <p className="text-neutral-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              aperiam laborum omnis molestiae sed officia aliquam pariatur animi
              incidunt fugit consequatur ullam autem exercitationem fuga, eius
              laboriosam dolorum architecto temporibus?
            </p>
            <p className="text-neutral-800">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              necessitatibus nam tenetur facere corrupti atque debitis fugiat
            </p>
            <p className="text-neutral-800">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              necessitatibus nam tenetur facere corrupti atque debitis fugiat
              totam nostrum nesciunt! Ducimus sint deleniti accusamus eveniet.
              Consectetur sapiente deserunt officiis quis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
