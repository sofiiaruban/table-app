import Reactf from 'react'

export default function Login() {
  return (
    <form>
      <input type="email" name="email" placeholder="Enter email" />
      <input type="password" name="password" placeholder="Enter password" />
      <button type="submit">Log in</button>
    </form>
  )
}
