import * as OPTIONS from '~/DefaultSummaries/options.json';
import {DROPDOWN_ID} from './constant';
import {generateSummaryDropdown} from './util/generateSummaryDropdown';

const processWikiEditor = ($body: JQuery<HTMLBodyElement>): void => {
	// Guard against double inclusions
	if (mw.config.get(OPTIONS.configKey)) {
		return;
	}

	// Set guard
	mw.config.set(OPTIONS.configKey, true);

	const $editCheckboxes: JQuery = $body.find('.editCheckboxes');
	if (!$editCheckboxes.length) {
		return;
	}

	const $dropdowns: JQuery = generateSummaryDropdown($body.find('input[name=wpSummary]'));

	$dropdowns.css({
		'padding-bottom': '1em',
		width: '48%',
	});

	if (!$body.find(`#${DROPDOWN_ID}`).length) {
		$editCheckboxes.before($dropdowns);
	}
};

export {processWikiEditor};
