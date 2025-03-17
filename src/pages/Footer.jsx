const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-900 py-2 text-center w-full fixed bottom-0 min-h-[40px]">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} 
          <a href="https://localestartup.vercel.app" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">LocalEStartup</a>. 
          All rights reserved. | Developed by 
          <a href="https://sudhakar-portfolio.vercel.app" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">Sudha</a> 🔥
        </p>
      </div>
    </footer>
  );
};

export default Footer;