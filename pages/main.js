import Layout from "../layouts/Layout";
import NavBar from "../components/NavBar";

import { InfoCircleOutlined } from "@ant-design/icons";

export default function Main() {
  return (
    <Layout>
      <section className="p-5 text-white from-[#10141A] to-[#171D26] bg-gradient-to-br">
        <div className="p-5 text-white">
          <h2 className="text-5xl font-semibold">Welcome back, Janice Ng</h2>
          <p className="text-[#BDBDBD] mt-3">What would you like to do today?</p>
          <div className="flex flex-row gap-20 mt-12">
            <div>
              <p className="text-[#E0E0E0]">Staff ID</p>
              <p className="mt-3 text-[#BDBDBD]">210228491</p>
            </div>
            <div>
              <p className="text-[#E0E0E0]">Title</p>
              <p className="mt-3 text-[#BDBDBD]">Senior Nurse</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-10 py-5 text-black bg-white">
        <h1 className="text-3xl">Dashboard</h1>
        <p className="mt-5 text-lg text-[#828282] flex items-center gap-2">
          <InfoCircleOutlined />
          This area displays all the essential information relating to the equipment under tracking.
        </p>
      </section>
      <section className="grid grid-cols-2 gap-5 px-10 py-5">
        <div className="p-5 bg-white">to samp</div>
        <div className="p-5 bg-white">pend res</div>
        <div className="col-span-2 p-5 bg-white">sample res</div>
        <div className="p-5 bg-white">on quaran</div>
        <div className="p-5 bg-white">on repair</div>
      </section>
      {/*<NavBar />*/}
    </Layout>
  );
}
