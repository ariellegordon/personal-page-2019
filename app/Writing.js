import React, { useEffect, useState } from 'react';
import db from './Firebase';

const Writing = () => {
  const [clips, setClips] = useState([]);
  useEffect(() => {
    async function fetchClips() {
      const myClips = await db.collection('writings').get();
      const clipArr = [];
      myClips.forEach(doc => {
        clipArr.push(doc.data());
      });
      setClips(clipArr);
    }
    fetchClips();
  }, []);

  return (
    <div className="main">
      {clips.length &&
        clips
          .filter(clip => clip.publication !== 'Pitchfork')
          .map((clip, idx) => (
            <div key={idx}>
              <h3>
                <em>{clip.publication}</em>
              </h3>
              <a href={clip.link} target="_blank">
                <p>{clip.title}</p>
              </a>
            </div>
          ))}
      {clips.length && (
        <h3>
          <em>Pitchfork</em>
        </h3>
      )}
      {clips.length &&
        clips
          .filter(clip => clip.publication === 'Pitchfork')
          .map((clip, idx) => (
            <div key={idx} className="multiple-clips">
              <a href={clip.link} target="_blank">
                <p>{clip.title}</p>
              </a>
            </div>
          ))}
    </div>
  );
};

export default Writing;
