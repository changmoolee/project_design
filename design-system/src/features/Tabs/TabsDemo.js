import React, { useState } from "react";
import { FeatureContainer } from "../layout/layout";
import { Feature } from "../layout/layout";
import Tab from "./Tab";
import TabDescription from "./TabDescription";

const TabsDemo = () => {
  const tabs = ["Tab1", "Tab2", "Tab3"];
  const [tabIndex, setTabIndex] = useState(0);

  const tabTitle = ["Tab1", "Tab2", "Tab3"];
  const tabDescription = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum quam at sapien convallis placerat. Etiam et viverra erat. Nunc feugiat interdum condimentum. Donec quis rhoncus urna. Quisque viverra posuere metus vel fringilla. Vivamus porttitor auctor nunc, vel mattis diam. Integer vitae neque sodales, finibus tortor eu, dapibus arcu. Nunc id arcu ac sem fringilla vestibulum nec nec erat. Phasellus odio ligula, mattis eu finibus lobortis, sagittis eget ex. Sed tempus, nisi at consequat lacinia, ante sem tempor purus, vitae aliquet eros lorem eu purus. Sed et massa odio.",
    "Mauris dignissim ultricies ligula sit amet posuere. Etiam justo risus, suscipit in egestas id, finibus eget ipsum. Sed ac pellentesque ex, eleifend rutrum ex. Ut ultrices et lectus vitae sagittis. Etiam non ex imperdiet, viverra purus vel, porttitor purus. Morbi egestas mollis odio, in condimentum dui volutpat ac. Proin non iaculis mi.",
    "Duis faucibus, tellus sed pellentesque fringilla, mi metus cursus eros, id pulvinar erat sapien eu est. Nunc nec ante ut neque tincidunt egestas vitae lobortis nulla. Sed dignissim metus vitae lacus consectetur, eget venenatis arcu sagittis. Nam feugiat malesuada tempor. Praesent posuere ultricies tempor. Pellentesque scelerisque lectus sed dictum auctor. Duis sagittis urna arcu, in iaculis massa malesuada sed. Mauris ut auctor ligula. Aenean posuere ex ut lectus fermentum, et ultrices enim placerat. Maecenas vehicula consequat turpis in ultricies.",
  ];

  const handleTab = (index) => {
    setTabIndex(index);
  };

  return (
    <FeatureContainer>
      <Feature>
        <Tab tabs={tabs} tabIndex={tabIndex} handleTab={handleTab} />
        <TabDescription
          tabTitle={tabTitle}
          tabDescription={tabDescription}
          tabIndex={tabIndex}
        />
      </Feature>
    </FeatureContainer>
  );
};

export default TabsDemo;
