// import { TailSpin } from "react-loader-spinner";

const Spinner = () => {
  return (
    <>
      {/* <TailSpin
        height="30"
        width="30"
        color="#fff"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      /> */}
    </>
  );
};

export { Spinner };

const BlackSpinner = () => {
  return (
    <>
      {/* <TailSpin
        height="30"
        width="30"
        color="#000"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      /> */}
    </>
  );
};

export { BlackSpinner };

const EventSpinner = () => {
  return (
    <div style={{
      display:"flex" ,
      justifyContent:"center",
      alignItems:"center",
      height:"100dvh",
    }}>
      {/* <TailSpin
        height="30"
        width="30"
        color="#000"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      /> */}
    </div>
  );
};

export { EventSpinner };

const PurpleSpinner = () => {
  return (
    <>
      {/* <TailSpin
        height="30"
        width="30"
        color="#1d1465"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      /> */}
    </>
  );
};

export { PurpleSpinner };

// cloudinaryLoader.js
export const cloudinaryLoader = ({ src, width, quality }) => {
  const params = [
    `w_${width}`,
    `q_${quality || 75}`
  ].join(',');

  // Assuming the src is the complete URL from the backend
  return `${src}?${params}`;
};

