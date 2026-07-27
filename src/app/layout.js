import { Poppins, Agbalumo } from "next/font/google";
import "../styles/index.scss";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const agbalumo = Agbalumo({
  variable: "--font-agbalumo",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Bubu dudu date picker",
  description: "What should we do?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={`${poppins.variable} ${agbalumo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
