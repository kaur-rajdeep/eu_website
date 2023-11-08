import React, { Component } from 'react';

const nssOptions = [
  { value: 'NSS1', label: 'NSS 1' },
  { value: 'NSS2', label: 'NSS 2' },
  // Add more NSS options as needed
];

const clubsOptions = [
  { value: 'club1', label: 'Club 1' },
  { value: 'club2', label: 'Club 2' },
  { value: 'club3', label: 'Club 3' },
  { value: 'club4', label: 'Club 4' },
  // Add more club options as needed
];

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      fatherName: '',
      motherName: '',
      registrationNumber: '',
      collegeName: '',
      mobileNumber: '',
      email: '',
      dateOfBirth: '',
      bloodGroup: '',
      address: '',
      dominantState: '',
      nationality: '',
      organization: '', // Add organization field to state
      selectedOption: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleOrganizationChange = (e) => {
    const organization = e.target.value;
    this.setState({ organization, selectedOption: '' });
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
      fullName: '',
      fatherName: '',
      motherName: '',
      registrationNumber: '',
      collegeName: '',
      mobileNumber: '',
      email: '',
      dateOfBirth: '',
      bloodGroup: '',
      address: '',
      dominantState: '',
      nationality: '',
      organization: '',
      selectedOption: '',
    });
  };

  render() {
    const { organization, selectedOption } = this.state;
    const options = organization === 'NSS' ? nssOptions : clubsOptions;

    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
          <form onSubmit={this.handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Full Name:</label>
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
              <label className="block text-sm font-medium text-gray-600">Father's Name:</label>
              <input
                type="text"
                name="fatherName"
                value={this.state.fatherName}
                onChange={this.handleInputChange}
                className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Mother's Name:</label>
              <input
                type="text"
                name="motherName"
                value={this.state.motherName}
                onChange={this.handleInputChange}
                className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Registration Number:</label>
              <input
                type="text"
                name="registrationNumber"
                value={this.state.registrationNumber}
                onChange={this.handleInputChange}
                className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">College Name:</label>
              <input
                type="text"
                name="collegeName"
                value={this.state.collegeName}
                onChange={this.handleInputChange}
                className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Mobile Number:</label>
              <input
                type="tel"
                name="mobileNumber"
                value={this.state.mobileNumber}
                onChange={this.handleInputChange}
                className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Email:</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Choose Organization:</label>
              <select
                name="organization"
                value={organization}
                onChange={this.handleOrganizationChange}
                className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
              >
                <option value="">Select Organization</option>
                <option value="NCC">NCC</option>
                <option value="NSS">NSS</option>
              </select>
            </div>

            {organization && (
              <div>
                <label className="block text-sm font-medium text-gray-600">Select Option:</label>
                <select
                  name="selectedOption"
                  value={selectedOption}
                  onChange={this.handleOptionChange}
                  className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
                >
                  <option value="">Select an option</option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-600">Date of Birth:</label>
              <input
                type="date"
                name="dateOfBirth"
                value={this.state.dateOfBirth}
                onChange={this.handleInputChange}
                className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Blood Group:</label>
              <input
                type="text"
                name="bloodGroup"
                value={this.state.bloodGroup}
                onChange={this.handleInputChange}
                className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Address:</label>
              <textarea
                name="address"
                value={this.state.address}
                onChange={this.handleInputChange}
                className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Dominant State:</label>
              <input
                type="text"
                name="dominantState"
                value={this.state.dominantState}
                onChange={this.handleInputChange}
                className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Nationality:</label>
              <input
                type="text"
                name="nationality"
                value={this.state.nationality}
                onChange={this.handleInputChange}
                className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
              />
            </div>

            <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover-bg-blue-600">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;