import React, { useEffect, useState } from 'react';
import validUrl from 'valid-url';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './Searchbar.css';

/*import { fetchData } from '../../utils/fetchData';*/


const Searchbar = () => {
  const [value, setValue] = useState("")
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  // const [isCopied, setIsCopied] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    if (value === "") {
      setResponse({ error: "Provide a valid URL" })
      setLoading(false)
    }
    else {
      try {
        const response = await fetch("https://pleasant-headscarf-newt.cyclic.app/api/url-shorten/create", {
          method: 'POST',
          // mode: 'cors', // no-cors, *cors, same-origin
          headers: {
            'auth-token': "",
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
            redirectUrl: value
          })
        })
        const jsonResponse = JSON.stringify(response)
        console.log("Hello: ", jsonResponse)
        console.log("Hello: ", response)
        setResponse({ ...jsonResponse })
        setLoading(false)
      } catch (error) {
        setResponse({ error: error })
        setLoading(false)
      }
    }
  }

  /*useEffect(() => {
    sessionStorage.setItem("response", JSON.stringify({...response}))
    sessionStorage.setItem("value", JSON.stringify(value))
  }, [response, value]);*/

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
            {loading ? "Loading.." : "Shorten It!"}
          </button>
        </div>
        {response?.error && (
          <div className="app__searchbar-error app__searchbar-response_wrapper">
            <h3 className="error-message">{response?.error}</h3>
          </div>
        )}
        {response?.data && (
          <div className="app__searchabar-success app__searchbar-response_wrapper">
            <div className="searchbar_success">
              <h2 className="success-text">{response?.data?.id}</h2>
            </div>
            <div className="copy-text">
              {/*<CopyToClipboard
                text={response.data.id}
                onCopy={() => setIsCopied(true)}
              >
                <button className="copy-button custom__button" type="button">
                  {isCopied ? "Copied" : "Copy"}
                </button>
              </CopyToClipboard>*/}
            </div>
          </div>
        )}
      </div>
      <div className="app__searchbar-right">
        <div className="right-gap" />
      </div>
    </div>
  );
}


export default Searchbar;
