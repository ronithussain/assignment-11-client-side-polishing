import AboutPage from '../components/AboutPage';
import CompanyCategories from '../components/CompanyCategories';
import PopularCategories from '../components/fPopularCategories';
import HomeCard from '../components/HomeCard';
import MeetOurPartner from '../components/MeetOurPartner';
import Banner from './shared/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCategories></PopularCategories>
            <div className='bg-gradient-to-b from-[#FFF9F9] to-[#FFF9F9] pb-14'>
                <HomeCard></HomeCard>
            </div>

            <CompanyCategories></CompanyCategories>
            <AboutPage></AboutPage>


            <MeetOurPartner></MeetOurPartner>
        </div>
    );
};

export default Home;