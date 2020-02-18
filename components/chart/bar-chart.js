import React from "react";
import { View, Text } from "react-native";
import { Svg, Rect, G } from "react-native-svg";
import AbstractChart from "./abstract-chart";
import Colors from "../../constants/Colors";
import styles from "./styles";

const barWidth = 32;

class BarChart extends AbstractChart {
  constructor(props) {
    super(props);
    this.state = {
      //fix model (add name or something)
      toggledBars: []
    };
  }

  getBarPercentage = () => {
    const { barPercentage = 1 } = this.props.chartConfig;
    return barPercentage;
  };

  renderBars = config => {
    const { data, width, height, paddingTop, paddingRight, barRadius } = config;
    const baseHeight = this.calcBaseHeight(data, height);
    return data.map((x, i) => {
      //fix this
      this.setState({
        toggledBars: [...this.state.toggledBars, false]
      });
      const barHeight = this.calcHeight(x, data, height);
      const barWidth = 32 * this.getBarPercentage();
      const xPos =
        paddingRight +
        (i * (width - paddingRight)) / data.length +
        barWidth / 2;
      const yPos =
        ((barHeight > 0 ? baseHeight - barHeight : baseHeight) / 4) * 3 +
        paddingTop;
      return (
        <View>
          {<View style={{
              position: "absolute",
              left: xPos,
              top: yPos,
            }}>
            <Text style={styles.tooltip}>
              $ 142,5
            </Text>
          </View>}
          <Rect
            key={Math.random()}
            x={xPos}
            y={yPos}
            rx={barRadius}
            width={barWidth}
            height={(Math.abs(barHeight) / 4) * 3}
            fill={Colors.barColor}
            onPress={() => {
              //fix this
              console.log(this.state.toggledBars);
              this.setState({
                toggledBars: toggledBars.map((item, index) => index === i ? !item : item)
              })
            }}
          />
        </View>
      );
    });
  };

  renderBarTops = config => {
    const { data, width, height, paddingTop, paddingRight } = config;
    const baseHeight = this.calcBaseHeight(data, height);
    return data.map((x, i) => {
      const barHeight = this.calcHeight(x, data, height);
      const barWidth = 32 * this.getBarPercentage();
      return (
        <Rect
          key={Math.random()}
          x={
            paddingRight +
            (i * (width - paddingRight)) / data.length +
            barWidth / 2
          }
          y={((baseHeight - barHeight) / 4) * 3 + paddingTop}
          width={barWidth}
          height={2}
          fill={this.props.chartConfig.color(0.6)}
        />
      );
    });
  };

  render() {
    const {
      width,
      height,
      data,
      style = {},
      withHorizontalLabels = true,
      withVerticalLabels = true,
      verticalLabelRotation = 0,
      horizontalLabelRotation = 0,
      withInnerLines = true,
      showBarTops = true,
      segments = 4
    } = this.props;
    const { borderRadius = 0, paddingTop = 25, paddingRight = 5 } = style;
    const config = {
      width,
      height,
      verticalLabelRotation,
      horizontalLabelRotation,
      barRadius: this.props.chartConfig.barRadius || 0
    };
    return (
      <View style={style}>
        <Svg height={height} width={width}>
          {this.renderDefs({
            ...config,
            ...this.props.chartConfig
          })}
          <Rect
            width="100%"
            height={height}
            rx={borderRadius}
            ry={borderRadius}
            fill="url(#backgroundGradient)"
          />
          <G>
            {withInnerLines
              ? this.renderHorizontalLines({
                  ...config,
                  count: segments,
                  paddingTop
                })
              : null}
          </G>
          <G>
            {withHorizontalLabels
              ? this.renderHorizontalLabels({
                  ...config,
                  count: segments,
                  data: data.datasets[0].data,
                  paddingTop,
                  paddingRight
                })
              : null}
          </G>
          <G>
            {withVerticalLabels
              ? this.renderVerticalLabels({
                  ...config,
                  labels: data.labels,
                  paddingRight,
                  paddingTop,
                  horizontalOffset: barWidth * this.getBarPercentage()
                })
              : null}
          </G>
          <G>
            {this.renderBars({
              ...config,
              data: data.datasets[0].data,
              paddingTop,
              paddingRight
            })}
          </G>
          <G>
            {showBarTops &&
              this.renderBarTops({
                ...config,
                data: data.datasets[0].data,
                paddingTop,
                paddingRight
              })}
          </G>
        </Svg>
      </View>
    );
  }
}

export default BarChart;
