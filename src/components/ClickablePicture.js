import React, {Component} from 'react'
import '../assets/css/ClickablePicture.css'

class ClickablePicture extends Component {
    state = {
        showPicture: false
    }

    showGlasses = () => {
        this.setState({showPicture: !this.state.showPicture}) 
    }

    render() {
        return (
            <div className="ClicklablePicture">
                <img src={this.state.showPicture ? this.props.imgClicked : this.props.img} alt="picture" onClick={this.showGlasses}></img>
            </div>
        )
    }
}

export default ClickablePicture