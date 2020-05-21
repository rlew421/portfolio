import React, { Component } from 'react'
import margarita from "../assets/margarita.png";
import online_learning from "../assets/online_learning.png";
import temperature from "../assets/temperature.png";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>In everything I do, I strive to be inquisitive, resilient, and adaptable. Whether I'm writing stories, tutoring students, or developing software, these core qualities remain the same.</p>
                    <p>Before entering the world of software development, I worked in various communications roles. When I began my freshman year at the University of Texas at Austin in 2012, I chose to major in public relations because it provided the opportunity to write and interact with a variety of clients. I’ll admit that at this time in my life, I was young and didn’t have a clear idea of what I really wanted to do; however, I knew that I was driven by a desire to create.</p>
                    <p>I expressed this creative desire by writing for my university’s newspaper. I deepened my communications experience through several PR internships before working full-time as a digital marketing coordinator at a growing marketing agency. While I enjoyed the opportunity to hone my writing skills, implement SEO strategies, and work with people from many different backgrounds, I felt that something was missing.</p>
                    <p>I chose to pursue software engineering because it represents the intersection of two qualities I desire most in my work: creative expression and technical challenge. I took a big leap toward this goal by enrolling at Turing School of Software and Design. In my nine months at Turing, I attended daily, in-person classes and developed a solid foundation in object-oriented programming. Beyond that, I’ve sharpened my ability to learn, research, and develop a methodical thought process to tackle problems I’ve never seen before.</p>
                    <p>Today, I’m a backend-focused developer that seeks to blend my creativity and soft skills gained through my previous roles with my ever-growing technical skills. While most of my experience is in backend with Ruby on Rails, I’m highly interested in learning frontend technologies.</p>
                    <p>Outside of software development, I’m a lifelong artist, bulldog enthusiast, and occasional hiker.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Portfolio</span>
                <h2 className="colorlib-heading">My Projects</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                  <img
                    className="icon-drinkee"
                    src={margarita}
                    alt="margarita icon"
                  />
                </span>
                <div className="desc">
                    <a href="https://github.com/dylanconnolly/drinkee-backend">
                      <h3>Drinkee </h3>
                    </a>
                    <p>An app that allows a user to find drink recipes according to the ingredients they already have in their cabinets. It consumes the Cocktail DB API, returns viable recipes that can be made from the selected ingredients, and allows a user to email a recipe to a friend. Completed by 3 developers in 10 days.</p>
                    <p>Tech Stack: Ruby, Rails, RSpec, Sinatra, Google OmniAuth, Cocktail DB API, Travis CI, Heroku, SendGrid</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                  <img
                    className="icon-brownfield"
                    src={online_learning}
                    alt="online-tutorial-icon"
                  />
                </span>
                <div className="desc">
                  <a href="https://github.com/rlew421/brownfield-of-dreams">
                      <h3>Brownfield of Dreams</h3>
                  </a>
                    <p>An educational platform that displays tutorials based on tags a user's interests. Brownfield of Dreams is a legacy codebase in which we implemented new functionality including allowing a user to authenticate with Google OmniAuth, add other app users as friends, and activate their account/invite friends to the app through emails. Completed by 2 developers in 10 days.</p>
                    <p>Tech Stack: Ruby, Rails, RSpec, GitHub OmniAuth, GitHub API, Heroku, SendGrid</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                  <img
                    className="icon-sweater-weather"
                    src={temperature}
                    alt="sun-thermometer-icon"
                  />
                </span>
                <div className="desc">
                  <a href="https://github.com/rlew421/sweater_weather">
                    <h3>Sweater Weather</h3>
                  </a>
                    <p>A JSON API that consumes several external APIs (Google Geocoding, Google Geolocation, DarkSky, Unsplash) and aggregates and manipulates data for a user. A visitor can retrieve hourly/daily/weekly forecasts/background image for a city, register as a user and receive a unique API key, log in, and plan a road trip that tells them the estimated travel time to and expected forecast in the destination city. Completed independently in 5 days.</p>
                    <p>Tech Stack: Ruby, Rails, RSpec, PostgresQL, Heroku</p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
