import { Routes ,Route} from "react-router-dom"
import { PrivateRoute } from "../Components/PrivateRoute"
import { Admin } from "./Admin"
import { EditProduct } from "./EditProduct"
import { HomePage } from "./HomePage"
import { Login } from "./Login"

export const MainRoutes=()=>{
    return <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/auth" element={<PrivateRoute><Admin/></PrivateRoute> }/>
        <Route path="/edit/:id" element={<EditProduct/>}/>
        <Route path="*" element={<h1>404 Page Not Found !!</h1>}/>
    </Routes>

}