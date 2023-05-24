import './main.css'
export const Main = () => {
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
                    <img src="../images/illustration-working.svg" alt="" />
                </div>
            </div>
            <div className='shorten-container'>
                <div className='shorten'>
                    <input type="text" placeholder='Shorten a link here ...'/>
                    <button>Shorten It!!</button>
                </div>
                <div className="shortened-links">
                        <div className="short-link">
                            <p>Long Link</p>
                            <div className="short-link-right">
                                <p>Shortlink</p>
                                <button>Copy</button>
                            </div>
                        </div>
                </div>

            </div>
        </>
    )
}