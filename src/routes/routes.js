// importing require modules
import { Fragment } from "react";
import { Auth } from "../components";
import { AuthenticatedRoutes } from "./components";


export default function routes() {

    return (
        <Fragment>

            <Auth>

                <AuthenticatedRoutes />

            </Auth>

        </Fragment>
    );
}
