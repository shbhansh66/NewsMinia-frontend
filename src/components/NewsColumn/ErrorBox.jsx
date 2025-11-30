const ErrorBox = ({ message }) => (
  <div className="text-red-600 bg-red-50 border border-red-200 p-3 rounded-lg">
    <p className="font-semibold">⚠️ Error</p>
    <p className="text-sm mt-1">{message}</p>
  </div>
);

export default ErrorBox;
