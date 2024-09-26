import { BrowserRouter as Router } from "react-router-dom";
import { SearchUsersForm } from "components/forms";
import { UsersList } from "components/UsersList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "components/common";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <>
      <Router>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <SearchUsersForm />
            <UsersList />
          </Layout>
        </QueryClientProvider>
      </Router>
    </>
  );
}

export default App;
