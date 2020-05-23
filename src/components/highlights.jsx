import React, { Component } from 'react'
import margarita_small from "../assets/margarita_small.png";
import online_learning_small from "../assets/online_learning_small.png";
import temperature_small from "../assets/temperature_small.png";

export default class Highlights extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Project Highlights</span>
                <h2 className="colorlib-heading animate-box">Highlights</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <img
                          className="icon-drinkee"
                          src={margarita_small}
                          alt="margarita icon"
                        />
                      </div>
                      <div className="timeline-label">
                        <h2>Drinkee <span>Ruby on Rails/Ruby on Sinatra</span></h2>
                        <h4>Accomplishments</h4>
                        <ul>
                          <li>Implemented Google OmniAuth for a user to authenticate with their Gmail account</li>
                          <li>Completed MVP within two week deadline</li>
                        </ul>
                        <h4>Challenges</h4>
                        <ul>
                          <li>Learned Sinatra</li>
                          <li>Utilized Travis CI for the first time</li>
                          <li>Worked with a tricky API that lacked an 'all ingredients' and 'all drinks' endpoint</li>
                        </ul>
                        <h4>Future Iterations</h4>
                        <ul>
                          <li>In addition to exact matches, provide "close matches" – drink recipes where a user has some of the necessary ingredients but lacks an ingredient</li>
                          <li>Consume an API that returns food recipes to provide a user with dishes that pair well with their chosen drink</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <img
                          className="icon-brownfield"
                          src={online_learning_small}
                          alt="online-tutorial-icon"
                        />
                      </div>
                      <div className="timeline-label">
                        <h2>Brownfield of Dreams<span>Ruby on Rails</span></h2>
                        <h4>Accomplishments</h4>
                        <ul>
                          <li>Implemented GitHub OmniAuth and utilized GitHub API to display a user's GitHub followers</li>
                          <li>Created functionality to allow users to add another user as a friend through a self-referential relationship</li>
                          <li>Provided email functionality to allow users to activate their accounts and invite friends to the app</li>
                          <li>Completed major story arcs within 10 day deadline</li>
                        </ul>
                        <h4>Challenges</h4>
                        <ul>
                          <li>Successfully wrote thorough tests and built new functionality in a legacy codebase</li>
                          <li>Used Webmock and VCR to create fixture files when testing API calls</li>
                        </ul>
                        <h4>Future Iterations</h4>
                        <ul>
                          <li>Fix the pre-existing bugs (project requirements specified that testing and building new functionality of the major story arcs was to be prioritized over fixing pre-existing bugs)</li>
                          <li>Implement more sad path testing</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <img
                          className="icon-sweater-weather"
                          src={temperature_small}
                          alt="sun-thermometer-icon"
                        />
                      </div>
                      <div className="timeline-label">
                        <h2>Sweater Weather<span>Ruby on Rails</span></h2>
                        <h4>Accomplishments</h4>
                        <ul>
                          <li>Consumed multiple APIs that required manipulating data returned from one API and passing it into the call to another API</li>
                          <li>Organized and refactored code into their appropriate places according to MVC principles</li>
                          <li>Completed independently in 5 days</li>
                        </ul>
                        <h4>Challenges</h4>
                        <ul>
                          <li>First time building functionality based on wireframes that would be provided by a frontend team</li>
                          <li>The ever-changing data returned for current forecast made testing trickier than data that is relatively static</li>
                        </ul>
                        <h4>Future Iterations</h4>
                        <ul>
                          <li>Refactor background image endpoint to provide more specific results</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
