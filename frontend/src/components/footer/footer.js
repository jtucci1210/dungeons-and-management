import React from 'react';
import '../../stylesheet/footer.scss';

class Footer extends React.Component {

    render () {
        return (
          <div className="footer-div">
            <div className="footer-developers">
              <div className="footer-developers-each">
                <a
                  className="link-in-tag"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/james-tucci-56b06b99/"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <span>JP Tucci</span>
              </div>
              <div className="footer-developers-each">
                <a
                  className="link-in-tag"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/micaela-moss-686b3b75/"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <span>Micaela Moss</span>
              </div>
              <div className="footer-header">
                <h3>Meet the Developers!</h3>
              </div>
              <div className="footer-developers-each">
                <a
                  className="link-in-tag"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/jmarkowitz098/"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <span>Jared Markowitz</span>
              </div>
              <div className="footer-developers-each">
                <a
                  className="link-in-tag"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/macallan-savett/"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <span>Macallan Savett</span>
              </div>
            </div>
          </div>
        );
    }
}

export default Footer;