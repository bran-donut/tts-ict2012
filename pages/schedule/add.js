import MainHeader from "../../components/MainHeader";
import SubHeader from "../../components/SubHeader";
import Layout from "../../layouts/Layout";

export default function AddSchedule() {
    return (
        <Layout>
            <MainHeader heading="Schedule" description="Equipment sampling forecast" />
            <SubHeader heading="Add to Sample Schedule" description="Displays equipment to be added to the schedule" breadCrumbItems={['Home', 'Schedule', 'Add']} />
        </Layout>
    )
}