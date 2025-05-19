import AboutPage from '../components/AboutPage';
import Banner2 from '../components/Banner2';
import BlogCategories from '../components/BlogCategories';
import CompanyCategories from '../components/CompanyCategories';
import ConvenientAccess from '../components/ConvenientAccess';
import PopularCategories from '../components/fPopularCategories';
import HomeCard from '../components/HomeCard';
import MeetOurPartner from '../components/MeetOurPartner';
import Banner from './shared/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCategories></PopularCategories>

            <div className='sm:pb-12 pb-8'
            style={{ backgroundColor: 'var(--slider-bg)' }}
            >
                <HomeCard></HomeCard>
            </div>

            <CompanyCategories></CompanyCategories>
            <MeetOurPartner></MeetOurPartner>
            <Banner2></Banner2>
            <BlogCategories></BlogCategories>
            <ConvenientAccess></ConvenientAccess>
            <AboutPage></AboutPage>
        </div>
    );
};

export default Home;