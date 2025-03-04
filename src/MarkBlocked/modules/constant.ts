const WG_ACTION: MediaWikiConfigMapWgAction = mw.config.get('wgAction');
const WG_ARTICLE_PATH: string = mw.config.get('wgArticlePath');
const WG_NAMESPACE_IDS: Record<string, number> = mw.config.get('wgNamespaceIds');
const WG_NAMESPACE_NUMBER: number = mw.config.get('wgNamespaceNumber');
const WG_SCRIPT: string = mw.config.get('wgScript');

const IS_WG_EDIT_OR_SUBMIT_ACTION: boolean = ['edit', 'submit'].includes(WG_ACTION);

export {WG_ACTION, WG_ARTICLE_PATH, WG_NAMESPACE_IDS, WG_NAMESPACE_NUMBER, WG_SCRIPT, IS_WG_EDIT_OR_SUBMIT_ACTION};
