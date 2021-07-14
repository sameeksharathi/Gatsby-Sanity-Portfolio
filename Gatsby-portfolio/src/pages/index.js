import * as React from "react"
import "./index.scss";
import "./styles.scss"
import { Link } from 'gatsby'
import NavBar from '../components/NavBar';
import image from '../images/background.jpg';


const IndexPage = () => {
  return (
    <NavBar>
      <main>
        <img src={image} alt="Background" className=" home-bg" />
        <section className="home-body">
          <h1 className="home-text font-bold cursive leading-none lg:leading-snug ">Aloha! I'm Sameeksha.</h1>
        </section>
      </main>
    </NavBar>
  )
}

export default IndexPage
