import { useState } from "react";
import NavItame from "./NavItame";
import { AiOutlineMenu } from "react-icons/ai";


const NavBar = () => {
    const [show, setShow] = useState(false)
    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/services', name: 'Services', id: 'services' },
        { path: '/contact', name: 'Contact', id: 'contact' },
    ];

    const { id, name, path } = routes;
    console.log(id, name, path);

    return (
        <>
        <section>
            
        <div className=" flex justify-between items-center px-4 p-2   bg-slate-600">
            <span className=" text-3xl text-white  md:block ">Logo</span>
            <span onClick={()=> setShow(!show)}  className="  lg:hidden btn btn-accent"><AiOutlineMenu className=" text-3xl"></AiOutlineMenu></span>
            <span className={`lg:flex gap-3 absolute lg:static duration-1000 w-full md:w-fit rounded-lg   bg-slate-600 p-4  ${ show? `top-14 left-0 `:`-top-60 left-0` }`}>
            {
                routes.map((r) => <NavItame key={r.id} name={r.name} path={r.path} ></NavItame>)
            }
            </span>
           
        </div>
        </section>
       
        </>
    );
};

export default NavBar;