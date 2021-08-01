
Vue.component('message',{
	props:['title','body'],
	data(){
		return{
			isvisible:true
		};
	},
	template: `<article class="message" v-show="isvisible">
		  <div class="message-header">
		    <p>{{title}}</p>
		    <button class="delete" aria-label="delete" @click="hide"></button>
		  </div>
		  <div class="message-body">
		  		{{body}}
		  </div>
		</article>`,
	methods:{
		hide(){
			this.isvisible=false;
		}
	},
});
new Vue({
	el:'#root',
});