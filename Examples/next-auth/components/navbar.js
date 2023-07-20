import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
function Navbar() {
    const { data: session,status} = useSession();
    console.log(session,status)
  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>NextAuth</a>
      </h1>
      <ul className={`main-nav loaded`}>
        <li>
          <Link href='/'>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href='/dashboard'>
            <p>{!session?"Dashboard":session.user.name.split(" ")[0]}</p>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <p>Blog</p>
          </Link>
        </li>

        {!session && (
          <li>
            <Link href='/api/auth/signin'>
              <p
                onClick={e => {
                  e.preventDefault()
                  signIn('github')
                }}>
                Sign In
              </p>
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link href='/api/auth/signout'>
              <p
                onClick={e => {
                  e.preventDefault()
                  signOut()
                }}>
                Sign Out
              </p>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
