import React from "react";
import { useTranslation } from "react-i18next";

export default function HeaderComponent({ HeaderName }) {
	const { t } = useTranslation();

	return (
		<>
			<div className="header">{t(HeaderName)}</div>
			<div className="header-divider"></div>
		</>
	);
}