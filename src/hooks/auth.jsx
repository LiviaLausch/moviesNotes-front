import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [data, setData] = useState({});

    async function singIn({ email, password }) {

        try{ 
            const response = await api.post("/sessions", { email, password});
            const { user, token } = response.data;

            localStorage.setItem("@moviesnotes:user", JSON.stringify(user));
            localStorage.setItem("@moviesnotes:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ user, token}); 

        }catch(error) {
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Não foi possível entrar.")
            }
        }
    }

    function singOut(){
        localStorage.removeItem("@moviesnotes:token");
        localStorage.removeItem("@moviesnotes:user");

        setData({});
    }

    async function updateProfile({ user, avatarFile }){

        if(avatarFile){
            const fileUpdateForm = new FormData();
            fileUpdateForm.append("avatar", avatarFile);

            const response = await api.patch("/users/avatar", fileUpdateForm);
            user.avatar = response.data.avatar;
        }

        try {

            await api.put("/users", user);
            localStorage.setItem("@moviesnotes:user", JSON.stringify(user));

            setData({ user, token: data.token})
            alert("Perfil atualizado!")
            
        } catch(error) {
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Não foi possível atualizar.")
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@moviesnotes:token");
        const user = localStorage.getItem("@moviesnotes:user");

        if(token && user){
            api.defaults.headers.authorization = `Bearer ${token}`;
            
            setData({
                token,
                user:  JSON.parse(user)
            });
        }
    }, [])

    return (
        <AuthContext.Provider value={{ 
            singIn, 
            singOut,
            updateProfile,
            user: data.user,
            }}
            >
                {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };