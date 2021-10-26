import { useFormik } from 'formik';
import * as Yup from 'yup';



export default function SigninForm() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(8,'Must be 8 characters or less')
               .required('Required')
          }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

  return (
      <div className="auth--section">
          <div className="container">
             <div className="row">
                 <div className="col-12 col-md-5 col__">
                     <div className="card">
                         <div className="card-body">
                         <div className="head__txt">
                            <h5 className="display-5">Sign In</h5>
                            <p>Lippsa, taking of the hard pain in your business  </p>
                        </div>
                        <hr />
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-group mb-3">
                                    <label className="form-label" htmlFor="email">Email Address</label>
                                    <input
                                       className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : null} `}
                                        id="email"
                                        name="email"
                                        type="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />

                                    {formik.touched.email && formik.errors.email ? (
                                            <span className="invalid-feedback">{formik.errors.email}</span>
                                        ) : null}

                                </div>

                                <div className="form-group mb-3">
                                    <label className="form-label" htmlFor="lastName">Password</label>
                                    <input
                                        className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : null} `}
                                        id="password"
                                        name="password"
                                        type="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}

                                    />

                                    {formik.touched.password && formik.errors.password ? (
                                            <span className="invalid-feedback">{formik.errors.password}</span>
                                        ) : null}
                                </div>
                                <button className="btn  w-100 block mt-2" type="submit">Proceed</button>
                            </form>  
                         </div>
                     </div>
           </div>
        </div>  
    </div>
 </div>  
  )
}
