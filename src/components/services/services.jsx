import { Grid } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);

  axios("http://localhost:5000/services").then((res) => setServices(res.data));

  return (
    <div
      className=" mt-20 items-center w-full  wow fadeInUp "
      data-wow-duration="1s"
      style={{
        visibility: "visible",
        animationDuration: "1s",
        animationName: "fadeInUp",
      }}
    >
      <Grid container justifyContent={"space-between"} spacing={2}>
        {/* <!-- service block --> */}
        {services?.map((service, i) => (
          <Grid key={i} item xs={6}>
            <div className="flex py-8 px-6 mb-12 bg-gray-100 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 gap-4 items-center rounded-sm">
              <div className="inline-block text-gray-900 mb-4 ">
                {/* <!-- icon --> */}
                <div className="w-32">
                  <img
                    className="w-28 h-28 object-cover"
                    src={service?.img}
                    alt="img"
                  />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  {service?.label}{" "}
                </h3>
                <p className="text-gray-500">
                  {service?.description.substring(0, 200)}
                </p>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
      {/* <!-- end service block --> */}
    </div>
  );
};

export default Services;
