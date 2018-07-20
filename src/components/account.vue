<template lang="html">
	<div class="account-description" >
		<div class="personal-info test" v-if="(name != undefined && name != null && name != '')">
			<div class="userpic" v-bind:style="{backgroundImage: 'url(\''+pic+'\')'}"></div>
			<div class="name" v-html="name && name.split(' ').join('<br/>')"></div>
		</div>

		<div v-if="email">
			<div class="label-header">Почта</div>
			<span class="text-overflow">{{email}}</span>
		</div>
		
		<div v-if="phone">
			<div class="label-header">Телефон</div>
			<span class="text-overflow">{{phone}}</span>
		</div>
	</div>
</template>

<script>
w.Components['account-info'] = {
	template: "<%= template %>",
	props: ['name', 'email', 'phone', 'pic']
}

Vue.component('account-info', w.Components['account-info']);
</script>

<style lang="less">
.account-description {
	// margin-bottom: 20px;
	// padding: -20px 0;
	margin: 0 -20px 20px -20px;
	padding: 16px 20px;
	border-top: 1px solid #e2e2e2;
	border-bottom: 1px solid #e2e2e2;
	background: #f5f5f5;

	> div:not(:last-child) {
		margin-bottom: 20px;
	}

	.label-header {
		font-size: 14px;
		opacity: 0.5;
		// margin-top: 12px;
		line-height: 20px;
		height: 20px;
	}
	span.text-overflow {
		display: inline-block;
		overflow: hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
		max-width:100%;
		vertical-align:bottom;
		font-size: 16px;
		height: 20px;
	}
	.personal-info {
		display: flex;
		flex-flow: row;
		margin-bottom: 12px;

		.userpic {
			width: 85px; height: 85px;
			background-size: 100% auto;
			background-repeat: no-repeat;
			background-position: center 0;
			border: 1px solid #e2e2e2;
			border-radius: 4px;
			flex-shrink: 0;
			flex-grow: 0;
		}

		.name {
			padding-top: 12px;
			padding-left: 16px;
			line-height: 20px;

			.specialization {
				font-size: 14px;
				line-height: 18px;
				height: 18px;
			}
		}
	}
}
</style>
