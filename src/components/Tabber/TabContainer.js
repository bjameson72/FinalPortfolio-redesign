import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Personal from "./Personal";
import Work from "./Work";
import Education from "./Education";
import "../../styling/Tabs.css";

const TabContainer = () => (
  <div className="tabContainer">
    <Tabs>
      <TabList>
        <Tab>Personal</Tab>
        <Tab>Education</Tab>
        <Tab>Work</Tab>
      </TabList>
      <TabPanel>
        <Personal />
      </TabPanel>
      <TabPanel>
        <Education />
      </TabPanel>
      <TabPanel>
        <Work />
      </TabPanel>
    </Tabs>
  </div>
);

export default TabContainer;
