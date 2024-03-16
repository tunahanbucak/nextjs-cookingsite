import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CookingSite",
  description: "A Next.js Cooking Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <body className={inter.className}>
            <div className="max-w-screen-2xl mx-auto">
              <Navbar />
              {children}
              <Footer />
            </div>
          </body>
        </ThemeProvider>
      </StyledEngineProvider>
    </html>
  );
}
