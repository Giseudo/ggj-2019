import { storiesOf } from '@storybook/vue'
import GJContinue from './index'

storiesOf('Template - gj-continue', module)
	.add('default', () => ({
		components: {
			'gj-continue': GJContinue,
		},

		template: `
			<gj-continue :style="{ width: '350px', height: '650px' }" />
		`
	}))
