export const MyStats = ({ params }: any) => {
  const { id } = params;
  console.log("MyStats Page Rendered!", id);
  return <div>MyStats {id}</div>;
};
export default MyStats;
