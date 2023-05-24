import { useUrlShortenerContext } from '../../App'
import './main.css'


export const Main = () => {
    const {inputUrl,shortenedLinks,url, handleClick, handleInputChange, shortUrl, buttonText, copyToClipboard, errorMessage } = useUrlShortenerContext()
    return (
        <>
            <div className="main">
                <div className="main-left">
                    <h1>More than just shorter links</h1>
                    <p>Build your brand’s recognition and get detailed insights
                        on how your links are performing.</p>
                    <button className='get-started'>Get Started</button>
                </div>
                <div className="main-right">
                    <img src="../public/images/illustration-working.svg" alt="" />
                </div>
            </div>
            <div className='shorten-container'>
                <div className='shorten'>
                    <input  type="text" placeholder='Shorten a link here ...' onChange={handleInputChange} value={inputUrl} />
                    <button onClick={handleClick}>Shorten It!!</button>
                </div>
                <div className="shortened-links">
                    {
                       shortUrl && shortenedLinks.map((shortened_Link, index)=>(
                            <div className="short-link" key={index}>
                            <p>https://{shortened_Link.long_link}</p>
                            <div className="short-link-right">
                                <p><a href='https://{shortened_Link.short_link}' target='_blank'>https://{shortened_Link.short_link}</a></p>
                                <button onClick={() => copyToClipboard(shortUrl)} className={buttonText}>{buttonText}</button>
                            </div>
                        </div>
                        ))
                    }

                </div>

            </div>
        </>
    )
}