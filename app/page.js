import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container">
      <h1>Floor Landing Page</h1>
      <div className="card">
        <h2>One Time Membership</h2>
        <p>$49 per mo</p>
        <ul>
          <li>10-120 Lobbies</li>
          <li>Unlimited IRL/URL</li>
          <li>Access to the community</li>
          <li>5000 filters</li>
          <li>Unlimited connections</li>
        </ul>
        <button className="cta">Join Now</button>
      </div>
    </div>
  );
}
