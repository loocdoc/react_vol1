import { Redirect } from "react-router-dom";
import { HOME_PATH } from '../../constants/routes';

// const f = () => <Redirect to='/' />;

export const SecureComponent = ({ Component, ...props }) => {
    const loggedIn = false;

    // f();

    return loggedIn ? <Component {...props} /> : <Redirect to={HOME_PATH} />;
    // return (
    //     <div className="column">
    //         <h2>Secure Component</h2>
    //         {children}
    //     </div>
    // );
};