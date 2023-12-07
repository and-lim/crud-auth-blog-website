import NavList from '../../atoms/NavList';

const Navbar = () => {
  return (
    <div className="h-20 shadow flex px-20 justify-between items-center">
      <div>
        <h1 className="font-bold text-2xl">Blogs Website 😁</h1>
      </div>
      <div>
        <input type="text" placeholder="Search" className="rounded-full" />
      </div>
      <div>
        <ul className="flex gap-5">
          <NavList href="/">Home</NavList>
          <NavList href="/blog">Blog</NavList>
          <NavList href="/login">Login</NavList>
          <NavList href="/register">Register</NavList>
          <NavList href="/form">Make Blogs</NavList>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
