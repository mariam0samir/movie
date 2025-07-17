import React from 'react'
import './CastCard.css'
import { IMG_URL } from '../../Utils/URL';

export default function CastCard({ item }) {
  const { profile_path, original_name } = item;
  return (
    <div className="cast-card">
      <img src={`${IMG_URL}${profile_path}`} alt={original_name} />
      <h6 className="text-center text-white mt-3">{original_name}</h6>
    </div>
  );
}
