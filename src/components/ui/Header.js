export default function Header() {
  return (
    <header className="container text-[var(--text-primary)] bg-[var(--bg-primary)] px-8 py-4 flex justify-between items-center shadow-md p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          LogoIps
        </div>
        <div>
          <h1>
            Name 1
          </h1>
          <h2>
            Name 2
          </h2>
        </div>
      </div>
      <nav className="flex items-center gap-2">
        <ul className="flex items-center gap-3">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
        <button className="uppercase cursor-pointer p-2 rounded-md text-[var(--text-neutral)] bg-[var(--bg-accent)]">Get In Touch</button>
      </nav>
    </header>
  )
}