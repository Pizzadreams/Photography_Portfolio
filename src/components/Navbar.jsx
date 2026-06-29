import Container from "./Container";

function Navbar() {
  return (
    <nav className="bg-black text-white">
      <Container>
        <div className="flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold">
            Photography
          </h1>

          <ul className="flex gap-6">
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