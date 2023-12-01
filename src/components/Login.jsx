import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      phoneNumber: "",
      password: "",
      reminder: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, reminder: "" });
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { email, phoneNumber, password } = this.state;

    if (!email && !phoneNumber) {
      this.setState({ reminder: "Please enter your email." });
    } else if (!password) {
      this.setState({ reminder: "Please enter your password." });
    } else {
      // Perform login logic here
      console.log("Login:", this.state);
    }
  };

  handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic here
    console.log("Signup:", this.state);
  };

  render() {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-[#106b76] text-black p-8 rounded-lg shadow-lg w-3/4">
          <h2 className="text-2xl text-white text-center font-bold mb-4">
            Login / Signup
          </h2>
          <form className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-white">
                Email:
              </label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                className="block w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={this.handleLogin}
                className="bg-[#0F969C] text-black font-semibold py-2 px-4 rounded hover:bg-blue-600">
                Login
              </button>
              <button
                onClick={this.handleSignup}
                className="bg-[#0F969C] text-black font-semibold py-2 px-4 rounded hover:bg-blue-600">
                Signup
              </button>
            </div>
            {this.state.reminder && (
              <p className="text-red-500 mt-2">{this.state.reminder}</p>
            )}
          </form>

          <div className="mt-4 flex items-center justify-center">
            <div className="flex items-center justify-between w-full">
              <div className="w-1/3 border-t-2 border-white"></div>
              <div className="mx-2 text-white">Or Login With</div>
              <div className="w-1/3 border-t-2 border-white"></div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-4">
            <img
              src="data:image/jpeg;base64,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" // Replace with actual path
              alt=""
              className="w-10 h-10 mx-2 cursor-pointer"
              onClick={() => console.log("Login with Google")}
            />
            <img
              src="data:image/png;base64,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" // Replace with actual path
              alt=""
              className="w-10 h-10 mx-2 cursor-pointer"
              onClick={() => console.log("Login with Facebook")}
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUAe7X///8AcbAAd7Pi6/MAc7F9rM670eQAebQAdbKtyN/I2ukAcLD5/P3R5fAAfrfw9vro8/jH3uxtq8+oy+GcxN1npsw5ksIpjL4chru82OhPnMcOgbjY5vCtzOHi7/WQvdmCtdRposqewNpSnsdGmMV8stKozeJgnsiTuNWIstLE2Oikw9s4k8K11OZyrc8jBgt+AAALo0lEQVR4nN2deXuiPBfGA2meSWbY3EAFq7a102cZ/f7f7g1aWxWynBBIeO+/Zq5Ky89sJ8lZUNC34ixZz1/f87JYrqoUIZRWq2VR5vvX+TrJ4t7/Purxd082x91LkUYhIQxTTBFFF/F/8f8zQsIoLV72vzeTHt+iL8LkeVZUZ7IrVrsoxZiEaTF7Tnp6kz4Ik8VbyjibFO2RkzF0WPRBaZswO+YoIoqGE2BiFqH8mFl+I6uE23mJQ2wA9y1MaDnf2nwpe4TZc0nNGu+hKSmjh2d7LWmLcJoT0MiTQ2LC8qmlN7NCmC2WoTW8T+FwtbPSkBYIN++IWMY7izJ02nhAmJT2emeTkR06LyAdCadF2BfeJ2RUdByQnQinh6jb2qAjHB06MXYg5P2z3/a7ipKyQ181JpzMOq7tEOHwZDyvGhLGCzwc35kRLww3WmaE02Uv64NMlCzNhqMJYTwbnO/CODNpRgPCNR22g34Ls+MAhFkeOuKrFebgGQdKOK2YQ0DejNW6X8K9kxF4Kxq+90i4XRLHfLXIErRDhhCukesGvIhSSE8FEO7cjsBbkV0PhHHpQw+9ipTaS6Mu4WTlahFsF17pniJrEiaVH0PwWzTV3G/oEa5728abi2K9+UaLcB65xmlVNLdFuPATkCMu7BDufZpE76WzaqgJ9y4tbZXCfXfCd1+76EWRElFF6HUL1gpVHVVBuPB3DF5FFNONnNDbWfRWikVDSrgeAyBHlC79MsLEP0OmXVhmwEkIJ97ZoiLRSmKGiwnj1VgAOeJKvJkSE5aq7RLFJOQiPljluIQT7lTrBMH5Yvr0tDnuiwFuoFQS228iwrUckLJq/t0xtrnzIzhERBOqgHCr+H3s4SvbFO5NA8EJnIBwKW0TSpuXJCfXiHQJIVRsmFrXn3fXFizZ6xOu5S/L2q+5ctenje1DsY0wky/1rP27Uj3Wv2jVdm3TRqhojLQdMAh+ux6KLNcjPCr6qHi3Ug1EIlTYcr/YJIzlyzfFYgNp4XokUtbsp03CmYLwQwgYbJ3vtlr6aYNwqhhMkk7qQTdFpDHPPxIqdxRC66iW0lrvXXT5OIgeCZUGdyhzF8ydEzZN8AfCidKRK3ySEP7lnpCyh93wA6HaLgllJwYv7gkbk809YaK2LdlvCWHhfBOFGm1wT6gxUzCJK0Q8kLOiXA/7/TtC1UpRS7RJqaWw2IfS/YpxR3jQaYJIPBA9mEpr0YOIcKplkmChUTPxowl5I9w24i1hodcERNSInjQhb4SinTDRtCqbZsNFR9ebp2/dTqc3hKXuRNi6DQs2Psyjn8JvbYQb/a0PmbUAph4RUrZtITwBRhEpH/dhR0983j6F35uEGegVcXp3aTfJ/RmDZ1GUNQih+3OCdpvzjBNn6w8PjvUf9L2N/SKE3zSxsDq8vHws2YCBF9r6Nr2uhFOj1RpjVSSzM4XTB0JvVmtbwvk9Yeb6lMy+SHxH+OzZXGhB7PmO8PD/1kn5XFPeEm4B88X5alug+++JST75MCrq1Ap1GomLmI0JjNLtDeFcv5OSn7/E+rhFZH9LPvnPDSJHQ6tD/r6b//jx769/j4vdrFxSztkNkcxvCLWNbshZG/kh+eTP63dKCSl308njdiWeTHd/ok7z3+fp/JkwA7hT2CWk4WoujmTaLqoOYcaUZl+EkJ2dTUKNmMJjhzCdy03UmRCy3NskxDqBIXNkOh7x7IsQ8phFQqwXFDopTIdjeiXUPb6wS0iF5z0NzQx76vlYsCYEbZysEZJnXUCN+6J2nZ1ra0LAWmGPMHqT/LQhs3iBs1lTE4J299YIYUkE3kzGIkUXwgT0sC3Cg+SHLTLzBa1dmzjhswvC/6BR2YnJrU+9v0BK14SeCMEx2e8G/bReERH00s8SITw/Qmaw3aBFTThJQQ9ZIjTIjmAS+1FNOOEG9qAlQgPFBu7WZMMJgd5o7giDd7iBSo6ccA97ziEhsLfVwntOCPSfcEhocJqEXzgh0H/CJSF8ruGTKYqBt2IuCQEXgFelMcqA/oQuCQ0uV6IMaTgJ+UMIM7/Or5sgReiIX4RHcDclawQ4KnVPuAVPNWSOXoFfi1PCAGzWsFcENRTcEv6BDkS8RznwW3FLuIcORJojqOOydcJsPX99XczXWtlYoLMGwiWCuoTaJXzar6KQcRESVX+pj27Al/H0D1oCH7FJOMnJ7dkEC0tVjit4vMMSQc0Ei4RJ47weY8XxTQxuwxWChkjYI0yili83kp8Tx+CIjgrBzjAsErYHw9NI3lHBnuRQPouEp/aJnxbSpz7GQyg0wKRBOUNEdNgiFOa3E3tZn/8CdMlPnY1D8RzeGgl6FdioSV3NpbF4YSOyyCpwiGPlaj2UhHYQWb4ZaCQuXw8d2TQS5whRJLURIedzZJdKLrzYX2bfTKu4Xepob/FT0oYyQmjgEd9bONofSgixjBC6ueD7w3+8a0MpYQLspWzv6pzGlHADbEP26uqsbShCMnd1XjoY4drVmbcp4RP0dRNX9xZDEUYZioGm98gI09jV/eFAhPX9oaM74IEIz3fAbu7xByJk9T0+MJhkXIRnXww3/jRDEW6c+UQNRHj2iXLj1zYM4cWvzY1v4jCEn76JTvxLhyH89C914yM8DOHFRzgA+QyNiZDWARfOfPUHIXwLXMZbDED4FW/hJmZmAMJoE7iNe+qd8CvuyVnsWs+EN7FrimyXYyW8iT+EOPqPh/A2htRlHHCPhDdxwBBXo/EQ3sVyA+LxR0N4H48P8IIfD+FdTgXA/mI0hA95MTLtgTgewvvcJvqL/lgIH/PT6N88joWwkWNIUStgdIR0dX0CnOtrJIQtub5087WNhLAlX5tuzr1xEOLT1xPgvInjIGTfnmPg3JejIKQ3qYTB+UtHQRi15y/Vy0E7BkJRDlq9PMJjIBTmEdbKBT0CQnEuaK183iMglOTz1snJ7j+hLCe7jseR/4QP9SkeaiMIgiDGRMhO9088EKpz0/lO+HmGKCQMFqrf4Dth+FgHp1FnRrVP9JwQK+vMBFPFSPScUF0rSOm44DchPjWeANfs8puQNnMXtdRdkzv824q36IUwbIl7A9fOI7+ehJq83E5T7D/xJ5/+FvcU+jIRP/dLZljq1s5TFDKU5RG+f06WR1g2FKjkORmgfv1DLQvcQzXnUSGhYSJGx4LUIdU/H/ZIsFqyynrAHorC6gGrajr7Jwas6Wyc9tWV4HW5fajWCJBJbXXDnKhuRFfiTJNiQkFaBx9FK0lyGwlhkIyFsLVOuA5hsHZe/VZLkTTPhJQwmI8BMZLF76sIjfK+DiwiK1CsJgx2vtQ0FClUVR9QEQZ7vztqtFcBKAmDvc+tGCoBNQh9tt/EthqIMFj42lEjxSSjTRj89hNRsUxACIO1h/XjKJUu9EDCIPHORqWVZvkITcJgsvKr9hxeaWWSBBAG8ZtPUyoptRPzaxN6tWrorBIGhN7MNxTpzTFwwmDboYCWPZGlKgeoOWF9VOy6GamGodaFMJhWbudUVkF6qAlhkOUuLfEwB9enARMGwRG7OmfEmmZMV0LejF3LSxqJkplBdRojQj4al4PPODRU1kq0SRjEi4G7KsMLkwY0J+SG6mnActw4PIFnmM6EfL9RmhQKMxAlpSylaX+EfDiWA5SNx9HBbADaIOSMRWRQZwogGhWd+DoTBsHmjfVn5WB2gJVJ7IOQ2+PvqJe1gzJ06jD+LBJyE2CxDG13Vhyudsbz562sEHJNZ4RZ2z5SzEjecfh9yRYhNwKOJe+t3SEpJfTwbLi8t8geIdd2/kE72gGY0HIO2uGqZJWQKzvO0shs4qGURensaGXw3cg2Ya1k8ZZiBpl6KB95DB0WFqbOhvogrJU8z4qKEDUnxZiQtJg9d174BOqLsNZkc9y9FGkUclJGOeuVlv8L07p6Thilxcv+90b3dNdEfRJeFGfJev66z8s/y1WVpihNq9XyT5nvX+frJLM3Z4r0P/fBzcRjtd0RAAAAAElFTkSuQmCC" // Replace with actual path
              alt=""
              className="w-10 h-10 mx-2 cursor-pointer"
              onClick={() => console.log("Login with LinkedIn")}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
