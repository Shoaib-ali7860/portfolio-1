import Head from 'next/head';
import Navbar from './Navbar.js'
const Layout=({children})=>(
<div  >
   <div className="h-100" >
    <Navbar/>
    </div>
    <div>
    {children}
    </div>
    

</div>

)
export default Layout;