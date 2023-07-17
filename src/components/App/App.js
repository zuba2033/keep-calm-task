import '../../styles/styles.scss';

import './App.scss';

import image1 from '../../assets/promo-images/image1.jpg';
import image2 from '../../assets/promo-images/image2.jpg';
import image3 from '../../assets/promo-images/image3.jpg';
import image4 from '../../assets/promo-images/image4.jpg';

import { slides } from '../../assets/slider-images/sliderImages';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ArticleGroup from '../ArticleGroup/ArticleGroup';
import Article from '../Article/Article';
import Slider from '../Slider/Slider';

function App() {

  const articleData = {
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    text: `Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
  }

  const articleGroupTitle = 'ut aliquip ex ea commodo consequat';

  return (
    <div className="app">
      <Header/>
      <main className="main">
        <ArticleGroup title={articleGroupTitle}>
          <Article articleData={articleData} image={image1} />
          <Article articleData={articleData} image={image2} reverse={true} />
        </ArticleGroup>
        <Slider slides={slides}/>
        <ArticleGroup title={articleGroupTitle}>
          <Article articleData={articleData} image={image3} />
          <Article articleData={articleData} image={image4} reverse={true} />
        </ArticleGroup>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
