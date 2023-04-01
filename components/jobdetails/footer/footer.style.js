import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: COLORS.bgcolor,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 75,
  },
  applyBtn: {
    flex: 1,
    backgroundColor: COLORS.gray,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginRight: SIZES.medium,
    borderRadius: SIZES.medium,
  },
  applyBtnText: {
    fontSize: SIZES.medium,
    color: "black",
    fontFamily: FONT.bold,
  },
});

export default styles;
