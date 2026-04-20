import React from 'react'

const SignUp = () => {
  return (
    <div>

<div className="container">
  <div className="row justify-content-center vh-100 align-items-center">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
      <div class="card shadow">
 
  <div class="card-body ">
    
<div className="row g-3">
<h4 class="text-center">User Login</h4>


        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <label htmlFor="" className="form-label">First Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <label htmlFor="" className="form-label">Middle Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <label htmlFor="" className="form-label">Last Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label htmlFor="" className="form-label">Bio</label>
         <textarea name="" id="" className="form-control"></textarea>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <label htmlFor="" className="form-label">Phone Number or Email ID</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <label htmlFor="" className="form-label">Gender</label>
          <select name="" id="" className="form-control">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <label htmlFor="" className="form-label">Profile picture</label>
          <input type="file" name="" id="" className="form-control" />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <label htmlFor="" className="form-label">Role</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <label htmlFor="" className="form-label">Password</label>
          <input type="password" name="" id="" className="form-control" />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <label htmlFor="" className="form-label">Confirm Password</label>
          <input type="password" name="" id="" className="form-control" />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <button className="btn btn-success">Sign Up</button>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <a href="/"> I already have an account</a>
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