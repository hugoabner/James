
import './App.css'
import { Route, Routes, Outlet } from 'react-router-dom'
import { Footer, Navbar } from './components/index';
import { AboutUs, Contact, Home, Login, Project, Register, Service } from './pages/index';
// import  useStore  from './store';


function Layout() {
  return (
    <div className='w-full flex flex-col min-h-screen '>
      {/* Navbar */}
      <Navbar />
      <div className='flex-1'>
        <Outlet />
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

function App() {
  // const { theme, isLoading } = useStore();
  return (
    <main className="bg-gray-300">
    <div className={``}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Project />} />
        </Route>
        <Route path='/sign-up' element={<Login />} />
        <Route path='/sign-in' element={<Register  />} />
      </Routes>

      {/* {isLoading && <Loading />} */}
    </div>
  </main>
  );
}


export default App
