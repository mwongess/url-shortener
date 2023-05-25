import { useUrlShortenerContext } from "../../App";
import "./main.css";

export const Main = () => {
  const {
    inputUrl,
    shortenedLinks,
    url,
    handleClick,
    handleInputChange,
    shortUrl,
    buttonText,
    copyToClipboard,
    errorMessage,
    isValid,
  } = useUrlShortenerContext();
  return (
    <>
      <div className="main">
        <div className="main-left">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="get-started">Get Started</button>
        </div>
        <div className="main-right">
          <img src="../images/illustration-working.svg" alt="" />
        </div>
      </div>
      <div className="shorten-container">
        <div className="shorten">
          <div className="input-div">
            <input
              type="text"
              placeholder="Shorten a link here ..."
              onChange={handleInputChange}
              value={inputUrl}
              className={!isValid() ? "invalid" : ""}
            />
            {!isValid() && (
              <div className="error-message">
                <span>{errorMessage}</span>
              </div>
            )}
          </div>

          <button onClick={handleClick}>Shorten It!!</button>
        </div>
        <div className="shortened-links">
          {shortenedLinks[0]&&
            shortenedLinks.map((shortened_Link, index) => (
              <div className="short-link" key={index}>
                <p>{shortened_Link.long_link}</p>
                <div className="short-link-right">
                  <p>{shortened_Link.short_link}</p>
                  <button
                    onClick={() => copyToClipboard(shortUrl)}
                    className={buttonText}
                  >
                    {buttonText}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
