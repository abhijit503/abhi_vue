Vue.component('modal',{
	template:`
			<div class="modal is-active">
			  <div class="modal-background"></div>
			  <div class="modal-card">
			    <header class="modal-card-head">
			      <p class="modal-card-title">
			      		<slot name="header">Sorry no header text found</slot>
			      </p>
			      <button class="delete" aria-label="close"></button>
			    </header>
			    <section class="modal-card-body">
			      <slot>Sorry No item Found</slot>	
			    </section>
			    <footer class="modal-card-foot">
			      <slot name="footer">
			      		<button class="button is-success">Ok</button>
			      </slot>
			      <!--<button class="button is-success">Save changes</button>
			      <button class="button">Cancel</button>-->
			    </footer>
			  </div>
			</div>
	`,
});
new Vue({
	el:"#root",

});