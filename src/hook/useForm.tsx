import { useState } from 'react';

export function useForm<TForm>(inputValues: TForm) {
	const [form, setForm] = useState<TForm>(inputValues);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.target;
		setForm({ ...form, [name]: value });
	};

	const handleInputEdit = (name: string) => {
		setForm({
			...form,
			[name]: undefined,
		});
	};

	const handleNameEdit = (name: string, value: string) => {
		setForm({
			...form,
			[name]: value,
		});
	};

	return { form, handleInputChange, handleInputEdit, handleNameEdit, setForm };
}
