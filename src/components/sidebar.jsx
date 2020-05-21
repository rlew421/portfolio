import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Rachel Lew</a></h1>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/rachel-ann-lew/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/rlew421" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="mailto: rlew07@gmail.com" target="_blank" rel="noopener noreferrer"><i className="icon-mail"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>
                  <div>
                    Template from{" "}
                    <a
                      href="https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dhruv Barochiya
                    </a>
                  </div>
                  <div>
                    Inspired by{" "}
                    <a
                      href="https://colorlib.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Colorlib
                    </a>{" "}
                  </div>
                  <div>
                    Icons made by{" "}
                    <a
                      href="https://www.flaticon.com/authors/freepik"
                      title="Freepik"
                    >
                      Freepik
                    </a>{" "}
                    from{" "}
                    <a href="https://www.flaticon.com/" title="Flaticon">
                      www.flaticon.com
                    </a>
                  </div>
                  <div>
                    Icons made by{" "}
                    <a
                      href="https://www.flaticon.com/authors/photo3idea-studio"
                      title="photo3idea_studio"
                    >
                      photo3idea_studio
                    </a>{" "}
                    from{" "}
                    <a href="https://www.flaticon.com/" title="Flaticon">
                      www.flaticon.com
                    </a>
                  </div>
                  <div>
                    Icons made by{" "}
                    <a
                      href="https://www.flaticon.com/authors/smashicons"
                      title="Smashicons"
                    >
                      Smashicons
                    </a>{" "}
                    from{" "}
                    <a href="https://www.flaticon.com/" title="Flaticon">
                      www.flaticon.com
                    </a>
                  </div>
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
