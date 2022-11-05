import Layout from "../layouts/Layout";

import MainHeader from "../components/MainHeader";
import SubHeader from "../components/SubHeader";
import { ItemCard, ItemWrapper } from "../components/EquipmentCard";
import { equipments } from "../Constants";

const headerDetails = [
  {
    title: "Staff ID",
    subtitle: "210228491",
  },
  {
    title: "Title",
    subtitle: "Senior Nurse",
  },
];

export default function Home() {
  return (
    <Layout>
      <MainHeader heading="Welcome back, Janice Ng" description="What would you like to do today?" details={headerDetails} />
      <SubHeader heading="Home" description="This area displays all the essential information relating to the equipment under tracking" />
      <section className="grid min-h-screen grid-cols-1 gap-5 px-10 py-5 md:grid-cols-2">
        <Card title="TO SAMPLE" description="Equipment to be sampled as soon as possible">
          {equipments.slice(0, 3).map((item, i) => {
            return <ItemCard key={i} index={i} data={item} titles={["Sample by"]} keys={["sampleDate"]} select={false} edit={true} />;
          })}
        </Card>
        <Card title="PENDING RESULTS" description="Equipment that are awaiting swab or fluid results">
          {equipments.slice(0, 3).map((item, i) => {
            return <ItemCard key={i} index={i} data={item} titles={["Sample by"]} keys={["sampleDate"]} select={false} edit={true} />;
          })}
        </Card>
        <Card title="SAMPLED RESULTS" description="Showing the most recent sampled results" big={true}>
          {equipments.slice(0, 2).map((item, i) => {
            return <ItemCard key={i} index={i} data={item} titles={["Sample by"]} keys={["sampleDate"]} select={false} edit={true} />;
          })}
        </Card>
        <Card title="ON QUARANTINE" description="Equipment that are on quarantine"></Card>
        <Card title="ON REPAIR" description="Equipment that are sent for repair"></Card>
      </section>
      {/*<NavBar />*/}
    </Layout>
  );
}

export function Card(props) {
  return (
    <div className={`p-5 bg-white ${props.big ? `md:col-span-2` : `col-span-1`}`}>
      <h4 className="font-bold">{props.title}</h4>
      <p className="text-sm text-gray-400">{props.description}</p>
      {props.children}
    </div>
  );
}
