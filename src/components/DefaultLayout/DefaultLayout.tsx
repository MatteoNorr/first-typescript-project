import { signIn, logout } from "../../utils/fn";
import { SetStateAction, useState } from "react";
import styles from "./DefaultLayout.module.scss";
import { Dispatch } from "react";

interface props {
  children: React.ReactNode;
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
}

const DefaultLayout = ({ children, isLogged, setIsLogged }: props) => {
  const [userData, setUserData] = useState<any>();
  const [logoutProcess, setLogoutProcess] = useState<boolean>(false);

  return (
    <div className={styles.LayoutContainer}>
      <div className={styles.Header}>
        <h1 className={styles.title}>
          <span>Q</span>uick <span>T</span>odos
        </h1>
        {isLogged ? (
          <div className={styles.userInfo}>
            <img src={userData.user.photoURL} />
            <p>{userData.user.displayName}</p>
            <span
              onClick={() =>
                logout(logoutProcess, setIsLogged, setLogoutProcess)
              }
            >
              Logout
            </span>
          </div>
        ) : (
          <>
            <div
              className={styles.login}
              onClick={() => signIn(setIsLogged, setUserData)}
            >
              <span>Login</span>
            </div>
            {logoutProcess && <div className={styles.logout}>Logged out</div>}
          </>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DefaultLayout;
