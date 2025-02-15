
import { useEffect, useRef, useState } from 'react';
import InputMask from 'react-input-mask';
import s from './phone-input.module.scss';
import {ReactComponent as Arrow} from './assets/arrow.svg'
import clsx from 'clsx';

interface Country {
  label: string;
  short: string;
  code: string;
  mask: string;
}

const countries: Country[] = [
  { label: 'Россия', short: 'РФ', code: '+7',   mask: '+7 (999) 999-99-99' },
  { label: 'Беларусь', short: 'РБ', code: '+375', mask: '+375 (99) 999-99-99' },
  { label: 'Казахстан', short: 'РК', code: '+7',  mask: '+7 (999) 999-99-99' },
];

type TPhoneInput = {
	value: string,
	onChange: (value: string) => void
}

export function PhoneInput ({value, onChange}:TPhoneInput) {
	const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
	const [phoneValue, setPhoneValue] = useState('');
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const dropdownRef = useRef<HTMLDivElement>(null);

	// Закрываем dropdown, если клик вне его области
	useEffect(() => {
	  document.addEventListener('mousedown', handleClickOutside);
	  return () => {
		document.removeEventListener('mousedown', handleClickOutside);
	  };
	}, []);

	useEffect(() => {
		onChange(phoneValue)
	},[phoneValue])

	function handleClickOutside(event: MouseEvent) {
		if (
		  dropdownRef.current &&
		  !dropdownRef.current.contains(event.target as Node)
		) {
		  setDropdownOpen(false);
		}
	  }

	const toggleDropdown = () => {
	  setDropdownOpen((prev) => !prev);
	};

	const handleSelectCountry = (country: Country) => {
	  setSelectedCountry(country);
	  setPhoneValue(''); // Сброс номера при смене кода страны
	  setDropdownOpen(false);
	};

	const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	  setPhoneValue(event.target.value);
	};

	return (
	  <div className={s.container}>
		<label htmlFor="phone-input" title='Номер телефона'></label>

		<div className={s.input_container}>
		  {/* Кастомный селект */}
		  <div className={s.cuntry_container} ref={dropdownRef} onClick={toggleDropdown}>
			{/* Текущее выбранное значение */}
			<div className={clsx(s.short, dropdownOpen && s.active)}>
			  <p>{selectedCountry.short}</p>
			  <Arrow/>
			</div>
			{/* Выпадающий список */}
			{dropdownOpen && (
			  <ul className={s.select_country}>
				{countries.map((country) => (
				  <li key={country.short} onClick={() => {handleSelectCountry(country); toggleDropdown();}} >
					<p>{country.label} <span>{country.code}</span></p>
				  </li>
				))}
			  </ul>
			)}
		  </div>

		  {/* Инпут с маской для номера */}
		  <InputMask
			mask={selectedCountry.mask}
			value={phoneValue}
			onChange={handlePhoneChange}
		  >
			{(inputProps: any) => (
			  <input {...inputProps} id="phone-input" type="tel" placeholder="Номер телефона" />
			)}
		  </InputMask>
		</div>
	  </div>
	);
};

