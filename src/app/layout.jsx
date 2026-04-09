import "../styles/globals.css";
export const metadata = {
  title: "Calendar App",
  description: "Interactive Calendar Component",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}