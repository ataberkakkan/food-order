import { Redirect } from "expo-router";

const index = () => {
  return <Redirect href={"/orders/list/"} />;
};
export default index;
