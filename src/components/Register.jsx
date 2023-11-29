import React from "react";
import { useHistory } from "react-router-dom";

class RegistrationForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fullName: "",
        fatherName: "",
        motherName: "",
        registrationNumber: "",
        collegeName: "",
        mobileNumber: "",
        email: "",
        dateOfBirth: "",
        bloodGroup: "",
        address: "",
        dominantState: "",
        nationality: "",
        organization: "",
        selectedOption: "",
      };
    }
  
    handleInputChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };
  
    handleOrganizationChange = (e) => {
      const organization = e.target.value;
      this.setState({ organization, selectedOption: "" });
    };
  
    handleOptionChange = (e) => {
      const selectedOption = e.target.value;
      this.setState({ selectedOption });
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      // You can perform form submission and validation here
      console.log(this.state);
      // Reset the form after submission (if needed)
      this.setState({
        fullName: "",
        fatherName: "",
        motherName: "",
        registrationNumber: "",
        collegeName: "",
        mobileNumber: "",
        email: "",
        dateOfBirth: "",
        bloodGroup: "",
        address: "",
        dominantState: "",
        nationality: "",
        organization: "",
        selectedOption: "",
      });
    };
  
    render() {
      const { organization, selectedOption } = this.state;
      let options;
  
      if (this.props.context === "Clubs") {
        options = clubsOptions;
      } else {
        options = nssOptions;
      }
      return (
        <div className="min-h-screen flex items-center justify-center ">
          <div className="bg-[#106b76] text-black p-8 rounded-lg shadow-lg w-3/4">
            <h2 className="text-2xl text-white text-center font-bold mb-4">
              Registration Form
            </h2>
            <form onSubmit={this.handleSubmit} className="grid grid-cols-2 gap-4">
              <div>
                <label className="block  text-sm font-medium text-white
  ">
                  Full Name:
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={this.state.fullName}
                  onChange={this.handleInputChange}
                  required
                  className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-white
  ">
                  Father's Name:
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={this.state.fatherName}
                  onChange={this.handleInputChange}
                  className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-white">
                  Mother's Name:
                </label>
                <input
                  type="text"
                  name="motherName"
                  value={this.state.motherName}
                  onChange={this.handleInputChange}
                  className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-white">
                  Registration Number:
                </label>
                <input
                  type="text"
                  name="registrationNumber"
                  value={this.state.registrationNumber}
                  onChange={this.handleInputChange}
                  className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-white
  ">
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
                <label className="block text-sm font-medium text-white
  ">
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
                <label className="block text-sm font-medium text-white
  ">
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
                <label className="block text-sm font-medium text-white
  ">
                  Choose Organization:
                </label>
                <select
                  name="organization"
                  value={organization}
                  onChange={this.handleOrganizationChange}
                  className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200">
                  <option value="">Select Organization</option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
  
              <div>
                <label className="block text-sm font-medium text-white
  ">
                  Date of Birth:
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={this.state.dateOfBirth}
                  onChange={this.handleInputChange}
                  className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white
  ">
                  Blood Group:
                </label>
                <input
                  type="text"
                  name="bloodGroup"
                  value={this.state.bloodGroup}
                  onChange={this.handleInputChange}
                  className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-white
  ">
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
                <label className="block text-sm font-medium text-white
  ">
                  Dominant State:
                </label>
                <input
                  type="text"
                  name="dominantState"
                  value={this.state.dominantState}
                  onChange={this.handleInputChange}
                  className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-white
  ">
                  Nationality:
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={this.state.nationality}
                  onChange={this.handleInputChange}
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
  
  export default RegistrationForm;
  