Vue.component('progress-view',{
	
	data(){
		return {complition:0};
	},
	methods:{
		addCompletion(){
			this.complition+=10;
		}
	},

});
var app=new Vue({
	el:"#root",
	
});