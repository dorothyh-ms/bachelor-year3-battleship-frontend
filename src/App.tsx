
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import GamePage from './pages/GamePage';
import MainLayout from './layouts/MainLayout';
import theme from './theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthContextProvider from './context/AuthContextProvider';
import {CssBaseline, ThemeProvider} from "@mui/material";
import { RequireAuth } from './components/RequireAuth';
import AvailableGamesPage from './pages/AvailableGamesPage';

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(

      <Route element={<RequireAuth />}>
          <Route element={<MainLayout/>}>
                <Route index element={<AvailableGamesPage />}/>
              <Route path="/:gameId" element={<GamePage/>}/>
          </Route>
      </Route>


  )
);

function App() {


  return (
    <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </AuthContextProvider>
</QueryClientProvider>
  )
}

export default App
