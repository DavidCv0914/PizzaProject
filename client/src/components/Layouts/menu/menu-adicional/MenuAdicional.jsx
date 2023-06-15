import React,{ useEffect,useState } from "react";
import { getMenuAditional } from "../../../../api/api";

export const MenuAdicional = () => {

  const [loadMenu,setLoadMenu] = useState([]);

  useEffect(()=>{
    const loadInfo = async ()=>{
      const response = await getMenuAditional();
      setLoadMenu(response.data);
    }
    loadInfo();
  },[])

  return (
    <div className="Cmenu-adicional">
      {loadMenu.map((add)=>(
        <section className="Cmenu-card" key={add.id_adicional}>
        <div className="Cmenu-card__img">
          <img
            src={add.img}
            alt=""
          />
        </div>
        <div className="Cmenu-card__info">
          <h2>{add.nombre}</h2>
          <p>$ {add.precio}</p>
          <p>
            {add.description}
          </p>
          <button>Agregar</button>
        </div>
      </section>
      ))}
      
      {/* <section className="Cmenu-card">
        <div className="Cmenu-card__img">
          <img
            src="https://res.cloudinary.com/dtit8udfs/image/upload/v1686310283/perro-de-maiz_yzqy75.png"
            alt=""
          />
        </div>
        <div className="Cmenu-card__info">
          <h2>Mexicana</h2>
          <p>$ 32.000</p>
          <p>
            Salsa de Tomate, Queso Mozzarella, Carne Molida, Jalapeños, Cebolla,
            Pimientos, Tomate y Maíz Dulce
          </p>
          <button>Agregar</button>
        </div>
      </section>
      <section className="Cmenu-card">
        <div className="Cmenu-card__img">
          <img
            src="https://res.cloudinary.com/dtit8udfs/image/upload/v1686310341/cuerno_ysbcxo.png"
            alt=""
          />
        </div>
        <div className="Cmenu-card__info">
          <h2>Mexicana</h2>
          <p>$ 32.000</p>
          <p>
            Salsa de Tomate, Queso Mozzarella, Carne Molida, Jalapeños, Cebolla,
            Pimientos, Tomate y Maíz Dulce
          </p>
          <button>Agregar</button>
        </div>
      </section>
      <section className="Cmenu-card">
        <div className="Cmenu-card__img">
          <img
            src="https://res.cloudinary.com/dtit8udfs/image/upload/v1686310413/pastel_g5zxob.png"
            alt=""
          />
        </div>
        <div className="Cmenu-card__info">
          <h2>Mexicana</h2>
          <p>$ 32.000</p>
          <p>
            Salsa de Tomate, Queso Mozzarella, Carne Molida, Jalapeños, Cebolla,
            Pimientos, Tomate y Maíz Dulce
          </p>
          <button>Agregar</button>
        </div>
      </section>
      <section className="Cmenu-card">
        <div className="Cmenu-card__img">
          <img
            src="https://res.cloudinary.com/dtit8udfs/image/upload/v1686310431/pastel-de-carne_fwgjny.png"
            alt=""
          />
        </div>
        <div className="Cmenu-card__info">
          <h2>Mexicana</h2>
          <p>$ 32.000</p>
          <p>
            Salsa de Tomate, Queso Mozzarella, Carne Molida, Jalapeños, Cebolla,
            Pimientos, Tomate y Maíz Dulce
          </p>
          <button>Agregar</button>
        </div>
      </section>
      <section className="Cmenu-card">
        <div className="Cmenu-card__img">
          <img
            src="https://res.cloudinary.com/dtit8udfs/image/upload/v1686310468/tortita_rjzhti.png"
            alt=""
          />
        </div>
        <div className="Cmenu-card__info">
          <h2>Mexicana</h2>
          <p>$ 32.000</p>
          <p>
            Salsa de Tomate, Queso Mozzarella, Carne Molida, Jalapeños, Cebolla,
            Pimientos, Tomate y Maíz Dulce
          </p>
          <button>Agregar</button>
        </div>
      </section>
      <section className="Cmenu-card">
        <div className="Cmenu-card__img">
          <img
            src="https://res.cloudinary.com/dtit8udfs/image/upload/v1686310505/tortita_1_w3opsy.png"
            alt=""
          />
        </div>
        <div className="Cmenu-card__info">
          <h2>Mexicana</h2>
          <p>$ 32.000</p>
          <p>
            Salsa de Tomate, Queso Mozzarella, Carne Molida, Jalapeños, Cebolla,
            Pimientos, Tomate y Maíz Dulce
          </p>
          <button>Agregar</button>
        </div>
      </section>
      <section className="Cmenu-card">
        <div className="Cmenu-card__img">
          <img
            src="https://res.cloudinary.com/dtit8udfs/image/upload/v1686310525/mollete_hqn3n9.png"
            alt=""
          />
        </div>
        <div className="Cmenu-card__info">
          <h2>Mexicana</h2>
          <p>$ 32.000</p>
          <p>
            Salsa de Tomate, Queso Mozzarella, Carne Molida, Jalapeños, Cebolla,
            Pimientos, Tomate y Maíz Dulce
          </p>
          <button>Agregar</button>
        </div>
      </section>
      <section className="Cmenu-card">
        <div className="Cmenu-card__img">
          <img
            src="https://res.cloudinary.com/dtit8udfs/image/upload/v1686310393/galleta_y8zlwm.png"
            alt=""
          />
        </div>
        <div className="Cmenu-card__info">
          <h2>Mexicana</h2>
          <p>$ 32.000</p>
          <p>
            Salsa de Tomate, Queso Mozzarella, Carne Molida, Jalapeños, Cebolla,
            Pimientos, Tomate y Maíz Dulce
          </p>
          <button>Agregar</button>
        </div>
      </section> */}
    </div>
  );
};
