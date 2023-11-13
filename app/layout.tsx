export default function RootLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>{sidebar}</div>
        <div>{children}</div>
      </body>
    </html>
  );
}
