import "reset-css";
import "../styles/globals.css";
import { PlayerLayout } from "../components/playerLayout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <PlayerLayout>
      <Component {...pageProps} />
    </PlayerLayout>
  );
};

export default MyApp;
