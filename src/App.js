import AppRoutes from './routes';
import GlobalStyles from './globalStyles';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <GlobalStyles />
      <AppRoutes />
    </CartProvider>
  );
}

export default App;
