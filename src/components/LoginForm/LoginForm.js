import './loginForm.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Layout } from '../Layout'
import { login } from '../../services/AuthService'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'

export const LoginForm = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [authUser, setAuthUser] = useAuthContext()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        setError('')
        await login(values.email, values.password)  
        navigate('/')
        setAuthUser(true)      
      } catch (error) {
        setError(error)
      }
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
    }),
  })

  useEffect(() => {
    if(authUser) {
        navigate('/')
    }
}, [authUser, navigate])

  return (
    <Layout>
      <div className='container login-form'>
        <h1 className='container-header_title'>Login</h1>
        {error && <p className='error center'>{error}</p>}
        <form
          className='form-body'
          onSubmit={(e) => {
            formik.handleSubmit(e)
          }}
        >
          <div
            className={
              formik.errors.email && formik.touched.email
                ? 'form-group invalid'
                : 'form-group'
            }
          >
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
              placeholder='E-mail'
              {...formik.getFieldProps('email')}
            />
            {formik.errors.email && formik.touched.email && (
              <p className='error'>{formik.errors.email}</p>
            )}
          </div>
          <div
            className={
              formik.errors.password && formik.touched.password
                ? 'form-group invalid'
                : 'form-group'
            }
          >
            <label htmlFor='password'>password</label>
            <input
              type='password'
              id='password'
              placeholder='Password'
              name={formik.getFieldProps('password').name}
              {...formik.getFieldProps('password')}
            />
            {formik.errors.password && formik.touched.password && (
              <p className='error'>{formik.errors.password}</p>
            )}
          </div>
          <button type='submit' className='btn submit-button'>
            Login
          </button>
        </form>
      </div>
    </Layout>
  )
}
