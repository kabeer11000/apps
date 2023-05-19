import React, {Fragment} from "react";
import {useRecoilState} from "recoil";
import {AuthState} from "../../recoil";
import {IAuthentication} from "@Types/Authentication";

export default function Authentication({children}: React.PropsWithChildren) {
    const [authState, setAuthState]: [IAuthentication, (x: any) => void] = useRecoilState(AuthState);
    if (!auth)
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}