// https://github.com/DevExpress/testcafe
// https://devexpress.github.io/testcafe/documentation/test-api/
// https://github.com/helen-dikareva/axe-testcafe
import {axeCheck, createReport} from 'axe-testcafe';

/**
* @external AxeResult
*/
/**
 * @external TestcafeTest
*/
/**
 * @param {external.TestcafeTest} t
 * @returns {Promise<external:AxeResult>}
 */
async function axeCheckWithConfig (t) {
  const /* error, */ {violations} = await axeCheck(
    t,
    // context: https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#context-parameter
    undefined,
    // https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter
    {
      rules: {
        // 'meta-viewport': {enabled: false}
      }
    }
    // , (err, results) {} // https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#results-object
  );
  await t.expect(violations.length === 0).ok(createReport(violations));
}

fixture`TestCafe Axe accessibility tests (Main application)`
  .page`http://localhost:8045/`;

test('Main application: General accessibility', async (t) => {
  await axeCheckWithConfig(t); // , axeContent, axeOptions: https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#api-name-axerun
});
