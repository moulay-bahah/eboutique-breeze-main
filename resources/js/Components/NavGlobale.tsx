import NavAnonyme from "./NavAnonyme";
import NavAuth from "./NavAuth";

export default function NavGlobale({isAuth}:{isAuth:boolean}){
    return (<>
    {
        isAuth? <NavAuth />:<NavAnonyme />
    }

    </>)
}