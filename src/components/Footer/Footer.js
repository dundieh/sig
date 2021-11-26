import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer class="bg-dark text-center text-white">
              <div class="container p-4 pb-0">
                <section class="mb-4">
                  <a class="btn btn-outline-light btn-floating m-1" target='_blank' rel="noreferrer" href="https://www.facebook.com/groups/311111149267612" role="button"><i class="fab fa-facebook-f"></i></a>

                  <a class="btn btn-outline-light btn-floating m-1" target='_blank' rel="noreferrer" href="https://www.instagram.com/5mahrous/" role="button"><i class="fab fa-instagram"></i></a>
                  <a class="btn btn-outline-light btn-floating m-1" target='_blank' rel="noreferrer" href="https://www.twitter.com/5Mahrous/" role="button"><i class="fab fa-twitter"></i></a>
                  <a class="btn btn-outline-light btn-floating m-1" target='_blank' rel="noreferrer" href="https://github.com/yousefmahrous" role="button"><i class="fab fa-github"></i></a>
                </section>
              </div>

              <div class="text-center p-3 cright">
                Copyright ©2021 <a class="text-white" target='_blank' rel="noreferrer" href='https://mahrous.myportfolio.com/'>Yousef Mahrous</a>. All rights reserved
              </div>
            </footer>
        );
    }
}

export default Footer;
