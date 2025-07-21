import { Link } from 'react-router-dom'

function ErrorFallback() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <h1 className="text-8xl md:text-9xl font-extrabold text-gray-800 drop-shadow">
        ⚠️
      </h1>
      <div className="absolute rotate-12 rounded bg-red-600 px-3 py-1 text-sm xl:text-base 2xl:text-lg text-white shadow-md">
        Something Went Wrong
      </div>
      <button className="mt-10 rounded-md bg-gray-800 px-6 py-2 text-white hover:bg-gray-700 transition">
        <Link to="/" reloadDocument>Return Home</Link>
      </button>
      <p className="mt-4 text-gray-600 text-center">
        Sorry, an unexpected error has occurred. Please try again later.
      </p>
    </div>
  )
}

export default ErrorFallback
