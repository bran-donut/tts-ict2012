import Layout from "../layouts/Layout";
import MainHeader from "../components/MainHeader";
import SubHeader from "../components/SubHeader";
import { ItemCard } from "../components/EquipmentCard";
import { equipments } from "../Constants";
import { useState } from "react";
import Router from "next/router";

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
  const [equipmentData, setEquipmentData] = useState(equipments);

  const handleEdit = (i) => {
    let type;
    if (equipmentData[i].scopeType) type = "scope";
    else type = "washer";

    let formSubmitted = window.localStorage.getItem('FORM_SUBMITTED' + i);
    let step;
    window.localStorage.setItem('EQUIPMENT', i);
    formSubmitted === "true" ? step = "/sampling" : step = "/cleaning";

    Router.push({
      pathname: "/record/" + type + step,
      query: { index: i },
    });
  };

  return (
    <Layout>
      <MainHeader heading="Welcome back, Janice Ng" description="What would you like to do today?" details={headerDetails} />
      <SubHeader heading="Home" description="This area displays all the essential information relating to the equipment under tracking" />
      <section className="grid min-h-screen grid-cols-1 gap-5 px-8 py-5 md:grid-cols-2">
        <Card title="TO SAMPLE" description="Equipment to be sampled as soon as possible">
          {equipments.slice(0, 3).map((item, i) => {
            return (
              <ItemCard
                key={i}
                index={i}
                data={item}
                titles={["Sample by"]}
                keys={["sampleDate"]}
                select={false}
                edit={true}
                onClickEdit={() => handleEdit(i)}
              />
            );
          })}
        </Card>
        <Card title="PENDING RESULTS" description="Equipment that are awaiting swab or fluid results">
          {equipments.slice(0, 3).map((item, i) => {
            return (
              <ItemCard
                key={i}
                index={i}
                data={item}
                titles={["Sample by"]}
                keys={["sampleDate"]}
                select={false}
                edit={true}
                onClickEdit={() => handleEdit(i)}
              />
            );
          })}
        </Card>
        <Card title="SAMPLED RESULTS" description="Showing the most recent sampled results" big={true}>
          {equipments.slice(0, 2).map((item, i) => {
            return (
              <ItemCard
                key={i}
                index={i}
                data={item}
                titles={["Fluid Result", "Swab Result"]}
                keys={["fluidResult", "swabResult"]}
                select={false}
                edit={false}
              />
            );
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
