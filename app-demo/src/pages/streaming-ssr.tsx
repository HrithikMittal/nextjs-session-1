const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getServerSideProps = async () => {
  await sleep(10000);
  return {
    props: {},
  };
};

const StreamingSSR = () => {
  console.log("Server Side Rendering!!!");

  return (
    <div>
      <h1>Streaming SSR After 10 sec</h1>
    </div>
  );
};

export default StreamingSSR;
