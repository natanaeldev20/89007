const TermsAndPrivacyAgreement = () => {
  return (
    <div className="w-full flex items-center gap-2 mb-12">
      <input type="checkbox" name="terminos-condiciones" required />
      <label>
        He leído y acepto los{" "}
        <a
          href="/terminos-y-condiciones-de-uso"
          target="_blank"
          className="underline text-89007 transition-all duration-200 hover:text-yellow-400"
        >
          términos y condiciones
        </a>{" "}
        y las{" "}
        <a
          href="/politicas-de-privacidad"
          className="underline text-89007 transition-all duration-200 hover:text-yellow-400"
          target="_blank"
        >
          políticas de privacidad.
        </a>
      </label>
    </div>
  );
};

export default TermsAndPrivacyAgreement;
