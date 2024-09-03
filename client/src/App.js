import Header from "./components/Header.jsx"
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Clients from './components/Clients.jsx';
import AddClientModal from "./components/AddClientModal.jsx";
import {Route, Routes,BrowserRouter} from 'react-router-dom'
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});

function App() {

  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
