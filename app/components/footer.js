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
          <a href="https://www.linkedin.com/company/floor-io/"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#080808" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path></svg></a>
        </li>
        <li className="mr-4">
          <a href="https://twitter.com/floor_app"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#080808" viewBox="0 0 256 256"><path d="M245.66,77.66l-29.9,29.9C209.72,177.58,150.67,232,80,232c-14.52,0-26.49-2.3-35.58-6.84-7.33-3.67-10.33-7.6-11.08-8.72a8,8,0,0,1,3.85-11.93c.26-.1,24.24-9.31,39.47-26.84a110.93,110.93,0,0,1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8,8,0,0,1,13.65-4.92c.35.35,33.28,33.1,73.54,43.72V88a47.87,47.87,0,0,1,14.36-34.3A46.87,46.87,0,0,1,168.1,40a48.66,48.66,0,0,1,41.47,24H240a8,8,0,0,1,5.66,13.66Z"></path></svg></a>
        </li>
      </ul>
    </footer>
  );
}
