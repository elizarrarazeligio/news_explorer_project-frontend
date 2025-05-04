import "@/styles/form.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { inter } from "@/vendor/fonts";

export default function Register() {
  const [data, setData] = useState({
    email: "" as string,
    password: "" as string,
    username: "" as string,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form
      className={`modal__form form ${inter.className} flex flex-col`}
      noValidate
      onSubmit={handleSubmit}
      action=""
    >
      <fieldset className="form__fieldset flex flex-col">
        <label className="form__label flex flex-col">
          Correo electrónico
          <input
            id="email-input"
            type="email"
            className="form__input"
            name="email"
            minLength={2}
            maxLength={30}
            value={data.email}
            placeholder="Introduce tu correo electrónico"
            required
            onChange={handleChange}
          />
        </label>
        <span className="form__input-error email-input-error"></span>

        <label className="form__label">
          Contraseña
          <input
            id="password-input"
            type="password"
            className="form__input"
            name="password"
            minLength={2}
            maxLength={30}
            value={data.password}
            placeholder="Introduce contraseña"
            required
            onChange={handleChange}
          />
        </label>
        <span className="form__input-error password-input-error"></span>

        <label className="form__label">
          Nombre de usuario
          <input
            id="username-input"
            type="text"
            className="form__input"
            name="username"
            minLength={2}
            maxLength={30}
            value={data.username}
            placeholder="Introduce tu nombre de usuario"
            required
            onChange={handleChange}
          />
        </label>
        <span className="form__input-error username-input-error"></span>
      </fieldset>
      <button className="form__button rounded-full font-medium" type="submit">
        Inscribirse
      </button>
    </form>
  );
}
