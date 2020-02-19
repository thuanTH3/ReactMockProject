import React, { Component } from "react";
import Buttons from './common/buttons.jsx'

export default class Intro extends Component {
  render() {
    return (
      <div className='intro-container'>
        <ul className='sliders'>
          <li className='first-slide'>
            <div>MY.FIRST.SLIDE</div>
            <p>
              Bacon ipsum dolor amet brisket shankle pork chop pork loin picanha
              flank hamburger turkey. Pork chop filet mignon flank tail sausage
              tongue frankfurter, shankle biltong bresaola porchetta pork belly.
              Chicken capicola bacon ham pork belly, ball tip cow brisket filet
              mignon pastrami alcatra beef ground round. Cow pork belly bresaola
              kielbasa, kevin tail tenderloin picanha chislic brisket. Pastrami
              doner turducken, capicola shankle ribeye shoulder picanha
              andouille sirloin cupim alcatra pork ham hock swine.
            </p>
            <Buttons className='view-btn' name='Click to begin' buttonType='secondary-btn'></Buttons>
          </li>
          <li className='second-slide'>My sec slide</li>
          <li className='third-slide'>My trd slide</li>
        </ul>
      </div>
    );
  }
}
