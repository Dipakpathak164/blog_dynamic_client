import React from 'react'
import Logo from "../img/logL.png"

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={Logo} width="100"  />
            </div>
            <div className="col-md-4 text-center">
               <p>
               made with React.JS
               </p>
            </div>
            <div className="col-md-4 text-end">
               <p>
                By Dipak
               </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
