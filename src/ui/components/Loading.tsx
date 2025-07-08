export default function Loading({title}:{title?:string}) {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-primary mx-auto mb-4"></div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Loading {title}...</h2>
        <p className="text-gray-600">Please wait while we retrieve your documents</p>
        <div className="mt-4 flex justify-center space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  )
}
