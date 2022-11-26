import Layout from "../layouts/Layout";
import MainHeader from "../components/MainHeader";
import SubHeader from "../components/SubHeader";
import { ItemCard } from "../components/EquipmentCard";
import { useEffect, useState } from "react";
import Router from "next/router";
import { equipments, savedItems } from "../Constants";

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
  const [equipmentData, setEquipmentData] = useState([]);
  const [sampledEquipmentIndex, setSampledEquipmentIndex] = useState();
  const [sampledEquipment, setSampledEquipment] = useState({});
  const [sampleArray, setSampleArray] = useState([]);

  const handleEdit = (i) => {
    let type;
    let step; 
    if (equipmentData[i].scopeType) type = "scope";
    else type = "washer";

    let savedItems = JSON.parse(window.localStorage.getItem("savedstate"+i));
    savedItems["dryingFinished"] === "true" ? step = "/sampling" : step = "/cleaning";

    Router.push({
      pathname: "/record/" + type + step,
      query: { index: i },
    });
  };

  function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
  } 

  useEffect(() => {
    let items = JSON.parse(window.localStorage.getItem("equipments"));
    setEquipmentData(items);
    for (let i = 0; i < equipments.length; i++) {
      let checkForSample = JSON.parse(window.localStorage.getItem("savedstate"+i));
      console.log(checkForSample);
      if (checkForSample.length != 0 && checkForSample["dryingFinished"] === "true")
      {
        // setSampleArray(sampleArray => [...sampleArray, i]);
        let arr = [...sampleArray, i];
        setSampleArray(removeDuplicates(arr));
      }
    }
    // code below is assuming EQUIPMENT is set in localstorage already (uncomment below once is set)
    // let index = window.localStorage.getItem('EQUIPMENT');

    // let index = 1;
    // setSampledEquipmentIndex(index);
    // setSampledEquipment(items[index]);
  }, [])

  // useEffect(() => {
  //   setSampledEquipmentIndex([...new Set(sampleArray)]);
  //   console.log(sampledEquipmentIndex)
  // }, [sampleArray])

  return (
    <Layout>
      <MainHeader heading="Welcome back, Janice Ng" description="What would you like to do today?" details={headerDetails} />
      <SubHeader heading="Home" description="This area displays all the essential information relating to the equipment under tracking" />
      <section className="grid min-h-screen grid-cols-1 gap-5 px-8 py-5 md:grid-cols-2">
        <Card title="TO SAMPLE" description="Equipment to be sampled as soon as possible">
          {equipmentData.slice(0, 3).map((item, i) => {
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

            {/* {sampleArray.map((e, i) => <ItemCard
            key={i}
            index={i}
            data={equipmentData[e]}
            titles={["Sample by"]}
            keys={["sampleDate"]}
            select={false}
            edit={true}
            onClickEdit={() => handleEdit(e)}
          />)} */}

        </Card>
        <Card title="PENDING RESULTS" description="Equipment that are awaiting swab or fluid results">
          {/* {equipmentData.slice(0, 3).map((item, i) => {
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
          })} */}
          {sampleArray.map((e, i) => <ItemCard
            key={i}
            index={i}
            data={equipmentData[e]}
            titles={["Sample by"]}
            keys={["sampleDate"]}
            select={false}
            edit={true}
            onClickEdit={() => handleEdit(e)}
          />)}
        </Card>
        <Card title="SAMPLED RESULTS" description="Showing the most recent sampled results" big={true}>
          {equipmentData.slice(0, 2).map((item, i) => {
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
