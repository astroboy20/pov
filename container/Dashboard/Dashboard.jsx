import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "@/feature/slices/authSlice";
import { useRouter } from "next/router";
import Event from "./Pages/Event";
import Setting from "./Pages/Setting";
import Gallery from "./Pages/Gallery";
import Option from "./Option";
import { FeatureStyle } from "./Dashboard.style";
import { optionItems } from "./data";
import { useOptionContext } from "@/context/option-context";

const Dashboard = () => {
  const dispatch = useDispatch();
  // const { isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();
  const { option, switchOption } = useOptionContext();

  const handleClick = (value) => {
    switchOption(value);
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    router.push("/login");
  };

  // useEffect(() => {
  //   if (!isAuthenticated) {

  //   }
  // }, [router, isAuthenticated]);

  return (
    <>
      {!isAuthenticated ? null : (
        <>
          {option === "Events" && <Event />}
          {option === "Setting" && <Setting />}
          {option === "Gallery" && <Gallery />}

          <FeatureStyle>
            {optionItems.map((optionItem) => (
              <Option
                key={optionItem.value}
                value={optionItem.value}
                label={optionItem.label}
                selected={option === optionItem.value}
                setValue={handleClick}
              />
            ))}
          </FeatureStyle>
        </>
      )}
    </>
  );
};

export { Dashboard };
