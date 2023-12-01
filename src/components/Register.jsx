import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
    name: "",
    email: "",
    collegeName: "",
    mobileNumber: "",
    address: "",
    state: "",
    resume: null,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFileChange = (e) => {
    const resume = e.target.files[0];
    this.setState({ resume });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission and validation here
    console.log(this.state);
    // Reset the form after submission (if needed)
    this.setState({
      name: "",
      email: "",
      collegeName: "",
      mobileNumber: "",
      address: "",
      state: "",
      resume: null,
    });
  };

  render() {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <div className="bg-[#106b76] text-black p-8 rounded-lg shadow-lg w-3/4">
          <h2 className="text-2xl text-white text-center font-bold mb-4">
            Registration Form
          </h2>
          <form onSubmit={this.handleSubmit} className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white">
                Full Name:
              </label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                required
                className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                College Name:
              </label>
              <input
                type="text"
                name="collegeName"
                value={this.state.collegeName}
                onChange={this.handleInputChange}
                className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Mobile Number:
              </label>
              <input
                type="tel"
                name="mobileNumber"
                value={this.state.mobileNumber}
                onChange={this.handleInputChange}
                className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Address:
              </label>
              <textarea
                name="address"
                value={this.state.address}
                onChange={this.handleInputChange}
                className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                State:
              </label>
              <input
                type="text"
                name="state"
                value={this.state.state}
                onChange={this.handleInputChange}
                className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Upload Resume:
              </label>
              <input
                type="file"
                name="resume"
                onChange={this.handleFileChange}
                className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
              />
            </div>

            <button
              type="submit"
              className="col-span-2 bg-[#0F969C] text-black font-semibold py-2 px-4 rounded hover:bg-blue-600">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
