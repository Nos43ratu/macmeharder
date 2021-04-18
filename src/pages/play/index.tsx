import React from "react";
import Apps from "../../components/apps";

const Play = ({ data }) => {
  return (
    <main className="">
      <Apps data={data} />
    </main>
  );
};

export default Play;

export async function getStaticProps() {
  const C1Res = await fetch(
    "http://macmeharder.com:8080/applications/8/?page=1&size=100"
  );
  const C1Data = await C1Res.json();
  const C2Res = await fetch(
    "http://macmeharder.com:8080/applications/9/?page=1&size=100"
  );
  const C2Data = await C2Res.json();
  const C3Res = await fetch(
    "http://macmeharder.com:8080/applications/10/?page=1&size=100"
  );
  const C3Data = await C3Res.json();
  const C4Res = await fetch(
    "http://macmeharder.com:8080/applications/11/?page=1&size=100"
  );
  const C4Data = await C4Res.json();
  const C5Res = await fetch(
    "http://macmeharder.com:8080/applications/12/?page=1&size=100"
  );
  const C5Data = await C5Res.json();
  const C6Res = await fetch(
    "http://macmeharder.com:8080/applications/13/?page=1&size=100"
  );
  const C6Data = await C6Res.json();
  const C7Res = await fetch(
    "http://macmeharder.com:8080/applications/14/?page=1&size=100"
  );
  const C7Data = await C7Res.json();
  const data = [
    ...(C1Data || []),
    ...(C2Data || []),
    ...(C3Data || []),
    ...(C4Data || []),
    ...(C5Data || []),
    ...(C6Data || []),
    ...(C7Data || []),
  ];
  return {
    props: {
      data,
    },
  };
}
