import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "../styles/faq.css";

// import MainLoginSignUp from "../components/Login_signUp/MainLoginSignUp";

const Faq = () => {
  const [expanded, setExpanded] = useState("panel1");

  // const handleChange = (panel) => (event, newExpanded) => {
  //   setExpanded(newExpanded ? panel : false);
  // };

  return (
    <>
      <div className="faq_section">
        <div className="image">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0ODIuMjM2IiBoZWlnaHQ9IjQzNS40MzIiIHZpZXdCb3g9IjAgMCA0ODIuMjM2IDQzNS40MzIiPgogIDxwYXRoIGlkPSJQYXRoXzExMzEiIGRhdGEtbmFtZT0iUGF0aCAxMTMxIiBkPSJNLTUxMi44NywyMDEwLjEzMWM4NC44LTY0LjA4Myw0MTguMzIsNTIuNjY4LDQ0NC42ODgsMTU1LjY2OFMtMjk2LjIyNSwyNDYxLjA0Ny00MDcuNCwyNDIyLjEzMi01OTcuNjc0LDIwNzQuMjEzLTUxMi44NywyMDEwLjEzMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU0OC41MTUgLTE5OTEuODIzKSIgZmlsbD0iIzZiOTFmZCIvPgo8L3N2Zz4K"
            alt=""
          ></img>
          <h2>
            Frequently
            <br />
            Asked
            <br />
            Questions
          </h2>
        </div>
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>What is crypto ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Cryptos are decentralised digital assets operating on blockchain
                technology. There are more than 5000 Crypto out there, Bitcoin
                being the first-ever crypto launched.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Is crypto legal in India ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Law in India makes buying or selling Cryptos illegal.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                What is the future of crypto trading in India ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Since 2020, Crores of Indians have dipped their toes into
                Cryptos, and with the number going up every day, India looks
                exciting for the crypto revolution. The government is also
                actively trying to set up a regulatory framework for its smooth
                functioning, the recent MCA amendment being the first step.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>How to buy crypto in India ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Crypto Trade has simplified Cryptos for Indians, you can
                download our Android and iOS app to begin trading in Crypto with
                just ₹100
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                Why crypto trade is the best crypto trading plateform in India ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Unlike other Crypto exchanges, CoinSwitch pools liquidity from
                leading Crypto exchanges in India and globally to enable users
                to trade in Cryptos at the best rate.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                What is the future of crypto trading in India ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Since 2020, Crores of Indians have dipped their toes into
                Cryptos, and with the number going up every day, India looks
                exciting for the crypto revolution. The government is also
                actively trying to set up a regulatory framework for its smooth
                functioning, the recent MCA amendment being the first step.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                What is the future of crypto trading in India ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Since 2020, Crores of Indians have dipped their toes into
                Cryptos, and with the number going up every day, India looks
                exciting for the crypto revolution. The government is also
                actively trying to set up a regulatory framework for its smooth
                functioning, the recent MCA amendment being the first step.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                What is the future of crypto trading in India ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Since 2020, Crores of Indians have dipped their toes into
                Cryptos, and with the number going up every day, India looks
                exciting for the crypto revolution. The government is also
                actively trying to set up a regulatory framework for its smooth
                functioning, the recent MCA amendment being the first step.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                What is the future of crypto trading in India ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Since 2020, Crores of Indians have dipped their toes into
                Cryptos, and with the number going up every day, India looks
                exciting for the crypto revolution. The government is also
                actively trying to set up a regulatory framework for its smooth
                functioning, the recent MCA amendment being the first step.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      {/* <div>
        <MainLoginSignUp />
      </div> */}
    </>
  );
};

export default Faq;
