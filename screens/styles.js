import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30,
    alignItems: "center"
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  },
  accordionHeader: {
    backgroundColor: Colors.backgroundColor,
    padding: 25,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.fontColor,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  accordionHeaderContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  accordionHeaderContent2: {
    flexDirection: "row",
    alignItems: "center"
  },
  percentileShow : {
    marginLeft: '20%'
  },
  percentileContent: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 4,
    backgroundColor: Colors.percentileColor,
    borderColor: Colors.percentileColor,
    borderRadius: 20,
  },
  accordionHeaderText: {
    textAlign: "left",
    fontSize: 22,
    fontWeight: "600",
    color: Colors.fontColor
  },
  accordionText: {
    textAlign: "left",
    fontSize: 15,
    fontWeight: "600",
    color: Colors.fontColor
  },
  accordionContent: {
    padding: 20,
    backgroundColor: Colors.fontColor
  },
  accordionActive: {
    backgroundColor: "rgba(255,255,255,1)"
  },
  accordionInactive: {
    backgroundColor: "rgba(245,252,255,1)"
  },
  accordionSelectors: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center"
  },
  accordionSelector: {
    backgroundColor: "#f7f7f7",
    padding: 10
  },
  accordionActiveSelector: {
    fontWeight: "bold"
  },
  accordionSelectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10
  },
  icons: {
    color: Colors.fontColor
  },
  caretUp: {
    color: "#66c491"
  }
});
