import { useSelector } from "react-redux";
import { useAuth } from "./useAuth";
import { useRouter } from "next/router";
import { Spinner } from "@/components/Spinner";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const router = useRouter();
  
  if (!currentUser) {
    // Redirect to "/login" if the user is not authenticated
    router.push("/login");
    return <Spinner/>; // Return null or a loading spinner while redirecting
  }

  // Render the children if the user is authenticated
  return children;
};

export { ProtectedRoute };
