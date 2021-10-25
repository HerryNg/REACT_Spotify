import React from "react";


const Navbar =() =>{
    return <nav>
    <div class="container">
      <div class="logo">
        <img src="https://raw.githubusercontent.com/kisu-io/Spotify_landing/main/img/script.png" width="130" />
      </div>
      <div class="links">
        <ul>
          <li><a href="https://www.spotify.com/us/premium/">Premium</a></li>
          <li>
            <a
              href="https://support.spotify.com/us/?_ga=2.206634711.575266892.1632977043-2122301623.1627638024"
              >Support</a
            >
          </li>
          <li>
            <a
              href="https://www.spotify.com/us/download/mac/?_ga=2.206634711.575266892.1632977043-2122301623.1627638024"
              >Download</a
            >
          </li>
          <li><span> | </span></li>
          <li><a href="https://www.spotify.com/us/signup">Sign up</a></li>
          <li>
            <a
              href="https://accounts.spotify.com/en/login/?continue=https:%2F%2Fopen.spotify.com%2F__noul__%3Fl2l%3D1%26nd%3D1&_ga=2.206634711.575266892.1632977043-2122301623.1627638024"
              >Login</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
}

export default Navbar