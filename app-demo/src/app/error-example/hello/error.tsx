"use client";

const Boundary = ({ error }: any) => {
  return (
    <div>
      <div>Something Went Wrong bro!, {error.message}</div>
    </div>
  );
};

export default Boundary;
