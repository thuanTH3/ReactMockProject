import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Info extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }} className='info-container'>
        <div style={{ margin: "20px 0" }}>M Y N A M E</div>
        <div style={{ margin: "20px 0" }}><i>mymail@gmail.com</i></div>
        <p>
          Bacon ipsum dolor amet brisket shankle pork chop pork loin picanha
          flank hamburger turkey. Pork chop filet mignon flank tail sausage
          tongue frankfurter, shankle biltong bresaola porchetta pork belly.
          Chicken capicola bacon ham pork belly, ball tip cow brisket filet
          mignon pastrami alcatra beef ground round.
        </p>
        <hr style={{ color: "#D3D3D3" }} />
        <div>Visit me on: </div>
        <div>
          <i className='fab fa-facebook-f fa-2x'></i>
        </div>
        <div>
          <i className='fab fa-instagram fa-2x'></i>
        </div>
        <div>
          <i className='fab fa-google fa-2x'></i>
        </div>
        <div>
          <i className='fab fa-deviantart fa-2x'></i>
        </div>
      </div>
    );
  }
}
