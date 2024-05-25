import "./globals.css";
import { fontQuestrial } from "src/client/fonts/index";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`
          ${fontQuestrial.className} 
          overflow-x-hidden overflow-y-hidden 
          hide-scrolling h-screen 
          text-responsive bg-ground 
          py-2`}
      >
        {children}
      </body>
    </html>
  );
}

