import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Posts from "./Pages/Posts/Posts";
import AddPost from "./Pages/AddPost/AddPost";
import { Authprovider } from "./Autentication/Autentication";
import SecureRute from "./Pages/RuteSecure/SecureRute";
import { ProviderPost } from "./ProviderPost/ProviderPost";

function App() {
  return (
    <BrowserRouter>
      <Authprovider>
        <ProviderPost>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            {/* Las siguientes rutas deben funcionar solo cuando se loguea el usuario*/}

            <Route path="/posts" element={<SecureRute />}>
              <Route index element={<Posts />} />
              <Route path="addpost" element={<AddPost />} />
            </Route>
          </Routes>
        </ProviderPost>
      </Authprovider>
    </BrowserRouter>
  );
}

export default App;
