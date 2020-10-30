import React from "react"
import wreee from '../assets/wreee.mp3';
import exclaim from '../assets/exclaim.mp3';
import exclamation from "../assets/exclamation.png"


export default class GalaxySNote7 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      panicked: false,
    }

    this.squeelAudio = new Audio(wreee);
    this.exclaimAudio = new Audio(exclaim);
    this.exclaimAudio.addEventListener("ended", () => {
      this.throwAFit()
    }, false)
  }

  throwAFit = () => {
    this.setState({
      panicked: true
    })
  }

  relax = () => {
    this.setState({
      panicked: false
    })
  }

  panic = () => {
    if (this.state.panicked) return
    this.setState({panicked: true})
    setTimeout(this.relax, 2000)
    this.exclaimAudio.play()
    this.squeelAudio.play()
  }

  exclaim = () => (<img id="galaxy-exclamation" className="exclamation" src={exclamation} alt="" />)

  render() {
    return (
      <div id="galaxy-s-note" onClick={this.panic}>
        {(this.state.panicked) ? this.exclaim() : null}
      </div>
    )
  }
}
