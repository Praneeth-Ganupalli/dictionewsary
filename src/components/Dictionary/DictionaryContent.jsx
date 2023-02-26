import React, { useEffect } from "react";
import "./Dictionary.css";
import DictionaryMeanings from "./DictionaryMeanings";
import { DICTIONARY_FETCH_URL } from "../../utils/constants";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import axios from "axios";
function DictionaryContent() {
  const [searchKw, setSearchKw] = React.useState("");
  const [curMeaning, setCurrentMeaning] = React.useState(null);
  const [isLoading, setLoading] = React.useState(false);
  const [isError, setError] = React.useState(false);
  useEffect(() => {
    const fetchMeanings = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await axios.get(`${DICTIONARY_FETCH_URL}/${searchKw}`);
        const { data } = response;
        if (data && data.length) {
          const [finalResponse] = data;
          const formattedResponse = {};
          formattedResponse.audio = finalResponse.phonetics[0]?.audio || null;
          formattedResponse.meanings = finalResponse.meanings;
          formattedResponse.synonyms = finalResponse.meanings
            .flatMap((mean) => mean.synonyms)
            .slice(0, 5);
          formattedResponse.antonyms = finalResponse.meanings
            .flatMap((mean) => mean.antonyms)
            .slice(0, 5);
          formattedResponse.wordUrl = finalResponse.sourceUrls[0];
          setCurrentMeaning(formattedResponse);
        }
      } catch (er) {
        console.log(er, "err");
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    if (searchKw) {
      const getMeanings = setTimeout(fetchMeanings, 500);
      return () => clearTimeout(getMeanings);
    }
  }, [searchKw]);
  return (
    <div className="dict-main-container">
      <h3 className="text-white  text-center fs-1 text-capitalize">
        {searchKw ? searchKw : "Word Explorer"}
      </h3>
      <Link to="/" className="text-decoration-none">
      <h3 className="text-white  text-end me-5 back-to-home fs-6 text-capitalize">
        Back to Home
      </h3>
      </Link>
      <div className="container">
        <section className="form-group mt-4 d-flex text-white flex-column kw-search-section">
          <label className="mb-3"> Search Your Keyword</label>
          <input
            type="text"
            className="kw-input"
            value={searchKw}
            onChange={(e) => {
              setSearchKw(e.target.value);
            }}
          />
        </section>
        <section className="meaning-section mt-5">
          {isLoading && (
            <section className="text-center">
              <Loader />
            </section>
          )}
          {!isLoading && (
            <DictionaryMeanings
              word={searchKw}
              meaningsData={curMeaning}
              isError={isError}
            />
          )}
        </section>
      </div>
    </div>
  );
}

export default DictionaryContent;
