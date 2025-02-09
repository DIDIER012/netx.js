import { ShopContextProvider } from "./components/context/shopContext";
import Navbar1 from "./components/layouts/navbar/page";


export default function CreateEventsPage() {
    return (
        <>
        <ShopContextProvider>  
        <Navbar1/>
            <Component {...pageProps} />  
        </ShopContextProvider>
        </>
    );
}
