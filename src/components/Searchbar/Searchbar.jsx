import React, { useEffect, useState } from 'react';
import validUrl from 'valid-url';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './Searchbar.css';

import { fetchData } from '../../utils/fetchData';


const Searchbar = () => {
  const [value, setValue] = useState(() => {
    const savedValue = sessionStorage.getItem("value")
    const initialValue = JSON.parse(savedValue)
    return initialValue || ""
  })
  const [response, setResponse] = useState(() => {
    const savedResponse = sessionStorage.getItem("response")
    const initialResponse = JSON.parse(savedResponse)
    return initialResponse || {}
  })
  const [isCopied, setIsCopied] = useState(false)

  const handleClick = async () => {
    if (value === "") setResponse({ error: "The input field is empty" })
    else {
      if (validUrl.isUri(value)) {
        const data = await fetchData(value);
        if (data.error) setResponse({ error: data.error.message })
        else setResponse({ data })
      }
      else setResponse({ error: "Enter a valid url" });
    }
    
  }

  useEffect(() => {
    sessionStorage.setItem("response", JSON.stringify({...response}))
    sessionStorage.setItem("value", JSON.stringify(value))
  }, [response, value]);


  return (
    <div className="app__searchbar" id="search">
      <div className="app__searchbar-left">
        <div className="left-gap" />
      </div>
      <div className="app__searchform" style={{ margin: "2rem 0" }}>
        <div className="app__searchbar_wrapper">
          <input
            className="app__input"
            type="text"
            value={value}
            placeholder="Shorten URL here"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="app__search-button"
            type="button"
            onClick={handleClick}
          >
            Shorten It!
          </button>
        </div>
        {response.error ? (
          <div className="app__searchbar-error app__searchbar-response_wrapper">
            <h3 className="error-message">{response.error}</h3>
          </div>
        ) : null}
        {response.data ? (
          <div className="app__searchabar-success app__searchbar-response_wrapper">
            <div className="searchbar_success">
              <h2 className="success-text">{response.data.id}</h2>
            </div>
            <div className="copy-text">
              <CopyToClipboard
                text={response.data.id}
                onCopy={() => setIsCopied(true)}
              >
                <button className="copy-button custom__button" type="button">
                  {isCopied ? "Copied" : "Copy"}
                </button>
              </CopyToClipboard>
            </div>
          </div>
        ) : null}
      </div>
      <div className="app__searchbar-right">
        <div className="right-gap" />
      </div>
    </div>
  );
}


export default Searchbar;
