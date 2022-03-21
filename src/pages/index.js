import React from 'react';

import Layout from '../components/Layout';

import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}{' '}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Full-stack developer with 10+ years of experience, and a passion for
            front-end. I believe in creating web apps that are effortless to
            use, a joy to maintain, and make lives easier.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url, name } = social;
              return (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`${icon}`} alt="foo bar"></i>
                  <span className="visually-hidden">{name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Senior Front-End Developer</h3>
              <div className="subheading mb-3">Sunrise Communications AG</div>
              <ul>
                <li>
                  Designed and prototyped next generation cloud-based serverless
                  web application integrating with leading CMS{' '}
                </li>
                <li>
                  Developed and optimized yallo, Lebara, and Swype websites,
                  online shop, and mobile application
                </li>
                <li>Optimization of user experience and conversion rate</li>
                <li>
                  Development of new white-label web app to scan an ID or
                  passport as proof of identification{' '}
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <div className="text-secondary">
                January 2020 - September 2021
              </div>
              <div className="text-secondary">Zürich, Switzerland</div>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Development Engineer</h3>
              <div className="subheading mb-3">Findmypast Ltd.</div>
              <li>
                Migrated substantial parts of the .NET monolith to dedicated
                JavaScript (React), NodeJS and Elixir (micro-)services
              </li>
              <li>
                Implemented A/B experiments around subscription and payments UI
              </li>
              <li>
                Maintained and supported various Elixir, NodeJs, React and .NET
                services, mainly in the payment area, including integrations
                with WorldPay and PayPal
              </li>
            </div>
            <div className="resume-date text-md-right">
              <div className="text-secondary">
                February 2017 - September 2019
              </div>
              <div className="text-secondary">London, UK</div>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Senior Application Engineer</h3>
              <div className="subheading mb-3">Swiss Re Management Ltd</div>
              <li>
                Developed and maintained a web application which simplifies
                reporting financial data to the Swiss regulator FINMA. The
                reporting process could be reduced from eight to two weeks
              </li>
              <li>
                Responsible for the maintenance and integration of the system
                reporting Solvency II data to various European regulators. The
                systems include an in-house developed solution as well as a
                third-party solution. Tasks include integrating new updates
                provided by the vendor, administrating a Suse linux server, as
                well as providing bug fixes and new feature
              </li>
            </div>
            <div className="resume-date text-md-right">
              <div className="text-secondary">August 2012 - November 2017</div>
              <div className="text-secondary">Zürich, Switzerland</div>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Software Development Trainee</h3>
              <div className="subheading mb-3">Swiss Re Ltd</div>
              <li>
                As a member of the Solution Quality Assurance team, I was part
                of several code reviews on other projects
              </li>
              <li>
                Implemented a web application to calculate Key Performance
                Indicators (KPI) based on project data
              </li>
              <li>
                Developed and executed tests to compare performance of various
                web services such as SOAP, remote EJB and REST
              </li>
            </div>
            <div className="resume-date text-md-right">
              <div className="text-secondary">August 2008 - July 2012</div>
              <div className="text-secondary">Zürich, Switzerland</div>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                ZHAW (Zurich University of Applied Sciences)
              </h3>
              <div className="subheading mb-3">
                Bachelor of Science ZFH in Computer Science
              </div>
              <ul>
                <li>
                  Bachelor Thesis: "Collection, Analysis, and Visualization of
                  Smartphone‐Metadata"
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <div className="text-secondary">September 2013 - July 2017</div>
              <div className="text-secondary">Winterthur, Switzerland</div>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">BZZ (Berufsbildungszentrum Zürichsee)</h3>
              <div className="subheading mb-3">
                Federal VET Diploma in Information Technology ("Informatikerin
                EFZ")
              </div>
              <ul>
                <li>
                  Completed the practical part of the education at Swiss Re Ltd
                </li>
                <li>
                  Graduated as best student of the year in the Canton of Zürich,
                  which was awarded a scholarship for ZHAW (Züricher Hochschule
                  der Angewandten Wissenschaften)
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-secondary">August 2008 - July 2012</span>
              <div className="text-secondary">Horgen, Switzerland</div>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Conemaugh Township High School</h3>
              <div>
                Attended the senior year of high school as an exchange student
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-secondary">August 2007 - June 2008</span>
              <div className="text-secondary">Davidsville, PA, USA</div>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Kreisschule Mutschellen</h3>
              <div>Attended Bezirksschule Mutschellen</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-secondary">August 2003 - June 2007</span>
              <div className="text-secondary">Berikon, AG, Switzerland</div>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-yarn"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-java"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-docker"></i>
            </li>
          </ul>

          <div className="resume-item d-flex flex-row flex-wrap">
            <div className="m-4 flex-cell ">
              <div className="subheading mb-3">Proficient</div>
              <ul className="fa-ul mb-0">
                <li>
                  <i className="fa-li fa fa-check"></i>JavaScript
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i>TypeScript
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i>NodeJS
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i>Elixir
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i>C#
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i>Java
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i>SQL
                </li>
              </ul>
            </div>
            <div className="m-4">
              <div className="subheading mb-3">Web Technologies</div>
              <ul className="fa-ul mb-0">
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Angular
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  AngularJS
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i>React
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  GraphQL
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Gatsby
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Webpack
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Babel
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  HTML5
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  CSS3 / CSS-in-JS
                </li>
              </ul>
            </div>
            <div className="m-4">
              <div className="subheading mb-3">Used in the past</div>
              <ul className="fa-ul mb-0">
                <li>
                  <i className="fa-li fa fa-check"></i>
                  PL/SQL
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i> Python
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i> C
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i> F#
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i> Swift
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i> Lisp
                </li>
              </ul>
            </div>
            <div className="m-4">
              <div className="subheading mb-3">Cloud</div>
              <ul className="fa-ul mb-0">
                <li>
                  <i className="fa-li fa fa-check"></i>
                  AWS Lambda
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Docker
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Kubernetes
                </li>
              </ul>
            </div>
            <div className="m-4">
              <div className="subheading mb-3">Tools and Methodologies</div>
              <ul className="fa-ul mb-0">
                <li>
                  <i className="fa-li fa fa-check"></i>
                  NPM / Yarn
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i> Databases (Oracle, DB2,
                  MSSQL)
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i> Git
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i> Scrum
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i> Pair Programming
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i> CI / CD
                </li>
              </ul>
            </div>
            <div className="m-4">
              <div className="subheading mb-3">Languages</div>
              <ul className="fa-ul mb-0">
                <li>
                  <i className="fa-li fa fa-check"></i>
                  English (fluent)
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  German (native)
                </li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  French (basic)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a developer, I enjoy knitting and and dyeing my own
            yarn. I find knitting is a great way to relax, and keep my hands
            busy while watching a movie or TV show.
          </p>
          <p className="mb-0">
            I also love to read - mainly thrillers und whodunits - and try to
            stay healthy by running and doing yoga.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="extracurriculars"
      >
        <div className="w-100">
          <h2 className="mb-5">Extracurriculars and side projects</h2>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                MLCC (Machine Learning Crash Course) at Google
              </h3>
              <div className="subheading mb-3">
                Zürich, Switzerland - February 2017
              </div>
              <ul>
                <li>
                  Introduction to Machine Learning concepts, such as Linear
                  Regression and Neural Networks
                </li>
                <li>Gained first experience with Google's TensorFlow APIs</li>
              </ul>
            </div>
          </div>
          <div className="resume-content mb-5">
            <h3 className="mb-0">SkillfullyTangled</h3>
            <div>
              WooCommerce online shop where I sell my own hand‐dyed yarn and
              publish knitting patterns.
            </div>
          </div>
          <div className="resume-content mb-5">
            <h3 className="mb-0">Agile Trello Chrome Plugin</h3>
            <div>
              Chrome plugin which adds agile functionality to Trello boards and
              cards.
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
