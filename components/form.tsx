import React, { Component } from "react";
import styles from "../styles/components/form.module.scss";

interface State {
    err?: string;
    vals?: {
        [propName: string]: {
            val: string;
            err: boolean;
        };
    };
}

export default class Form extends Component<State> {
    state: State = {
        err: "",
        vals: {
            name: {
                val: "",
                err: false,
            },
        },
    };

    render() {
        return (
            <form className={styles.form}>
                <input
                    className={styles.field}
                    type="text"
                    name="name"
                    placeholder="Name"
                ></input>
                <input
                    className={styles.field}
                    type="text"
                    name="email"
                    placeholder="Email"
                ></input>
                <input
                    className={styles.field}
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                ></input>
                <textarea
                    className={styles.field}
                    name="message"
                    placeholder="Message"
                ></textarea>
                <div className={styles.buttonCont}>
                    <button>Submit</button>
                </div>
            </form>
        );
    }
}
