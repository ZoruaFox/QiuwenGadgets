/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
import {generateSummaryDropdown} from './util/generateSummaryDropdown';

let isInit: boolean = false;

const processVisualEditor = (): void => {
	if (isInit) {
		return;
	}
	isInit = true;

	// @ts-expect-error TS2304
	const {target} = ve.init;
	// @ts-expect-error TS2339
	const {$saveOptions} = target.saveDialog as JQuery;
	if (!$saveOptions.length) {
		return;
	}

	const $dropdowns: JQuery = generateSummaryDropdown(target.saveDialog.editSummaryInput.$input as JQuery);

	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	$saveOptions.before($dropdowns);
};

export {processVisualEditor};
