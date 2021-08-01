Vue.component('model',{
	template:`
				<div class="modal is-active">
				  <div class="modal-background"></div>
				  <div class="modal-content">
				    <div class="box">
				    	hello vutki
				    </div>
				  </div>
				  <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
				</div>
	`,

});
new Vue({
	el:'#root',
	data:{
		showModel:false
	},
	methods:{
		showmodel(){
			return this.showModel=true;
		},
		hidemodel(){
			return this.showModel=false;
		}
	},
});