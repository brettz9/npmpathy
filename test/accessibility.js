// https://github.com/DevExpress/testcafe
// https://devexpress.github.io/testcafe/documentation/test-api/
// https://github.com/helen-dikareva/axe-testcafe
import axeCheck from 'axe-testcafe';

fixture`TestCafe Axe accessibility tests (Main application)`
  .page`http://localhost:8045/`;

test('Main application: General accessibility', async (t) => {
  await axeCheck(t); // , axeContent, axeOptions: https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#api-name-axerun
});
