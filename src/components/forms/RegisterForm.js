// import { useState, useEffect } from "react";
import { EmailInput } from "../../atoms/EmailInput";
import { PasswordInput } from "../../atoms/PasswordInput";

export const RegisterForm = () => {
    // const [email, setEmail] = useState("");
    // const [emailError, setEmailError] = useState(false);
    // const [password, setPassword] = useState("");
    // const [passwordError, setPasswordError] = useState(false);

    // useEffect(() => {
    //     console.log("ყოველთვის ამოქმედებული");
    // });

    // useEffect(() => {
    //     if (email.length < 8) {
    //         setEmailError(true)
    //     } else if (email && email.length > 8) {
    //         setEmailError(false)
    //     }
    // }, [email]);

    // useEffect(() => {
    //     if (password.length < 6) {
    //         setPasswordError(true)
    //     } else if (password && password.length > 6) {
    //         setPasswordError(false)
    //     }
    // }, [password]);

    const onSubmit = (event) => {
        event.preventDefault();

        const fd = new FormData(event.target);
        const loginData = {};
        for (let [kay, value] of fd.entries()) {
            loginData[kay] = value;
        }
        console.log(loginData);
    };

    // const getClassName = (inputType = "email") => {
    //     let errorClassName = "input ";

    //     switch (inputType) {
    //         case 'email':
    //             if (emailError && email) {
    //                 errorClassName += "is-danger";
    //             } else if (!emailError && email) {
    //                 errorClassName += "is-success";
    //             }
    //             return errorClassName;
    //         case "password":
    //             if (passwordError && password) {
    //                 errorClassName += "is-danger";
    //             } else if (!passwordError && password) {
    //                 errorClassName += "is-success";
    //             }
    //             return errorClassName;
    //         default:
    //             return errorClassName;
    //     }

    // };

    return (
        <form onSubmit={onSubmit}>
            <div className="field">
                <EmailInput />
                {/* <p className="control has-icons-left has-icons-right">
                    <input
                        className={getClassName('email')}
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        autoComplete="email"
                        onChange={({ target }) => setEmail(target.value)} />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    {!emailError && email && (
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                    )}

                    {emailError && email && (
                        <span className="icon is-small is-right">
                            <i className="fas fa-exclamation-triangle"></i>
                        </span>
                    )}
                </p> */}
            </div>
            <div className="field">
                <PasswordInput />
                {/* <p className="control has-icons-left has-icons-right">
                    <input
                        className={getClassName('password')}
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        autoComplete="new-password"
                        onChange={({ target }) => setPassword(target.value)} />
                    <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                    </span>

                    {!passwordError && password && (
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                    )}

                    {passwordError && password && (
                        <span className="icon is-small is-right">
                            <i className="fas fa-exclamation-triangle"></i>
                        </span>
                    )}
                </p> */}
            </div><div className="field">
                <p className="control">
                    <button className="button is-success">
                        Login
                    </button>
                </p>
            </div>
        </form>
    );
};