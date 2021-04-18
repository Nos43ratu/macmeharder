import React from "react";
import Apps from "../../components/apps";

const Music = ({ data }) => {
  return (
    <main className="">
      <Apps data={data} />
    </main>
  );
};

export default Music;

export async function getStaticProps() {
  const res = await fetch(
    "http://macmeharder.com:8080/applications/11/?page=1&size=100"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
