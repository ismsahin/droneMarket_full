import React from 'react'

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";



const Nav = () => {

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);


  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 place-items-center">
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/" className="flex items-center hover:text-red-800 hover:bg-white p-1 px-2 rounded-xl duration-300 text-white">
          Anasayfa
        </a>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/searchpage" className="flex items-center hover:text-red-800 hover:bg-white p-1 px-2 rounded-xl duration-300 text-white">
          Ürün Arama
        </a>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/iletisim" className="flex items-center hover:text-red-800 hover:bg-white p-1 px-2 rounded-xl duration-300 text-white">
          İletişim
        </a>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/hesabim" className="flex items-center hover:text-red-800 hover:bg-white p-1 px-2 rounded-xl duration-300 text-white">
          Hesabım
        </a>
      </Typography>
    </ul>
  );





  return (


    <Navbar shadow='false' blurred="false" fullWidth="true" className="border-none bg-opacity-100 sticky top-0 z-50 max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 max-h-[768px] bg-blue-700 ">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-bold text-xl lg:text-2xl text-white"
        >
          Drone Market
        </Typography>
        <div className="flex items-center gap-4 ">
          <div className="mr-4 hidden lg:block ">{navList}</div>
          <div className="flex items-center gap-x-1">
          <Button
                variant="text"
                size="md"
                className="hidden lg:inline-block text-black bg-blue-100"
              >
                <span><a href="/girisyap" className="">
                            Giriş Yap
                        </a></span>
              </Button>
            <Button
              variant="gradient"
              size="md"
              className="hidden lg:inline-block"
            >
              <span><a href="/kayitol" className="">
                            Kayıt Ol
                        </a></span>
            </Button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav} >
        {navList}
        <div className="flex items-center gap-x-1">
          <Button fullWidth variant="text" size="sm" className="">
            <span><a href="/girisyap" className="">
                            Giriş Yap
                        </a></span>
          </Button>
          <Button fullWidth variant="gradient" size="sm" className="">
            <span><a href="/kayitol" className="">
                            Kayıt Ol
                        </a></span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>



  )
}

export default Nav