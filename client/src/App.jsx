import Statistics from "./components/statistics/statistics";
import { createContext, useContext, useEffect, useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import { Main } from "./components/main/Main";
import Cta from "./components/cta/Cta";
import "./App.css";

export const UrlShortenerContext = createContext();
// custom hook
export const useUrlShortenerContext = () => useContext(UrlShortenerContext);

const UrlShortenerProvider = ({ children }) => {
  const [shortenedLinks, setShortenedLinks] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [buttonText, setButtonText] = useState("Copy");
  const [shortUrl, setShortUrl] = useState("");
  const [inputUrl, setInputUrl] = useState("")
  const [url, setUrl] = useState("");

  // Fetch all previously shortened links
  useEffect(() => {
    const storedLinks = localStorage.getItem("links");
    if (storedLinks) {
      setShortenedLinks(JSON.parse(storedLinks));
    }
  }, []);

  // Update shortened links whenever they change
  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(shortenedLinks));
  }, [shortenedLinks]);

  // Add new shortened link
  const addNewLink = (long_link, short_link) => {
    const newLink = { long_link, short_link };
    setShortenedLinks([newLink]);
  };

  // Shorten links and save them
  useEffect(() => {
    const shortenUrl = async () => {
      try {
        if (url) {
          const res = await fetch(
            `https://api.shrtco.de/v2/shorten?url=${url}`,
            {
              method: "POST",
            }
          );
          const data = await res.json();
          setShortUrl(data.result.short_link2);
        }
      } catch (error) {
        console.error(error);
      }
    };
    shortenUrl();
  }, [url]);

//Runs when there is a new short link 
  useEffect(() => {
    if (shortUrl) {
      addNewLink(url, shortUrl);
    }
  },
    [url, shortUrl])

  // React to changes on the inputs
  const handleInputChange = (e) => {
    setInputUrl(e.target.value);
  };

  // React to button when it is clicked!
  const handleClick = () => {
    if(inputUrl){
      setUrl(inputUrl)
      setErrorMessage('Please add a link')
    }else{
      alert('Please add a link')
    }
    setInputUrl('')
  };

  //Copy shortened link to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => setButtonText("Copied"))
      .catch((error) => console.error("Error copying to clipboard:", error));

    setTimeout(() => {
      setButtonText("Copy");
    }, 3000);
  };

  return (
    <UrlShortenerContext.Provider
      value={{
        inputUrl,
        handleClick,
        handleInputChange,
        url,
        setUrl,
        shortUrl,
        setShortUrl,
        buttonText,
        copyToClipboard,
        shortenedLinks,
        errorMessage,
      }}
    >
      {children}
    </UrlShortenerContext.Provider>
  );
};

function App() {
  return (
    <>
      <UrlShortenerProvider>
        <Header />
        <Main />
        <Statistics />
        <Cta />
        <Footer />
      </UrlShortenerProvider>
    </>
  );
}

export default App;
