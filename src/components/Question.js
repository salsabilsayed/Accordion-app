import React, { Component } from "react";


class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  openHandler = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };

  render() {
    const { title, info } = this.props.data;

    return (
      <div className="border-2 border-gray-200 border-solid p-4 mb-5 shadow-lg rounded transition-all">
        <div className="flex flex-row justify-between">
          <p className="font-bold text-base tracking-wider">{title}</p>
          <div
            className="w-8 h-8 bg-purple-200 rounded-full flex justify-center items-center cursor-pointer"
            onClick={this.openHandler}
          >
            <div className="text-red-800 text-2xl mb-1">
                {!this.state.isOpen && "+"}
                {this.state.isOpen && "-"}
            </div>
          </div>
        </div>
        {this.state.isOpen && <p className="transition-all text-gray-600">{info}</p>}
      </div>
    );
  }
}

export default Question;
