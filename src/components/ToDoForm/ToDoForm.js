import './todoForm.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const ToDoForm = ({addNewItem}) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      image: null,
    },
    onSubmit: (values) => {
      console.log(values)
      addNewItem({
        title: values.title,
        image: values.image,
        complete: false,
      })
        formik.resetForm()
        //reset image input
        document.getElementById('image').value = ''
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      image: Yup.mixed().required('Image is required'),
    }),
  })

  return (
    <div className='container'>
      <h1 className='container-header_title'>Add New Task</h1>
      <form
        className='form-body'
        onSubmit={(e) => {
          formik.handleSubmit(e)
        }}
      >
        <div
          className={
            formik.errors.title && formik.touched.title
              ? 'form-group invalid'
              : 'form-group'
          }
        >
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            placeholder='Title'
            accept='image/*'
            {...formik.getFieldProps('title')}
          />
          {formik.errors.title && formik.touched.title && (
            <p className='error'>{formik.errors.title}</p>
          )}
        </div>
        <div
          className={
            formik.errors.image && formik.touched.image
              ? 'form-group invalid'
              : 'form-group'
          }
        >
          <label htmlFor='image'>Image</label>
          <input
            type='file'           
            id='image'
            name={formik.getFieldProps('image').name}            
            onChange={(e) => {
              // console.log(e.target.files[0])
              // setImageInput(URL.createObjectURL(e.target.files[0]))
              formik.setFieldValue(
                'image',
                URL.createObjectURL(e.target.files[0])
              )
            }}
          />
          {formik.errors.image && formik.touched.image && (
            <p className='error'>{formik.errors.image}</p>
          )}
        </div>
        <button type='submit' className='btn submit-button'>Add</button>
      </form>
    </div>
  )
}
