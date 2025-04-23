export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-8">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops! Page not found.</h2>
      <p className="text-gray-600 mb-6">
        लगता है आपने गलत रास्ता पकड़ लिया है। कृपया होमपेज पर वापस जाएं।
      </p>
      <a href="/" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
        🏠 Go to Homepage
      </a>
    </div>
  );
}
