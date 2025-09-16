import "./globals.css";

export const metadata = {
  title: "Ethics-in-AI Explorer",
  description: "Quick risk & mitigation previews for AI features."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}