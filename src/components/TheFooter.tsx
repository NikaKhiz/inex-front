const currentDate = new Date().getFullYear();
const TheFooter = () => {
  return (
    <footer className='absolute bottom-0 w-full px-4 py-2 md:px-8 md:py-4 bg-darkBlack text-primaryBrown'>
      <p className='capitalize text-sm font-medium'>
        &copy; {currentDate} Inexgroup. all rights reserved.
      </p>
    </footer>
  );
};

export default TheFooter;
