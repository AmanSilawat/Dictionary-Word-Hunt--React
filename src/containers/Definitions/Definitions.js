import React from 'react';
import './Definitions.css';

const Definitions = ({
    word,
    meanings,
    category,
    light_mode
}) => {
    // console.log('meanings[0].phonetics[0].audio', meanings[0].phonetics[0].audio);
    console.log('meanings[0]', meanings[0]);
    console.log('word', word);
    console.log('category', category);
    return (
        <div className='meaning'>
            {
                meanings[0] && word && category === 'en' && (
                    <>
                        <audio src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} controls>
                            Your Browser doesn't support audio element.
                        </audio>
                    </>
                )

            }
            {
                word === ''
                    ? (<span className="sub_title">Start by typing a word in Search.</span>)
                    : (
                        meanings.map((mean) => (
                            mean.meanings.map((item) => (
                                item.definitions.map((def) => (
                                    <div className="single_mean">
                                        <b>{def.definition}</b>
                                        <hr />
                                        {
                                            def.example && (
                                                <span>
                                                    <b>Example : </b>
                                                    {def.example}
                                                </span>
                                            )
                                        }
                                        {
                                            def.synonyms && (
                                                <span>
                                                    <b>Synonyms : </b>
                                                    {def.synonyms.map((s) => (
                                                        `${s}, `
                                                    ))}
                                                </span>
                                            )
                                        }
                                    </div>
                                ))
                            ))
                        ))
                    )
            }
        </div>
    )
}

export default Definitions
