export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 px-6">
      {/* Error Code */}
      <h1 className="text-9xl font-extrabold text-blue-900 tracking-widest">404</h1>
      
      {/* Message */}
      <p className="text-2xl md:text-3xl font-semibold mt-4">Oops! Page not found</p>
      <p className="text-gray-500 mt-2 text-center">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <div className="mt-6">
        <a
          href="/"
          className="px-6 py-3 text-white bg-blue-900 hover:bg-blue-900 rounded-2xl shadow-lg transition-all duration-300"
        >
          Go Back Home
        </a>
      </div>

      {/* Extra touch */}
      <div className="absolute bottom-4 text-sm text-gray-400">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </div>
  );
}
