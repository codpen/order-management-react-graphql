import React, { Suspense, useEffect } from 'react';
import { useQuery } from 'react-apollo';
import { Spinner, Callout } from '@blueprintjs/core';
import { hot } from 'react-hot-loader/root';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';

import { LoginForm } from './components/Login/LoginForm';
import { ME_QUERY } from './components/Login/queries';
import { MeQuery } from './__generated__/types';
import { CenteredWrapper } from './components/CenteredWrapper/CenteredWrapper';
import { useAppDispatch, useAppState } from './appContext/context';
import { MainWrapper } from './components/MainWrapper/MainWrapper';

const CenteredSpinner: React.FC = () => (
	<CenteredWrapper>
		<Spinner size={50} />
	</CenteredWrapper>
);

const App: React.FC = () => {
	const dispatch = useAppDispatch();
	const { currentUser } = useAppState();
	const { t, i18n } = useTranslation();

	const language = localStorage.getItem('default-language');
	useEffect(() => {
		i18n.changeLanguage(language || 'en');
	}, [language]);

	const { called, loading, error } = useQuery<MeQuery>(ME_QUERY, {
		onCompleted: (data) => {
			dispatch({ type: 'SET_CURRENT_USER', user: { ...data.me } });
		},
	});

	if (loading || !called) {
		return <CenteredSpinner />;
	}

	if (currentUser) {
		return (
			<Router>
				<MainWrapper />
			</Router>
		);
	}

	const hasBackendError =
		error?.networkError || error?.graphQLErrors[0].extensions?.code === 'INTERNAL_SERVER_ERROR';

	return (
		<Suspense fallback={<CenteredSpinner />}>
			{hasBackendError && (
				<Callout intent="danger">{t('Could not connect to the backend server')}</Callout>
			)}
			<LoginForm />
		</Suspense>
	);
};

export default process.env.NODE_ENV === 'production' ? App : hot(App);
