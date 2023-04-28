import AppTheme from "../themes/AppTheme";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <a href="" className="text-2xl font-semibold">
        Finance Fluent
      </a>
      <div className="flex justify-end items-center">
        <AppTheme />
        <div className="mx-2"></div>
        <p className="text-lg">
          Menu <i className="bi bi-caret-down-fill"></i>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
