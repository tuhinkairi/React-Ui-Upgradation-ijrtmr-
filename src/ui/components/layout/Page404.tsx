import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <div className="absolute rotate-12 rounded bg-orange-600 px-2 text-sm xl:text-base 2xl:text-2xl text-white">Page Not Found</div>
      <button className="mt-8 rounded-md bg-gray-800 px-4 py-2 text-white hover:bg-gray-700">
        <Link to="/">Return Home</Link>
      </button>
      <p className="mt-4 text-gray-600">Sorry, the page you're looking for doesn't exist.</p>
    </div>
  )
}

export default Page404
