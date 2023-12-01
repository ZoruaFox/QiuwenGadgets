import {IS_WG_EDIT_OR_SUBMIT_ACTION} from './constant';

const usingEditFormJS = (): void => {
	mw.loader.using(['ext.gadget.EditForm', 'ext.gadget.EditForm_JS']);
};

export const loadEditFormJS = async (): Promise<void> => {
	/* 加载编辑界面脚本 */
	if (IS_WG_EDIT_OR_SUBMIT_ACTION) {
		usingEditFormJS();
	} else {
		await mw.loader.using('ext.visualEditor.desktopArticleTarget.init');
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		/* @ts-ignore */
		mw.libs.ve.addPlugin((): void => {
			usingEditFormJS();
		});
	}
};
