import React from 'react';
import {FaQuestionCircle, FaRegComments, FaPhoneAlt, FaTabletAlt, FaTwitter, FaFacebookF, FaPinterestP, FaYoutube, FaInstagram} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className = 'footer'>
      <div className = 'footer-top'>
        <div className = 'footer-top-section'>
          <h4>Who We Are</h4>
          <div>At FEI, we believe that a life outdoors is a life well lived. We've been sharing our passion for the outdoors since 1938.</div>
        </div>
        <div className = 'footer-top-section'>
          <h4>Become a member</h4>
          <div>Join the FEI Co-op community to get an annual dividend, access exlusives and give back. Lifetime membership is just $20.</div>
        </div>
        <div className = 'footer-top-section'>
          <h4>Apply For FEI Co-op Mastercard®</h4>
          <div>Earn a $100 FEI Gift Card when you apply, get approved and make any purchase within 60 days of card approval.</div>
        </div>
      </div>
      <div className = 'footer-list'>
        <div className = 'footer-list-section'>
          <ul>
            <li>Return Policy</li>
            <li>Return Instructions</li>
            <li>Your Online Account</li>
            <li>Purchase Status</li>
            <li>Shipping Info</li>
            <li>Membership</li>
          </ul>
        </div>
        <div className = 'footer-list-section'>
        <ul>
            <li>Expert Advice</li>
            <li>Classes, Tours & Events</li>
            <li>Store Events</li>
            <li>FEI Adventures Tips</li>
            <li>Co-op Journal</li>
            <li>Conversations</li>
          </ul>
        </div>
        <div className = 'footer-list-section'>
        <ul>
            <li>Virtual Outfitting</li>
            <li>Gift Cards</li>
            <li>Gift Registry</li>
            <li>Wish Lists</li>
            <li>Coupons, Rebates & Discounts</li>
            <li>Free Shipping Details</li>
          </ul>
        </div>
        <div className = 'footer-list-section'>
        <ul>
            <li>About FEI</li>
            <li>Sterwardship</li>
            <li>Jobs</li>
            <li>Newsroom</li>
            <li>Technology Blog</li>
            <li>Sell at FEI</li>
          </ul>
        </div>
      </div>
      <div className = 'footer-middle'>
        <div className = 'footer-middle-section'>
          <div>
            <h4>
              <FaQuestionCircle/>
              Help Center
            </h4>
          </div>
          <div>
            Find answers online anytime.
          </div>
        </div>
        <div className = 'footer-middle-section'>
          <div>
            <h4>
              <FaRegComments/>
              Live Chat
            </h4>
          </div>
          <div>
            Mon-Fri, 5am-10pm PT
            <br/>
            Sat-Sun, 6am-9pm PT
          </div>
        </div>
        <div className = 'footer-middle-section'>
          <div>
            <h4>
              <FaPhoneAlt/>
              1-800-426-4840
            </h4>
          </div>
          <div>
            Mon-Fri, 5am-10pm PT
            <br/>
            Sat-Sun, 6am-9pm PT
          </div>
        </div>
      </div>
      <div className = 'footer-bottom'>
        <div className = 'footer-bottom-icons'>
          <div className = 'footer-bottom-icons-left'>
            <FaTabletAlt/>
            Get FEI apps
          </div>
          <div className = 'footer-bottom-icons-right'>
            <span>
              <FaTwitter/>
            </span>
            <span>
              <FaFacebookF/>
            </span>
            <span>
              <FaPinterestP/>
            </span>
            <span>
              <FaYoutube/>
            </span>
            <span>
              <FaInstagram/>
            </span>
          </div>
        </div>
        <div className = 'footer-bottom-copyright'>
          © 2020 Team Eyjafjallajökull. All rights reserved. FEI and the FEI Co-op logo are trademarks of Team Eyjafjallajökull.
        </div>
      </div>
    </div>
  );
}