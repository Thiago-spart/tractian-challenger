/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/naming-convention */
import { useTranslation } from "next-i18next";

import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "@components/Button";

import type { FormDataProps } from "./types";

import * as S from "./styles";

const schema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required(),
	jobTitle: yup.string().required(),
	phoneNumber: yup.string().required(),
	machinesAmount: yup.string().required(),
});

export const HomeForm: React.FC = () => {
	const { t } = useTranslation("home");
	const { register, handleSubmit, reset } = useForm<FormDataProps>({
		resolver: yupResolver(schema),
	});

	const handleSendData: SubmitHandler<FormDataProps> = values => {
		console.log(values);

		reset();

		return toast("Formulário enviado com sucesso", { type: "success" });
	};

	return (
		<S.Container>
			<h2>{t("homeForm.title")}</h2>

			<p>{t("homeForm.subTitle")}</p>

			<S.FormContainer onSubmit={handleSubmit(handleSendData)}>
				<S.FormGroup>
					<label htmlFor="name">{t("homeForm.nameLabel.name")}</label>
					<input
						{...register("name")}
						id="name"
						placeholder={String(t("homeForm.nameLabel.placeholder"))}
					/>
				</S.FormGroup>

				<S.FormGroup>
					<label htmlFor="jobTitle">{t("homeForm.ruleLabel.name")}</label>
					<input
						{...register("jobTitle")}
						id="jobTitle"
						placeholder={String(t("homeForm.ruleLabel.placeholder"))}
					/>
				</S.FormGroup>

				<S.FormGroup>
					<label htmlFor="email">{t("homeForm.emailLabel.name")}</label>
					<input
						{...register("email")}
						id="email"
						placeholder={String(t("homeForm.emailLabel.placeholder"))}
					/>
				</S.FormGroup>

				<S.FormGroup>
					<label htmlFor="phoneNumber">{t("homeForm.phoneLabel.name")}</label>
					<input
						{...register("phoneNumber", { pattern: /[0-9]{3}-[0-9]{2}-[0-9]{3}/g })}
						id="phoneNumber"
						type="tel"
						placeholder="(XXX) XXXX-XXXX"
					/>
				</S.FormGroup>

				<S.RadioFormGroup>
					<span>{t("homeForm.monitorAmountLabel.description")}</span>
					<div>
						<input
							{...register("machinesAmount")}
							type="radio"
							id="ten-to-twenty"
							name="machinesAmount"
							value="ten-to-twenty"
						/>
						<label htmlFor="ten-to-twenty"> {t("homeForm.monitorAmountLabel.firstOption")}</label>
					</div>

					<div>
						<input
							{...register("machinesAmount")}
							type="radio"
							id="twenty-one-to-thirty"
							name="machinesAmount"
							value="twenty-one-to-thirty"
						/>
						<label htmlFor="twenty-one-to-thirty">
							{t("homeForm.monitorAmountLabel.secondOption")}
						</label>
					</div>

					<div>
						<input
							{...register("machinesAmount")}
							type="radio"
							id="thirty-one-to-fifth"
							name="machinesAmount"
							value="thirty-one-to-fifth"
						/>
						<label htmlFor="thirty-one-to-fifth">
							{t("homeForm.monitorAmountLabel.thirdOption")}
						</label>
					</div>

					<div>
						<input
							{...register("machinesAmount")}
							type="radio"
							id="more-than-fifth"
							name="machinesAmount"
							value="more-than-fifth"
						/>
						<label htmlFor="more-than-fifth">
							{" "}
							{t("homeForm.monitorAmountLabel.fourthOption")}
						</label>
					</div>
				</S.RadioFormGroup>

				<Button type="submit">{t("homeForm.buttonMessage")}</Button>
			</S.FormContainer>
		</S.Container>
	);
};
