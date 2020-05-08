import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/bg3.png'
import pic02 from '../images/cv.jpg'
// import pic03 from '../images/pic03.jpg'
import buildbay from '../images/projects/buildbay.png'
import buildbay1 from '../images/projects/buildbay1.png'
import buildbay2 from '../images/projects/buildbay2.png'
import buildbay3 from '../images/projects/buildbay3.png'
import chair from '../images/projects/chair.png'
import chair_manufacturing from '../images/projects/chair_manufacturing.png'
import chair_manufacturing1 from '../images/projects/chair_manufacturing1.png'
import DCG from '../images/projects/DCG.png'
import golfer from '../images/projects/golfer.png'
import golfer_manufacturing from '../images/projects/golfer_manufacturing.png'
import golfer_solidworks from '../images/projects/golfer_solidworks.png'
import jcb_manufacturing from '../images/projects/jcb_manufacturing.png'
import jcp from '../images/projects/jcp.png'
import wardrobe from '../images/projects/wardrobe.png'
import woodturning from '../images/projects/woodturning.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
          <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            I am a very committed and hardworking
            final year student in Product Design.
            Through a range of professional experiences, I have developed my confidence in the working environment
            and believe I am an effective communicator. I relish the challenge of a
            difficult task being presented to me.
            I will always give my all to complete it to the best of my abilities,
            welcoming opportunities to enhance
            my skillset and gain knowledge from
            others along the way.
          </p>
              <span className="image main">
            <img src={pic02} alt="" />
          </span>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Portfolio</h2>
         <span className="image main">
            <img src={golfer} alt="" />
             {/*<br> </br>*/}
            <img src={golfer_manufacturing} alt="" />
            <img src={golfer_solidworks} alt="" />
          </span>
          <p>
            Rory McIlroy had inspired me, as he is a famous and international
            sportsman from Northern Ireland. I finally decided on making a door handle,
            which incorporated the golf balls into this design. As I design the door handle
            and created it, I ensured that it was going to have a strong connection with golf.
          </p>

          <span className="image main">
            <img src={chair} alt="" />
            <img src={chair_manufacturing} alt="" />
            <img src={chair_manufacturing1} alt="" />
          </span>
          <p>
            The reason I was inspired to design and build a rocking chair was because I liked
            the thought of doing a traditional piece of furniture. My main goal was to modernise
            the method of building a rocking chair by using the process of CNC. As a result, I would
            be able to mass produce the chair.
          </p>

          <span className="image main">
            <img src={buildbay} alt="" />
            <img src={buildbay1} alt="" />
            <img src={buildbay2} alt="" />
            <img src={buildbay3} alt="" />
          </span>
          <p>
            The strong, sturdy, compact workbench
          </p>

          <span className="image main">
            <img src={DCG} alt="" />
          </span>
          <p>
            "STUARTS GAY"
          </p>

          <span className="image main">
            <img src={jcp} alt="" />
            <img src={jcb_manufacturing} alt="" />
          </span>
          <p>
            "Stuart likes c*ck"
          </p>

          <span className="image main">
            <img src={wardrobe} alt="" />
          </span>
          <p>
            I made the wardrobe for my Leaving Cert project which was made for my room which has a
            sloped roof.
          </p>

          <span className="image main">
            <img src={woodturning} alt="" />
          </span>
          <p>
            I made the wardrobe for my Leaving Cert project which was made for my room which has a
            sloped roof.
          </p>

          {close}
          </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >

          <h2 className="major">Contact</h2>
          <p>
          Please feel free to contact me if you have any questions, through the links below
         </p>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:stu555@live.co.uk"
                className="icon fa-envelope"
              >
                <span className="label">Mail</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
