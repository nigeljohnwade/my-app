import React from 'react';

class Heading extends React.Component {
    render() {
        switch (this.props.level) {
            case "1":
                return (
                    <h1 className="heading">{this.props.content}</h1>
                );
                break;
            case "2":
                return (
                    <h2 className="heading">{this.props.content}</h2>
                );
                break;
            case "3":
                return (
                    <h3 className="heading">{this.props.content}</h3>
                );
                break;
            case "4":
                return (
                    <h4 className="heading">{this.props.content}</h4>
                );
                break;
            case "5":
                return (
                    <h5 className="heading">{this.props.content}</h5>
                );
                break;
            case "6":
                return (
                    <h6 className="heading">{this.props.content}</h6>
                );
                break;
            default:
                return (
                    <h1 className="heading">{this.props.content}</h1>
                );
        }
    }

}

export default Heading
