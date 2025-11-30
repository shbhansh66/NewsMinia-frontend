const Loader = () => (
  <p className="text-gray-500 flex items-center justify-center h-full">
    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5 0 0 5 0 12h4z" />
    </svg>
    Loading headlines...
  </p>
);

export default Loader;
