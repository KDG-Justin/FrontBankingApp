import { useContext } from "react"
import { LoginContext } from "../../context/LoginContext";
import { SignedInScreen } from "./SignedInScreen";
import { HeaderComponent } from "../HeaderComponent";



export function HomeScreen(){
    const {isAuthenticated} = useContext(LoginContext); 


    return (
        <div>
            <HeaderComponent/>
            {
            isAuthenticated ? <SignedInScreen/> : <div className="min-h-screen bg-background p-6">
            <h1 className="text-primary">Not sign in, please sign in</h1> </div>
            }
        </div>
    )
}