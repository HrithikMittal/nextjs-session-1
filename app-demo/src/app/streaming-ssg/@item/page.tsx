const sleep = (ms: number) =>
  new Promise((resolve, reject) => setTimeout(resolve, ms));

const Item = async () => {
  await sleep(3000);
  return (
    <div>
      <h1>Item</h1>
    </div>
  );
};

export default Item;
