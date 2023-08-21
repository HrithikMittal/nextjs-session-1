import { Suspense } from "react";
// import Item from "./@item/page";

const StreamingSSR = async () => {
  console.log("Server Side Rendering!!!");
  return (
    <div>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Item />
      </Suspense> */}
      <h1>Streaming SSR After 10 sec</h1>
    </div>
  );
};

export default StreamingSSR;
// Item is a component that takes 10 seconds to load.
// For this reason, we use Suspense to display the loading screen.
// Looking for error boundary of Item component.
