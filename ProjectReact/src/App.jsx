
import NavBar from "./components/NavBar";
import Content from "./components/Content/Content";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
//import AppCss from './App.css';
import './index.css'
import GalleryBeauty from "./GalleryBeauty/GalleryBeauty";
//import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import Test from "./components/test";
import Features from "./components/Features/Features";
import AboutPage from "./components/AboutPage/AboutPage";
import FormComponent from "./components/FormComponents/FormComponent";



const App = () => {
    const items = [
        {
            image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQmT1sbPN1b0pYL4S89xAtLZPg4Mf9XlxKQ7cYYJGza5YspfxIyoHpOK_XAiykB',
            price: 100,
            reductionRate: 10,
            location: 'New York'
        },
        {
            image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSCSdYI0swJSFAgg4qkdhuWFYny56rRTFBz18yWE24l7IKlVnS3CFIMQwP1SOgZ',
            price: 200,
            reductionRate: 20,
            location: 'London'
        },

        {
          image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQCiD-LMHEnGiyQgb62d1j4cRE0xQWvYdE-JKny9TyYRKH9AQuldkfxiupkuWKE',
          price: 100,
          reductionRate: 10,
          location: 'New York'
      },
      {
        image: 'https://media.istockphoto.com/id/1403617423/photo/young-woman-tourist-in-sun-hat-and-white-dress-standing-in-front-of-eiffel-tower-in-paris-at.jpg?s=612x612&w=0&k=20&c=5M4C_uB1F7HVhLG1Z82yn3uthqAU_arGvpJiNO88bhg=',
          price: 200,
          reductionRate: 20,
          location: 'London'
      },
      {
        image: 'https://media.istockphoto.com/id/1384272116/photo/tourists-taking-a-selfie.jpg?s=612x612&w=0&k=20&c=I7yebABeA4Go0BAVSG2eB7hTFJu-ViPI1GXewgOIw0c=',
        price: 100,
        reductionRate: 10,
        location: 'New York'
    },
    {
      image: 'https://media.istockphoto.com/id/1384272116/photo/tourists-taking-a-selfie.jpg?s=612x612&w=0&k=20&c=I7yebABeA4Go0BAVSG2eB7hTFJu-ViPI1GXewgOIw0c=',
        price: 200,
        reductionRate: 20,
        location: 'London'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr4ueh5pMa4K93bcfqa5rE57As9_hOnPxeAN6ZzEj0rfU6NfnRbCkXep0NR3t9',
      price: 100,
      reductionRate: 10,
      location: 'New York'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoOpBkHzbpu_vqNx55ZtzjMXgbYJe79JGq6EId8uI4eGpEXdG146UozzbdWhaZ',
      price: 200,
      reductionRate: 20,
      location: 'London'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr4ueh5pMa4K93bcfqa5rE57As9_hOnPxeAN6ZzEj0rfU6NfnRbCkXep0NR3t9',
    price: 100,
    reductionRate: 10,
    location: 'New York'
},
{
image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQOp_VhuvEo5cBoFPVGnbfOj-axhpn2-NJrgYkhSgUqQDjVPaddKLS4lWCi7kPE',
  price: 200,
  reductionRate: 20,
  location: 'London'
},
{
  image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRxcaEpnZFd0CWfGVJzU20rMVqL4_2YpKA5HDDRWSGQKXrlxH5PqqpYkgSX5MSL',
  price: 100,
  reductionRate: 10,
  location: 'New York'
},
{
image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKxT9BCU-XIobOrdinKSsS8Gd4j4K0YE_8bd_rg0hVfGvlqivpI8469ZHihD8k',
  price: 200,
  reductionRate: 20,
  location: 'London'
},
{
  image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQYtyTgF28MYdUf7PDJ60ldE2g4YHbg8e3JJw_J-qwPSeet44KDjfgws9LsGaoq',
  price: 100,
  reductionRate: 10,
  location: 'New York'
},
{
image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ0zsfdywnyhJKo7YS7y8iBrODWpEOYSgx2CXsaGvuLNGKpZY8DxpCIOiabEJRt',
  price: 200,
  reductionRate: 20,
  location: 'London'
}

        
    ];

    return (
        <div>
          
            <NavBar />
            <Content />
            <About />
            <GalleryBeauty items={items} />
            {/* <BackgroundVideo/> */}
            <Test/>
            
            <div className="App">
            <h3>| Amazing Offers</h3>
            <h1>
            Special Deals And Last Minute <br/> Amazing Offers
            </h1>
                <Gallery items={items} />
            </div>
            <Footer/>

            <Features/>
            <AboutPage/>
            <FormComponent/>
            
            
            
        </div>
    );
};

export default App;
