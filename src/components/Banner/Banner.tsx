import { Roboto_Condensed } from "next/font/google";
import Image from "next/image";

const robotoCond = Roboto_Condensed({ subsets: ["latin"] });

export default function Banner() {
  return (
    <section
      id="home"
      className="section-container h-[100vh]"
      style={{
        backgroundImage: "url('/images/barber.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="content-container">
        <Image src={"/images/logo.webp"} alt="logo" width={500} height={500} />
      </div>
    </section>
  );
}
