// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import HeroSection  from './components/HeroSection'; 
import ProductSection from "./components/ProductSection"
import ProductSection1 from './components/ProductSection1';


function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header>
        <Navbar />
        <SubNavbar />
      </header>
      <HeroSection />
        <main className="container mx-auto px-4 py-8">
        <ProductSection />
        <ProductSection1 />
{/* //         <Slider />
//         <ProductSection3 />
//         <BestSellers /> */}
      </main>

    </div>
  );
}

export default App;



// import React from 'react';
// import Navbar from './components/Navbar';
// import SubNavbar from './components/SubNavbar';
// import HeroSection from './components/HeroSection';
// import ProductSection1 from './components/ProductSection1';
// import ProductSection2 from './components/ProductSection2';
// import Slider from './components/Slider';
// import ProductSection3 from './components/ProductSection3';
// import BestSellers from './components/BestSellers';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 font-sans">
//       <header>
//         <Navbar />
//         <SubNavbar />
//       </header>
//       <HeroSection />
//       <main className="container mx-auto px-4 py-8">
//         <ProductSection1 />
//         <ProductSection2 />
//         <Slider />
//         <ProductSection3 />
//         <BestSellers />
//       </main>
//       <Footer />
//     </div>
//   );
// }