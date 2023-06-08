import React from "react";

export const MenuLateral = () => {
  return (
    <div className="Cmenu-lateral">
      <div>
        <button>Pizza</button>
            <div className="Cmenu-lateral__personalizada">
                <button>Carnes</button>
                <button>Quesos</button>
                <button>Salsas</button>
                <button>Vegetales</button>
                <button>Aderezos</button>
            </div>
        <button>Bebidas</button>
        <button>Adicionales</button>
      </div>
      <div>
        <button>Comprar</button>
      </div>
    </div>
  );
};
