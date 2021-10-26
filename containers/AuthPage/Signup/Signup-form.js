import { useFormik } from 'formik';
import * as Yup from 'yup';


export default function SignupForm() {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            lastName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().max(8,'Must be 8 characters or less')
               .required('Required')
          }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      
      return (
          <>    
       <form onSubmit={formik.handleSubmit}>
           <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
                className="form-control"
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
            />
                    {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
                className="form-control"
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
            />
             {formik.touched.lastName && formik.errors.lastName ? (
                    <div>{formik.errors.lastName}</div>
                ) : null}
         </div>
         
         <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
            className="form-control"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
        />

            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}
        </div>

        <div className="form-group">
            <label htmlFor="lastName">Password</label>
            <input
                className="form-control"
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
        </div>
       <button className="btn btn-primary" type="submit">Submit</button>
     </form>  
    </>
  )
}
