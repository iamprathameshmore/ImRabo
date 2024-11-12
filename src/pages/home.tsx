import { Link } from "react-router-dom"


function HomeScreen() {
  return (
   <>
   <div className='w-full h-screen flex justify-center items-center'>
    <p className='text-center font-syne text-4xl font-medium'>Welcome <br /> College Placements </p>
    <Link to='/dashboard'><button>sign-in</button></Link>
    <Link to='/sign-in'><button>sign-in</button></Link>
   </div>
   </>
  )
}

export default HomeScreen