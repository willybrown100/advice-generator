import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import { QueryClient, QueryClientProvider } from 'react-query'


// const queryClient = new  QueryClient({
//   defaultOptions:{
//     queries:{
//       staleTime:60*1000
//     }
//   }
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
{/* <QueryClientProvider client={queryClient}> */}
    {/* <ReactQueryDevtools/> */}
    <App />
{/* </QueryClientProvider> */}
  </React.StrictMode>,
)
