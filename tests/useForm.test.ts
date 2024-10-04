import { renderHook, act } from '@testing-library/react-hooks'
import useForm from '../hooks/useForm'

describe('useForm', () => {
  it('should initialize with initial values', () => {
    const initialValues = { name: '', email: '' }
    const { result } = renderHook(() => useForm(initialValues))

    expect(result.current.values).toEqual(initialValues)
  })

  it('should update values on handleChange', () => {
    const initialValues = { name: '', email: '' }
    const { result } = renderHook(() => useForm(initialValues))

    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'John Doe' },
      } as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.values.name).toBe('John Doe')
  })

  it('should mark field as touched on handleBlur', () => {
    const initialValues = { name: '', email: '' }
    const { result } = renderHook(() => useForm(initialValues))

    act(() => {
      result.current.handleBlur({
        target: { name: 'name' },
      } as React.FocusEvent<HTMLInputElement>)
    })

    expect(result.current.touched.name).toBe(true)
  })

  it('should reset form to initial values', () => {
    const initialValues = { name: 'John', email: 'john@example.com' }
    const { result } = renderHook(() => useForm(initialValues))

    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'Jane' },
      } as React.ChangeEvent<HTMLInputElement>)
    })

    act(() => {
      result.current.resetForm()
    })

    expect(result.current.values).toEqual(initialValues)
  })
})
