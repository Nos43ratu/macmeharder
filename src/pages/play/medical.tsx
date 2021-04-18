import React from "react";
import Apps from "../../components/apps";

const Medical = ({ data }) => {
  return (
    <main className="">
      <Apps data={data} />
    </main>
  );
};

export default Medical;

export async function getStaticProps() {
  const res = await fetch(
    "http://macmeharder.com:8080/applications/10/?page=1&size=100"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
