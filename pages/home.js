import Layout from "../layouts/Layout";
import MainHeader from "../components/MainHeader";
import SubHeader from "../components/SubHeader";
import { ItemCard } from "../components/EquipmentCard";
import { useEffect, useState } from "react";
import Router from "next/router";
import { InfoCircleFilled } from "@ant-design/icons";

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
  const [toSampleData, setToSampleData] = useState([]);
  const [sampledResults, setSampledResults] = useState([]);
  const [onQuarantine, setOnQuarantine] = useState([]);
  const [onRepair, setOnRepair] = useState([
    {
      "brand": "OLYMPUS",
      "scopeType": "tracheal intubation",
      "modelNumber": "TJF407",
      "serialNumber": 21904894,
      "status": "Regular",
      "frequency": 4,
      "samplingStatus": "On Repair",
      "sampleDate": "14/09/2022"
    },
    {
      "brand": "OLYMPUS",
      "scopeType": "tracheal intubation",
      "modelNumber": "TJF419",
      "serialNumber": 21904906,
      "status": "Post Repair",
      "frequency": 5,
      "samplingStatus": "On Repair",
      "sampleDate": "15/09/2022"
    }
  ]);
  const [sampleArray, setSampleArray] = useState([]);

  const handleEdit = (i) => {
    let type;
    let step;
    if (equipmentData[i].scopeType) type = "scope";
    else type = "washer";

    let savedItems = JSON.parse(window.localStorage.getItem("savedstate" + i));
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
    let sampleItems = JSON.parse(window.localStorage.getItem("toSampleEquipments"));
    let dashboardResults = JSON.parse(window.localStorage.getItem("dashboardSampledResults"));
    setEquipmentData(items);
    setToSampleData(sampleItems);
    setSampledResults(dashboardResults);
    for (let i = 0; i < sampleItems.length; i++) {
      let checkForSample = JSON.parse(window.localStorage.getItem("savedstate" + i));
      // console.log(checkForSample);
      if (checkForSample["dryingFinished"] == "true") {
        // check for unique number, not index!
        let updatedItems = sampleItems.filter((val) => val.serialNumber !== items[i].serialNumber);
        setToSampleData(updatedItems);
        setSampleArray([items[i]]);
        window.localStorage.setItem("toSampleEquipments", JSON.stringify(updatedItems));
        // if (sampleArray.includes(i) == false)
        // {
        //   delete sampleItems[i];
        // }
        // let arr = [...sampleArray, i];
        // console.log(arr);
        // setSampleArray(removeDuplicates(arr));

        // console.log(sampleItems);
        // setToSampleData(sampleItems);
        // window.localStorage.setItem("toSampleEquipments", JSON.stringify(sampleItems));
      }
      if (checkForSample["sampleFluidResult"] == "Growth" || checkForSample["sampleFluidResult"] == "No Growth") {
        let arr = [...onQuarantine, i];
        setSampledResults(removeDuplicates(arr));
        window.localStorage.setItem("dashboardSampledResults", JSON.stringify(sampledResults));
      }
      if (checkForSample["sampleQuarantineRequired"]["item"] == "Yes") {
        let arr = [...onQuarantine, i];
        setOnQuarantine(removeDuplicates(arr));
      }
    }
  }, [])
  // useEffect(() => {
  //   setSampledEquipmentIndex([...new Set(sampleArray)]);
  //   console.log(sampledEquipmentIndex)
  // }, [sampleArray])
  console.log(onQuarantine);
  return (
    <Layout>
      <MainHeader heading="Welcome back, Janice Ng" description="What would you like to do today?" details={headerDetails} />
      <SubHeader heading="Home" description="This area displays all the essential information relating to the equipment under tracking" />
      <section className="grid min-h-screen grid-cols-1 gap-5 px-8 py-5 md:grid-cols-2">
        <Card title="TO SAMPLE" description="Equipment to be sampled as soon as possible">
          {toSampleData.map((item, i) => {
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
          {sampleArray.length ?
            sampleArray.map((e, i) => <ItemCard
              key={i}
              index={i}
              data={e}
              titles={["Sample by"]}
              keys={["sampleDate"]}
              select={false}
              edit={true}
              onClickEdit={() => handleEdit(i)}
            />)
            :
            null
          }
        </Card>
        <Card title="SAMPLED RESULTS" description="Showing the most recent sampled results" big={true}>
          {sampledResults ? equipmentData.map((item, i) => {
            if (item == equipmentData[sampledResults]) {
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
            }
          }) : null}
        </Card>
        <Card title="ON QUARANTINE" description="Equipment that are on quarantine">
          {equipmentData.slice(-2).map((item, i) => (
            <ItemCard
              key={i}
              index={i}
              data={item}
              titles={["Sample by"]}
              keys={["sampleDate"]}
              select={false}
              edit={false}
            />
          ))}
        </Card>
        <Card title="ON REPAIR" description="Equipment that are sent for repair">
          {onRepair ? onRepair.map((item, i) => {
            return (
              <ItemCard
                key={i}
                index={i}
                data={item}
                titles={["Sample by"]}
                keys={["sampleDate"]}
                select={false}
                edit={false}
              />
            );
          }) : null}
        </Card>
      </section>
      {/*<NavBar />*/}
    </Layout>
  );
}

export function Card(props) {
  return (
    <div className={`p-5 bg-white min-h-[300px] flex flex-col ${props.big ? `md:col-span-2` : `col-span-1`}`}>
      <h4 className="font-bold">{props.title}</h4>
      <p className="text-sm text-gray-400 justify-self-start">{props.description}</p>
      {props.children ? props.children :
        <div className="flex items-center h-full">
          <div className="flex items-center w-full gap-2.5 px-4 py-2 border">
            <InfoCircleFilled style={{ color: 'grey' }} />
            <div className="text-gray-500">Nothing to display</div>
          </div>
        </div>
      }
    </div>
  );
}
