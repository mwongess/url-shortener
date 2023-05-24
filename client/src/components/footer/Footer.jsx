import './footer.css'

function Footer() {
    return (
        <>
         <footer>
            <div className='footer'>
            <div className="footer-logo">
                <h3 className='footer-head'>Shortly</h3>
            </div>
            <div className="footer-features">
                <h3>Features</h3>
                <ul>
                    <li><a href="#">Link Shortening</a></li>
                    <li><a href="#">Branded Links</a></li>
                    <li><a href="#">Analytics</a></li>
                </ul>
            </div>
            <div className="footer-resources">
                <h3>Resources</h3>
                <ul>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Developers</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>
            <div className="footer-company">
                <h3>Company</h3>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Out Team</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="footer-icons">
                <div className='footer-icon'><img src="/images/icon-facebook.svg" alt="footer-icons" className='footer-icons--image' /></div>
                <div className='footer-icon'><img src="/images/icon-twitter.svg" alt="footer-icons" className='footer-icons--image' /></div>
                <div className='footer-icon'><img src="/public/images/icon-pinterest.svg" alt="footer-icons" className='footer-icons--image' /></div>
                <div className='footer-icon'><img src="/public/images/icon-instagram.svg" alt="footer-icons" className='footer-icons--image' /></div>
            </div>
        </div>
        </footer>
        </>
       
        
    )
}

export default Footer