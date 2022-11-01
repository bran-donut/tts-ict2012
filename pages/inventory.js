import Layout from "../layouts/Layout";
import { useState } from "react";
import NavBar from "../components/NavBar";
import SubHeader from "../components/SubHeader";


export default function Inventory() {

  const [tab, setTab] = useState(['Scope', 'Washer (AER)', 'Miscellaneous']);
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Layout>
      <section className="p-5 text-white from-[#10141A] to-[#171D26] bg-gradient-to-br">
        <div className="p-5 text-white">
          <h2 className="text-5xl font-semibold">Inventory</h2>
          <p className="text-[#BDBDBD] mt-2">View all the equipment and miscellaneous inside the system</p>
          <p className="mt-10 text-[#E0E0E0]">Total Equipment in Inventory</p>
          <p className="text-[#BDBDBD]">36</p>
        </div>
      </section>
      <SubHeader
        breadCrumbItems={['Home', 'Inventory']}
        header= {['Scope', 'Washer (AER)', 'Miscellaneous']}
        description='Displays all the equipment inside the system'
        tabContent= {['Scope', 'Washer (AER)', 'Miscellaneous']}
      />
      {/* <NavBar /> */}
      <section className={`${ tab[tabIndex] == "scope" ? "visible" : "invisible"}grid min-h-screen grid-rows-4`}>
        <div className="bg-tts-background">hello</div>
        <div className="bg-tts-background">hello</div>
        <div className="bg-tts-background">hello</div>
        <div className="bg-tts-background">hello</div>
      </section>

    </Layout>
  );
}
