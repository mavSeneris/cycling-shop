import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-wrapper'>
        <div className='footer-logo'>MAAV</div>

        <div className='about-us'>
          <div className='about-us-lists'>
            <h3>About</h3>
            <h3>Privacy</h3>
            <h3>Terms and Conditions</h3>
            <h3>Careers</h3>
          </div>

          {/* <div className='newsletter-wrapper'>
            <span>Newsletter</span>
            <form className='newsletter'>
              <input type="text" placeholder='Sign-up for our newsletter' />
              <button>Send</button>
            </form>
          </div> */}
        </div>
      </div>
      <div className='copyright'>
      <small>&copy; 2023 MAAV.CC</small>
      </div>

    </div>
  )
}
