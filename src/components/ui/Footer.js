import { faGithub, faLinkedinIn, faUpwork } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="container fixed w-full text-center text-[var(--text-secondary)] bg-[var(--bg-accent)]/39 shadow-md bottom-0"> 
      <div className="w-full flex flex-col space-y-4 py-4 px-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-evenly">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 grid place-items-center bg-[var(--bg-primary)] text-black">LogoIps</div>
            <h1>Name 1</h1>
            <h2>Name 2</h2>
          </div>
          <div>
            <ul className="flex flex-col items-center gap-3">
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
            <div className="space-y-4 px-2">
              <p>Get In Touch</p>
              <div className="flex text-[var(--text-accent)]/57 justify-center items-center gap-3">
                <div className="grid place-items-center bg-[var(--bg-primary)] w-8 h-8 p-2 rounded-full">
                  <FontAwesomeIcon size="sm" icon={faLinkedinIn} />
                </div>
                <div className="grid text-[var(--text-neutral)] place-items-center w-8 h-8">
                  <FontAwesomeIcon size="sm" icon={faGithub} />
                </div>
                <div className="grid place-items-center bg-[var(--bg-primary)] w-8 h-8 p-2 rounded-full">
                  <FontAwesomeIcon size="sm" icon={faUpwork} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h4>Keep In Touch</h4>
            <div className="flex text-[var(--text-neutral)] bg-[var(--bg-accent)]/57 w-max rounded-md p-2">
              <input className="focus:outline-none" placeholder="Your Email Address" type="email" />
              <div className="grid place-items-center w-8 h-8 p-2">
                <FontAwesomeIcon size="sm" className="cursor-pointer" icon={faEnvelope} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>Copyright &copy; 2022 Name1 Name2</p>
        </div>
      </div>
    </footer>
  )
}