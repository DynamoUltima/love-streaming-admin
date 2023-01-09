import { Footer } from "./comps/footer/footer";
import Navbar from "./comps/navbar/navbar";


const Layout =({ children }: { children: React.ReactNode })=>{

    return (
        <div className=" h-full w-full px-24 pt-5 ">
          <Navbar/>
         {children}
         <Footer/>

        </div>
    );
}

export default Layout;
