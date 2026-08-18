import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santorini Marcenaria | Móveis Planejados Sob Medida",
  description: "Móveis planejados e projetos sob medida com acabamento premium.",
};

function setInitialThemeScript() {
  return `(function(){try{const t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');else if(t==='light')document.documentElement.classList.remove('dark');else if(window.matchMedia&&window.matchMedia('(prefers-color-scheme:dark)').matches)document.documentElement.classList.add('dark');}catch(e){}})();`;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <script dangerouslySetInnerHTML={{ __html: setInitialThemeScript() }} />
        {children}
      </body>
    </html>
  );
}