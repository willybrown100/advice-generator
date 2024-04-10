
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./components/AppLayout"






const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
   
    <QueryClientProvider client={queryClient}>
      <AppLayout />
    </QueryClientProvider>
    
  );
}

export default App




