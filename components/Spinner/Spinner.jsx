import { TailSpin } from "react-loader-spinner";

const Spinner = () => {
  return (
    <>
      <TailSpin
        height="30"
        width="30"
        color="#fff"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </>
  );
};

export { Spinner };

const PurpleSpinner = () => {
  return (
    <>
      <TailSpin
        height="30"
        width="30"
        color="#1d1465"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </>
  );
};

export { PurpleSpinner };
