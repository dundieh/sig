import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer class="footer">
              <ul class="social-list">
                  <p>&copy;2022 Yousef Mahrous. All rights reserved.<a href="https://github.com/dundieh/studium" target="_blank" class="social-list__link" rel="noreferrer">(source code)</a></p>
              </ul>
              {/* <ul class="social-list">
                  <li class="social-list__item">
                      <a href="https://github.com" target="_blank" class="social-list__link" rel="noreferrer">
                        <i className='fa fa-gtihub'></i>
                      </a>
                  </li>
              </ul> */}
          </footer>
        );
    }
}

export default Footer;
