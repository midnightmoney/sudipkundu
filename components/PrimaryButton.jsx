export const PrimaryButton = ({ label }) => {
  return (
    <button className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-semibold rounded-full text-base px-3 py-1 text-center mr-2 mb-2 transition-colors duration-300'>
      {label}
    </button>
  );
};
