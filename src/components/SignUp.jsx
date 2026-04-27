import React, { useState } from 'react'

const SignUp = () => {

  const [input, setInput] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    bio: "",
    phonenumberoremailid: "",
    gender: "",
    profilepicture: "",
    role: "",
    password: "",
    confirmpassword: "",
  })

  const handleInput = (event) => {
    const { name, value, files } = event.target

    if (name === "profilepicture") {
      setInput({ ...input, [name]: files[0] })
    } else {
      setInput({ ...input, [name]: value })
    }
  }

  const readValues = () => {
    console.log(input)
  }

  return (
    <div>

      <div className="container">
        <div className="row justify-content-center vh-100 align-items-center">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
            
            <div className="card shadow">
              <div className="card-body">

                <div className="row g-3">
                  <h4 className="text-center">User SignUp</h4>

                  <div className="col-12 col-sm-4">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" name="firstname" onChange={handleInput} />
                  </div>

                  <div className="col-12 col-sm-4">
                    <label className="form-label">Middle Name</label>
                    <input type="text" className="form-control" name="middlename" onChange={handleInput} />
                  </div>

                  <div className="col-12 col-sm-4">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" name="lastname" onChange={handleInput} />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Bio</label>
                    <textarea name="bio" className="form-control" onChange={handleInput}></textarea>
                  </div>

                  <div className="col-12 col-sm-6">
                    <label className="form-label">Phone Number or Email ID</label>
                    <input type="text" className="form-control" name="phonenumberoremailid" onChange={handleInput} />
                  </div>

                  <div className="col-12 col-sm-6">
                    <label className="form-label">Gender</label>
                    <select name="gender" className="form-control" onChange={handleInput}>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="col-12 col-sm-6">
                    <label className="form-label">Profile picture</label>
                    <input type="file" name="profilepicture" className="form-control" onChange={handleInput} />
                  </div>

                  <div className="col-12 col-sm-6">
                    <label className="form-label">Role</label>
                    <input type="text" className="form-control" name="role" onChange={handleInput} />
                  </div>

                  <div className="col-12 col-sm-6">
                    <label className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" onChange={handleInput} />
                  </div>

                  <div className="col-12 col-sm-6">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" name="confirmpassword" className="form-control" onChange={handleInput} />
                  </div>

                  <div className="col-12 col-sm-6">
                    <button onClick={readValues} className="btn btn-success">Sign Up</button>
                  </div>

                  <div className="col-12">
                    <a href="/">I already have an account</a>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default SignUp