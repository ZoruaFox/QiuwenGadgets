import {initMwApi} from '../util';

(() => {
	if (!mw.user.options.get('gadget-ToolsRedirect')) {
		return;
	}

	const api = initMwApi(`Qiuwen/1.1 (ToolsRedirect-bio-latin-names/2.0; ${mw.config.get('wgWikiID')})`);

	api.postWithEditToken({
		action: 'options',
		format: 'json',
		change: 'gadget-ToolsRedirect=1',
	});
})();
