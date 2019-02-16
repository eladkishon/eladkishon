import {h} from "hyperapp"
import {Link, Route} from "@hyperapp/router"


export default ({posts}, children) =>

  <div>

      <div class="row buffer-top-half">
          <div class="twelve columns">
              <h1>Hey, I’m Elad. 👋</h1>
              <h5>
                  <a href="https://github.com/EladKeyshawn" target="_blank"> Github </a> |
                  <a href="https://il.linkedin.com/in/elad-keyshawn-a68938119" target="_blank"> LinkedIn </a> |
                  <a href="mailto:me@elad.636@gmail.com" target="_blank"> Email </a>
                  {/*<a href="../../assets/files/resume.pdf" target="_blank"> Resume </a>*/}
              </h5>

              <div class="thick-line"></div>
          </div>
      </div>

      <div class="row">

          <div class="twelve columns">
              {/*<Link to="/api">API</Link>*/}
              <p> Software engineer, cyclist and travel
                  enthusiast.
                  <br/>
              </p>

          </div>
      </div>
      <div className="row">
      <div class="twelve columns">
              <h4>Posts</h4>
              {/*<div class="eight columns">*/}
              {
                  posts.map(post => {
                      return <div class="">
                          <span>{post.date}</span>
                          <h5><a href={post.link} target="_blank">{post.title}</a></h5>
                      </div>
                  })
              }

          </div>
      </div>


      <div class="row">

          <div class="twelve columns">

              {/*<h5>*/}
                  {/*<a href="https://github.com/EladKeyshawn" target="_blank"> Github </a> |*/}
                  {/*<a href="https://il.linkedin.com/in/elad-keyshawn-a68938119" target="_blank"> LinkedIn </a> |*/}
                  {/*<a href="mailto:me@elad.636@gmail.com" target="_blank"> Email </a> |*/}
                  {/*<a href="../../assets/files/resume.pdf" target="_blank"> Resume </a>*/}
              {/*</h5>*/}


          </div>
      </div>
  </div>