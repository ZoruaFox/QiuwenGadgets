import * as OPTIONS from '../options.json';
import {WG_WIKI_ID} from './constant';
import {initMwApi} from 'ext.gadget.Util';

const api: mw.Api = initMwApi(`Qiuwen/1.1 (ListUsersLastActive/${OPTIONS.version}; ${WG_WIKI_ID})`);

export {api};
