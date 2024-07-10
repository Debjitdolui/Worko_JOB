import React from "react";

const Footer = () => {
  return (
    <div className="d-flex fot flex-column flex-sm-row justify-content-between py-4 mt-4 border-top bg-body-tertiary ">
      <p>© 2024 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3">
          <a className="link-dark" href="#">
            <svg className="bi" width="24" height="24">
              <use xlinkHref="#twitter"></use>
            </svg>
          </a>
        </li>
        <li className="ms-3">
          <a className="link-dark" href="#">
            <svg className="bi" width="24" height="24">
              <use xlinkHref="#instagram"></use>
            </svg>
          </a>
        </li>
        <li className="ms-3">
          <a className="link-dark" href="#">
            <svg className="bi" width="24" height="24">
              <use xlinkHref="#facebook"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
