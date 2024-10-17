import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
	//I don't know why I need two of these, if I try to use one it doesn't work. Janky but this works.
	const { i18n } = useTranslation();
	const { t } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		togglePopup();
	};

	const [isPopupVisible, setPopupVisibility] = useState(false);

	const togglePopup = () => {
		setPopupVisibility(!isPopupVisible);
	};

	return (
		<>
			<button onClick={togglePopup} className="toggle-language-btn std-btn">
				{t("change-language")}
			</button>

			{isPopupVisible && (
				<div className="language-switch-container">
					<button
						onClick={() => changeLanguage("eng")}
						className="language-btn eng">
						<img
							src={process.env.PUBLIC_URL + "/assets/icons/EnglishFlag.png"}
							alt="EnglishFlag"
						/>
					</button>
					<button
						onClick={() => changeLanguage("nor")}
						className="language-btn nor">
						<img
							src={process.env.PUBLIC_URL + "/assets/icons/NorwayFlag.png"}
							alt="NorwayFlag"
						/>
					</button>
					<button
						onClick={() => changeLanguage("ita")}
						className="language-btn ita">
						<img
							src={process.env.PUBLIC_URL + "/assets/icons/ItalyFlag.png"}
							alt="ItalyFlag"
						/>
					</button>
					{/* <button onClick={togglePopup} className='toggle-language-btn'>Close</button> */}
				</div>
			)}
		</>
	);
}
