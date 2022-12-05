import { Grid } from "@mui/material";
import React from "react";

const Services = () => {
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
        {[1, 2, 3, 4].map(() => (
          <Grid item xs={6}>
            <div className="flex py-8 px-6 mb-12 bg-gray-100 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 gap-4 items-center rounded-sm">
              <div className="inline-block text-gray-900 mb-4 ">
                {/* <!-- icon --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  SEO Services
                </h3>
                <p className="text-gray-500">
                  This is a wider card with supporting text below as a natural
                  content.
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
