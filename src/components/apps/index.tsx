import React from "react";
import App from "../app";

const Apps = ({ data }) => {
  return (
    <section className="flex px-3 lg:px-40 flex-col lg:flex-row lg:flex-wrap justify-center pb-20">
      {data?.map((e, i) => (
        <div key={e.id}>
          <App data={e} />
        </div>
      ))}
    </section>
  );
};

export default Apps;
