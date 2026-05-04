export const metadata = {
  title: "The Pooch Parlour",
  description: "Dog grooming salon in Llantwit Major",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
