import { Fragment } from 'react'
import MainHandler from './MainHandler';


const Layout = (props)=>{
    return(
        <Fragment>
            <MainHandler></MainHandler>
            <main>{props.children}</main>
        </Fragment>
    )
}


export default Layout;