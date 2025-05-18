import "@/styles/form.css";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { inter } from "@/vendor/fonts";
import { authApi } from "@/utils/AuthApi";
import { toast } from "react-toastify";
import { setToken } from "@/utils/token";
import { CurrentUserContext } from "@/contexts/CurrentUserContext";

export default function Login() {
  const userContext = useContext(CurrentUserContext);

  const [data, setData] = useState({
    email: "" as string,
    password: "" as string,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    authApi
      .login(data.email, data.password)
      .then((res) => {
        if (res.token) {
          userContext?.setCurrentUser(res.data);
          setToken(res.token);
          toast.success(res.message);

          setTimeout(() => {
            window.location.href = "/saved-news";
          }, 1000);
        }
      })
      .catch((err) => toast.error(err.message));
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
      </fieldset>
      <button className="form__button rounded-full font-medium" type="submit">
        Iniciar sesión
      </button>
    </form>
  );
}
