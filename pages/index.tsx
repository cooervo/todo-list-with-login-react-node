import React, {Fragment} from 'react'
import {NextPage} from "next";
import UserForm from "../client/components/forms/UserForm";
import Nav from "../client/components/shared/Nav";
import {Routes} from "../shared/routes";

const IndexPage: NextPage = () => {
    return (
        <Fragment>
            <Nav/>
            <UserForm title={"Register"}
                      postUrl={Routes.REGISTER}/>
        </Fragment>
    )
}

export default IndexPage
