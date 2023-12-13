import { Component } from "react";

class GoogleMap extends Component {
    render() { 
        return (
            <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.1198975725906!2d126.95642932640786!3d35.96849406413942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357015527a316527%3A0x37f3a7800fd9ee31!2z7JuQ6rSR64yA7ZWZ6rWQ!5e0!3m2!1sko!2skr!4v1702484474492!5m2!1sko!2skr"></iframe>
            </div>
        );
    }
}
 
export default GoogleMap;