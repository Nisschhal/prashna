import "./App.css";
import plogo from "./prashna_logo.png";
import facebook from "./images/facebook.png";
import telegram from "./images/telegram.png";
import whatsapp from "./images/whatsapp.png";
import discord from "./images/discord.png";
function App() {
  return (
    <div className="prashna">
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <nav>
      <div className=" navbar container ">
        <div className="buttons">
          <button className="btn"> Creator Login</button>
          <button className="btn"> Creator Signup</button>
        </div>
      </div>
      <div className="hero">
        <div className="hero-center">
          {/* <Logo /> */}
          <div className="hero-text">
            <h1>Web</h1>
            <h1>Comming Soon...</h1>
          </div>
        </div>
      </div>
      <button className="btn-download">Download App</button>
    </nav>
  );
}
function Main() {
  return (
    <main className="main">
      <div className="container">
        <h1>Frequently Asked Questions</h1>
        <div className="descriptions">
          <div className="text-box">
            <Text
              heading={"What is Prashna?"}
              description={
                "Prashna is a free learning platform with the goal of providing free and high-quality education to everyone. We are a community of creators who are dedicated to improving the Nepali education system. Our current focus is on multiple-choice question exams, but we plan to expand our offerings in the future."
              }
            />
            <Text
              heading={"How can I access Prashna MCQs?"}
              description={
                "The Prashna app is currently available on the Google Play Store. We are working for the web and iOS."
              }
            />
            <Text
              heading={"Is Prashna Free?"}
              description={
                "Our app provides free content. We are currently investigating revenue models like donations and community support."
              }
            />
            <Text
              heading={"How can I Support the Prashna community?"}
              description={
                "We are currently in need of more content for our platform. You can help Prashna by creating high-quality content and sharing it on our platform. We appreciate both monetary and non-monetary contributions."
              }
            />
          </div>
        </div>
      </div>
    </main>
  );
}

function Text({ heading, description }) {
  return (
    <>
      <div className="text">
        <h2 className="heading">{heading}</h2>
        <p className="description">{description}</p>
      </div>
    </>
  );
}
function Footer() {
  return (
    <div className="footer container">
      <Contacts className="footer-child" />
      <Follow className="footer-child" />
      <Links className="footer-child" />
    </div>
  );
}

function Contacts() {
  return (
    <div className="contacts">
      <Logo />
      <p className="email">studypill.np@gmail.com</p>
      <p className="phone">9822798699</p>
      <p className="address">Gyaneshowr , Kathmandu</p>
      <p className="country">Nepal</p>
    </div>
  );
}

function Follow() {
  return (
    <div className="follow-us">
      <h1>Follow us on </h1>
      <Logos />
    </div>
  );
}

function Links() {
  return (
    <div className="links">
      <h1>Links</h1>
      <p>Terms of Service</p>
      <p>Privacy Policy</p>
    </div>
  );
}

function Logo() {
  return <img className="logo" src={plogo} alt="logo" />;
}

function Logos() {
  return (
    <div className="logos">
      <div className="social-logo">
        <div>
          <img className="social" src={facebook} alt="faceboook" />
        </div>
        <div>
          <img className="social" src={telegram} alt="telegram" />
        </div>
        <div>
          <img className="social" src={whatsapp} alt="whatsapp" />
        </div>
      </div>
      <div className="discord">
        <img className="discord-logo" src={discord} alt="discord" />
      </div>
    </div>
  );
}

export default App;
