import React, { Component } from "react";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import { grey } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

class MainCarousel extends Component {
    let state = {
      open: true
    };


  render() {
    const { open } = this.state;

    return (
      <div style={{ position: "static", width: "70%", height: 300 }}>
        <Button onClick={() => this.setState({ open: true })}>
          Open carousel
        </Button>
        <AutoRotatingCarousel
          autoPlay={false}
          label="Get started"
          open={open}
          onClose={() => this.setState({ open: false })}
          style={{ position: "static" }}
        >
          <Slide
            media={
              <img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />
            }
            mediaBackgroundStyle={{ backgroundColor: grey[400] }}
            style={{ backgroundColor: grey[500], color: "rgb(0, 0, 0, 0.87)" }}
            title="This is a very cool feature"
            subtitle="Just using this will blow your mind."
          />
          <Slide
            media={
              <img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />
            }
            mediaBackgroundStyle={{ backgroundColor: grey[400] }}
            style={{ backgroundColor: grey[500], color: "rgb(0, 0, 0, 0.87)" }}
            title="Ever wanted to be popular?"
            subtitle="Well just mix two colors and your are good to go!"
          />
          <Slide
            media={
              <img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />
            }
            mediaBackgroundStyle={{ backgroundColor: grey[400] }}
            style={{ backgroundColor: grey[500], color: "rgb(0, 0, 0, 0.87)" }}
            title="May the force be with you"
            subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
          />
        </AutoRotatingCarousel>
      </div>
    );
  }
}

export default MainCarousel;
