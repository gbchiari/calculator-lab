import { useState } from 'react'

export default function Calculator() {
  const [display, setDisplay] = useState('0')

  const handleClick = (value) => {
    if (display === '0') {
      setDisplay(value)
    } else {
      setDisplay(display + value)
    }
  }

  const handleClear = () => {
    setDisplay('0')
  }

  const handleEqual = () => {
    try {
      const result = eval(display)
      setDisplay(String(result))
    } catch {
      setDisplay('Error')
    }
  }

  return (
    <div>
      <h2>Calculator</h2>

      <input type='text' value={display} readOnly />

      <div>
        {[...'1234567890'].map((num) => (
          <button key={num} onClick={() => handleClick(num)}>
            {num}
          </button>
        ))}
      </div>
 
      <div>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>

      <div>
        <button onClick={handleEqual}>=</button>
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  )
}