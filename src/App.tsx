import { TheHeader } from 'src/components';
import TheFooter from 'src/components/TheFooter';
import { HomePage } from 'src/pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <main className='min-h-screen bg-gradientPrimary relative'>
        <TheHeader />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        <TheFooter />
      </main>
    </>
  );
}

export default App;
