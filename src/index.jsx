import ForgeUI, { render, Macro, Fragment, Text } from '@forge/ui';

const App = () => (
  <Fragment>
    <Text>✅ Jira Issues Clone: macro insertion OK.</Text>
    <Text>If you can see this after inserting the macro, Feature 1 passes.</Text>
  </Fragment>
);

export const run = render(<Macro><App /></Macro>);
