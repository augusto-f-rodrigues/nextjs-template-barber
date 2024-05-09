import { Button, TextField, styled } from "@mui/material";
import { Roboto_Condensed } from "next/font/google";
import { CustomTextField } from "../Inputs/CustomTextField";

const robotoCond = Roboto_Condensed({ subsets: ["latin"] });

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-container h-[600px] bg-neutral-300"
    >
      <div className="content-container bg-neutral-300">
        <h2 className={`mb-6 text-7xl font-medium ${robotoCond.className}`}>
          CONTATO
        </h2>

        <div className="grid w-full grid-cols-4 gap-4">
          <CustomTextField
            className="col-span-2"
            id="name"
            label="Nome"
            variant="filled"
          />
          <CustomTextField
            className="col-span-2"
            id="email"
            label="Email"
            variant="filled"
          />
          <CustomTextField
            className="col-span-4"
            id="subject"
            label="Assunto"
            variant="filled"
          />
          <CustomTextField
            className="col-span-4"
            id="message"
            rows={5}
            label="Mensagem"
            variant="filled"
          />

          <Button
            className="col-span-4 bg-amber-950 hover:bg-amber-900"
            variant="contained"
          >
            <p className={`text-xl font-medium ${robotoCond.className}`}>
              ENVIAR
            </p>
          </Button>
        </div>
      </div>
    </section>
  );
}
