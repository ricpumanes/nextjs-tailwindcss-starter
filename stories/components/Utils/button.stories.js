import { Button } from '@components';

export default {
  component: Button,
  title: 'Components/Utils/Button',
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.displayName = 'Default';
Default.args = {};
