import Home from './components/Home.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';


export const routes = [
	{
		path:'/',
		component: Home,
		meta:{
			requiresAuth:true
		}
		
	},
	{
		path:'/login',
		component:Login
	},
	{
		path:'/register',
		component:Register
	}
];