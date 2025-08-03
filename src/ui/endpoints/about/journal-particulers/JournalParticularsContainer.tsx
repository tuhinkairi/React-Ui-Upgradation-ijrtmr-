import JournalParticulars from "../../../components/JournalParticulars";
import CommonLayout from "../../../components/layout/CommonLayout";
import VerificationSection from "../VerificationSection";

const JournalParticularsContainer = () => {
    return (
        <CommonLayout className='space-y-12 px-0 sm:px-6 bg-white'>
            <JournalParticulars/>
            <VerificationSection/>
        </CommonLayout>
    );
};

export default JournalParticularsContainer;
