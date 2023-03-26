export default function Footer() {
  return (
    <footer className="w-full lg:px-24 lg:py-6 p-4 flex lg:flex-row flex-col justify-between lg:items-center items-start bg-white">
      <div className="logo">&copy; 2023, Floor App</div>
      <ul className="flex items-center text-muted">
        <li className="mr-4">
          <a href="#">About Us</a>
        </li>
        <li className="mr-4">
          <a href="#">Privacy</a>
        </li>
        <li className="mr-4">
          <a href="#">Terms & Conditions</a>
        </li>
      </ul>
      <ul className="flex items-center text-muted">
        <li className="mr-4">
          <a href="#">+2349055753263</a>
        </li>
        <li className="mr-4">
          <a href="#">Colorado, USA</a>
        </li>
      </ul>
    </footer>
  );
}
