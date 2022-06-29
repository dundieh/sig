import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer class="footer">
              <a href="mailto:contact@gerat.co" target="_blank" class="footer__link" rel="noreferrer">contact@gerat.co</a>
              <ul class="social-list">
                  <li class="social-list__item">
                      <a href="https://instagram.com/dundieh" target="_blank" class="social-list__link" rel="noreferrer">
                          <i class="fab fa-instagram"></i>
                      </a>
                  </li>
                  <li class="social-list__item">
                      <a href="https://twitter.com/dundieh" target="_blank" class="social-list__link" rel="noreferrer">
                          <i class="fab fa-twitter"></i>
                      </a>
                  </li>
                  <li class="social-list__item">
                      <a href="https://github.com/dundieh" target="_blank" class="social-list__link" rel="noreferrer">
                          <i class="fab fa-github"></i>
                      </a>
                  </li>
              </ul>
          </footer>
        );
    }
}

export default Footer;
