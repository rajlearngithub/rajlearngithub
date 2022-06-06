import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function UseTab() {
  return (
    <>
      <Tabs>
        <TabPanel>
          <div>Any content 1</div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>
      </Tabs>
    </>
  );
}
