import Head from "next/head";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Eliezer Encarnacion Porfolio</title>
        <meta name="description" content="EE, Front End Web Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"/>
      </Head>

      <Navbar />

      <main className="main bg-slate-100 px-10">
        <Profile />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />

    </div>
  )
}
