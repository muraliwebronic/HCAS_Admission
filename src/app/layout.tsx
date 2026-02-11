// app/layout.tsx
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* The variables are injected here so CSS can see them */}
      <body className={` antialiased`}>
        {children}
      </body>
    </html>
  );
}