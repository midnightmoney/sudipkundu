export const SecondaryButton = ({ label }) => {
  return (
    <button className='text-cyan-700 hover:text-white border border-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-semibold rounded-full text-base px-3 py-1 text-center mr-2 mb-2 dark:border-cyan-500 dark:text-cyan-500 dark:hover:text-white dark:hover:bg-cyan-600 dark:focus:ring-cyan-800 transition-colors duration-300'>
      {label}
    </button>
  );
};
