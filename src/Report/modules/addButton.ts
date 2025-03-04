import ReportButton from '../components/ReportButton';
import {WG_NAMESPACE_NUMBER} from './constant';
import {changeOpacityWhenMouseEnterOrLeave} from 'ext.gadget.Util';
import {tippy} from 'ext.gadget.Tippy';

const addButton = ($body: JQuery<HTMLBodyElement>): void => {
	if (WG_NAMESPACE_NUMBER < 0) {
		return;
	}

	const onMouseEnterMouseLeave = (event: MouseEvent): void => {
		changeOpacityWhenMouseEnterOrLeave(event);
	};

	const reportButton = ReportButton() as HTMLElement;

	for (const event of ['mouseenter', 'mouseleave'] as const) {
		reportButton.addEventListener(event, onMouseEnterMouseLeave);
	}

	tippy(reportButton, {
		arrow: true,
		content: reportButton.getAttribute('alt') as string,
		placement: 'left',
	});

	$body.append(reportButton);

	const scrollListener = (): void => {
		let buttonBottom: string;

		if (
			document.querySelector('#proveit') ||
			document.querySelector('.gadget-cat_a_lot-container') ||
			document.querySelector('#gadget-word_count-tip')
		) {
			buttonBottom = '253px';
		} else {
			buttonBottom = '211px';
		}

		reportButton.style.bottom = buttonBottom;
	};
	const scrollListenerWithThrottle: typeof scrollListener = mw.util.throttle(scrollListener, 200);

	$(window).on('scroll selectionchange', scrollListenerWithThrottle);
};

export {addButton};
