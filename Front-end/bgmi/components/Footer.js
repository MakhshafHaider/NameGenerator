import React from 'react';
import Link from 'next/link'; // Import the Link component from next/link

export default function Footer() {
  return (
    <div className='footer_section'>
      <div className='footer_section_about'>
        <div className='footer_about'>
          <h4 className='footer_about_heading'>
            About Name Generator
          </h4>
          <p className='footer_about_paragraph'>
            We are your go-to website to generate cool BGMI names. Here, you will
            also get to learn a lot of informational stuff about our favorite BGMI
            game too.
          </p>
        </div>
        <div>
          <div className='footer_links'>
            <ul>
              <li className='li_heading'>Quick Links</li>
              {/* Replace anchor tags with Link components */}
              <li>
                <Link href='/privacy'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  Contact us
                </Link>
              </li>
              <li>
                <a href='#'>Terms and Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer"> 
        &#169; CopyRight. All Rights Reserved.
      </div>
    </div>
  );
}
