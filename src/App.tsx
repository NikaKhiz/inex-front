import { TheHeader } from 'src/components';
import TheFooter from 'src/components/TheFooter';
import { HomePage, LoginPage, RegisterPage, Dashboard } from 'src/pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <main className='min-h-screen bg-gradientPrimary relative'>
        <TheHeader />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Routes>
        <TheFooter />
      </main>
    </>
  );
}

export default App;
