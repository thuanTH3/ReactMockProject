import React, { Component } from "react";
import Create from './add-new.jsx'
import MyModal from "./common/modal-popup.jsx";

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 1, // 0 add, 1 view
      show: false,
      imgSrc: "../../assets/images/placeholder.jpg"
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  addImage() {
    this.setState({
      show: true,
      mode: 0
    });
  }

  showModal() {
    this.setState({
      show: true,
      mode: 1,
      imgSrc: "../../assets/images/placeholder.jpg"
    });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    const listImgs = [];
    for (let i = 0; i < 7; i++) {
      listImgs.push(
        <img
          key={i}
          onClick={this.showModal}
          src={this.state.imgSrc}
          alt='First'
        />
      );
    }
    return (
      <div className='grid-container'>
        <div className='cards'>
          <MyModal
            show={this.state.show}
            handleClose={this.hideModal}
            children={this.state.imgSrc}
          >
            {this.state.mode === 1 ? <Create /> : this.state.imgSrc}
          </MyModal>
          {listImgs}
          <img
            style={{ filter: "invert(0.8)" }}
            src='../../assets/images/plus.png'
            alt='Add'
            onClick={this.showModal}
          />
        </div>
      </div>
    );
  }
}
