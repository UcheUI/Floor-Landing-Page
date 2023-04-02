import "./globals.css";

export const metadata = {
  title: "Floor App - Discover Opportunities and Build Professional Networks",
  description:
    "Floor is a community-based app for niche professionals and remote teams. Discover exclusive opportunities, connect with like-minded individuals, and communicate asynchronously through video and audio chat lobbies, private channels, and direct messaging. Enhance your chances of success with search filters and data-driven insights.",
  keywords:
    "floor app, professional network, niche professionals, search filters, pop-up video chat, virtual events, private channels, asynchronous communication, success in tech, opportunity seekers, like-minded individuals, exclusive opportunities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
