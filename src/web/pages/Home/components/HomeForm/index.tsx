import { useTranslation } from "next-i18next";

import { Primary } from "../../../../components/Button/Primary";

import { Container, Title, FormContainer, FormGroup } from "./styles";

export const HomeForm: React.FC = () => {
	const { t } = useTranslation("home");

	return (
		<Container>
			<Title>{t("homeForm.title")}</Title>

			<p>{t("homeForm.subTitle")}</p>

			<FormContainer>
				<FormGroup>
					<label htmlFor="name">
						{t("homeForm.nameLabel.name")}
						<input name="name" type="text" placeholder={t("homeForm.nameLabel.placeholder")} />
					</label>
				</FormGroup>

				<FormGroup>
					<label htmlFor="position">
						{t("homeForm.ruleLabel.name")}
						<input type="text" name="position" placeholder={t("homeForm.ruleLabel.placeholder")} />
					</label>
				</FormGroup>

				<FormGroup>
					<label htmlFor="email">
						{t("homeForm.emailLabel.name")}
						<input type="email" name="email" placeholder={t("homeForm.emailLabel.placeholder")} />
					</label>
				</FormGroup>

				<FormGroup>
					<label htmlFor="clientPhone">
						{t("homeForm.phoneLabel.name")}
						<input
							type="tel"
							name="phone"
							placeholder="(XXX) XXXX-XXXX"
							pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
						/>
					</label>
				</FormGroup>

				<FormGroup>
					<span>{t("homeForm.monitorAmountLabel.description")}</span>
					<input type="checkbox" name="ten-to-twenty" />
					<label htmlFor="ten-to-twenty"> {t("homeForm.monitorAmountLabel.firstOption")}</label>

					<input type="checkbox" name="twenty-one-to-thirty" />
					<label htmlFor="twenty-one-to-thirty">
						{t("homeForm.monitorAmountLabel.secondOption")}
					</label>

					<input type="checkbox" name="thirty-one-to-fifth" />
					<label htmlFor="thirty-one-to-fifth">
						{t("homeForm.monitorAmountLabel.thirdOption")}
					</label>

					<input type="checkbox" name="more-than-fifth" />
					<label htmlFor="more-than-fifth"> {t("homeForm.monitorAmountLabel.fourthOption")}</label>
				</FormGroup>

				<Primary message={t("homeForm.buttonMessage")} />
			</FormContainer>
		</Container>
	);
};
