import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { autoPlay } from "react-swipeable-views-utils";
import "./testimonials.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index, className) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
    className,
  };
}

const Testimonials = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const DeskTopView = () => {
    return (
      <Box className="testimonial-wrapper">
        <h2>Recommendations and Testimonials</h2>
        <AppBar position="static" className="header">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Simon Iyoha" {...a11yProps(0, "iyoha")} />
            <Tab label="Olalekan Odukoya" {...a11yProps(0, "lekan")} />
            <Tab label="Adeeyo Temitayo" {...a11yProps(0, "tayo")} />
            <Tab label="Neconde Energy" {...a11yProps(0, "client")} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
          className="testimonials"
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="content">
              <p className="top">
                <span>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </span>
                It has been a true privilege working with Olanrewaju, his
                ability to understand an existing product and transform it into
                a more dynamic and interactive feature that drives user
                engagement cannot be undermined. The BluIntouch product was one
                of those projects that came with challenges from the B2B user
                needs, however, with a revamped experience that catered for the
                users 'Lanre translated the prototype into a fully functional
                software that telcos, banks and other financial institutions
                leverage on for their daily business transactions
                <span>
                  <i class="fa fa-quote-right" aria-hidden="true"></i>
                </span>
              </p>
              <p className="bottom">
                <span>Team Mate</span>
                <span>Blusalt Finanacial services</span>
              </p>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="content">
              <p className="top">
                <span>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </span>
                A wonderful team player with great passion and enthusiasm for
                what he does. Lanre can go to any length to get things done.
                <span>
                  <i class="fa fa-quote-right" aria-hidden="true"></i>
                </span>
              </p>
              <p className="bottom">
                <span>Team Mate</span>
                <span>Blusalt Finanacial services</span>
              </p>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="content">
              <p className="top">
                <span>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </span>
                I've had the pleasure of working with Olanrewaju as a colleague.
                He's a seasoned software engineer who is enthusiastic and
                passionate about what he does. His ability to connect with team
                members and stakeholders makes him stand out. I do not doubt
                that he'll be a valuable resource on any team/project.
                <span>
                  <i class="fa fa-quote-right" aria-hidden="true"></i>
                </span>
              </p>
              <p className="bottom">
                <span>Team Mate</span>
                <span>Blusalt Finanacial services</span>
              </p>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <div className="content">
              <p className="top">
                <span>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </span>
                He demonstrated amazing dedication and creativity to deliver on
                a service, i will definitely look forward to working with him
                again
                <span>
                  <i class="fa fa-quote-right" aria-hidden="true"></i>
                </span>
              </p>
              <p className="bottom">
                <span>Client</span>
                <span>Neconde energy</span>
              </p>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    );
  };
  const MobileView = () => {
    const allTestimonials = [
      {
        name: "Simon Iyoha",
        position: "Team Mate",
        testimonial:
          " It has been a true privilege working with Olanrewaju, his ability to understand an existing product and transform it into a more dynamic and interactive feature that drives user engagement cannot be undermined. The BluIntouch product was one of those projects that came with challenges from the B2B user needs, however, with a revamped experience that catered for the users Lanre translated the prototype into a fully functional software that telcos, banks and other financial institutions leverage on for their daily business transactions",
      },
      {
        name: "Olalekan Odukoya",
        position: "Team Mate",
        testimonial:
          "  A wonderful team player with great passion and enthusiasm for what he does. Lanre can go to any length to get things done.",
      },
      {
        name: "Adeeyo Temitayo",
        position: "Team Mate",
        testimonial:
          "I've had the pleasure of working with Olanrewaju as a colleague.He's a seasoned software engineer who is enthusiastic and passionate about what he does. His ability to connect with team members and stakeholders makes him stand out. I do not doubt that he'll be a valuable resource on any team/project.",
      },
      {
        name: "Client",
        position: "Neconde energy",
        testimonial:
          " He demonstrated amazing dedication and creativity to deliver on a service, i will definitely look forward to working with him again",
      },
    ];

    function SwipeableTextMobileStepper() {
      const theme = useTheme();
      const [activeStep, setActiveStep] = React.useState(0);
      const maxSteps = allTestimonials.length;

      const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };

      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

      const handleStepChange = (step) => {
        setActiveStep(step);
      };

      return (
        <Box
          className="mobile_testimonial_wrapper"
          sx={{ maxWidth: 400, flexGrow: 1 }}
        >
          <h2>Testimonials</h2>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {allTestimonials.map((step, index) => (
              <div key={step.name}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <div className="m_testimonial">
                    <p>{step.testimonial}</p>
                    <p>{step.name}</p>
                    <p>{step.position}</p>
                  </div>
                ) : null}
              </div>
            ))}
          </SwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      );
    }
    return (
      <>
        <SwipeableTextMobileStepper />
      </>
    );
  };

  return (
    <>
      <DeskTopView />
      <MobileView />
    </>
  );
};

export default Testimonials;
