import React from 'react';
import { Button, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '../../appContext/context';

export const Logout: React.FC = () => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	const onLogoutClick = () => {
		localStorage.removeItem('auth-token');
		dispatch({ type: 'SET_CURRENT_USER', user: null });
	};
	return (
		<Tooltip placement="bottomRight" title={t('Log Out')}>
			<Button onClick={onLogoutClick} icon="logout" type="ghost" shape="circle" />
		</Tooltip>
	);
};
