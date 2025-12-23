import React from "react";

export default function EmptyMenuAdmin({ onClick }) {
  return (
    <div>
      <span>Aucun produit dans le menu</span>
      <button onClick={onClick}>Réinitialiser le menu</button>
    </div>
  );
}
