import { getLocalUser } from './helpers/auth';
const user = getLocalUser();
/*
for API calls on Guarded routes use Authorization Header
Example:
axios.get('/some/route',{
	headers:{
		"Authorization":"Bearer "+context.state.currentUser.token
	}
})
.then((response)=>{
	console.log(response);
});
*/
export default{
	state:{
		currentUser:user,
		isLoggedIn:!!user,
		loading:false,
		authErr:null,
		message:''
	},
	getters:{
		isLoading(state){
			return state.loading;
		},
		isLoggedIn(state){
			return state.isLoggedIn;
		},
		currentUser(state){
			return state.currentUser;
		},
		authError(state){
			return state.authErr;
		},
		getMessage(state){
			return state.message;
		}
	},
	mutations:{
		login(state){
			state.loading = true;
			state.authErr = null;
		},
		loginSuccess(state,payload){
			state.authErr = null;
			state.isLoggedIn = true;
			state.loading = false;
			state.message = "Howdy! You have been Logged in...";
			state.currentUser = Object.assign({},payload.user,{token:payload.access_token});

			localStorage.setItem("user",JSON.stringify(state.currentUser));
		},
		loginFailed(state,payload){
			state.loading = false;
			state.authErr = payload.error;
		},

		register(state){
			state.loading = true;
			state.authErr = null;
		},
		registerSuccess(state,payload){
			state.authErr = null;
			state.loading = false;
			state.message = "Register Success, Please proceed to login";
		},
		registerFailed(state,payload){
			state.loading = false;
			state.authErr = payload.error;
			state.message = payload.error.response.data.msg;

		},

		logout(state){
			state.message = "You have been Logged out...";
			localStorage.removeItem("user");
			state.isLoggedIn = false;
			state.currentUser = null;
		},
		toggleLoading(state,bool){
			state.loading = bool;
		},
		showAlert(state,payload){
			state.message = payload;
		},
		setAuthError(state,payload){
			state.authErr = payload;
		}
	},
	actions:{
		login(context){
			context.commit("login");
		},
		register(context){
			context.commit("register");
		}

	}
}