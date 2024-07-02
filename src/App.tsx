import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyles from "./styles/GlobalStyle";
import styled from "styled-components";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: false,
      },
    },
  });
  const Home = lazy(() => import("./pages/home/Home"));
  const Notices = lazy(() => import("./pages/notices/Notices"));
  const Notice = lazy(() => import("./pages/notices/notice/Notice"));
  const Meal = lazy(() => import("./pages/meal/Meal"));
  const Setting = lazy(() => import("./pages/setting/Setting"));
  const NotFound = lazy(() => import("./pages/error/NotFound"));
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyles />
        <DefaultDiv>
          <Suspense>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/notice" Component={Notices} />
              <Route path="/notice/:id" Component={Notice} />
              <Route path="/meal" Component={Meal} />
              <Route path="/setting" Component={Setting} />
              <Route path="*" Component={NotFound} />
            </Routes>
          </Suspense>
        </DefaultDiv>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

const DefaultDiv = styled.div`
  width: 100%;
  max-width: 480px;
  min-height: 100dvh;
  margin: 0 auto;
  padding: 0 16px;
  background: white;
`;
export default App;
