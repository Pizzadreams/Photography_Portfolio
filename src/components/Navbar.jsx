import Container from "./Container";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/60 backdrop-blur-md text-white">
      <Container>
        <div className="flex items-center justify-between py-4">
          <h1 className="text-xl font-bold">
            Photography Portfolio
          </h1>

          <ul className="flex gap-8">
            <li>Home</li>
            <li>Gallery</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;