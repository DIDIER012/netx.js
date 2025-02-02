import { BrowserRouter as Router } from 'react-router-dom';  
import Navbar from './components/layouts/navbar/navbar';  
import ItemDetail from './components/pages/itemDetail/itemDetail';
import { ShopContextProvider } from './context/shopContext';

function App() {  
return (  
<Router> 
    <ShopContextProvider>
    <Navbar />  
    <ItemDetail/>
    </ShopContextProvider>
</Router>  
);  
}  

export default App;