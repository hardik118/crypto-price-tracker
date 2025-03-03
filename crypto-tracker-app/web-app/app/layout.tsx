
import "./globals.css";
import { ReactNode } from "react";
import Provider from "./provider";

export default function RootLayout(
  {children}: {children: ReactNode}
) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
