import { ShopContextProvider } from "./components/context/shopContext";
import Navbar1 from "./components/layouts/navbar/page";
import ItemDetail from "./components/pages/itemDetail/itemDetail";


export default function CreateEventsPage() {
    return (
        <>
        <ShopContextProvider>  
        <Navbar1/>
        <ItemDetail/>
        </ShopContextProvider>
        </>
    );
}
