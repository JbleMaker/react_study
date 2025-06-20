import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainRouter from "./routerStudy/Auth/Routers/MainRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainRouterReactQuery from "./routerStudy/Auth/Routers/MainRouterReactQuery";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60,
        retry: 0,
        // refetchOnWindowFocus: false,
        // default -> true
        // 탭 후 요청을 날리는 것을 막는 기능
      },
    },
    // retry: 3 // 요청횟수 default 3회
  });

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MainRouterReactQuery />
      </QueryClientProvider>
      {/* <MainRouter /> */}
    </BrowserRouter>
  );
}

export default App;
