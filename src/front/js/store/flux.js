const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {},
			logged: false,
			token: ""
		},
		actions: {
			setLogged: (logged) => {
				setStore({logged:logged})
			},

			setnewUser: async (email, password) => {
				const response = await fetch (process.env.BACKEND_URL + "api/user", {
					method: "POST",
					headers: {
						"Content-Type":"application/json",
					},
					body: JSON.stringify({
						email,
						password
					})
				})
				const newuser = await response.json()
				setStore({...getStore(), user: newuser})
			},
			
			setUser: async (email, password) => {
				const response = await fetch (process.env.BACKEND_URL + "api/user/login", {
					method: "POST",
					headers: {
						"Content-Type":"application/json",
					},
					body: JSON.stringify({
						email,
						password
					})
				})
				const user = await response.json()
				if (user.token){
					localStorage.setItem('token', user.token)
					getActions().setLogged(true)
				}
				setStore({...getStore(), token:user.token, user})
			},

			clearUser: () => {
				localStorage.removeItem('token')
				getActions().setLogged(false)
				setStore({...getStore(), token: '', user: {}})
			},
		}
	};
};

export default getState;