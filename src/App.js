import './App.scss';
import Layout from './components/Layout/Layout';
import EntriesPage from './components/EntriesPage/EntriesPage';
import { ModalProvider, Modal } from './commonComponents/Modal';

function App() {
  return (
    <ModalProvider>
      <Layout>
        <EntriesPage />
      </Layout>
      <Modal />
    </ModalProvider>
  );
}

export default App;
