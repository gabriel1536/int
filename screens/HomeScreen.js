import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import styles from "./styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faCaretUp
} from "@fortawesome/free-solid-svg-icons";
import BarChart from "../components/chart/bar-chart";
import Colors from '../constants/Colors';

const linedata = {
  labels: [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic"
  ],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43]
    }
  ]
};

const SECTIONS = [
  {
    content: (
      <View style={styles.welcomeContainer}>
        <Image
          source={
            __DEV__
              ? require("../assets/images/robot-dev.png")
              : require("../assets/images/robot-prod.png")
          }
          style={styles.welcomeImage}
        />
      </View>
    ),
    header: <Text style={styles.accordionHeaderText}>$ 15.000</Text>
  },
  {
    content: (
      <View style={styles.welcomeContainer}>
        <Text>hola</Text>
      </View>
    ),
    header: (
      <View style={styles.accordionHeaderContent2}>
        <Text style={styles.accordionText}>$ 1.000 generados en el año</Text>
        <View style={styles.percentileShow}>
          <View style={styles.percentileContent}>
            <FontAwesomeIcon icon={faCaretUp} style={styles.caretUp} />
            <Text>31,2%</Text>
          </View>
        </View>
      </View>
    )
  },
  {
    content: (
      <View style={styles.welcomeContainer}>
        <Text>hola</Text>
      </View>
    ),
    header: (
      <Text style={styles.accordionText}>$ 500 a retirar el 28/02/2020</Text>
    )
  }
];

export default function HomeScreen() {
  const [activeSections, setActiveSections] = useState([]);

  const _renderHeader = accordionHeader;

  const _renderContent = section => {
    return <View style={styles.accordionContent}>{section.content}</View>;
  };

  const _updateSections = activeSections => {
    setActiveSections(activeSections);
  };

  return (
    <View style={styles.container}>
      <Accordion
        sections={SECTIONS}
        activeSections={activeSections}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {barChart()}
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const accordionHeader = (section, index, isActive) => {
  return (
    <View style={styles.accordionHeader}>
      <View style={styles.accordionHeaderContent}>
        {section.header}
        <FontAwesomeIcon
          icon={isActive ? faAngleDown : faAngleRight}
          style={styles.icons}
        />
      </View>
    </View>
  );
};

const barChart = () => {
  return (
    <BarChart
      data={linedata}
      width={Dimensions.get("screen").width * 0.96} // from react-native
      height={Dimensions.get("screen").height * 0.3}
      withHorizontalLabels={true}
      chartConfig={{
        backgroundColor: Colors.percentileColor,
        backgroundGradientFrom: Colors.percentileColor,
        backgroundGradientTo: Colors.percentileColor,
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        },
        barPercentage: 0.42
      }}
      fromZero={true}
      style={{
        marginVertical: 8,
        borderRadius: 8
      }}
      yAxisLabel={"$"}
      verticalLabelRotation={270}
    />
  );
};
