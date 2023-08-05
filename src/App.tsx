import { useEffect } from "react";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/user";
import AppRouter from "./components/AppRouter";

const App = () => {
  const { setUser, setIsAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({
        username: localStorage.getItem("username" || ""),
      } as IUser);
      setIsAuth(true);
    }
    console.log("useEffect app.tsx setUser setIsAuth");
  }, [setUser, setIsAuth]);

  return <AppRouter />;
};

export default App;
