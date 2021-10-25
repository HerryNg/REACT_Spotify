import React from "react";

const Footer = () =>{
    return(
        <footer>
<div class="container">
        <div class="row">
          <div class="row footer-left">
            <div class="img-div">
              <img src="https://raw.githubusercontent.com/kisu-io/Spotify_landing/main/img/logo.png" width="130" />
            </div>
            <div class="column">
              <div class="footer-heading">Company</div>
              <a href="#">About</a>
              <a href="#">Jobs</a>
              <a href="#">For the Record</a>
            </div>
            <div class="column">
              <div class="footer-heading">Communities</div>
              <a href="#">For Artists</a>
              <a href="#">Developers</a>
              <a href="#">Brands</a>
              <a href="#">Investors</a>
              <a href="#">Vendors</a>
            </div>
            <div class="column">
              <div class="footer-heading">Useful Links</div>
              <a href="#">Support</a>
              <a href="#">Web Player</a>
              <a href="#">Free Mobile App</a>
              <a href="#">2020 Wrapped</a>
            </div>
          </div>
          <div class="footer-right">
            <a href="#">
              <img src="https://raw.githubusercontent.com/kisu-io/Spotify_landing/main/img/ig.png" width="50" />
            </a>
            <a href="#">
              <img src="https://raw.githubusercontent.com/kisu-io/Spotify_landing/main/img/fb.png" width="50" />
            </a>
            <a href="#">
              <img src="https://raw.githubusercontent.com/kisu-io/Spotify_landing/main/img/twitter.png" width="50" />
            </a>
          </div>
        </div>
        <div class="row2">USA <img src="https://raw.githubusercontent.com/kisu-io/Spotify_landing/main/img/usa.jpg" width="20" /></div>
        <div class="row row3">
          <div>
            <a href="#">Legal</a>
            <a href="#">Privacy Center</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
            <a href="#">About Ads</a>
            <a href="#">Additional CA Privacy Disclosures</a>
          </div>
          <div>© 2020 Spotify AB</div>
        </div>
      </div>
      </footer>
    );
}

export default Footer