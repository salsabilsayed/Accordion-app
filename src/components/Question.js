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
        <div className="grid grid-cols-6 md:grid-cols-8">
          <p className="font-bold text-base tracking-wider col-span-5 md:col-span-7">{title}</p>
          <div
            className="col-span-1 bg-red-400 w-10 h-10 bg-purple-200 rounded-full flex justify-center items-center cursor-pointer"
            onClick={this.openHandler}
          >
            <div className="text-red-800 text-2xl">
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
