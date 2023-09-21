import { TheHeader } from 'src/components';
import TheFooter from 'src/components/TheFooter';

function App() {
  return (
    <>
      <main className='min-h-screen bg-gradientPrimary relative'>
        <TheHeader />
        {/* here will go routes */}
        <TheFooter />
      </main>
    </>
  );
}

export default App;
