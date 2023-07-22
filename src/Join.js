import React, { useRef } from 'react';
import { useTranslation } from "react-i18next";
import './i18n'
import logo from './assets/logo-color.png';
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import questionMark from './assets/questionMark.png';

const Join = () => {
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        document.getElementById("confirmation").style.display="block"
        formRef.current.reset();
    }

    const resetForm = (event) => {
        document.getElementById("confirmation").style.display="none"
        
    }

    const { t, i18n } = useTranslation();

    const handleTrans = (code) => {
        i18n.changeLanguage(code);
      };


    return ( 
        <div>
          <ReactTooltip
        anchorId="tooltip-expected"
        place="bottom"
        variant="info"
        content= {t('expectedTooltip')}
        
      />

      <ReactTooltip
        anchorId="tooltip-position"
        place="bottom"
        variant="info"
        content={t('positionTooltip')}
        
      />

      <ReactTooltip
        anchorId="tooltip-zip"
        place="bottom"
        variant="info"
        content={t('zipTooltip')}
        
      />
      <nav className="navbar">
        <a href="/">
          <img src={logo} id="navbar-logo" alt="logo" />
        </a>
        <a href="/Categories">{t('categories')}</a>
        <a href="/Join">{t('join')}</a>
        <a href="/Help">{t('help')}</a>
        <a id="language" onClick={() => handleTrans(t('code'))}>
          <u>{t('code')}</u>
        </a>
      </nav>
      <div className="title">
        <form ref={formRef} onSubmit={handleSubmit}>
          <h3 className="join-title">{t('title')}</h3>
          <h4 className="step">{t('step1')}</h4>
          <div className="first-last-name">
            <div className="first-name-div">
              <label className="comment-label" htmlFor="first-name">
                {t('first_name')}
              </label>
              <br />
              <input required type="text" id="first-name" name="first-name" onChange={resetForm} /> 
              <br />
            </div>
            <div>
              <label className="comment-label" htmlFor="last-name">
                {t('last_name')}
              </label>
              <br />
              <input required type="text" id="last-name" name="last-name" onChange={resetForm} />
            </div>
          </div>
          <div className="birth-date">
            <div>
              <label className="comment-label" htmlFor="birthday">
                {t('birth_date')}
              </label>
              <br />
              <input required type="date" id="birthday" name="birthday" onChange={resetForm} />
            </div>
          </div>

          <h4 className="step">{t('step2')}</h4>
          <div className="country">
            <div>
              <label className="comment-label" htmlFor="country">
                {t('country')}
              </label>
              <br />
              <input required type="text" id="country" name="country" onChange={resetForm} />
            </div>
          </div>
          <div className="city-zip">
            <div className="first-name-div city-label">
              <label className="comment-label city-label" htmlFor="city">
                {t('city')}
              </label>
              <br />
              <input required type="text" id="city" name="city" onChange={resetForm} />
              <br />
            </div>
            <div>
              <label className="comment-label" htmlFor="Zip-Code">
                {t('zip')}
              </label>
              <br />
              <input maxLength="6" required type="text" id="Zip-Code" name="Zip-Code" onChange={resetForm} />
              <img src={questionMark} className="join-tooltip" id="tooltip-zip" alt="tooltip" />
            </div>
          </div>

          <h4 className="step">{t('step3')}</h4>
          <div className="expected-position">
            <div className="first-name-div">
              <label className="comment-label" htmlFor="expected">
                {t('salary')} (USD)
              </label>
              <br />
              <input required type="number" id="expected" name="expected" onChange={resetForm} />
              <img src={questionMark} className="join-tooltip" id="tooltip-expected" alt="tooltip" />
              <br />
            </div>
            <div>
              <label className="comment-label" htmlFor="position">
                {t('position')}
              </label>
              <br />
              <select name="position" id="position" onChange={resetForm}>
                <option value="Writer">{t('writer')}</option>
                <option value="Editor">{t('editor')}</option>
                <option value="Manager">{t('manager')}</option>
              </select> 
              <img src={questionMark} className="join-tooltip" id="tooltip-position" alt="tooltip" />
            </div>
          </div>
          <div className="email-resume">
            <div className="first-name-div">
              <label className="comment-label" htmlFor="email">
                {t('email')}
              </label>
              <br />
              <input placeholder="example@gmail.com" required type="email" id="email" name="email" onChange={resetForm} />
              <br />
            </div>
            <div>
              <label className="comment-label" htmlFor="resume">
                {t('resume')}
              </label>
              <br />
              <input required type="file" id="resume" name="resume" onChange={resetForm} />
            </div>
          </div>
          <b><input type="submit" id="submit-app" name={t('submit')} /></b>
          <div id="confirmation">
            <h3>{t('success')}</h3>
          </div>
        </form>
      </div>
    </div>
     );
}
 
export default Join ;