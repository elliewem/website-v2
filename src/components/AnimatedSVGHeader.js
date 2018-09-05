import React, { Component } from "react";
import DrawSVGPlugin from "../plugins/DrawSVGPlugin";
import { TimelineLite } from "gsap/all";
import InlineSVG from "svg-inline-react";

class AnimatedSVGHeader extends Component {
  componentDidMount() {
    const timeline = new TimelineLite();
    timeline.set(".about-cls", { stroke: "red", strokeWidth: "1px" });
    timeline.staggerFrom(".about-cls", 5, { drawSVG: 0 }, 0.2);
  }

  render() {
    return (
      <div className="animated-svg-header">
        <InlineSVG src={this.props.image} />
      </div>
    );
  }
}

export default AnimatedSVGHeader;
