import { FaTwitter, FaGithub } from "react-icons/fa"

const Homepage = () => {
  return (
    <>
      <section className="homepage">
        <div className="overlay">
          <h1>Thomas Sankara</h1>
          <p>Front-end Web Developer</p>

          <ul>
            <li>
              <a
                href="https://twitter.com/TSBSankara"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/SankThomas"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Homepage
