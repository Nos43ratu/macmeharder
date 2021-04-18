import React from "react";
import Apps from "../../components/apps";

const Travel = ({ data }) => {
  return (
    <main className="">
      <Apps data={data} />
    </main>
  );
};

export default Travel;

export async function getStaticProps() {
  const res = await fetch(
    "http://macmeharder.com:8080/applications/19/?page=1&size=100"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}