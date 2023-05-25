import { useState } from "react";
import OTP from "./OTP";

const Security = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">
          Two Factor Authentication (2FA) __ One Time Password (OTP)
        </p>
        <button
          className="rounded-md border py-2 px-4"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? (
            <button className="text-red-600">
              <i className="bi bi-unlock-fill"></i> Disable Two Factor
              Authentication
            </button>
          ) : (
            <button className="text-green-600">
              <i className="bi bi-lock-fill"></i> Enable Two Factor
              Authentication
            </button>
          )}
        </button>
      </div>
      <hr className="my-4" />
      {isVisible ? (
        <OTP />
      ) : (
        <div>
          <h4 className="text-xl mb-4 font-semibold">
            What is Two Factor Authentication (2FA)?
          </h4>
          <p className="mb-2">
            Two-Factor Authentication (2FA) adds an additional layer of security
            by requiring users to provide two different identification factors,
            such as a password and a physical device or biometric trait, to
            verify their identity for online accounts or systems.
          </p>
          <h4 className="text-xl mb-4 font-semibold">
            What is One Time Password (OTP)?
          </h4>
          <p className="mb-2">
            One-Time Passwords (OTPs) are unique and temporary passwords used as
            the second factor in Two-Factor Authentication. They are generated
            for each login attempt and are valid for a short time, delivered
            through SMS, mobile apps, email, or hardware tokens.
          </p>
          <h4 className="text-xl mb-4 font-semibold">
            Enabling Two-Factor Authentication is strongly advised for several
            reasons:
          </h4>
          <ul className="mb-2">
            <li className="ml-2 flex justify-start">
              <i className="bi bi-arrow-right-short"></i>
              <div className="mx-1"></div>
              <span>
                Two-Factor Authentication provides enhanced security by adding
                an extra layer of protection, making it harder for unauthorized
                individuals to access an account even with the password, thus
                reducing the risk of unauthorized access from various sources.
              </span>
            </li>
            <br />
            <li className="ml-2 flex justify-start">
              <i className="bi bi-arrow-right-short"></i>
              <div className="mx-1"></div>
              <span>
                Two-Factor Authentication adds an extra layer of security by
                requiring a second factor (e.g., OTP) along with a password,
                making it harder for attackers to gain access with stolen or
                compromised credentials.
              </span>
            </li>
            <br />
            <li className="ml-2 flex justify-start">
              <i className="bi bi-arrow-right-short"></i>
              <div className="mx-1"></div>
              <span>
                Two-Factor Authentication adds an extra layer of protection to
                online accounts, safeguarding sensitive information like
                personal data, financial details, and confidential documents
                from unauthorized access.
              </span>
            </li>
            <br />
            <li className="ml-2 flex justify-start">
              <i className="bi bi-arrow-right-short"></i>
              <div className="mx-1"></div>
              <span>
                Two-Factor Authentication, by demanding a second factor for
                identity verification, hinders malicious individuals from
                impersonating others and engaging in identity theft or fraud. It
                mitigates these risks effectively.
              </span>
            </li>
            <br />
            <li className="ml-2 flex justify-start">
              <i className="bi bi-arrow-right-short"></i>
              <div className="mx-1"></div>
              <span>
                In some industries or regulatory environments, Two-Factor
                Authentication is mandatory to meet security standards and legal
                obligations. Enabling it ensures compliance with industry and
                regulatory requirements.
              </span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Security;
