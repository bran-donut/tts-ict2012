import Layout from "../layouts/Layout";

import { InfoCircleOutlined } from "@ant-design/icons";
import MainHeader from "../components/MainHeader";
import SubHeader from "../components/SubHeader";

const headerDetails = [
  {
    title: 'Staff ID',
    subtitle: '210228491'
  },
  {
    title: 'Title',
    subtitle: 'Senior Nurse'
  }
]

export default function Main() {
  return (
    <Layout>
      <MainHeader heading="Welcome back, Janice Ng" description="What would you like to do today?" details={headerDetails} />
      <SubHeader heading="Dashboard" description="This area displays all the essential information relating to the equipment under tracking" />
      {/* <section className="px-10 py-5 text-black bg-white">
        <h1 className="text-3xl">Dashboard</h1>
        <p className="mt-5 text-sm sm:text-lg text-[#828282] flex items-center gap-2">
          <InfoCircleOutlined />
          This area displays all the essential information relating to the equipment under tracking.
        </p>
      </section> */}
      <section className="grid min-h-screen grid-cols-1 gap-5 px-10 py-5 md:grid-cols-2">
        <div className="p-5 bg-white">to samp</div>
        <div className="p-5 bg-white">pend res</div>
        <div className="p-5 bg-white md:col-span-2">sample res</div>
        <div className="p-5 bg-white">on quaran</div>
        <div className="p-5 bg-white">on repair</div>
      </section>
      {/*<NavBar />*/}
    </Layout>
  );
}
