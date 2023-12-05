import NavContainer from "./navigations";
import Provider from "./context/Provider";
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from "react";
import { MenuProvider } from 'react-native-popup-menu';

function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Provider>
      <MenuProvider>
        <QueryClientProvider client={queryClient}>
          <NavContainer />
        </QueryClientProvider>
      </MenuProvider>
    </Provider>
  );
}

export default App;

