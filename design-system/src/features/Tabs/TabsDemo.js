import React, { useState } from "react";
import { FeatureContainer } from "../layout/layout";
import { Feature } from "../layout/layout";
import { Manual } from "../layout/layout";
import Tab from "./Tab";
import TabDescription from "./TabDescription";

const TabsDemo = () => {
  const tabs = ["Tab1", "Tab2", "Tab3"];
  /* If you want to change the string of tab button, 
    please change or add any string at the "tabs" variable. */
  const [tabIndex, setTabIndex] = useState(0);

  const tabTitle = ["Tab1", "Tab2", "Tab3"];
  /* If you want to change the title, 
    please change or add any string at the "tabTitle" variable. */

  const tabDescription = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum quam at sapien convallis placerat. Etiam et viverra erat. Nunc feugiat interdum condimentum. Donec quis rhoncus urna. Quisque viverra posuere metus vel fringilla. Vivamus porttitor auctor nunc, vel mattis diam. Integer vitae neque sodales, finibus tortor eu, dapibus arcu. Nunc id arcu ac sem fringilla vestibulum nec nec erat. Phasellus odio ligula, mattis eu finibus lobortis, sagittis eget ex. Sed tempus, nisi at consequat lacinia, ante sem tempor purus, vitae aliquet eros lorem eu purus. Sed et massa odio.",
    "Mauris dignissim ultricies ligula sit amet posuere. Etiam justo risus, suscipit in egestas id, finibus eget ipsum. Sed ac pellentesque ex, eleifend rutrum ex. Ut ultrices et lectus vitae sagittis. Etiam non ex imperdiet, viverra purus vel, porttitor purus. Morbi egestas mollis odio, in condimentum dui volutpat ac. Proin non iaculis mi.",
    "Duis faucibus, tellus sed pellentesque fringilla, mi metus cursus eros, id pulvinar erat sapien eu est. Nunc nec ante ut neque tincidunt egestas vitae lobortis nulla. Sed dignissim metus vitae lacus consectetur, eget venenatis arcu sagittis. Nam feugiat malesuada tempor. Praesent posuere ultricies tempor. Pellentesque scelerisque lectus sed dictum auctor. Duis sagittis urna arcu, in iaculis massa malesuada sed. Mauris ut auctor ligula. Aenean posuere ex ut lectus fermentum, et ultrices enim placerat. Maecenas vehicula consequat turpis in ultricies.",
  ];
  /* If you want to change the tab Description, 
    please change or add any string at the "tabDescription" Array in order. 
    Strings in "tabDescription" Array are linked with "tabTitle" in order.*/

  const tapSize = { width: 500, height: 100 };
  /* You can alter tap size. (based on "px" figure) */

  const tabColor = { textColor: "gray", backgroundColor: "#dcdcdc" };
  const checkedTabColor = { textColor: "white", backgroundColor: "#4a19cd" };
  /* You can change the color of the tab elements. */

  const descriptionSize = { width: 500, height: 300 };
  /* You can alter description size. (based on "px" figure) */

  const descriptionColor = { textColor: "black", backgroundColor: "#dcdcdc" };
  /* You can change the color of the description elements. */

  const handleTab = (index) => {
    setTabIndex(index);
  };

  return (
    <FeatureContainer>
      <Feature>
        <Tab
          tabs={tabs}
          tabIndex={tabIndex}
          tapSize={tapSize}
          tabColor={tabColor}
          checkedTabColor={checkedTabColor}
          handleTab={handleTab}
        />
        <TabDescription
          tabTitle={tabTitle}
          tabDescription={tabDescription}
          tabIndex={tabIndex}
          descriptionSize={descriptionSize}
          descriptionColor={descriptionColor}
        />
      </Feature>
      <Manual></Manual>
    </FeatureContainer>
  );
};

export default TabsDemo;
