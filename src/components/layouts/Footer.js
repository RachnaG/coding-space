import React from 'react'

const Footer = () => {
    return (
        <footer className="mt-6 col-start-2 col-end-3 row-start-3 row-end-4 flex xs:flex-col sm:flex-row items-center justify-between py-3 px-4 bg-gray-900 border-t border-gray-800 shadow-lg text-gray-300 h-20">
            <h4><i className="fas fa-rocket mr-1"></i>CODINGSPACE</h4>
            <small className="xs:py-4 sm:py-0">© 2020 CODINGSPACE. All right reserved</small>
            <div className="social flex items-center justify-center">
                <small className="text-base text-gray-300">Follow us on </small>
                <a href="www.twitter.com" className="px-2" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            </div>
        </footer>
    )
}

export default Footer
