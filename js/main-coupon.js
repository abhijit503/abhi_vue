Vue.component('coupon',{
	template:`
		<input @blur="onApplied">
	`,
	methods:{
		onApplied() {
			this.$emit('applied')
		}
	},

});
new Vue({
	el:"#root",
	data:{
		is_applied:false
	},
	methods:{
		onCoupon(){
			return this.is_applied=true;
		}
	}
});