import React, { useRef } from "react";
import { useFormik, Form, Field } from 'formik';

export default function LoginForm() {
    const formik = useFormik({
        initialValues: {
            uId: "",
            pwd: ""
        }
    })

    return (

        <div> 
            <div class="form-group">
                        <input type="text" class="form-control" placeholder="First Name *" value="" />
                    </div>
        </div>
        // <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        //     <h3 class="register-heading">Apply as a Hirer</h3>
        //     <div class="row register-form">
        //         <div class="col-md-6">
        //             <div class="form-group">
        //                 <input type="text" class="form-control" placeholder="First Name *" value="" />
        //             </div>
        //             <div class="form-group">
        //                 <input type="text" class="form-control" placeholder="Last Name *" value="" />
        //             </div>
        //             <div class="form-group">
        //                 <input type="email" class="form-control" placeholder="Email *" value="" />
        //             </div>
        //             <div class="form-group">
        //                 <input type="text" maxlength="10" minlength="10" class="form-control" placeholder="Phone *" value="" />
        //             </div>


        //         </div>
        //         <div class="col-md-6">
        //             <div class="form-group">
        //                 <input type="password" class="form-control" placeholder="Password *" value="" />
        //             </div>
        //             <div class="form-group">
        //                 <input type="password" class="form-control" placeholder="Confirm Password *" value="" />
        //             </div>
        //             <div class="form-group">
        //                 <select class="form-control">
        //                     <option class="hidden" selected disabled>Please select your Sequrity Question</option>
        //                     <option>What is your Birthdate?</option>
        //                     <option>What is Your old Phone Number</option>
        //                     <option>What is your Pet Name?</option>
        //                 </select>
        //             </div>
        //             <div class="form-group">
        //                 <input type="text" class="form-control" placeholder="`Answer *" value="" />
        //             </div>
        //             <input type="submit" class="btnRegister" value="Register" />
        //         </div>
        //     </div>
        // </div>
    )
}