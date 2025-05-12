import { Link } from "react-router-dom";
import SectionBanner from "../components/SectionBanner";


const Contacts = () => {
    return (
        <div>
            <SectionBanner HeadingTitle='Contacts' HeadingHome={<Link to='/'> Home</Link>} SubHeadingHome='Contact'></SectionBanner>
        </div>
    );
};

export default Contacts;