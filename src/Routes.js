import { Switch, Route } from "react-router";
import { Home, LoginPage, ProtectedPage, RegisterPage, } from "./pages";
import { SecureComponent } from './atoms/SecureComponent'
import * as route from "./constants/routes"

export function Routes(props) {
    return <Switch>
        <Route path={route.HOME_PATH} exact>
            <Home />
        </Route>

        <Route path={route.LOGIN_PATH}>
            <LoginPage />
        </Route>

        <Route path={route.SIGNUP_PATH}>
            <RegisterPage />
        </Route>

        <Route path={route.DOCUMENTATION_PATH}>
            <SecureComponent Component={ProtectedPage} title="Secure Component example" />
        </Route>
    </Switch>
}