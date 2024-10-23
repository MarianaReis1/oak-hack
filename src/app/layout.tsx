import Image from "next/image";
import { Link, Stack, Container } from "@mui/material";
import { ThemeRegistry } from "../component/ThemeRegistry/index.jsx";
import "@/styles/globals.css";
import "@/styles/fonts.css";
import { ReactNode } from "react";
import Color from "../styles/tokens/colors.json";

export const metadata = {
  title: "Oak Academy Hackthon",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css"
          integrity="sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+"
        />
      </head>
      <body
        style={{
          backgroundColor: Color.sand[30],
        }}
      >
        <ThemeRegistry>
          <Container maxWidth="lg" sx={{ margin: "auto" }}>
            <Stack
              component="header"
              sx={{
                marginBottom: "16px",
                py: 2,
              }}
            >
              <Link href="/">
                <Image
                  src={`/logo.svg`}
                  alt="MyTutor"
                  width={100}
                  height={24}
                />
              </Link>
            </Stack>
            {children}
          </Container>
        </ThemeRegistry>
      </body>
    </html>
  );
}
