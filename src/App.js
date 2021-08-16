import './App.scss';
import Layout from './Layout/Layout';
import EntriesPage from './EntriesPage/EntriesPage';
import { ModalProvider } from './common/Modal';

function App() {
  return (
    <ModalProvider>
      <Layout>
        <EntriesPage />
      </Layout>
    </ModalProvider>
  );
}

export default App;
