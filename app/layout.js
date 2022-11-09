import { spaceGrotesk } from "./font";
import Header from "../components/Header";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>HEAD</title>
      </head>
      <body className={spaceGrotesk.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
