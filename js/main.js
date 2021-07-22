Vue.component('tasks',{
	template:`<div>
				<task v-for="task in tasks">{{task.com}}</task>
			 </div>`,
	data(){
		return {
			tasks:[
			       {com:"hospilab software",state:true},
			       {com:"vue Learn",state:false},
			       {com:"laravel run",state:true},
			       {com:"time to eat",state:false},
			       {com:"go for walk",state:false},
			       {com:"watching footbALL",state:false}
			       ]
			};
	}
});
Vue.component('task',{
	template: `<li><slot></slot></li>`,
});
new Vue({
	el:'#root',
});