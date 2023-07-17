export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body>
        <main>
          <span>Layout!!!</span>
          {children}
        </main>
      </body>
    </html>
  );
}